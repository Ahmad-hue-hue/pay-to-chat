'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DashboardShellProps {
  siteName: string;
  children: React.ReactNode;
}

const navLinks = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/products', label: 'Products' },
  { href: '/orders', label: 'Orders' },
];

const notifications = [
  {
    icon: 'fa-solid fa-circle-check',
    iconClass: 'text-success',
    title: 'Payment received',
    detail: 'Order #1042 · $45.00',
    time: '2 min ago',
  },
  {
    icon: 'fa-solid fa-circle-plus',
    iconClass: 'text-sky-500',
    title: 'New order placed',
    detail: 'Order #1041 · $152.00',
    time: '18 min ago',
  },
  {
    icon: 'fa-solid fa-circle-exclamation',
    iconClass: 'text-warning',
    title: 'Payout scheduled',
    detail: 'Settles to your bank account today',
    time: '1 h ago',
  },
];

export default function DashboardShell({
  siteName,
  children,
}: DashboardShellProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/dashboard' ? pathname === href : pathname.startsWith(href);

  return (
    <div className="min-h-dvh bg-base-100 text-base-content">
      <div className="navbar bg-base-200 border-b border-base-300">
        <div className="navbar-start">
          {/* Mobile nav */}
          <details className="dropdown md:hidden mr-1">
            <summary className="btn btn-ghost btn-square" aria-label="Open navigation">
              <i className="fa-solid fa-bars text-lg" aria-hidden="true" />
            </summary>
            <ul className="menu dropdown-content z-[1] mt-2 w-56 rounded-box border border-base-300 bg-base-200 p-2 shadow-lg">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={isActive(link.href) ? 'text-primary font-medium' : ''}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-1 border-t border-base-300">
                <Link href="/">Public site</Link>
              </li>
            </ul>
          </details>

          <Link href="/dashboard" className="btn btn-ghost px-2 text-lg gap-2">
            <i className="fa-brands fa-whatsapp text-primary text-2xl" aria-hidden="true" />
            <span className="font-semibold tracking-tight">{siteName}</span>
          </Link>
          <Link
            href="/"
            className="hidden md:inline-flex btn btn-ghost btn-sm text-base-content/60"
          >
            Public site
          </Link>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    isActive(link.href)
                      ? 'btn btn-ghost btn-sm text-primary bg-primary/10'
                      : 'btn btn-ghost btn-sm'
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <details className="dropdown dropdown-end">
            <summary
              className="btn btn-ghost btn-circle relative"
              aria-label="Notifications"
            >
              <i className="fa-solid fa-bell text-base-content/80" aria-hidden="true" />
              <span className="badge badge-error badge-xs absolute top-1 right-1" />
            </summary>
            <ul className="menu dropdown-content z-[1] mt-2 w-80 rounded-box border border-base-300 bg-base-200 p-2 shadow-lg">
              <li className="menu-title text-xs uppercase tracking-widest text-base-content/50">
                Notifications
              </li>
              {notifications.map((item) => (
                <li key={item.title}>
                  <a className="flex items-start gap-3 py-2">
                    <i
                      className={`${item.icon} ${item.iconClass} text-base mt-0.5`}
                      aria-hidden="true"
                    />
                    <span className="flex min-w-0 flex-col">
                      <span className="text-sm font-medium">{item.title}</span>
                      <span className="text-xs text-base-content/60">{item.detail}</span>
                      <span className="text-xs text-base-content/40">{item.time}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </details>

          <details className="dropdown dropdown-end">
            <summary className="btn btn-circle btn-ghost" aria-label="Account menu">
              <div className="avatar placeholder">
                <div className="bg-primary text-primary-content rounded-full w-10">
                  <span className="font-semibold text-sm">AM</span>
                </div>
              </div>
            </summary>
            <ul className="menu dropdown-content z-[1] mt-2 w-48 rounded-box border border-base-300 bg-base-200 p-2 shadow-lg">
              <li>
                <Link href="/dashboard">
                  <span className="text-sm font-semibold">Amara Nwosu</span>
                  <span className="text-xs text-base-content/50">amara@acme.shop</span>
                </Link>
              </li>
              <li className="mt-1 border-t border-base-300">
                <Link href="/orders">
                  <i className="fa-solid fa-receipt w-5 text-base-content/60" aria-hidden="true" />
                  Orders
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <i className="fa-solid fa-box-open w-5 text-base-content/60" aria-hidden="true" />
                  Products
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <i
                    className="fa-solid fa-arrow-right-from-bracket w-5 text-base-content/60"
                    aria-hidden="true"
                  />
                  Sign out
                </Link>
              </li>
            </ul>
          </details>
        </div>
      </div>

      <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-8">
        {children}
      </main>
    </div>
  );
}