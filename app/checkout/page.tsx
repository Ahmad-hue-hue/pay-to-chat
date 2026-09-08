import type { Metadata } from 'next';

import CheckoutScreen from '@/components/app/checkout-screen';

export const metadata: Metadata = {
  title: 'Checkout',
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return <CheckoutScreen />;
}