import type { OrderStatus, ProductStatus } from '@/components/app/mock-data';

export function statusBadge(status: OrderStatus) {
  const map: Record<OrderStatus, string> = {
    Paid: 'badge-success',
    Pending: 'badge-warning',
    Failed: 'badge-error',
  };
  return (
    <span className={`badge ${map[status]} badge-sm gap-1`}>
      {status === 'Paid' && (
        <i className="fa-solid fa-circle-check" aria-hidden="true" />
      )}
      {status === 'Pending' && (
        <i className="fa-solid fa-clock" aria-hidden="true" />
      )}
      {status === 'Failed' && (
        <i className="fa-solid fa-circle-xmark" aria-hidden="true" />
      )}
      {status}
    </span>
  );
}

export function productBadge(status: ProductStatus) {
  const map: Record<ProductStatus, string> = {
    Active: 'badge-success',
    Draft: 'badge-neutral',
    'Out of stock': 'badge-warning',
  };
  return <span className={`badge ${map[status]} badge-sm`}>{status}</span>;
}