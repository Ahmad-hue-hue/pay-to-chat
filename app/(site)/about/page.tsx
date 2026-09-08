import type { Metadata } from 'next';

import Hero from '@/components/sections/about/Hero';
import OurStory from '@/components/sections/about/OurStory';
import Features from '@/components/sections/about/Features';
import TeamMembers from '@/components/sections/about/TeamMembers';
import OurCulture from '@/components/sections/about/OurCulture';
import Excellence from '@/components/sections/about/Excellence';
import Testimonials from '@/components/sections/about/Testimonials';
import Careers from '@/components/sections/about/Careers';
import CallToAction from '@/components/sections/about/CallToAction';

export const metadata: Metadata = {
  title: 'About Chat to Pay',
  description:
    'Chat to Pay turns WhatsApp chats into paid orders with a 30-minute setup, no code, and a PCI-compliant hosted checkout trusted by 2,400+ merchants.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Chat to Pay',
    description:
      'Chat to Pay turns WhatsApp chats into paid orders with a 30-minute setup, no code, and a PCI-compliant hosted checkout trusted by 2,400+ merchants.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <div className="pageShell pageShellTightTop">
        <OurStory />
        <Features />
        <TeamMembers />
        <OurCulture />
        <Excellence />
        <Testimonials />
        <Careers />
        <CallToAction />
      </div>
    </>
  );
}
