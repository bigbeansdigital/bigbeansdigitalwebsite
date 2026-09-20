"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  ExternalLink,
  Search,
  Lightbulb,
  PenTool,
  Layers3,
  Palette,
  Type,
  Shapes,
  Sparkles,
  CheckCircle2,
  RefreshCw,
  FileDown,
  Monitor,
  Smartphone,
  Package,
  ShoppingBag,
  Shirt,
  Globe2,
  BriefcaseBusiness,
  Target,
  Eye,
  Compass,
  MousePointerClick,
  LayoutGrid,
  BadgeCheck,
  Boxes,
  Printer,
  Tablet,
  Building2,
  FileText,
} from "lucide-react";

const OurWork = dynamic(() => import("@/components/Recentwork"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[300px] w-full animate-pulse rounded-2xl bg-white/[0.02]" />
  ),
});

interface FAQ {
  q: string;
  a: string;
}

interface LogoProject {
  id: number;
  name: string;
  industry: string;
  style: string;
  image: string;
  alt: string;
}

interface LogoStyle {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ReactNode;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ApplicationItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ReactNode;
}

interface AssetItem {
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

interface BlogCard {
  id: number;
  image: string;
  date: string;
  primaryCategory: string;
  title: string;
  description: string;
  link: string;
  readTime: string;
}

interface TechnologyLogo {
  name: string;
  image: string;
  alt: string;
}

interface MapPosition {
  top: string;
  left: string;
}

const logoProjects: LogoProject[] = [
  {
    id: 1,
    name: "Aster House",
    industry: "Real Estate",
    style: "Combination Mark",
    image: "/assets/logo-design/portfolio/logo-01.webp",
    alt: "Aster House real estate logo design",
  },
  {
    id: 2,
    name: "Northline",
    industry: "Technology",
    style: "Wordmark",
    image: "/assets/logo-design/portfolio/logo-02.webp",
    alt: "Northline technology wordmark logo design",
  },
  {
    id: 3,
    name: "Mora",
    industry: "Beauty & Wellness",
    style: "Monogram",
    image: "/assets/logo-design/portfolio/logo-03.webp",
    alt: "Mora beauty monogram logo design",
  },
  {
    id: 4,
    name: "Forge & Field",
    industry: "Manufacturing",
    style: "Emblem",
    image: "/assets/logo-design/portfolio/logo-04.webp",
    alt: "Forge and Field manufacturing emblem logo",
  },
  {
    id: 5,
    name: "Luma Table",
    industry: "Food & Hospitality",
    style: "Symbol Mark",
    image: "/assets/logo-design/portfolio/logo-05.webp",
    alt: "Luma Table hospitality symbol logo",
  },
  {
    id: 6,
    name: "Kite Studio",
    industry: "Creative Services",
    style: "Lettermark",
    image: "/assets/logo-design/portfolio/logo-06.webp",
    alt: "Kite Studio creative services lettermark logo",
  },
  {
    id: 7,
    name: "Velo Works",
    industry: "Automotive",
    style: "Wordmark",
    image: "/assets/logo-design/portfolio/logo-07.webp",
    alt: "Velo Works automotive wordmark logo",
  },
  {
    id: 8,
    name: "Little Orbit",
    industry: "Education",
    style: "Mascot",
    image: "/assets/logo-design/portfolio/logo-08.webp",
    alt: "Little Orbit education mascot logo",
  },
];

const logoStyles: LogoStyle[] = [
  {
    id: "wordmark",
    name: "Wordmark",
    description: "The brand name becomes the primary visual identity through distinctive typography and spacing.",
    image: "/assets/logo-design/styles/wordmark.webp",
    alt: "Wordmark logo design example",
    icon: <Type className="h-5 w-5" />,
  },
  {
    id: "lettermark",
    name: "Lettermark",
    description: "Initials are shaped into a compact identity for brands that need a concise visual signature.",
    image: "/assets/logo-design/styles/lettermark.webp",
    alt: "Lettermark logo design example",
    icon: <PenTool className="h-5 w-5" />,
  },
  {
    id: "monogram",
    name: "Monogram",
    description: "Letters are combined into a distinctive mark with a more crafted and recognisable form.",
    image: "/assets/logo-design/styles/monogram.webp",
    alt: "Monogram logo design example",
    icon: <Shapes className="h-5 w-5" />,
  },
  {
    id: "symbol",
    name: "Symbol Mark",
    description: "A standalone graphic represents the brand and can work independently from the name.",
    image: "/assets/logo-design/styles/symbol-mark.webp",
    alt: "Symbol mark logo design example",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    id: "combination",
    name: "Combination Mark",
    description: "A symbol and wordmark are designed to work together as one flexible identity system.",
    image: "/assets/logo-design/styles/combination-mark.webp",
    alt: "Combination mark logo design example",
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    id: "emblem",
    name: "Emblem",
    description: "Typography and graphic elements are contained within a unified badge or seal-like form.",
    image: "/assets/logo-design/styles/emblem.webp",
    alt: "Emblem logo design example",
    icon: <BadgeCheck className="h-5 w-5" />,
  },
  {
    id: "mascot",
    name: "Mascot",
    description: "A character-led identity gives the brand a recognisable personality for suitable audiences.",
    image: "/assets/logo-design/styles/mascot.webp",
    alt: "Mascot logo design example",
    icon: <Eye className="h-5 w-5" />,
  },
];

const discoverySteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, audience, offer and ambition.",
    icon: <Compass className="h-5 w-5" />,
  },
  {
    number: "02",
    title: "Research",
    description: "Study competitors, category codes and visual opportunities.",
    icon: <Search className="h-5 w-5" />,
  },
  {
    number: "03",
    title: "Concept",
    description: "Turn the brand strategy into focused creative directions.",
    icon: <Lightbulb className="h-5 w-5" />,
  },
  {
    number: "04",
    title: "Design",
    description: "Build the selected direction into a clear logo system.",
    icon: <PenTool className="h-5 w-5" />,
  },
  {
    number: "05",
    title: "Refine",
    description: "Review details, proportions, typography and practical use.",
    icon: <RefreshCw className="h-5 w-5" />,
  },
  {
    number: "06",
    title: "Finalise",
    description: "Prepare the approved identity and usage-ready assets.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
];

const logoProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Brand Brief",
    description: "Understand the business, audience and requirements.",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    number: "02",
    title: "Research",
    description: "Study the market, competitors and visual direction.",
    icon: <Search className="h-5 w-5" />,
  },
  {
    number: "03",
    title: "Concept Development",
    description: "Develop initial logo concepts and creative routes.",
    icon: <Lightbulb className="h-5 w-5" />,
  },
  {
    number: "04",
    title: "Presentation",
    description: "Present selected concepts with clear design reasoning.",
    icon: <Monitor className="h-5 w-5" />,
  },
  {
    number: "05",
    title: "Refinement",
    description: "Make revisions based on feedback and practical needs.",
    icon: <RefreshCw className="h-5 w-5" />,
  },
  {
    number: "06",
    title: "Final Delivery",
    description: "Prepare approved logo files and required variations.",
    icon: <FileDown className="h-5 w-5" />,
  },
];

const applications: ApplicationItem[] = [
  {
    id: "business-card",
    title: "Business Cards",
    description: "A logo system that stays clear and balanced in small print applications.",
    image: "/assets/logo-design/applications/business-card.webp",
    alt: "Logo applied to business card mockup",
    icon: <BriefcaseBusiness className="h-5 w-5" />,
  },
  {
    id: "packaging",
    title: "Packaging",
    description: "Brand marks designed to work across packs, boxes, labels and product surfaces.",
    image: "/assets/logo-design/applications/packaging.webp",
    alt: "Logo applied to packaging mockup",
    icon: <Package className="h-5 w-5" />,
  },
  {
    id: "website",
    title: "Websites",
    description: "Digital-ready logos that remain legible across headers, pages and responsive layouts.",
    image: "/assets/logo-design/applications/website.webp",
    alt: "Logo applied to website mockup",
    icon: <Monitor className="h-5 w-5" />,
  },
  {
    id: "social",
    title: "Social Media",
    description: "Flexible marks and icons prepared for profile images, posts and digital campaigns.",
    image: "/assets/logo-design/applications/social-media.webp",
    alt: "Logo applied to social media mockup",
    icon: <Smartphone className="h-5 w-5" />,
  },
  {
    id: "signage",
    title: "Signage",
    description: "Identity systems that can scale from storefronts to environmental branding.",
    image: "/assets/logo-design/applications/signage.webp",
    alt: "Logo applied to signage mockup",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    id: "merchandise",
    title: "Merchandise",
    description: "Marks prepared to hold their shape across apparel and branded merchandise.",
    image: "/assets/logo-design/applications/merchandise.webp",
    alt: "Logo applied to merchandise mockup",
    icon: <Shirt className="h-5 w-5" />,
  },
];

