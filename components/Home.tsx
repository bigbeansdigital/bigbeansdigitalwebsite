"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  Globe2, 
  CheckCircle2, 
  PhoneCall, 
  ExternalLink 
} from "lucide-react";

// Dynamically import client-only components with ssr: false to prevent SSR chunk loading failures
const OurWork = dynamic(() => import("@/components/Recentwork"), {
  ssr: false,
  loading: () => <div className="min-h-[300px] w-full animate-pulse bg-white/[0.02] rounded-2xl" />
});

const OurProcess = dynamic(() => import("@/components/OurProcess"), {
  ssr: false,
  loading: () => <div className="min-h-[300px] w-full animate-pulse bg-white/[0.02] rounded-2xl" />
});

// Client Logos
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

// Services Data
type Service = {
  id: string;
  tag: string;
  title: string;
  navTitle: string;
  image: string;
  text: string;
  href: string;
  pointers: string[];
  metric: string;
  metricLabel: string;
};

const services: Service[] = [
  {
    id: "branding",
    tag: "BRAND AUTHORITY",
    title: "Strategic Branding",
    navTitle: "Branding",
    image: "/home/ourservice/bigbeansdigitalbranding.webp",
    text: "Establish early market trust and distinct identity using strategic visual systems, custom messaging, and guidelines built by a full-service branding agency and creative ad firm.",
    href: "/services/branding",
    metric: "3.8x",
    metricLabel: "Recall Lift",
    pointers: [
      "Logo Design & Visual Guidelines",
      "Brand Positioning & Messaging",
      "Product Packaging & Collateral",
      "Creative Campaign Assets",
    ],
  },
  {
    id: "smm",
    tag: "Social Media Optimisation and Marketing",
    title: "Social Media Growth",
    navTitle: "Social Media Marketing",
    image: "/home/ourservice/bigbeansdigitalsocialmedia.webp",
    text: "Build an active Social Media for your brand,  generate loyal audience with creative posts , reels, custom calendars, and creator partnerships driven by a specialized social media marketing agency and influencer marketing agency.",
    href: "/services/social-media-marketing",
    metric: "450%",
    metricLabel: "Avg. Reach Surge",
    pointers: [
      "Creative Metaphoric Posts",
      "Viral Short-Form Reels & UGC",
      "Build Social Media Presence",
      "Influencer & Creator Collaborations",
    ],
  },
  {
    id: "web-dev",
    tag: "3D Website For Brands",
    title: "3D Immersive Website Development",
    navTitle: "3D Website Development",
    image: "/home/ourservice/bigbeansdigitalwebsite.webp",
    text: "Ultra-fast, responsive web experiences crafted with Next.js, modern micro-interactions, and conversion-focused architecture engineered to drive revenue.",
    href: "/services/website-development",
    metric: "98+",
    metricLabel: "Lighthouse Performance",
    pointers: [
      "Headless Next.js & React Builds",
      "UI/UX Conversion Optimization",
      "Interactive 3D & Micro-Animations",
      "Technical SEO & Core Web Vitals",
    ],
  },
  {
    id: "performance",
    tag: "Data & ROI",
    title: "Performance Marketing",
    navTitle: "Performance Marketing",
    image: "/home/ourservice/bigbeansdigitalperformancemarketing.webp",
    text: "Maximize returns through precision-targeted Meta Ads, Google PPC campaigns, and conversion funnel optimization engineered for strict CAC and ROAS targets.",
    href: "/services/google-ads-meta-ads",
    metric: "4.2x",
    metricLabel: "Average ROAS",
    pointers: [
      "Google Search, Display & PMax",
      "Meta Ads & Creative Testing",
      "Deep Retargeting & Attribution",
      "Funnel & Landing Page CRO",
    ],
  },
  {
    id: "full-growth",
    tag: "Holistic Engine",
    title: "Full-Stack Digital Growth",
    navTitle: "Digital Marketing",
    image: "/home/ourservice/bigbeansdigitalsocialmedia.webp",
    text: "Synchronize SEO, branding, high-intent paid traffic, and omnichannel content into an integrated compounding growth flywheel.",
    href: "/services/social-media-marketing",
    metric: "10x",
    metricLabel: "Pipeline Scale",
    pointers: [
      "Omnichannel Strategy & Execution",
      "Organic Search & Keyword Dominance",
      "Customer Lifecycle Automation",
      "Executive Growth Dashboards",
    ],
  },
];

