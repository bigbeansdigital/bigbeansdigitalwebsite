"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import OurWork from "@/components/Recentwork";
import OurProcess from "@/components/OurProcess";

const carouselImages = [
  "/home/clientlogo/1.png",
  "/home/clientlogo/2.png",
  "/home/clientlogo/3.png",
  "/home/clientlogo/4.png",
  "/home/clientlogo/5.png",
  "/home/clientlogo/6.png",
  "/home/clientlogo/7.png",
  "/home/clientlogo/8.png",
  "/home/clientlogo/9.png",
  "/home/clientlogo/10.png",
  "/home/clientlogo/11.png",
  "/home/clientlogo/12.png",
  "/home/clientlogo/13.png",
  "/home/clientlogo/14.png",
];

type Service = {
  title: string;
  navTitle: string;
  image: string;
  text: string;
  href: string;
  pointers?: string[];
};

const services: Service[] = [
  {
  title: "Branding",
  navTitle: "Branding",
  image: "/home/ourservice/bigbeansdigitalbranding.webp",
  text:
    "Create a brand people remember with clear brand strategy, logo design, and a strong visual identity.",
  href: "/services/branding",
},
  {
  title: "Social Media Marketing",
  navTitle: "Social Media Marketing & Optimisation",
  image: "/home/ourservice/bigbeansdigitalsocialmedia.webp",
  text:
    "Build your audience with social media marketing, creative content, and a strategy that keeps your brand active and relevant.",
  href: "/services/social-media-marketing",
},
  {
  title: "Website Development",
  navTitle: "Website Development",
  image: "/home/ourservice/bigbeansdigitalwebsite.webp",
  text:
    "Get a modern, user-friendly website built to represent your brand, attract visitors, and turn them into customers.",
  href: "/services/website-development",
},
  {
  title: "Performance Marketing",
  navTitle: "Performance Marketing",
  image: "/home/ourservice/bigbeansdigitalperformancemarketing.webp",
  text:
    "Get more from your ad budget with Google Ads, Meta Ads, and PPC campaigns focused on leads, sales, and growth.",
  href: "/services/google-ads-meta-ads",
},
  {
  title: "Digital Marketing",
  navTitle: "Full Service Digital Marketing",
  image: "/home/ourservice/bigbeansdigitalsocialmedia.webp",
  text:
    "Bring SEO, social media, content, branding, and paid advertising together with one focused digital marketing strategy.",
  href: "/services/social-media-marketing",
},
];

const blogCards = [
  {
    id: 5,
    image: "/assets/blog/singleblogs/clinic-instagram-marketing-strategy.webp",
    date: "August 14, 2026",
    primaryCategory: "Social Media",
    title: "How to Do SMM for a New Clinic in India | BigBeans",
    description:
      "Learn what to post when launching a clinic on Instagram, from educational content to trust-building posts that attract patients. Get started with BigBeans Digital.",
    link: "/blog/clinic-instagram-marketing-strategy",
  },
  {
    id: 6,
    image: "/assets/blog/singleblogs/new-instagram-logo-redesign.webp",
    date: "August 17, 2026",
    primaryCategory: "Social Media",
    title: "New Instagram Logo 2026: Wordmark Redesign & Brand Refresh",
    description:
      "Discover the new Instagram logo 2026, its wordmark redesign, “Instagzam” backlash, typography changes and what Instagram's brand refresh means for marketers.",
    link: "/blog/new-instagram-logo-redesign",
  },
  {
    id: 7,
    image: "/assets/blog/singleblogs/why-is-my-competitor-getting-more-leads.webp",
    date: "August 17, 2026",
    primaryCategory: "Social Media",
    title: "Why Is My Competitor Getting More Leads? | Digital Marketing India",
    description:
      "Your competitor opened later but gets more leads. Discover how SEO, Google Business Profile, social media, reviews and local digital marketing can help Indian businesses grow.",
    link: "/blog/why-is-my-competitor-getting-more-leads",
  },
];
function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(target * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCounter);

    return () => {
      // Animation naturally stops when component unmounts
    };
  }, [target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}


