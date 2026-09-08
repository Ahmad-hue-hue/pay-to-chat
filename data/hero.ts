/**
 * Homepage hero content.
 *
 * In the export the headline was split into one <span> per character to drive
 * Framer's text-reveal animation. Here it stays a plain string — the Reveal
 * component does the splitting at render time, so you edit normal sentences.
 */

export interface HeroStat {
  value: string;
  /** Rendered immediately after the value, e.g. the "+" in "50+". */
  suffix?: string;
  label: string;
}

export interface HeroContent {
  badge: {
    text: string;
    starsIcon: string;
    avatarIcon: string;
  };
  heading: string;
  subheading: string;
  primaryCta: { label: string; href: string };
  note: { text: string; icon: string };
  stats: HeroStat[];
  marquee: {
    title: string;
    /** Font Awesome brand icons rendered in the looping strip (§2 — FA only). */
    brands: { icon: string; label: string }[];
  };
  background: {
    pattern: string;
    lightLeft: string;
    lightRight: string;
  };
}

export const hero: HeroContent = {
  badge: {
    text: 'Trusted by 2,400+ merchants',
    starsIcon: '/assets/media/InL2lTTFiMLfaRpROnHZUbLtMKE.svg',
    avatarIcon: '/assets/media/WxkrmjQWjYAfP1IM3c93O6EITAc.svg',
  },

  heading: 'Turn WhatsApp chats into paid orders',
  subheading:
    'Chat-to-Pay gives your customers a secure hosted checkout the moment they ask to buy — no app, no account, no friction.',

  primaryCta: { label: 'Start accepting payments', href: '/login' },

  note: {
    text: 'PCI-compliant hosted checkout. No coding required.',
    icon: '/assets/media/Q4pdwonAT329eMKcy1U33qS8WY.svg',
  },

  stats: [
    { value: '150', suffix: 'k+', label: 'Orders placed' },
    { value: '98', suffix: '%', label: 'Payments settled' },
    { value: '2.4', suffix: 'k+', label: 'Active merchants' },
    { value: '30', suffix: ' min', label: 'Average setup' },
  ],

  marquee: {
    title: 'Charge every major payment method',
    brands: [
      { icon: 'fa-brands fa-whatsapp', label: 'WhatsApp' },
      { icon: 'fa-brands fa-cc-visa', label: 'Visa' },
      { icon: 'fa-brands fa-cc-mastercard', label: 'Mastercard' },
      { icon: 'fa-brands fa-cc-amex', label: 'American Express' },
      { icon: 'fa-brands fa-cc-apple-pay', label: 'Apple Pay' },
      { icon: 'fa-brands fa-cc-paypal', label: 'PayPal' },
      { icon: 'fa-brands fa-cc-stripe', label: 'Stripe' },
      { icon: 'fa-brands fa-cc-amazon-pay', label: 'Amazon Pay' },
    ],
  },

  background: {
    pattern: '/assets/media/BtlaHSBVpP1o4SpXdJy2V9cdWF0.png',
    lightLeft: '/assets/media/uYkLP5SiUycWQryE3EWbrjbhiE.svg',
    lightRight: '/assets/media/OEy9gAODlW0zXdPu7Uts9Eeyk.svg',
  },
};