// Industries Data
const industries = [
 {
  id: "real-estate",
  title: "Real Estate & Interior Decorators",
  description: "Creating stunning digital experiences for spaces and lifestyles.",
  image: "/industries/Real Estate & Interior Decorators.webp",
  alt: "Real Estate and Interior Decorators",
  href: "/services",
},

{
  id: "travel-tourism",
  title: "Travel and Tourism",
  description: "Inspiring journeys with creative storytelling and digital campaigns.",
  image: "/industries/Travel and Tourism.webp",
  alt: "Travel and Tourism",
  href: "/services",
},

{
  id: "fmcg-brands",
  title: "FMCG Brands",
  description: "Building brands that become household names.",
  image: "/industries/FMCG Brands.webp",
  alt: "FMCG Brands",
  href: "/services",
},

{
  id: "bakery-restaurants",
  title: "Bakery and Restaurants",
  description: "Serving creativity for brands that serve happiness.",
  image: "/industries/Bakery and Restaurants.webp",
  alt: "Bakery and Restaurant Brands",
  href: "/services",
},

{
  id: "ecommerce",
  title: "Ecommerce",
  description: "Driving growth for online stores with scroll-stopping content.",
  image: "/industries/ecommerce.webp",
  alt: "Ecommerce Brands and Online Stores",
  href: "/services",
},

{
  id: "it-consultancy",
  title: "IT & Consultancy",
  description: "Simplifying complex ideas with impactful digital solutions.",
  image: "/industries/IT & Consultancy.webp",
  alt: "IT and Consultancy Services",
  href: "/services",
},
];

// Blog Posts Data
const blogCards = [
  {
      id: 11,
      image:
        "/assets/blog/singleblogs/viral-80s-ai-photo-trend-and-prompt.webp",
      date: "September 17 2026",
      primaryCategory: "Social Media",
      secondaryCategory: "Start-Ups",
      title:
        "Viral '80s Trend: Why Is it Suddenly popular and also the Prompt for 1980 image generation",
      description:
        "The 1980s AI photo trend is taking over social media. Here's what it is, why everyone's obsessed, and how your brand can use it with real ChatGPT prompts included.",
      link: "/blog/viral-80s-ai-photo-trend-and-prompt",
      readTime: "5 min read",
    },


    {
      id: 10,
      image:
        "/assets/blog/singleblogs/how-to-choose-a-business-name-guide-for-startups.webp",
      date: "August 31, 2026",
      primaryCategory: "Social Media",
      secondaryCategory: "Start-Ups",
      title:
        "How to Choose a Business Name: A Complete Guide for Startups",
      description:
        "A practical, step-by-step guide to choosing a business name — brainstorming methods, legal checks for India and the UK, and a scoring framework to help you commit.",
      link: "/blog/how-to-choose-a-business-name-guide-for-startups",
      readTime: "6 min read",
    },


    {
      id: 9,
      image:
        "/assets/blog/singleblogs/social-media-marketing-cost-india.webp",
      date: "August 31, 2026",
      primaryCategory: "Social Media",
      secondaryCategory: "Start-Ups",
      title: "Social Media Marketing Cost in India",
      description:
        "Discover social media marketing costs in India, what agencies charge, package pricing, and what affects your budget. Plan smarter with BigBeans Digital.",
      link: "/blog/social-media-marketing-cost-india",
      readTime: "5 min read",
    },
];

// High-Performance Animated Counter using requestAnimationFrame
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const duration = 1400;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOutQuad * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* =========================================================================
   3D PARTICLE ROCKET (Battery & Mobile GPU Optimized, Zero Touch Conflict)
   ========================================================================= */
