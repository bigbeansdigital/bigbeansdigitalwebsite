"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Handshake,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/* =========================================================
   BIG BEANS DIGITAL — ABOUT PAGE
========================================================= */

const carouselImages = [
  "/assets/about/teammember/Aavika Sharma.png",
  "/assets/about/teammember/Sharvani Gupta.png",
  "/assets/about/teammember/Kritika Das.png",
  "/assets/about/teammember/Sneha Roy.png",
  "/assets/about/teammember/Ananya Sharma.png",
  "/assets/about/teammember/Anjali Bose.png",
  "/assets/about/teammember/Priya Verma.png",
  "/assets/about/teammember/Tanya Gupta.png",
  "/assets/about/teammember/Ayesha Khan.png",
  "/assets/about/teammember/Swetha Ramesh.png",
];

const journeyPoints = [
  {
    number: "01",
    title: "ABC",
    description: "Building the foundation for ambitious brands.",
    left: "5.5%",
    top: "74%",
    label: "bottom",
  },
  {
    number: "02",
    title: "ABCD",
    description: "Turning ideas into recognizable identities.",
    left: "25%",
    top: "27%",
    label: "top",
  },
  {
    number: "03",
    title: "ABCDE",
    description: "Creating digital experiences that connect.",
    left: "36.5%",
    top: "49%",
    label: "bottom",
  },
  {
    number: "04",
    title: "ABCDEF",
    description: "Expanding creativity across markets.",
    left: "57%",
    top: "26%",
    label: "top",
  },
  {
    number: "05",
    title: "ABCDEFG",
    description: "Scaling brands through strategy and performance.",
    left: "69%",
    top: "49%",
    label: "bottom",
  },
  {
    number: "06",
    title: "ABCDEFGH",
    description: "Building what comes next.",
    left: "90%",
    top: "29%",
    label: "top",
  },
];

const faqs = [
  {
    q: "What is BIGBEANS DIGITAL?",
    a: "BIGBEANS DIGITAL is a Best Digital Marketing Agency for Startups that helps businesses grow through Digital Marketing, Social Media Marketing, Website Development, Branding, Google Ads, Meta Ads, Performance Marketing, and creative digital solutions. We work with startups, small businesses, and growing brands across London, India, USA, and Dubai.",
  },
  {
    q: "Why choose BIGBEANS DIGITAL over other digital marketing agencies?",
    a: "BIGBEANS DIGITAL combines creativity, strategy, and performance to deliver measurable business growth. As a Digital Marketing Agency for Startups, we focus on building strong brands, generating qualified leads, increasing online visibility, and helping businesses achieve long-term success.",
  },
  {
    q: "Which industries does BIGBEANS DIGITAL work with?",
    a: "We work with startups, ecommerce brands, healthcare businesses, real estate companies, FMCG brands, gyms, restaurants, educational institutes, local businesses, and service-based companies.",
  },
  {
    q: "What services does BIGBEANS DIGITAL provide?",
    a: "We provide complete Digital Marketing Services, including Social Media Marketing, Website Development, Branding, Logo Design, Google Ads, Meta Ads, Performance Marketing, Graphic Design, and business growth strategies.",
  },
  {
    q: "Do you work only with startups?",
    a: "No. While we are known as a Best Digital Marketing Agency for Startups, we also work with small businesses, established companies, entrepreneurs, and growing brands.",
  },
  {
    q: "Which countries do you serve?",
    a: "BIGBEANS DIGITAL proudly serves clients across London, India, USA, and Dubai.",
  },
  {
    q: "How does BIGBEANS DIGITAL help businesses grow?",
    a: "We combine Social Media Marketing, Performance Marketing, Website Development, Branding, Google Ads, Meta Ads, and creative content to increase brand awareness, attract qualified customers, generate leads, and improve business revenue.",
  },
  {
    q: "What makes BIGBEANS DIGITAL different?",
    a: "We don't believe in one-size-fits-all marketing. Every business receives a customized growth strategy based on its goals, audience, industry, and competition.",
  },
  {
    q: "Can BIGBEANS DIGITAL handle both branding and marketing?",
    a: "Yes. We provide both Branding and Digital Marketing Services under one roof.",
  },
  {
    q: "How can I get started with BIGBEANS DIGITAL?",
    a: "Getting started is simple. Contact our team for a consultation, and we'll understand your business goals and recommend the best digital strategy.",
  },
];

/* =========================================================
   SPACE PARTICLES
========================================================= */

function SpaceParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrame = 0;

    const mouse = {
      x: 0,
      y: 0,
    };

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      yellow: boolean;
      twinkle: number;
      depth: number;
    };

    let particles: Particle[] = [];

    const createParticles = () => {
      const count =
        window.innerWidth < 768
          ? 240
          : window.innerWidth < 1200
            ? 400
            : 600;

      particles = Array.from({ length: count }, () => {
        const depth = Math.random() * 0.85 + 0.15;

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (0.08 + depth * 0.2),
          vy: (Math.random() - 0.5) * (0.08 + depth * 0.2),
          radius:
            Math.random() < 0.09
              ? Math.random() * 2.1 + 1.5
              : Math.random() * 1.1 + 0.35,
          alpha: Math.random() * 0.48 + 0.22,
          yellow: Math.random() > 0.66,
          twinkle: Math.random() * Math.PI * 2,
          depth,
        };
      });
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    };

    const handleMouse = (event: MouseEvent) => {
      mouse.x = event.clientX / width - 0.5;
      mouse.y = event.clientY / height - 0.5;
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.x += mouse.x * particle.depth * 0.018;
        particle.y += mouse.y * particle.depth * 0.018;

        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;

        const twinkle =
          0.72 +
          Math.sin(time * 0.001 + particle.twinkle) * 0.28;

        const alpha = particle.alpha * twinkle;

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        if (particle.yellow) {
          ctx.fillStyle = `rgba(248,188,4,${alpha})`;

          if (particle.radius > 1.5) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = "rgba(248,188,4,0.4)";
          }
        } else {
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;

          if (particle.radius > 1.5) {
            ctx.shadowBlur = 7;
            ctx.shadowColor = "rgba(255,255,255,0.25)";
          }
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resize();

    window.addEventListener("resize", resize);

    window.addEventListener("mousemove", handleMouse, {
      passive: true,
    });

    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);

      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        opacity-90
      "
    />
  );
}

/* =========================================================
   SPACE ATMOSPHERE
========================================================= */

function SpaceAtmosphere() {
  const { scrollYProgress } = useScroll();

  const orbOneY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 450]
  );

  const orbTwoY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -350]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: orbOneY }}
        className="
          absolute
          left-[-220px]
          top-[10%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#F8BC04]/[0.025]
          blur-[110px]
        "
      />

      <motion.div
        style={{ y: orbTwoY }}
        className="
          absolute
          right-[-220px]
          top-[30%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#F8BC04]/[0.018]
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.72)_100%)]
        "
      />
    </div>
  );
}

/* =========================================================
   GRAIN
========================================================= */

function Grain() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-[1]
        opacity-[0.025]
      "
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 180 180\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'.55\'/%3E%3C/svg%3E")',
      }}
    />
  );
}

/* =========================================================
   BREADCRUMB
========================================================= */

function Breadcrumb() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 0.2,
      }}
      className="
        absolute
        left-0
        right-0
        top-[96px]
        z-50
        flex
        justify-center
        px-5
      "
    >
      <nav
        aria-label="Breadcrumb"
        className="
          flex
          items-center
          gap-2
          text-[11px]
          font-medium
          tracking-wide
        "
      >
        <Link
          href="/"
          className="
            text-white/45
            transition-colors
            duration-300
            hover:text-[#F8BC04]
          "
        >
          Home
        </Link>

        <span className="text-white/20">
          →
        </span>

        <Link
          href="/about"
          className="
            text-[#F8BC04]
            transition-colors
            duration-300
            hover:text-white
          "
          aria-current="page"
        >
          About
        </Link>
      </nav>
    </motion.div>
  );
}

/* =========================================================
   CINEMATIC SECTION
   EXACTLY 15PX TOP + 15PX BOTTOM
========================================================= */

type CinematicVariant =
  | "pop"
  | "left"
  | "right"
  | "up"
  | "zoom";

function CinematicSection({
  children,
  className = "",
  variant = "pop",
}: {
  children: ReactNode;
  className?: string;
  variant?: CinematicVariant;
}) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  type Preset = {
    x: number[];
    y: number[];
    scale: number[];
    opacity: number[];
    rotateX: number[];
    rotateY: number[];
  };

  const presets: Record<CinematicVariant, Preset> = {
    pop: {
      x: [0, 0, 0, 0],
      y: [90, 0, 0, -65],
      scale: [0.94, 1, 1, 0.97],
      opacity: [0, 1, 1, 0],
      rotateX: [5, 0, 0, -2],
      rotateY: [0, 0, 0, 0],
    },

    left: {
      x: [-100, 0, 0, 65],
      y: [20, 0, 0, -30],
      scale: [0.97, 1, 1, 0.98],
      opacity: [0, 1, 1, 0],
      rotateX: [2, 0, 0, -2],
      rotateY: [-4, 0, 0, 3],
    },

    right: {
      x: [100, 0, 0, -65],
      y: [20, 0, 0, -30],
      scale: [0.97, 1, 1, 0.98],
      opacity: [0, 1, 1, 0],
      rotateX: [2, 0, 0, -2],
      rotateY: [4, 0, 0, -3],
    },

    up: {
      x: [0, 0, 0, 0],
      y: [100, 0, 0, -65],
      scale: [0.97, 1, 1, 0.98],
      opacity: [0, 1, 1, 0],
      rotateX: [4, 0, 0, -3],
      rotateY: [0, 0, 0, 0],
    },

    zoom: {
      x: [0, 0, 0, 0],
      y: [30, 0, 0, -30],
      scale: [0.9, 1, 1, 1.04],
      opacity: [0, 1, 1, 0],
      rotateX: [3, 0, 0, -2],
      rotateY: [2, 0, 0, -2],
    },
  };

  const preset = presets[variant];

  const x = useTransform(
    scrollYProgress,
    [0, 0.18, 0.72, 1],
    preset.x
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.18, 0.72, 1],
    preset.y
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.18, 0.72, 1],
    preset.scale
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.14, 0.78, 1],
    preset.opacity
  );

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.18, 0.72, 1],
    preset.rotateX
  );

  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.18, 0.72, 1],
    preset.rotateY
  );

  return (
    <motion.section
      ref={ref}
      style={{
        x,
        y,
        scale,
        opacity,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1400,
        willChange: "transform, opacity",
      }}
      className={`
        relative
        z-10
        py-[15px]
        ${className}
      `}
    >
      {children}
    </motion.section>
  );
}

