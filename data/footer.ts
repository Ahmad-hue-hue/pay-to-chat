/**
 * Footer call-to-action copy.
 *
 * The headline is split into parts so you can pick out phrases in the brand
 * accent colour without touching JSX — set `accent: true` on any part.
 */

export interface HeadlinePart {
  text: string;
  accent?: boolean;
}

export interface FooterCta {
  eyebrow: string;
  headline: HeadlinePart[];
  button: { label: string; href: string };
}

export const footerCta: FooterCta = {
  eyebrow: 'Ready when you are',
  headline: [
    { text: 'Start selling ' },
    { text: 'over WhatsApp', accent: true },
    { text: ' in ' },
    { text: 'minutes, not weeks.', accent: true },
  ],
  button: {
    label: 'Create your store',
    href: '/login',
  },
};