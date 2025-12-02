const partnerTypes = [
  "Operations Leaders",
  "Marketing Teams",
  "Product & Innovation",
  "Executive Leadership",
];

export default function Process() {
  return (
    <section className="flex justify-center px-4 py-24">
      <div className="w-full max-w-5xl rounded-[40px] bg-brand-dark p-10 text-white shadow-[0_40px_120px_rgba(1,3,9,0.5)]">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
          We work with
        </p>
        <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          Teams who need partner-level support, not another vendor.
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-white/70">
          Whether it is modernizing the corporate site, shipping an internal
          dashboard, or embedding AI copilots, we design, develop, and stay with
          you long after launch.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          {partnerTypes.map((partner) => (
            <span
              key={partner}
              className="rounded-full border border-white/30 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}