function ParticleUniverse() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;

    type Particle = {
      x: number;
      y: number;
      z: number;
      size: number;
      yellow: boolean;
      alpha: number;
      phase: number;
    };

    const particles: Particle[] = [];

    const addParticle = (
      x: number,
      y: number,
      z: number,
      yellowChance = 0.5,
      sizeMultiplier = 1
    ) => {
      particles.push({
        x,
        y,
        z,

        size:
          (Math.random() < 0.075
            ? Math.random() * 1.4 + 1
            : Math.random() * 0.65 + 0.38) *
          sizeMultiplier,

        yellow:
          Math.random() < yellowChance,

        alpha:
          Math.random() * 0.25 + 0.72,

        phase:
          Math.random() * Math.PI * 2,
      });
    };

    const bodyParticles = 4800;

    for (let i = 0; i < bodyParticles; i++) {
      const x =
        -1.25 +
        Math.random() * 1.85;

      let radius = 0.47;

      if (x < -0.95) {
        radius =
          0.32 +
          ((x + 1.25) / 0.30) *
            0.15;
      }

      if (x > 0.25) {
        radius =
          0.47 -
          ((x - 0.25) / 0.35) *
            0.10;
      }

      const angle =
        Math.random() *
        Math.PI *
        2;

      const surface =
        0.91 +
        Math.random() * 0.09;

      const y =
        Math.sin(angle) *
        radius *
        surface;

      const z =
        Math.cos(angle) *
        radius *
        0.34 *
        surface;

      addParticle(
        x,
        y,
        z,
        0.52
      );
    }

    const noseParticles = 2400;

    for (let i = 0; i < noseParticles; i++) {
      const t =
        Math.random();

      const x =
        0.48 +
        t * 1.18;

      const radius =
        0.47 *
        Math.pow(
          1 - t,
          0.72
        );

      const angle =
        Math.random() *
        Math.PI *
        2;

      const y =
        Math.sin(angle) *
        radius;

      const z =
        Math.cos(angle) *
        radius *
        0.34;

      addParticle(
        x,
        y,
        z,
        0.48
      );
    }

    const topFinParticles = 2100;

    for (
      let i = 0;
      i < topFinParticles;
      i++
    ) {
      const u =
        Math.random();

      const v =
        Math.random();

      const x =
        -1.08 +
        u * 1.28;

      const maxY =
        0.50 +
        (1 - u) *
          0.72;

      const y =
        0.45 +
        v *
          (maxY - 0.45);

      const z =
        (Math.random() - 0.5) *
        0.20;

      addParticle(
        x,
        y,
        z,
        0.52,
        1.02
      );
    }

    for (
      let i = 0;
      i < 700;
      i++
    ) {
      const t =
        Math.random();

      const x =
        -1.08 +
        t * 1.28;

      const y =
        1.17 -
        t * 0.68;

      const z =
        (Math.random() - 0.5) *
        0.16;

      addParticle(
        x,
        y,
        z,
        0.56,
        1.12
      );
    }

    const bottomFinParticles = 2100;

    for (
      let i = 0;
      i < bottomFinParticles;
      i++
    ) {
      const u =
        Math.random();

      const v =
        Math.random();

      const x =
        -1.08 +
        u * 1.28;

      const maxY =
        0.50 +
        (1 - u) *
          0.72;

      const y =
        -0.45 -
        v *
          (maxY - 0.45);

      const z =
        (Math.random() - 0.5) *
        0.20;

      addParticle(
        x,
        y,
        z,
        0.52,
        1.02
      );
    }

    for (
      let i = 0;
      i < 700;
      i++
    ) {
      const t =
        Math.random();

      const x =
        -1.08 +
        t * 1.28;

      const y =
        -1.17 +
        t * 0.68;

      const z =
        (Math.random() - 0.5) *
        0.16;

      addParticle(
        x,
        y,
        z,
        0.56,
        1.12
      );
    }

    const windowX =
      -0.05;

    const windowRadius =
      0.255;

    for (
      let i = 0;
      i < 1250;
      i++
    ) {
      const angle =
        Math.random() *
        Math.PI *
        2;

      const radius =
        windowRadius +
        (Math.random() - 0.5) *
          0.045;

      const y =
        Math.cos(angle) *
        radius;

      const z =
        0.17 +
        Math.sin(angle) *
          0.025;

      addParticle(
        windowX,
        y,
        z,
        0.44,
        1.08
      );
    }

    for (
      let i = 0;
      i < 950;
      i++
    ) {
      const angle =
        Math.random() *
        Math.PI *
        2;

      const radius =
        Math.sqrt(
          Math.random()
        ) *
        0.20;

      const y =
        Math.cos(angle) *
        radius;

      const z =
        0.185 +
        Math.sin(angle) *
          0.018;

      addParticle(
        windowX,
        y,
        z,
        0.34,
        0.82
      );
    }

    for (
      let i = 0;
      i < 850;
      i++
    ) {
      const angle =
        Math.random() *
        Math.PI *
        2;

      const radius =
        Math.sqrt(
          Math.random()
        ) *
        0.28;

      addParticle(
        -1.28,

        Math.cos(angle) *
          radius,

        Math.sin(angle) *
          radius *
          0.38,

        0.72,
        1.0
      );
    }

    const exhaustParticles =
      1900;

    for (
      let i = 0;
      i < exhaustParticles;
      i++
    ) {
      const distance =
        Math.pow(
          Math.random(),
          0.72
        ) *
        1.15;

      const spread =
        0.025 +
        distance * 0.20;

      const x =
        -1.28 -
        distance;

      const y =
        (Math.random() - 0.5) *
        spread;

      const z =
        (Math.random() - 0.5) *
        spread *
        0.45;

      addParticle(
        x,
        y,
        z,
        0.74,
        0.82
      );
    }

    const resize = () => {
      const dpr =
        Math.min(
          window.devicePixelRatio || 1,
          2
        );

      width =
        window.innerWidth;

      height =
        window.innerHeight;

      canvas.width =
        Math.floor(
          width * dpr
        );

      canvas.height =
        Math.floor(
          height * dpr
        );

      canvas.style.width =
        `${width}px`;

      canvas.style.height =
        `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );
    };

    const onMouse = (
      event: MouseEvent
    ) => {
      mouseRef.current.x =
        (
          event.clientX /
            window.innerWidth -
          0.5
        ) * 2;

      mouseRef.current.y =
        (
          event.clientY /
            window.innerHeight -
          0.5
        ) * 2;
    };

    const onScroll = () => {
      scrollRef.current =
        window.scrollY /
        Math.max(
          document.body.scrollHeight -
            window.innerHeight,
          1
        );
    };

    resize();
    onScroll();

    window.addEventListener(
      "resize",
      resize
    );

    window.addEventListener(
      "mousemove",
      onMouse,
      { passive: true }
    );

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    const draw = (
      time: number
    ) => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      const mouseX =
        mouseRef.current.x;

      const mouseY =
        mouseRef.current.y;

      const scroll =
        scrollRef.current;

      const rotation =
        time * 0.000030 +
        mouseX * 0.010 +
        scroll * 0.02;

      const tilt =
        mouseY * 0.045;

      const startPosition = 0.74;

      const endPosition = 0.20;

      const scrollEase =
        scroll * scroll *
        (3 - 2 * scroll);

      const baseX =
        startPosition +
        (
          endPosition -
          startPosition
        ) *
          scrollEase;

      const mouseOffsetX =
        mouseX * 0.035;

      const mouseOffsetY =
        mouseY * 0.025;

      const centerX =
        width *
        baseX +
        width *
          mouseOffsetX;

      const centerY =
        height *
          0.46 +
        height *
          mouseOffsetY;

      const scale =
        Math.min(
          width,
          height
        ) *
        (width < 768
          ? 0.19
          : 0.255);

      const rocketAngle =
        -18 *
        (Math.PI / 180);

      const rocketCos =
        Math.cos(
          rocketAngle
        );

      const rocketSin =
        Math.sin(
          rocketAngle
        );

      const rendered =
        particles
          .map((particle) => {

            const driftX =
              Math.sin(
                time * 0.00005 +
                  particle.phase
              ) *
              0.0012;

            const driftY =
              Math.cos(
                time * 0.000045 +
                  particle.phase
              ) *
              0.0012;

            const x =
              particle.x +
              driftX;

            const y =
              particle.y +
              driftY;

            const z =
              particle.z;

            const cosR =
              Math.cos(
                rotation
              );

            const sinR =
              Math.sin(
                rotation
              );

            const rotatedX =
              x * cosR -
              z * sinR;

            const rotatedZ =
              x * sinR +
              z * cosR;

            const cosT =
              Math.cos(
                tilt
              );

            const sinT =
              Math.sin(
                tilt
              );

            const rotatedY =
              y * cosT -
              rotatedZ * sinT;

            const finalZ =
              y * sinT +
              rotatedZ * cosT;

            const perspective =
              1 /
              (
                1 +
                finalZ * 0.42
              );

            return {
              particle,
              rotatedX,
              rotatedY,
              finalZ,
              perspective,
            };
          })
          .sort(
            (a, b) =>
              a.finalZ -
              b.finalZ
          );

      rendered.forEach(
        ({
          particle,
          rotatedX,
          rotatedY,
          perspective,
        }) => {

          const localX =
            rotatedX *
            scale *
            perspective;

          const localY =
            rotatedY *
            scale *
            perspective;

          const diagonalX =
            localX *
              rocketCos -
            localY *
              rocketSin;

          const diagonalY =
            localX *
              rocketSin +
            localY *
              rocketCos;

          const screenX =
            centerX +
            diagonalX;

          const screenY =
            centerY +
            diagonalY;

          if (
            screenX < -100 ||
            screenX >
              width + 100 ||
            screenY < -100 ||
            screenY >
              height + 100
          ) {
            return;
          }

          const depth =
            Math.max(
              0.62,
              perspective
            );

          const radius =
            Math.max(
              0.32,
              particle.size *
                depth
            );

          const alpha =
            Math.min(
              1,
              particle.alpha *
                (
                  0.68 +
                  depth * 0.32
                )
            );

          ctx.beginPath();

          ctx.arc(
            screenX,
            screenY,
            radius,
            0,
            Math.PI * 2
          );

          ctx.fillStyle =
            particle.yellow
              ? `rgba(248,188,4,${alpha})`
              : `rgba(255,255,255,${alpha})`;

          ctx.fill();
        }
      );

      raf =
        window.requestAnimationFrame(
          draw
        );
    };

    raf =
      window.requestAnimationFrame(
        draw
      );

    return () => {
      window.cancelAnimationFrame(
        raf
      );

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        onMouse
      );

      window.removeEventListener(
        "scroll",
        onScroll
      );
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
        opacity-95
      "
    />
  );
}


function ImmersiveSection({
  children,
  className = "",
  animation = "up",
}: {
  children: React.ReactNode;
  className?: string;
  animation?: "none" | "up" | "down" | "left" | "right" | "pop";
}) {
  const ref = useRef<HTMLElement>(null);

  const variants = {
    none: {
      hidden: { opacity: 1, x: 0, y: 0, scale: 1 },
      visible: { opacity: 1, x: 0, y: 0, scale: 1 },
    },
    up: {
      hidden: { opacity: 0, x: 0, y: 70, scale: 0.985 },
      visible: { opacity: 1, x: 0, y: 0, scale: 1 },
    },
    down: {
      hidden: { opacity: 0, x: 0, y: -70, scale: 0.985 },
      visible: { opacity: 1, x: 0, y: 0, scale: 1 },
    },
    left: {
      hidden: { opacity: 0, x: -100, y: 0, scale: 0.985 },
      visible: { opacity: 1, x: 0, y: 0, scale: 1 },
    },
    right: {
      hidden: { opacity: 0, x: 100, y: 0, scale: 0.985 },
      visible: { opacity: 1, x: 0, y: 0, scale: 1 },
    },
    pop: {
      hidden: { opacity: 0, x: 0, y: 55, scale: 0.86 },
      visible: { opacity: 1, x: 0, y: 0, scale: 1 },
    },
  } as const;

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={variants[animation]}
      transition={{
        duration: animation === "pop" ? 0.85 : 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className={`relative z-10 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState(0);
  

  useEffect(() => {
  const timer = setTimeout(() => {
    setActiveService((current) => (current + 1) % services.length);
  }, 5000);
  return () => clearTimeout(timer);
}, [activeService]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveService((current) => (current + 1) % services.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);
  const heroRef = useRef<HTMLElement>(null);

  const pageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 18,
    mass: 0.4,
  });

  const progressWidth = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothHeroProgress = useSpring(heroScrollProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.45,
  });

  const heroScale = useTransform(
    smoothHeroProgress,
    [0, 0.55, 1],
    [1, 1.35, 2.35]
  );

  const heroOpacity = useTransform(
    smoothHeroProgress,
    [0, 0.68, 1],
    [1, 0.85, 0]
  );

  const heroY = useTransform(
    smoothHeroProgress,
    [0, 1],
    [0, -35]
  );

  const heroBlur = useTransform(
    smoothHeroProgress,
    [0, 0.72, 1],
    [0, 0, 8]
  );

  const heroFilter = useTransform(heroBlur, (value) => `blur(${value}px)`);

  return (
    <main
      ref={pageRef}
      className="
        relative
        min-h-screen
        overflow-x-hidden
        overflow-y-visible
        bg-[#050505]
        text-white
      "
    >
      

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(248,188,4,0.10),transparent_24%),radial-gradient(circle_at_18%_72%,rgba(80,100,130,0.08),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.82)_100%)]" />
      </div>

      <div className="fixed left-0 top-0 z-[80] h-[2px] w-full bg-white/5">
        <motion.div
          style={{ width: progressWidth }}
          className="h-full bg-[#F8BC04]"
        />
      </div>

      <ParticleUniverse />

      {/* ===== Hero Section ===== */}
      <ImmersiveSection className="min-h-[120vh] py-5 sm:py-10" animation="none">
  <section
    ref={heroRef}
    className="relative min-h-[105vh] sm:min-h-[100vh]"
  >
    <div className="sticky top-0 flex min-h-screen items-start overflow-hidden sm:items-center">
      
      <motion.div
        style={{
          scale: heroScale,
          opacity: heroOpacity,
          y: heroY,
          filter: heroFilter,
        }}
        className="w-full origin-center will-change-transform"
      >
        <div className="mx-auto flex min-h-screen w-full max-w-[1600px] items-start px-4 pt-[110px] pb-12 sm:items-center sm:px-10 sm:py-24 lg:px-16 xl:px-20">

          <div className="grid w-full grid-cols-1 items-center lg:grid-cols-[minmax(0,0.78fr)_minmax(420px,1.22fr)] lg:gap-8 xl:gap-14">

            <div className="relative z-20 w-full max-w-[650px] pr-0 sm:pr-8 lg:pr-10 xl:pr-14">

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.12 }}
                className="mt-5 max-w-[680px] leading-[0.92] tracking-[-0.055em]"
              >
                <span className="block whitespace-normal text-[38px] font-extrabold leading-[0.95] text-white sm:whitespace-nowrap sm:text-[56px] md:text-[68px] lg:text-[64px] xl:text-[76px]">
                  Where Creativity
                </span>

                <span
                  className="mt-2 block whitespace-normal text-[40px] font-medium italic leading-[0.95] text-[#F8BC04] sm:whitespace-nowrap sm:text-[62px] md:text-[74px] lg:text-[70px] xl:text-[84px]"
                  style={{
                    fontFamily:
                      "Georgia, 'Times New Roman', Times, serif",
                  }}
                >
                  meets strategy.
                </span>
              </motion.h1>

                    
                          <motion.p
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.38 }}
                          className="mt-6 w-full max-w-[570px] text-left text-[12px] leading-[1.7] text-white/100 sm:text-justify sm:text-[15px] sm:leading-6"
                        >
                          At Big Beans Digital, we help startups and growing businesses turn ideas into brands people remember. Our best digital marketing approach brings branding, web development, SEO, social media marketing, and performance marketing together to build visibility, engagement, and measurable growth.
                          <br></br>
                          From social media marketing services in India to digital marketing for international markets, we create practical strategies around your business goals not one size fits all packages. Whether you’re looking for a digital marketing agency near me, stronger branding, a high-performing 3D websites, or campaigns built to convert into sales, our team connects every piece of your digital presence into one growth focused system.
                        </motion.p>
                   




                    <motion.div
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="mt-7 grid max-w-[570px] grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4 sm:gap-6"
>
  {[
    [120, "+", "Projects Launched"],
    [28, "+", "Growth Partners"],
    [64, "+", "Brands Elevated"],
    [97, "%", "Retention Rate"],
  ].map(([number, suffix, label], index) => (
    <div key={index} className="min-w-0 text-left">
      <div className="text-[22px] font-black leading-none tracking-[-0.045em] text-[#F8BC04] sm:text-[27px] lg:text-[30px]">
        <AnimatedCounter
          target={Number(number)}
          suffix={String(suffix)}
        />
      </div>

      <div className="mt-2 max-w-[110px] text-[8px] font-medium uppercase leading-[1.35] tracking-[0.04em] text-white/45 sm:max-w-[78px] sm:text-[8px]">
        {label}
      </div>
    </div>
  ))}
</motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.62 }}
                      className="mt-6"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="flex -space-x-3">
                          {[
                            "/home/ratings/rating1.webp",
                            "/home/ratings/rating2.webp",
                            "/home/ratings/rating3.webp",
                          ].map((src, index) => (
                            <img
                              key={src}
                              src={src}
                              alt={`Happy-0 Client ${index + 1}`}
                              className="h-8 w-8 rounded-full border-2 border-[#050505] object-cover sm:h-9 sm:w-9"
                            />
                          ))}
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xl font-black leading-none tracking-[-0.04em] text-white sm:text-2xl">
                              4.9
                            </span>
                            <span className="text-sm text-[#F8BC04] sm:text-base">
                              ★
                            </span>
                          </div>
                          <p className="mt-1 text-[10px] leading-4 text-white/100 sm:text-[15px] sm:leading-normal">
                            Trusted by founders and Business around the world
                          </p>
                        </div>
                      </div>
                    </motion.div>

                      {/* ============================================================
                          BOOK AN ENQUIRY CALL SECTION
                      ============================================================ */}

                      <section className="relative w-full py-5">
                        <div className="flex w-full items-center justify-start">

                          <motion.div
                            whileHover={{
                              y: -5,
                              scale: 1.045,
                              rotateX: -4,
                              rotateY: 2,
                            }}
                            whileTap={{
                              scale: 0.97,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 320,
                              damping: 17,
                            }}
                            className="relative inline-block"
                          >

                            {/* ========================================================
                                MOVING YELLOW GLOW BORDER
                            ======================================================== */}

                            <svg
                              aria-hidden="true"
                              className="
                                pointer-events-none
                                absolute
                                inset-0
                                z-20
                                h-full
                                w-full
                                overflow-visible
                              "
                              viewBox="0 0 1000 160"
                              preserveAspectRatio="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <defs>
                                <filter
                                  id="yellowGlow"
                                  x="-50%"
                                  y="-50%"
                                  width="200%"
                                  height="200%"
                                >
                                  <feGaussianBlur
                                    stdDeviation="3"
                                    result="blur1"
                                  />

                                  <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="7"
                                    result="blur2"
                                  />

                                  <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="14"
                                    result="blur3"
                                  />

                                  <feMerge>
                                    <feMergeNode in="blur3" />
                                    <feMergeNode in="blur2" />
                                    <feMergeNode in="blur1" />
                                    <feMergeNode in="SourceGraphic" />
                                  </feMerge>
                                </filter>
                              </defs>

                              <rect
                                x="1.5"
                                y="1.5"
                                width="997"
                                height="157"
                                rx="78.5"
                                ry="78.5"
                                pathLength="1000"
                                fill="none"
                                stroke="#f8bc04"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeDasharray="55 945"
                                strokeDashoffset="0"
                                filter="url(#yellowGlow)"
                                style={{
                                  animation: "yellowBorderMove 6s linear infinite",
                                }}
                              />

                              <style>
                                {`
                                  @keyframes yellowBorderMove {
                                    0% {
                                      stroke-dashoffset: 0;
                                    }

                                    100% {
                                      stroke-dashoffset: -1000;
                                    }
                                  }
                                `}
                              </style>
                            </svg>


                            {/* ========================================================
                                OUTER GLASS BORDER
                            ======================================================== */}

                            <div
                              aria-hidden="true"
                              className="
                                pointer-events-none
                                absolute
                                -inset-[1px]
                                z-10
                                rounded-full
                                border
                                border-white/30
                              "
                            />


                            {/* ========================================================
                                MAIN GLASS BUTTON
                            ======================================================== */}

                            <Link
                              href="https://wa.link/pxmrrm"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                relative
                                z-10

                                flex
                                items-center
                                justify-center

                                gap-2.5

                                h-[54px]
                                px-7

                                overflow-hidden

                                rounded-full

                                border
                                border-white/30

                                bg-black/40

                                text-white
                                font-bold
                                text-[16px]

                                whitespace-nowrap

                                shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]

                                backdrop-blur-2xl
                                backdrop-saturate-150

                                transition-all
                                duration-300

                                hover:border-white/60
                                hover:bg-black/30
                              "
                            >

                              {/* ======================================================
                                  MOVING WHITE REFLECTION
                              ====================================================== */}

                              <motion.span
                                aria-hidden="true"
                                initial={{
                                  x: "-150%",
                                }}
                                animate={{
                                  x: "150%",
                                }}
                                transition={{
                                  duration: 2.8,
                                  delay: 2,
                                  repeat: Infinity,
                                  repeatDelay: 3,
                                  ease: "easeInOut",
                                }}
                                className="
                                  pointer-events-none
                                  absolute
                                  top-0
                                  bottom-0
                                  w-16
                                  rotate-[18deg]
                                  bg-white/20
                                  blur-md
                                "
                              />


                              {/* ======================================================
                                  PHONE ICON
                              ====================================================== */}

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="
                                  relative
                                  z-10
                                  h-[19px]
                                  w-[19px]
                                  flex-shrink-0
                                "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.35-7.35 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.363-.272.528-.74.417-1.173L6.506 3.9A1.125 1.125 0 0 0 5.416 3H4.5A2.25 2.25 0 0 0 2.25 5.25v1.5Z"
                                />
                              </svg>


                              {/* ======================================================
                                  BUTTON TEXT
                              ====================================================== */}

                              <span className="relative z-10">
                                Book Free Consultation Call
                              </span>

                            </Link>

                          </motion.div>

                        </div>
                      </section>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: heroOpacity }}
              className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 text-center sm:block"
            >
              <div className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                Scroll to explore
              </div>
              <div className="mx-auto mt-3 h-10 w-px bg-gradient-to-b from-[#F8BC04] to-transparent" />
            </motion.div>
          </div>
        </section>
      </ImmersiveSection>
      

      {/* ===== Trusted Partnerships Section ===== */}
      <ImmersiveSection className="w-full bg-black/70 py-1 sm:py-1">
        <div className="mx-auto max-w-[1400px] px-5 pt-8 sm:px-8 sm:pt-10 lg:px-12  lg:pt-12">
          <div className="mb-12 max-w-[1180px]">
            
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, delay: 0.08 }}
              className="mt-5 leading-[0.86] tracking-[-0.065em]"
            >
              <span className="block whitespace-normal text-[36px] font-extrabold leading-[0.95] text-white sm:whitespace-nowrap sm:text-[54px] md:text-[66px] lg:text-[76px] xl:text-[80px]">
                We are trusted by
              </span>

              <span
                className="mt-2 block whitespace-normal text-[34px] font-medium italic leading-[0.95] text-[#F8BC04] sm:whitespace-nowrap sm:text-[52px] md:text-[64px] lg:text-[74px] xl:text-[60px]"
                style={{
                  fontFamily:
                    "Georgia, 'Times New Roman', Times, serif",
                }}
              >
                100+ startups in India &amp; businesses.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, delay: 0.18 }}
              className="mt-6 max-w-[700px] text-[13px] leading-6 text-white/100 sm:text-[15px] sm:leading-7"
            >
              From ambitious startups to established businesses, we build marketing around what actually matters to the people behind the business. Our clients trust us for thoughtful strategy, strong creative work, clear communication, and execution that stays focused on real growth.
            </motion.p>
          </div>

          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.025] py-5 sm:py-7 backdrop-blur-md">
            <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
            <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050505] to-transparent" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 38,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex w-max gap-3 sm:gap-5"
            >
              {[...carouselImages, ...carouselImages].map(
                (image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="
                      relative
                      h-[105px]
                      w-[105px]
                      flex-shrink-0
                      overflow-hidden
                      rounded-[24px]
                      border
                      border-white/10
                      bg-white/[0.035]
                      p-3
                      sm:h-[170px]
                      sm:w-[170px]
                    "
                  >
                    <Image
                      src={image}
                      alt={`Client ${index + 1}`}
                      fill
                      sizes="170px"
                      className="object-contain p-4 opacity-80"
                    />
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </ImmersiveSection>


      {/* ===== Our Process Section ===== */}
<OurProcess />


{/* ===== What We Do Section ===== */}
<ImmersiveSection className="w-full bg-black/70 py-1 sm:py-1">

  <div className="relative flex w-full max-w-7xl mx-auto flex-col px-4 sm:px-6 lg:flex-row lg:px-8">

    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] as const }}
      className="
        relative
        z-[200]
        w-full
        shrink-0
        lg:w-[360px]
        pt-8 sm:pt-10 lg:pt-[60px]
        flex
        flex-col
        items-start
      "
    >
      

      <h2 className="mt-3 text-[38px] font-medium leading-[0.92] tracking-[-0.055em] text-white sm:text-[54px] lg:text-[56px]">
        Our
        <br />
        <span
          className="font-serif font-normal italic text-[#F8BC04]"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Services
        </span>
      </h2>

      <p className="mt-5 max-w-[320px] text-[14px] leading-[1.75] text-white/70 sm:mt-7 sm:text-[15px]">
        We help brands grow with bold ideas, strategic thinking, and
        impactful digital experiences that drive real results.
      </p>

      <div className="mt-6 w-full max-w-full sm:mt-8 sm:max-w-[300px]">

        {/* Service Navigation */}
        <div className="flex flex-col gap-1.5 rounded-[16px] border border-white/10 bg-white/5 p-1.5 backdrop-blur-md">

          {services.map((service, index) => {
            const active = activeService === index;

            return (
              <button
                key={service.title}
                type="button"
                aria-label={`Show ${service.title}`}
                aria-pressed={active}
                onClick={() => setActiveService(index)}
                className={`
                  w-full
                  rounded-[10px]
                  px-2.5
                  py-1.5
                  text-left
                  text-[11px]
                  font-bold
                  transition-all
                  duration-500
                  ${
                    active
                      ? "bg-[#F8BC04] text-black shadow-[0_4px_15px_rgba(248,188,4,0.3)]"
                      : "text-white/80 hover:bg-white/10"
                  }
                `}
              >
                {service.navTitle}
              </button>
            );
          })}

        </div>
      </div>
    </motion.div>

    {/* Service Cards */}
    <div className="relative min-w-0 flex-1 mt-8 lg:ml-6 lg:mt-0">

      <div className="relative w-full sm:h-[680px] lg:h-[700px]">

        {/* Desktop Cards */}
        <div
          className="absolute left-1/2 top-[5px] h-[550px] w-[900px] -translate-x-1/2 hidden sm:block"
          style={{
            perspective: "1800px",
            perspectiveOrigin: "50% 40%",
          }}
        >
          {services.map((service, index) => {

            let relativeIndex = index - activeService;
            const total = services.length;

            if (relativeIndex > total / 2) relativeIndex -= total;
            if (relativeIndex < -total / 2) relativeIndex += total;

            const visible = Math.abs(relativeIndex) <= 1;

            if (!visible) return null;

            const isCenter = relativeIndex === 0;
            const isLeft = relativeIndex === -1;
            const isActuallyRight = relativeIndex === 1;

            const arcAngle = 38;
            const angle = relativeIndex * arcAngle;
            const radius = 640;

            let y = 0;

            if (isLeft || isActuallyRight) {
              y = 45;
            }

            let scale = 1;

            if (isLeft || isActuallyRight) {
              scale = 0.78;
            }

            let opacity = 1;
            let zIndex = isCenter ? 100 : 60;

            let rotateY = 0;

            if (relativeIndex < 0) {
              rotateY = -38;
            }

            if (relativeIndex > 0) {
              rotateY = 38;
            }

            const cardWidth = isCenter ? 380 : 330;

            const pointers = service.pointers || [
              "Digital Marketing Experts",
              "Creative Agency Thinking",
              "Custom Marketing Strategies",
              "Social Media Growth",
              "Performance Marketing Focus",
              "Results Driven Growth",
            ];

            return (
              <motion.div
                key={service.title}
                animate={{
                  x: Math.sin((angle * Math.PI) / 180) * radius,
                  y,
                  scale,
                  rotateY,
                  rotateZ: 0,
                  opacity,
                }}
                transition={{
                  duration: 5.0,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "0px",
                  width: `${cardWidth}px`,
                  marginLeft: `${-cardWidth / 2}px`,
                  zIndex,
                  transformStyle: "preserve-3d",
                  transformPerspective: 1800,
                }}
              >
                <div className="relative overflow-hidden rounded-[25px] border border-white/[0.15] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.55)]">

                  {/* Card Image */}
                  <div
                    className={`relative overflow-hidden rounded-t-[25px] ${
                      isCenter ? "h-[240px]" : "h-[210px]"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="380px"
                      className="object-cover"
                      priority={index < 3}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.05em] text-[#F8BC04] bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {isCenter ? "POPULAR" : "SERVICE"}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="bg-white p-6">

                    <h3
                      className={`font-black leading-[1.05] tracking-[-0.035em] text-black ${
                        isCenter ? "text-[23px]" : "text-[20px]"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-[1.5] text-black/60 line-clamp-2">
                      {service.text}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-black/5 pt-4">
                      {pointers.map((point, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-start gap-1.5"
                        >
                          <div className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#F8BC04]/20 text-black"></div>

                          <span className="text-[11px] font-medium leading-tight text-black/80">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 border-t border-black/5 pt-4 flex items-center justify-between">

                      <Link
                        href={service.href || "#"}
                        className="inline-flex items-center gap-2 text-[13px] font-black text-black hover:text-[#F8BC04] transition-colors"
                      >
                        Know More
                        <ArrowRight size={15} strokeWidth={2.5} />
                      </Link>

                      {isCenter && (
                        <div className="flex items-center gap-1">
                          <div className="h-1.5 w-4 rounded-full bg-[#F8BC04]" />
                          <div className="h-1.5 w-1.5 rounded-full bg-black/10" />
                          <div className="h-1.5 w-1.5 rounded-full bg-black/10" />
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Card */}
        <div className="w-full sm:hidden">

          {services.map((service, index) => {

            if (index !== activeService) return null;

            const pointers = service.pointers || [
              "Strategic Planning",
              "Custom Development",
              "Brand Positioning",
              "Quality Assurance",
              "Performance Tuning",
              "Ongoing Support",
            ];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1.0,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="overflow-hidden rounded-[25px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              >

                <div className="relative h-[220px] w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="bg-white p-5">

                  <h3 className="text-[20px] font-black leading-tight text-black">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-relaxed text-black/60">
                    {service.text}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-black/5 pt-4">

                    {pointers.map((point, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-1.5"
                      >
                        <div className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#F8BC04]/20 text-black"></div>

                        <span className="text-[11px] font-medium leading-tight text-black/80">
                          {point}
                        </span>
                      </div>
                    ))}

                  </div>

                  <div className="mt-5 border-t border-black/5 pt-4">

                    <Link
                      href={service.href || "#"}
                      className="inline-flex items-center gap-2 text-sm font-black text-black"
                    >
                      Know More
                      <ArrowRight size={16} />
                    </Link>

                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    .button-custom {
      position: relative;
      width: 250px;
      height: 80px;
      border-radius: 50px;
      display: flex;
      transition: all 5.0s ease-in-out;
      box-shadow: 0px 0px 15px 0 #48301e;
      cursor: pointer;
    }

    .left-side {
      position: relative;
      width: 80px;
      height: 80px;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      overflow: hidden;
      border: 1px solid hsla(250, 4%, 30%, 1);
      background: radial-gradient(
        circle,
        hsla(252, 3%, 28%, 1) 0%,
        hsla(250, 4%, 30%, 1) 56%
      );
      box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.3);
    }

    .metal-pill {
      position: absolute;
      width: 90px;
      height: 40px;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
      background: radial-gradient(
        circle,
        hsla(0, 0%, 90%, 1) 0%,
        hsla(0, 0%, 50%, 1) 100%
      );
      top: 12%;
      left: 20%;
      filter: blur(7px);
      z-index: 2;
    }

    .metal-reflex {
      position: absolute;
      width: 70px;
      height: 50px;
      bottom: 5%;
      right: 0;
      border-bottom-left-radius: 30px;
      filter: blur(4px);
      border-bottom: 2px solid #e6e6e6;
      background: transparent;
      z-index: 2;
    }

    .metal-line {
      position: absolute;
      top: 0;
      right: 1px;
      width: 3px;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(74, 74, 74, 1) 0%,
        rgba(255, 255, 255, 0.4) 50%,
        rgba(74, 74, 74, 1) 100%
      );
      z-index: 0;
    }

    .right-side {
      overflow: hidden;
      position: relative;
      top: 0px;
      left: -2px;
      width: 170px;
      height: 80px;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      background: rgba(71, 60, 50, 1);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      transition: all 0.2s ease-in-out;
    }

    .glass-pill {
      position: absolute;
      width: 140px;
      height: 50px;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.38) 25%,
        transparent 75%
      );
      top: 10%;
      left: 0%;
      filter: blur(1px);
    }

    .glass-reflex1,
    .glass-reflex2 {
      position: absolute;
      width: 160px;
      height: 50px;
      left: 0;
      border-bottom-right-radius: 30px;
      filter: blur(4px);
      border-bottom: 2px solid #e6e6e6;
      background: transparent;
      z-index: 2;
    }

    .glass-reflex1 {
      bottom: 20%;
    }

    .glass-reflex2 {
      bottom: 0%;
    }

    .caption-text {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 35px;
      font-size: 15px;
      letter-spacing: 1.5px;
      color: white;
      text-shadow: 0 0px 10px #f9d185;
      filter: drop-shadow(0 0 5px #f9d185);
    }

    .bulb-wire {
      position: relative;
      width: 80px;
      height: 100%;
      filter: drop-shadow(0px 0px 6px rgba(245, 165, 36, 1));
    }

    .top-wire,
    .bottom-wire {
      position: absolute;
      width: 15px;
      height: 2px;
      background: rgba(220, 220, 220, 0.6);
      z-index: 2;
      transition: all 0.2s ease-in-out;
    }

    .top-wire {
      top: 42%;
    }

    .bottom-wire {
      bottom: 42%;
    }

    .top-curl,
    .bottom-curl {
      position: absolute;
      width: 8px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid rgba(220, 220, 220, 0.6);
      left: 15px;
      z-index: 2;
      transition: all 0.2s ease-in-out;
    }

    .top-curl {
      top: 24px;
      border-bottom-left-radius: 0px;
    }

    .bottom-curl {
      bottom: 25px;
      border-top-left-radius: 0px;
    }

    .mid-wire {
      position: absolute;
      width: 2px;
      height: 15px;
      background: rgba(220, 220, 220, 0.6);
      top: 40%;
      left: 15px;
      z-index: 2;
      transition: all 0.2s ease-in-out;
    }

    .glow {
      position: absolute;
      width: 35px;
      height: 35px;
      background: radial-gradient(
        circle,
        rgba(244, 169, 31, 1) 0%,
        rgba(255, 255, 255, 1) 0%,
        rgba(244, 169, 31, 1) 100%
      );
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      filter: blur(15px);
      transition: all 0.2s ease-in-out;
    }

    .button-custom:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 85px 0 #48301e;
    }

    .button-custom:hover .top-wire,
    .button-custom:hover .bottom-wire {
      width: 55px;
    }

    .button-custom:hover .mid-wire,
    .button-custom:hover .top-curl,
    .button-custom:hover .bottom-curl {
      left: 55px;
    }

    .button-custom:hover .glow {
      left: 0px;
      width: 130px;
    }

    .button-custom:hover .sentence-custom .letter {
      transform: rotate(20deg) translateY(-20px);
      opacity: 0;
      filter: blur(20px);
    }

    .button-custom:hover .sentence-custom .hidden-letter {
      top: 50%;
      transform: translateY(-50%);
      opacity: 1;
      filter: blur(0px);
    }

    .sentence-custom {
      display: flex;
      padding: 0;
      margin: 0;
    }

    .sentence-custom .letter {
      list-style: none;
      font-weight: normal;
      filter: blur(0px);
      transition: all 0.5s ease-in-out;
    }

    .sentence-custom .hidden-letter {
      position: absolute;
      list-style: none;
      font-weight: normal;
      opacity: 0;
      top: -20px;
      left: 15px;
      filter: blur(20px);
      transition: all 0.5s ease-in-out;
    }

    .sentence-custom #hl1 {
      left: 40px;
    }

    .sentence-custom #hl2 {
      left: 53px;
    }

    .sentence-custom #hl3 {
      left: 63px;
    }

    .sentence-custom #hl4 {
      left: 76px;
    }
  `}</style>

</ImmersiveSection>


      {/* ===== Our Work Section ===== */}
      <ImmersiveSection className="py-0" animation="left">
        <OurWork />
      </ImmersiveSection>


      {/* ===== Blogs Section ===== */}
      <ImmersiveSection className="py-5 sm:py-5 bg-black/70" animation="left">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-1">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-[1000px]">
              <h2 className="mt-4 text-[38px] font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">
                Stay Updated with{" "}
                <span className="text-[#F8BC04]">
                  Our Blogs
                </span>
              </h2>

              <p className="mt-5 text-sm leading-6 text-white/100 sm:mt-6 sm:text-base sm:leading-7">
                Explore practical insights on social media marketing, digital
                marketing, branding, SEO, content strategy, creative design,
                and business growth. From guides for startups to actionable
                marketing strategies for established businesses, our blogs
                help you understand what works, what is changing, and how to
                build a stronger digital presence in India and the UK.
              </p>
            </div>

            <Link
              href="/blog"
              className="
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                bg-[#F8BC04]
                px-6
                py-3.5
                text-sm
                font-bold
                text-black
              "
            >
              View All Blogs
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogCards.map((blog) => (
              <Link
                key={blog.id}
                href={blog.link}
                className="group relative block rounded-[32px] p-[2px] overflow-hidden"
              >
                {/* Continuous Moving Yellow Border Glow Layer */}
                <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,#F8BC04_360deg)] animate-border-rotate pointer-events-none" />

                {/* Card Content Container */}
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="
                    relative
                    h-full
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-white/10
                    bg-[#0b0b0b]
                    backdrop-blur-md
                    z-10
                  "
                >
                  <div className="relative h-[220px] overflow-hidden sm:h-[270px]">
                    <motion.img
                      src={blog.image}
                      alt={blog.title}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between gap-3">
                      <span className="text-[10px] font-semibold text-white/70">
                        {blog.date}
                      </span>

                      <span className="rounded-full bg-white px-4 py-2 text-[9px] font-bold text-black">
                        {blog.primaryCategory}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl font-bold leading-tight text-white">
                      {blog.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-white/40">
                      {blog.description}
                    </p>

                    <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-[10px] font-bold tracking-[0.18em] text-white/55">
                        READ ARTICLE
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8BC04] text-black">
                        →
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>

        {/* CSS Keyframes for Rotating Border Effect */}
        <style jsx global>{`
          @keyframes borderRotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .animate-border-rotate {
            animation: borderRotate 4s linear infinite;
          }
        `}</style>
      </ImmersiveSection>





      

      {/* ===== Global Presence Section ===== */}
      <ImmersiveSection className="w-full bg-black/70 py-10 sm:py-16">
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
      </ImmersiveSection>

      {/* ===== FAQ Section ===== */}
      <ImmersiveSection className="relative overflow-hidden py-10 sm:py-16 bg-[#000000]/[70%]" animation="up">
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
</ImmersiveSection>


      
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
