import Link from 'next/link';

import { orders, fmtMoney } from '@/components/app/mock-data';
import { statusBadge } from '@/components/app/status';

export default function DashboardPage() {
  const todayRevenue = orders
    .filter((o) => o.status === 'Paid')
    .reduce((sum, o) => sum + o.total, 0);
  const pendingCount = orders.filter((o) => o.status === 'Pending').length;
  const recent = orders.slice(0, 5);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Good morning, Amara</h1>
          <p className="text-sm text-base-content/60 mt-1">
            Here&apos;s what happened at your store today.
          </p>
        </div>
        <Link href="/products" className="btn btn-primary btn-sm gap-2">
          <i className="fa-solid fa-plus" aria-hidden="true" />
          New product
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="stat bg-base-200 rounded-box border border-base-300">
          <div className="stat-figure text-primary">
            <i className="fa-solid fa-receipt text-3xl" aria-hidden="true" />
          </div>
          <div className="stat-title text-base-content/60">Today&apos;s Orders</div>
          <div className="stat-value tabular-nums text-4xl font-semibold">
            {orders.length}
          </div>
          <div className="stat-desc text-base-content/50">
            <i className="fa-solid fa-arrow-trend-up mr-1" aria-hidden="true" />
            +12% vs yesterday
          </div>
        </div>

        <div className="stat bg-base-200 rounded-box border border-base-300">
          <div className="stat-figure text-primary">
            <i className="fa-solid fa-sack-dollar text-3xl" aria-hidden="true" />
          </div>
          <div className="stat-title text-base-content/60">Today&apos;s Revenue</div>
          <div className="stat-value tabular-nums text-4xl font-semibold">
            {fmtMoney(todayRevenue)}
          </div>
          <div className="stat-desc text-base-content/50">
            <i className="fa-solid fa-arrow-trend-up mr-1" aria-hidden="true" />
            +4% vs yesterday
          </div>
        </div>

        <div className="stat bg-base-200 rounded-box border border-base-300">
          <div className="stat-figure text-warning">
            <i className="fa-solid fa-clock text-3xl" aria-hidden="true" />
          </div>
          <div className="stat-title text-base-content/60">Pending Payments</div>
          <div className="stat-value tabular-nums text-4xl font-semibold">
            {pendingCount}
          </div>
          <div className="stat-desc text-base-content/50">
            awaiting confirmation
          </div>
        </div>
      </div>

      <div className="card bg-base-200 border border-base-300">
        <div className="card-body p-0">
          <div className="flex items-center justify-between px-6 pt-5 pb-3">
            <h2 className="card-title text-lg font-semibold">Recent orders</h2>
            <Link
              href="/orders"
              className="btn btn-ghost btn-sm gap-2 text-primary"
            >
              View all
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="text-xs uppercase text-base-content/50">
                  <th>Order</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th className="text-right">Time</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((order) => (
                  <tr key={order.id}>
                    <td className="font-medium text-base-content/90">
                      {order.id}
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <div className="avatar placeholder">
                          <div className="bg-primary/15 text-primary rounded-full w-7">
                            <span className="text-[0.65rem] font-semibold">
                              {order.initials}
                            </span>
                          </div>
                        </div>
                        <span>{order.customer}</span>
                      </div>
                    </td>
                    <td className="tabular-nums font-medium">
                      {fmtMoney(order.total)}
                    </td>
                    <td>{statusBadge(order.status)}</td>
                    <td className="text-right text-base-content/60">
                      {order.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}