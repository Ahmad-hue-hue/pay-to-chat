import type { Metadata } from 'next';

import ProductsScreen from '@/components/app/products-screen';

export const metadata: Metadata = {
  title: 'Products',
};

export default function ProductsPage() {
  return <ProductsScreen />;
}