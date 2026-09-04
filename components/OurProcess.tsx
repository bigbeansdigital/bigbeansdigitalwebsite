"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

interface Milestone {
  number: string;
  title: string;
  description: string;
}

const MILESTONES: Milestone[] = [
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

const COLORS = {
  yellow: "#F8BC04",
  white: "#FFFFFF",
  inactiveLine: "rgba(255,255,255,0.12)",
};

const VIEW_W = 1440;
const VIEW_H = 380;

interface Point {
  x: number;
  y: number;
}

/* ------------------------------------------------------------------ */
/*  Desktop curved path nodes                                         */
/* ------------------------------------------------------------------ */

const DESKTOP_NODES: Point[] = [
  { x: 130, y: 270 },
  { x: 390, y: 110 },
  { x: 620, y: 230 },
  { x: 870, y: 105 },
  { x: 1090, y: 230 },
  { x: 1320, y: 120 },
];

const TEXT_ABOVE = [false, true, false, true, false, true];
const TOTAL = MILESTONES.length;

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function catmullRomToBezier(points: Point[]): string {
  if (points.length < 2) return "";

  let d = `M${points[0].x},${points[0].y} `;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? 0 : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2 < points.length ? i + 2 : i + 1];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;

    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += `C${cp1x.toFixed(2)},${cp1y.toFixed(
      2
    )} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2.x},${p2.y} `;
  }

  return d.trim();
}

/* ------------------------------------------------------------------ */
/*  3D Holographic Node Marker Component                              */
/* ------------------------------------------------------------------ */

