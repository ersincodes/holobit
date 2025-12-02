"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WebPagesIntroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(
    () => {
      if (
        !sectionRef.current ||
        !headingRef.current ||
        !subheadingRef.current
      ) {
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });

      timeline.from(headingRef.current, {
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: "power3.out",
      });

      timeline.from(
        subheadingRef.current,
        {
          opacity: 0,
          y: 20,
          rotation: -2,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="flex w-full justify-center bg-transparent px-4 py-20 text-brand-dark">
      <div className="grid w-full max-w-5xl gap-10 rounded-[32px] border border-white/60 bg-white/80 p-10 shadow-[0_25px_70px_rgba(6,7,11,0.08)] backdrop-blur-xl md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-muted">
            We design
          </p>
          <h2
            ref={headingRef}
            className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Web pages that make operations feel modern and intuitive.
          </h2>
          <p
            ref={subheadingRef}
            className="mt-6 max-w-xl text-lg text-brand-muted">
            From foundational corporate sites to high-converting sales funnels,
            every screen respects your workflow and brand.
          </p>
        </div>

        <div className="relative flex items-end justify-end">
          <div className="h-48 w-32 rounded-[26px] bg-brand-blue shadow-[0_25px_60px_rgba(56,88,255,0.5)]" />
          <div className="absolute -left-12 top-6 h-32 w-32 rounded-[26px] border border-brand-cyan/40 bg-brand-cyan/40 shadow-inner" />
        </div>
      </div>
    </section>
  );
};

export default WebPagesIntroSection;
