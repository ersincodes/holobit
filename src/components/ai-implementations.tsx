"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AIImplementations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "center center",
          scrub: 1,
        },
        x: 200,
        opacity: 0,
        duration: 1.5,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative flex w-full justify-center bg-brand-card px-4 py-24 text-brand-dark md:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(61,231,255,0.25),_transparent_45%)]" />
      <div className="relative z-10 grid w-full max-w-5xl gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] bg-gradient-to-b from-brand-cyan to-brand-blue p-8 text-white shadow-[0_30px_80px_rgba(56,88,255,0.45)]">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/80">
            We implement
          </p>
          <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
            AI systems that help your operators make faster, smarter decisions.
          </h2>
          <p className="mt-6 text-base text-white/80">
            Secure workflows, assistant interfaces, and automation engines that
            feel built-in instead of bolted-on.
          </p>
        </div>

        <div
          ref={contentRef}
          className="flex flex-col gap-8 rounded-[32px] border border-brand-blue/20 bg-white/90 p-8 shadow-[0_20px_60px_rgba(7,10,15,0.08)]">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-muted">
              AI implementations
            </p>
            <h3 className="text-3xl font-semibold">Human-ready automation</h3>
            <p className="text-lg text-brand-muted">
              Think copilots, reporting copilots, and internal portals that
              employees actually use.
            </p>
          </div>

          <ul className="space-y-4 text-brand-muted">
            {[
              "Ops-ready copilots that summarize and recommend actions.",
              "Intelligent dashboards with proactive alerts.",
              "Secure integrations into CRMs, ERPs, and custom tools.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-blue" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="#footer"
            className="inline-flex items-center justify-center rounded-full bg-brand-dark px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-brand-blue">
            Try a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
