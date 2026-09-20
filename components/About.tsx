"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Trophy,
  MessageCircle,
  Lightbulb,
  Palette,
  Layers3,
  Code2,
  PenTool,
  Search,
  Megaphone,
  BarChart3,
  Monitor,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

const OurWork = dynamic(() => import("@/components/Recentwork"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[260px] items-center justify-center bg-black text-sm text-white">
      Loading our work...
    </div>
  ),
});

/* =========================================================
   TYPES
========================================================= */

interface TeamMember {
  name: string;
  role?: string;
  description?: string;
  image: string;
}

interface StoryItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

interface CultureItem {
  title: string;
  description: string;
  image: string;
}

interface AchievementItem {
  title: string;
  description: string;
  image: string;
}

interface IndustryItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

interface BlogItem {
  date: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
  readTime: string;
}

interface SkillItem {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
}

/* =========================================================
   LINKEDIN ICON
   Custom SVG because lucide-react does not export LinkedIn.
========================================================= */

function LinkedInIcon({
  className = "h-5 w-5",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.997h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.289ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.559 20.452h3.558V8.997H3.559v11.455Z" />
    </svg>
  );
}

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* =========================================================
   DATA
========================================================= */

const values = [
  {
    number: "01",
    title: "Creativity",
    description:
      "We look for ideas that are relevant, distinctive and useful rather than creative work for the sake of appearance.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    number: "02",
    title: "Transparency",
    description:
      "Clear communication, clear expectations and clear reporting remain central to how we work with clients.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    number: "03",
    title: "Quality",
    description:
      "We pay attention to strategy, design, technology, content and execution at every stage of a project.",
    icon: <Trophy className="h-5 w-5" />,
  },
  {
    number: "04",
    title: "Accountability",
    description:
      "Every project needs ownership. We take responsibility for the work assigned to us and the process behind it.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    number: "05",
    title: "Communication",
    description:
      "Good communication keeps projects moving, reduces uncertainty and helps teams make better decisions.",
    icon: <MessageCircle className="h-5 w-5" />,
  },
  {
    number: "06",
    title: "Learning",
    description:
      "Digital changes constantly, so our team keeps learning, testing and adapting to new tools and behaviours.",
    icon: <Lightbulb className="h-5 w-5" />,
  },
];

const storyMilestones: StoryItem[] = [
  {
    year: "01",
    title: "The Beginning",
    description:
      "BIGBEANS DIGITAL began with a simple idea: businesses needed digital work that connected creativity with practical business objectives.",
    image: "/assets/about/story/story-01.webp",
  },
  {
    year: "02",
    title: "Building the Foundation",
    description:
      "The focus expanded across branding, digital marketing, social media, website development and creative communication.",
    image: "/assets/about/story/story-02.webp",
  },
  {
    year: "03",
    title: "Growing the Team",
    description:
      "Specialists across design, development, marketing and strategy came together to create a broader digital capability.",
    image: "/assets/about/story/story-03.webp",
  },
  {
    year: "04",
    title: "Working Across Markets",
    description:
      "Our work increasingly connected businesses with audiences across India and international markets.",
    image: "/assets/about/story/story-04.webp",
  },
  {
    year: "05",
    title: "Where We Are Today",
    description:
      "Today, BIGBEANS DIGITAL brings strategy, creativity, technology and marketing execution together under one digital team.",
    image: "/assets/about/story/story-05.webp",
  },
];

/* =========================================================
   FOUNDER
========================================================= */

const founder = {
  name: "Founder",
  role: "Founder & Business Leadership",
  description:
    "Building BIGBEANS DIGITAL with a focus on creative thinking, digital innovation, meaningful client relationships and long-term business growth.",
  image: "/assets/about/leadership/founder.webp",

  // Replace this with the actual Founder LinkedIn URL.
  linkedin: "https://www.linkedin.com/",
};

/* =========================================================
   TEAM 01 — CREATIVE
========================================================= */

