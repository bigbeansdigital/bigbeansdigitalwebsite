"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(" ");

const STYLES = `
  .cinematic-page {
    --bb-yellow: #F8BC04;
    --bb-yellow-light: #FFD54A;
    --bb-black: #171717;
    --bb-blue: #07142F;
    --bb-blue-2: #102B63;
  }

  .cinematic-grain {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 60;
    opacity: .035;
    mix-blend-mode: overlay;
    background-image:
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noise)'/></svg>");
  }

  .cinematic-grid {
    background-size: 70px 70px;
    background-image:
      linear-gradient(to right, rgba(248,188,4,.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(248,188,4,.08) 1px, transparent 1px);
    mask-image: radial-gradient(circle at center, black 0%, transparent 72%);
    -webkit-mask-image: radial-gradient(circle at center, black 0%, transparent 72%);
  }

  .cinematic-title {
    color: #171717;
    text-shadow:
      0 12px 35px rgba(0,0,0,.14),
      0 2px 5px rgba(0,0,0,.08);
  }

  .cinematic-yellow {
    background: linear-gradient(
      180deg,
      #FFD54A 0%,
      #F8BC04 55%,
      #D99E00 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter:
      drop-shadow(0 10px 22px rgba(248,188,4,.24))
      drop-shadow(0 2px 4px rgba(0,0,0,.12));
  }

  .physical-card {
    background:
      radial-gradient(
        700px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
        rgba(255,255,255,.10),
        transparent 42%
      ),
      linear-gradient(145deg, #102B63 0%, #07142F 48%, #030817 100%);
    border: 1px solid rgba(255,255,255,.10);
    box-shadow:
      0 45px 100px rgba(0,0,0,.42),
      0 20px 45px rgba(0,0,0,.35),
      inset 0 1px 2px rgba(255,255,255,.18),
      inset 0 -2px 6px rgba(0,0,0,.8);
    transform-style: preserve-3d;
  }

  .physical-card::before {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    pointer-events: none;
    background:
      linear-gradient(
        120deg,
        rgba(255,255,255,.09),
        transparent 22%,
        transparent 75%,
        rgba(248,188,4,.08)
      );
  }

  .card-glow {
    position: absolute;
    width: 420px;
    height: 420px;
    border-radius: 9999px;
    background: rgba(248,188,4,.13);
    filter: blur(100px);
    pointer-events: none;
  }

  .device-shell {
    position: relative;
    background:
      linear-gradient(145deg, #3f3f46 0%, #111827 35%, #020617 100%);
    box-shadow:
      inset 0 0 0 2px #52525b,
      inset 0 0 0 7px #000,
      0 45px 90px rgba(0,0,0,.65),
      0 20px 35px rgba(0,0,0,.45);
    transform-style: preserve-3d;
  }

  .device-screen {
    background:
      radial-gradient(circle at 30% 15%, rgba(59,130,246,.24), transparent 28%),
      radial-gradient(circle at 80% 75%, rgba(248,188,4,.12), transparent 25%),
      #050914;
  }

  .glass-ui {
    background:
      linear-gradient(
        135deg,
        rgba(255,255,255,.09),
        rgba(255,255,255,.025)
      );
    border: 1px solid rgba(255,255,255,.09);
    box-shadow:
      0 18px 40px rgba(0,0,0,.34),
      inset 0 1px 1px rgba(255,255,255,.12),
      inset 0 -1px 2px rgba(0,0,0,.5);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  .floating-chip {
    background:
      linear-gradient(
        135deg,
        rgba(255,255,255,.12),
        rgba(255,255,255,.025)
      );
    border: 1px solid rgba(255,255,255,.12);
    box-shadow:
      0 25px 55px rgba(0,0,0,.45),
      inset 0 1px 1px rgba(255,255,255,.2);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
  }

  .yellow-button {
    background: linear-gradient(
      180deg,
      #FFD54A 0%,
      #F8BC04 100%
    );
    color: #171717;
    box-shadow:
      0 0 0 1px rgba(0,0,0,.05),
      0 5px 12px rgba(0,0,0,.15),
      0 20px 45px rgba(248,188,4,.28),
      inset 0 1px 1px rgba(255,255,255,.8),
      inset 0 -3px 6px rgba(0,0,0,.08);
    transition: all .4s cubic-bezier(.25,1,.5,1);
  }

  .yellow-button:hover {
    transform: translateY(-4px);
    box-shadow:
      0 0 0 1px rgba(0,0,0,.05),
      0 8px 18px rgba(0,0,0,.18),
      0 28px 55px rgba(248,188,4,.35),
      inset 0 1px 1px rgba(255,255,255,.9);
  }

  .dark-button {
    background: linear-gradient(180deg,#292929 0%,#111111 100%);
    color: #fff;
    box-shadow:
      0 0 0 1px rgba(255,255,255,.08),
      0 12px 30px rgba(0,0,0,.32),
      inset 0 1px 1px rgba(255,255,255,.12);
    transition: all .4s cubic-bezier(.25,1,.5,1);
  }

  .dark-button:hover {
    transform: translateY(-4px);
    background: linear-gradient(180deg,#3b3b3b 0%,#171717 100%);
  }

  .section-heading {
    text-shadow:
      0 8px 25px rgba(0,0,0,.08);
  }

  .cinematic-reveal {
    visibility: hidden;
  }

  .marquee-track {
    will-change: transform;
  }

  .project-stage {
    transform-style: preserve-3d;
    perspective: 1200px;
  }
`;

/* -------------------------------------------------------
   MAIN PAGE
------------------------------------------------------- */

