'use client';

import { useMemo, useState } from 'react';

import { orders, fmtMoney, type Order, type OrderStatus } from './mock-data';
import { statusBadge } from './status';

type Filter = 'All' | OrderStatus;

const filters: Filter[] = ['All', 'Pending', 'Paid', 'Failed'];

export default function OrdersScreen() {
  const [filter, setFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<Order | null>(null);

  const visible = useMemo(
    () => (filter === 'All' ? orders : orders.filter((o) => o.status === filter)),
    [filter]
  );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Orders</h1>
        <p className="text-sm text-base-content/60 mt-1">
          Every purchase started in a WhatsApp conversation.
        </p>
      </div>

      <div role="tablist" className="tabs tabs-box w-fit">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            type="button"
            className={`tab gap-2 ${filter === f ? 'tab-active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'All' && (
              <i className="fa-solid fa-layer-group" aria-hidden="true" />
            )}
            {f === 'Pending' && (
              <i className="fa-solid fa-clock" aria-hidden="true" />
            )}
            {f === 'Paid' && (
              <i className="fa-solid fa-circle-check" aria-hidden="true" />
            )}
            {f === 'Failed' && (
              <i className="fa-solid fa-circle-xmark" aria-hidden="true" />
            )}
            {f}
          </button>
        ))}
      </div>

      <div className="card bg-base-200 border border-base-300">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-xs uppercase text-base-content/50">
                <th>Order</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th className="text-right">Time</th>
              </tr>
            </thead>
            <tbody>
              {visible.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-base-content/50">
                    No orders in this state yet.
                  </td>
                </tr>
              )}
              {visible.map((order) => (
                <tr
                  key={order.id}
                  className="cursor-pointer hover:bg-base-300/40"
                  onClick={() => setSelected(order)}
                >
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
                      <i
                        className="fa-brands fa-whatsapp text-base-content/40"
                        title="Started on WhatsApp"
                        aria-hidden="true"
                      />
                    </div>
                  </td>
                  <td className="text-base-content/70">{order.items}</td>
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

      {selected && (
        <dialog className="modal" open onClose={() => setSelected(null)}>
          <div className="modal-box">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{selected.id}</h3>
                <p className="text-sm text-base-content/60 mt-0.5">
                  {selected.customer} · {selected.time}
                </p>
              </div>
              {statusBadge(selected.status)}
            </div>

            <div className="divider my-4" />

            <h4 className="text-sm font-semibold uppercase tracking-wide text-base-content/60">
              Items
            </h4>
            <ul className="mt-2 flex flex-col gap-2">
              {selected.lines.map((line) => (
                <li
                  key={line.name}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-sm">
                    {line.name}
                    <span className="text-base-content/50">
                      {' '}
                      × {line.qty}
                    </span>
                  </span>
                  <span className="text-sm tabular-nums font-medium">
                    {fmtMoney(line.price * line.qty)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="divider my-4" />

            <h4 className="text-sm font-semibold uppercase tracking-wide text-base-content/60">
              Progress
            </h4>
            <ul className="steps steps-vertical sm:steps-horizontal mt-3">
              <li
                className={`step ${selected.step >= 1 ? 'step-primary' : ''}`}
              >
                Placed
              </li>
              <li
                className={`step ${selected.step >= 2 ? 'step-primary' : ''}`}
              >
                Paid
              </li>
              <li
                className={`step ${selected.step >= 3 ? 'step-primary' : ''}`}
              >
                Confirmed
              </li>
            </ul>

            {selected.status === 'Failed' && (
              <p className="mt-4 flex items-center gap-2 text-sm text-error">
                <i className="fa-solid fa-circle-xmark" aria-hidden="true" />
                Payment declined — the customer was notified on WhatsApp.
              </p>
            )}

            <div className="modal-action items-center">
              <div className="mr-auto text-sm text-base-content/60">
                Total
                <span className="ml-2 text-xl font-semibold tabular-nums text-base-content">
                  {fmtMoney(selected.total)}
                </span>
              </div>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}