const creativeTeam: TeamMember[] = [
  {
    name: "Creative Bean 01",
    image: "/assets/about/teams/creative-01.webp",
  },
  {
    name: "Creative Bean 02",
    image: "/assets/about/teams/creative-02.webp",
  },
  {
    name: "Creative Bean 03",
    image: "/assets/about/teams/creative-03.webp",
  },
  {
    name: "Creative Bean 04",
    image: "/assets/about/teams/creative-04.webp",
  },
  {
    name: "Creative Bean 05",
    image: "/assets/about/teams/creative-05.webp",
  },
];

/* =========================================================
   TEAM 02 — DEVELOPMENT
========================================================= */

const developmentTeam: TeamMember[] = [
  {
    name: "Tech Bean 01",
    image: "/assets/about/teams/development-01.webp",
  },
  {
    name: "Tech Bean 02",
    image: "/assets/about/teams/development-02.webp",
  },
  {
    name: "Tech Bean 03",
    image: "/assets/about/teams/development-03.webp",
  },
  {
    name: "Tech Bean 04",
    image: "/assets/about/teams/development-04.webp",
  },
  {
    name: "Tech Bean 05",
    image: "/assets/about/teams/development-05.webp",
  },
];

/* =========================================================
   TEAM 03 — MARKETING
========================================================= */

const marketingTeam: TeamMember[] = [
  {
    name: "Marketing Bean 01",
    image: "/assets/about/teams/marketing-01.webp",
  },
  {
    name: "Marketing Bean 02",
    image: "/assets/about/teams/marketing-02.webp",
  },
  {
    name: "Marketing Bean 03",
    image: "/assets/about/teams/marketing-03.webp",
  },
  {
    name: "Marketing Bean 04",
    image: "/assets/about/teams/marketing-04.webp",
  },
  {
    name: "Marketing Bean 05",
    image: "/assets/about/teams/marketing-05.webp",
  },
];

/* =========================================================
   GALLERY
========================================================= */

const galleryImages = [
  "/assets/about/gallery/gallery-01.webp",
  "/assets/about/gallery/gallery-02.webp",
  "/assets/about/gallery/gallery-03.webp",
  "/assets/about/gallery/gallery-04.webp",
  "/assets/about/gallery/gallery-05.webp",
  "/assets/about/gallery/gallery-06.webp",
  "/assets/about/gallery/gallery-07.webp",
  "/assets/about/gallery/gallery-08.webp",
  "/assets/about/gallery/gallery-09.webp",
  "/assets/about/gallery/gallery-10.webp",
];

/* =========================================================
   SKILLS
========================================================= */

const skills: SkillItem[] = [
  {
    title: "Branding",
    description:
      "Brand strategy, identity systems, visual language and brand communication.",
    icon: <Palette className="h-5 w-5" />,
    href: "/services/branding",
  },
  {
    title: "UI / UX",
    description:
      "User-focused interfaces and digital experiences designed around clarity and usability.",
    icon: <Layers3 className="h-5 w-5" />,
    href: "/services/website-development",
  },
  {
    title: "Web Development",
    description:
      "Responsive websites and digital platforms built around performance and functionality.",
    icon: <Code2 className="h-5 w-5" />,
    href: "/services/website-development",
  },
  {
    title: "2D / 3D Design",
    description:
      "Visual design, campaign assets, motion-led concepts and three-dimensional creative work.",
    icon: <PenTool className="h-5 w-5" />,
    href: "/services/branding",
  },
  {
    title: "SEO",
    description:
      "Search-focused content, technical improvements and organic visibility strategies.",
    icon: <Search className="h-5 w-5" />,
    href: "/services",
  },
  {
    title: "Social Media",
    description:
      "Content, creative direction, audience communication and social media strategy.",
    icon: <Megaphone className="h-5 w-5" />,
    href: "/services/social-media-marketing",
  },
  {
    title: "Performance Marketing",
    description:
      "Paid campaigns, audience targeting, optimisation and performance-focused execution.",
    icon: <BarChart3 className="h-5 w-5" />,
    href: "/services/google-ads-meta-ads",
  },
  {
    title: "Content",
    description:
      "Strategic content designed to communicate clearly across digital channels.",
    icon: <MessageCircle className="h-5 w-5" />,
    href: "/services",
  },
  {
    title: "Technology",
    description:
      "Digital tools, platforms and development capabilities that support modern businesses.",
    icon: <Monitor className="h-5 w-5" />,
    href: "/services/website-development",
  },
];