/* =========================================================
   SCENE 1 — HERO
   CORRECTED:
   - Removed the huge empty space above title.
   - Breadcrumb added near the top.
   - Main title moved substantially upward.
   - Description moved upward accordingly.
========================================================= */

function OpeningScene() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    mass: 0.7,
  });

  const titleY = useTransform(
    progress,
    [0, 0.7, 1],
    ["0vh", "-18vh", "-38vh"]
  );

  const titleScale = useTransform(
    progress,
    [0, 0.7, 1],
    [1, 0.93, 0.78]
  );

  const paragraphY = useTransform(
    progress,
    [0, 0.65, 1],
    ["0vh", "8vh", "28vh"]
  );

  const paragraphOpacity = useTransform(
    progress,
    [0, 0.55, 0.9],
    [1, 0.7, 0]
  );

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
      "
    >
      <Breadcrumb />

      <motion.div
        style={{
          y: titleY,
          scale: titleScale,
        }}
        className="
          absolute
          inset-x-0
          top-[20%]
          z-10
          flex
          justify-center
          px-5
          text-center
        "
      >
        <div>
          <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.45em] text-white/35 sm:text-xs">
            About Big Beans Digital
          </p>

          <h1
            className="
              text-[48px]
              font-black
              leading-[0.86]
              tracking-[-0.065em]
              text-white
              sm:text-[76px]
              md:text-[100px]
              lg:text-[125px]
            "
          >
            Building
            <br />

            <span className="text-[#F8BC04]">
              Better Brands.
            </span>
          </h1>
        </div>
      </motion.div>

      {/* =================================================
          HERO DESCRIPTION

          Also moved up so it doesn't overlap the heading.
      ================================================= */}

      <motion.div
        style={{
          y: paragraphY,
          opacity: paragraphOpacity,
        }}
        className="
          absolute
          left-1/2
          top-[48%]
          z-10
          w-[min(800px,90vw)]
          -translate-x-1/2
          text-center
        "
      >
        <p className="text-[13px] leading-6 text-white/55 sm:text-[15px] sm:leading-7 lg:text-[17px] lg:leading-8">
          At BigBeans Digital, we help startups,
          entrepreneurs, and growing businesses build brands
          that stand out, connect with the right audience, and
          drive measurable business growth.
          <br />
          <br />
          As a Social Media Marketing Agency specializing in
          creative design, branding, performance marketing,
          and website development, we don't believe in
          one-size-fits-all strategies. Every business has a
          unique story, and our job is to help you tell it in a
          way that attracts attention, builds trust, and
          converts customers.
        </p>
      </motion.div>

      <motion.div
        style={{
          opacity: paragraphOpacity,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          z-20
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-white/30
        "
      >
        <span className="text-[9px] uppercase tracking-[0.5em]">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={17} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   SIDE IMAGE OPENING
   SCENE 2 + SCENE 4
========================================================= */

function SideImageOpening({
  leftImage,
  rightImage,
  progress,
}: {
  leftImage: string;
  rightImage: string;
  progress: any;
}) {
  const leftX = useTransform(
    progress,
    [0, 0.18, 0.72, 1],
    ["-52vw", "0vw", "0vw", "-52vw"]
  );

  const rightX = useTransform(
    progress,
    [0, 0.18, 0.72, 1],
    ["52vw", "0vw", "0vw", "52vw"]
  );

  const imageScale = useTransform(
    progress,
    [0, 0.2, 0.72, 1],
    [1.08, 1, 1, 1.08]
  );

  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[50vw] overflow-hidden">
        <motion.div
          style={{
            x: leftX,
            scale: imageScale,
          }}
          className="
            absolute
            left-[-8vw]
            top-0
            h-full
            w-[66vw]
            will-change-transform
          "
        >
          <Image
            src={leftImage}
            alt=""
            fill
            priority
            sizes="66vw"
            className="object-cover object-center grayscale"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div
            className="
              absolute
              inset-y-0
              right-0
              w-[24vw]
              bg-gradient-to-r
              from-transparent
              via-[#050505]/70
              to-[#050505]
            "
          />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[50vw] overflow-hidden">
        <motion.div
          style={{
            x: rightX,
            scale: imageScale,
          }}
          className="
            absolute
            right-[-8vw]
            top-0
            h-full
            w-[66vw]
            will-change-transform
          "
        >
          <Image
            src={rightImage}
            alt=""
            fill
            priority
            sizes="66vw"
            className="object-cover object-center grayscale"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div
            className="
              absolute
              inset-y-0
              left-0
              w-[24vw]
              bg-gradient-to-l
              from-transparent
              via-[#050505]/70
              to-[#050505]
            "
          />
        </motion.div>
      </div>

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-1/2
          z-[20]
          w-[38vw]
          -translate-x-1/2
          bg-[#050505]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-[42%]
          z-[21]
          w-[10vw]
          bg-gradient-to-r
          from-transparent
          to-[#050505]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-[42%]
          z-[21]
          w-[10vw]
          bg-gradient-to-l
          from-transparent
          to-[#050505]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[22]
          bg-[radial-gradient(ellipse_at_center,transparent_18%,rgba(5,5,5,0.15)_45%,rgba(5,5,5,0.72)_100%)]
        "
      />
    </>
  );
}

/* =========================================================
   VERTICAL MOUNTAIN OPENING
   SCENE 3
========================================================= */

function VerticalMountainOpening({
  topImage,
  bottomImage,
  progress,
}: {
  topImage: string;
  bottomImage: string;
  progress: any;
}) {
  const topY = useTransform(
    progress,
    [0, 0.18, 0.72, 1],
    ["-54vh", "0vh", "0vh", "-54vh"]
  );

  const bottomY = useTransform(
    progress,
    [0, 0.18, 0.72, 1],
    ["54vh", "0vh", "0vh", "54vh"]
  );

  const imageScale = useTransform(
    progress,
    [0, 0.18, 0.72, 1],
    [1.08, 1, 1, 1.08]
  );

  return (
    <>
      {/* TOP IMAGE */}

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-[54vh] w-full overflow-hidden">
        <motion.div
          style={{
            y: topY,
            scale: imageScale,
          }}
          className="
            absolute
            left-[-5vw]
            top-[-5vh]
            h-[62vh]
            w-[110vw]
            will-change-transform
          "
        >
          <Image
            src={topImage}
            alt=""
            fill
            priority
            sizes="110vw"
            className="object-cover object-center grayscale"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[28vh]
              bg-gradient-to-b
              from-transparent
              via-[#050505]/70
              to-[#050505]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(to_right,rgba(5,5,5,0.45),transparent_25%,transparent_75%,rgba(5,5,5,0.45))]
            "
          />
        </motion.div>
      </div>

      {/* BOTTOM IMAGE */}

      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-[54vh] w-full overflow-hidden">
        <motion.div
          style={{
            y: bottomY,
            scale: imageScale,
          }}
          className="
            absolute
            bottom-[-5vh]
            left-[-5vw]
            h-[62vh]
            w-[110vw]
            will-change-transform
          "
        >
          <Image
            src={bottomImage}
            alt=""
            fill
            priority
            sizes="110vw"
            className="object-cover object-center grayscale"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div
            className="
              absolute
              inset-x-0
              top-0
              h-[28vh]
              bg-gradient-to-t
              from-transparent
              via-[#050505]/70
              to-[#050505]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(to_right,rgba(5,5,5,0.45),transparent_25%,transparent_75%,rgba(5,5,5,0.45))]
            "
          />
        </motion.div>
      </div>

      {/* CENTRAL BLACK VALLEY */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-[27%]
          z-[20]
          h-[46%]
          bg-[#050505]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-[22%]
          z-[21]
          h-[18vh]
          bg-gradient-to-b
          from-transparent
          via-[#050505]/65
          to-[#050505]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-[22%]
          z-[21]
          h-[18vh]
          bg-gradient-to-t
          from-transparent
          via-[#050505]/65
          to-[#050505]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[22]
          bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(5,5,5,0.18)_58%,rgba(5,5,5,0.72)_100%)]
        "
      />
    </>
  );
}

/* =========================================================
   SCENE 2
========================================================= */

function SceneTwo() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 24,
  });

  const contentY = useTransform(
    progress,
    [0, 0.2, 0.72, 1],
    ["14vh", "0vh", "0vh", "-16vh"]
  );

  const contentOpacity = useTransform(
    progress,
    [0, 0.18, 0.72, 0.9],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
      "
    >
      <SideImageOpening
        leftImage="/assets/about/teammember/Aavika Sharma.png"
        rightImage="/assets/about/teammember/Sharvani Gupta.png"
        progress={progress}
      />

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          z-40
          w-[min(540px,30vw)]
          min-w-[310px]
          -translate-x-1/2
          -translate-y-1/2
          text-center
        "
      >
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-[#F8BC04]/60 sm:w-16" />

          <span className="text-[60px] font-black leading-none tracking-[-0.06em] text-white/[0.13] sm:text-[78px] lg:text-[95px]">
            2020
          </span>

          <span className="h-px w-10 bg-[#F8BC04]/60 sm:w-16" />
        </div>

        <h2 className="mt-3 text-[35px] font-black leading-[0.94] tracking-[-0.05em] text-white sm:text-[48px] lg:text-[58px]">
          Where It All
          <br />
          <span className="text-[#F8BC04]">
            Began.
          </span>
        </h2>

        <p className="mt-6 text-[12px] leading-6 text-white/65 sm:text-[14px] sm:leading-7 lg:text-[15px] lg:leading-7">
          BigBeans Digital was founded with a clear
          vision—to help startups, entrepreneurs, and
          growing businesses build brands that stand out
          in today's competitive digital world. As a
          trusted Social Media Marketing Agency for
          Startups, we combine strategic branding,
          creative design, and performance-driven
          marketing to help businesses strengthen their
          online presence, connect with the right
          audience, and achieve sustainable growth.
        </p>
      </motion.div>
    </section>
  );
}

/* =========================================================
   SCENE 3
========================================================= */

function SceneThree() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 24,
  });

  const contentY = useTransform(
    progress,
    [0, 0.2, 0.72, 1],
    ["14vh", "0vh", "0vh", "-16vh"]
  );

  const contentOpacity = useTransform(
    progress,
    [0, 0.18, 0.72, 0.9],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
      "
    >
      <VerticalMountainOpening
        topImage="/assets/about/teammember/Kritika Das.png"
        bottomImage="/assets/about/teammember/Sneha Roy.png"
        progress={progress}
      />

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          z-40
          w-[min(560px,42vw)]
          min-w-[315px]
          -translate-x-1/2
          -translate-y-1/2
          text-center
        "
      >
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-[#F8BC04]/60 sm:w-16" />

          <span className="text-[60px] font-black leading-none tracking-[-0.06em] text-white/[0.13] sm:text-[80px] lg:text-[95px]">
            2024
          </span>

          <span className="h-px w-10 bg-[#F8BC04]/60 sm:w-16" />
        </div>

        <h2 className="mt-3 text-[35px] font-black leading-[0.94] tracking-[-0.05em] text-white sm:text-[50px] lg:text-[62px]">
          Taking Our
          <br />
          <span className="text-[#F8BC04]">
            Creativity Global.
          </span>
        </h2>

        <p className="mt-6 text-[12px] leading-6 text-white/65 sm:text-[14px] sm:leading-7 lg:text-[15px] lg:leading-7">
          As businesses across India began recognizing
          BigBeans Digital as a trusted Social Media
          Marketing Agency for Startups, we expanded our
          creative expertise to serve brands in the United
          Kingdom and the UAE. Today, we help businesses
          looking for a Social Media Marketing Agency in
          London, a Creative Branding Agency in the UAE,
          or a reliable digital growth partner build
          stronger brands through strategic content,
          creative design, and performance-driven
          marketing.
        </p>
      </motion.div>
    </section>
  );
}

/* =========================================================
   SCENE 4
========================================================= */

function SceneFour() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 24,
  });

  const contentY = useTransform(
    progress,
    [0, 0.2, 0.72, 1],
    ["14vh", "0vh", "0vh", "-16vh"]
  );

  const contentOpacity = useTransform(
    progress,
    [0, 0.18, 0.72, 0.9],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
      "
    >
      <SideImageOpening
        leftImage="/assets/about/teammember/Ananya Sharma.png"
        rightImage="/assets/about/teammember/Anjali Bose.png"
        progress={progress}
      />

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          z-40
          w-[min(540px,30vw)]
          min-w-[310px]
          -translate-x-1/2
          -translate-y-1/2
          text-center
        "
      >
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-[#F8BC04]/60 sm:w-16" />

          <span className="text-[60px] font-black leading-none tracking-[-0.06em] text-white/[0.13] sm:text-[78px] lg:text-[95px]">
            2025
          </span>

          <span className="h-px w-10 bg-[#F8BC04]/60 sm:w-16" />
        </div>

        <h2 className="mt-3 text-[35px] font-black leading-[0.94] tracking-[-0.05em] text-white sm:text-[48px] lg:text-[58px]">
          100+ Brands.
          <br />
          <span className="text-[#F8BC04]">
            One Purpose.
          </span>
        </h2>

        <p className="mt-6 text-[12px] leading-6 text-white/65 sm:text-[14px] sm:leading-7 lg:text-[15px] lg:leading-7">
          Today, BigBeans Digital has earned the trust of
          100+ startups, entrepreneurs, and growing
          businesses looking for a reliable Social Media
          Marketing Agency for startups and growing
          businesses in India, Dubai, and London. Through
          strategic branding, creative content, social
          media marketing, and performance-driven digital
          solutions, we've helped businesses strengthen
          their online presence, reach the right audience,
          and build brands that inspire trust and drive
          long-term growth.
        </p>
      </motion.div>
    </section>
  );
}

/* =========================================================
   SCENE 5
========================================================= */

function GuidingPrinciples() {
  return (
    <CinematicSection
      variant="up"
      className="bg-[#050505] overflow-hidden"
    >
      <div className="mx-auto max-w-[1450px] px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[40%_60%] lg:gap-20">
          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="relative overflow-hidden rounded-[30px] sm:rounded-[35px]">
              <Image
                src="/assets/about/bigbeansdigital.png"
                alt="Big Beans Digital Team"
                width={800}
                height={900}
                className="
                  h-[420px]
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                  sm:h-[520px]
                  lg:h-[650px]
                "
              />
            </div>

            <Link
              href="/connect"
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#171717]
                px-7
                py-4
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#F8BC04]
                hover:text-black
              "
            >
              Let's Build Your Brand

              <ArrowRight size={17} />
            </Link>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <h2 className="text-[40px] font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-[55px] lg:text-[65px]">
              Helping Startups
              <br />
              Becoming{" "}
              <span className="text-[#F8BC04]">
                Brands.
              </span>
            </h2>

            <p className="mt-7 text-[15px] leading-7 text-white/60 sm:text-[17px] sm:leading-8">
              Looking for the Best Social Media Marketing
              Agency for Startups or a trusted Creative
              Branding Agency to grow your business?
              BigBeans Digital helps startups,
              entrepreneurs, and growing businesses build
              memorable brands through Social Media
              Marketing, Creative Design, Branding,
              Performance Marketing, and Website
              Development.
              <br />
              <br />
              Whether you're launching a startup in India,
              scaling your business in the UAE, or
              expanding your brand in the UK, we create
              customized marketing strategies that
              increase brand visibility, attract the right
              audience, generate quality leads, and deliver
              measurable business growth.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-3 xl:grid-cols-4">
              {[
                {
                  title: "Creative Excellence",
                  text: "Designs that make brands unforgettable.",
                  icon: BarChart3,
                },
                {
                  title: "Customized Strategy",
                  text: "Tailored marketing plans for your goals.",
                  icon: Handshake,
                },
                {
                  title: "Dedicated Team",
                  text: "Your growth partners every step.",
                  icon: Lightbulb,
                },
                {
                  title: "Startup-Focused",
                  text: "Built for startups. Designed to scale.",
                  icon: TrendingUp,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                    className="
                      rounded-[22px]
                      bg-[#F8BC04]
                      p-4
                      sm:p-5
                    "
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#050505]">
                      <Icon
                        size={21}
                        className="text-white"
                      />
                    </div>

                    <h3 className="text-[14px] font-bold leading-tight text-[#171717] sm:text-[16px]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-5 text-[#171717]/75 sm:text-[13px]">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </CinematicSection>
  );
}

/* =========================================================
   SCENE 6 — JOURNEY
========================================================= */

function JourneyCurve() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 23,
  });

  const lineProgress = useTransform(
    progress,
    [0.05, 0.72],
    [0, 1]
  );

  const contentOpacity = useTransform(
    progress,
    [0.05, 0.2, 0.8, 0.95],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
        py-[15px]
      "
    >
      <motion.div
        style={{
          opacity: contentOpacity,
        }}
        className="
          absolute
          left-1/2
          top-[9%]
          z-30
          w-full
          -translate-x-1/2
          text-center
        "
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[#F8BC04] sm:text-xs">
          The Journey Continues
        </p>

        <h2 className="mt-4 text-[45px] font-black leading-none tracking-[-0.055em] text-white sm:text-[65px] lg:text-[82px]">
          Our{" "}
          <span className="text-[#F8BC04]">
            Journey.
          </span>
        </h2>
      </motion.div>

      <div className="absolute left-1/2 top-[48%] z-10 h-[52vh] w-[96vw] -translate-x-1/2 -translate-y-1/2">
        <svg
          viewBox="0 0 1000 520"
          preserveAspectRatio="none"
          className="
            absolute
            inset-0
            h-full
            w-full
            overflow-visible
          "
        >
          <defs>
            <filter
              id="journeyGlow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur
                stdDeviation="5"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="
              M 55 385
              C 145 90, 260 40, 365 255
              C 470 470, 585 470, 690 250
              C 800 35, 885 60, 955 205
            "
            fill="none"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />

          <motion.path
            d="
              M 55 385
              C 145 90, 260 40, 365 255
              C 470 470, 585 470, 690 250
              C 800 35, 885 60, 955 205
            "
            fill="none"
            stroke="#F8BC04"
            strokeWidth="2.5"
            pathLength={1}
            style={{
              pathLength: lineProgress,
            }}
            filter="url(#journeyGlow)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {journeyPoints.map((point) => (
          <JourneyPoint
            key={point.number}
            point={point}
            opacity={contentOpacity}
          />
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   JOURNEY POINT
========================================================= */

function JourneyPoint({
  point,
  opacity,
}: {
  point: {
    number: string;
    title: string;
    description: string;
    left: string;
    top: string;
    label: string;
  };
  opacity: any;
}) {
  return (
    <motion.div
      style={{
        left: point.left,
        top: point.top,
        opacity,
      }}
      className="
        absolute
        z-20
        -translate-x-1/2
        -translate-y-1/2
      "
    >
      <motion.div
        animate={{
          boxShadow: [
            "0 0 0 rgba(248,188,4,0)",
            "0 0 28px rgba(248,188,4,0.42)",
            "0 0 0 rgba(248,188,4,0)",
          ],
        }}
        transition={{
          duration: 2.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-[#F8BC04]
          bg-[#050505]
          sm:h-12
          sm:w-12
        "
      >
        <span className="h-3 w-3 rounded-full bg-[#F8BC04]" />
      </motion.div>

      <div
        className={`
          absolute
          left-1/2
          w-[145px]
          -translate-x-1/2
          text-center
          sm:w-[210px]
          ${
            point.label === "top"
              ? "bottom-14"
              : "top-14"
          }
        `}
      >
        <p className="text-[8px] font-bold tracking-[0.25em] text-[#F8BC04] sm:text-[9px]">
          {point.number}
        </p>

        <h3 className="mt-1 text-[12px] font-black text-white sm:text-[17px]">
          {point.title}
        </h3>

        <p className="mt-1 text-[8px] leading-4 text-white/45 sm:text-[11px] sm:leading-5">
          {point.description}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   SCENE 7 — CORE TEAM
========================================================= */

function CoreTeam() {
  return (
    <CinematicSection
      variant="left"
      className="bg-[#050505] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 text-center sm:mb-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[#F8BC04]">
            The People Behind The Work
          </p>

          <h2 className="mt-4 text-[42px] font-black leading-none tracking-[-0.05em] text-white sm:text-[62px] lg:text-[78px]">
            Know Our Core{" "}
            <span className="text-[#F8BC04]">
              Team.
            </span>
          </h2>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            mb-10
            overflow-visible
            rounded-[30px]
            border
            border-white/10
            bg-[#171717]
          "
        >
          <div className="absolute bottom-0 left-1/2 z-20 h-[300px] w-[230px] -translate-x-1/2 sm:left-7 sm:h-[390px] sm:w-[320px] sm:translate-x-0">
            <Image
              src="/team/TamojyotiBhowmik.png"
              alt="Tamojyoti Bhowmik"
              fill
              className="object-contain object-bottom"
            />
          </div>

          <div className="px-6 pb-[310px] pt-8 sm:py-16 sm:pl-[370px] sm:pr-14">
            <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#F8BC04]">
              Founder
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white sm:text-5xl lg:text-6xl">
              Tamojyoti Bhowmik
            </h3>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Leading BIGBEANS DIGITAL with a vision
              to combine creativity, technology,
              branding and performance marketing into
              measurable business growth.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <TeamCard
            name="Neha Gupta"
            role="Head of Social Media Marketing"
            image="/team/NehaGupta.png"
            yellow
          />

          <TeamCard
            name="Sonia Parveen"
            role="Head of Branding and Designing"
            image="/team/SoniaParveen.png"
          />

          <TeamCard
            name="Harshita Gautam"
            role="Head of Performance Marketing"
            image="/team/HarshitaGautam.png"
            yellow
          />

          <TeamCard
            name="Jui Banerjee"
            role="Head of Content & Digital Marketing"
            image="/team/JuiBanerjee.png"
          />
        </div>
      </div>
    </CinematicSection>
  );
}

function TeamCard({
  name,
  role,
  image,
  yellow = false,
}: {
  name: string;
  role: string;
  image: string;
  yellow?: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.65,
      }}
      className={`
        relative
        min-h-[480px]
        overflow-visible
        rounded-[30px]
        ${yellow ? "bg-[#F8BC04]" : "bg-[#171717]"}
      `}
    >
      <div className="absolute bottom-0 right-1/2 z-20 h-[320px] w-[250px] translate-x-1/2 sm:right-[-10px] sm:h-[430px] sm:w-[330px] sm:translate-x-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain object-bottom"
        />
      </div>

      <div className="relative z-10 max-w-[55%] p-7 sm:p-10">
        <h3
          className={`
            text-3xl
            font-bold
            leading-tight
            sm:text-4xl
            ${yellow ? "text-[#171717]" : "text-white"}
          `}
        >
          {name}
        </h3>

        <p
          className={`
            mt-4
            text-sm
            leading-6
            sm:text-base
            ${yellow ? "text-[#171717]/70" : "text-[#F8BC04]"}
          `}
        >
          {role}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   SCENE 8 — AUTOMATIC TEAM CAROUSEL
========================================================= */

function TeamCarousel() {
  const [active, setActive] = useState(0);

  const total = carouselImages.length;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [total]);

  const next = () => {
    setActive((current) => (current + 1) % total);
  };

  const previous = () => {
    setActive((current) => (current - 1 + total) % total);
  };

  return (
    <CinematicSection
      variant="right"
      className="bg-[#050505] overflow-hidden"
    >
      <div className="mx-auto max-w-[1450px] px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[#F8BC04]">
            The People Behind The Work
          </p>

          <h2 className="mt-4 text-[44px] font-black leading-none tracking-[-0.05em] text-white sm:text-[65px] lg:text-[80px]">
            Team{" "}
            <span className="text-[#F8BC04]">
              Members.
            </span>
          </h2>

          <div className="mx-auto mt-5 h-px w-28 bg-[#F8BC04]/60" />
        </div>

        <div className="relative flex h-[480px] w-full items-center justify-center overflow-hidden sm:h-[560px]">
          {carouselImages.map((image, index) => {
            let offset = index - active;

            if (offset > total / 2) {
              offset -= total;
            }

            if (offset < -total / 2) {
              offset += total;
            }

            const isCenter = offset === 0;

            return (
              <motion.div
                key={image}
                animate={{
                  x: offset * 285,

                  scale: isCenter
                    ? 1
                    : Math.max(
                        0.68,
                        1 - Math.abs(offset) * 0.15
                      ),

                  rotateY: offset * -13,

                  opacity:
                    Math.abs(offset) > 2
                      ? 0
                      : isCenter
                        ? 1
                        : 0.45,

                  zIndex: 20 - Math.abs(offset),
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  h-[370px]
                  w-[255px]
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-[#111]
                  shadow-[0_40px_100px_rgba(0,0,0,0.7)]
                  sm:h-[460px]
                  sm:w-[330px]
                "
                style={{
                  perspective: 1200,
                }}
              >
                <Image
                  src={image}
                  alt={`Team member ${index + 1}`}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F8BC04]">
                    Team Member
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    {image
                      .split("/")
                      .pop()
                      ?.replace(".png", "")}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={previous}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              text-white
              transition
              hover:border-[#F8BC04]
              hover:bg-[#F8BC04]
              hover:text-black
            "
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-1.5">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    index === active
                      ? "w-8 bg-[#F8BC04]"
                      : "w-1.5 bg-white/20"
                  }
                `}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              text-white
              transition
              hover:border-[#F8BC04]
              hover:bg-[#F8BC04]
              hover:text-black
            "
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </CinematicSection>
  );
}

/* =========================================================
   SCENE 9 — SERVICES
========================================================= */

function ServicesSection() {
  const services = [
    {
      title: "Branding",
      description:
        "Strategic branding solutions for startups and businesses.",
      image:
        "/home/ourservice/bigbeansdigitalbranding.png",
      href: "/services/branding",
    },
    {
      title: "Digital Marketing",
      description:
        "Build visibility, engagement and quality leads.",
      image:
        "/home/ourservice/socialmedia.png",
      href: "/services/social-media-marketing",
    },
    {
      title: "Website Development",
      description:
        "Premium websites designed for business growth.",
      image:
        "/home/ourservice/bigbeansdigitalwebsite.png",
      href: "/services/website-development",
    },
    {
      title: "Performance Marketing",
      description:
        "Professional campaigns for every marketing platform.",
      image:
        "/home/ourservice/bigbeansdigitalperformancemarketing.png",
      href: "/services/google-ads-meta-ads",
    },
  ];

  return (
    <CinematicSection
      variant="pop"
      className="bg-[#050505] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[#F8BC04]">
            What We Create
          </p>

          <h2 className="mt-4 text-[44px] font-black leading-none tracking-[-0.05em] text-white sm:text-[62px] lg:text-[78px]">
            Our Core{" "}
            <span className="text-[#F8BC04]">
              Services.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -10,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="
                group
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-[#111]
              "
            >
              <div className="relative h-[210px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="
                    object-cover
                    grayscale
                    transition
                    duration-700
                    group-hover:scale-110
                    group-hover:grayscale-0
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />

                <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xs font-bold text-[#F8BC04] backdrop-blur-md">
                  0{index + 1}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-white/50">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[#F8BC04]
                    transition-all
                    hover:gap-3
                  "
                >
                  Explore
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </CinematicSection>
  );
}

/* =========================================================
   SCENE 10 — FAQ
========================================================= */

function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <CinematicSection
      variant="left"
      className="bg-[#050505] overflow-hidden"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[#F8BC04]">
            About Big Beans Digital
          </p>

          <h2 className="mt-4 text-[43px] font-black leading-none tracking-[-0.05em] text-white sm:text-[62px] lg:text-[78px]">
            Frequently Asked{" "}
            <span className="text-[#F8BC04]">
              Questions.
            </span>
          </h2>
        </div>

        <div className="mx-auto max-w-[1050px]">
          {faqs.map((faq, index) => {
            const open = openFaq === index;

            return (
              <div
                key={faq.q}
                className="border-b border-white/10"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(open ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5
                    py-5
                    text-left
                    sm:py-7
                  "
                >
                  <span className="text-sm font-semibold text-white sm:text-base lg:text-lg">
                    <span className="mr-4 text-[#F8BC04]/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {faq.q}
                  </span>

                  <motion.span
                    animate={{
                      rotate: open ? 45 : 0,
                    }}
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-white
                    "
                  >
                    +
                  </motion.span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: open ? "auto" : 0,
                    opacity: open ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <p className="pb-7 pl-0 text-sm leading-7 text-white/50 sm:pb-8 sm:pl-10 sm:text-base sm:leading-8">
                    {faq.a}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </CinematicSection>
  );
}

/* =========================================================
   SCENE 11 — CTA
========================================================= */

function FinalCTA() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 22,
  });

  const scale = useTransform(
    progress,
    [0, 0.25, 0.75, 1],
    [0.78, 1, 1, 1.1]
  );

  const opacity = useTransform(
    progress,
    [0, 0.18, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
        py-[15px]
      "
    >
      <motion.div
        style={{
          scale,
          opacity,
        }}
        className="
          flex
          min-h-screen
          flex-col
          items-center
          justify-center
          px-5
          text-center
        "
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[#F8BC04] sm:text-xs">
          Your Next Chapter Starts Here
        </p>

        <h2 className="mt-6 max-w-[1100px] text-[50px] font-black leading-[0.88] tracking-[-0.065em] text-white sm:text-[78px] md:text-[100px] lg:text-[125px]">
          Ready To Build
          <br />
          <span className="text-[#F8BC04]">
            Better Brands?
          </span>
        </h2>

        <p className="mt-8 max-w-[650px] text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
          Let's turn your idea into a brand people
          remember, trust, and choose.
        </p>

        <Link
          href="/connect"
          className="
            group
            mt-9
            inline-flex
            items-center
            gap-4
            rounded-full
            bg-[#F8BC04]
            px-8
            py-4
            text-sm
            font-bold
            text-black
            transition-all
            duration-300
            hover:-translate-y-1
            hover:px-10
            sm:px-10
            sm:py-5
            sm:text-base
          "
        >
          Let's Build Together

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-[#F8BC04] transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight size={15} />
          </span>
        </Link>
      </motion.div>
    </section>
  );
}

/* =========================================================
   MAIN ABOUT PAGE
========================================================= */

export default function About() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
        text-white
      "
      style={{
        perspective: "1400px",
      }}
    >
      <SpaceParticles />
      <SpaceAtmosphere />
      <Grain />

      <div className="relative z-10">
        {/* SCENE 1 */}

        <OpeningScene />

        {/* SCENE 2 */}

        <SceneTwo />

        {/* SCENE 3 — TOP + BOTTOM */}

        <SceneThree />

        {/* SCENE 4 */}

        <SceneFour />

        {/* SCENE 5 */}

        <GuidingPrinciples />

        {/* SCENE 6 */}

        <JourneyCurve />

        {/* SCENE 7 */}

        <CoreTeam />

        {/* SCENE 8 */}

        <TeamCarousel />

        {/* SCENE 9 */}

        <ServicesSection />

        {/* SCENE 10 */}

        <FAQSection />

        {/* SCENE 11 */}

        <FinalCTA />
      </div>
    </main>
  );
}