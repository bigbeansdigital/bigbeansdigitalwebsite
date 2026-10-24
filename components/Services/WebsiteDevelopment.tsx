"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  ExternalLink,
  Code2,
  Layers3,
  Smartphone,
  Box,
  Gauge,
  ShieldCheck,
  Database,
  Search,
  Monitor,
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

interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

interface USPCard {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
}

interface DevelopmentType {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: string[];
  cta: string;
  href: string;
}

interface UseCase {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

interface MapPosition {
  top: string;
  left: string;
}

const blogCards: BlogCard[] = [
  {
    id: 1,
    image: "/assets/blog/singleblogs/website-development-guide.webp",
    date: "August 20, 2026",
    primaryCategory: "Website Development",
    title: "What Makes a Business Website Actually Work?",
    description:
      "A practical look at structure, UX, performance, content and conversion elements that make a business website useful.",
    link: "/blog/what-makes-a-business-website-work",
    readTime: "6 min read",
  },
  {
    id: 2,
    image: "/assets/blog/singleblogs/website-speed-optimization.webp",
    date: "August 22, 2026",
    primaryCategory: "Web Performance",
    title: "Why Website Speed Matters for Business Websites",
    description:
      "Understand how page speed, image optimisation, technical architecture and responsive development affect the website experience.",
    link: "/blog/website-speed-optimization",
    readTime: "5 min read",
  },
  {
    id: 3,
    image: "/assets/blog/singleblogs/3d-web-design.webp",
    date: "August 25, 2026",
    primaryCategory: "3D Web Design",
    title: "How 3D Websites Can Create Better Product Experiences",
    description:
      "Explore practical applications of 3D models, interactive product views and WebGL experiences on modern websites.",
    link: "/blog/3d-website-design",
    readTime: "7 min read",
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

const uspCards: USPCard[] = [
  {
    number: "01",
    title: "Custom Website Development",
    description:
      "Websites planned around your business, audience, content, functionality and commercial requirements.",
    image: "/assets/website-development/usps/custom-development.webp",
    alt: "Custom website development",
    href: "/connect",
  },
  {
    number: "02",
    title: "2D & 3D Experiences",
    description:
      "From clean 2D interfaces to interactive 3D environments, we select the visual approach that fits the project.",
    image: "/assets/website-development/usps/2d-3d-experiences.webp",
    alt: "2D and 3D website experiences",
    href: "/connect",
  },
  {
    number: "03",
    title: "Responsive by Design",
    description:
      "Layouts, navigation, interactions and content are developed for desktop, tablet and mobile screen sizes.",
    image: "/assets/website-development/usps/responsive-design.webp",
    alt: "Responsive website design",
    href: "/connect",
  },
  {
    number: "04",
    title: "Built Around Users",
    description:
      "We focus on navigation, readability, interaction and clear user journeys so visitors can take the intended next step.",
    image: "/assets/website-development/usps/user-experience.webp",
    alt: "User focused website development",
    href: "/connect",
  },
  {
    number: "05",
    title: "Scalable Technology",
    description:
      "The technical structure can support future pages, integrations, content, ecommerce functionality and changing requirements.",
    image: "/assets/website-development/usps/scalable-technology.webp",
    alt: "Scalable website technology",
    href: "/connect",
  },
];

const developmentTypes: DevelopmentType[] = [
  {
    id: "2d",
    label: "2D Website Development",
    eyebrow: "2D WEBSITE DESIGN & DEVELOPMENT",
    title: "Clean Interfaces Built Around the User",
    description:
      "2D websites use layout, typography, photography, illustrations, graphics, motion and interaction to create a clear digital experience. We combine visual design with practical navigation so the website remains easy to understand across devices.",
    image: "/assets/website-development/2d-website.webp",
    imageAlt: "Modern 2D website design and development",
    points: [
      "UI / UX Design",
      "Responsive Layouts",
      "Typography Systems",
      "Illustrations & Graphics",
      "Micro Interactions",
      "Motion & Animations",
    ],
    cta: "Build a 2D Website",
    href: "/connect",
  },
  {
    id: "3d",
    label: "3D Website Development",
    eyebrow: "3D WEBSITE DESIGN & DEVELOPMENT",
    title: "Interactive Digital Experiences With 3D",
    description:
      "3D can be used when a product or brand benefits from depth, movement and interaction. We can integrate 3D models, product visualisation, WebGL experiences, animations and interactive environments while keeping performance and usability in consideration.",
    image: "/assets/website-development/3d-website.webp",
    imageAlt: "Interactive 3D website experience",
    points: [
      "3D Product Models",
      "WebGL Experiences",
      "Interactive Visuals",
      "3D Animations",
      "Product Visualisation",
      "Real-Time Interactions",
    ],
    cta: "Explore 3D Development",
    href: "/connect",
  },
];

const useCases: UseCase[] = [
  {
    id: "ecommerce",
    title: "Ecommerce Experiences",
    description:
      "Product-led websites with category navigation, product discovery, shopping functionality, payments and conversion-focused journeys.",
    image: "/assets/website-development/use-cases/ecommerce.webp",
    alt: "Ecommerce website experience",
    href: "/connect",
  },
  {
    id: "real-estate",
    title: "Real Estate Websites",
    description:
      "Property and development websites using galleries, floor plans, location information, project details and enquiry journeys.",
    image: "/assets/website-development/use-cases/real-estate.webp",
    alt: "Real estate website",
    href: "/connect",
  },
  {
    id: "architecture",
    title: "Architecture & Interior",
    description:
      "Visual-first websites that give projects, spaces, materials and design work enough room while keeping navigation simple.",
    image: "/assets/website-development/use-cases/architecture.webp",
    alt: "Architecture website",
    href: "/connect",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Technical websites that organise products, specifications, industries served, capabilities, resources and enquiries.",
    image: "/assets/website-development/use-cases/manufacturing.webp",
    alt: "Manufacturing website",
    href: "/connect",
  },
  {
    id: "automotive",
    title: "Automotive Experiences",
    description:
      "Product-focused digital experiences combining vehicle visuals, specifications, interactive elements and product discovery.",
    image: "/assets/website-development/use-cases/automotive.webp",
    alt: "Automotive website",
    href: "/connect",
  },
  {
    id: "product-launch",
    title: "Product Launches",
    description:
      "Campaign and launch websites designed around a product story, visual impact, information hierarchy and a clear call to action.",
    image: "/assets/website-development/use-cases/product-launch.webp",
    alt: "Product launch website",
    href: "/connect",
  },
];

const technologyRows = [
  [
    { name: "HTML", image: "/assets/technologies/html.svg", alt: "HTML" },
    { name: "CSS", image: "/assets/technologies/css.svg", alt: "CSS" },
    {
      name: "JS",
      image: "/assets/technologies/javascript.svg",
      alt: "JavaScript",
    },
    {
      name: "Flutter",
      image: "/assets/technologies/flutter.svg",
      alt: "Flutter",
    },
  ],
  [
    { name: "SQL", image: "/assets/technologies/sql.svg", alt: "SQL" },
    {
      name: "Node js",
      image: "/assets/technologies/nodejs.svg",
      alt: "Node.js",
    },
    
    { name: "PHP", image: "/assets/technologies/php.svg", alt: "PHP" },
    {
      name: "Mongodb",
      image: "/assets/technologies/mongodb.svg",
      alt: "MongoDB",
    },
  ],
  [
    { name: "React", image: "/assets/technologies/react.svg", alt: "React" },
  ],
];

const leftFaqs: FAQ[] = [
  {
    q: "What website development services do you offer?",
    a: "Our website development services can cover website strategy, UI/UX design, responsive frontend development, CMS development, ecommerce development, interactive experiences, 2D design, 3D website experiences, integrations, performance optimisation and SEO-ready technical development.",
  },
  {
    q: "Do you build custom websites?",
    a: "Yes. We can develop custom websites around the business requirements, content structure, user journeys, visual direction and technical functionality required for the project.",
  },
  {
    q: "Do you create both 2D and 3D websites?",
    a: "Yes. We work with conventional 2D website experiences as well as projects where 3D models, interactive visuals, WebGL or product visualisation can add practical value.",
  },
  {
    q: "Can you make websites responsive?",
    a: "Yes. Responsive development is considered across desktop, tablet and mobile layouts so that navigation, content and interactive elements remain usable across screen sizes.",
  },
  {
    q: "Can you develop ecommerce websites?",
    a: "Yes. Ecommerce projects can include product catalogues, category structures, product pages, shopping functionality, payment integrations and conversion-focused user journeys.",
  },
  {
    q: "Can you integrate a CMS?",
    a: "Yes. Depending on the project, we can work with CMS platforms such as WordPress or other content management systems so the required website content can be maintained after launch.",
  },
];

const rightFaqs: FAQ[] = [
  {
    q: "Can you develop websites for startups?",
    a: "Yes. We can structure websites for startups around their current product, audience, positioning and business stage while keeping the architecture suitable for future growth.",
  },
  {
    q: "What is a 3D website?",
    a: "A 3D website uses browser-based 3D graphics or models to create interactive visual experiences. Examples include product rotation, 3D product visualisation, interactive environments and animated 3D scenes.",
  },
  {
    q: "Will 3D make my website slow?",
    a: "It can if it is implemented without attention to asset size, rendering, loading and device performance. We therefore consider performance when deciding where and how 3D should be used.",
  },
  {
    q: "Can you optimise website speed?",
    a: "Yes. Development can include image optimisation, code optimisation, asset handling, responsive image delivery, efficient loading strategies and other technical improvements relevant to the website.",
  },
  {
    q: "Will the website be SEO-ready?",
    a: "The development structure can be built with SEO requirements in mind, including semantic HTML, responsive behaviour, metadata support, page structure, performance and crawl-friendly implementation.",
  },
  {
    q: "How do I get started with website development?",
    a: "Share your business, website requirements, target audience, existing website if applicable, preferred functionality and goals with us. We can then define the right design and development approach for the project.",
  },
];

const mapPositions: MapPosition[] = [
  { top: "42%", left: "67%" },
  { top: "27%", left: "44%" },
  { top: "28%", left: "18%" },
  { top: "54%", left: "74%" },
  { top: "65%", left: "84%" },
];

const performanceSlides = [
  {
    image: "/assets/website-development/performance-technology/1.webp",
    alt: "Website performance and responsive development",
  },
  {
    image: "/assets/website-development/performance-technology/2.webp",
    alt: "Website technology and technical architecture",
  },
  {
    image: "/assets/website-development/performance-technology/3.webp",
    alt: "Website security and integrations",
  },
  {
    image: "/assets/website-development/performance-technology/4.webp",
    alt: "SEO-ready website development",
  },
  {
    image: "/assets/website-development/performance-technology/5.webp",
    alt: "Scalable website development technology",
  },
];

function TechnologyIcon({ name }: { name: string }) {
  const commonProps = {
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    className: "h-full w-full",
  };

  switch (name) {
    case "HTML":
      return (
        <svg {...commonProps}>
          <path
            d="M9 5h46l-4.2 46L32 58 13.2 51 9 5Z"
            fill="currentColor"
            opacity="0.12"
          />
          <path
            d="M9 5h46l-4.2 46L32 58 13.2 51 9 5Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M18 16h28l-1 6H25l.7 6h19.5l-1.7 15L32 46l-10.5-3-1.1-9h6.8l.5 4.2 4.3 1.2 4.3-1.2.6-5H20.3L18 16Z" fill="currentColor" />
          <text
            x="32"
            y="26"
            textAnchor="middle"
            fill="black"
            fontSize="8"
            fontWeight="900"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            5
          </text>
        </svg>
      );

    case "CSS":
      return (
        <svg {...commonProps}>
          <path
            d="M12 7h40l-3.6 43L32 57 15.6 50 12 7Z"
            fill="currentColor"
            opacity="0.12"
          />
          <path
            d="M12 7h40l-3.6 43L32 57 15.6 50 12 7Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <text
            x="32"
            y="31"
            textAnchor="middle"
            fill="currentColor"
            fontSize="12"
            fontWeight="900"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            CSS
          </text>
          <path
            d="M21 36h22M23 41h18"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "JS":
      return (
        <svg {...commonProps}>
          <rect x="7" y="7" width="50" height="50" rx="7" fill="currentColor" />
          <path
            d="M28 23v20.5c0 5-2.5 7.5-7 7.5-3.1 0-5.5-1.2-7-3.6l4.6-2.8c.7 1.2 1.4 1.8 2.6 1.8 1.2 0 1.9-.8 1.9-2.8V23H28Zm11.2-.4c4.1 0 6.8 1.5 8.7 4.3l-4.3 2.8c-1.1-1.6-2.3-2.3-4-2.3-1.3 0-2.1.6-2.1 1.5 0 1.1 1.2 1.6 3.7 2.7 4.2 1.8 6.2 3.7 6.2 7.1 0 4.8-3.7 7.9-9.3 7.9-4.6 0-7.8-2-9.6-5.3l4.3-2.7c1.2 1.9 2.8 3 5 3 1.8 0 2.8-.8 2.8-2 0-1.1-.8-1.7-3.6-2.9-4-1.7-6.2-3.4-6.2-6.9 0-4.2 3.4-7.2 8.4-7.2Z"
            fill="black"
          />
        </svg>
      );

    case "Flutter":
      return (
        <svg {...commonProps}>
          <path
            d="M10 33 37 6h17L27 33h27L43 44H27l-8.5-8.5L10 44V33Z"
            fill="currentColor"
          />
          <path
            d="m27 38 8.5 8.5L27 55h-17l17-17Z"
            fill="currentColor"
            opacity="0.55"
          />
        </svg>
      );

    case "SQL":
      return (
        <svg {...commonProps}>
          <ellipse cx="32" cy="13" rx="20" ry="8" fill="currentColor" opacity="0.2" />
          <path
            d="M12 13v28c0 4.4 9 8 20 8s20-3.6 20-8V13"
            stroke="currentColor"
            strokeWidth="3"
          />
          <ellipse cx="32" cy="13" rx="20" ry="8" stroke="currentColor" strokeWidth="3" />
          <path d="M12 27c0 4.4 9 8 20 8s20-3.6 20-8" stroke="currentColor" strokeWidth="3" />
          <text
            x="32"
            y="44"
            textAnchor="middle"
            fill="currentColor"
            fontSize="11"
            fontWeight="800"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            SQL
          </text>
        </svg>
      );

    case "Node js":
      return (
        <svg {...commonProps}>
          <path
            d="m32 5 22 12.7v25.6L32 56 10 43.3V17.7L32 5Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M21 42V22l22 20V22"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="32"
            y="39"
            textAnchor="middle"
            fill="currentColor"
            fontSize="8"
            fontWeight="900"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            JS
          </text>
        </svg>
      );

    case "React":
      return (
        <svg {...commonProps}>
          <ellipse cx="32" cy="32" rx="25" ry="10" stroke="currentColor" strokeWidth="3" />
          <ellipse
            cx="32"
            cy="32"
            rx="25"
            ry="10"
            transform="rotate(60 32 32)"
            stroke="currentColor"
            strokeWidth="3"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="25"
            ry="10"
            transform="rotate(120 32 32)"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle cx="32" cy="32" r="5" fill="currentColor" />
        </svg>
      );

    case "PHP":
      return (
        <svg {...commonProps}>
          <ellipse cx="32" cy="32" rx="25" ry="15" stroke="currentColor" strokeWidth="3" />
          <text
            x="32"
            y="37"
            textAnchor="middle"
            fill="currentColor"
            fontSize="16"
            fontWeight="800"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            PHP
          </text>
        </svg>
      );

    case "Mongodb":
      return (
        <svg {...commonProps}>
          <path
            d="M33 5c1.5 8.7 9.5 12.5 9.5 23.5 0 10.3-5.1 17.6-10.5 22.5C26.7 46.1 22 39.1 22 30.1 22 19.2 29.4 14.2 33 5Z"
            fill="currentColor"
          />
          <path
            d="M32 12v39"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.65"
          />
        </svg>
      );

    

    default:
      return (
        <svg {...commonProps}>
          <circle cx="32" cy="32" r="23" stroke="currentColor" strokeWidth="3" />
          <path d="M22 32h20M32 22v20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
  }
}

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

  // IMPORTANT:
  // This uses a normal conditional expression instead of a template
  // literal inside className. This avoids the parser error shown in
  // the Next.js build screen.
  const faqButtonClassName = isOpen
    ? "flex min-h-[84px] w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
    : "flex min-h-[84px] w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6";

  const faqIconClassName = isOpen
    ? "flex h-7 w-7 shrink-0 rotate-45 items-center justify-center rounded-full border border-white/10 bg-[#F8BC04] text-xs font-bold text-black transition-transform duration-300 sm:h-8 sm:w-8 sm:text-sm"
    : "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-white/80 transition-transform duration-300 sm:h-8 sm:w-8 sm:text-sm";

  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20 sm:rounded-2xl">
      <button
        type="button"
        onClick={() => setOpenFaq(isOpen ? null : index)}
        className={faqButtonClassName}
        aria-expanded={isOpen}
      >
        <span className="flex-1 font-bold text-white">
          {faq.q}
        </span>

        <span className={faqIconClassName}>
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

function WebsiteUSPCard({ card }: { card: USPCard }) {
  return (
    <Link
      href={card.href}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] transition-all duration-300 hover:-translate-y-2 hover:border-[#F8BC04]/60"
    >
      <div className="relative h-[230px] overflow-hidden">
        <Image
          src={card.image}
          alt={card.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#F8BC04]/50 bg-black/70 text-sm font-bold text-[#F8BC04]">
          {card.number}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-bold leading-tight text-white">
          {card.title}
        </h3>

        <p className="mt-3 leading-relaxed text-white/65">
          {card.description}
        </p>

        <div className="mt-6 flex items-center gap-2 font-bold text-[#F8BC04]">
          <span>Explore Service</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export default function WebsiteDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeDevelopmentType, setActiveDevelopmentType] = useState("2d");
  const [performanceSlide, setPerformanceSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPerformanceSlide((current) => (current + 1) % performanceSlides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const activeDevelopmentData =
    developmentTypes.find((item) => item.id === activeDevelopmentType) ||
    developmentTypes[0];

  return (
    <main className="min-h-screen bg-black text-white [&_*]:box-border">
      <style>{`
        h1 {
          font-size: 50px !important;
        }

        h2 {
          font-size: 30px !important;
        }

        h3,
        h4,
        h5,
        h6 {
          font-size: 20px !important;
        }

        p {
          font-size: 20px !important;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          font-family: Arial, Helvetica, sans-serif;
          letter-spacing: normal !important;
        }

        h1 .highlight-font,
        h2 .highlight-font,
        h3 .highlight-font,
        h4 .highlight-font,
        h5 .highlight-font,
        h6 .highlight-font {
          font-family: Georgia, "Times New Roman", serif !important;
          font-style: italic;
          font-weight: 400;
          letter-spacing: normal !important;
        }

        p {
          text-align: justify !important;
          text-align-last: left !important;
        }

        .webdev-section {
          padding-top: 90px;
          padding-bottom: 90px;
        }

        .webdev-hero-image {
          animation: webdevHeroFloat 6s ease-in-out infinite;
        }

        @keyframes webdevHeroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .hero-code-line {
          animation: codePulse 3s ease-in-out infinite;
        }

        @keyframes codePulse {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 1; }
        }

        .value-image-frame {
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.10);
        }

        .value-image-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            transparent 30%,
            rgba(248,188,4,0.08) 50%,
            transparent 70%
          );
          pointer-events: none;
        }

        .development-tabs-section {
          width: 100%;
          overflow: hidden;
        }

        .development-tabs-inner {
          width: 100%;
          max-width: 1800px;
          margin: 0 auto;
        }

        .development-top-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
          column-gap: 70px;
          align-items: start;
        }

        .development-heading {
          margin: 0;
          font-size: 30px !important;
          line-height: 0.94;
          font-weight: 700;
          letter-spacing: -1.5px !important;
        }

        .development-heading-highlight {
          display: block;
          margin-top: 2px;
          color: #f8bc04;
          font-family: Georgia, "Times New Roman", serif !important;
          font-style: italic;
          font-weight: 400;
          font-size: 30px !important;
          letter-spacing: -1.5px !important;
        }

        .development-intro {
          max-width: 670px;
          padding-left: 34px;
          border-left: 1px solid rgba(255,255,255,0.20);
          font-size: 20px !important;
          line-height: 1.48;
          color: rgba(255,255,255,0.68);
        }

        .development-tabs-wrapper {
          width: 100%;
          margin-top: 36px;
        }

        .development-tabs {
          display: flex;
          width: 100%;
          max-width: 825px;
          height: 54px;
        }

        .development-tab {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex: 1;
          min-width: 0;
          height: 54px;
          padding: 0 24px;
          border: none;
          border-radius: 0;
          background: transparent;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 17px;
          line-height: 1;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.25s ease, color 0.25s ease;
        }

        .development-tab:hover {
          color: #f8bc04;
        }

        .development-tab.active {
          background: #f8bc04;
          color: #000000;
        }

        .development-tab.active:hover {
          color: #000000;
        }

        .development-tabs-line {
          width: 100%;
          max-width: 825px;
          height: 2px;
          background: #f8bc04;
        }

        .development-content-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
          column-gap: 70px;
          align-items: center;
          margin-top: 55px;
        }

        .development-content-left {
          align-self: center;
          padding-bottom: 25px;
        }

        .development-eyebrow {
          margin-bottom: 20px;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 11px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 2px !important;
          color: #f8bc04;
        }

        .development-content-title {
          max-width: 760px;
          margin: 0;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 20px !important;
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -0.4px !important;
          color: #ffffff;
        }

        .development-content-description {
          max-width: 790px;
          margin-top: 20px;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 20px !important;
          line-height: 1.45;
          font-weight: 400;
          color: rgba(255,255,255,0.78);
        }

        .development-points {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          max-width: 790px;
          margin-top: 28px;
          gap: 0 22px;
        }

        .development-point {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 48px;
          border-top: 1px solid rgba(255,255,255,0.16);
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.78);
        }

        .development-point-number {
          color: #f8bc04;
          font-size: 10px;
          font-weight: 900;
          flex-shrink: 0;
        }

        .development-buttons {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 26px;
        }

        .development-primary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          min-height: 42px;
          padding: 0 21px;
          border-radius: 999px;
          background: #f8bc04;
          color: #000000;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 12px;
          line-height: 1;
          font-weight: 700;
          transition: background-color 0.25s ease, transform 0.25s ease;
        }

        .development-primary-button:hover {
          background: #ffffff;
          transform: translateY(-2px);
        }

        .development-secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 21px;
          border: 1px solid rgba(255,255,255,0.20);
          border-radius: 999px;
          background: transparent;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 12px;
          line-height: 1;
          font-weight: 600;
          transition: border-color 0.25s ease, color 0.25s ease;
        }

        .development-secondary-button:hover {
          border-color: #f8bc04;
          color: #f8bc04;
        }

        .development-image-column {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 480px;
        }

        .development-single-image {
          position: relative;
          width: min(100%, 720px);
          height: 560px;
          margin-left: auto;
          overflow: hidden;
          border-radius: 28px;
        }

        .development-single-image img {
          object-fit: contain !important;
          object-position: center center !important;
        }

        .technology-card {
          position: relative;
          overflow: hidden;
          min-height: 235px;
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 22px;
          background: #0b0b0b;
          transition: transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
        }

        .technology-card:hover {
          transform: translateY(-6px);
          border-color: rgba(248,188,4,0.55);
          background: #101010;
        }

        .technology-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 52px;
          width: 52px;
          border-radius: 14px;
          border: 1px solid rgba(248,188,4,0.35);
          background: rgba(248,188,4,0.08);
          color: #f8bc04;
          font-size: 12px;
          font-weight: 900;
        }

        .use-case-card {
          position: relative;
          min-height: 330px;
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.10);
          background: #0b0b0b;
        }

        .use-case-card img {
          transition: transform 0.5s ease;
        }

        .use-case-card:hover img {
          transform: scale(1.06);
        }

        .website-trust-carousel-track {
          animation: websiteTrustCarousel 35s linear infinite;
        }

        @keyframes websiteTrustCarousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .website-trust-carousel-wrapper:hover .website-trust-carousel-track {
          animation-play-state: paused;
        }

        .code-window {
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.12);
          background: #080808;
          box-shadow: 0 30px 100px rgba(0,0,0,0.45);
        }

        .code-window-header {
          display: flex;
          align-items: center;
          gap: 7px;
          height: 42px;
          padding: 0 16px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.02);
        }

        .code-window-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.20);
        }

        .code-line {
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: rgba(255,255,255,0.65);
        }

        .usp-horizontal-list {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          width: 100%;
          padding-top: 23px;
        }

        .usp-horizontal-list::before {
          content: "";
          position: absolute;
          top: 23px;
          left: 5%;
          right: 5%;
          height: 1px;
          background: rgba(255, 255, 255, 0.16);
        }

        .usp-horizontal-item {
          position: relative;
          min-width: 0;
          padding: 0 16px;
        }

        .usp-horizontal-marker {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
        }

        .usp-horizontal-marker span {
          display: flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(248, 188, 4, 0.70);
          border-radius: 999px;
          background: #000000;
          color: #F8BC04;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.04em;
        }

        .usp-horizontal-content {
          padding-top: 25px;
        }

        .usp-horizontal-content h3 {
          margin: 0;
          color: #ffffff;
          font-size: 19px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .usp-horizontal-content p {
          margin: 10px 0 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 14px;
          line-height: 1.65;
        }

        .webdev-technologies-section {
          padding-top: 120px;
          padding-bottom: 120px;
        }

        .technology-logo-showcase {
          width: 100%;
        }

        .technology-logo-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .technology-logo-row + .technology-logo-row {
          margin-top: 82px;
        }

        .technology-logo-row-four {
          padding: 0 7%;
        }

        .technology-logo-row-five {
          padding: 0 1%;
        }

        .technology-logo-row-three {
          justify-content: center;
          gap: clamp(90px, 12vw, 210px);
          padding: 0 15%;
        }

        .technology-logo-item {
          display: flex;
          min-width: 0;
          align-items: center;
          gap: 24px;
          color: #ffffff;
        }

        .technology-logo-image-wrap {
          position: relative;
          width: 86px;
          height: 86px;
          flex: 0 0 86px;
        }

        .technology-logo-image {
          object-fit: contain;
          object-position: center;
          filter: brightness(0) invert(1);
        }

        .technology-logo-name {
          white-space: nowrap;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: clamp(24px, 2vw, 38px);
          line-height: 1;
          font-weight: 600;
          letter-spacing: -0.7px;
          color: #ffffff;
        }

        .performance-slider {
          isolation: isolate;
        }

        .performance-pointers {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          grid-template-rows: repeat(3, auto);
          grid-auto-flow: column;
          column-gap: 30px;
          row-gap: 0;
          width: 100%;
        }

        .performance-pointer {
          min-width: 0;
          min-height: 70px;
          padding-top: 14px;
        }

        .performance-pointer:first-child,
        .performance-pointer:nth-child(4) {
          padding-top: 0;
        }

        @media (max-width: 1100px) {
          .usp-horizontal-list {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            row-gap: 55px;
          }

          .usp-horizontal-list::before {
            display: none;
          }

          .usp-horizontal-item {
            padding: 0 12px;
          }


          .usp-pointer-list {
          position: relative;
          width: 100%;
        }

        .usp-pointer-list::before {
          content: "";
          position: absolute;
          top: 30px;
          bottom: 30px;
          left: 22px;
          width: 1px;
          background: rgba(255, 255, 255, 0.14);
        }

        .usp-pointer-item {
          position: relative;
          display: grid;
          grid-template-columns: 46px minmax(0, 1fr);
          column-gap: 26px;
          align-items: start;
          min-height: 116px;
          padding: 0 0 34px;
        }

        .usp-pointer-item + .usp-pointer-item {
          padding-top: 34px;
          border-top: 1px solid rgba(255, 255, 255, 0.10);
        }

        .usp-pointer-number {
          position: relative;
          z-index: 2;
          display: flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(248, 188, 4, 0.65);
          border-radius: 999px;
          background: #000000;
          color: #F8BC04;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.04em;
        }

        .usp-pointer-content {
          padding-top: 2px;
        }

        .usp-pointer-content h3 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(20px, 1.7vw, 28px);
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .usp-pointer-content p {
          max-width: 760px;
          margin: 10px 0 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 16px;
          line-height: 1.7;
        }

        .webdev-technologies-section {
            padding-top: 90px;
            padding-bottom: 90px;
          }

          .technology-logo-row-four,
          .technology-logo-row-five {
            padding-left: 0;
            padding-right: 0;
          }

          .technology-logo-row-three {
            padding-left: 0;
            padding-right: 0;
            gap: 70px;
          }

          .technology-logo-image-wrap {
            width: 68px;
            height: 68px;
            flex-basis: 68px;
          }

          .technology-logo-item {
            gap: 16px;
          }

          .technology-logo-name {
            font-size: clamp(20px, 2.5vw, 30px);
          }


          .performance-pointers {
            column-gap: 24px;
          }
        }

        @media (max-width: 1100px) {
          .development-top-grid {
            grid-template-columns: 1fr;
            row-gap: 28px;
          }

          .development-intro {
            max-width: 750px;
            padding-left: 24px;
          }

          .development-content-grid {
            grid-template-columns: 1fr 1fr;
            column-gap: 35px;
          }

          .development-single-image {
            height: 460px;
          }
        }

        @media (max-width: 767px) {
          .usp-horizontal-list {
            grid-template-columns: 1fr;
            gap: 34px;
            padding-top: 0;
          }

          .usp-horizontal-list::before {
            display: none;
          }

          .usp-horizontal-item {
            display: grid;
            grid-template-columns: 40px minmax(0, 1fr);
            column-gap: 16px;
            padding: 0;
          }

          .usp-horizontal-marker {
            justify-content: flex-start;
          }

          .usp-horizontal-marker span {
            width: 40px;
            height: 40px;
            font-size: 10px;
          }

          .usp-horizontal-content {
            padding-top: 1px;
          }

          .usp-horizontal-content h3 {
            font-size: 19px;
          }

          .usp-horizontal-content p {
            font-size: 14px;
            line-height: 1.65;
          }


          .usp-pointer-list::before {
            left: 19px;
            top: 25px;
            bottom: 25px;
          }

          .usp-pointer-item {
            grid-template-columns: 40px minmax(0, 1fr);
            column-gap: 18px;
            min-height: 0;
            padding-bottom: 28px;
          }

          .usp-pointer-item + .usp-pointer-item {
            padding-top: 28px;
          }

          .usp-pointer-number {
            width: 40px;
            height: 40px;
            font-size: 10px;
          }

          .usp-pointer-content h3 {
            font-size: 19px;
          }

          .usp-pointer-content p {
            font-size: 14px;
            line-height: 1.65;
          }


          .usp-pointer-list {
          position: relative;
          width: 100%;
        }

        .usp-pointer-list::before {
          content: "";
          position: absolute;
          top: 30px;
          bottom: 30px;
          left: 22px;
          width: 1px;
          background: rgba(255, 255, 255, 0.14);
        }

        .usp-pointer-item {
          position: relative;
          display: grid;
          grid-template-columns: 46px minmax(0, 1fr);
          column-gap: 26px;
          align-items: start;
          min-height: 116px;
          padding: 0 0 34px;
        }

        .usp-pointer-item + .usp-pointer-item {
          padding-top: 34px;
          border-top: 1px solid rgba(255, 255, 255, 0.10);
        }

        .usp-pointer-number {
          position: relative;
          z-index: 2;
          display: flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(248, 188, 4, 0.65);
          border-radius: 999px;
          background: #000000;
          color: #F8BC04;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.04em;
        }

        .usp-pointer-content {
          padding-top: 2px;
        }

        .usp-pointer-content h3 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(20px, 1.7vw, 28px);
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .usp-pointer-content p {
          max-width: 760px;
          margin: 10px 0 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 16px;
          line-height: 1.7;
        }

        .webdev-technologies-section {
            padding-top: 65px;
            padding-bottom: 65px;
          }

          .technology-logo-showcase {
            margin-top: 50px;
          }

          .technology-logo-row,
          .technology-logo-row-four,
          .technology-logo-row-five,
          .technology-logo-row-three {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 32px 20px;
            padding: 0;
          }

          .technology-logo-row + .technology-logo-row {
            margin-top: 34px;
          }

          .technology-logo-item {
            gap: 12px;
          }

          .technology-logo-image-wrap {
            width: 48px;
            height: 48px;
            flex-basis: 48px;
          }

          .technology-logo-name {
            font-size: 18px;
          }


          .performance-pointers {
            grid-template-columns: 1fr;
            grid-template-rows: none;
            grid-auto-flow: row;
            column-gap: 0;
          }

          .performance-pointer:first-child,
          .performance-pointer:nth-child(4) {
            padding-top: 14px;
          }

          .performance-pointer:first-child {
            padding-top: 0;
          }

          .webdev-section {
            padding-top: 60px;
            padding-bottom: 60px;
          }

          h1 {
            font-size: 50px !important;
          }

          h2 {
            font-size: 30px !important;
          }

          h3,
          h4,
          h5,
          h6 {
            font-size: 20px !important;
          }

          p {
            font-size: 20px !important;
          }

          .webdev-hero-image {
            animation: none;
          }

          .development-tabs-inner {
            padding-left: 20px;
            padding-right: 20px;
          }

          .development-heading {
            font-size: 30px !important;
            line-height: 0.94;
            letter-spacing: -1px !important;
          }

          .development-heading-highlight {
            font-size: 30px !important;
            letter-spacing: -1px !important;
          }

          .development-intro {
            padding-left: 18px;
            font-size: 20px !important;
            line-height: 1.45;
          }

          .development-tabs-wrapper {
            margin-top: 27px;
          }

          .development-tabs {
            height: 52px;
            max-width: none;
          }

          .development-tab {
            height: 52px;
            justify-content: center;
            padding: 0 8px;
            font-size: 13px;
          }

          .development-tabs-line {
            max-width: none;
          }

          .development-content-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 38px;
          }

          .development-content-left {
            padding-bottom: 0;
          }

          .development-content-title {
            font-size: 20px !important;
            line-height: 1.1;
            letter-spacing: -0.2px !important;
          }

          .development-content-description {
            margin-top: 17px;
            font-size: 20px !important;
            line-height: 1.48;
          }

          .development-points {
            grid-template-columns: 1fr;
            margin-top: 23px;
          }

          .development-point {
            min-height: 44px;
          }

          .development-buttons {
            flex-direction: column;
            align-items: stretch;
            margin-top: 23px;
          }

          .development-primary-button,
          .development-secondary-button {
            width: 100%;
          }

          .development-image-column {
            min-height: 370px;
            margin-top: 8px;
          }

          .development-single-image {
            width: 100%;
            height: 390px;
            margin: 0 auto;
          }

          .technology-card {
            min-height: 210px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .webdev-hero-image,
          .website-trust-carousel-track,
          .hero-code-line {
            animation: none;
          }
        }
      `}</style>

      {/* 1. BREADCRUMB */}
      <section className="relative bg-black px-4 py-5">
        <nav
          className="mx-auto flex max-w-[1550px] items-center justify-center gap-4 text-sm text-white"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="text-white transition-colors hover:text-[#F8BC04]"
          >
            Home
          </Link>

          <span className="text-lg text-[#e5a400]">→</span>

          <span className="font-bold text-white">
            Website Development
          </span>
        </nav>
      </section>

      {/* 2. HERO */}
      <section className="webdev-section relative overflow-hidden bg-black">
        <div className="mx-auto grid max-w-[1550px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
          <div className="relative z-20 lg:col-span-6">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F8BC04] sm:text-sm">
              [ WEBSITE DEVELOPMENT ]
            </span>

            <h1 className="mt-5 font-bold leading-[0.96] tracking-[-1.5px]">
              <span className="block text-white">
                Websites Built
              </span>

              <span className="highlight-font block text-[#F8BC04]">
                For Real Business
              </span>
            </h1>

            <p className="mt-6 max-w-[680px] leading-relaxed text-white/70">
              Big Beans Digital creates websites that bring together design,
              technology, usability and business objectives. From responsive
              2D websites to interactive 3D experiences, we build digital
              products around what your business and users actually need.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/connect"
                className="inline-flex items-center justify-between gap-6 rounded-full bg-[#F8BC04] px-7 py-3.5 text-sm font-extrabold text-black transition-all duration-300 hover:scale-105 hover:bg-white"
              >
                <span>Start Your Website Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#F8BC04] hover:text-[#F8BC04]"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="mt-8 grid max-w-[650px] grid-cols-3 gap-3">
              <div className="border-l border-[#F8BC04] pl-3">
                <div className="text-lg font-bold text-white">2D</div>
                <div className="mt-1 text-xs text-white/50">
                  Modern Interfaces
                </div>
              </div>

              <div className="border-l border-[#F8BC04] pl-3">
                <div className="text-lg font-bold text-white">3D</div>
                <div className="mt-1 text-xs text-white/50">
                  Interactive Experiences
                </div>
              </div>

              <div className="border-l border-[#F8BC04] pl-3">
                <div className="text-lg font-bold text-white">UX</div>
                <div className="mt-1 text-xs text-white/50">
                  User Focused
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[500px] lg:col-span-6">
            <div className="webdev-hero-image absolute inset-0 flex items-center justify-center">
              <div className="relative h-[460px] w-full max-w-[700px]">
                <Image
                  src="/assets/website-development/hero.webp"
                  alt="Website development and digital experience"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5 z-20 lg:left-10 lg:right-10">
              <div className="code-window">
                <div className="code-window-header">
                  <span className="code-window-dot" />
                  <span className="code-window-dot" />
                  <span className="code-window-dot" />
                </div>

                <div className="grid grid-cols-1 gap-1 px-5 py-4 font-mono text-[10px] sm:text-xs">
                  
                  <span className="code-line">
                    3D immersive: true
                  </span>
                  <span className="code-line hero-code-line">
                    interactive: true
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. USPs / WHY CHOOSE US */}
      <section className="webdev-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">
                [ WHY CHOOSE US ]
              </span>

              <h2 className="mt-4 font-bold leading-[0.95]">
                Website Development
                <br />
                <span className="highlight-font text-[#F8BC04]">
                  Built Around Your Business
                </span>
              </h2>

              <p className="mt-6 max-w-md leading-relaxed text-white/60">
                We build websites around the way a business needs to present
                itself, communicate with customers and support its next stage
                of growth.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="usp-horizontal-list">
                {[
                  {
                    number: "01",
                    title: "Custom Website Development",
                    description:
                      "Websites planned around your business, audience, content, functionality and commercial requirements.",
                  },
                  {
                    number: "02",
                    title: "2D & 3D Experiences",
                    description:
                      "From clean 2D interfaces to interactive 3D environments, we select the visual approach that fits the project.",
                  },
                  {
                    number: "03",
                    title: "Responsive by Design",
                    description:
                      "Layouts, navigation, interactions and content are developed for desktop, tablet and mobile screen sizes.",
                  },
                  {
                    number: "04",
                    title: "Built Around Users",
                    description:
                      "We focus on navigation, readability, interaction and clear user journeys so visitors can take the intended next step.",
                  },
                  {
                    number: "05",
                    title: "Scalable Technology",
                    description:
                      "The technical structure can support future pages, integrations, content, ecommerce functionality and changing requirements.",
                  },
                ].map((item) => (
                  <div key={item.number} className="usp-horizontal-item">
                    <div className="usp-horizontal-marker">
                      <span>{item.number}</span>
                    </div>

                    <div className="usp-horizontal-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUST / PORTFOLIO / CREDIBILITY */}
      <section className="webdev-section relative bg-black">
        <div className="mx-auto max-w-[1950px] px-5 sm:px-8">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#090909]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="relative min-h-[470px] lg:col-span-5">
                <Image
                  src="/assets/website-development/trust-portfolio.webp"
                  alt="Big Beans Digital website development portfolio"
                  fill
                  sizes="(max-width: 500px) 500vw, 42vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-[#090909]" />

                
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-12 lg:col-span-7">
                

                <h2 className="mt-5 font-bold leading-tight">
                  Digital Experiences
                  <br />
                  <span className="highlight-font text-[#F8BC04]">
                    Built for Different Businesses
                  </span>
                </h2>

                <p className="mt-5 max-w-[800px] leading-relaxed text-white/65">
                  Website requirements change from one business to another.
                  An ecommerce brand needs product discovery and transactions.
                  An architecture studio may need a visual portfolio. A
                  manufacturer may need to explain complex products and
                  capabilities.
                </p>

                <p className="mt-5 max-w-[800px] leading-relaxed text-white/65">
                  Our development approach allows the design, content,
                  functionality and technology to be planned around the
                  project's actual requirements.
                </p>

                <div className="website-trust-carousel-wrapper relative mt-8 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                  <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#090909] to-transparent" />
                  <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#090909] to-transparent" />

                  <div className="website-trust-carousel-track flex w-max gap-3 p-3">
                    {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map(
                      (number, index) => (
                        <div
                          key={String(number) + "-" + String(index)}
                          className="relative h-[110px] w-[160px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#111111] sm:h-[125px] sm:w-[180px]"
                        >
                          <Image
                            src={
                              "/assets/website-development/portfolio/" +
                              String(number) +
                              ".webp"
                            }
                            alt={
                              "Website development project " +
                              String(number)
                            }
                            fill
                            sizes="180px"
                            className="object-cover"
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/connect"
                    className="inline-flex items-center gap-2 rounded-full bg-[#F8BC04] px-6 py-3 font-bold text-black transition-all hover:bg-white"
                  >
                    Discuss Your Website Requirement
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VALUE PROPOSITION */}
      <section className="webdev-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">
                [ OUR APPROACH ]
              </span>

              <h2 className="mt-5 font-bold leading-[0.95]">
                A Website Should
                <br />
                <span className="highlight-font text-[#F8BC04]">
                  Do More Than Look Good
                </span>
              </h2>

              <p className="mt-6 leading-relaxed text-white/70">
                A strong website needs a clear structure, useful content,
                intuitive navigation and functionality that supports what the
                business wants visitors to do.
              </p>

              <p className="mt-5 leading-relaxed text-white/70">
                Visual design creates the first impression. Interaction helps
                people explore. Technology makes the experience work. The
                final website needs these parts to operate together.
              </p>

              <p className="mt-5 leading-relaxed text-white/55">
                Where appropriate, 2D motion, interactive elements and 3D
                experiences can add another layer to the website without
                becoming a distraction from the core user journey.
              </p>

              <div className="mt-7">
                <Link
                  href="/connect"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F8BC04] px-7 py-3.5 font-bold text-black transition-all hover:bg-white"
                >
                  Plan Your Website
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="value-image-frame relative min-h-[540px] lg:col-span-6">
              <Image
                src="/assets/website-development/value-proposition.webp"
                alt="Website design development and user experience"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl border border-white/10 bg-black/75 p-5 backdrop-blur-md">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#F8BC04]">
                    THE WEBSITE SYSTEM
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {["Design", "UX", "Code", "Growth"].map(
                      (item, index) => (
                        <div
                          key={item}
                          className="border-t border-white/10 pt-3"
                        >
                          <div className="text-xs text-white/40">
                            {"0" + String(index + 1)}
                          </div>

                          <div className="mt-1 text-sm font-bold text-white">
                            {item}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 2D / 3D DEVELOPMENT */}
      <section className="development-tabs-section webdev-section relative bg-black">
        <div className="development-tabs-inner px-5 sm:px-8 lg:px-[55px]">
          <div className="development-top-grid">
            <div>
              

              <h2 className="development-heading mt-5">
                Build the Right
                <span className="development-heading-highlight">
                  Digital Experience.
                </span>
              </h2>
            </div>

            <div className="development-intro">
              Some websites need a simple and highly usable interface. Others
              benefit from interactive visuals, 3D models or immersive product
              experiences. We select the right approach based on the purpose of
              the website.
            </div>
          </div>

          <div className="development-tabs-wrapper">
            <div
              className="development-tabs"
              role="tablist"
              aria-label="Website development types"
            >
              {developmentTypes.map((item) => {
                const isActive = activeDevelopmentType === item.id;

                const tabClassName = isActive
                  ? "development-tab active"
                  : "development-tab";

                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveDevelopmentType(item.id)}
                    className={tabClassName}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="development-tabs-line" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDevelopmentData.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="development-content-grid"
            >
              <div className="development-content-left">
                <div className="development-eyebrow">
                  {activeDevelopmentData.eyebrow}
                </div>

                <h3 className="development-content-title">
                  {activeDevelopmentData.title}
                </h3>

                <p className="development-content-description">
                  {activeDevelopmentData.description}
                </p>

                <div className="development-points">
                  {activeDevelopmentData.points.map((point, index) => (
                    <div
                      key={point}
                      className="development-point"
                    >
                      <span className="development-point-number">
                        {"0" + String(index + 1)}
                      </span>

                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="development-buttons">
                  <Link
                    href={activeDevelopmentData.href}
                    className="development-primary-button"
                  >
                    {activeDevelopmentData.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <Link
                    href="/connect"
                    className="development-secondary-button"
                  >
                    Talk About Your Project
                  </Link>
                </div>
              </div>

              <div className="development-image-column">
                <div className="development-single-image">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeDevelopmentData.image}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.01 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={activeDevelopmentData.image}
                        alt={activeDevelopmentData.imageAlt}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 720px"
                        className="object-contain object-center"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-2 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="!text-left text-white/35">
                Use 2D when clarity and usability lead the experience. Use 3D
                when interaction and visualisation add a practical reason to
                the website.
              </p>

              <Link
                href="/connect"
                className="inline-flex shrink-0 items-center gap-2 font-bold text-[#F8BC04] hover:text-white"
              >
                Discuss Your Requirements
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PERFORMANCE / FUNCTIONALITY / TECHNOLOGY */}
      <section className="webdev-section relative overflow-hidden bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="performance-slider relative min-h-[540px] overflow-hidden rounded-[28px] border border-white/10 lg:col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={performanceSlides[performanceSlide].image}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.65, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={performanceSlides[performanceSlide].image}
                    alt={performanceSlides[performanceSlide].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />

              
            </div>

            <div className="lg:col-span-6">
              

              <h2 className="mt-5 font-bold leading-[0.95]">
                Good Design Needs
                <br />
                <span className="highlight-font text-[#F8BC04]">
                  Good Technology
                </span>
              </h2>

              <p className="mt-6 leading-relaxed text-white/70">
                A website can look impressive and still provide a poor user
                experience if it loads slowly, breaks on mobile, has confusing
                navigation or makes important information difficult to reach.
              </p>

              <p className="mt-5 leading-relaxed text-white/70">
                Our development work considers performance, browser
                compatibility, responsive behaviour, technical architecture,
                animations, integrations and the functionality the business
                needs.
              </p>

              <div className="performance-pointers mt-8">
                {[
                  {
                    title: "Website Speed",
                    description:
                      "Efficient assets and loading strategies.",
                  },
                  {
                    title: "Responsive Development",
                    description:
                      "Layouts built for different screen sizes.",
                  },
                  {
                    title: "Technical Architecture",
                    description:
                      "A structure planned around the project.",
                  },
                  {
                    title: "Security",
                    description:
                      "Technical safeguards appropriate to the website.",
                  },
                  {
                    title: "SEO-Ready Development",
                    description:
                      "Technical foundations that support search visibility.",
                  },
                  {
                    title: "Integrations",
                    description:
                      "APIs, CMS, ecommerce and third-party systems.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="performance-pointer group flex items-start gap-3 border-b border-white/10 pb-4 transition-colors"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F8BC04] text-[12px] font-black leading-none text-black">
                      ✓
                    </span>

                    <div className="min-w-0">
                      <h3 className="font-bold leading-tight text-white transition-colors group-hover:text-[#F8BC04]">
                        {item.title}
                      </h3>

                      <p className="mt-1 !text-[14px] leading-relaxed text-white/50">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGIES */}
      <section className="webdev-technologies-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">
                [ TECHNOLOGIES ]
              </span>

              <h2 className="mt-4 font-bold leading-[0.95]">
                Technologies
                <br />
                <span className="highlight-font text-[#F8BC04]">
                  We Work With
                </span>
              </h2>
            </div>

            <div className="border-l border-white/20 pl-6 lg:col-span-8 lg:pl-12">
              <p className="leading-relaxed text-white/70">
                The technology stack depends on the website. We choose tools
                according to the required experience, functionality, content
                management, ecommerce needs, performance requirements and
                future scalability.
              </p>
            </div>
          </div>

          <div className="technology-logo-showcase mt-16 sm:mt-20 lg:mt-24">
            {technologyRows.map((row, rowIndex) => (
              <div
                key={String(rowIndex)}
                className={
                  row.length === 4
                    ? "technology-logo-row technology-logo-row-four"
                    : row.length === 5
                      ? "technology-logo-row technology-logo-row-five"
                      : "technology-logo-row technology-logo-row-three"
                }
              >
                {row.map((technology) => (
                  <div
                    key={technology.name}
                    className="technology-logo-item"
                  >
                    <div className="technology-logo-image-wrap">
                      <TechnologyIcon name={technology.name} />
                    </div>

                    <span className="technology-logo-name">
                      {technology.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. OUR RECENT WORK */}
      <section className="relative z-10 py-20">
        <OurWork />
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