export default function WebsiteDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);
  const mouseFrame = useRef<number>(0);

  /* -------------------------------------------------------
     HERO MOUSE 3D
  ------------------------------------------------------- */

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!heroCardRef.current || !deviceRef.current) return;

      cancelAnimationFrame(mouseFrame.current);

      mouseFrame.current = requestAnimationFrame(() => {
        if (!heroCardRef.current || !deviceRef.current) return;

        const rect = heroCardRef.current.getBoundingClientRect();

        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        heroCardRef.current.style.setProperty(
          "--mouse-x",
          `${mouseX}px`
        );

        heroCardRef.current.style.setProperty(
          "--mouse-y",
          `${mouseY}px`
        );

        const x =
          (event.clientX / window.innerWidth - 0.5) * 2;

        const y =
          (event.clientY / window.innerHeight - 0.5) * 2;

        gsap.to(deviceRef.current, {
          rotationY: x * 10,
          rotationX: -y * 8,
          duration: 1.2,
          ease: "power3.out",
          overwrite: true,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(mouseFrame.current);
    };
  }, []);

  /* -------------------------------------------------------
     CINEMATIC HERO SCROLL
  ------------------------------------------------------- */

  useEffect(() => {
    if (!heroRef.current) return;

    const context = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      gsap.set(".hero-kicker", {
        autoAlpha: 0,
        y: 30,
        filter: "blur(15px)",
      });

      gsap.set(".hero-title-line-1", {
        autoAlpha: 0,
        y: 80,
        scale: .86,
        rotationX: -20,
        filter: "blur(20px)",
      });

      gsap.set(".hero-title-line-2", {
        autoAlpha: 0,
        clipPath: "inset(0 100% 0 0)",
      });

      gsap.set(".hero-description", {
        autoAlpha: 0,
        y: 35,
        filter: "blur(12px)",
      });

      gsap.set(".hero-actions", {
        autoAlpha: 0,
        y: 30,
        scale: .92,
      });

      gsap.set(".cinematic-card", {
        y: window.innerHeight + 250,
        autoAlpha: 1,
      });

      gsap.set(
        [
          ".hero-card-left",
          ".hero-card-right",
          ".device-stage",
          ".floating-chip",
        ],
        {
          autoAlpha: 0,
        }
      );

      const intro = gsap.timeline({
        delay: .2,
      });

      intro
        .to(".hero-kicker", {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: .8,
          ease: "power3.out",
        })
        .to(".hero-title-line-1", {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "expo.out",
        }, "-=.45")
        .to(".hero-title-line-2", {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.1,
          ease: "power4.inOut",
        }, "-=.65")
        .to(".hero-description", {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: .8,
          ease: "power3.out",
        }, "-=.45")
        .to(".hero-actions", {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: .75,
          ease: "back.out(1.2)",
        }, "-=.35");

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=6200",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      scrollTimeline
        /* Background retreats */
        .to(
          ".hero-background",
          {
            scale: 1.18,
            filter: "blur(18px)",
            opacity: .25,
            duration: 1.8,
            ease: "power2.inOut",
          },
          0
        )

        /* Card rises */
        .to(
          ".cinematic-card",
          {
            y: 0,
            duration: 2,
            ease: "power3.inOut",
          },
          0
        )

        /* Card becomes full stage */
        .to(
          ".cinematic-card",
          {
            width: "100%",
            height: "100%",
            borderRadius: "0px",
            duration: 1.4,
            ease: "power3.inOut",
          }
        )

        /* Device enters */
        .fromTo(
          ".device-stage",
          {
            y: 300,
            z: -500,
            rotationX: 45,
            rotationY: -30,
            scale: .55,
            autoAlpha: 0,
          },
          {
            y: 0,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 2.4,
            ease: "expo.out",
          },
          "-=.8"
        )

        /* Device widgets */
        .fromTo(
          ".device-widget",
          {
            y: 50,
            scale: .85,
            autoAlpha: 0,
          },
          {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 1.2,
            stagger: .12,
            ease: "back.out(1.3)",
          },
          "-=1.6"
        )

        /* Floating chips */
        .fromTo(
          ".floating-chip",
          {
            y: 100,
            scale: .7,
            rotationZ: -8,
            autoAlpha: 0,
          },
          {
            y: 0,
            scale: 1,
            rotationZ: 0,
            autoAlpha: 1,
            duration: 1.3,
            stagger: .15,
            ease: "back.out(1.5)",
          },
          "-=1.4"
        )

        /* Card copy */
        .fromTo(
          ".hero-card-left",
          {
            x: -60,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            duration: 1.3,
            ease: "power4.out",
          },
          "-=1.2"
        )

        .fromTo(
          ".hero-card-right",
          {
            x: 60,
            scale: .8,
            autoAlpha: 0,
          },
          {
            x: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 1.3,
            ease: "expo.out",
          },
          "<"
        )

        /* Hold */
        .to({}, {
          duration: 2.2,
        })

        /* Remove original hero */
        .to(
          ".hero-content",
          {
            autoAlpha: 0,
            scale: .9,
            filter: "blur(18px)",
            duration: 1,
          }
        )

        /* Pull content back */
        .to(
          [
            ".device-stage",
            ".floating-chip",
            ".hero-card-left",
            ".hero-card-right",
          ],
          {
            scale: .88,
            y: -50,
            z: -200,
            autoAlpha: 0,
            duration: 1.1,
            stagger: .05,
            ease: "power3.in",
          }
        )

        /* Card returns to normal */
        .to(
          ".cinematic-card",
          {
            width: isMobile ? "92vw" : "86vw",
            height: isMobile ? "88vh" : "82vh",
            borderRadius: isMobile ? "30px" : "40px",
            duration: 1.5,
            ease: "expo.inOut",
          },
          "cta"
        )

        /* CTA appears */
        .fromTo(
          ".hero-final-cta",
          {
            autoAlpha: 0,
            scale: .78,
            filter: "blur(25px)",
          },
          {
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "expo.out",
          },
          "cta"
        )

        .to({}, {
          duration: 1.5,
        })

        .to(
          ".cinematic-card",
          {
            y: -window.innerHeight - 350,
            duration: 1.4,
            ease: "power3.in",
          }
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  /* -------------------------------------------------------
     GENERAL SCROLL ANIMATIONS
  ------------------------------------------------------- */

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".section-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 70,
            opacity: 0,
            filter: "blur(8px)",
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".depth-card").forEach((element) => {
        const card = element;

        card.addEventListener("mousemove", (event) => {
          const rect = card.getBoundingClientRect();

          const x =
            ((event.clientX - rect.left) / rect.width - .5) * 2;

          const y =
            ((event.clientY - rect.top) / rect.height - .5) * 2;

          gsap.to(card, {
            rotationY: x * 5,
            rotationX: -y * 5,
            y: -8,
            duration: .5,
            ease: "power3.out",
            overwrite: true,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            y: 0,
            duration: .8,
            ease: "elastic.out(1,.5)",
          });
        });
      });
    });

    return () => context.revert();
  }, []);

  const technologies = [
    [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "🟨" },
      { name: "TypeScript", icon: "🔷" },
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind CSS", icon: "💨" },
    ],
    [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "PHP", icon: "🐘" },
      { name: "Laravel", icon: "❤️" },
      { name: "Flutter", icon: "🦋" },
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🗄️" },
    ],
  ];

  const industries = [
    {
      title: "Ecommerce",
      desc: "Beautiful shopping experiences that increase trust, engagement and online sales.",
      image: "/assets/websitedevelopment/Sectors/ecommerce.png",
    },
    {
      title: "Education",
      desc: "Interactive websites that make learning engaging for students and institutions.",
      image: "/assets/websitedevelopment/Sectors/education.png",
    },
    {
      title: "Real Estate",
      desc: "Premium property websites that generate enquiries and showcase listings beautifully.",
      image: "/assets/websitedevelopment/Sectors/realestate.png",
    },
    {
      title: "Tech",
      desc: "Modern dashboards and business platforms for data-driven organizations.",
      image: "/assets/websitedevelopment/Sectors/data.png",
    },
    {
      title: "Transportation",
      desc: "Responsive websites for logistics, transport and mobility businesses.",
      image: "/assets/websitedevelopment/Sectors/transport.png",
    },
    {
      title: "FMCG",
      desc: "Fast-moving consumer brand websites designed for maximum engagement.",
      image: "/assets/websitedevelopment/Sectors/fmcg.png",
    },
    {
      title: "Travel And Torisum",
      desc: "Professional healthcare websites that build credibility and patient trust.",
      image: "/assets/websitedevelopment/Sectors/TravelAndTorisum.png",
    },
    {
      title: "Hospitality",
      desc: "Luxury hotel and hospitality websites designed to increase bookings.",
      image: "/assets/websitedevelopment/Sectors/hospitality.png",
    },
  ];

  const faqs = [
    {
      q: "Why does my business need a professional website?",
      a: "A professional website is your business's digital storefront. It helps build trust, improve credibility, generate qualified leads, and convert visitors into customers. As the Best Website Development Company for Startups, BIGBEANS DIGITAL creates modern, fast, and SEO-friendly websites that support long-term business growth.",
    },
    {
      q: "What website development services does BIGBEANS DIGITAL offer?",
      a: "Our Website Development Services include business website development, startup websites, corporate websites, ecommerce website development, landing pages, custom web applications, portfolio websites, responsive website design, website redesign, and SEO-friendly website development tailored to your business goals.",
    },
    {
      q: "Why should I choose BIGBEANS DIGITAL for website development?",
      a: "BIGBEANS DIGITAL is a Best Website Development Company for Startups that builds websites focused on performance, user experience, SEO, and conversions. Every website is custom-designed to help businesses attract more visitors, generate leads, and grow online.",
    },
    {
      q: "Will my website be mobile-friendly and responsive?",
      a: "Yes. Every website we build is fully responsive and optimized for desktops, tablets, and smartphones. Our responsive website development ensures your business delivers a seamless user experience across all devices.",
    },
    {
      q: "Will my website be SEO-friendly?",
      a: "Absolutely. Every project includes SEO-friendly website development with clean code, fast loading speed, mobile responsiveness, optimized page structure, technical SEO best practices, and performance optimization to improve your search engine visibility.",
    },
    {
      q: "Can you redesign my existing website?",
      a: "Yes. We provide professional website redesign services for businesses looking to modernize their website, improve user experience, increase loading speed, enhance SEO performance, and generate more leads.",
    },
    {
      q: "How long does it take to develop a website?",
      a: "The timeline depends on your project requirements. Most business and startup websites are completed within 2–6 weeks, while larger custom website development projects may require additional time based on functionality and content.",
    },
    {
      q: "Can you build websites for startups and small businesses?",
      a: "Yes. We specialize in website development for startups, entrepreneurs, SMEs, ecommerce brands, healthcare businesses, real estate companies, gyms, educational institutes, restaurants, and service-based businesses looking to establish a strong online presence.",
    },
    {
      q: "Do you provide website maintenance and support after launch?",
      a: "Yes. We offer ongoing website maintenance, security updates, performance optimization, bug fixes, content updates, and technical support to keep your website secure, fast, and running smoothly after launch.",
    },
    {
      q: "Can my website grow as my business grows?",
      a: "Absolutely. We build scalable websites that can easily accommodate new pages, products, services, integrations, and features as your business expands. Our custom website development solutions are designed to support your long-term digital growth and evolving business needs.",
    },
  ];

  return (
    <main className="cinematic-page w-full min-w-0 overflow-hidden bg-white text-[#171717]">

      <style
        dangerouslySetInnerHTML={{
          __html: STYLES,
        }}
      />

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <section className="relative z-50 bg-white py-5 sm:py-7 lg:py-8">
        <div className="mx-auto flex max-w-7xl justify-center px-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-gray-100 bg-white px-5 py-3 text-sm shadow-[0_10px_30px_rgba(0,0,0,.08)]">
            <Link
              href="/"
              className="text-gray-600 transition hover:text-[#F8BC04]"
            >
              Home
            </Link>

            <span className="text-[#F8BC04]">→</span>

            <span className="font-semibold text-[#171717]">
              Website Development
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CINEMATIC HERO
      ===================================================== */}

      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden bg-white"
        style={{
          perspective: "1600px",
        }}
      >

        <div className="cinematic-grain" />

        {/* BACKGROUND */}
        <div className="hero-background absolute inset-0">

          <div className="cinematic-grid absolute inset-0 opacity-60" />

          <motion.div
            animate={{
              x: ["-10%", "10%", "-10%"],
              y: ["-5%", "8%", "-5%"],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[5%] top-[15%] h-[420px] w-[420px] rounded-full bg-[#F8BC04]/10 blur-[110px]"
          />

          <motion.div
            animate={{
              x: ["10%", "-8%", "10%"],
              y: ["8%", "-5%", "8%"],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[0%] right-[5%] h-[500px] w-[500px] rounded-full bg-[#102B63]/10 blur-[120px]"
          />

        </div>

        {/* ORIGINAL HERO */}
        <div className="hero-content absolute inset-0 z-10 flex items-center justify-center px-5 text-center sm:px-8">

          <div className="mx-auto max-w-6xl">

            <div className="hero-kicker mb-5 inline-flex items-center gap-2 rounded-full border border-[#F8BC04]/40 bg-[#F8BC04]/10 px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#171717] sm:text-sm">
              <span className="text-[#F8BC04]">✦</span>
              Professional Website Development Company
            </div>

            <h1 className="hero-title-line-1 cinematic-title text-[42px] font-black leading-[.98] tracking-[-2px] sm:text-[58px] md:text-[72px] lg:text-[92px] xl:text-[105px]">

              Website Development Services

            </h1>

            <h1 className="hero-title-line-2 cinematic-yellow mt-2 text-[42px] font-black leading-[.98] tracking-[-2px] sm:text-[58px] md:text-[72px] lg:text-[92px] xl:text-[105px]">

              for Startups Growth

            </h1>

            <p className="hero-description mx-auto mt-7 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 md:text-xl">

              Website Development Services help businesses build a strong
              online presence with fast, SEO-friendly, mobile-responsive,
              and conversion-focused websites. At BIGBEANS DIGITAL, we
              develop custom business websites and eCommerce stores that
              improve search visibility, generate qualified leads, and drive
              sustainable business growth across India.

            </p>

            <div className="hero-actions mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                whileTap={{
                  scale: .96,
                }}
                className="dark-button rounded-full px-8 py-4 text-sm font-bold sm:px-10 sm:py-5 sm:text-base"
              >
                View Portfolio
              </motion.button>

              <motion.a
                href="https://api.whatsapp.com/send?phone=916289102537"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                whileTap={{
                  scale: .96,
                }}
                className="yellow-button flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold sm:px-9 sm:py-5 sm:text-base"
              >
                <span className="text-lg">✦</span>
                Get Website Consultation →
              </motion.a>

            </div>

          </div>
        </div>

        {/* =================================================
            PHYSICAL 3D CARD
        ================================================= */}

        <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">

          <div
            ref={heroCardRef}
            className="cinematic-card physical-card relative flex h-[88vh] w-[92vw] items-center justify-center overflow-hidden rounded-[30px] opacity-0 md:h-[82vh] md:w-[86vw] md:rounded-[40px]"
          >

            <div className="card-glow left-[-180px] top-[-180px]" />

            <div className="card-glow bottom-[-200px] right-[-150px]" />

            <div className="relative z-10 grid h-full w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 py-8 md:grid-cols-3 md:px-12 lg:px-16">

              {/* LEFT */}
              <div className="hero-card-left flex flex-col justify-center text-center md:text-left">

                <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#F8BC04]">
                  BIGBEANS DIGITAL
                </p>

                <h2 className="text-3xl font-black leading-[1.05] text-white sm:text-4xl lg:text-5xl">
                  Websites That
                  <span className="block text-[#F8BC04]">
                    Move Business Forward.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-blue-100/70 sm:text-base">
                  We combine strategy, premium design, technology,
                  performance and conversion-focused experiences to build
                  websites that work as powerful business assets.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">

                  <div className="glass-ui rounded-full px-4 py-2 text-xs font-semibold text-white">
                    SEO Ready
                  </div>

                  <div className="glass-ui rounded-full px-4 py-2 text-xs font-semibold text-white">
                    Mobile First
                  </div>

                  <div className="glass-ui rounded-full px-4 py-2 text-xs font-semibold text-white">
                    Conversion Focused
                  </div>

                </div>

              </div>

              {/* DEVICE */}
              <div
                className="device-stage relative flex h-[470px] items-center justify-center sm:h-[540px] lg:h-[600px]"
                style={{
                  perspective: "1200px",
                }}
              >

                <div
                  ref={deviceRef}
                  className="device-shell relative h-[500px] w-[245px] rounded-[42px] sm:h-[560px] sm:w-[275px]"
                >

                  {/* SIDE BUTTONS */}
                  <div className="absolute left-[-4px] top-[120px] h-10 w-1 rounded-l bg-[#3f3f46]" />
                  <div className="absolute left-[-4px] top-[175px] h-14 w-1 rounded-l bg-[#3f3f46]" />
                  <div className="absolute right-[-4px] top-[160px] h-20 w-1 rounded-r bg-[#3f3f46]" />

                  {/* SCREEN */}
                  <div className="device-screen absolute inset-[7px] overflow-hidden rounded-[36px] text-white">

                    {/* TOP CAMERA */}
                    <div className="absolute left-1/2 top-3 z-50 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

                    {/* SCREEN GLOW */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-[#F8BC04]/10" />

                    <div className="relative flex h-full flex-col px-5 pb-7 pt-14">

                      <div className="device-widget flex items-center justify-between">

                        <div>
                          <p className="text-[9px] uppercase tracking-[2px] text-white/40">
                            BIGBEANS
                          </p>

                          <p className="mt-1 text-xl font-black">
                            Website
                          </p>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold">
                          BB
                        </div>

                      </div>

                      {/* PERFORMANCE CIRCLE */}
                      <div className="device-widget relative mx-auto mt-8 flex h-40 w-40 items-center justify-center">

                        <svg
                          className="absolute inset-0 h-full w-full -rotate-90"
                          viewBox="0 0 160 160"
                        >

                          <circle
                            cx="80"
                            cy="80"
                            r="60"
                            fill="none"
                            stroke="rgba(255,255,255,.06)"
                            strokeWidth="10"
                          />

                          <circle
                            cx="80"
                            cy="80"
                            r="60"
                            fill="none"
                            stroke="#F8BC04"
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeDasharray="377"
                            strokeDashoffset="55"
                          />

                        </svg>

                        <div className="text-center">
                          <span className="block text-4xl font-black">
                            3.5x
                          </span>

                          <span className="text-[8px] uppercase tracking-[2px] text-[#F8BC04]">
                            Lead Growth
                          </span>
                        </div>

                      </div>

                      {/* UI CARDS */}
                      <div className="mt-7 space-y-3">

                        {[
                          {
                            title: "Performance",
                            value: "98%",
                            icon: "⚡",
                          },
                          {
                            title: "Mobile Ready",
                            value: "100%",
                            icon: "✓",
                          },
                          {
                            title: "SEO Score",
                            value: "94",
                            icon: "⌁",
                          },
                        ].map((item) => (

                          <div
                            key={item.title}
                            className="device-widget glass-ui flex items-center gap-3 rounded-2xl p-3"
                          >

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8BC04]/10 text-lg">
                              {item.icon}
                            </div>

                            <div className="flex-1">
                              <p className="text-[10px] text-white/40">
                                {item.title}
                              </p>

                              <p className="mt-1 text-sm font-bold">
                                {item.value}
                              </p>
                            </div>

                          </div>

                        ))}

                      </div>

                      <div className="absolute bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/20" />

                    </div>
                  </div>
                </div>

                {/* FLOATING CHIP 1 */}
                <div className="floating-chip absolute left-0 top-[15%] z-30 rounded-2xl p-3 sm:left-[-60px] sm:p-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8BC04]/15 text-lg">
                      🚀
                    </div>

                    <div>
                      <p className="text-xs font-bold text-white sm:text-sm">
                        Fast Performance
                      </p>

                      <p className="text-[10px] text-white/45">
                        Optimized experience
                      </p>
                    </div>

                  </div>

                </div>

                {/* FLOATING CHIP 2 */}
                <div className="floating-chip absolute bottom-[15%] right-0 z-30 rounded-2xl p-3 sm:right-[-60px] sm:p-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-lg">
                      ✓
                    </div>

                    <div>
                      <p className="text-xs font-bold text-white sm:text-sm">
                        Conversion Ready
                      </p>

                      <p className="text-[10px] text-white/45">
                        Built for growth
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT */}
              <div className="hero-card-right hidden text-center md:block md:text-right">

                <p className="text-6xl font-black tracking-[-4px] text-white lg:text-8xl">
                  200+
                </p>

                <p className="mt-1 text-xs font-bold uppercase tracking-[3px] text-[#F8BC04]">
                  Websites Launched
                </p>

                <div className="my-7 ml-auto h-px w-28 bg-white/10" />

                <p className="text-5xl font-black text-white">
                  4.9
                  <span className="ml-1 text-2xl text-[#F8BC04]">
                    ★
                  </span>
                </p>

                <p className="mt-1 text-xs uppercase tracking-[2px] text-white/45">
                  Client Rating
                </p>

                <p className="mt-7 text-sm leading-6 text-blue-100/55">
                  Premium digital experiences created for ambitious
                  businesses and growing brands.
                </p>

              </div>

            </div>

            {/* FINAL CTA */}
            <div className="hero-final-cta absolute inset-0 z-50 flex items-center justify-center px-6 text-center opacity-0">

              <div className="max-w-4xl">

                <p className="mb-5 text-xs font-bold uppercase tracking-[4px] text-[#F8BC04]">
                  BUILD YOUR DIGITAL PRESENCE
                </p>

                <h2 className="text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
                  Ready To Build A Website
                  <span className="block text-[#F8BC04]">
                    That Actually Performs?
                  </span>
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                  Let's create a fast, premium and conversion-focused
                  website that turns your digital presence into a
                  growth engine.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

                  <a
                    href="https://api.whatsapp.com/send?phone=916289102537"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="yellow-button rounded-full px-8 py-4 text-sm font-bold sm:px-10 sm:py-5 sm:text-base"
                  >
                    Book Free Strategy Call →
                  </a>

                  <Link
                    href="/contact"
                    className="dark-button rounded-full border border-white/10 px-8 py-4 text-sm font-bold sm:px-10 sm:py-5 sm:text-base"
                  >
                    Let's Talk
                  </Link>

                </div>

              </div>

            </div>

          </div>
        </div>

      </section>

      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">

        <div className="absolute -right-60 -top-40 h-[600px] w-[600px] rounded-full border border-[#F8BC04]/10" />

        <div className="absolute left-[-150px] bottom-[-200px] h-[450px] w-[450px] rounded-full bg-[#F8BC04]/8 blur-[120px]" />

        <div className="mx-auto grid max-w-[1500px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">

          <div className="section-reveal">

            <div className="depth-card relative overflow-hidden rounded-[30px] bg-[#07142F] p-3 shadow-[0_30px_80px_rgba(0,0,0,.18)]">

              <Image
                src="/assets/websitedevelopment/website1.png"
                alt="Website Development Team"
                width={720}
                height={560}
                className="h-auto w-full rounded-[24px] object-cover transition duration-700 hover:scale-105"
              />

            </div>

          </div>

          <div className="section-reveal">

            <p className="mb-4 text-xs font-bold uppercase tracking-[4px] text-gray-500">
              ABOUT OUR WEB DEVELOPMENT
            </p>

            <h2 className="section-heading text-4xl font-black leading-[1.03] sm:text-5xl lg:text-6xl">

              Building High-Impact
              <br />
              Websites That Inspire
              <span className="block text-[#F8BC04]">
                Trust & Growth
              </span>

            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              Our team combines creative thinking, strategic planning,
              and modern web technologies to create premium websites
              that are visually engaging, lightning-fast, and optimized
              for long-term business success. Every project is built to
              strengthen your digital presence while delivering
              measurable results.
            </p>

            <div className="mt-8 space-y-4">

              {[
                {
                  title: "Business-Focused Strategy",
                  text: "Every website starts with understanding your audience, goals, and market to create meaningful digital experiences.",
                },
                {
                  title: "Premium User Experience",
                  text: "Clean layouts, intuitive navigation, and responsive interfaces ensure visitors enjoy every interaction.",
                },
              ].map((item) => (

                <motion.div
                  key={item.title}
                  whileHover={{
                    x: 8,
                    scale: 1.015,
                  }}
                  className="depth-card group flex items-start gap-4 rounded-[22px] border border-gray-100 bg-[#fafafa] p-5 transition hover:border-[#F8BC04]/40 hover:bg-white hover:shadow-xl"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F8BC04] text-lg font-black text-white">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-bold text-[#171717] sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {item.text}
                    </p>
                  </div>

                </motion.div>

              ))}

            </div>

            <a
              href="https://api.whatsapp.com/send?phone=916289102537"
              target="_blank"
              rel="noopener noreferrer"
              className="dark-button mt-7 inline-flex rounded-full px-8 py-4 font-bold text-[#F8BC04]"
            >
              Let's Build Together →
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          TECHNOLOGIES
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 lg:py-24">

        <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#F8BC04]/10 blur-[120px]" />

        <div className="relative z-10">

          <div className="section-reveal mx-auto max-w-5xl px-5 text-center">

            <p className="text-xs font-bold uppercase tracking-[4px] text-gray-500">
              OUR TECHNOLOGY STACK
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Technologies We{" "}
              <span className="text-[#F8BC04]">
                Work With
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              We leverage modern frameworks, programming languages,
              databases, and development tools to create fast,
              scalable, secure, and future-ready websites that deliver
              exceptional user experiences across every platform and
              device.
            </p>

          </div>

          <div className="mt-10 space-y-5">

            {technologies.map((row, rowIndex) => (

              <div
                key={rowIndex}
                className="overflow-hidden"
              >

                <motion.div
                  animate={{
                    x:
                      rowIndex === 0
                        ? ["0%", "-15%", "0%"]
                        : ["-15%", "0%", "-15%"],
                  }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="marquee-track flex w-max gap-5 px-5"
                >

                  {[...row, ...row].map((tech, index) => (

                    <motion.div
                      key={`${tech.name}-${index}`}
                      whileHover={{
                        y: -10,
                        rotateY: 8,
                        scale: 1.04,
                      }}
                      className="depth-card flex h-[105px] w-[280px] shrink-0 items-center gap-4 rounded-[24px] border border-gray-100 bg-white px-5 shadow-sm"
                    >

                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F8BC04]/10 text-3xl">
                        {tech.icon}
                      </div>

                      <div>
                        <h3 className="font-bold text-[#171717]">
                          {tech.name}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500">
                          Modern Development
                        </p>
                      </div>

                    </motion.div>

                  ))}

                </motion.div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECT SHOWCASE
      ===================================================== */}

      <section className="relative bg-white py-16 sm:py-20 lg:py-24">

        <div className="section-reveal mx-auto max-w-5xl px-5 text-center">

          <p className="text-xs font-bold uppercase tracking-[4px] text-gray-500">
            OUR WORK
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl lg:text-6xl">
            Websites Designed To{" "}
            <span className="text-[#F8BC04]">
              Perform
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Explore our website design and development work created
            for modern businesses, ambitious startups and growing
            brands.
          </p>

        </div>

        <div className="project-stage mx-auto mt-10 max-w-[1100px] px-4">

          <div className="relative aspect-[995/552] overflow-hidden rounded-[28px] bg-[#07142F] shadow-[0_40px_100px_rgba(0,0,0,.22)]">

            {[
              "/assets/websitedevelopment/slider/1.png",
              "/assets/websitedevelopment/slider/2.png",
              "/assets/websitedevelopment/slider/3.png",
              "/assets/websitedevelopment/slider/4.png",
              "/assets/websitedevelopment/slider/5.png",
              "/assets/websitedevelopment/slider/6.png",
              "/assets/websitedevelopment/slider/7.png",
              "/assets/websitedevelopment/slider/8.png",
              "/assets/websitedevelopment/slider/9.png",
              "/assets/websitedevelopment/slider/10.png",
              "/assets/websitedevelopment/slider/11.png",
              "/assets/websitedevelopment/slider/12.png",
            ].map((image, index) => (

              <motion.img
                key={image}
                src={image}
                alt={`Website Development Project ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{
                  y: index === 0 ? "0%" : "100%",
                }}
                animate={{
                  y: [
                    "100%",
                    "100%",
                    "0%",
                    "0%",
                    "-100%",
                  ],
                }}
                transition={{
                  duration: 24,
                  delay: index * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [
                    0,
                    .075,
                    .125,
                    .20,
                    .25,
                  ],
                }}
              />

            ))}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07142F]/60 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-white backdrop-blur-xl">
              BIGBEANS DIGITAL
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 lg:py-28">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [.08, .18, .08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-[-100px] top-10 h-[420px] w-[420px] rounded-full bg-[#F8BC04] blur-[150px]"
        />

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8">

          <div className="section-reveal mx-auto max-w-5xl text-center">

            <p className="text-xs font-bold uppercase tracking-[4px] text-gray-500">
              INDUSTRIES WE SERVE
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Different Sectors We Serve For
              <span className="block text-[#F8BC04]">
                Website Design & Development
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              Premium website solutions crafted specifically for every
              industry with performance, conversion and exceptional
              user experience.
            </p>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">

            {industries.map((industry, index) => (

              <motion.div
                key={industry.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: .15,
                }}
                transition={{
                  duration: .6,
                  delay: index * .05,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.025,
                }}
                className="depth-card group overflow-hidden rounded-[24px] bg-[#F8BC04] p-3 shadow-[0_20px_55px_rgba(0,0,0,.08)]"
              >

                <div className="flex h-full flex-col">

                  <h3 className="text-xl font-black text-[#171717]">
                    {industry.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#171717]/80">
                    {industry.desc}
                  </p>

                  <div className="mt-4 overflow-hidden rounded-[16px]">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      width={400}
                      height={260}
                      className="h-[180px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">

        <div className="absolute right-[-160px] top-[20%] h-[450px] w-[450px] rounded-full bg-[#F8BC04]/10 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">

            <div className="section-reveal">

              <p className="text-xs font-bold uppercase tracking-[4px] text-gray-500">
                WEBSITE DESIGN PROCESS
              </p>

              <h2 className="mt-4 text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">

                Best Website Design &
                <br />
                Development Company
                <br />
                <span className="text-[#F8BC04]">
                  For Startups
                </span>

              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                We design premium websites that combine creativity,
                strategy, performance and user experience. Every project
                is built to strengthen your brand, increase engagement,
                improve credibility and generate measurable business
                growth.
              </p>

              <div className="mt-10 space-y-8">

                {[
                  {
                    title: "Custom Websites That Work For Your Brand",
                    text: "Every business is unique, so every website we build is completely custom. We focus on user experience, responsiveness, SEO, performance and conversion to ensure your website delivers measurable business results.",
                  },
                  {
                    title: "Smart Design & Seamless Functionality",
                    text: "Our websites combine premium UI design with modern development technologies to deliver fast loading speeds, intuitive navigation, mobile responsiveness and an exceptional experience across every device.",
                  },
                  {
                    title: "Strategic Focus On Business Growth",
                    text: "Every layout, section and interaction is carefully designed to increase engagement, build trust and convert visitors into customers while supporting your long-term business growth.",
                  },
                ].map((item, index) => (

                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: -40,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * .12,
                      duration: .7,
                    }}
                    className="depth-card rounded-[24px] border border-gray-100 bg-[#fafafa] p-5 sm:p-6"
                  >

                    <div className="flex items-start gap-4">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#171717] text-sm font-black text-[#F8BC04]">
                        0{index + 1}
                      </div>

                      <div>

                        <h3 className="text-lg font-bold sm:text-xl">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-base">
                          {item.text}
                        </p>

                      </div>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

            <div className="section-reveal space-y-5">

              {[
                "/assets/websitedevelopment/website2.png",
                "/assets/websitedevelopment/website3.png",
                "/assets/websitedevelopment/website4.png",
              ].map((image, index) => (

                <motion.div
                  key={image}
                  whileHover={{
                    y: -10,
                    rotateY: index % 2 === 0 ? 3 : -3,
                    scale: 1.015,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 18,
                  }}
                  className="depth-card overflow-hidden rounded-[26px] border border-gray-200 bg-white p-1"
                >

                  <Image
                    src={image}
                    alt={`Website Design Showcase ${index + 1}`}
                    width={1200}
                    height={700}
                    className="h-[200px] w-full rounded-[22px] object-cover transition duration-700 hover:scale-105 sm:h-[250px] lg:h-[275px]"
                  />

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 lg:py-28">

        <div className="absolute left-1/2 top-20 h-40 w-40 -translate-x-1/2 rounded-full bg-[#F8BC04]/15 blur-[80px]" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">

          <div className="section-reveal mb-12 text-center sm:mb-16">

            <p className="text-xs font-bold uppercase tracking-[4px] text-gray-500">
              WEBSITE DEVELOPMENT FAQS
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl md:text-6xl">
              Frequently Asked{" "}
              <span className="text-[#F8BC04]">
                Questions
              </span>
            </h2>

          </div>

          <div className="grid gap-4 lg:grid-cols-2">

            {faqs.map((faq, index) => (

              <motion.div
                key={index}
                layout
                whileHover={{
                  y: -3,
                }}
                className="depth-card overflow-hidden rounded-[20px] border border-gray-200 bg-white"
              >

                <button
                  onClick={() =>
                    setOpenFaq(
                      openFaq === index
                        ? null
                        : index
                    )
                  }
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                >

                  <span className="text-sm font-bold leading-6 sm:text-base">
                    {faq.q}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#171717] text-xl text-[#F8BC04]">
                    {openFaq === index ? "−" : "+"}
                  </span>

                </button>

                <AnimatePresence initial={false}>

                  {openFaq === index && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                    >

                      <p className="px-5 pb-6 text-sm leading-7 text-gray-600 sm:px-6 sm:text-base">
                        {faq.a}
                      </p>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          GLOBAL PRESENCE
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">

          <div className="depth-card grid overflow-hidden rounded-[32px] border border-gray-200 bg-white lg:grid-cols-2">

            <div className="p-7 sm:p-10 lg:p-16">

              <p className="text-xs font-bold uppercase tracking-[4px] text-gray-500">
                GLOBAL PRESENCE
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">

                Digital Excellence In{" "}
                <span className="text-[#F8BC04]">
                  12+
                </span>

                <br />

                Locations

              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                BIGBEANS DIGITAL serves businesses across India and
                international markets. Our strategies are built for
                local relevance and global scalability.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8">

                <div className="border-r border-gray-200 pr-6">

                  <h3 className="font-bold">
                    In India
                  </h3>

                  <div className="my-4 h-1 w-14 rounded-full bg-[#F8BC04]" />

                  <ul className="space-y-3 text-sm text-gray-600 sm:text-base">

                    {[
                      "Kolkata",
                      "Delhi",
                      "Bangalore",
                      "Noida",
                      "Tripura",
                      "Mumbai",
                      "Pune",
                    ].map((location) => (

                      <li
                        key={location}
                        className="flex items-center gap-2"
                      >
                        <span className="text-[#F8BC04]">
                          ●
                        </span>
                        {location}
                      </li>

                    ))}

                  </ul>

                </div>

                <div>

                  <h3 className="font-bold">
                    International Presence
                  </h3>

                  <div className="my-4 h-1 w-14 rounded-full bg-[#F8BC04]" />

                  <ul className="space-y-3 text-sm text-gray-600 sm:text-base">

                    {[
                      "London",
                      "Singapore",
                      "Canada",
                      "Australia",
                      "Nigeria",
                    ].map((location) => (

                      <li
                        key={location}
                        className="flex items-center gap-2"
                      >
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

            <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-[#07142F] p-6 sm:p-10">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(248,188,4,.12),transparent_60%)]" />

              <Image
                src="/maps/world-map.png"
                alt="World Map"
                width={1200}
                height={700}
                className="relative z-10 h-auto w-full max-w-[620px] opacity-90"
              />

              {[
                ["top-[42%]", "left-[67%]"],
                ["top-[27%]", "left-[44%]"],
                ["top-[28%]", "left-[18%]"],
                ["top-[50%]", "left-[47%]"],
                ["top-[54%]", "left-[74%]"],
                ["top-[65%]", "left-[84%]"],
              ].map(([top, left], index) => (

                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [.4, 1, .4],
                  }}
                  transition={{
                    duration: 2 + index * .15,
                    repeat: Infinity,
                  }}
                  className={`absolute z-20 h-3 w-3 rounded-full bg-[#F8BC04] shadow-[0_0_25px_#F8BC04] sm:h-4 sm:w-4 ${top} ${left}`}
                />

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">

        <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 70,
              scale: .96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: .2,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="relative overflow-hidden rounded-[32px] bg-[#171717] px-6 py-12 sm:rounded-[40px] sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          >

            <motion.div
              animate={{
                x: ["0%", "10%", "0%"],
                y: ["0%", "-10%", "0%"],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[-100px] top-[-150px] h-[450px] w-[450px] rounded-full bg-[#F8BC04]/20 blur-[110px]"
            />

            <motion.div
              animate={{
                x: ["0%", "-8%", "0%"],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[-200px] left-[-120px] h-[400px] w-[400px] rounded-full bg-[#102B63] blur-[100px]"
            />

            <div className="relative z-10 flex flex-col items-center justify-between gap-9 text-center lg:flex-row lg:text-left">

              <div>

                <p className="mb-4 text-xs font-bold uppercase tracking-[4px] text-[#F8BC04]">
                  LET'S BUILD SOMETHING GREAT
                </p>

                <h2 className="max-w-3xl text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">

                  Ready To Turn Clicks Into
                  <span className="block text-[#F8BC04]">
                    Real Business Growth?
                  </span>

                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                  Partner with BIGBEANS DIGITAL to launch
                  high-performance websites that generate quality
                  leads, increase conversions and accelerate your
                  business growth.
                </p>

              </div>

              <motion.a
                href="https://api.whatsapp.com/send?phone=916289102537"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.06,
                  y: -5,
                }}
                whileTap={{
                  scale: .96,
                }}
                className="yellow-button shrink-0 rounded-full px-7 py-4 text-center text-sm font-black sm:px-10 sm:py-5 sm:text-base"
              >
                Book Free Strategy Call →
              </motion.a>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}