/* =========================================================
   CULTURE
========================================================= */

const cultureImages: CultureItem[] = [
  {
    title: "Collaborative Thinking",
    description:
      "Different disciplines come together before important project decisions are made.",
    image: "/assets/about/culture/culture-01.webp",
  },
  {
    title: "Project Discussions",
    description:
      "Ideas, priorities and execution details are discussed openly across the team.",
    image: "/assets/about/culture/culture-02.webp",
  },
  {
    title: "Creative Sessions",
    description:
      "Design and creative teams work through concepts, references and visual directions.",
    image: "/assets/about/culture/culture-03.webp",
  },
  {
    title: "Learning Together",
    description:
      "The team shares knowledge about new tools, platforms, technologies and marketing changes.",
    image: "/assets/about/culture/culture-04.webp",
  },
  {
    title: "Team Moments",
    description:
      "Professional relationships also grow through informal team interactions and shared moments.",
    image: "/assets/about/culture/culture-05.webp",
  },
  {
    title: "Getting Work Done",
    description:
      "The culture remains focused on execution, communication, quality and moving projects forward.",
    image: "/assets/about/culture/culture-06.webp",
  },
];

/* =========================================================
   ACHIEVEMENTS
========================================================= */

const achievementImages: AchievementItem[] = [
  {
    title: "Building New Capabilities",
    description:
      "Expanding our capabilities across creative, marketing and technology.",
    image: "/assets/about/achievements/achievement-01.webp",
  },
  {
    title: "Growing Client Relationships",
    description:
      "Building long-term working relationships through consistent communication and delivery.",
    image: "/assets/about/achievements/achievement-02.webp",
  },
  {
    title: "Expanding Digital Services",
    description:
      "Bringing more digital capabilities together under one team.",
    image: "/assets/about/achievements/achievement-03.webp",
  },
  {
    title: "Working Across Industries",
    description:
      "Learning from projects across different business categories and markets.",
    image: "/assets/about/achievements/achievement-04.webp",
  },
  {
    title: "Continuing to Grow",
    description:
      "Continuing to improve our people, processes, creativity and technology.",
    image: "/assets/about/achievements/achievement-05.webp",
  },
];

/* =========================================================
   INDUSTRIES
========================================================= */

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

/* =========================================================
   BLOG
========================================================= */

const blogCards: BlogItem[] = [
  {
    date: "September 2026",
    category: "Digital Marketing",
    title: "How Digital Marketing Is Changing Business Growth",
    description:
      "Understanding how strategy, content, technology and performance work together in modern digital marketing.",
    image: "/blog/digital-marketing.webp",
    href: "/blog",
    readTime: "6 min read",
  },
  {
    date: "September 2026",
    category: "Branding",
    title: "Why Strong Branding Matters in a Digital-First Market",
    description:
      "A practical look at how brand identity influences recognition, communication and customer experience.",
    image: "/blog/branding.webp",
    href: "/blog",
    readTime: "5 min read",
  },
  {
    date: "August 2026",
    category: "Technology",
    title: "What Businesses Should Expect From Modern Websites",
    description:
      "Exploring the role of design, performance, mobile experience and technology in business websites.",
    image: "/blog/website.webp",
    href: "/blog",
    readTime: "7 min read",
  },
];

