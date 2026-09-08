'use client';

import { useState } from 'react';

import {
  products as seedProducts,
  productCategories,
  fmtMoney,
  type Product,
} from './mock-data';
import { productBadge } from './status';

type ModalState =
  | { mode: 'add'; product: null }
  | { mode: 'edit'; product: Product }
  | { mode: 'delete'; product: Product }
  | null;

const emptyForm = {
  name: '',
  price: 0,
  stock: 0,
  category: productCategories[0],
  status: 'Draft' as Product['status'],
};

export default function ProductsScreen() {
  const [products, setProducts] = useState<Product[]>(seedProducts);
  const [modal, setModal] = useState<ModalState>(null);
  const [form, setForm] = useState(emptyForm);

  const openAdd = () => {
    setForm(emptyForm);
    setModal({ mode: 'add', product: null });
  };

  const openEdit = (product: Product) => {
    setForm({
      name: product.name,
      price: product.price,
      stock: product.stock,
      category: product.category,
      status: product.status,
    });
    setModal({ mode: 'edit', product });
  };

  const submit = () => {
    if (!modal || modal.mode === 'delete') return;
    if (!form.name.trim()) return;

    if (modal.mode === 'edit') {
      setProducts((prev) =>
        prev.map((p) => (p.id === modal.product.id ? { ...p, ...form } : p))
      );
    } else {
      const id = `P-${1000 + products.length + 1}`;
      setProducts((prev) => [
        { id, emoji: '📦', ...form },
        ...prev,
      ]);
    }
    setModal(null);
  };

  const confirmDelete = () => {
    if (modal?.mode !== 'delete') return;
    setProducts((prev) => prev.filter((p) => p.id !== modal.product.id));
    setModal(null);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Products</h1>
          <p className="text-sm text-base-content/60 mt-1">
            {products.length} products in your catalog
          </p>
        </div>
        <button
          type="button"
          onClick={openAdd}
          className="btn btn-primary btn-sm gap-2"
        >
          <i className="fa-solid fa-plus" aria-hidden="true" />
          Add product
        </button>
      </div>

      <div className="card bg-base-200 border border-base-300">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-xs uppercase text-base-content/50">
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th className="w-12 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar placeholder">
                        <div className="bg-base-300 rounded-xl w-11 text-xl">
                          <span>{product.emoji}</span>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-xs text-base-content/50">
                          {product.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-base-content/70">{product.category}</td>
                  <td className="tabular-nums font-medium">
                    {fmtMoney(product.price)}
                  </td>
                  <td>{productBadge(product.status)}</td>
                  <td className="text-right">
                    <div className="dropdown dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        aria-label={`Actions for ${product.name}`}
                        className="btn btn-ghost btn-sm btn-circle"
                      >
                        <i
                          className="fa-solid fa-ellipsis-vertical"
                          aria-hidden="true"
                        />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-300 rounded-box w-44 p-2 border border-base-300 shadow-lg z-20"
                      >
                        <li>
                          <button type="button" onClick={() => openEdit(product)}>
                            <i className="fa-solid fa-pen" aria-hidden="true" />
                            Edit
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() =>
                              setModal({ mode: 'delete', product })
                            }
                            className="text-error"
                          >
                            <i
                              className="fa-solid fa-trash-can"
                              aria-hidden="true"
                            />
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {(modal?.mode === 'add' || modal?.mode === 'edit') && (
        <dialog className="modal" open onClose={() => setModal(null)}>
          <div className="modal-box">
            <h3 className="text-lg font-semibold">
              {modal.mode === 'add' ? 'Add product' : `Edit ${modal.product.name}`}
            </h3>
            <form
              method="dialog"
              className="form-control gap-4 mt-2"
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
            >
              <label className="form-control gap-1">
                <span className="label-text text-sm">Name</span>
                <input
                  className="input input-bordered w-full"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Product name"
                  required
                />
              </label>

              <div className="grid grid-cols-2 gap-3">
                <label className="form-control gap-1">
                  <span className="label-text text-sm">Price (USD)</span>
                  <input
                    className="input input-bordered w-full tabular-nums"
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.price || ''}
                    onChange={(e) =>
                      setForm({ ...form, price: Number(e.target.value) })
                    }
                    placeholder="0.00"
                    required
                  />
                </label>
                <label className="form-control gap-1">
                  <span className="label-text text-sm">Stock</span>
                  <input
                    className="input input-bordered w-full tabular-nums"
                    type="number"
                    min="0"
                    value={form.stock || ''}
                    onChange={(e) =>
                      setForm({ ...form, stock: Number(e.target.value) })
                    }
                    placeholder="0"
                    required
                  />
                </label>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <label className="form-control gap-1">
                  <span className="label-text text-sm">Category</span>
                  <select
                    className="select select-bordered w-full"
                    value={form.category}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                  >
                    {productCategories.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </label>
                <label className="form-control gap-1">
                  <span className="label-text text-sm">Status</span>
                  <select
                    className="select select-bordered w-full"
                    value={form.status}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        status: e.target.value as Product['status'],
                      })
                    }
                  >
                    <option>Active</option>
                    <option>Draft</option>
                    <option>Out of stock</option>
                  </select>
                </label>
              </div>

              <div className="modal-action">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setModal(null)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary gap-2">
                  <i
                    className={
                      modal.mode === 'add'
                        ? 'fa-solid fa-plus'
                        : 'fa-solid fa-check'
                    }
                    aria-hidden="true"
                  />
                  {modal.mode === 'add' ? 'Add product' : 'Save changes'}
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}

      {modal?.mode === 'delete' && (
        <dialog className="modal" open onClose={() => setModal(null)}>
          <div className="modal-box">
            <div className="flex items-start gap-3">
              <div className="bg-error/10 text-error rounded-full w-11 h-11 flex items-center justify-center text-lg shrink-0">
                <i className="fa-solid fa-triangle-exclamation" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Delete product</h3>
                <p className="text-sm text-base-content/60 mt-1">
                  &quot;{modal.product.name}&quot; will be removed from your
                  catalog. This can&apos;t be undone.
                </p>
              </div>
            </div>
            <div className="modal-action">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setModal(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-error gap-2"
                onClick={confirmDelete}
              >
                <i className="fa-solid fa-trash-can" aria-hidden="true" />
                Delete
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}