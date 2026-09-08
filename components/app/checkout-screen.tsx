'use client';

import { useState } from 'react';

import PaymentCard, {
  detectBrand,
  BRAND_ICON,
  type CardBrand,
} from './payment-card';
import { fmtMoney } from './mock-data';

const lines = [
  { name: 'Air Zoom Everyday', qty: 1, price: 120.0 },
  { name: 'Canvas Tote', qty: 1, price: 32.0 },
];
const shipping = 0;
const total = lines.reduce((s, l) => s + l.price * l.qty, 0) + shipping;

export default function CheckoutScreen() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cvvFocused, setCvvFocused] = useState(false);
  const [settled, setSettled] = useState(false);

  const brand: CardBrand = detectBrand(number);

  const onNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 16);
    const grouped = digits.match(/.{1,4}/g)?.join(' ') ?? '';
    setNumber(grouped);
  };

  const onExpiry = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    setExpiry(
      digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits
    );
  };

  const onCvv = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    setCvv(digits);
  };

  return (
    <div className="min-h-dvh bg-base-100 text-base-content">
      <div className="mx-auto max-w-md px-4 py-10">
        <div className="flex items-center justify-center gap-2 text-lg mb-8">
          <i className="fa-brands fa-whatsapp text-primary text-2xl" aria-hidden="true" />
          <span className="font-semibold tracking-tight">Chat to Pay</span>
        </div>

        <div className="card bg-base-200 border border-base-300 shadow-xl">
          <div className="card-body gap-0">
            <h1 className="card-title text-lg font-semibold">Your order</h1>

            <ul className="mt-3 flex flex-col gap-2">
              {lines.map((line) => (
                <li
                  key={line.name}
                  className="flex items-center justify-between gap-4 text-sm"
                >
                  <span>
                    {line.name}{' '}
                    <span className="text-base-content/50">× {line.qty}</span>
                  </span>
                  <span className="tabular-nums">
                    {fmtMoney(line.price * line.qty)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="divider my-3" />

            <div className="flex items-center justify-between text-sm text-base-content/60">
              <span>Shipping</span>
              <span className="tabular-nums">{shipping === 0 ? 'Free' : fmtMoney(shipping)}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-medium">Total</span>
              <span className="text-2xl font-semibold tabular-nums">
                {fmtMoney(total)}
              </span>
            </div>

            <div className="divider my-4" />

            <PaymentCard
              number={number}
              name={name}
              expiry={expiry}
              cvv={cvv}
              flipped={cvvFocused}
              brand={brand}
            />

            <form
              className="form-control gap-3 mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSettled(true);
              }}
            >
              <label className="form-control gap-1">
                <span className="label-text text-sm text-base-content/70">
                  Card number
                </span>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    className="grow tabular-nums font-mono"
                    inputMode="numeric"
                    autoComplete="cc-number"
                    placeholder="1234 5678 9012 3456"
                    value={number}
                    onChange={(e) => onNumber(e.target.value)}
                    required
                  />
                  <i
                    className={`${BRAND_ICON[brand]} ${
                      brand === 'unknown' ? 'text-base-content/30' : 'text-base-content/80'
                    } text-xl`}
                    aria-hidden="true"
                  />
                </label>
              </label>

              <label className="form-control gap-1">
                <span className="label-text text-sm text-base-content/70">
                  Card holder
                </span>
                <label className="input input-bordered flex items-center gap-2">
                  <i className="fa-solid fa-user text-base-content/40" aria-hidden="true" />
                  <input
                    className="grow"
                    autoComplete="cc-name"
                    placeholder="Name on card"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
              </label>

              <div className="grid grid-cols-2 gap-3">
                <label className="form-control gap-1">
                  <span className="label-text text-sm text-base-content/70">
                    Expiry
                  </span>
                  <input
                    className="input input-bordered tabular-nums"
                    inputMode="numeric"
                    autoComplete="cc-exp"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => onExpiry(e.target.value)}
                    required
                  />
                </label>
                <label className="form-control gap-1">
                  <span className="label-text text-sm text-base-content/70">
                    CVV
                  </span>
                  <input
                    className="input input-bordered tabular-nums"
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    placeholder="•••"
                    value={cvv}
                    onFocus={() => setCvvFocused(true)}
                    onBlur={() => setCvvFocused(false)}
                    onChange={(e) => onCvv(e.target.value)}
                    required
                  />
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-block mt-2 gap-2">
                {settled ? (
                  <>
                    <i className="fa-solid fa-circle-check" aria-hidden="true" />
                    Payment confirmed
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-lock" aria-hidden="true" />
                    Pay {fmtMoney(total)}
                  </>
                )}
              </button>
            </form>

            <p className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
              <i className="fa-solid fa-lock" aria-hidden="true" />
              Secured payment · encrypted end to end
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}