function ParticleUniverse() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let isVisible = true;

    type Particle = {
      x: number;
      y: number;
      z: number;
      size: number;
      yellow: boolean;
      phase: number;
    };

    const particles: Particle[] = [];
    const isMobileDevice = window.innerWidth < 768;
    const pCountMul = isMobileDevice ? 0.45 : 1;

    const addP = (x: number, y: number, z: number, yellowProb = 0.45, sizeMul = 1) => {
      particles.push({
        x,
        y,
        z,
        size: (Math.random() < 0.1 ? 1.4 : 0.8) * sizeMul,
        yellow: Math.random() < yellowProb,
        phase: Math.random() * Math.PI * 2,
      });
    };

    // Fuselage
    for (let i = 0; i < Math.floor(400 * pCountMul); i++) {
      const x = -1.2 + Math.random() * 1.8;
      let r = 0.44;
      if (x < -0.9) r = 0.32 + ((x + 1.2) / 0.3) * 0.12;
      if (x > 0.2) r = 0.44 - ((x - 0.2) / 0.4) * 0.12;
      const angle = Math.random() * Math.PI * 2;
      addP(x, Math.sin(angle) * r, Math.cos(angle) * r * 0.35, 0.45);
    }

    // Aerodynamic Nose
    for (let i = 0; i < Math.floor(220 * pCountMul); i++) {
      const t = Math.random();
      const x = 0.45 + t * 1.15;
      const r = 0.44 * Math.pow(1 - t, 0.72);
      const angle = Math.random() * Math.PI * 2;
      addP(x, Math.sin(angle) * r, Math.cos(angle) * r * 0.35, 0.4);
    }

    // Stabilizer Fins
    for (let i = 0; i < Math.floor(240 * pCountMul); i++) {
      const u = Math.random();
      const v = Math.random();
      const x = -1.05 + u * 1.2;
      const maxY = 0.45 + (1 - u) * 0.7;
      const z = (Math.random() - 0.5) * 0.18;
      addP(x, 0.42 + v * (maxY - 0.42), z, 0.55, 1.1);
      addP(x, -0.42 - v * (maxY - 0.42), z, 0.55, 1.1);
    }

    // Cockpit Window
    for (let i = 0; i < Math.floor(100 * pCountMul); i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 0.22 + (Math.random() - 0.5) * 0.04;
      addP(-0.05, Math.cos(angle) * r, 0.16 + Math.sin(angle) * 0.02, 0.25, 1.2);
    }

    // Thruster Plume
    for (let i = 0; i < Math.floor(250 * pCountMul); i++) {
      const d = Math.pow(Math.random(), 0.75) * 1.35;
      const spread = 0.03 + d * 0.22;
      addP(-1.25 - d, (Math.random() - 0.5) * spread, (Math.random() - 0.5) * spread * 0.45, 0.85, 0.95);
    }

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const isMobile = width < 768;
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.2 : 1.75);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1);
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", handleMouse, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const rocketAngle = -18 * (Math.PI / 180);
    const rocketCos = Math.cos(rocketAngle);
    const rocketSin = Math.sin(rocketAngle);

    const render = (time: number) => {
      if (!isVisible) {
        raf = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const isMobile = width < 768;
      const mx = isMobile ? 0 : mouseRef.current.x;
      const my = isMobile ? 0 : mouseRef.current.y;
      const scroll = scrollRef.current;

      const rot = time * 0.000045 + mx * 0.012 + scroll * 0.04;
      const tilt = my * 0.05;
      const cosR = Math.cos(rot);
      const sinR = Math.sin(rot);
      const cosT = Math.cos(tilt);
      const sinT = Math.sin(tilt);

      const scale = Math.min(width, height) * (isMobile ? 0.19 : 0.25);
      const baseX = isMobile ? 0.82 : 0.74 - scroll * 0.48;
      const centerX = width * baseX + mx * 18;
      const centerY = height * (isMobile ? 0.22 : 0.46) + my * 15;

      const yellowPath = new Path2D();
      const whitePath = new Path2D();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x + Math.sin(time * 0.00007 + p.phase) * 0.0015;
        const dy = p.y + Math.cos(time * 0.00006 + p.phase) * 0.0015;

        const rx = dx * cosR - p.z * sinR;
        const rz = dx * sinR + p.z * cosR;
        const ry = dy * cosT - rz * sinT;
        const fz = dy * sinT + rz * cosT;

        const psp = 1 / (1 + fz * 0.45);
        const lx = rx * scale * psp;
        const ly = ry * scale * psp;

        const sx = centerX + (lx * rocketCos - ly * rocketSin);
        const sy = centerY + (lx * rocketSin + ly * rocketCos);

        if (sx < -20 || sx > width + 20 || sy < -20 || sy > height + 20) continue;

        const rad = Math.max(0.5, p.size * psp);
        const path = p.yellow ? yellowPath : whitePath;
        path.moveTo(sx + rad, sy);
        path.arc(sx, sy, rad, 0, Math.PI * 2);
      }

      ctx.fillStyle = isMobile ? "rgba(248, 188, 4, 0.4)" : "rgba(248, 188, 4, 0.75)";
      ctx.fill(yellowPath);

      ctx.fillStyle = isMobile ? "rgba(255, 255, 255, 0.35)" : "rgba(255, 255, 255, 0.75)";
      ctx.fill(whitePath);

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full will-change-transform"
      style={{ transform: "translateZ(0)" }}
    />
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  // Auto-rotate services with pause support when touched/hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Reading progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main
      ref={pageRef}
      className="relative min-h-screen bg-[#050505] text-white selection:bg-[#F8BC04] selection:text-black font-sans overflow-x-clip"
    >
      {/* Top Ambient Reading Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#F8BC04] origin-left z-50 shadow-[0_0_12px_#F8BC04]"
      />

      {/* Background Glow Accents */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 right-1/4 h-[380px] sm:h-[580px] w-[380px] sm:w-[580px] rounded-full bg-[#F8BC04]/[0.05] blur-[100px] sm:blur-[150px]" />
        <div className="absolute top-1/2 -left-28 h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-white/[0.02] blur-[120px] sm:blur-[170px]" />
        <div className="absolute bottom-1/4 right-2 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-[#F8BC04]/[0.04] blur-[100px] sm:blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_60%,#050505_100%)]" />
      </div>

      {/* 3D Particle Universe Canvas */}
      <ParticleUniverse />

      {/* 70% Black Background Overlay (Layered above glow & 3D rocket, below interactive elements) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 z-[1] bg-[#000000]/[70%]" 
      />

      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section
        ref={heroRef}
        className="relative z-10 min-h-[92dvh] sm:min-h-screen flex items-center px-4 sm:px-8 lg:px-16 pt-24 sm:pt-28 pb-12 max-w-[1550px] mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Hero Left Content */}
          <div className="lg:col-span-8 xl:col-span-8 z-20">
           
            

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-7xl xl:text-[80px] font-black tracking-[-0.04em] leading-[1.08] sm:leading-[1.02]"
            >
              Where Creativity{" "}
              <span
                className="block sm:inline font-medium italic text-[#F8BC04] font-serif pr-2"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                <br></br>
                meets strategy.
              </span>
            </motion.h1>

            {/* Narrative Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/75 max-w-2xl leading-relaxed"
            >
              At <strong className="text-white font-bold">Big Beans Digital</strong>, we help businesses grow through digital 
              marketing, branding, SEO, social media marketing, website development, Google Ads and Meta Ads. Whether you need a 
              digital marketing agency, branding partner or performance marketing team, we combine creative strategy, content and 
              measurable campaigns to build stronger brands, attract the right audience and turn online attention into business results.
            </motion.p>

            {/* CTAs and Ratings */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-6"
            >
              <Link
                href="https://wa.link/pxmrrm"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#F8BC04] text-black font-extrabold text-sm sm:text-base tracking-tight transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_25px_rgba(248,188,4,0.3)] hover:shadow-[0_0_30px_rgba(248,188,4,0.5)]"
              >
                <PhoneCall className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span>Book Free Consultation Call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-3 sm:pl-1 self-start sm:self-auto">
                <div className="flex -space-x-2.5 sm:-space-x-3">
                  {["/home/ratings/rating1.webp", "/home/ratings/rating2.webp", "/home/ratings/rating3.webp"].map(
                    (src, i) => (
                      <div
                        key={i}
                        className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-full border-2 border-[#050505] overflow-hidden bg-neutral-800"
                      >
                        <Image
                          src={src}
                          alt="Client Reviewer"
                          fill
                          sizes="40px"
                          className="object-cover"
                          priority
                        />
                      </div>
                    )
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm sm:text-base font-black text-white">4.9/5.0</span>
                    <span className="text-[#F8BC04] text-xs sm:text-sm">★★★★★</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-white/50">Trusted by 100+ global brands</p>
                </div>
              </div>
            </motion.div>

            {/* Performance Metric Counters */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl"
            >
              {[
                { target: 120, suffix: "+", label: "Projects Launched" },
                { target: 28, suffix: "+", label: "Active Partners" },
                { target: 64, suffix: "+", label: "Brands Elevated" },
                { target: 97, suffix: "%", label: "Client Retention" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl sm:text-3xl font-black text-[#F8BC04] tracking-tight">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-white/50 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Reserved Space for Desktop 3D Canvas */}
          <div className="hidden lg:block lg:col-span-4 min-h-[450px] relative pointer-events-none" />
        </div>
      </section>

      {/* =========================================================================
          CLIENT LOGOS CAROUSEL
          ========================================================================= */}
      <section className="relative z-10 py-5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 sm:gap-6">
            <div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Trusted by <span className="font-serif italic font-normal text-[#F8BC04]">100+ Startups in India</span> <br></br> &amp; Businesses around the world
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/60 max-w-md leading-relaxed">
              Businesses across India, the UK and other states and contries work with Big Beans Digital for digital marketing, branding, SEO, social media marketing and performance advertising from DTC brands and startups to healthcare companies, technology businesses and growing enterprises.
            </p>
          </div>

          <div className="relative overflow-hidden py-2 sm:py-4 mask-gradient">
            <div className="flex w-max gap-4 sm:gap-8 animate-marquee">
              {[...carouselImages, ...carouselImages].map((img, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center h-16 w-32 sm:h-24 sm:w-44 rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.02] p-3 sm:p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#F8BC04]/40 hover:bg-white/[0.05]"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={img}
                      alt={`Client logo ${idx}`}
                      fill
                      sizes="(max-width: 640px) 130px, 180px"
                      className="object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-opacity"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR PROCESS
          ========================================================================= */}
      <div className="relative z-10">
        <OurProcess />
      </div>

      {/* =========================================================================
          WHAT WE DO / SERVICES
          ========================================================================= */}
      <section 
        className="relative z-10 py-5"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
       <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
  <div className="mb-8 max-w-[900px]">
    <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mt-2 sm:mt-3">
      Services provided by <br />
      <span className="font-serif italic font-normal text-[#F8BC04]">
        Big Beans Digital for your Brand.
      </span>
    </h2>

    <p className="mt-3 sm:mt-4 text-white/65 text-xs sm:text-base leading-relaxed text-justify">
      We eliminate disjointed marketing silos so early stage Startups in India and around the world and also businesses can scale predictably. By pairing data-backed strategy and conversion web architecture with precision paid campaigns, our digital marketing agency and creative ad firm ensure your branding, search visibility, and performance media work in unison to build continuous market momentum.
    </p>
  </div>

          {/* Mobile Horizontal Tabs (< lg) */}
          <div className="flex lg:hidden overflow-x-auto gap-2.5 pb-3 mb-6 no-scrollbar snap-x">
            {services.map((item, idx) => {
              const isActive = activeService === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveService(idx)}
                  className={`snap-start shrink-0 px-4 py-2.5 rounded-full border text-xs font-bold transition-all ${
                    isActive
                      ? "border-[#F8BC04] bg-[#F8BC04] text-black shadow-[0_0_15px_rgba(248,188,4,0.3)]"
                      : "border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/[0.08]"
                  }`}
                >
                  {item.navTitle}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Desktop Vertical Tabs (>= lg) */}
            <div className="hidden lg:flex lg:col-span-4 flex-col gap-2.5">
              {services.map((item, idx) => {
                const isActive = activeService === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveService(idx)}
                    className={`group text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? "border-[#F8BC04] bg-[#F8BC04]/10 text-white shadow-[0_0_25px_rgba(248,188,4,0.15)]"
                        : "border-white/5 bg-white/[0.015] text-white/60 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-bold tracking-widest uppercase block mb-1 text-[#F8BC04]">
                        0{idx + 1}
                      </span>
                      <span className="text-base sm:text-lg font-bold block">{item.navTitle}</span>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive ? "text-[#F8BC04] translate-x-1" : "text-white/20 group-hover:text-white/60"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Service Showcase Card */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-black/80 p-5 sm:p-10 backdrop-blur-xl overflow-hidden shadow-2xl"
                >
                  <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-6 sm:gap-8 items-center">
                    <div className="w-full md:col-span-7 flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8BC04]/10 border border-[#F8BC04]/30 text-[#F8BC04] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-3 sm:mb-4">
                          <Sparkles className="w-3 h-3" /> {services[activeService].tag}
                        </div>
                        <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                          {services[activeService].title}
                        </h3>
                        <p className="mt-3 sm:mt-4 text-xs sm:text-base text-white/70 leading-relaxed">
                          {services[activeService].text}
                        </p>
                      </div>

                      {/* Bullet Highlights */}
                      <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                        {services[activeService].pointers.map((pointer, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 text-xs sm:text-sm text-white/85">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F8BC04] shrink-0" />
                            <span>{pointer}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 sm:mt-8 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-4">
                        <Link
                          href={services[activeService].href}
                          className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-black bg-[#F8BC04] px-6 py-3 rounded-full hover:shadow-[0_0_20px_#F8BC04] transition-all"
                        >
                          Explore Service <ArrowRight className="w-4 h-4" />
                        </Link>

                        <div className="text-left sm:text-right flex sm:flex-col items-baseline justify-between sm:justify-start">
                          <div className="text-xl sm:text-3xl font-black text-[#F8BC04]">
                            {services[activeService].metric}
                          </div>
                          <div className="text-[10px] uppercase tracking-wider text-white/50">
                            {services[activeService].metricLabel}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:col-span-5 relative h-48 sm:h-72 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
                      <Image
                        src={services[activeService].image}
                        alt={services[activeService].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR WORK
          ========================================================================= */}
      <div className="relative z-10">
        <OurWork />
      </div>

      {/* =========================================================================
          INDUSTRIES WE WORKED WITH SECTION
          ========================================================================= */}
      <section className="relative z-10 py-5 sm:py-20">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column Header */}
            <div className="xl:col-span-3 flex flex-col justify-start xl:sticky xl:top-28">
              <span className="text-xs sm:text-sm font-black tracking-[0.25em] text-[#F8BC04]">
                [ INDUSTRIES ]
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mt-4 sm:mt-5">
                <span className="text-white block">Industries</span>
                <span className="text-[#F8BC04] block">We</span>
                <span className="text-[#F8BC04] block">worked</span>
                <span className="text-[#F8BC04] block">with</span>
              </h2>

              {/* Accent Underline */}
              <div className="w-14 h-1 bg-[#F8BC04] rounded-full mt-4 sm:mt-6 mb-4 sm:mb-5" />

              <p className="text-sm sm:text-base text-white/70 font-medium leading-snug">
                Different industries. <br />
                Real impact.
              </p>
            </div>

            {/* Right Column: 6 Cards Grid (2 rows x 3 columns on desktop) */}
            <div className="xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {industries.map((ind) => (
                <div
                  key={ind.id}
                  className="group relative flex flex-col justify-between min-h-[300px] sm:min-h-[340px] rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0c0c0c] p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:border-[#F8BC04]/50 shadow-xl"
                >
                  {/* Background Image & Gradient Overlays */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                      className="object-cover object-center brightness-75 group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Dark gradient fade for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/30" />
                  </div>

                  {/* Card Top Spacer / Pill */}
                  <div className="relative z-10" />

                  {/* Card Content & Action Button */}
                  <div className="relative z-10 flex flex-col justify-end pt-24 sm:pt-28">
                    <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-[#F8BC04] transition-colors leading-snug">
                      {ind.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-[13px] text-white/70 leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="mt-4 sm:mt-5 flex justify-end">
                      <Link
                        href={ind.href}
                        className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-[#F8BC04] text-black text-xs sm:text-sm font-extrabold tracking-tight transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(248,188,4,0.3)] hover:shadow-[0_0_20px_rgba(248,188,4,0.5)]"
                      >
                        <span>Know More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

<div className="mx-auto max-w-[1600px] py-10">

    {/* Section Heading */}
    <div className="mx-auto Py-[5py] mb-12 max-w-[1600px] text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Case Studies
      </h2>

      <p className="mt-4 text-base leading-6 text-white/100 sm:text-lg">
        Explore how our digital marketing agency engineers data-driven strategies that scale early-stage startups and established businesses. From lowering customer acquisition costs to multiplying qualified leads, see how our performance marketing agency delivers measurable return on investment through real-world client success stories.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

      {/* Card 1 */}
      <div className="overflow-hidden rounded-[4px] bg-[#101010]">

        {/* Image */}
        <div className="aspect-[1.62/1] w-full bg-[#c5cdd4]">
          <img
            src="/casestudies/BigBeans Case Study 1.webp"
            alt="BigBeans Case Study 1"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-7 py-6 text-center sm:px-8">
          <h3 className="text-2xl font-semibold text-white">
            Adoring India
          </h3>

          <p className="mt-5 text-base leading-6 text-[#c5cdd4]">
            We partnered with Adoring India, an NGO dedicated to supporting school students, to build digital visibility and expand their community impact. By leveraging data-driven storytelling and targeted outreach campaigns, our digital marketing agency helped increase volunteer engagement, boost corporate sponsorship inquiries, and scale their educational awareness initiatives across major digital platforms.
          </p>

          <a
            href="www.bigbeansdigital.com"
            className="mt-6 inline-flex min-w-[120px] items-center justify-center rounded-[3px] bg-[#F8BC04] px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white"
          >
            Know More
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="overflow-hidden rounded-[4px] bg-[#101010]">

        {/* Image */}
        <div className="aspect-[1.62/1] w-full bg-[#c5cdd4]">
          <img
            src="/casestudies/BigBeans Case Study 2.webp"
            alt="BigBeans Case Study 2"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-7 py-6 text-center sm:px-8">
          <h3 className="text-2xl font-semibold text-white">
            Gupshup Bharat 
          </h3>

          <p className="mt-5 text-base leading-6 text-[#c5cdd4]">
            To establish Gupshup India as the premier news agency in Tripura, we designed an agile content and distribution strategy focused on instant reader retention and search visibility. Functioning as their growth partner, our social media marketing agency optimized news distribution pipelines, expanding their daily reader reach and boosting cross-platform audience engagement across regional markets.
          </p>

          <a
            href="www.bigbeansdigtial.com"
            className="mt-6 inline-flex min-w-[120px] items-center justify-center rounded-[3px] bg-[#F8BC04] px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white"
          >
            Know More
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="overflow-hidden rounded-[4px] bg-[#101010]">

        {/* Image */}
        <div className="aspect-[1.62/1] w-full bg-[#c5cdd4]">
          <img
            src="/casestudies/BigBeans Case Study 3.webp"
            alt="BigBeans Case Study 3"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-7 py-6 text-center sm:px-8">
          <h3 className="text-2xl font-semibold text-white">
            Entimessi
          </h3>

          <p className="mt-5 text-base leading-6 text-[#c5cdd4]">
            For Entimessi, a premium female lingerie brand, we built an end-to-end sales engine focused on customer acquisition and brand authority. By uniting high-converting visual ad creatives with precise audience targeting, our performance marketing agency lowered customer acquisition costs (CAC) and maximized return on ad spend (ROAS) while scaling direct website sales.
          </p>

          <a
            href="www.bigbeansdigital.com"
            className="mt-6 inline-flex min-w-[120px] items-center justify-center rounded-[3px] bg-[#F8BC04] px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white"
          >
            Know More
          </a>
        </div>
      </div>

    </div>
  </div>
      </section>


  












      {/* =========================================================================
          BLOGS SECTION
          ========================================================================= */}
      <section className="relative z-10 py-5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
            <div className="max-w-[1600px]">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mt-2">
                Stay Ahead with <span className="font-serif italic font-normal text-[#F8BC04]">Our Insights</span>
              </h2>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-white/60 leading-relaxed">
                Actionable playbooks covering high-converting organic reach, branding turnarounds, and performance marketing shifts.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-5 py-3 rounded-full hover:border-[#F8BC04] hover:text-[#F8BC04] transition-colors self-start md:self-auto"
            >
              Browse All Articles <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {blogCards.map((blog) => (
              <Link
                key={blog.id}
                href={blog.link}
                className="group relative flex flex-col rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-[#F8BC04]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-lg"
              >
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4">
                    <span className="px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-black/70 text-[#F8BC04] border border-[#F8BC04]/30 backdrop-blur-sm">
                      {blog.primaryCategory}
                    </span>
                  </div>
                  <span className="absolute bottom-3 right-3 sm:right-4 text-[10px] sm:text-[11px] font-medium text-white/70">
                    {blog.readTime}
                  </span>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] sm:text-[11px] text-white/40 block mb-1.5">{blog.date}</span>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F8BC04] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="mt-2 text-xs text-white/60 line-clamp-3 leading-relaxed">
                      {blog.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#F8BC04]">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          GLOBAL PRESENCE SECTION
          ========================================================================= */}
      <section className="relative z-10 py-5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="rounded-2xl sm:rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6 sm:p-14 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6">
                
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                  Empowering Brands Across <span className="font-serif italic font-normal text-[#F8BC04]">12+ Global Hubs</span>
                </h2>
                <p className="mt-3 sm:mt-4 text-xs sm:text-base text-white/60 leading-relaxed">
                  Headquartered in India with strategic partner nodes across London, North America, Singapore, and Australia. We engineer hyper-localized growth campaigns tailored to diverse consumer behaviors.
                </p>

                <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/10 pt-5 sm:pt-6">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F8BC04]" /> India Operations
                    </h4>
                    <ul className="space-y-1 sm:space-y-1.5 text-xs text-white/60">
                      <li>Kolkata</li>
                      <li>Delhi NCR &amp; Noida</li>
                      <li>Bangalore</li>
                      <li>Mumbai &amp; Pune</li>
                      <li>Tripura</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F8BC04]" /> International Operations
                    </h4>
                    <ul className="space-y-1 sm:space-y-1.5 text-xs text-white/60">
                      <li>London, United Kingdom</li>
                      <li>Singapore</li>
                      <li>Toronto &amp; Vancouver, Canada</li>
                      <li>Sydney &amp; Melbourne, Australia</li>
                      <li>Lagos, Nigeria</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative flex items-center justify-center mt-2 lg:mt-0">
                <div className="relative w-full aspect-[16/10] max-w-[620px]">
                  <Image
                    src="/maps/world-map.png"
                    alt="BigBeans Global Footprint Map"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-contain opacity-70"
                  />
                  {/* Map Node Dots */}
                  {[
                    { top: "42%", left: "67%" }, // India
                    { top: "27%", left: "44%" }, // UK
                    { top: "28%", left: "18%" }, // North America
                    { top: "54%", left: "74%" }, // Singapore
                    { top: "65%", left: "84%" }, // Australia
                  ].map((pos, idx) => (
                    <div
                      key={idx}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ top: pos.top, left: pos.left }}
                    >
                      <span className="relative flex h-2.5 w-2.5 sm:h-3.5 sm:w-3.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F8BC04] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 bg-[#F8BC04] shadow-[0_0_12px_#F8BC04]" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION
          ========================================================================= */}
      <section className="relative z-10 py-5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10">
          <div className="text-center mb-8">
            

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mt-2">
              Frequently Asked{" "}
              <span className="font-serif italic font-normal text-[#F8BC04]">
                Questions
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
            {/* LEFT COLUMN */}
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  q: "What social media marketing services do you offer?",
                  a: "Big Beans Digital provides full-lifecycle social media solutions for startups and enterprises across India, the US, and the UK. Our scope includes visual feed architecture, algorithm-specific short-form Reels & TikTok production, organic growth strategy, community management, and synchronized paid social campaigns.",
                },
                {
                  q: "How do I find the best social media marketing agency near me?",
                  a: "Beyond physical proximity, evaluate verified case studies, aesthetic consistency, conversion tracking transparency, and strategic depth. Big Beans Digital operates a distributed agile team delivering high-touch collaboration regardless of whether you are based in London, Kolkata, Delhi, or New York.",
                },
                {
                  q: "Why choose Big Beans Digital over traditional agencies?",
                  a: "Traditional agencies separate creative thinking from performance metrics. We merge branding, web engineering, and performance marketing into a single unit so every dollar spent directly advances brand equity and customer acquisition.",
                },
                {
                  q: "Do you engineer conversion-focused websites for startups?",
                  a: "Yes. We build responsive, fast headless websites using modern frameworks (Next.js, Tailwind CSS) optimized for sub-second load times, technical SEO compliance, and conversion funnels designed to turn traffic into pipeline.",
                },
                {
                  q: "How does performance marketing work with your team?",
                  a: "We deploy rigorous quantitative testing across Google Ads, Meta Ads, and PPC remarketing funnels. We focus on true business levers—CAC, ROAS, and customer lifetime value—rather than vanity impressions.",
                },
                {
                  q: "What does an engagement cost?",
                  a: "We offer tailored milestone or retainer engagements based on growth objectives, required content cadence, and ad spend scale. Schedule a consultation call to receive an honest, transparent roadmap.",
                },
              ].map((faq, idx) => {
                const isOpen = openFaq === idx;

                return (
                  <div
                    key={idx}
                    className="w-full rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors hover:border-white/20"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full min-h-[84px] flex items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6 text-left"
                    >
                      <span className="flex-1 whitespace-nowrap text-sm sm:text-base md:text-lg font-bold text-white">
                        {faq.q}
                      </span>

                      <span
                        className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs sm:text-sm font-bold transition-transform duration-300 ${
                          isOpen
                            ? "bg-[#F8BC04] text-black rotate-45"
                            : "bg-white/5 text-white/80"
                        }`}
                      >
                        +
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-base text-white/70 leading-relaxed border-t border-white/5">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  q: "What industries do you work with?",
                  a: "We work with businesses across sectors including real estate, healthcare, restaurants, ecommerce, education, professional services, home improvement, gyms, FMCG, and other growth-focused businesses.",
                },
                {
                  q: "Can you manage both organic social media and paid advertising?",
                  a: "Yes. Our team can manage organic social media strategy and content alongside paid campaigns on platforms such as Meta and Google. This allows creative, audience targeting, messaging, and performance data to work together.",
                },
                {
                  q: "How long does it take to see results from social media marketing?",
                  a: "The timeline depends on your industry, starting position, content quality, audience, and objectives. Organic growth generally requires consistent execution over time, while paid campaigns can generate measurable traffic and leads much sooner.",
                },
                {
                  q: "Do you provide content creation and graphic design?",
                  a: "Yes. Our social media services can include creative direction, graphic design, short-form video concepts, social media creatives, campaign content, and platform-specific content planning.",
                },
                {
                  q: "Do you provide SEO and website optimization?",
                  a: "Yes. We can integrate technical SEO, on-page optimization, content strategy, conversion-focused landing pages, and website improvements into a broader digital marketing strategy.",
                },
                {
                  q: "How can I get started with Big Beans Digital?",
                  a: "Start by sharing your business, current challenges, goals, target audience, and the services you are looking for. We can then discuss the right approach, scope, milestones, and next steps for your project.",
                },
              ].map((faq, idx) => {
                const faqIndex = idx + 6;
                const isOpen = openFaq === faqIndex;

                return (
                  <div
                    key={faqIndex}
                    className="w-full rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors hover:border-white/20"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : faqIndex)}
                      className="w-full min-h-[84px] flex items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6 text-left"
                    >
                      <span className="flex-1 whitespace-nowrap text-sm sm:text-base md:text-lg font-bold text-white">
                        {faq.q}
                      </span>

                      <span
                        className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs sm:text-sm font-bold transition-transform duration-300 ${
                          isOpen
                            ? "bg-[#F8BC04] text-black rotate-45"
                            : "bg-white/5 text-white/80"
                        }`}
                      >
                        +
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-base text-white/70 leading-relaxed border-t border-white/5">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA SECTION
          ========================================================================= */}
      <section className="relative z-10 py-5 sm:py-5 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.1] sm:leading-[1.05]">
            Scale Your Brand
            Today{" "}
            <span
              className="font-serif italic font-normal text-[#F8BC04]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              with Big Beans Digital 
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 text-xs sm:text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            Ready to turn fragmented tactics into a predictable growth engine? Book your free strategy session with our digital marketing agency now.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href="/connect"
              className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#F8BC04] text-black font-extrabold text-sm sm:text-base tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(248,188,4,0.5)]"
            >
              <span>Connect With Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://wa.link/pxmrrm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/5 hover:border-white/40 transition-colors"
            >
              Quick WhatsApp Chat <ExternalLink className="w-4 h-4 text-white/60" />
            </Link>
          </div>
        </div>
      </section>

      {/* Embedded Global Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-50%, 0, 0);
              }
            }
            .animate-marquee {
              animation: marquee 26s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
            .mask-gradient {
              mask-image: linear-gradient(
                to right,
                transparent,
                black 10%,
                black 90%,
                transparent
              );
              -webkit-mask-image: linear-gradient(
                to right,
                transparent,
                black 10%,
                black 90%,
                transparent
              );
            }
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `,
        }}
      />
    </main>
  );
}