const assetItems: AssetItem[] = [
  {
    title: "Primary Logo",
    description: "The main approved logo for everyday brand use.",
    image: "/assets/logo-design/assets/primary-logo.webp",
    alt: "Primary logo version presentation",
  },
  {
    title: "Secondary Logo",
    description: "A supporting lockup for alternate layouts and placements.",
    image: "/assets/logo-design/assets/secondary-logo.webp",
    alt: "Secondary logo version presentation",
  },
  {
    title: "Icon / Mark",
    description: "A compact mark for small or symbol-led applications.",
    image: "/assets/logo-design/assets/icon-mark.webp",
    alt: "Logo icon mark presentation",
  },
  {
    title: "Black Version",
    description: "A single-colour version for light backgrounds and print.",
    image: "/assets/logo-design/assets/black-version.webp",
    alt: "Black logo version presentation",
  },
  {
    title: "White Version",
    description: "A reversed version for dark backgrounds and selected applications.",
    image: "/assets/logo-design/assets/white-version.webp",
    alt: "White logo version presentation",
  },
  {
    title: "Colour Version",
    description: "The approved colour treatment for the primary brand expression.",
    image: "/assets/logo-design/assets/colour-version.webp",
    alt: "Colour logo version presentation",
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

const blogCards: BlogCard[] = [
  {
    id: 1,
    image: "/assets/blog/singleblogs/logo-design-guide.webp",
    date: "August 25, 2026",
    primaryCategory: "Logo Design",
    title: "What Makes a Good Logo Design?",
    description: "A practical look at clarity, distinctiveness, scalability, typography and brand fit.",
    link: "/blog/what-makes-a-good-logo-design",
    readTime: "7 min read",
  },
  {
    id: 2,
    image: "/assets/blog/singleblogs/logo-design-process.webp",
    date: "September 1, 2026",
    primaryCategory: "Branding",
    title: "How the Logo Design Process Works",
    description: "What happens from the first brand brief through concept development, refinement and delivery.",
    link: "/blog/logo-design-process",
    readTime: "6 min read",
  },
  {
    id: 3,
    image: "/assets/blog/singleblogs/logo-styles.webp",
    date: "September 8, 2026",
    primaryCategory: "Logo Design",
    title: "Which Logo Style Is Right for Your Brand?",
    description: "Understand wordmarks, monograms, symbols, combination marks, emblems and mascot identities.",
    link: "/blog/logo-styles-for-brands",
    readTime: "6 min read",
  },
];

const technologyRows: TechnologyLogo[][] = [
  [
    {
      name: "Adobe Illustrator",
      image: "/assets/technologies/adobe-illustrator.svg",
      alt: "Adobe Illustrator",
    },
    {
      name: "Adobe Photoshop",
      image: "/assets/technologies/adobe-photoshop.svg",
      alt: "Adobe Photoshop",
    },
    {
      name: "Adobe InDesign",
      image: "/assets/technologies/adobe-indesign.svg",
      alt: "Adobe InDesign",
    },
    {
      name: "Figma",
      image: "/assets/technologies/figma.svg",
      alt: "Figma",
    },
  ],
  [
    {
      name: "Adobe Creative Cloud",
      image: "/assets/technologies/adobe-creative-cloud.svg",
      alt: "Adobe Creative Cloud",
    },
    {
      name: "Canva",
      image: "/assets/technologies/canva.svg",
      alt: "Canva",
    },
    {
      name: "Procreate",
      image: "/assets/technologies/procreate.svg",
      alt: "Procreate",
    },
    {
      name: "Photoshop",
      image: "/assets/technologies/photoshop.svg",
      alt: "Photoshop",
    },
  ],
  [
    {
      name: "PDF",
      image: "/assets/technologies/pdf.svg",
      alt: "PDF",
    },
    {
      name: "SVG",
      image: "/assets/technologies/svg.svg",
      alt: "SVG",
    },
  ],
];

const mapPositions: MapPosition[] = [
  { top: "42%", left: "67%" },
  { top: "27%", left: "44%" },
  { top: "28%", left: "18%" },
  { top: "54%", left: "74%" },
  { top: "65%", left: "84%" },
];

const evolutionSlides = [
  {
    image: "/assets/logo-design/evolution/sketch.webp",
    title: "Initial Sketch",
    description: "Early visual thinking before the form is resolved.",
  },
  {
    image: "/assets/logo-design/evolution/concept-01.webp",
    title: "Concept 01",
    description: "The first structured direction built from the brand idea.",
  },
  {
    image: "/assets/logo-design/evolution/concept-02.webp",
    title: "Concept 02",
    description: "An alternate route explored to test the visual territory.",
  },
  {
    image: "/assets/logo-design/evolution/refined.webp",
    title: "Refined Logo",
    description: "Proportions, typography and details are tightened.",
  },
  {
    image: "/assets/logo-design/evolution/final.webp",
    title: "Final Identity",
    description: "The approved logo becomes a practical brand asset.",
  },
];

const logoFaqs: FAQ[] = [
  {
    q: "What is included in your logo design service?",
    a: "A logo project can include brand discovery, research, concept development, presentation, revisions and final delivery. The exact deliverables depend on the selected service scope.",
  },
  {
    q: "Do you create custom logos from scratch?",
    a: "Yes. The design direction is developed around the business, audience, positioning and practical requirements rather than selecting a generic template as the final identity.",
  },
  {
    q: "How many logo concepts will I receive?",
    a: "The number of concepts depends on the selected package and project scope. We define the concept and revision structure before the project begins.",
  },
  {
    q: "Can you redesign an existing logo?",
    a: "Yes. A logo redesign can preserve useful brand recognition while improving the visual system, proportions, typography, scalability or overall relevance of the identity.",
  },
  {
    q: "Can you design a complete brand identity along with the logo?",
    a: "Yes. Logo design can be expanded into a wider identity system covering colour, typography, basic guidelines and selected brand applications.",
  },
  {
    q: "Do you provide editable logo files?",
    a: "Final delivery can include editable and usage-ready formats such as AI, EPS, SVG and PDF, along with PNG and JPG versions where required.",
  },
  {
    q: "Will my logo work on social media and websites?",
    a: "The logo system is planned with different applications in mind. Suitable versions can be prepared for websites, social profiles, digital layouts and small-size use.",
  },
  {
    q: "Can the logo be used for packaging and print?",
    a: "Yes. Vector logo files can be prepared for print and production applications such as packaging, stationery, labels, signage and merchandise.",
  },
  {
    q: "How long does logo design take?",
    a: "The timeline depends on the scope, number of concepts, feedback cycles and project requirements. The delivery schedule is agreed before the project starts.",
  },
  {
    q: "How do I start a logo design project?",
    a: "Share your business details, target audience, preferred direction, existing brand assets and project requirements. We can then define the appropriate logo design scope.",
  },
];

function FAQItem({
  faq,
  index,
  openFaq,
  setOpenFaq,
}: {
  faq: FAQ;
  index: number;
  openFaq: number | null;
  setOpenFaq: (value: number | null) => void;
}) {
  const isOpen = openFaq === index;

  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20 sm:rounded-2xl">
      <button
        type="button"
        onClick={() => setOpenFaq(isOpen ? null : index)}
        className="flex min-h-[84px] w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
        aria-expanded={isOpen}
      >
        <span className="flex-1 font-bold text-white">{faq.q}</span>
        <span
          className={
            isOpen
              ? "flex h-7 w-7 shrink-0 rotate-45 items-center justify-center rounded-full border border-white/10 bg-[#F8BC04] text-xs font-bold text-black transition-transform duration-300 sm:h-8 sm:w-8 sm:text-sm"
              : "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-white/80 transition-transform duration-300 sm:h-8 sm:w-8 sm:text-sm"
          }
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
            <div className="border-t border-white/5 px-5 pb-5 pt-1 text-white/70 sm:px-6 sm:pb-6">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProcessTimeline({ steps, className = "" }: { steps: ProcessStep[]; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="logo-process-line" />
      <div className="logo-process-grid">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="relative z-10"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#F8BC04]/60 bg-black text-[#F8BC04] shadow-[0_0_0_8px_#000]">
              {step.icon}
            </div>
            <div className="mt-4 text-center text-[10px] font-black tracking-[0.16em] text-[#F8BC04]">
              {step.number}
            </div>
            <h3 className="mt-2 text-center font-bold text-white">{step.title}</h3>
            <p className="mx-auto mt-2 max-w-[180px] text-center text-xs leading-relaxed text-white/45">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function LogoDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const [activeStyle, setActiveStyle] = useState("wordmark");
  const [applicationIndex, setApplicationIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPortfolioIndex((current) => (current + 1) % logoProjects.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  // Automatically cycle through the logo style tabs every 3 seconds.
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStyle((current) => {
        const currentIndex = logoStyles.findIndex((style) => style.id === current);
        const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % logoStyles.length : 0;
        return logoStyles[nextIndex].id;
      });
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  // Automatically cycle through the brand application tabs every 3 seconds.
  useEffect(() => {
    const interval = window.setInterval(() => {
      setApplicationIndex((current) => (current + 1) % applications.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  const activeStyleData = logoStyles.find((style) => style.id === activeStyle) ?? logoStyles[0];
  const activeApplication = applications[applicationIndex];

  return (
    <main className="min-h-screen bg-black text-white [&_*]:box-border">
      <style>{`
        h1 { font-size: 50px !important; }
        h2 { font-size: 30px !important; }
        h3, h4, h5, h6 { font-size: 20px !important; }
        p { font-size: 20px !important; }
        h1, h2, h3, h4, h5, h6, p {
          font-family: Arial, Helvetica, sans-serif;
          letter-spacing: normal !important;
        }
        h1 .highlight-font, h2 .highlight-font, h3 .highlight-font,
        h4 .highlight-font, h5 .highlight-font, h6 .highlight-font {
          font-family: Georgia, "Times New Roman", serif !important;
          font-style: italic;
          font-weight: 400;
          letter-spacing: normal !important;
        }
        p { text-align: justify !important; text-align-last: left !important; }
        .logo-section { padding-top: 90px; padding-bottom: 90px; }
        .logo-hero-float { animation: logoHeroFloat 6s ease-in-out infinite; }
        @keyframes logoHeroFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(0.4deg); }
        }
        .logo-portfolio-track { animation: logoPortfolio 38s linear infinite; }
        @keyframes logoPortfolio {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-portfolio-wrapper:hover .logo-portfolio-track { animation-play-state: paused; }
        .logo-process-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 22px;
        }
        .logo-process-line {
          position: absolute;
          left: 8.5%;
          right: 8.5%;
          top: 28px;
          height: 1px;
          background: linear-gradient(90deg, rgba(248,188,4,.12), rgba(248,188,4,.55), rgba(248,188,4,.12));
        }
        .logo-evolution-stage {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 32px;
          background: radial-gradient(circle at 50% 25%, rgba(248,188,4,.09), transparent 42%), #080808;
        }
        .logo-evolution-stage::before {
          content: "";
          position: absolute;
          inset: 12%;
          border: 1px dashed rgba(255,255,255,.08);
          border-radius: 28px;
          pointer-events: none;
        }
        .logo-application-stage {
          position: relative;
          min-height: 540px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 30px;
          background: #090909;
        }
        .logo-asset-board {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        .logo-asset-card {
          min-height: 230px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 24px;
          overflow: hidden;
          background: #090909;
        }
        .logo-usp-card {
          aspect-ratio: 1 / 1;
        }
        .logo-style-image { transition: transform .5s ease; }
        .logo-style-card:hover .logo-style-image { transform: scale(1.04); }
        .logo-tech-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .logo-tech-item {
          display: flex;
          min-width: 0;
          align-items: center;
          gap: 20px;
          color: #fff;
        }
        .logo-tech-image-wrap {
          position: relative;
          width: 74px;
          height: 74px;
          flex: 0 0 74px;
        }
        .logo-tech-image { object-fit: contain; object-position: center; filter: brightness(0) invert(1); }
        .logo-tech-name {
          white-space: nowrap;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: clamp(20px, 1.8vw, 32px);
          line-height: 1;
          font-weight: 600;
          color: #fff;
        }
        @media (max-width: 1100px) {
          .logo-process-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); row-gap: 48px; }
          .logo-process-line { display: none; }
          .logo-asset-board { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 767px) {
          .logo-section { padding-top: 60px; padding-bottom: 60px; }
          h1 { font-size: 50px !important; }
          h2 { font-size: 30px !important; }
          h3, h4, h5, h6 { font-size: 20px !important; }
          p { font-size: 20px !important; }
          .logo-hero-float { animation: none; }
          .logo-process-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 34px 18px; }
          .logo-asset-board { grid-template-columns: 1fr; }
          .logo-tech-row { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px 18px; }
          .logo-tech-item { gap: 12px; }
          .logo-tech-image-wrap { width: 48px; height: 48px; flex-basis: 48px; }
          .logo-tech-name { font-size: 17px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-hero-float, .logo-portfolio-track { animation: none; }
        }
      `}</style>

      {/* 1. BREADCRUMB */}
      <section className="relative bg-black px-4 py-5">
        <nav className="mx-auto flex max-w-[1550px] items-center justify-center gap-4 text-sm text-white" aria-label="Breadcrumb">
          <Link href="/" className="text-white transition-colors hover:text-[#F8BC04]">Home</Link>
          <span className="text-lg text-[#e5a400]">→</span>
          <span className="font-bold text-white">Logo Designing</span>
        </nav>
      </section>

      {/* 2. HERO */}
      <section className="logo-section relative overflow-hidden bg-black">
        <div className="mx-auto grid max-w-[1550px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
          <div className="relative z-20 lg:col-span-6">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F8BC04] sm:text-sm">[ LOGO DESIGNING ]</span>
            <h1 className="mt-5 font-bold leading-[0.96] tracking-[-1.5px]">
              <span className="block text-white">A Logo Should</span>
              <span className="highlight-font block text-[#F8BC04]">Look Like Your Brand</span>
            </h1>
            <p className="mt-6 max-w-[680px] leading-relaxed text-white/70">
              Big Beans Digital creates custom logos around the business behind them. We study the audience, category, positioning and personality before turning those inputs into a visual identity that can work across digital, print and real-world brand applications.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/connect" className="inline-flex items-center justify-between gap-6 rounded-full bg-[#F8BC04] px-7 py-3.5 text-sm font-extrabold text-black transition-all duration-300 hover:scale-105 hover:bg-white">
                <span>Start Your Logo Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#logo-work" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#F8BC04] hover:text-[#F8BC04]">
                Explore Logo Work
              </Link>
            </div>
            <div className="mt-8 grid max-w-[650px] grid-cols-3 gap-3">
              <div className="border-l border-[#F8BC04] pl-3"><div className="text-lg font-bold text-white">CUSTOM</div><div className="mt-1 text-xs text-white/50">Original Concepts</div></div>
              <div className="border-l border-[#F8BC04] pl-3"><div className="text-lg font-bold text-white">BRAND</div><div className="mt-1 text-xs text-white/50">Business-Focused</div></div>
              <div className="border-l border-[#F8BC04] pl-3"><div className="text-lg font-bold text-white">READY</div><div className="mt-1 text-xs text-white/50">Scalable Assets</div></div>
            </div>
          </div>

          <div className="relative min-h-[500px] lg:col-span-6">
            <div className="logo-hero-float absolute inset-0 flex items-center justify-center">
              <div className="relative h-[500px] w-full max-w-[720px]">
                <Image src="/assets/logo-design/hero.webp" alt="Custom logo design portfolio presentation" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-contain" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 z-20 lg:left-8 lg:right-8">
              <div className="rounded-[22px] border border-white/10 bg-black/85 p-4 backdrop-blur-md">
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {["WORDMARK", "MONOGRAM", "SYMBOL", "EMBLEM", "MASCOT", "ICON"].map((item) => (
                    <div key={item} className="text-center text-[9px] font-bold tracking-widest text-white/55">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. USPs / WHY CHOOSE US */}
      <section className="logo-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">[ WHY CHOOSE US ]</span>
              <h2 className="mt-4 font-bold leading-[0.95]">Custom Logo Design<br /><span className="highlight-font text-[#F8BC04]">Built Around the Brand</span></h2>
              <p className="mt-6 max-w-xl leading-relaxed text-white/60">A logo is one part of a larger brand system. We develop original concepts around the business, target audience, category and visual personality so the final mark has a reason behind its form.</p>
              <div className="mt-7 space-y-3">
                {[
                  "Original concepts developed around your business",
                  "Brand-focused design thinking before visual execution",
                  "Logo systems designed for digital and print use",
                  "Scalable marks that work from icons to large formats",
                  "Design decisions connected to audience and positioning",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 border-b border-white/10 pb-3 text-sm text-white/70"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#F8BC04]" />{item}</div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {logoProjects.slice(0, 8).map((project) => (
                  <motion.div key={project.id} className="logo-usp-card relative aspect-square overflow-hidden rounded-[18px] border border-white/10 bg-white" whileHover={{ y: -5 }}>
                    <Image src={project.image} alt={project.alt} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-contain p-4" />
                    <div className="absolute inset-x-2 bottom-2 rounded-xl bg-black/75 px-2 py-2 backdrop-blur-sm"><div className="text-[9px] font-bold text-[#F8BC04]">{project.style}</div><div className="mt-0.5 text-[10px] font-semibold text-white">{project.name}</div></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PORTFOLIO */}
      <section id="logo-work" className="logo-section relative overflow-hidden bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">[ OUR LOGO DESIGN WORK ]</span>
              <h2 className="mt-4 font-bold leading-tight">Selected Logo Work<br /><span className="highlight-font text-[#F8BC04]">Across Different Brands</span></h2>
            </div>
            <p className="max-w-xl leading-relaxed text-white/50">A portfolio should show range. Explore logo directions across industries, visual styles, business models and brand personalities.</p>
          </div>

          <div className="logo-portfolio-wrapper relative overflow-hidden rounded-[30px] border border-white/10 bg-[#080808]">
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-28 bg-gradient-to-r from-[#080808] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-28 bg-gradient-to-l from-[#080808] to-transparent" />
            <div className="logo-portfolio-track flex w-max gap-4 p-5">
              {[...logoProjects, ...logoProjects].map((project, index) => (
                <div key={`${project.id}-${index}`} className="group relative h-[330px] w-[300px] shrink-0 overflow-hidden rounded-[24px] border border-white/10 bg-white">
                  <Image src={project.image} alt={project.alt} fill sizes="300px" className="object-contain p-8 transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-black/85 p-4 backdrop-blur-md"><div className="text-[9px] font-black uppercase tracking-[0.18em] text-[#F8BC04]">{project.industry}</div><div className="mt-1 text-base font-bold text-white">{project.name}</div><div className="mt-1 text-xs text-white/50">{project.style}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 flex justify-center gap-2">
            {logoProjects.slice(0, 5).map((_, index) => <button key={index} type="button" aria-label={`Show logo portfolio item ${index + 1}`} onClick={() => setPortfolioIndex(index)} className={portfolioIndex === index ? "h-2.5 w-7 rounded-full bg-[#F8BC04]" : "h-2.5 w-2.5 rounded-full bg-white/15 hover:bg-white/30"} />)}
          </div>
        </div>
      </section>

      {/* 5. IDEA TO BRAND IDENTITY */}
      <section className="logo-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">[ FROM BUSINESS IDEA TO BRAND IDENTITY ]</span>
            <h2 className="mt-4 font-bold leading-tight">The Thinking Behind<br /><span className="highlight-font text-[#F8BC04]">the Mark</span></h2>
            <p className="mt-4 leading-relaxed text-white/55">The visual starts with the business. We use discovery, research and concept development to create a direction before refining the final identity.</p>
          </div>
          <ProcessTimeline steps={discoverySteps} className="mt-16" />
        </div>
      </section>

      {/* 6. LOGO DESIGN STYLES */}
      <section className="logo-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">[ LOGO DESIGN STYLES & APPROACHES ]</span>
              <h2 className="mt-4 font-bold leading-[0.95]">Different Brands Need<br /><span className="highlight-font text-[#F8BC04]">Different Visual Forms</span></h2>
              <p className="mt-6 leading-relaxed text-white/60">There is no single logo format that fits every business. We select and develop the approach that makes sense for the name, audience, category and intended applications.</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {logoStyles.map((style) => (
                  <button key={style.id} type="button" onClick={() => setActiveStyle(style.id)} className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold transition-all ${activeStyle === style.id ? "border-[#F8BC04] bg-[#F8BC04] text-black" : "border-white/15 text-white/65 hover:border-[#F8BC04]/60 hover:text-[#F8BC04]"}`}>
                    {style.icon}{style.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div key={activeStyleData.id} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: 0.3 }} className="logo-style-card overflow-hidden rounded-[30px] border border-white/10 bg-[#090909]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-white">
                    <Image src={activeStyleData.image} alt={activeStyleData.alt} fill sizes="(max-width: 1024px) 100vw, 60vw" className="logo-style-image object-contain p-8 sm:p-14" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 text-[#F8BC04]"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F8BC04]/30 bg-[#F8BC04]/5">{activeStyleData.icon}</span><h3 className="font-bold text-white">{activeStyleData.name}</h3></div>
                    <p className="mt-4 leading-relaxed text-white/55">{activeStyleData.description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LOGO DESIGN PROCESS */}
      <section className="logo-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">[ LOGO DESIGN PROCESS ]</span>
            <h2 className="mt-4 font-bold leading-tight">What Happens After<br /><span className="highlight-font text-[#F8BC04]">You Place an Enquiry</span></h2>
            <p className="mt-5 leading-relaxed text-white/55">A defined process keeps the project clear. Each stage has a purpose, from understanding the brand to preparing the approved logo for use.</p>
          </div>
          <ProcessTimeline steps={logoProcess} />
        </div>
      </section>

      {/* 8. LOGO CONCEPTS TO FINAL IDENTITY */}
      <section className="logo-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="mb-12 grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7"><span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">[ LOGO CONCEPTS → FINAL IDENTITY ]</span><h2 className="mt-4 font-bold leading-tight">See the Identity<br /><span className="highlight-font text-[#F8BC04]">Take Shape</span></h2></div>
            <p className="lg:col-span-5 leading-relaxed text-white/50">The final mark is usually the result of several decisions. This visual progression shows how a rough direction can become a more precise and usable identity.</p>
          </div>

          <div className="logo-evolution-stage p-5 sm:p-8 lg:p-12">
            <div className="relative z-10 grid grid-cols-1 items-center gap-5 md:grid-cols-5">
              {evolutionSlides.map((slide, index) => (
                <motion.div key={slide.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: .45, delay: index * .08 }} className="relative">
                  <div className={`relative aspect-square overflow-hidden rounded-[22px] border ${index === evolutionSlides.length - 1 ? "border-[#F8BC04]/60 shadow-[0_0_45px_rgba(248,188,4,.12)]" : "border-white/10"} bg-white`}>
                    <Image src={slide.image} alt={slide.title} fill sizes="(max-width: 768px) 100vw, 20vw" className="object-contain p-5 sm:p-7" />
                  </div>
                  <div className="mt-4 text-center"><div className="text-[9px] font-black tracking-[0.18em] text-[#F8BC04]">{String(index + 1).padStart(2, "0")}</div><h3 className="mt-1 font-bold text-white">{slide.title}</h3><p className="mt-1 text-xs leading-relaxed text-white/40">{slide.description}</p></div>
                  {index < evolutionSlides.length - 1 && <ArrowRight className="absolute -right-5 top-[31%] hidden h-5 w-5 text-[#F8BC04]/60 lg:block" />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. LOGO + BRAND APPLICATIONS */}
      <section className="logo-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">[ LOGO + BRAND APPLICATIONS ]</span>
              <h2 className="mt-4 font-bold leading-[0.95]">A Logo Has to Work<br /><span className="highlight-font text-[#F8BC04]">Beyond the Logo File</span></h2>
              <p className="mt-6 leading-relaxed text-white/60">A useful identity needs to survive real applications. Explore how the same visual system can move across packaging, websites, social media, stationery, signage and merchandise.</p>
              <div className="mt-8 space-y-2">
                {applications.map((application, index) => (
                  <button key={application.id} type="button" onClick={() => setApplicationIndex(index)} className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-3 text-left transition-all ${applicationIndex === index ? "border-[#F8BC04]/60 bg-[#F8BC04]/10" : "border-white/10 bg-white/[0.02] hover:border-white/20"}`}>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${applicationIndex === index ? "bg-[#F8BC04] text-black" : "border border-white/10 text-[#F8BC04]"}`}>{application.icon}</span>
                    <span className="flex-1"><span className="block text-sm font-bold text-white">{application.title}</span><span className="mt-0.5 block text-xs text-white/40">{application.description}</span></span>
                    <ArrowRight className={`h-4 w-4 ${applicationIndex === index ? "text-[#F8BC04]" : "text-white/20"}`} />
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div key={activeApplication.id} initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .98 }} transition={{ duration: .35 }} className="logo-application-stage">
                  <Image src={activeApplication.image} alt={activeApplication.alt} fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
                  <div className="absolute inset-x-5 bottom-5 z-10 rounded-2xl border border-white/10 bg-black/75 p-5 backdrop-blur-md sm:inset-x-7 sm:bottom-7"><div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F8BC04]">BRAND APPLICATION</div><div className="mt-1 text-lg font-bold text-white">{activeApplication.title}</div></div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 10. LOGO VARIATIONS / ASSETS */}
      <section className="logo-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div><span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">[ LOGO VARIATIONS / BRAND ASSETS ]</span><h2 className="mt-4 font-bold leading-tight">A Usable Logo System,<br /><span className="highlight-font text-[#F8BC04]">Not Just One JPG</span></h2></div>
            <p className="max-w-xl leading-relaxed text-white/50">Final delivery can include multiple approved versions so the identity can adapt to different backgrounds, sizes, layouts and production needs.</p>
          </div>
          <div className="logo-asset-board">
            {assetItems.map((asset) => (
              <div key={asset.title} className="logo-asset-card group">
                <div className="relative h-[190px] bg-white"><Image src={asset.image} alt={asset.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-8 transition-transform duration-500 group-hover:scale-105" /></div>
                <div className="p-5"><h3 className="font-bold text-white">{asset.title}</h3><p className="mt-2 text-xs leading-relaxed text-white/45">{asset.description}</p></div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-xs font-bold text-white/55">
            <span className="mr-2 text-[#F8BC04]">FILE FORMATS</span><span>AI</span><span>|</span><span>EPS</span><span>|</span><span>SVG</span><span>|</span><span>PDF</span><span>|</span><span>PNG</span><span>|</span><span>JPG</span>
          </div>
        </div>
      </section>

      {/* 11. PACKAGES */}
      <section className="logo-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center"><span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">[ LOGO DESIGN PACKAGES / WHAT YOU GET ]</span><h2 className="mt-4 font-bold">Choose the Scope That Fits<br /><span className="highlight-font text-[#F8BC04]">Your Brand Requirement</span></h2><p className="mt-4 leading-relaxed text-white/50">We can structure the project around the level of identity development your business actually needs. Pricing can be discussed separately based on scope.</p></div>
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {[
              { title: "Logo Design", eyebrow: "CORE IDENTITY", description: "Custom logo concept + revisions + final logo files.", icon: <PenTool className="h-6 w-6" />, items: ["Custom logo direction", "Concept development", "Defined revision rounds", "Primary and alternate files", "Print and digital formats"] },
              { title: "Logo + Brand Identity", eyebrow: "EXTENDED SYSTEM", description: "Logo + colour palette + typography + basic brand guidelines.", icon: <Palette className="h-6 w-6" />, items: ["Everything in Logo Design", "Brand colour palette", "Typography selection", "Basic usage guidance", "Selected brand applications"] },
              { title: "Complete Brand Identity", eyebrow: "FULL IDENTITY", description: "Logo + visual identity system + brand guidelines + applications.", icon: <Boxes className="h-6 w-6" />, items: ["Full logo system", "Visual identity direction", "Brand guidelines", "Application concepts", "Expanded brand asset delivery"] },
            ].map((pack) => (
              <div key={pack.title} className="group rounded-[26px] border border-white/10 bg-[#090909] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F8BC04]/30 bg-[#F8BC04]/5 text-[#F8BC04]">{pack.icon}</div>
                <div className="mt-6 text-[9px] font-black tracking-[0.2em] text-[#F8BC04]">{pack.eyebrow}</div><h3 className="mt-2 font-bold text-white">{pack.title}</h3><p className="mt-3 leading-relaxed text-white/50">{pack.description}</p>
                <div className="mt-6 space-y-3 border-t border-white/10 pt-5">{pack.items.map((item) => <div key={item} className="flex items-center gap-3 text-sm text-white/60"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#F8BC04]" />{item}</div>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. TECHNOLOGIES */}
      <section className="logo-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="text-center"><span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">[ TECHNOLOGIES WE WORK WITH ]</span><h2 className="mt-4 font-bold">Design Tools, Vector Workflows & <span className="highlight-font text-[#F8BC04]">Brand Production</span></h2><p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/50">We use professional design and production tools to build, refine and prepare identity assets for different applications.</p></div>
          <div className="mt-14 space-y-12">
            {technologyRows.map((row, rowIndex) => <div key={rowIndex} className="logo-tech-row">{row.map((technology) => <div key={technology.name} className="logo-tech-item"><div className="logo-tech-image-wrap"><Image src={technology.image} alt={technology.alt} fill sizes="74px" className="logo-tech-image" /></div><span className="logo-tech-name">{technology.name}</span></div>)}</div>)}
          </div>
        </div>
      </section>

      {/* 13. OUR RECENT WORK */}
      <section className="logo-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">[ OUR RECENT WORK ]</span><h2 className="mt-4 font-bold leading-tight">Work Across<br /><span className="highlight-font text-[#F8BC04]">Digital Growth</span></h2></div><Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#F8BC04]">View All Work <ArrowRight className="h-4 w-4" /></Link></div>
          <OurWork />
        </div>
      </section>

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
            key={ind.id}
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

export default LogoDesignPage;
