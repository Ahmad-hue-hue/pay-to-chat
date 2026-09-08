'use client';

import { useEffect, useRef } from 'react';

export type CardBrand = 'visa' | 'mastercard' | 'amex' | 'discover' | 'unknown';

export const BRAND_ICON: Record<CardBrand, string> = {
  visa: 'fa-brands fa-cc-visa',
  mastercard: 'fa-brands fa-cc-mastercard',
  amex: 'fa-brands fa-cc-amex',
  discover: 'fa-brands fa-cc-discover',
  unknown: 'fa-solid fa-credit-card',
};

export function detectBrand(digits: string): CardBrand {
  if (/^4/.test(digits)) return 'visa';
  if (/^3[47]/.test(digits)) return 'amex';
  if (/^(5[1-5]|2[2-7])/.test(digits)) return 'mastercard';
  if (/^6(?:011|5)/.test(digits)) return 'discover';
  return 'unknown';
}

export function maxCardLength(brand: CardBrand) {
  return brand === 'amex' ? 15 : 16;
}

interface PaymentCardProps {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
  flipped: boolean;
  brand: CardBrand;
}

/**
 * The checkout payment card (§6, §2 rules).
 *
 * The 3D treatment mirrors Originkit's `interactive-grid` technique — a
 * pointer-reactive rotateX/rotateY lift driven by a rAF spring (lerp, zero
 * deps) inside a `perspective` container, plus a translateZ pop and a parallax
 * floor shadow so the card visibly sits above the page. At rest it idles on a
 * slow 3D float instead of going flat, so it reads as a physical object even
 * before it is touched. A second preserve-3d layer handles the 180° Y-axis
 * flip to reveal the CVV when its field is focused.
 */
export default function PaymentCard({
  number,
  name,
  expiry,
  cvv,
  flipped,
  brand,
}: PaymentCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const pointerActive = useRef(false);
  const target = useRef({ rx: 0, ry: 0, tx: 0, ty: 0 });
  const current = useRef({ rx: 0, ry: 0, tx: 0, ty: 0 });

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const now = performance.now() / 1000;

      if (!pointerActive.current) {
        target.current = {
          rx: Math.sin(now * 0.8) * 2.5,
          ry: Math.cos(now * 0.6) * 3.5,
          tx: 0,
          ty: 0,
        };
      }

      const c = current.current;
      const t = target.current;
      const k = 0.12;
      c.rx += (t.rx - c.rx) * k;
      c.ry += (t.ry - c.ry) * k;
      c.tx += (t.tx - c.tx) * k;
      c.ty += (t.ty - c.ty) * k;

      const card = cardRef.current;
      if (card) {
        card.style.transform = `translate3d(${c.tx.toFixed(2)}px, ${c.ty.toFixed(
          2
        )}px, 72px) rotateX(${c.rx.toFixed(2)}deg) rotateY(${c.ry.toFixed(2)}deg)`;
      }

      const shadow = shadowRef.current;
      if (shadow) {
        const depth = Math.min(1, (Math.abs(c.rx) + Math.abs(c.ry)) / 24);
        shadow.style.opacity = String(0.55 - depth * 0.18);
        shadow.style.transform = `translateX(-50%) translateX(${(c.tx * -0.6).toFixed(
          2
        )}px) translateY(${(14 + depth * 10).toFixed(2)}px) scaleX(${(1 - depth * 0.12).toFixed(
          3
        )})`;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    pointerActive.current = true;
    target.current = {
      rx: (py - 0.5) * -18,
      ry: (px - 0.5) * 24,
      tx: (px - 0.5) * -10,
      ty: (py - 0.5) * -8,
    };

    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(260px circle at ${(
        px * 100
      ).toFixed(1)}% ${(py * 100).toFixed(1)}%, rgba(52, 211, 153, 0.38), transparent 68%)`;
    }
  };

  const onPointerLeave = () => {
    pointerActive.current = false;
    if (glowRef.current) {
      glowRef.current.style.background = 'transparent';
    }
  };

  const grouped = number || '•••• •••• •••• ••••';
  const holder = name || 'YOUR NAME';
  const expires = expiry || 'MM/YY';

  return (
    <div style={{ perspective: 1200 }} className="w-full">
      <div
        ref={cardRef}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className="relative aspect-[1.586/1] w-full max-w-[380px] mx-auto cursor-pointer select-none"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {/* glow layer */}
        <div
          ref={glowRef}
          className="absolute -inset-7 rounded-[34px] pointer-events-none"
          style={{ transition: 'background 200ms linear' }}
        />

        {/* flip layer */}
        <div
          className="absolute inset-0"
          style={{
            transform: `rotateY(${flipped ? 180 : 0}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 500ms cubic-bezier(.4,.2,.2,1)',
          }}
        >
          {/* FRONT */}
          <div
            className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 text-white shadow-2xl"
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          >
            <div className="flex items-start justify-between">
              <div className="h-9 w-12 rounded-md bg-gradient-to-br from-amber-200 to-amber-400 relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                  {[0, 1, 2, 3].map((i) => (
                    <span key={i} className="border-b border-amber-500/40" />
                  ))}
                </div>
              </div>
              <i
                className={`${BRAND_ICON[brand]} text-3xl ${
                  brand === 'unknown'
                    ? 'text-slate-400'
                    : 'text-slate-100 drop-shadow'
                }`}
                aria-hidden="true"
              />
            </div>

            <p className="mt-6 font-mono text-lg tracking-[0.18em] tabular-nums font-semibold">
              {grouped}
            </p>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-[0.6rem] uppercase tracking-widest text-slate-400">
                  Card holder
                </p>
                <p className="text-sm font-medium tracking-wide">
                  {holder.toUpperCase()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[0.6rem] uppercase tracking-widest text-slate-400">
                  Expires
                </p>
                <p className="text-sm font-medium tabular-nums">{expires}</p>
              </div>
            </div>
          </div>

          {/* BACK */}
          <div
            className="absolute inset-0 rounded-2xl border border-white/10 bg-slate-800 text-white shadow-2xl overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="mt-5 h-10 w-full bg-slate-950" />
            <div className="px-5 pt-5">
              <div className="flex items-center justify-end gap-3">
                <div className="h-9 w-full max-w-[60%] rounded bg-slate-100 flex items-center justify-end pr-3">
                  <span className="font-mono text-sm text-slate-900 tabular-nums font-semibold">
                    {cvv || '•••'}
                  </span>
                </div>
                <span className="text-[0.6rem] uppercase tracking-widest text-slate-400">
                  CVV
                </span>
              </div>
              <p className="mt-6 text-[0.65rem] leading-relaxed text-slate-400">
                This card is issued solely for demonstration purposes. Your
                payment is encrypted end to end.
              </p>
            </div>
          </div>
        </div>

        {/* parallax floor shadow */}
        <div
          ref={shadowRef}
          className="pointer-events-none absolute -bottom-9 left-1/2 h-6 w-[86%] bg-black/60 blur-xl rounded-full"
          style={{ transform: 'translateX(-50%)' }}
        />
      </div>
    </div>
  );
}