function NodeMarker({
  node,
  index,
  activeIndex,
}: {
  node: Point;
  index: number;
  activeIndex: number;
}) {
  const hasAppeared = index <= activeIndex;

  return (
    <g>
      {/* Deep volumetric ambient glow */}
      <motion.circle
        cx={node.x}
        cy={node.y}
        r={45}
        fill={COLORS.yellow}
        filter="url(#holographicGlow)"
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{
          opacity: hasAppeared ? 0.45 : 0,
          scale: hasAppeared ? 1 : 0.2,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Intense core radiance */}
      <motion.circle
        cx={node.x}
        cy={node.y}
        r={22}
        fill={COLORS.yellow}
        filter="url(#holographicGlow)"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{
          opacity: hasAppeared ? 0.9 : 0,
          scale: hasAppeared ? 1 : 0.3,
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Outer metallic architectural ring */}
      <motion.circle
        cx={node.x}
        cy={node.y}
        r={14}
        fill="#050505"
        strokeWidth={2}
        initial={{
          opacity: 0,
          scale: 0.5,
          stroke: COLORS.inactiveLine,
        }}
        animate={{
          opacity: hasAppeared ? 1 : 0,
          scale: hasAppeared ? 1 : 0.5,
          stroke: hasAppeared ? COLORS.yellow : COLORS.inactiveLine,
        }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      />

      {/* Core glowing singularity dot */}
      <motion.circle
        cx={node.x}
        cy={node.y}
        r={4}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: hasAppeared ? 1 : 0,
          scale: hasAppeared ? 1 : 0,
          fill: COLORS.yellow,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/*  Milestone Text (Floating Glass Card)                              */
/* ------------------------------------------------------------------ */

function MilestoneText({
  milestone,
  index,
  activeIndex,
  above,
}: {
  milestone: Milestone;
  index: number;
  activeIndex: number;
  above: boolean;
}) {
  const hasAppeared = index <= activeIndex;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: above ? 20 : -20,
        scale: 0.9,
      }}
      animate={{
        opacity: hasAppeared ? 1 : 0,
        y: hasAppeared ? 0 : above ? 20 : -20,
        scale: hasAppeared ? 1 : 0.9,
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-4 text-center shadow-[0_20px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:border-[#F8BC04]/40"
    >
      {/* Subtle internal glowing border reflection */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-transparent to-white/10 pointer-events-none" />

      <span className="mb-1 text-[11px] font-bold uppercase tracking-[0.3em] text-[#F8BC04] drop-shadow-[0_0_8px_rgba(248,188,4,0.5)]">
        {milestone.number}
      </span>

      <h3 className="mb-1.5 text-base font-bold text-white tracking-wide">
        {milestone.title}
      </h3>

      <p className="max-w-[160px] text-[12px] leading-relaxed text-white/60">
        {milestone.description}
      </p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Dot                                                        */
/* ------------------------------------------------------------------ */

function MobileDot({
  index,
  activeIndex,
}: {
  index: number;
  activeIndex: number;
}) {
  const hasAppeared = index <= activeIndex;

  return (
    <div className="relative z-10 flex h-4 w-4 flex-shrink-0 items-center justify-center">
      <motion.div
        className="absolute h-8 w-8 rounded-full bg-[#F8BC04] blur-md"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{
          opacity: hasAppeared ? 0.8 : 0,
          scale: hasAppeared ? 1 : 0.4,
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      <motion.div
        className="relative h-4 w-4 rounded-full bg-black shadow-lg"
        initial={{
          opacity: 0,
          scale: 0.5,
          borderWidth: 1.5,
          borderStyle: "solid",
          borderColor: COLORS.inactiveLine,
        }}
        animate={{
          opacity: hasAppeared ? 1 : 0,
          scale: hasAppeared ? 1 : 0.5,
          borderColor: hasAppeared
            ? COLORS.yellow
            : COLORS.inactiveLine,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.span
          className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: hasAppeared ? 1 : 0,
            scale: hasAppeared ? 1 : 0,
            backgroundColor: COLORS.yellow,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                    */
/* ------------------------------------------------------------------ */

export default function OurJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.2,
  });

  /* ---------------------------------------------------------------- */
  /*  Automatic pointer animation (Exactly 1 second per point)       */
  /* ---------------------------------------------------------------- */
  useEffect(() => {
    if (!isInView) return;

    let currentIndex = -1;
    let timer: ReturnType<typeof setTimeout>;

    const showNextPoint = () => {
      currentIndex += 1;

      if (currentIndex >= TOTAL) return;

      setActiveIndex(currentIndex);

      if (currentIndex < TOTAL - 1) {
        timer = setTimeout(showNextPoint, 1000);
      }
    };

    timer = setTimeout(showNextPoint, 1000);

    return () => clearTimeout(timer);
  }, [isInView]);

  const desktopPathD = catmullRomToBezier(DESKTOP_NODES);
  const mobilePathD = "M10,8 L10,292";

  const pathProgress =
    activeIndex < 0
      ? 0
      : Math.min((activeIndex + 1) / TOTAL, 1);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#000000]/[70%] overflow-hidden py-24"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] bg-gradient-to-tr from-[#F8BC04]/10 via-amber-600/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 flex w-full flex-col justify-center px-6 md:px-10 lg:px-16 xl:px-20 mx-auto max-w-[1500px]">

        {/* ========================================================== */}
        {/* HEADER SECTION (Left Title / Right Paragraph Split)        */}
        {/* ========================================================== */}

        <div className="mb-20 grid w-full grid-cols-1 items-end gap-12 md:grid-cols-2 lg:gap-20">

          {/* Left Side: Titles */}
          <div className="flex flex-col text-left">

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -30 }
              }
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="text-[48px] font-extrabold leading-[0.92] tracking-tight sm:text-[60px] md:text-[72px] lg:text-[90px] xl:text-[100px]"
            >
              <span className="text-white">Why </span>
              <span className="text-[#F8BC04] drop-shadow-[0_0_20px_rgba(248,188,4,0.35)]">
                US?
              </span>
            </motion.h2>

          </div>

          {/* Right Side: Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 30 }
            }
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="flex flex-col text-left md:pb-2"
          >
            <p className="text-[14px] leading-[1.8] text-white/100 md:text-[15px] lg:text-[16px]">
              Every business starts with an idea. Our role is to help turn that idea into a brand people notice, remember, and trust.
              <br></br>
              At Big Beans Digital, we bring strategy, creativity, technology, and performance together under one team. From building a strong brand foundation to creating digital experiences and scaling marketing, we stay involved at every stage of the journey.
            </p>
          </motion.div>
        </div>

        {/* ========================================================== */}
        {/* ULTRA 3D IMMERSIVE CURVED TIMELINE CONTAINER               */}
        {/* ========================================================== */}

        <div
          className="hidden w-full md:block"
          style={{ perspective: "1400px" }}
        >
          <div
            className="relative mx-auto w-full max-w-[1350px]"
            style={{
              aspectRatio: `${VIEW_W} / ${VIEW_H}`,
              // Advanced 3D camera projection angle (deep tilt with subtle asymmetric yaw)
              transform: "rotateX(34deg) rotateZ(-1deg) scale(1.02)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Cinematic floor shadow cast beneath the 3D plane */}
            <div className="absolute inset-x-12 -bottom-10 h-32 bg-black/80 blur-3xl pointer-events-none rounded-full transform rotateX(-34deg)" />

            <svg
              viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
              className="absolute inset-0 h-full w-full overflow-visible"
              fill="none"
              style={{
                filter:
                  "drop-shadow(0 40px 30px rgba(0,0,0,0.8))",
              }}
            >
              <defs>
                <filter
                  id="holographicGlow"
                  x="-200%"
                  y="-200%"
                  width="500%"
                  height="500%"
                >
                  <feGaussianBlur
                    stdDeviation="12"
                    result="blur"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="blur"
                    operator="over"
                  />
                </filter>

                <linearGradient
                  id="activeLineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="#F8BC04"
                    stopOpacity="0.8"
                  />
                  <stop
                    offset="50%"
                    stopColor="#FFEE88"
                    stopOpacity="1"
                  />
                  <stop
                    offset="100%"
                    stopColor="#F8BC04"
                    stopOpacity="0.9"
                  />
                </linearGradient>
              </defs>

              {/* Background architectural trace path */}
              <path
                d={desktopPathD}
                stroke={COLORS.inactiveLine}
                strokeWidth={2.5}
                strokeLinecap="round"
              />

              {/* Dynamic animated 3D path light stream */}
              <motion.path
                d={desktopPathD}
                stroke="url(#activeLineGradient)"
                strokeWidth={3.5}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: pathProgress }}
                transition={{
                  duration: 1,
                  ease: "linear",
                }}
                style={{
                  filter:
                    "drop-shadow(0 0 10px rgba(248,188,4,0.9)) drop-shadow(0 0 20px rgba(248,188,4,0.4))",
                }}
              />

              {/* Holographic 3D nodes */}
              {DESKTOP_NODES.map((node, i) => (
                <NodeMarker
                  key={i}
                  node={node}
                  index={i}
                  activeIndex={activeIndex}
                />
              ))}
            </svg>

            {/* 3D Counter-rotated Floating Glass Cards */}
            {MILESTONES.map((milestone, i) => {
              const node = DESKTOP_NODES[i];
              const leftPct = (node.x / VIEW_W) * 100;
              const topPct = (node.y / VIEW_H) * 100;
              const above = TEXT_ABOVE[i];

              return (
                <div
                  key={milestone.number}
                  className="absolute w-[170px] -translate-x-1/2 md:w-[190px]"
                  style={{
                    left: `${leftPct}%`,
                    ...(above
                      ? {
                          bottom: `${100 - topPct}%`,
                          marginBottom: 36,
                        }
                      : {
                          top: `${topPct}%`,
                          marginTop: 36,
                        }),
                    // Counter-rotate against the 34deg board tilt to keep text perfectly crisp and legible
                    transform:
                      "rotateX(-34deg) rotateZ(1deg) translateZ(60px)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <MilestoneText
                    milestone={milestone}
                    index={i}
                    activeIndex={activeIndex}
                    above={above}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================== */}
        {/* MOBILE VERTICAL TIMELINE FALLBACK                          */}
        {/* ========================================================== */}

        <div className="flex w-full max-w-md items-start gap-5 md:hidden mx-auto">

          {/* Timeline */}
          <div className="relative flex w-6 flex-shrink-0 flex-col items-center">

            {/* Background vertical line */}
            <div
              className="absolute top-2 bottom-2 left-1/2 w-[2px] -translate-x-1/2 rounded-full"
              style={{
                backgroundColor: COLORS.inactiveLine,
              }}
            />

            {/* Animated glowing vertical line */}
            <motion.div
              className="absolute top-2 left-1/2 w-[3px] -translate-x-1/2 rounded-full origin-top"
              initial={{ height: 0 }}
              animate={{
                height: `${pathProgress * 100}%`,
              }}
              transition={{
                duration: 1,
                ease: "linear",
              }}
              style={{
                backgroundColor: COLORS.yellow,
                filter:
                  "drop-shadow(0 0 6px rgba(248,188,4,0.7)) drop-shadow(0 0 12px rgba(248,188,4,0.4))",
              }}
            />

            {/* Timeline points */}
            <div className="relative z-10 flex w-full flex-col items-center gap-8">
              {MILESTONES.map((_, i) => (
                <MobileDot
                  key={i}
                  index={i}
                  activeIndex={activeIndex}
                />
              ))}
            </div>
          </div>

          {/* Milestone cards */}
          <div className="flex min-w-0 flex-1 flex-col gap-8">

            {MILESTONES.map((milestone, i) => {
              const hasAppeared = i <= activeIndex;

              return (
                <motion.div
                  key={milestone.number}
                  initial={{
                    opacity: 0,
                    y: 14,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: hasAppeared ? 1 : 0,
                    y: hasAppeared ? 0 : 14,
                    scale: hasAppeared ? 1 : 0.96,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                  style={{
                    pointerEvents: hasAppeared
                      ? "auto"
                      : "none",
                  }}
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#F8BC04]">
                    {milestone.number}
                  </span>

                  <h3 className="mt-1 text-lg font-bold text-white">
                    {milestone.title}
                  </h3>

                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/70">
                    {milestone.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}