/* =========================================================
   FAQ
========================================================= */

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`bg-black py-16 sm:py-20 lg:py-24 ${className}`}
      style={{ backgroundColor: "#000000" }}
    >
      {children}
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-4xl"
      }
    >
      <div
        className={`mb-3 flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-[#F8BC04]" />

        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F8BC04]">
          {eyebrow}
        </span>
      </div>

      <h2 className="text-3xl font-black leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-white/65 sm:text-[15px]">
          {description}
        </p>
      )}
    </motion.div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full bg-[#F8BC04] px-5 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-white"
    >
      {children}

      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
    </Link>
  );
}

function OutlineButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-[#F8BC04] hover:text-[#F8BC04]"
    >
      {children}

      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

/* =========================================================
   FAQ ITEM
========================================================= */

/* =========================================================
   CONTINUOUS TEAM MARQUEE
========================================================= */

function TeamMarquee({
  members,
  title,
  eyebrow,
}: {
  members: TeamMember[];
  title: string;
  eyebrow: string;
}) {
  /*
   * Duplicate the cards so the animation can continuously
   * move from LEFT -> RIGHT without an empty space.
   */

  const marqueeMembers = [...members, ...members, ...members];

  return (
    <div className="overflow-hidden">
      <div className="mb-8 flex items-end justify-between gap-5 px-1">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F8BC04]">
            {eyebrow}
          </p>

          <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
            {title}
          </h3>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max gap-3"
          initial={{ x: "-33.333%" }}
          animate={{
            x: ["-33.333%", "0%"],
          }}
          transition={{
            duration: 22,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {marqueeMembers.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="group w-[145px] shrink-0 overflow-hidden border border-white/15 bg-black sm:w-[165px] md:w-[180px]"
            >
              <div className="relative aspect-[4/4.5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="180px"
                />
              </div>

              <div className="border-t border-white/10 px-3 py-3">
                <p className="truncate text-[11px] font-bold text-white">
                  {member.name}
                </p>

                <div className="mt-1 h-px w-5 bg-[#F8BC04] transition-all duration-300 group-hover:w-10" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* =========================================================
   GALLERY SLIDER
========================================================= */

function AutoImageSlider({
  images,
  interval = 5000,
}: {
  images: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative overflow-hidden border border-white/15 bg-black">
      <div className="relative aspect-[16/8]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`BIGBEANS DIGITAL gallery image ${index + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span className="border border-white/20 bg-black px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </span>

        <div className="flex gap-1.5">
          {images.map((_, imageIndex) => (
            <span
              key={imageIndex}
              className={`h-1 rounded-full transition-all duration-300 ${
                imageIndex === index
                  ? "w-7 bg-[#F8BC04]"
                  : "w-2 bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ACHIEVEMENT SLIDER
========================================================= */

function AchievementSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % achievementImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const item = achievementImages[index];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
      <div className="relative overflow-hidden border border-white/15">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.image}
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -35 }}
            transition={{ duration: 0.55 }}
            className="relative aspect-[16/10]"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center bg-[#F8BC04] text-black">
            <Trophy className="h-5 w-5" />
          </div>

          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F8BC04]">
            Milestone {String(index + 1).padStart(2, "0")}
          </p>

          <h3 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
            {item.title}
          </h3>

          <p className="mt-5 text-sm leading-7 text-white/60">
            {item.description}
          </p>

          <div className="mt-7 flex gap-1.5">
            {achievementImages.map((_, itemIndex) => (
              <span
                key={itemIndex}
                className={`h-1 rounded-full transition-all duration-300 ${
                  itemIndex === index
                    ? "w-8 bg-[#F8BC04]"
                    : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main
      className="min-h-screen overflow-hidden bg-black text-white"
      style={{ backgroundColor: "#000000" }}
    >
      {/* =====================================================
          01 — BREADCRUMB
      ===================================================== */}

      <section className="bg-black pt-28 sm:pt-32">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs text-white/55"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#F8BC04]"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-white">About Us</span>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          02 — HERO
      ===================================================== */}

      <section className="relative bg-black pb-20 pt-10 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#F8BC04]"
              >
                About BIGBEANS DIGITAL
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="max-w-5xl text-[clamp(3.2rem,8vw,8rem)] font-black uppercase leading-[0.86] tracking-[-0.065em] text-white"
              >
                We make
                <br />
                <span className="font-serif font-normal italic text-[#F8BC04]">
                  digital
                </span>{" "}
                make sense.
              </motion.h1>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              className="lg:pb-2"
            >
              <div className="border-l border-[#F8BC04] pl-5 sm:pl-7">
                <p className="text-sm leading-7 text-white/65 sm:text-[15px]">
                  BIGBEANS DIGITAL is a digital marketing, branding,
                  technology and creative agency working with businesses that
                  want clearer digital direction and stronger communication.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Strategy",
                    "Branding",
                    "Marketing",
                    "Technology",
                    "Creative",
                  ].map((item) => (
                    <span
                      key={item}
                      className="border border-white/20 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 h-px origin-left bg-[#F8BC04] sm:mt-16"
          />
        </div>
      </section>

      {/* =====================================================
          03 — WHO WE ARE
      ===================================================== */}

      <Section>
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative overflow-hidden border border-white/15">
                <Image
                  src="/assets/about/company/company-introduction.webp"
                  alt="BIGBEANS DIGITAL team"
                  width={1000}
                  height={850}
                  className="h-auto w-full object-cover transition duration-700 hover:scale-[1.03]"
                />

                <div className="absolute bottom-0 left-0 bg-[#F8BC04] px-5 py-4 text-black">
                  <p className="text-2xl font-black">BIGBEANS</p>

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
                    Digital
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeUp}>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F8BC04]">
                  Who We Are
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                  A digital team built around{" "}
                  <span className="font-serif font-normal italic text-[#F8BC04]">
                    ideas and execution.
                  </span>
                </h2>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mt-6 text-sm leading-7 text-white/65 sm:text-[15px]"
              >
                BIGBEANS DIGITAL works across digital marketing, branding,
                website development, social media, performance marketing,
                creative design, content and technology.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-sm leading-7 text-white/65 sm:text-[15px]"
              >
                We work with businesses and organisations that need to
                communicate more clearly, build stronger digital experiences,
                reach the right audiences and create a more connected online
                presence.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-sm leading-7 text-white/65 sm:text-[15px]"
              >
                Instead of treating every digital requirement as an isolated
                activity, we look at the relationship between strategy,
                creativity, marketing and technology.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <PrimaryButton href="/services">
                  Explore Our Services
                </PrimaryButton>

                <OutlineButton href="/connect">
                  Talk To Our Team
                </OutlineButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* =====================================================
          04 — OUR STORY
      ===================================================== */}

      <Section>
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Our Story"
            title={
              <>
                From an idea to a growing{" "}
                <span className="font-serif font-normal italic text-[#F8BC04]">
                  digital team.
                </span>
              </>
            }
            description="Our story is a continuing process of building capabilities, learning from projects and bringing different digital disciplines closer together."
          />

          <div className="relative mt-14">
            <div className="absolute left-[19px] top-0 hidden h-full w-px bg-white/15 md:block" />

            <div className="space-y-10 md:space-y-12">
              {storyMilestones.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                  }}
                  className="grid gap-6 md:grid-cols-[40px_0.7fr_1.3fr] md:gap-8"
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#F8BC04] bg-black text-[10px] font-black text-[#F8BC04]">
                    {item.year}
                  </div>

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F8BC04]">
                      Stage {item.year}
                    </p>

                    <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/60">
                      {item.description}
                    </p>
                  </div>

                  <div className="relative overflow-hidden border border-white/15">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1000}
                      height={600}
                      className="aspect-[16/8] w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* =====================================================
          05 — VALUES
      ===================================================== */}

      <Section>
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="What We Believe In"
            title={
              <>
                The principles behind{" "}
                <span className="font-serif font-normal italic text-[#F8BC04]">
                  our work.
                </span>
              </>
            }
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3"
          >
            {values.map((value) => (
              <motion.div
                key={value.number}
                variants={fadeUp}
                className="group bg-black p-6 transition-colors duration-300 hover:bg-[#F8BC04]"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-10 w-10 items-center justify-center border border-white/20 text-[#F8BC04] transition-colors group-hover:border-black group-hover:text-black">
                    {value.icon}
                  </div>

                  <span className="text-xs font-bold text-white/30 group-hover:text-black/50">
                    {value.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-black text-white group-hover:text-black">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55 group-hover:text-black/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* =====================================================
          06 — FOUNDER
      ===================================================== */}

      <Section>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Founder"
            title={
              <>
                The person behind{" "}
                <span className="font-serif font-normal italic text-[#F8BC04]">
                  BIGBEANS DIGITAL.
                </span>
              </>
            }
            description="The vision, direction and people behind BIGBEANS DIGITAL continue to shape how we approach digital work."
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto mt-12 max-w-5xl overflow-hidden border border-white/15 bg-black"
          >
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              {/* Founder Image */}

              <div className="relative min-h-[420px] overflow-hidden sm:min-h-[500px]">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover transition duration-1000 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center border border-[#F8BC04] bg-black px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F8BC04]">
                    Founder
                  </span>
                </div>
              </div>

              {/* Founder Details */}

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#F8BC04]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F8BC04]">
                    Leadership
                  </span>
                </div>

                <h3 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
                  {founder.name}
                </h3>

                <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                  {founder.role}
                </p>

                <p className="mt-7 max-w-xl text-sm leading-8 text-white/60 sm:text-[15px]">
                  {founder.description}
                </p>

                <div className="mt-9">
                  <Link
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Founder LinkedIn profile"
                    className="group inline-flex items-center gap-3 border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-[#F8BC04] hover:bg-[#F8BC04] hover:text-black"
                  >
                    <LinkedInIcon className="h-5 w-5" />

                    <span>Connect on LinkedIn</span>

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* =====================================================
          07 — CREATIVE TEAM
      ===================================================== */}

      <Section>
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <TeamMarquee
            members={creativeTeam}
            eyebrow="Team 01"
            title="Our Creative & Design Team"
          />
        </div>
      </Section>

      {/* =====================================================
          08 — DEVELOPMENT TEAM
      ===================================================== */}

      <Section>
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <TeamMarquee
            members={developmentTeam}
            eyebrow="Team 02"
            title="Our Development & Technology Team"
          />
        </div>
      </Section>

      {/* =====================================================
          09 — MARKETING TEAM
      ===================================================== */}

      <Section>
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <TeamMarquee
            members={marketingTeam}
            eyebrow="Team 03"
            title="Our Marketing & Strategy Team"
          />
        </div>
      </Section>

      {/* =====================================================
          10 — 10 IMAGE SLIDER
      ===================================================== */}

      <Section>
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Inside BIGBEANS"
            title={
              <>
                A glimpse of{" "}
                <span className="font-serif font-normal italic text-[#F8BC04]">
                  our world.
                </span>
              </>
            }
          />

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mt-12"
          >
            <AutoImageSlider images={galleryImages} interval={5000} />
          </motion.div>
        </div>
      </Section>

      {/* =====================================================
          11 — SKILLS & EXPERTISE
      ===================================================== */}

      <Section>
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Skills & Expertise"
            title={
              <>
                Different capabilities.{" "}
                <span className="font-serif font-normal italic text-[#F8BC04]">
                  One team.
                </span>
              </>
            }
            description="Our capabilities cover the strategic, creative, marketing and technology requirements involved in building a stronger digital presence."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={fadeUp}
                className="group border border-white/15 p-5 transition-all duration-300 hover:border-[#F8BC04]"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#F8BC04] text-black">
                    {skill.icon}
                  </div>

                  <span className="text-[10px] font-bold text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-black text-white">
                  {skill.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  {skill.description}
                </p>

                <Link
                  href={skill.href}
                  className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#F8BC04]"
                >
                  Explore

                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* =====================================================
          12 — CULTURE
      ===================================================== */}

      <Section>
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Our Culture"
            title={
              <>
                How we work when{" "}
                <span className="font-serif font-normal italic text-[#F8BC04]">
                  nobody is watching.
                </span>
              </>
            }
            description="Our working environment is built around collaboration, communication, learning and getting projects delivered properly."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {cultureImages.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={`group overflow-hidden border border-white/15 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative ${
                    index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"
                  } overflow-hidden`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes={
                      index === 0
                        ? "(max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 640px) 100vw, 33vw"
                    }
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-black p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F8BC04]">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-1 text-lg font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-xs leading-6 text-white/55">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* =====================================================
          13 — ACHIEVEMENTS
      ===================================================== */}

      <Section>
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Team Achievements & Milestones"
            title={
              <>
                Progress is a collection of{" "}
                <span className="font-serif font-normal italic text-[#F8BC04]">
                  small wins.
                </span>
              </>
            }
          />

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mt-12"
          >
            <AchievementSlider />
          </motion.div>
        </div>
      </Section>

      {/* =====================================================
          14 — OUR RECENT WORK
      ===================================================== */}

      <Section>
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Our Recent Work"
            title={
              <>
                Work that turns{" "}
                <span className="font-serif font-normal italic text-[#F8BC04]">
                  ideas into outcomes.
                </span>
              </>
            }
            description="Explore selected work from across our creative, marketing, branding and digital capabilities."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="mt-12 overflow-hidden border border-white/15 bg-black p-2 sm:p-4"
          >
            <OurWork />
          </motion.div>

          <div className="mt-8 flex justify-center">
            <PrimaryButton href="/our-work">
              Know More About Our Work
            </PrimaryButton>
          </div>
        </div>
      </Section>

      {/* =========================================================================
    INDUSTRIES WE WORKED WITH SECTION
    ========================================================================= */}
<section className="relative z-10 py-5 sm:py-20">
  <div className="mx-auto max-w-[1550px] px-4 sm:px-8 lg:px-12">
    <div className="grid grid-cols-1 items-start gap-8 lg:gap-10 xl:grid-cols-12">

      {/* =========================
          LEFT COLUMN — INDUSTRIES
      ========================== */}
      <div className="flex flex-col justify-start xl:sticky xl:top-28 xl:col-span-3">
        <h2 className="mt-4 text-2xl font-bold leading-[1.05] sm:mt-5 sm:text-4xl md:text-5xl">
          <span className="block text-white">Industries</span>
          <span className="highlight-font block text-[#F8BC04]">We</span>
          <span className="highlight-font block text-[#F8BC04]">worked</span>
          <span className="highlight-font block text-[#F8BC04]">with</span>
        </h2>

        <div className="mb-4 mt-4 h-1 w-14 rounded-full bg-[#F8BC04] sm:mb-5 sm:mt-6" />

        <p className="!text-[18px] text-sm font-medium leading-snug text-white/70 sm:text-base">
          Different industries.
          <br />
          Real impact.
        </p>
      </div>

      {/* =========================
          RIGHT COLUMN — INDUSTRY CARDS
      ========================== */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:col-span-9">
        {industries.map((ind) => (
          <div
            key={ind.title}
            className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] p-5 shadow-xl transition-all duration-300 hover:border-[#F8BC04]/50 sm:min-h-[340px] sm:rounded-3xl sm:p-6"
          >
            {/* Background Image & Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={ind.image}
                alt={ind.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                className="object-cover object-center brightness-75 transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/30" />
            </div>

            {/* Card Top Spacer */}
            <div className="relative z-10" />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col justify-end pt-24 sm:pt-28">
              <h3 className="text-base font-extrabold leading-snug text-white transition-colors group-hover:text-[#F8BC04] sm:text-lg">
                {ind.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-white/70 sm:text-[13px]">
                {ind.description}
              </p>

              {/* Know More Button */}
              <div className="mt-4 flex justify-end sm:mt-5">
                <Link
                  href={ind.href}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#F8BC04] px-4 py-2 text-xs font-extrabold tracking-tight text-black shadow-[0_0_15px_rgba(248,188,4,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(248,188,4,0.5)] active:scale-95 sm:px-5 sm:text-sm"
                >
                  <span>Know More</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* ==================================================
      CASE STUDIES SECTION
  =================================================== */}
  <div className="mx-auto max-w-[1600px] py-10">

    {/* Section Heading */}
    <div className="mx-auto mb-12 max-w-[1600px] px-4 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Case Studies
      </h2>

      <p className="mt-4 text-center text-base leading-6 text-white/100 sm:text-lg">
        Explore how our digital marketing agency engineers data-driven
        strategies that scale early-stage startups and established businesses.
        From lowering customer acquisition costs to multiplying qualified
        leads, see how our performance marketing agency delivers measurable
        return on investment through real-world client success stories.
      </p>
    </div>

    {/* =========================
        FEATURE CASE STUDY CARDS
    ========================== */}
    <div className="grid grid-cols-1 gap-5 px-4 md:grid-cols-3">

      {/* =========================
          CASE STUDY 1 — ADORING INDIA
      ========================== */}
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
            We partnered with Adoring India, an NGO dedicated to supporting
            school students, to build digital visibility and expand their
            community impact. By leveraging data-driven storytelling and
            targeted outreach campaigns, our digital marketing agency helped
            increase volunteer engagement, boost corporate sponsorship
            inquiries, and scale their educational awareness initiatives
            across major digital platforms.
          </p>

          <a
            href="https://www.bigbeansdigital.com"
            className="mt-6 inline-flex min-w-[120px] items-center justify-center rounded-[3px] bg-[#F8BC04] px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white"
          >
            Know More
          </a>
        </div>
      </div>

      {/* =========================
          CASE STUDY 2 — GUPSHUP BHARAT
      ========================== */}
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
            To establish Gupshup India as the premier news agency in Tripura,
            we designed an agile content and distribution strategy focused on
            instant reader retention and search visibility. Functioning as
            their growth partner, our social media marketing agency optimized
            news distribution pipelines, expanding their daily reader reach
            and boosting cross-platform audience engagement across regional
            markets.
          </p>

          <a
            href="https://www.bigbeansdigital.com"
            className="mt-6 inline-flex min-w-[120px] items-center justify-center rounded-[3px] bg-[#F8BC04] px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white"
          >
            Know More
          </a>
        </div>
      </div>

      {/* =========================
          CASE STUDY 3 — ENTIMESSI
      ========================== */}
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
            For Entimessi, a premium female lingerie brand, we built an
            end-to-end sales engine focused on customer acquisition and brand
            authority. By uniting high-converting visual ad creatives with
            precise audience targeting, our performance marketing agency
            lowered customer acquisition costs (CAC) and maximized return on
            ad spend (ROAS) while scaling direct website sales.
          </p>

          <a
            href="https://www.bigbeansdigital.com"
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
          Stay Ahead with{" "}
          <span className="font-serif italic font-normal text-[#F8BC04]">
            Our Insights
          </span>
        </h2>

        <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-white/60 leading-relaxed">
          Actionable playbooks covering high-converting organic reach, branding turnarounds, and performance marketing shifts.
        </p>

      </div>

      <Link
        href="/blog"
        className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-5 py-3 rounded-full hover:border-[#F8BC04] hover:text-[#F8BC04] transition-colors self-start md:self-auto"
      >
        Browse All Articles
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

      {blogCards.map((blog, index) => (
        <Link
          key={`blog-${index}-${blog.title}`}
          href={blog.href}
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
                {blog.category}
              </span>
            </div>

            <span className="absolute bottom-3 right-3 sm:right-4 text-[10px] sm:text-[11px] font-medium text-white/70">
              {blog.readTime}
            </span>

          </div>

          <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">

            <div>

              <span className="text-[10px] sm:text-[11px] text-white/40 block mb-1.5">
                {blog.date}
              </span>

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
            Empowering Brands Across{" "}
            <span className="font-serif italic font-normal text-[#F8BC04]">
              12+ Global Hubs
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-white/60 leading-relaxed">
            Headquartered in India with strategic partner nodes across London, North America, Singapore, and Australia. We engineer hyper-localized growth campaigns tailored to diverse consumer behaviors.
          </p>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/10 pt-5 sm:pt-6">

            <div>

              <h4 className="text-xs sm:text-sm font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F8BC04]" />
                India Operations
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
                <span className="h-1.5 w-1.5 rounded-full bg-[#F8BC04]" />
                International Operations
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

    {/* CTA BUTTONS */}
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
        Quick WhatsApp Chat

        <ExternalLink className="w-4 h-4 text-white/60" />
      </Link>

    </div>

    {/* ==================================================
        SERVICE LINKS BELOW CTA BUTTONS
    =================================================== */}
    <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-xs text-white/40">

      <Link
        href="/branding"
        className="transition-colors hover:text-[#F8BC04]"
      >
        Branding
      </Link>

      <span>
        •
      </span>

      <Link
        href="/seo"
        className="transition-colors hover:text-[#F8BC04]"
      >
        SEO
      </Link>

      <span>
        •
      </span>

      <Link
        href="/website-development"
        className="transition-colors hover:text-[#F8BC04]"
      >
        Website Development
      </Link>

      <span>
        •
      </span>

      <Link
        href="/performance-marketing"
        className="transition-colors hover:text-[#F8BC04]"
      >
        Performance Marketing
      </Link>

    </div>

  </div>
</section>
    </main>
  );
}