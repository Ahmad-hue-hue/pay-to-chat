'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-dvh bg-base-100 text-base-content flex items-center justify-center px-4">
      <div className="w-full max-w-sm flex flex-col gap-6">
        <Link href="/" className="flex items-center justify-center gap-2 text-xl">
          <i className="fa-brands fa-whatsapp text-primary text-2xl" aria-hidden="true" />
          <span className="font-semibold tracking-tight">Chat to Pay</span>
        </Link>

        <div className="card bg-base-200 border border-base-300">
          <div className="card-body">
            <h1 className="card-title text-2xl font-semibold tracking-tight">
              Merchant sign in
            </h1>
            <p className="text-sm text-base-content/60 mb-2">
              Sign in to manage products, orders and payouts.
            </p>

            <form
              className="form-control gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                router.push('/dashboard');
              }}
            >
              <label className="input input-bordered flex items-center gap-2">
                <i className="fa-solid fa-envelope text-base-content/40 w-4" aria-hidden="true" />
                <input
                  type="email"
                  className="grow"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <i className="fa-solid fa-lock text-base-content/40 w-4" aria-hidden="true" />
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-xs"
                  />
                  <span className="text-base-content/70">Remember me</span>
                </label>
                <Link href="/login" className="link link-primary text-sm">
                  Forgot password?
                </Link>
              </div>

              <button type="submit" className="btn btn-primary btn-block mt-1">
                Sign in
              </button>
            </form>

            <p className="mt-2 text-center text-sm text-base-content/60">
              New merchant?{' '}
              <Link href="/login" className="link link-primary">
                Create an account
              </Link>
            </p>
          </div>
        </div>

        <p className="flex items-center justify-center gap-2 text-xs text-base-content/40">
          <i className="fa-solid fa-lock" aria-hidden="true" />
          Secured merchant access
        </p>
      </div>
    </div>
  );
}