import type { Metadata } from 'next';

import Hero from '@/components/sections/contact/Hero';
import Support from '@/components/sections/contact/Support';
import DigitalPresence from '@/components/sections/contact/DigitalPresence';
import Faq from '@/components/sections/contact/Faq';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get merchant support over WhatsApp or email hello@chattopay.example. Onboarding help, orders, payouts and settlement questions, all answered fast.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us',
    description:
      'Get merchant support over WhatsApp or email hello@chattopay.example. Onboarding help, orders, payouts and settlement questions, all answered fast.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Hero />
      <div className="pageShell">
        <Support />
        <DigitalPresence />
        <Faq />
      </div>
    </>
  );
}
