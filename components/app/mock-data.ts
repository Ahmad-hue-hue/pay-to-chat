export type OrderStatus = 'Paid' | 'Pending' | 'Failed';
export type ProductStatus = 'Active' | 'Draft' | 'Out of stock';

export interface Product {
  id: string;
  name: string;
  emoji: string;
  price: number;
  status: ProductStatus;
  category: string;
  stock: number;
}

export const productCategories = ['Shoes', 'Apparel', 'Accessories', 'Digital'];

export const products: Product[] = [
  { id: 'P-1001', name: 'Air Zoom Everyday', emoji: '👟', price: 120.0, status: 'Active', category: 'Shoes', stock: 24 },
  { id: 'P-1002', name: 'Hoodie — Essential', emoji: '🧥', price: 65.5, status: 'Active', category: 'Apparel', stock: 90 },
  { id: 'P-1003', name: 'Canvas Tote', emoji: '👜', price: 32.0, status: 'Draft', category: 'Accessories', stock: 12 },
  { id: 'P-1004', name: 'Trail Runner Pro', emoji: '👟', price: 149.0, status: 'Out of stock', category: 'Shoes', stock: 0 },
  { id: 'P-1005', name: 'Sticker Pack (4)', emoji: '🎨', price: 8.0, status: 'Active', category: 'Digital', stock: 500 },
  { id: 'P-1006', name: 'Wool Beanie', emoji: '🧢', price: 24.5, status: 'Active', category: 'Apparel', stock: 44 },
];

export interface Order {
  id: string;
  customer: string;
  initials: string;
  items: string;
  total: number;
  status: OrderStatus;
  time: string;
  source: 'whatsapp';
  lines: { name: string; qty: number; price: number }[];
  step: number;
}

export const orders: Order[] = [
  {
    id: 'ORD-2841',
    customer: 'Amara Okafor',
    initials: 'AO',
    items: '2 items',
    total: 185.0,
    status: 'Paid',
    time: '2 min ago',
    source: 'whatsapp',
    lines: [
      { name: 'Trail Runner Pro', qty: 1, price: 149.0 },
      { name: 'Canvas Tote', qty: 2, price: 18.0 },
      { name: 'Sticker Pack (4)', qty: 1, price: 0.0 },
    ],
    step: 2,
  },
  {
    id: 'ORD-2840',
    customer: 'Sofia Delgado',
    initials: 'SD',
    items: '1 item',
    total: 120.0,
    status: 'Pending',
    time: '11 min ago',
    source: 'whatsapp',
    lines: [{ name: 'Air Zoom Everyday', qty: 1, price: 120.0 }],
    step: 1,
  },
  {
    id: 'ORD-2839',
    customer: 'Ibrahim Al-Rashid',
    initials: 'IR',
    items: '3 items',
    total: 101.5,
    status: 'Paid',
    time: '34 min ago',
    source: 'whatsapp',
    lines: [
      { name: 'Hoodie — Essential', qty: 1, price: 65.5 },
      { name: 'Wool Beanie', qty: 1, price: 24.5 },
      { name: 'Sticker Pack (4)', qty: 2, price: 8.0 },
    ],
    step: 2,
  },
  {
    id: 'ORD-2838',
    customer: 'Maya Chen',
    initials: 'MC',
    items: '1 item',
    total: 24.5,
    status: 'Failed',
    time: '1 hr ago',
    source: 'whatsapp',
    lines: [{ name: 'Wool Beanie', qty: 1, price: 24.5 }],
    step: 0,
  },
  {
    id: 'ORD-2837',
    customer: 'Leo Martins',
    initials: 'LM',
    items: '5 items',
    total: 96.0,
    status: 'Paid',
    time: '2 hrs ago',
    source: 'whatsapp',
    lines: [
      { name: 'Sticker Pack (4)', qty: 4, price: 32.0 },
      { name: 'Canvas Tote', qty: 2, price: 64.0 },
    ],
    step: 2,
  },
  {
    id: 'ORD-2836',
    customer: 'Noor Haddad',
    initials: 'NH',
    items: '1 item',
    total: 149.0,
    status: 'Pending',
    time: '3 hrs ago',
    source: 'whatsapp',
    lines: [{ name: 'Trail Runner Pro', qty: 1, price: 149.0 }],
    step: 1,
  },
];

export const fmtMoney = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);