"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   CINEMATIC BACKGROUND
   ========================================================= */

function CinematicBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const grainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !backgroundRef.current ||
      !glowRef.current ||
      !grainRef.current
    ) {
      return;
    }

    gsap.to(backgroundRef.current, {
      backgroundPosition: "52% 48%",
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(glowRef.current, {
      x: 20,
      y: -15,
      scale: 1.04,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(grainRef.current, {
      opacity: 0.025,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <div
        ref={backgroundRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          backgroundImage: "none",
          backgroundSize: "100% 100%",
          backgroundPosition: "50% 50%",
          transform: "scale(1.01)",
          willChange: "background-position",
        }}
      />

      <div
        ref={glowRef}
        style={{
          position: "absolute",
          width: "65vw",
          height: "65vw",
          maxWidth: "900px",
          maxHeight: "900px",
          top: "-20%",
          left: "-18%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "50vw",
          height: "50vw",
          maxWidth: "700px",
          maxHeight: "700px",
          right: "-15%",
          bottom: "-15%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={grainRef}
        style={{
          position: "absolute",
          inset: "-50%",
          pointerEvents: "none",
          opacity: 0.02,
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E")
          `,
          mixBlendMode: "soft-light",
          animation: "cinematicGrain 0.8s steps(2) infinite",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "#000",
        }}
      />

      <style jsx>{`
        @keyframes cinematicGrain {
          0% {
            transform: translate(0%, 0%);
          }

          20% {
            transform: translate(-2%, 1%);
          }

          40% {
            transform: translate(1%, -2%);
          }

          60% {
            transform: translate(2%, 2%);
          }

          80% {
            transform: translate(-1%, -1%);
          }

          100% {
            transform: translate(1%, 1%);
          }
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   CINEMATIC 3D MOTION SYSTEM
   Scroll reveals, depth parallax, pointer lighting and 3D card tilt.
   This layer enhances the existing sections without changing their content.
   ========================================================= */

function CinematicEffects() {
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".page");
    if (!page) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".page-content section, .page > section");
      const cards = gsap.utils.toArray<HTMLElement>(
        ".result-card, .ai-image-wrapper, .process-card, .industry-card, .ppc-image-panel, .creative-outcome-card, .blog-card, .testimonial-card, .faq-metallic-container, .glass-pill-button"
      );
      const images = gsap.utils.toArray<HTMLElement>(
        ".hero-image img, .result-card img, .ai-image-wrapper img, .industry-image img, .ppc-image-inner img, .blog-card-image-element"
      );
      const headings = gsap.utils.toArray<HTMLElement>(
        ".hero-content h1, .ai-heading, .process-heading h2, .industries-intro h2, .ppc-header h2, .creative-outcomes-heading, .blog-heading-content h2, .testimonials-header h2"
      );

      // Section-level cinematic entrance. The existing content remains intact.
      sections.forEach((section, index) => {
        if (index === 0) return;

        gsap.fromTo(
          section,
          { opacity: 0.82, y: 48, scale: 0.985, transformPerspective: 1400 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      // Headings rise into place with a slight depth rotation.
      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { y: 35, opacity: 0, rotateX: 8, transformPerspective: 1000 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      // Slow image parallax creates a camera-like depth movement while scrolling.
      images.forEach((image) => {
        const section = image.closest("section");
        if (!section) return;

        gsap.fromTo(
          image,
          { yPercent: -4, scale: 1.06 },
          {
            yPercent: 4,
            scale: 1.12,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.15,
            },
          }
        );
      });

      // Interactive 3D tilt. Desktop only; mobile keeps the original layout stable.
      if (window.matchMedia("(pointer: fine)").matches) {
        cards.forEach((card) => {
          card.style.transformStyle = "preserve-3d";
          card.style.willChange = "transform";

          const onMove = (event: PointerEvent) => {
            const rect = card.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width;
            const py = (event.clientY - rect.top) / rect.height;
            const rotateY = (px - 0.5) * 8;
            const rotateX = (0.5 - py) * 7;

            gsap.to(card, {
              rotateX,
              rotateY,
              z: 18,
              duration: 0.45,
              ease: "power2.out",
              overwrite: true,
            });
          };

          const onLeave = () => {
            gsap.to(card, {
              rotateX: 0,
              rotateY: 0,
              z: 0,
              duration: 0.7,
              ease: "power3.out",
              overwrite: true,
            });
          };

          card.addEventListener("pointermove", onMove);
          card.addEventListener("pointerleave", onLeave);

          gsap.set(card, { transformPerspective: 1200 });

          (card as HTMLElement & { __cinematicCleanup?: () => void }).__cinematicCleanup = () => {
            card.removeEventListener("pointermove", onMove);
            card.removeEventListener("pointerleave", onLeave);
          };
        });
      }

      // Page progress line gives the long page a subtle film-strip/navigation feel.
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: page,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }
    }, page);

    const onPointerMove = (event: PointerEvent) => {
      if (!cursorGlowRef.current || !window.matchMedia("(pointer: fine)").matches) return;
      gsap.to(cursorGlowRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.55,
        ease: "power3.out",
        overwrite: true,
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.querySelectorAll<HTMLElement>(
        ".result-card, .ai-image-wrapper, .process-card, .industry-card, .ppc-image-panel, .creative-outcome-card, .blog-card, .testimonial-card, .faq-metallic-container, .glass-pill-button"
      ).forEach((card) => {
        const element = card as HTMLElement & { __cinematicCleanup?: () => void };
        element.__cinematicCleanup?.();
        delete element.__cinematicCleanup;
      });
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div ref={cursorGlowRef} className="cinematic-cursor-glow" aria-hidden="true" />
      <div className="cinematic-scanline" aria-hidden="true" />
      <div className="cinematic-progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>
    </>
  );
}

/* =========================================================
   ENTRY ANIMATION
   No exit animation.
   No hover animation.
   No continuous movement.
   ========================================================= */

function useEntryAnimation(
  ref: React.RefObject<HTMLElement | null>,
  options?: {
    y?: number;
    duration?: number;
    delay?: number;
  }
) {
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: options?.y ?? 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: options?.duration ?? 1,
          delay: options?.delay ?? 0,
          ease: "power3.out",
        }
      );
    }, element);

    return () => ctx.revert();
  }, [ref, options?.y, options?.duration, options?.delay]);
}

/* =========================================================
   FIRST SECTION
   ========================================================= */

function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEntryAnimation(contentRef, {
    y: 45,
    duration: 1,
  });

  useEntryAnimation(imageRef, {
    y: 60,
    duration: 1.15,
    delay: 0.15,
  });

  return (
    <section
      ref={sectionRef}
      className="hero-section"
    >
      <div className="hero-inner">
        <div
          ref={contentRef}
          className="hero-content"
        >
          <h1>
            Where Others Advise,
            <br />
            We Build —{" "}
            <span>With You</span>
          </h1>

          <p>
            At Bigbeans Digital, we turn ideas into impactful
            <br className="desktop-break" />
            social media experiences — with the right strategy,
            <br className="desktop-break" />
            the right creativity, and the right people beside you.
          </p>

          <div className="hero-buttons">
            <button className="primary-button">
              Get Free Consultation
            </button>

            <button className="secondary-button">
              About Us
            </button>
          </div>

          <div className="hero-partner">
            <span>
              BIGBEANS
              <br />
              DIGITAL
            </span>

            <strong>&amp;</strong>

            <span>
              SOCIAL MEDIA
              <br />
              GROWTH PARTNER
            </span>
          </div>
        </div>

        <div
          ref={imageRef}
          className="hero-image"
        >
          <img
            src="/assest/brandinghero.png"
            alt="Bigbeans Digital"
          />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SECOND SECTION
   ========================================================= */

function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEntryAnimation(sectionRef, {
    y: 55,
    duration: 1,
  });

  const brands = [
    "ZOMATO",
    "NYKAA",
    "BYJU'S",
    "SWIGGY",
    "CRED",
    "DELL",
    "NIKE",
    "ADIDAS",
    "AMAZON",
    "GOOGLE",
  ];

  return (
    <section
      ref={sectionRef}
      className="results-section"
    >
      <div className="results-frame">
        <div className="result-card">
          <div className="result-card-copy">
            <div className="result-top">
              <div>
                <h2>
                  Strategy
                  <br />
                  That Works
                </h2>

                <p>
                  Data-driven strategies to
                  <br />
                  move your brand forward.
                </p>
              </div>

              <span className="result-tag">↗ Growth</span>
            </div>

            <div className="result-stat">
              <div className="mini-bars">
                <span />
                <span />
                <span />
              </div>

              <div>
                <strong>+230%</strong>
                <small>Brand Visibility</small>
              </div>
            </div>
          </div>

          <div className="growth-bars">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="result-card">
          <div className="result-card-copy">
            <div className="result-top">
              <div>
                <h2>
                  Real People.
                  <br />
                  Real Results.
                </h2>

                <p>
                  We turn ideas into measurable
                  <br />
                  growth across digital platforms.
                </p>
              </div>

              <span className="result-tag">
                This Month
              </span>
            </div>

            <div className="reach-box">
              <small>Total Reach</small>
              <div>
                <strong>1.2M</strong>
                <span>↗ +68%</span>
              </div>
            </div>
          </div>

          <div className="line-chart">
            <svg
              viewBox="0 0 420 190"
              preserveAspectRatio="none"
            >
              <path
                d="M0 165 C30 155 45 105 75 115 C105 125 105 140 135 130 C165 120 170 70 205 85 C240 100 235 120 270 100 C305 80 315 25 340 35 C370 50 370 95 395 55 C405 40 412 20 420 10"
                fill="none"
                stroke="rgba(248,188,4,0.95)"
                strokeWidth="8"
                strokeLinecap="round"
              />

              <path
                d="M0 165 C30 155 45 105 75 115 C105 125 105 140 135 130 C165 120 170 70 205 85 C240 100 235 120 270 100 C305 80 315 25 340 35 C370 50 370 95 395 55 C405 40 412 20 420 10"
                fill="none"
                stroke="rgba(248,188,4,0.25)"
                strokeWidth="18"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="result-card result-card-wide">
          <div className="wide-copy">
            <h2>
              Creative Content,
              <br />
              Real Connections
            </h2>

            <p>
              Scroll-stopping content that
              <br />
              builds communities.
            </p>
          </div>

          <div className="creative-visual">
            <div className="creative-card creative-card-one">
              <strong>
                Ideas
                <br />
                Create
                <br />
                Change
              </strong>

              <div className="moon" />
            </div>

            <div className="engagement-card">
              <div className="engagement-heading">
                <strong>Engagement</strong>
                <span>This Week⌄</span>
              </div>

              <div className="engagement-bars">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span
                    key={i}
                    style={{
                      height: `${35 + i * 9}px`,
                    }}
                  />
                ))}
              </div>

              <div className="engagement-data">
                <div>
                  <span>Likes</span>
                  <strong>892K</strong>
                </div>
                <div>
                  <span>Comments</span>
                  <strong>12K</strong>
                </div>
                <div>
                  <span>Shares</span>
                  <strong>28K</strong>
                </div>
                <div>
                  <span>Saves</span>
                  <strong>18K</strong>
                </div>
              </div>
            </div>

            <div className="creative-card creative-card-three">
              <strong>
                Brands
                <br />
                Grow
                <br />
                Here
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div className="trusted">
        <p>
          Trusted by 100+ Businesses From Startups to Global Brands
        </p>

        <div className="brand-carousel">
          <div className="brand-track">
            {[...brands, ...brands].map((brand, index) => (
              <div
                className="brand-item"
                key={`${brand}-${index}`}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   AI SECTION
   ========================================================= */

function AISection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEntryAnimation(imageRef, {
    y: 55,
    duration: 1,
  });

  useEntryAnimation(contentRef, {
    y: 55,
    duration: 1,
    delay: 0.12,
  });

  return (
    <section
      ref={sectionRef}
      className="ai-section"
    >
      <h2 className="ai-heading">
        Use AI faster and more
        <br />
        efficiently right on your device!
      </h2>

      <div className="ai-grid">
        <div
          ref={imageRef}
          className="ai-image-wrapper"
        >
          <img
            src="/assest/brandinghero.png"
            alt="AI technology"
          />
        </div>

        <div
          ref={contentRef}
          className="ai-content"
        >
          <h3>
            Gcore Inference at the Edge reduces the
            <br className="desktop-break" />
            latency of your ML model output and improves
            <br className="desktop-break" />
            the performance of AI-enabled applications.
          </h3>

          <p>
            It's particularly valuable for apps that need immediate
            processing and minimal delay, like generative AI and
            real-time object detection.
          </p>

          <div className="ai-features">
            <div>
              <span className="feature-icon orange">
                ◼
              </span>
              <strong>Text generation</strong>
            </div>

            <div>
              <span className="feature-icon purple">
                S.
              </span>
              <strong>Image generation</strong>
            </div>

            <div>
              <span className="feature-icon orange">
                ◉
              </span>
              <strong>Speech recognition</strong>
            </div>

            <div>
              <span className="feature-icon yellow">
                ▥
              </span>
              <strong>Text generation</strong>
            </div>

            <div>
              <span className="feature-icon purple">
                S.
              </span>
              <strong>Image generation</strong>
            </div>

            <div>
              <span className="feature-icon multi">
                ◈
              </span>
              <strong>Speech recognition</strong>
            </div>

            <div>
              <span className="feature-icon purple">
                S.
              </span>
              <strong>Image generation</strong>
            </div>

            <div>
              <span className="feature-icon multi">
                ▦
              </span>
              <strong>Image classification</strong>
            </div>

            <div>
              <span className="feature-icon orange">
                ◉
              </span>
              <strong>Speech recognition</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS SECTION
   ========================================================= */

const processItems = [
  {
    number: "01",
    title: "Know Your Business",
    description:
      "We understand your business, your audience, and what you want to achieve.",
  },
  {
    number: "02",
    title: "Build Your Brand",
    description:
      "We create a brand that looks clear, feels right, and stands out.",
  },
  {
    number: "03",
    title: "Create Your Presence",
    description:
      "We build your website, content, and social presence to help your business get noticed.",
  },
  {
    number: "04",
    title: "Reach More People",
    description:
      "We help you reach the right audience through social media, SEO, and advertising.",
  },
  {
    number: "05",
    title: "Grow Your Business",
    description:
      "We focus on what works and improve your marketing to bring better results.",
  },
  {
    number: "06",
    title: "Keep Growing Together",
    description:
      "As your business grows, we keep working with you to find new ways to move forward.",
  },
];

function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEntryAnimation(headingRef, {
    y: 40,
    duration: 0.8,
  });

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;

    if (!section || !timeline) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(
        ".process-card"
      );

      const dots = gsap.utils.toArray<HTMLElement>(
        ".process-dot"
      );

      const connectors = gsap.utils.toArray<HTMLElement>(
        ".process-connector"
      );

      gsap.set(cards, {
        opacity: 0,
        y: 25,
      });

      gsap.set(dots, {
        opacity: 0,
        scale: 0.5,
      });

      gsap.set(connectors, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      cards.forEach((card, index) => {
        tl.to(
          dots[index],
          {
            opacity: 1,
            scale: 1,
            duration: 0.35,
            ease: "back.out(2)",
          },
          index === 0 ? 0 : "+=0.15"
        );

        tl.to(
          card,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          },
          "<"
        );

        if (connectors[index]) {
          tl.to(
            connectors[index],
            {
              scaleX: 1,
              duration: 0.35,
              ease: "power2.out",
            },
            "<+0.15"
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="process-section"
    >
      <div
        ref={headingRef}
        className="process-heading"
      >
        <h2>Process we follow</h2>
        <p>It's particularly valuable</p>
      </div>

      <div
        ref={timelineRef}
        className="process-timeline"
      >
        <div className="timeline-line" />

        {processItems.map((item, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              className={`process-step ${
                isEven ? "step-top" : "step-bottom"
              }`}
              key={item.number}
            >
              <div className="process-card">
                <span className="process-number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>

              <div className="process-dot">
                <span />
              </div>

              {index < processItems.length - 1 && (
                <div className="process-connector" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* =========================================================
   INDUSTRIES SECTION
   ========================================================= */

const industries = [
  {
    title: "Real Estate & Interior Decorators",
    description:
      "Creating stunning digital experiences for spaces and lifestyles.",
  },
  {
    title: "Travel and Tourism",
    description:
      "Inspiring journeys with creative storytelling and digital campaigns.",
  },
  {
    title: "FMCG Brands",
    description:
      "Building brands that become household names.",
  },
  {
    title: "Bakery and Restaurants",
    description:
      "Serving creativity for brands that serve happiness.",
  },
  {
    title: "Ecommerce",
    description:
      "Driving growth for online stores with scroll-stopping content.",
  },
  {
    title: "IT & Consultancy",
    description:
      "Simplifying complex ideas with impactful digital solutions.",
  },
];

function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEntryAnimation(leftRef, {
    y: 45,
    duration: 0.9,
  });

  useEntryAnimation(gridRef, {
    y: 50,
    duration: 1,
    delay: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      className="industries-section"
    >
      <div
        ref={leftRef}
        className="industries-intro"
      >
        <span className="section-label">
          [ INDUSTRIES ]
        </span>

        <h2>
          Industries
          <br />
          <span>We worked</span>
          <br />
          <span>with</span>
        </h2>

        <div className="yellow-line" />

        <p>
          Different industries.
          <br />
          Real impact.
        </p>
      </div>

      <div
        ref={gridRef}
        className="industries-grid"
      >
        {industries.map((industry, index) => (
          <article
            className="industry-card"
            key={industry.title}
          >
            <div className="industry-image">
              <img
                src="/assest/brandinghero.png"
                alt={industry.title}
              />

              <div className="industry-icon">
                {index === 0 && "⌂"}
                {index === 1 && "✈"}
                {index === 2 && "▣"}
                {index === 3 && "♜"}
                {index === 4 && "▢"}
                {index === 5 && "♙"}
              </div>
            </div>

            <h3>{industry.title}</h3>

            <p>{industry.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   PPC ADVERTISING SECTION
   ========================================================= */

const ppcTabs = [
  {
    name: "Meta Ads",
    title: <>Get More Customers<br />Through <span>Social Ads</span></>,
    description:
      "Reach the right people with targeted Meta advertising campaigns built to generate leads, increase sales and grow your business.",
    bullets: [
      "Target high-intent customers",
      "Data-driven audience strategy",
      "Optimized campaigns for higher ROI",
    ],
  },
  {
    name: "Google Ads",
    title: <>Get More Customers<br />Through <span>Search Ads</span></>,
    description:
      "Appear exactly when potential customers are searching for your products or services with focused Google Search Ads campaigns.",
    bullets: [
      "Target high-intent keywords",
      "Data-driven keyword strategy",
      "Optimized campaigns for higher ROI",
    ],
  },
  {
    name: "YouTube Ads",
    title: <>Reach More Customers<br />Through <span>Video Ads</span></>,
    description:
      "Put your brand in front of the right audience with video campaigns designed to build attention, traffic and measurable business results.",
    bullets: [
      "Reach relevant audiences",
      "Creative-led video strategy",
      "Optimized campaigns for better ROI",
    ],
  },
];

function PPCSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEntryAnimation(sectionRef, {
    y: 55,
    duration: 1,
  });

  const activeContent = ppcTabs[activeTab];

  return (
    <section ref={sectionRef} className="ppc-section">
      <div className="ppc-header">
        <span className="section-label">[ PPC ADVERTISING ]</span>

        <h2>
          Ads Solutions That <span>Drive Results</span>
        </h2>

        <p>
          From search advertising to display campaigns and video marketing, we create high-performing PPC strategies
          <br className="desktop-break" />
          that generate leads, increase sales and grow your business.
        </p>
      </div>

      <div className="ppc-content">
        <div className="ppc-image-panel">
          <div className="ppc-image-inner">
            <img
              src="/assest/brandinghero.png"
              alt={`${activeContent.name} advertising`}
            />
          </div>
        </div>

        <div className="ppc-copy">
          <div className="ppc-tabs" role="tablist" aria-label="PPC advertising platforms">
            {ppcTabs.map((tab, index) => (
              <button
                key={tab.name}
                type="button"
                role="tab"
                aria-selected={activeTab === index}
                className={`ppc-tab ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="ppc-tab-content" key={activeContent.name}>
            <h3>{activeContent.title}</h3>

            <p>{activeContent.description}</p>

            <ul>
              {activeContent.bullets.map((bullet) => (
                <li key={bullet}>
                  <span className="ppc-check">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <button type="button" className="ppc-button">
              Get Started <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CREATIVE OUTCOMES CAROUSEL
   ========================================================= */

const creativeOutcomeImages = Array.from({ length: 11 }, (_, index) => ({
  id: index,
  image: "/assest/brandinghero.png",
}));

function CreativeOutcomesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEntryAnimation(sectionRef, {
    y: 45,
    duration: 0.9,
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % creativeOutcomeImages.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  const getPosition = (index: number) => {
    const total = creativeOutcomeImages.length;
    let offset = index - activeIndex;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const presets: Record<number, {
      x: number;
      y: number;
      rotate: number;
      scale: number;
      opacity: number;
      zIndex: number;
    }> = {
      [-5]: { x: -590, y: 125, rotate: -25, scale: 0.56, opacity: 0.55, zIndex: 1 },
      [-4]: { x: -500, y: 80, rotate: -20, scale: 0.62, opacity: 0.68, zIndex: 2 },
      [-3]: { x: -395, y: 42, rotate: -15, scale: 0.70, opacity: 0.78, zIndex: 3 },
      [-2]: { x: -280, y: 12, rotate: -10, scale: 0.78, opacity: 0.88, zIndex: 4 },
      [-1]: { x: -145, y: -5, rotate: -5, scale: 0.88, opacity: 0.96, zIndex: 5 },
      [0]: { x: 0, y: -18, rotate: 0, scale: 1, opacity: 1, zIndex: 10 },
      [1]: { x: 145, y: -5, rotate: 5, scale: 0.88, opacity: 0.96, zIndex: 5 },
      [2]: { x: 280, y: 12, rotate: 10, scale: 0.78, opacity: 0.88, zIndex: 4 },
      [3]: { x: 395, y: 42, rotate: 15, scale: 0.70, opacity: 0.78, zIndex: 3 },
      [4]: { x: 500, y: 80, rotate: 20, scale: 0.62, opacity: 0.68, zIndex: 2 },
      [5]: { x: 590, y: 125, rotate: 25, scale: 0.56, opacity: 0.55, zIndex: 1 },
    };

    return presets[offset] ?? {
      x: offset < 0 ? -720 : 720,
      y: 170,
      rotate: offset < 0 ? -30 : 30,
      scale: 0.48,
      opacity: 0,
      zIndex: 0,
    };
  };

  return (
    <section ref={sectionRef} className="creative-outcomes-section">
      <div className="creative-outcomes-inner">
        <div className="creative-outcomes-heading">
          One platform.
          <br />
          Every creative outcome.
        </div>

        <p className="creative-outcomes-copy">
          Be the creative director. Let agents be your team.
          <br className="desktop-break" />
          Brief our agent, watch the work assemble, and steer any
          <br className="desktop-break" />
          prompt until the output lands exactly as you imagined.
        </p>

        <button type="button" className="creative-outcomes-button">
          Start for Free
        </button>

        <div className="creative-outcomes-carousel" aria-label="Creative outcomes carousel">
          <div className="creative-outcomes-track">
            {creativeOutcomeImages.map((item, index) => {
              const position = getPosition(index);
              const visible = Math.abs(index - activeIndex) <= 5 ||
                Math.abs(index - activeIndex) >= creativeOutcomeImages.length - 5;

              if (!visible) return null;

              return (
                <div
                  key={item.id}
                  className="creative-outcome-card"
                  style={{
                    transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) rotate(${position.rotate}deg) scale(${position.scale})`,
                    opacity: position.opacity,
                    zIndex: position.zIndex,
                  }}
                >
                  <img
                    src={item.image}
                    alt={`Creative outcome ${item.id + 1}`}
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   BLOG SECTION
   ========================================================= */

type BlogPost = {
  date: string;
  category: string;
  title: string;
  description: string;
  image: string;
};

const blogPosts: BlogPost[] = [
  {
    date: "August 14, 2026",
    category: "Social Media",
    title: "How to Do SMM for a New Clinic in India | BigBeans",
    description:
      "Learn what to post when launching a clinic on Instagram, from educational content to trust-building posts that attract patients. Get started with BigBeans Digital.",
    image: "/assest/brandinghero.png",
  },
  {
    date: "August 17, 2026",
    category: "Social Media",
    title: "New Instagram Logo 2026: Wordmark Redesign & Brand Refresh",
    description:
      "Discover the new Instagram logo 2026, its wordmark redesign, typography changes and what Instagram's brand refresh means for marketers.",
    image: "/assest/brandinghero.png",
  },
  {
    date: "August 17, 2026",
    category: "Social Media",
    title: "Why Is My Competitor Getting More Leads? | Digital Marketing India",
    description:
      "Your competitor opened later but gets more leads. Discover how SEO, Google Business Profile, social media, reviews and local digital marketing can help Indian businesses grow.",
    image: "/assest/brandinghero.png",
  },
];

function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEntryAnimation(headingRef, {
    y: 40,
    duration: 0.9,
  });

  useEntryAnimation(cardsRef, {
    y: 55,
    duration: 1,
    delay: 0.12,
  });

  return (
    <section ref={sectionRef} className="blog-section">
      <div className="blog-particle-glow" aria-hidden="true" />

      <div className="blog-inner">
        <div ref={headingRef} className="blog-heading-row">
          <div className="blog-heading-content">
            <h2>
              Stay Updated with <span>Our Blogs</span>
            </h2>

            <p>
              Explore practical insights on social media marketing, digital marketing,
              branding, SEO, content strategy, creative design, and business growth.
              From guides for startups to actionable marketing strategies for established
              businesses, our blogs help you understand what works, what is changing, and
              how to build a stronger digital presence in India and the UK.
            </p>
          </div>

          <a href="https://www.bigbeansdigital.com/blog" className="blog-view-all">
            <span>View All Blogs</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div ref={cardsRef} className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.title} className="blog-card">
              <div className="blog-card-image">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="blog-card-image-element"
                />

                <div className="blog-image-overlay" aria-hidden="true" />

                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span className="blog-category">{post.category}</span>
                </div>
              </div>

              <div className="blog-card-content">
                <h3>{post.title}</h3>
                <p>{post.description}</p>

                <div className="blog-card-footer">
                  <a href="https://www.bigbeansdigital.com/blog" className="blog-read-link">
                    <span>READ ARTICLE</span>
                    <span className="blog-arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TESTIMONIALS SECTION
   ========================================================= */

const testimonials = [
  {
    quote:
      "Big Beans Digital helped us build a brand identity that actually reflects who we are. The team is creative, responsive and truly understands results.",
    name: "Arjun Mehta",
    role: "Founder, Mehta Interiors",
    initial: "A",
  },
  {
    quote:
      "Our social media engagement has doubled within 3 months. The content strategy and designs are top-notch!",
    name: "Priya Sharma",
    role: "Marketing Head, GlowCare",
    initial: "P",
  },
  {
    quote:
      "Professional, innovative and result-driven. Big Beans Digital completely transformed our online presence. Highly recommended!",
    name: "Karan Malhotra",
    role: "CEO, UrbanSpaces",
    initial: "K",
  },
  {
    quote:
      "The team is extremely supportive and delivers beyond expectations. From website development to ad campaigns, everything was seamless.",
    name: "Sneha Iyer",
    role: "Founder, FitLife Studio",
    initial: "S",
  },
  {
    quote:
      "Working with Big Beans Digital has been a game-changer for our business. They understand our vision and always bring fresh ideas to the table.",
    name: "Rohit Verma",
    role: "Owner, Cafe Bliss",
    initial: "R",
  },
  {
    quote:
      "The team understood our goals quickly and turned them into clear, useful marketing campaigns that our customers responded to.",
    name: "Ananya Kapoor",
    role: "Founder, Urban Living",
    initial: "A",
  },
  {
    quote:
      "From strategy to execution, the process was simple and transparent. We finally have a digital presence that feels like our brand.",
    name: "Vikram Singh",
    role: "Director, Prime Estates",
    initial: "V",
  },
  {
    quote:
      "Big Beans Digital gave us a consistent content system and helped us turn our social channels into a real business asset.",
    name: "Meera Nair",
    role: "Co-Founder, FreshBox",
    initial: "M",
  },
  {
    quote:
      "Their creative team is fast, thoughtful and easy to work with. The quality of the work has been consistently strong.",
    name: "Aditya Roy",
    role: "Marketing Manager, NovaTech",
    initial: "A",
  },
];

function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activePage, setActivePage] = useState(0);
  const cardsPerPage = 5;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  useEntryAnimation(sectionRef, {
    y: 55,
    duration: 0.9,
  });

  const visibleTestimonials = testimonials.slice(
    activePage * cardsPerPage,
    activePage * cardsPerPage + cardsPerPage
  );

  const goToPrevious = () => {
    setActivePage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setActivePage((prev) => (prev + 1) % totalPages);
  };

  return (
    <section ref={sectionRef} className="testimonials-section">
      <div className="testimonials-header">
        <div className="testimonial-label-wrap">
          <span className="testimonial-label-line" />
          <span className="testimonial-label-dot" />
          <span className="testimonial-label">Testimonials</span>
          <span className="testimonial-label-dot" />
          <span className="testimonial-label-line" />
        </div>

        <h2>
          What our clients are <span>saying</span>
        </h2>

        <p>
          Our work speaks through the success of our clients. Here's what they have to say
          <br className="desktop-break" />
          about their experience working with us.
        </p>
      </div>

      <div className="testimonials-carousel-wrap">
        <button
          type="button"
          className="testimonial-arrow testimonial-arrow-left"
          onClick={goToPrevious}
          aria-label="Previous testimonials"
        >
          ‹
        </button>

        <div className="testimonials-grid">
          {visibleTestimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-quote-icon" aria-hidden="true">
                “
              </div>

              <p className="testimonial-quote">“{testimonial.quote}”</p>

              <div className="testimonial-divider" />

              <div className="testimonial-person">
                <div className="testimonial-avatar" aria-hidden="true">
                  {testimonial.initial}
                </div>
                <div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="testimonial-arrow testimonial-arrow-right"
          onClick={goToNext}
          aria-label="Next testimonials"
        >
          ›
        </button>
      </div>

      <div className="testimonial-dots" aria-label="Testimonial pages">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to testimonial page ${index + 1}`}
            aria-current={activePage === index ? "true" : undefined}
            className={`testimonial-dot ${activePage === index ? "active" : ""}`}
            onClick={() => setActivePage(index)}
          />
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   MAIN PAGE
   ========================================================= */

export default function CinematicBackgroundPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="page">
      <CinematicBackground />
      <CinematicEffects />

      <div className="page-content">
        <HeroSection />

        <ResultsSection />

        <AISection />

        <ProcessSection />

        <IndustriesSection />

        <PPCSection />

        <CreativeOutcomesSection />

        <BlogSection />

        <TestimonialsSection />
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          background: #000;
        }

        body {
          margin: 0;
          padding: 0;
          background: #000;
          color: #fff;
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        button {
          font: inherit;
        }

        .page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background: #000;
        }

        .page-content {
          position: relative;
          z-index: 10;
          width: 100%;
        }

        /* =====================================================
           COMMON SECTION SPACING
           ===================================================== */

        .hero-section,
        .results-section,
        .ai-section,
        .process-section,
        .industries-section {
          width: 100%;
          padding-top: 5px;
          padding-bottom: 5px;
        }

        /* =====================================================
           HERO
           ===================================================== */

        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .hero-inner {
          width: min(1500px, calc(100% - 80px));
          min-height: calc(100vh - 10px);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 30px;
        }

        .hero-content {
          padding-left: 25px;
        }

        .hero-content h1 {
          margin: 0;
          font-size: clamp(42px, 4.4vw, 76px);
          line-height: 0.98;
          font-weight: 400;
          letter-spacing: -0.045em;
          color: #f5f5f5;
        }

        .hero-content h1 span {
          color: #f8bc04;
        }

        .hero-content p {
          margin: 28px 0 0;
          font-size: clamp(18px, 1.45vw, 25px);
          line-height: 1.4;
          font-weight: 400;
          color: #ededed;
          max-width: 720px;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 36px;
        }

        .primary-button,
        .secondary-button {
          height: 70px;
          padding: 0 34px;
          border-radius: 10px;
          cursor: pointer;
          font-size: 21px;
          transition: none;
        }

        .primary-button {
          min-width: 305px;
          border: 1px solid #f8bc04;
          background: #f8bc04;
          color: #000;
          font-weight: 600;
        }

        .secondary-button {
          min-width: 210px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          background: transparent;
          color: #fff;
          font-weight: 400;
        }

        .hero-partner {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 58px;
        }

        .hero-partner span {
          font-size: 16px;
          line-height: 1.35;
          color: #eee;
        }

        .hero-partner strong {
          color: #f8bc04;
          font-family: Georgia, serif;
          font-size: 54px;
          font-weight: 400;
          line-height: 0.7;
        }

        .hero-image {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image img {
          display: block;
          width: min(100%, 760px);
          height: auto;
          object-fit: contain;
        }

        /* =====================================================
           RESULTS
           ===================================================== */

        .results-section {
          padding-left: 20px;
          padding-right: 20px;
        }

        .results-frame {
          width: min(1150px, 100%);
          margin: 0 auto;
          padding: 40px;
          border: 2px solid #f8bc04;
          border-radius: 34px;
          background: #f8bc04;
          box-shadow:
            0 0 30px rgba(248, 188, 4, 0.35),
            0 0 90px rgba(248, 188, 4, 0.12);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .result-card {
          position: relative;
          min-height: 290px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          background:
            radial-gradient(
              circle at 70% 70%,
              rgba(248, 188, 4, 0.08),
              transparent 40%
            ),
            #050505;
          padding: 32px;
        }

        .result-card-copy {
          position: relative;
          z-index: 2;
        }

        .result-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }

        .result-card h2 {
          margin: 0;
          color: #f5f5f5;
          font-size: clamp(28px, 2.2vw, 38px);
          line-height: 1.05;
          letter-spacing: -0.035em;
        }

        .result-card p {
          margin: 14px 0 0;
          color: #bcbcbc;
          font-size: 18px;
          line-height: 1.35;
        }

        .result-tag {
          flex-shrink: 0;
          border: 1px solid rgba(248, 188, 4, 0.65);
          border-radius: 14px;
          padding: 13px 20px;
          color: #fff;
          font-size: 16px;
        }

        .result-stat {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 38px;
        }

        .mini-bars {
          display: flex;
          align-items: flex-end;
          gap: 4px;
          height: 35px;
        }

        .mini-bars span {
          width: 5px;
          background: #f8bc04;
        }

        .mini-bars span:nth-child(1) {
          height: 17px;
        }

        .mini-bars span:nth-child(2) {
          height: 27px;
        }

        .mini-bars span:nth-child(3) {
          height: 35px;
        }

        .result-stat strong {
          display: block;
          color: #f8bc04;
          font-size: 29px;
          line-height: 1;
        }

        .result-stat small {
          display: block;
          margin-top: 4px;
          color: #ddd;
          font-size: 16px;
        }

        .growth-bars {
          position: absolute;
          right: 32px;
          bottom: 25px;
          display: flex;
          align-items: flex-end;
          gap: 13px;
        }

        .growth-bars span {
          display: block;
          width: 35px;
          border-radius: 5px;
          background: linear-gradient(
            to top,
            #8d6200,
            #ffd94b
          );
        }

        .growth-bars span:nth-child(1) {
          height: 55px;
        }

        .growth-bars span:nth-child(2) {
          height: 90px;
        }

        .growth-bars span:nth-child(3) {
          height: 125px;
        }

        .growth-bars span:nth-child(4) {
          height: 160px;
        }

        .reach-box {
          width: 230px;
          margin-top: 20px;
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 14px;
        }

        .reach-box small {
          display: block;
          font-size: 14px;
          color: #ddd;
        }

        .reach-box div {
          display: flex;
          align-items: baseline;
          gap: 14px;
          margin-top: 6px;
        }

        .reach-box strong {
          font-size: 31px;
        }

        .reach-box span {
          color: #00ff5e;
          font-size: 18px;
        }

        .line-chart {
          position: absolute;
          right: 15px;
          bottom: 15px;
          width: 55%;
          height: 62%;
          opacity: 0.95;
        }

        .line-chart svg {
          width: 100%;
          height: 100%;
        }

        .result-card-wide {
          grid-column: 1 / -1;
          min-height: 305px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .wide-copy {
          position: relative;
          z-index: 3;
          padding-left: 5px;
        }

        .wide-copy h2 {
          font-size: clamp(30px, 2.5vw, 42px);
        }

        .wide-copy p {
          margin-top: 25px;
        }

        .creative-visual {
          position: relative;
          width: 60%;
          height: 270px;
        }

        .creative-card,
        .engagement-card {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 14px;
          background: #080808;
          overflow: hidden;
        }

        .creative-card {
          width: 180px;
          height: 245px;
          padding: 25px;
        }

        .creative-card strong {
          position: relative;
          z-index: 2;
          font-size: 21px;
          line-height: 1;
        }

        .creative-card-one {
          left: 0;
          top: 5px;
          transform: rotate(-6deg);
          background:
            radial-gradient(
              circle at 70% 55%,
              rgba(248, 188, 4, 0.6),
              transparent 22%
            ),
            #080808;
        }

        .moon {
          position: absolute;
          width: 75px;
          height: 75px;
          right: 25px;
          bottom: 75px;
          border-radius: 50%;
          background: #f8bc04;
          opacity: 0.8;
          filter: blur(1px);
        }

        .engagement-card {
          left: 32%;
          top: 0;
          width: 240px;
          height: 270px;
          padding: 20px;
          z-index: 3;
        }

        .engagement-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 15px;
        }

        .engagement-heading span {
          border-radius: 8px;
          background: #242424;
          padding: 5px 9px;
          font-size: 10px;
        }

        .engagement-bars {
          height: 105px;
          display: flex;
          align-items: flex-end;
          gap: 7px;
          margin-top: 12px;
        }

        .engagement-bars span {
          width: 10px;
          background: linear-gradient(
            to top,
            #7b5500,
            #f8bc04
          );
        }

        .engagement-data {
          margin-top: 10px;
          padding: 5px 8px;
          border-radius: 10px;
          background: #111;
        }

        .engagement-data div {
          display: flex;
          justify-content: space-between;
          padding: 4px 0;
          border-bottom: 1px solid #292929;
          font-size: 12px;
        }

        .engagement-data div:last-child {
          border-bottom: 0;
        }

        .creative-card-three {
          right: 0;
          top: 15px;
          transform: rotate(6deg);
          background:
            radial-gradient(
              circle at 80% 70%,
              rgba(248, 188, 4, 0.45),
              transparent 40%
            ),
            #080808;
        }

        .trusted {
          padding: 35px 10px 25px;
          text-align: center;
          overflow: hidden;
        }

        .trusted > p {
          margin: 0 0 25px;
          color: #ddd;
          font-size: 20px;
        }

        .brand-carousel {
          width: 100%;
          overflow: hidden;
        }

        .brand-track {
          display: flex;
          width: max-content;
          animation: brandScroll 28s linear infinite;
        }

        .brand-item {
          min-width: 180px;
          padding: 0 35px;
          border-right: 1px solid rgba(255, 255, 255, 0.35);
          color: #ddd;
          font-size: 17px;
          letter-spacing: 0.12em;
          white-space: nowrap;
        }

        @keyframes brandScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* =====================================================
           AI
           ===================================================== */

        .ai-section {
          width: min(1500px, calc(100% - 80px));
          margin: 0 auto;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .ai-heading {
          margin: 0 auto 55px;
          max-width: 1000px;
          text-align: center;
          font-size: clamp(38px, 4.2vw, 70px);
          line-height: 1.05;
          letter-spacing: -0.045em;
        }

        .ai-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: clamp(40px, 7vw, 100px);
          align-items: center;
        }

        .ai-image-wrapper {
          width: 100%;
          aspect-ratio: 0.9;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 30px;
        }

        .ai-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ai-content h3 {
          margin: 0;
          font-size: clamp(28px, 2.5vw, 43px);
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .ai-content > p {
          margin: 30px 0 0;
          max-width: 760px;
          color: #ddd;
          font-size: clamp(18px, 1.5vw, 25px);
          line-height: 1.4;
        }

        .ai-features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px 35px;
          margin-top: 55px;
        }

        .ai-features div {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }

        .feature-icon {
          flex-shrink: 0;
          display: grid;
          place-items: center;
          width: 35px;
          height: 35px;
          font-size: 27px;
          font-weight: 700;
        }

        .feature-icon.orange {
          color: #ff6500;
        }

        .feature-icon.purple {
          color: #bd3cff;
        }

        .feature-icon.yellow {
          color: #f8bc04;
        }

        .feature-icon.multi {
          color: #b25cff;
        }

        .ai-features strong {
          color: #eee;
          font-size: 15px;
          line-height: 1.2;
        }

        /* =====================================================
           PROCESS
           ===================================================== */

        .process-section {
          width: min(1500px, calc(100% - 80px));
          margin: 0 auto;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .process-heading {
          text-align: center;
          margin-bottom: 80px;
        }

        .process-heading h2 {
          margin: 0;
          font-size: clamp(38px, 4vw, 65px);
          letter-spacing: -0.045em;
        }

        .process-heading p {
          margin: 15px 0 0;
          color: #aaa;
          font-size: 21px;
        }

        .process-timeline {
          position: relative;
          width: 100%;
          height: 550px;
        }

        .timeline-line {
          position: absolute;
          left: 3%;
          right: 3%;
          top: 50%;
          height: 3px;
          transform: translateY(-50%);
          background: #f8bc04;
          box-shadow: 0 0 20px rgba(248, 188, 4, 0.7);
        }

        .process-step {
          position: absolute;
          top: 50%;
          width: 15%;
          height: 100%;
          transform: translateY(-50%);
        }

        .process-step:nth-child(2) {
          left: 0%;
        }

        .process-step:nth-child(3) {
          left: 17%;
        }

        .process-step:nth-child(4) {
          left: 34%;
        }

        .process-step:nth-child(5) {
          left: 51%;
        }

        .process-step:nth-child(6) {
          left: 68%;
        }

        .process-step:nth-child(7) {
          left: 85%;
        }

        .process-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 48px;
          height: 48px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 8px solid #f8bc04;
          background: #000;
          box-shadow:
            0 0 20px rgba(248, 188, 4, 0.8),
            0 0 45px rgba(248, 188, 4, 0.3);
          z-index: 4;
        }

        .process-dot span {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 8px;
          height: 8px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: #f8bc04;
        }

        .process-card {
          position: absolute;
          left: 50%;
          width: min(245px, 100%);
          padding: 20px;
          transform: translateX(-50%);
          border: 1px solid rgba(255, 255, 255, 0.17);
          border-radius: 18px;
          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.06),
              rgba(255, 255, 255, 0.015)
            ),
            #090909;
          text-align: center;
        }

        .step-top .process-card {
          bottom: calc(50% + 55px);
        }

        .step-bottom .process-card {
          top: calc(50% + 55px);
        }

        .process-number {
          display: block;
          margin-bottom: 15px;
          color: #f8bc04;
          font-size: 15px;
          letter-spacing: 0.15em;
        }

        .process-card h3 {
          margin: 0;
          font-size: 22px;
          line-height: 1.15;
        }

        .process-card p {
          margin: 14px 0 0;
          color: #bbb;
          font-size: 15px;
          line-height: 1.45;
        }

        .process-connector {
          position: absolute;
          left: calc(50% + 24px);
          top: 50%;
          width: calc(100% + 0px);
          height: 2px;
          transform: translateY(-50%);
          background: #f8bc04;
          opacity: 0;
          z-index: 2;
        }

        /* =====================================================
           PPC ADVERTISING
           ===================================================== */

        .ppc-section {
          width: min(1500px, calc(100% - 80px));
          margin: 0 auto;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .ppc-header {
          text-align: center;
        }

        .ppc-header .section-label {
          display: inline-block;
        }

        .ppc-header h2 {
          margin: 18px 0 0;
          font-size: clamp(42px, 4.2vw, 68px);
          line-height: 1.02;
          letter-spacing: -0.045em;
          font-weight: 600;
        }

        .ppc-header h2 span {
          color: #f8bc04;
        }

        .ppc-header > p {
          margin: 20px auto 0;
          max-width: 1100px;
          color: #aab0c0;
          font-size: clamp(17px, 1.35vw, 22px);
          line-height: 1.45;
        }

        .ppc-content {
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          gap: clamp(45px, 5vw, 80px);
          align-items: center;
          margin-top: 60px;
        }

        .ppc-image-panel {
          min-width: 0;
          padding: 38px;
          border-radius: 34px;
          background: #f8bc04;
          box-shadow:
            0 0 30px rgba(248, 188, 4, 0.25),
            0 0 75px rgba(248, 188, 4, 0.10);
        }

        .ppc-image-inner {
          width: 100%;
          aspect-ratio: 1.45;
          overflow: hidden;
          border-radius: 22px;
          background: #fff;
        }

        .ppc-image-inner img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .ppc-copy {
          min-width: 0;
        }

        .ppc-tabs {
          display: flex;
          align-items: stretch;
          width: 100%;
          border-bottom: 2px solid #f8bc04;
        }

        .ppc-tab {
          flex: 1;
          min-width: 0;
          padding: 15px 20px 17px;
          border: 0;
          border-radius: 13px 13px 0 0;
          background: transparent;
          color: #f5f5f5;
          font-size: clamp(15px, 1.3vw, 19px);
          font-weight: 500;
          text-align: center;
          cursor: pointer;
          white-space: nowrap;
          transition: none;
        }

        .ppc-tab.active {
          background: #f8bc04;
          color: #000;
        }

        .ppc-tab-content {
          padding-top: 28px;
        }

        .ppc-tab-content h3 {
          margin: 0;
          font-size: clamp(36px, 3.5vw, 58px);
          line-height: 1.04;
          letter-spacing: -0.04em;
          font-weight: 600;
        }

        .ppc-tab-content h3 span {
          color: #f8bc04;
        }

        .ppc-tab-content > p {
          margin: 27px 0 0;
          max-width: 720px;
          color: #aab0c0;
          font-size: clamp(17px, 1.4vw, 22px);
          line-height: 1.45;
        }

        .ppc-tab-content ul {
          display: grid;
          gap: 13px;
          margin: 28px 0 0;
          padding: 0;
          list-style: none;
        }

        .ppc-tab-content li {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #ddd;
          font-size: clamp(16px, 1.3vw, 20px);
          line-height: 1.35;
        }

        .ppc-check {
          display: grid;
          place-items: center;
          flex: 0 0 30px;
          width: 30px;
          height: 30px;
          border-radius: 5px;
          background: #f8bc04;
          color: #000;
          font-size: 19px;
          font-weight: 800;
        }

        .ppc-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          min-width: 200px;
          height: 64px;
          margin-top: 30px;
          padding: 0 25px;
          border: 1px solid #f8bc04;
          border-radius: 10px;
          background: #f8bc04;
          color: #000;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: none;
        }

        .ppc-button span {
          font-size: 25px;
          line-height: 1;
        }

        /* =====================================================
           INDUSTRIES
           ===================================================== */

        .industries-section {
          width: min(1500px, calc(100% - 80px));
          margin: 0 auto;
          padding-top: 80px;
          padding-bottom: 80px;
          display: grid;
          grid-template-columns: 290px 1fr;
          gap: 65px;
          align-items: start;
        }

        .section-label {
          display: inline-block;
          color: #f8bc04;
          font-size: 14px;
          letter-spacing: 0.1em;
        }

        .industries-intro h2 {
          margin: 50px 0 0;
          font-size: clamp(42px, 4vw, 68px);
          line-height: 1;
          letter-spacing: -0.045em;
        }

        .industries-intro h2 span {
          color: #f8bc04;
        }

        .yellow-line {
          width: 58px;
          height: 3px;
          margin-top: 38px;
          background: #f8bc04;
        }

        .industries-intro > p {
          margin-top: 30px;
          color: #aab0c0;
          font-size: 21px;
          line-height: 1.45;
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 38px 36px;
        }

        .industry-card {
          min-width: 0;
        }

        .industry-image {
          position: relative;
          width: 100%;
          aspect-ratio: 1.65;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 14px;
        }

        .industry-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .industry-icon {
          position: absolute;
          left: 12px;
          bottom: -1px;
          display: grid;
          place-items: center;
          width: 65px;
          height: 65px;
          border: 1px solid #f8bc04;
          border-radius: 50%;
          background: #050505;
          color: #f8bc04;
          font-size: 28px;
          box-shadow: 0 0 15px rgba(248, 188, 4, 0.3);
        }

        .industry-card h3 {
          margin: 13px 0 0;
          font-size: 19px;
          line-height: 1.2;
        }

        .industry-card > p {
          margin: 8px 0 0;
          color: #9ca0aa;
          font-size: 16px;
          line-height: 1.4;
        }

        /* =====================================================
           LARGE LAPTOP
           ===================================================== */

        @media (max-width: 1200px) {
          .hero-inner,
          .ai-section,
          .process-section,
          .industries-section {
            width: min(1100px, calc(100% - 50px));
          }

          .results-frame {
            width: min(1050px, 100%);
          }

          .hero-content {
            padding-left: 0;
          }

          .hero-content h1 {
            font-size: clamp(40px, 5vw, 62px);
          }

          .hero-content p {
            font-size: 18px;
          }

          .process-card {
            width: 185px;
            padding: 16px;
          }

          .process-card h3 {
            font-size: 18px;
          }

          .process-card p {
            font-size: 13px;
          }

          .industries-section {
            grid-template-columns: 250px 1fr;
            gap: 45px;
          }
        }

        /* =====================================================
           TABLET
           ===================================================== */

        @media (max-width: 900px) {
          .hero-section {
            min-height: auto;
            padding-top: 55px;
            padding-bottom: 5px;
          }

          .hero-inner {
            min-height: auto;
            grid-template-columns: 1fr;
            gap: 35px;
            text-align: center;
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-content h1 {
            font-size: clamp(42px, 7vw, 60px);
          }

          .hero-content p {
            max-width: 650px;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-partner {
            justify-content: center;
          }

          .hero-image {
            max-width: 650px;
            margin: 0 auto;
          }

          .results-frame {
            padding: 22px;
            border-radius: 25px;
          }

          .result-card {
            min-height: 260px;
            padding: 25px;
          }

          .creative-visual {
            width: 55%;
          }

          .ai-section {
            width: min(750px, calc(100% - 50px));
          }

          .ai-grid {
            grid-template-columns: 1fr;
          }

          .ai-image-wrapper {
            max-width: 600px;
            margin: 0 auto;
          }

          .ai-content h3,
          .ai-content > p {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }

          .ai-features {
            grid-template-columns: repeat(2, 1fr);
          }

          .process-section {
            width: calc(100% - 40px);
          }

          .process-timeline {
            height: auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .timeline-line,
          .process-connector,
          .process-dot {
            display: none;
          }

          .process-step,
          .process-step:nth-child(2),
          .process-step:nth-child(3),
          .process-step:nth-child(4),
          .process-step:nth-child(5),
          .process-step:nth-child(6),
          .process-step:nth-child(7) {
            position: relative;
            left: auto;
            top: auto;
            width: 100%;
            height: auto;
            transform: none;
          }

          .process-card,
          .step-top .process-card,
          .step-bottom .process-card {
            position: relative;
            inset: auto;
            width: 100%;
            transform: none;
          }

          .industries-section {
            grid-template-columns: 1fr;
            width: calc(100% - 50px);
          }

          .industries-intro {
            text-align: center;
          }

          .yellow-line {
            margin-left: auto;
            margin-right: auto;
          }

          .industries-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* =====================================================
           MOBILE
           ===================================================== */

        @media (max-width: 600px) {
          .hero-section {
            padding-top: 35px;
          }

          .hero-inner {
            width: calc(100% - 30px);
            gap: 20px;
          }

          .hero-content h1 {
            font-size: clamp(36px, 10vw, 48px);
            line-height: 1;
          }

          .hero-content p {
            margin-top: 20px;
            font-size: 16px;
            line-height: 1.45;
          }

          .desktop-break {
            display: none;
          }

          .hero-buttons {
            width: 100%;
            flex-direction: column;
            gap: 12px;
            margin-top: 25px;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
            min-width: 0;
            height: 60px;
            font-size: 18px;
          }

          .hero-partner {
            gap: 16px;
            margin-top: 35px;
          }

          .hero-partner span {
            font-size: 12px;
          }

          .hero-partner strong {
            font-size: 42px;
          }

          .hero-image {
            width: 100%;
          }

          .results-section {
            padding-left: 10px;
            padding-right: 10px;
          }

          .results-frame {
            grid-template-columns: 1fr;
            padding: 12px;
            border-radius: 20px;
            gap: 12px;
          }

          .result-card {
            min-height: 260px;
            padding: 22px;
          }

          .result-card-wide {
            grid-column: auto;
            min-height: 350px;
            display: block;
          }

          .result-top {
            display: block;
          }

          .result-tag {
            display: inline-block;
            margin-top: 18px;
          }

          .result-card h2 {
            font-size: 29px;
          }

          .result-card p {
            font-size: 16px;
          }

          .growth-bars {
            right: 18px;
            bottom: 18px;
            gap: 7px;
          }

          .growth-bars span {
            width: 25px;
          }

          .line-chart {
            width: 65%;
            height: 50%;
          }

          .wide-copy {
            padding: 0;
          }

          .creative-visual {
            width: 100%;
            height: 220px;
            margin-top: 20px;
          }

          .creative-card {
            width: 105px;
            height: 165px;
            padding: 15px;
          }

          .creative-card strong {
            font-size: 15px;
          }

          .engagement-card {
            left: 26%;
            width: 145px;
            height: 205px;
            padding: 12px;
          }

          .engagement-heading {
            font-size: 11px;
          }

          .engagement-bars {
            height: 75px;
            gap: 4px;
          }

          .engagement-bars span {
            width: 6px;
          }

          .engagement-data div {
            font-size: 9px;
            padding: 3px 0;
          }

          .trusted {
            padding-top: 25px;
          }

          .trusted > p {
            font-size: 16px;
            line-height: 1.35;
            margin-bottom: 20px;
          }

          .brand-item {
            min-width: 135px;
            padding: 0 22px;
            font-size: 13px;
          }

          .ai-section {
            width: calc(100% - 30px);
            padding-top: 55px;
            padding-bottom: 55px;
          }

          .ai-heading {
            margin-bottom: 30px;
            font-size: clamp(34px, 9vw, 46px);
          }

          .ai-grid {
            gap: 35px;
          }

          .ai-image-wrapper {
            border-radius: 20px;
          }

          .ai-content h3 {
            font-size: 25px;
            text-align: left;
          }

          .ai-content > p {
            margin-top: 20px;
            font-size: 17px;
            text-align: left;
          }

          .ai-features {
            grid-template-columns: 1fr;
            gap: 17px;
            margin-top: 35px;
          }

          .ai-features strong {
            font-size: 15px;
          }

          .process-section {
            width: calc(100% - 30px);
            padding-top: 55px;
            padding-bottom: 55px;
          }

          .process-heading {
            margin-bottom: 35px;
          }

          .process-heading h2 {
            font-size: 38px;
          }

          .process-heading p {
            font-size: 17px;
          }

          .process-timeline {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .process-card {
            padding: 22px;
          }

          .process-card h3 {
            font-size: 21px;
          }

          .process-card p {
            font-size: 15px;
          }

          .industries-section {
            width: calc(100% - 30px);
            padding-top: 55px;
            padding-bottom: 55px;
            gap: 35px;
          }

          .industries-intro {
            text-align: left;
          }

          .industries-intro h2 {
            margin-top: 30px;
            font-size: 48px;
          }

          .yellow-line {
            margin-left: 0;
          }

          .industries-intro > p {
            font-size: 18px;
          }

          .industries-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .industry-image {
            aspect-ratio: 1.55;
          }

          .industry-icon {
            width: 58px;
            height: 58px;
            font-size: 24px;
          }

          .industry-card h3 {
            font-size: 19px;
          }

          .industry-card > p {
            font-size: 15px;
          }
        }

        @media (max-width: 1200px) {
          .ppc-section {
            width: min(1100px, calc(100% - 50px));
          }

          .ppc-content {
            gap: 45px;
          }

          .ppc-image-panel {
            padding: 28px;
          }
        }

        @media (max-width: 900px) {
          .ppc-section {
            width: min(750px, calc(100% - 50px));
          }

          .ppc-content {
            grid-template-columns: 1fr;
            gap: 45px;
            margin-top: 45px;
          }

          .ppc-image-panel {
            width: 100%;
            max-width: 650px;
            margin: 0 auto;
          }

          .ppc-copy {
            width: 100%;
          }

          .ppc-tab-content h3,
          .ppc-tab-content > p {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }

          .ppc-tab-content ul {
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          .ppc-button {
            display: flex;
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 600px) {
          .ppc-section {
            width: calc(100% - 30px);
            padding-top: 55px;
            padding-bottom: 55px;
          }

          .ppc-header h2 {
            margin-top: 14px;
            font-size: clamp(35px, 9.5vw, 48px);
          }

          .ppc-header > p {
            margin-top: 18px;
            font-size: 16px;
          }

          .ppc-content {
            gap: 35px;
            margin-top: 35px;
          }

          .ppc-image-panel {
            padding: 14px;
            border-radius: 22px;
          }

          .ppc-image-inner {
            aspect-ratio: 1.15;
            border-radius: 14px;
          }

          .ppc-tabs {
            border-bottom-width: 1px;
          }

          .ppc-tab {
            padding: 12px 6px 13px;
            font-size: 13px;
          }

          .ppc-tab-content {
            padding-top: 24px;
          }

          .ppc-tab-content h3 {
            font-size: clamp(29px, 8vw, 39px);
          }

          .ppc-tab-content > p {
            margin-top: 20px;
            font-size: 16px;
          }

          .ppc-tab-content ul {
            gap: 11px;
            margin-top: 23px;
          }

          .ppc-tab-content li {
            gap: 11px;
            font-size: 15px;
          }

          .ppc-check {
            flex-basis: 27px;
            width: 27px;
            height: 27px;
            font-size: 17px;
          }

          .ppc-button {
            width: 100%;
            height: 58px;
            margin-top: 27px;
            font-size: 17px;
          }
        }

        /* =====================================================
           CREATIVE OUTCOMES CAROUSEL
           ===================================================== */

        .creative-outcomes-section {
          width: 100%;
          padding: 5px 0;
          overflow: hidden;
          background: #000;
        }

        .creative-outcomes-inner {
          position: relative;
          width: min(1600px, calc(100% - 40px));
          min-height: 820px;
          margin: 0 auto;
          padding: 70px 0 20px;
          overflow: hidden;
        }

        .creative-outcomes-heading {
          position: relative;
          z-index: 20;
          text-align: center;
          color: #f5f5f5;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 6vw, 92px);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 400;
        }

        .creative-outcomes-copy {
          position: relative;
          z-index: 20;
          margin: 36px auto 0;
          max-width: 760px;
          text-align: center;
          color: #e4e4e4;
          font-size: clamp(16px, 1.3vw, 21px);
          line-height: 1.5;
        }

        .creative-outcomes-button {
          position: relative;
          z-index: 30;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 202px;
          height: 60px;
          margin: 38px auto 0;
          border: 1px solid #f8bc04;
          border-radius: 10px;
          background: #f8bc04;
          color: #000;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
          transition: none;
        }

        .creative-outcomes-carousel {
          position: relative;
          width: 100%;
          height: 520px;
          margin-top: 30px;
          overflow: visible;
        }

        .creative-outcomes-track {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .creative-outcome-card {
          position: absolute;
          left: 50%;
          top: 55%;
          width: clamp(150px, 14vw, 230px);
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          background: #111;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.65);
          transform-origin: center center;
          transition:
            transform 1.05s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 1.05s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity;
        }

        .creative-outcome-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          user-select: none;
          -webkit-user-drag: none;
        }

        .creative-outcomes-carousel::before,
        .creative-outcomes-carousel::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 13%;
          z-index: 40;
          pointer-events: none;
        }

        .creative-outcomes-carousel::before {
          left: 0;
          background: linear-gradient(to right, #000, transparent);
        }

        .creative-outcomes-carousel::after {
          right: 0;
          background: linear-gradient(to left, #000, transparent);
        }

        @media (max-width: 1200px) {
          .creative-outcomes-inner {
            min-height: 740px;
            padding-top: 60px;
          }

          .creative-outcomes-carousel {
            height: 440px;
            margin-top: 25px;
          }

          .creative-outcome-card {
            width: clamp(135px, 15vw, 205px);
          }
        }

        @media (max-width: 900px) {
          .creative-outcomes-inner {
            width: calc(100% - 30px);
            min-height: 760px;
            padding-top: 55px;
          }

          .creative-outcomes-heading {
            font-size: clamp(42px, 8vw, 64px);
          }

          .creative-outcomes-copy {
            margin-top: 25px;
            font-size: 17px;
          }

          .creative-outcomes-carousel {
            height: 390px;
            margin-top: 20px;
          }

          .creative-outcome-card {
            width: 165px;
          }
        }

        @media (max-width: 600px) {
          .creative-outcomes-section {
            padding: 5px 0;
          }

          .creative-outcomes-inner {
            width: calc(100% - 20px);
            min-height: 650px;
            padding-top: 45px;
          }

          .creative-outcomes-heading {
            font-size: clamp(38px, 10vw, 52px);
            line-height: 0.98;
            letter-spacing: -0.045em;
          }

          .creative-outcomes-copy {
            max-width: 520px;
            margin-top: 22px;
            font-size: 15px;
            line-height: 1.5;
          }

          .creative-outcomes-button {
            width: 180px;
            height: 54px;
            margin-top: 25px;
            font-size: 16px;
          }

          .creative-outcomes-carousel {
            height: 300px;
            margin-top: 15px;
          }

          .creative-outcome-card {
            width: 112px;
            border-radius: 9px;
          }

          .creative-outcomes-carousel::before,
          .creative-outcomes-carousel::after {
            width: 18%;
          }
        }

        @media (max-width: 380px) {
          .creative-outcomes-inner {
            min-height: 610px;
          }

          .creative-outcome-card {
            width: 98px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .brand-track {
            animation: none;
          }
        }


        /* =====================================================
           BLOGS
           ===================================================== */

        .blog-section {
          position: relative;
          margin-top: 5px;
          width: 100%;
          overflow: hidden;
          background: #000;
          padding: 5px 0;
        }

        .blog-inner {
          position: relative;
          z-index: 10;
          width: min(100% - 48px, 1400px);
          margin: 0 auto;
        }

        .blog-particle-glow {
          position: absolute;
          left: 20%;
          top: -130px;
          width: 250px;
          height: 600px;
          transform: rotate(28deg);
          opacity: 0.65;
          pointer-events: none;
          background-image: radial-gradient(circle, rgba(248, 188, 4, 0.6) 1px, transparent 1.7px);
          background-size: 10px 10px;
          mask-image: linear-gradient(to bottom, transparent 0%, #000 22%, #000 72%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 22%, #000 72%, transparent 100%);
        }

        .blog-heading-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          padding-top: 42px;
        }

        .blog-heading-content {
          max-width: 1080px;
        }

        .blog-heading-content h2 {
          margin: 0;
          color: #fff;
          font-size: clamp(42px, 5.2vw, 76px);
          font-weight: 900;
          line-height: 0.98;
          letter-spacing: -3px;
        }

        .blog-heading-content h2 span {
          color: #f8bc04;
        }

        .blog-heading-content p {
          max-width: 1030px;
          margin: 22px 0 0;
          color: rgba(255, 255, 255, 0.86);
          font-size: clamp(15px, 1.25vw, 18px);
          line-height: 1.7;
        }

        .blog-view-all {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          gap: 13px;
          height: 50px;
          padding: 0 25px;
          border-radius: 999px;
          background: #f8bc04;
          color: #000;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
        }

        .blog-view-all span:last-child {
          font-size: 21px;
          line-height: 1;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 30px;
          margin-top: 44px;
          padding-bottom: 35px;
        }

        .blog-card {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 28px;
          background: #0b0b0b;
        }

        .blog-card-image {
          position: relative;
          width: 100%;
          aspect-ratio: 1.47 / 1;
          overflow: hidden;
        }

        .blog-card-image-element {
          object-fit: cover;
        }

        .blog-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.72), transparent 65%);
          pointer-events: none;
        }

        .blog-meta {
          position: absolute;
          right: 20px;
          bottom: 17px;
          left: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 11px;
          font-weight: 600;
        }

        .blog-category {
          padding: 8px 14px;
          border-radius: 999px;
          background: #fff;
          color: #111;
          font-size: 10px;
          font-weight: 700;
        }

        .blog-card-content {
          display: flex;
          min-height: 286px;
          flex-direction: column;
          padding: 28px 24px 24px;
        }

        .blog-card-content h3 {
          margin: 0;
          color: #fff;
          font-size: clamp(19px, 1.45vw, 22px);
          font-weight: 800;
          line-height: 1.22;
          letter-spacing: -0.5px;
        }

        .blog-card-content p {
          margin: 18px 0 0;
          color: rgba(255, 255, 255, 0.45);
          font-size: 14px;
          line-height: 1.7;
        }

        .blog-card-footer {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .blog-read-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-decoration: none;
        }

        .blog-arrow {
          display: flex;
          width: 38px;
          height: 38px;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 50%;
          background: #f8bc04;
          color: #000;
          font-size: 18px;
          letter-spacing: 0;
        }

        @media (max-width: 1100px) {
          .blog-inner {
            width: min(100% - 40px, 1000px);
          }

          .blog-heading-row {
            gap: 25px;
          }

          .blog-heading-content h2 {
            letter-spacing: -2px;
          }

          .blog-grid {
            gap: 20px;
          }

          .blog-card-content {
            min-height: 300px;
            padding: 24px 20px 20px;
          }
        }

        @media (max-width: 767px) {
          .blog-section {
            padding: 5px 0;
          }

          .blog-inner {
            width: calc(100% - 28px);
          }

          .blog-particle-glow {
            left: 8%;
            top: -100px;
            width: 180px;
            height: 520px;
          }

          .blog-heading-row {
            align-items: flex-start;
            flex-direction: column;
            gap: 24px;
            padding-top: 28px;
          }

          .blog-heading-content h2 {
            font-size: clamp(38px, 11vw, 52px);
            letter-spacing: -2px;
          }

          .blog-heading-content p {
            margin-top: 18px;
            font-size: 14px;
            line-height: 1.65;
          }

          .blog-view-all {
            height: 48px;
            padding: 0 22px;
          }

          .blog-grid {
            grid-template-columns: 1fr;
            gap: 18px;
            margin-top: 30px;
            padding-bottom: 20px;
          }

          .blog-card {
            border-radius: 22px;
          }

          .blog-card-image {
            aspect-ratio: 1.55 / 1;
          }

          .blog-meta {
            right: 15px;
            bottom: 14px;
            left: 15px;
          }

          .blog-card-content {
            min-height: 0;
            padding: 22px 18px 18px;
          }

          .blog-card-content h3 {
            font-size: 20px;
          }

          .blog-card-content p {
            font-size: 14px;
          }
        }

        /* =====================================================
           TESTIMONIALS
           ===================================================== */

        .testimonials-section {
          width: 100%;
          margin-top: 5px;
          padding: 80px 0 75px;
          overflow: hidden;
          background: #000;
        }

        .testimonials-header {
          width: min(1100px, calc(100% - 40px));
          margin: 0 auto;
          text-align: center;
        }

        .testimonial-label-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 28px;
        }

        .testimonial-label-line {
          width: clamp(45px, 7vw, 100px);
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.55));
        }

        .testimonial-label-line:last-child {
          background: linear-gradient(to left, transparent, rgba(255, 255, 255, 0.55));
        }

        .testimonial-label-dot {
          width: 9px;
          height: 9px;
          flex: 0 0 9px;
          border-radius: 50%;
          background: #f8bc04;
          box-shadow: 0 0 14px rgba(248, 188, 4, 0.7);
        }

        .testimonial-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 185px;
          height: 52px;
          padding: 0 28px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 999px;
          color: #f5f5f5;
          font-size: 17px;
          font-weight: 500;
        }

        .testimonials-header h2 {
          margin: 0;
          color: #f5f5f5;
          font-size: clamp(42px, 5vw, 70px);
          line-height: 1;
          letter-spacing: -0.045em;
          font-weight: 700;
        }

        .testimonials-header h2 span {
          color: #f8bc04;
        }

        .testimonials-header > p {
          margin: 24px auto 0;
          max-width: 900px;
          color: #bdbdbd;
          font-size: clamp(16px, 1.35vw, 20px);
          line-height: 1.45;
        }

        .testimonials-carousel-wrap {
          position: relative;
          width: min(100%, 1450px);
          margin: 55px auto 0;
          padding: 0 80px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 28px;
        }

        .testimonial-card {
          min-width: 0;
          min-height: 345px;
          padding: 25px 29px 23px;
          border: 1px solid rgba(20, 20, 20, 0.12);
          border-radius: 18px;
          background: #f7f7f7;
          color: #171717;
          box-shadow: 0 20px 55px rgba(0, 0, 0, 0.35);
          display: flex;
          flex-direction: column;
        }

        .testimonial-quote-icon {
          display: grid;
          place-items: center;
          width: 60px;
          height: 60px;
          flex: 0 0 60px;
          border-radius: 50%;
          background: #f8bc04;
          color: #000;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 49px;
          line-height: 1;
          font-weight: 900;
        }

        .testimonial-quote {
          margin: 17px 0 0;
          color: #3b3b3b;
          font-size: 15.5px;
          line-height: 1.48;
        }

        .testimonial-divider {
          width: 100%;
          height: 1px;
          margin: auto 0 14px;
          background: rgba(23, 23, 23, 0.12);
        }

        .testimonial-person {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .testimonial-avatar {
          display: grid;
          place-items: center;
          width: 54px;
          height: 54px;
          flex: 0 0 54px;
          border-radius: 50%;
          background: #e8e8e8;
          color: #171717;
          font-size: 19px;
          font-weight: 800;
        }

        .testimonial-person h3 {
          margin: 0;
          color: #171717;
          font-size: 15px;
          line-height: 1.2;
          font-weight: 800;
        }

        .testimonial-person p {
          margin: 5px 0 0;
          color: #777;
          font-size: 13px;
          line-height: 1.2;
        }

        .testimonial-arrow {
          position: absolute;
          top: 50%;
          z-index: 5;
          display: grid;
          place-items: center;
          width: 58px;
          height: 58px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 50%;
          background: #050505;
          color: #f8bc04;
          font-size: 34px;
          line-height: 1;
          cursor: pointer;
          transform: translateY(-50%);
        }

        .testimonial-arrow-left {
          left: 20px;
        }

        .testimonial-arrow-right {
          right: 20px;
        }

        .testimonial-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 32px;
        }

        .testimonial-dot {
          width: 18px;
          height: 18px;
          padding: 0;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
        }

        .testimonial-dot.active {
          border-color: #f8bc04;
          background: #f8bc04;
          box-shadow: 0 0 12px rgba(248, 188, 4, 0.45);
        }

        @media (max-width: 1200px) {
          .testimonials-carousel-wrap {
            padding: 0 70px;
          }

          .testimonials-grid {
            gap: 18px;
          }

          .testimonial-card {
            min-height: 360px;
            padding: 22px 20px;
          }
        }

        @media (max-width: 900px) {
          .testimonials-section {
            padding-top: 65px;
            padding-bottom: 60px;
          }

          .testimonials-carousel-wrap {
            width: calc(100% - 30px);
            padding: 0;
          }

          .testimonials-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .testimonial-arrow {
            display: none;
          }

          .testimonial-card {
            min-height: 330px;
          }

          .testimonial-card:last-child {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .testimonials-section {
            margin-top: 5px;
            padding: 55px 0 50px;
          }

          .testimonials-header {
            width: calc(100% - 30px);
          }

          .testimonial-label-wrap {
            gap: 8px;
            margin-bottom: 22px;
          }

          .testimonial-label-line {
            width: 35px;
          }

          .testimonial-label-dot {
            width: 7px;
            height: 7px;
            flex-basis: 7px;
          }

          .testimonial-label {
            min-width: 145px;
            height: 46px;
            padding: 0 18px;
            font-size: 14px;
          }

          .testimonials-header h2 {
            font-size: clamp(35px, 10vw, 48px);
            line-height: 1.02;
          }

          .testimonials-header > p {
            margin-top: 18px;
            font-size: 15px;
            line-height: 1.5;
          }

          .testimonials-carousel-wrap {
            width: calc(100% - 30px);
            margin-top: 32px;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .testimonial-card {
            min-height: 0;
            padding: 23px 22px 21px;
            border-radius: 20px;
          }

          .testimonial-card:not(:first-child) {
            display: none;
          }

          .testimonial-quote-icon {
            width: 55px;
            height: 55px;
            flex-basis: 55px;
            font-size: 44px;
          }

          .testimonial-quote {
            margin-top: 16px;
            font-size: 15px;
            line-height: 1.55;
          }

          .testimonial-person h3 {
            font-size: 15px;
          }

          .testimonial-person p {
            font-size: 12px;
          }

          .testimonial-dots {
            gap: 10px;
            margin-top: 22px;
          }

          .testimonial-dot {
            width: 12px;
            height: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .blog-view-all,
          .blog-card-image-element {
            transition: none;
          }
        }
      
      
              /* =====================================================
                 CINEMATIC 3D IMMERSION LAYER
                 ===================================================== */
      
              .page {
                perspective: 1800px;
                transform-style: preserve-3d;
              }
      
              .page-content {
                transform-style: preserve-3d;
                isolation: isolate;
              }
      
              .page-content section,
              .page > section {
                position: relative;
                transform-style: preserve-3d;
              }
      
              .page-content section::before,
              .page > section::before {
                content: "";
                position: absolute;
                inset: 0;
                z-index: -1;
                pointer-events: none;
                background: radial-gradient(
                  circle at 50% 50%,
                  rgba(248, 188, 4, 0.045),
                  transparent 48%
                );
                opacity: 0.75;
                transform: translateZ(-80px) scale(1.08);
              }
      
              .cinematic-cursor-glow {
                position: fixed;
                left: 0;
                top: 0;
                z-index: 999;
                width: 260px;
                height: 260px;
                margin-left: -130px;
                margin-top: -130px;
                pointer-events: none;
                border-radius: 50%;
                background: radial-gradient(
                  circle,
                  rgba(248, 188, 4, 0.10) 0%,
                  rgba(248, 188, 4, 0.035) 28%,
                  transparent 68%
                );
                filter: blur(8px);
                mix-blend-mode: screen;
                opacity: 0.85;
              }
      
              .cinematic-scanline {
                position: fixed;
                inset: 0;
                z-index: 997;
                pointer-events: none;
                opacity: 0.12;
                background: repeating-linear-gradient(
                  to bottom,
                  transparent 0,
                  transparent 3px,
                  rgba(255, 255, 255, 0.018) 4px,
                  transparent 5px
                );
                mix-blend-mode: soft-light;
              }
      
              .cinematic-progress {
                position: fixed;
                top: 0;
                right: 14px;
                z-index: 998;
                width: 2px;
                height: 100vh;
                overflow: hidden;
                pointer-events: none;
                background: rgba(255, 255, 255, 0.08);
              }
      
              .cinematic-progress span {
                display: block;
                width: 100%;
                height: 100%;
                transform: scaleY(0);
                transform-origin: top center;
                background: #f8bc04;
                box-shadow: 0 0 12px rgba(248, 188, 4, 0.8);
              }
      
              .hero-image,
              .ai-image-wrapper,
              .ppc-image-panel,
              .creative-outcomes-inner,
              .blog-card,
              .testimonial-card,
              .faq-metallic-container,
              .industry-image,
              .result-card,
              .process-card,
              .glass-pill-button {
                transform-style: preserve-3d;
                backface-visibility: hidden;
              }
      
              .hero-image img,
              .ai-image-wrapper img,
              .industry-image img,
              .ppc-image-inner img,
              .blog-card-image-element {
                will-change: transform;
                transform-origin: center center;
              }
      
              .result-card,
              .process-card,
              .industry-card,
              .blog-card,
              .testimonial-card,
              .faq-metallic-container,
              .ppc-image-panel {
                transition:
                  border-color 0.45s ease,
                  box-shadow 0.45s ease,
                  background-color 0.45s ease;
              }
      
              .result-card:hover,
              .process-card:hover,
              .industry-card:hover,
              .blog-card:hover,
              .testimonial-card:hover,
              .faq-metallic-container:hover,
              .ppc-image-panel:hover {
                border-color: rgba(248, 188, 4, 0.42);
                box-shadow:
                  0 22px 70px rgba(0, 0, 0, 0.42),
                  0 0 28px rgba(248, 188, 4, 0.10);
              }
      
              .primary-button,
              .secondary-button,
              .ppc-button,
              .creative-outcomes-button,
              .blog-view-all,
              .testimonial-arrow,
              .testimonial-dot {
                will-change: transform;
              }
      
              .primary-button,
              .secondary-button,
              .ppc-button,
              .creative-outcomes-button,
              .blog-view-all {
                transition:
                  transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
                  box-shadow 0.35s ease,
                  filter 0.35s ease;
              }
      
              .primary-button:hover,
              .secondary-button:hover,
              .ppc-button:hover,
              .creative-outcomes-button:hover,
              .blog-view-all:hover {
                transform: translateY(-5px) translateZ(18px) scale(1.02);
                box-shadow: 0 18px 35px rgba(0, 0, 0, 0.30), 0 0 30px rgba(248, 188, 4, 0.16);
                filter: brightness(1.04);
              }
      
              .primary-button:active,
              .secondary-button:active,
              .ppc-button:active,
              .creative-outcomes-button:active,
              .blog-view-all:active {
                transform: translateY(-1px) scale(0.99);
              }
      
              .hero-content,
              .hero-image,
              .result-card-copy,
              .wide-copy,
              .ai-content,
              .process-card,
              .industries-intro,
              .ppc-copy,
              .blog-heading-content,
              .blog-card-content,
              .testimonials-header {
                transform-style: preserve-3d;
              }
      
              @media (max-width: 900px) {
                .cinematic-cursor-glow,
                .cinematic-progress {
                  display: none;
                }
              }
      
              @media (prefers-reduced-motion: reduce) {
                .cinematic-scanline {
                  display: none;
                }
      
                .page,
                .page-content,
                .page-content section,
                .page > section,
                .result-card,
                .process-card,
                .industry-card,
                .blog-card,
                .testimonial-card,
                .faq-metallic-container,
                .ppc-image-panel {
                  transform: none !important;
                }
              }
      
      `}</style>

{/* ===== Global Presence Section ===== */}
      <section className="w-full bg-black/70 py-10 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-md sm:rounded-[38px] sm:p-9 lg:p-14">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>

                <h2 className="mt-5 text-[34px] font-black leading-[1] tracking-[-0.05em] sm:text-6xl">
                  Empowering Businesses Across{" "}
                  <span className="text-[#F8BC04]">
                    12+
                  </span>
                  <br />
                  Locations Currently
                </h2>

                <p className="mt-5 text-sm leading-6 text-white/45 sm:mt-6 sm:text-base sm:leading-7">
                  BigBeans Digital partners with startups, entrepreneurs, and
                  growing businesses across Kolkata, Delhi, Bangalore, Mumbai,
                  Pune, Noida, Tripura, London, Singapore, Canada, Australia,
                  and Nigeria. Our creative social media marketing, branding,
                  and digital growth strategies are designed to help
                  businesses build a stronger online presence, connect with
                  their audience, and achieve sustainable growth—wherever they
                  operate.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8">
                  <div>
                    <h3 className="font-bold text-white">
                      In India
                    </h3>
                    <div className="mt-2 h-px w-16 bg-[#F8BC04]" />

                    <ul className="mt-4 space-y-2 text-sm text-white/45">
                      {[
                        "Kolkata",
                        "Delhi",
                        "Bangalore",
                        "Noida",
                        "Tripura",
                        "Mumbai",
                        "Pune",
                      ].map((location) => (
                        <li key={location} className="flex items-center gap-2">
                          <span className="text-[#F8BC04]">
                            ●
                          </span>
                          {location}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      International Presence
                    </h3>
                    <div className="mt-2 h-px w-16 bg-[#F8BC04]" />

                    <ul className="mt-4 space-y-2 text-sm text-white/45">
                      {[
                        "London",
                        "Singapore",
                        "Canada",
                        "Australia",
                        "Nigeria",
                      ].map((location) => (
                        <li key={location} className="flex items-center gap-2">
                          <span className="text-[#F8BC04]">
                            ●
                          </span>
                          {location}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8BC04]/10 blur-3xl" />

                <motion.div
                  animate={{
                    rotateY: [0, 4, 0, -4, 0],
                    rotateX: [0, -2, 0, 2, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative [transform-style:preserve-3d]"
                >
                  <Image
                    src="/maps/world-map.png"
                    alt="World Map"
                    width={1200}
                    height={700}
                    className="w-full opacity-75"
                  />

                  {[
                    ["42%", "67%"],
                    ["27%", "44%"],
                    ["28%", "18%"],
                    ["50%", "47%"],
                    ["54%", "74%"],
                    ["65%", "84%"],
                  ].map(([top, left], index) => (
                    <motion.span
                      key={index}
                      animate={{
                        scale: [1, 1.7, 1],
                        opacity: [0.45, 1, 0.45],
                      }}
                      transition={{
                        duration: 2 + index * 0.15,
                        repeat: Infinity,
                      }}
                      className="absolute h-2.5 w-2.5 rounded-full bg-[#F8BC04] shadow-[0_0_22px_#F8BC04] sm:h-4 sm:w-4"
                      style={{ top, left }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="relative overflow-hidden py-10 sm:py-16 bg-[#000000]/[70%]">
    
  {/* Embedded CSS for the custom 3D Metallic/Glow Container & Button styling */}
  <style>{`
    .faq-metallic-container {
      position: relative;
      background: transparent;
      border-radius: 30px;
      box-shadow:
        6px 6px 11px rgba(0, 0, 0, 0.7),
        -6px -6px 12px rgba(255, 255, 255, 0.01),
        inset 2px 2px 4px rgba(255, 255, 255, 0.08),
        inset -2px -2px 4px rgba(0, 0, 0, 0.5);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      overflow: hidden;
    }

    .faq-metallic-container::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        45deg,
        transparent,
        rgba(0, 0, 0, 0.15),
        transparent
      );
      background-size: 200% 200%;
      animation: shine 5s infinite ease-in-out;
      border-radius: 30px;
      pointer-events: none;
    }

    .faq-metallic-container::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 180px;
      height: 170px;
      background: linear-gradient(
        210deg,
        rgba(255, 179, 57, 0.729),
        rgba(222, 114, 0, 0.196),
        transparent
      );
      filter: blur(20px);
      border-radius: 0 0 0 50%;
      animation: glowPulse 5s infinite ease-in-out;
      pointer-events: none;
    }

    @keyframes shine {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes glowPulse {
      0% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.2); }
      100% { opacity: 0.4; transform: scale(1); }
    }
  `}</style>

  {/* Ambient background accent */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[#F8BC04]/5 blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8">
    <div className="mx-auto mb-10 max-w-[850px] px-1 text-center sm:mb-14">
      <h2 className="mt-4 text-[34px] font-black leading-[1] tracking-[-0.05em] sm:text-6xl text-white">
        Frequently Asked{" "}
        <span className="text-[#F8BC04] drop-shadow-[0_0_25px_rgba(248,188,4,0.4)]">
          Questions
        </span>
      </h2>
    </div>

    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {[
        {
          q: "What social media marketing services do you offer?",
          a: "Big Beans Digital provides a wide range of social media marketing services for startups in India, USA, and London, including social media strategy, creative content, Reels, profile management, audience growth, community engagement, paid campaigns, and performance analysis. Our social media marketing service is customized according to your industry, target audience, and business goals.",
        },
        {
          q: "How do I find the best social media marketing agency near me?",
          a: "When searching for the best social media marketing agency near me, don't look only at pricing. Consider the agency's experience, creative quality, strategy, communication, reporting, industry knowledge, and ability to generate measurable results. Big Beans Digital works with businesses across India, USA, and London, providing strategy-led social media marketing services, digital marketing solutions, and customized website development.",
        },
        {
          q: "Why should I choose Big Beans Digital for social media marketing?",
          a: "Big Beans Digital combines strategy, creative content, branding, and performance marketing to create complete digital growth solutions. Whether you're comparing social media marketing agencies near me, looking for the best social media marketing company, or exploring social media marketing agencies in London, our focus is on building stronger brands, increasing visibility, attracting qualified leads, and creating sustainable growth.",
        },
        {
          q: "What digital marketing services does Big Beans Digital offer?",
          a: "Big Beans Digital provides complete digital marketing solutions including social media marketing, performance marketing, branding, website development, creative design, content strategy, and paid advertising. Our approach connects different marketing channels to create a consistent online presence and help businesses generate visibility, leads, and growth.",
        },
        {
          q: "Do you offer website development for businesses and startups?",
          a: "Yes. We design and develop modern, responsive websites for startups, small businesses, service providers, and established brands. Our website development approach focuses on user experience, mobile responsiveness, performance, SEO-friendly structure, clear navigation, and conversion-focused design rather than simply creating a website that looks good.",
        },
        {
          q: "What is performance marketing and how can it help my business?",
          a: "Performance marketing focuses on measurable outcomes such as leads, enquiries, sales, conversions, and customer acquisition. BIGBEANS DIGITAL combines audience research, campaign strategy, creative development, paid advertising, conversion tracking, and continuous optimisation to help businesses make better use of their marketing budget.",
        },
        {
          q: "Can you manage both my website and social media marketing?",
          a: "Yes. Managing your website and social media together can create a more consistent customer journey. We can combine website development, content strategy, social media management, SEO, and paid campaigns so that your social channels attract attention while your website helps turn visitors into enquiries or customers.",
        },
        {
          q: "Do you work with startups and new businesses?",
          a: "Yes. Our social media marketing agency for startups approach is designed for businesses that are still building their audience and brand identity. We can help with branding, website development, social media, content creation, and performance marketing based on your stage of growth, target audience, and available budget.",
        },
        {
          q: "How much does social media marketing cost?",
          a: "The cost of social media marketing depends on factors such as the number of platforms, content volume, creative requirements, advertising budget, campaign objectives, and level of management required. Instead of offering one fixed package for every business, Big Beans Digital can recommend a suitable approach based on your goals.",
        },
        {
          q: "Is social media marketing useful for your businesses?",
          a: "Yes. Social media can help any business build awareness, communicate directly with potential customers, showcase their products or services, and generate enquiries. A focused strategy can be particularly useful when a business wants to compete with larger brands without trying to be present on every platform.",
        },
      ].map((faq, index) => {
        const open = openFaq === index;

        return (
          <motion.div
            layout
            key={faq.q}
            className="faq-metallic-container group"
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenFaq(open ? null : index)}
              className="flex min-h-[74px] w-full items-center justify-between gap-5 px-6 py-0-5 text-left bg-black/40 hover:bg-black/20 transition-colors"
            >
              <span className="pr-2 text-[13px] font-semibold leading-5 text-white/90 transition-colors group-hover:text-white sm:pr-0 sm:text-sm sm:leading-6">
                {faq.q}
              </span>

              <span
                className={`
                  flex h-9 w-9 flex-shrink-0 items-center justify-center 
                  rounded-full text-lg font-bold transition-all duration-300
                  ${
                    open
                      ? "bg-[#F8BC04] text-black shadow-[0_0_20px_rgba(248,188,4,0.6)] rotate-180"
                      : "bg-white/10 text-white group-hover:bg-[#F8BC04]/20 group-hover:text-[#F8BC04]"
                  }
                `}
              >
                {open ? "−" : "+"}
              </span>
            </button>

            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-white/10 px-4 pb-5 pt-4 bg-black/60 sm:px-6 sm:pb-6 sm:pt-5"
              >
                <p className="text-[13px] leading-6 text-white/70 sm:text-sm sm:leading-7">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  </div>
</section>


      
      {/* ===== Final CTA Section ===== */}
<section className="relative overflow-hidden py-20 text-center bg-[#000000]/[70%] sm:py-32">
  <style>{`
    @keyframes liveGlowPulse {
      0%, 100% { 
        transform: scale(1) translate(0, 0); 
        opacity: 0.4; 
      }
      50% { 
        transform: scale(1.35) translate(25px, -20px); 
        opacity: 0.8; 
      }
    }

    .animate-live-glow-1 {
      animation: liveGlowPulse 7s infinite ease-in-out;
    }

    .animate-live-glow-2 {
      animation: liveGlowPulse 5s infinite ease-in-out 2s;
    }

    /* Custom 3D Split Capsule Glass Button Styles */
    .glass-pill-button {
      position: relative;
      width: 290px;
      height: 74px;
      cursor: pointer;
      border-radius: 50px;
      display: flex;
      background: transparent;
      border: none;
      padding: 0;
      box-shadow:
        6px 6px 18px rgba(0, 0, 0, 0.8),
        -6px -6px 18px rgba(255, 255, 255, 0.02);
      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .glass-pill-button:hover {
      transform: scale(1.03);
    }

    .pill-left {
      position: relative;
      width: 32%;
      height: 100%;
      border-radius: 50px 6px 6px 50px;
      background: linear-gradient(135deg, rgba(45, 45, 45, 0.6), rgba(15, 15, 15, 0.8));
      box-shadow:
        -1px -12px 10px rgba(255, 255, 255, 0.08) inset,
        2px 2px 6px rgba(255, 255, 255, 0.05) inset;
      transition: all 0.3s ease-in-out;
    }

    .pill-left::after {
      content: "";
      position: absolute;
      right: 1px;
      top: 0;
      width: 2px;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      filter: blur(0.5px);
    }

    .pill-right {
      position: relative;
      width: 68%;
      height: 100%;
      border-radius: 6px 50px 50px 6px;
      background: rgba(18, 18, 18, 0.45);
      backdrop-filter: blur(10px);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border: 1.5px solid rgba(255, 255, 255, 0.15);
      border-left: 1.5px solid rgba(70, 70, 70, 0.4);
      box-shadow:
        1px 1px 20px rgba(255, 255, 255, 0.07) inset,
        0px -4px 10px rgba(0, 0, 0, 0.6) inset;
      transition: all 0.3s ease-in-out;
    }

    .glass-pill-button:hover .pill-left {
      transform: translateX(-4px) rotate(-2deg);
    }

    .glass-pill-button:hover .pill-right {
      transform: translateX(4px) rotate(2deg);
      border-color: rgba(248, 188, 4, 0.4);
      box-shadow:
        1px 1px 25px rgba(248, 188, 4, 0.2) inset,
        0px -4px 10px rgba(0, 0, 0, 0.6) inset;
    }
  `}</style>

  {/* Live Animated Background Ambient Lighting */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[700px] rounded-full bg-[#F8BC04]/10 blur-[150px] animate-live-glow-1" />
  <div className="pointer-events-none absolute left-1/3 bottom-5 h-[300px] w-[500px] rounded-full bg-orange-500/10 blur-[130px] animate-live-glow-2" />

  <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8">
    
    {/* Brand Tag */}
    

    {/* Main Heading */}
    <h2 className="mx-auto mt-6 max-w-[900px] px-1 text-[36px] font-black leading-[1.05] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
      Your next big move <br />
      starts{" "}
      <span className="text-[#F8BC04] drop-shadow-[0_0_35px_rgba(248,188,4,0.6)]">
        here.
      </span>
    </h2>

    {/* Supporting Description */}
    <p className="mx-auto mt-6 max-w-[550px] px-1 text-sm leading-relaxed text-white/60 sm:text-base">
      Ready to scale your brand, dominate your market, and turn clicks into loyal customers? Let's build something extraordinary together.
    </p>

    {/* 3D Glass Split-Capsule CTA Button */}
    <div className="mt-10 flex justify-center">
      <a href="/connect" className="glass-pill-button group">
        <div className="pill-left flex items-center justify-center">
          <ArrowRight size={18} className="text-[#F8BC04] transition-transform duration-300 group-hover:translate-x-1" />
        </div>
        <div className="pill-right">
          <span className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white transition-colors">
            Connect With Us
          </span>
        </div>
      </a>
    </div>

  </div>
</section>

    </main>
  );
}