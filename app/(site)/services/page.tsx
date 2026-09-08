import type { Metadata } from 'next';

import Hero from '@/components/sections/services/Hero';
import Expertise from '@/components/sections/services/Expertise';
import ServicesOverview from '@/components/sections/services/ServicesOverview';
import Services from '@/components/sections/services/Services';
import PricingPlan from '@/components/sections/services/PricingPlan';
import Comparison from '@/components/sections/services/Comparison';
import KeyFeatures from '@/components/sections/services/KeyFeatures';
import Payment from '@/components/sections/services/Payment';
import Benefits from '@/components/sections/services/Benefits';
import Faq from '@/components/sections/services/Faq';

export const metadata: Metadata = {
  title: 'Payments That Start in Your Chats',
  description:
    'Send a hosted checkout pay link inside any WhatsApp chat and get paid by card or Apple Pay. Setup takes about 30 minutes with no code.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Payments That Start in Your Chats',
    description:
      'Send a hosted checkout pay link inside any WhatsApp chat and get paid by card or Apple Pay. Setup takes about 30 minutes with no code.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <div className="pageShell">
        <Expertise />
        {/* Hidden on phones: this section only lays out correctly above 810px. */}
        <div className="hidePhone">
          <ServicesOverview />
        </div>
        <Services />
        <PricingPlan />
        <Comparison />
        <KeyFeatures />
        <Payment />
        <Benefits />
        <Faq />
      </div>
    </>
  );
}
