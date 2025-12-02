import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="mt-auto border-t border-white/60 bg-brand-card/80 px-4 py-10 text-brand-muted">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 text-center text-sm md:flex-row md:text-left">
        <p className="text-brand-dark">
          © {new Date().getFullYear()} Cognireal. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["LinkedIn", "Twitter", "Instagram"].map((network) => (
            <Link
              key={network}
              href="#"
              className="text-brand-muted transition hover:text-brand-dark">
              {network}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}