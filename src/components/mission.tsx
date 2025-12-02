import Link from "next/link";

export default function Mission() {
  return (
    <section className="flex justify-center px-4 pb-24">
      <div className="w-full max-w-4xl rounded-[40px] border border-brand-blue/15 bg-white p-12 text-center shadow-[0_25px_80px_rgba(8,10,20,0.08)]">
        <h2 className="text-4xl font-semibold text-brand-dark md:text-5xl">
          Ready to transform your business?
        </h2>
        <p className="mt-4 text-lg text-brand-muted">
          Share your current challenges and we will return with a plan in under
          48 hours.
        </p>
        <Link
          href="#footer"
          className="mt-10 inline-flex items-center rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue px-12 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_20px_60px_rgba(56,88,255,0.45)] transition hover:shadow-[0_25px_70px_rgba(56,88,255,0.6)]">
          Book a discovery call
        </Link>
      </div>
    </section>
  );
}
