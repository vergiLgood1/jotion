"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const MarketingAnimations = () => {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-hero-reveal]", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
      });

      gsap.from("[data-product-mockup]", {
        y: 42,
        opacity: 0,
        scale: 0.98,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.to("[data-float-card]", {
        y: -12,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
      });

      gsap.utils.toArray<HTMLElement>("[data-section-reveal]").forEach((section) => {
        gsap.from(section, {
          y: 48,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger-parent]").forEach((parent) => {
        const children = parent.querySelectorAll("[data-stagger-item]");

        gsap.from(children, {
          y: 24,
          opacity: 0,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: parent,
            start: "top 80%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
};
