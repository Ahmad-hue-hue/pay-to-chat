import type { Metadata } from 'next';

import { site } from '@/config/site';
import DashboardShell from '@/components/app/dashboard-shell';

export const metadata: Metadata = {
  title: 'Dashboard',
  robots: { index: false, follow: false },
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell siteName={site.name}>{children}</DashboardShell>;
}