interface Capability {
  icon: string;
  title: string;
  text: string;
}

const capabilities: Capability[] = [
  {
    icon: 'fa-solid fa-credit-card',
    title: 'Hosted checkout',
    text: 'A secure, PCI-compliant checkout your customers open right from the chat.',
  },
  {
    icon: 'fa-solid fa-receipt',
    title: 'Orders in one place',
    text: 'Placed, paid, pending and failed orders tracked from a single dashboard.',
  },
  {
    icon: 'fa-solid fa-box-open',
    title: 'Product catalog',
    text: 'Keep prices and stock up to date, ready to share as a link in seconds.',
  },
  {
    icon: 'fa-solid fa-sack-dollar',
    title: 'Fast settlement',
    text: 'Payments settle to the bank account you connect during setup, on a clear schedule.',
  },
  {
    icon: 'fa-brands fa-cc-visa',
    title: 'Cards + Apple Pay',
    text: 'Visa, Mastercard, Amex, Discover and Apple Pay — no extra accounts for shoppers.',
  },
  {
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Works on any device',
    text: 'The checkout and your merchant dashboard work on any phone, tablet or laptop.',
  },
];

export default function EverythingYouNeed() {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="flex max-w-2xl flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-slate-700 bg-slate-900 py-1 pr-4 pl-1.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15">
                <i className="fa-solid fa-bolt text-emerald-500 text-sm" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-slate-300">Chat to Pay</span>
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              Everything You Need to Sell in Chat
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-slate-400">
            Chat to Pay is a complete payments product for small businesses selling over
            WhatsApp.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/15">
                <i className={`${cap.icon} text-emerald-500 text-lg`} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-50">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{cap.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}