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
  Target,
  MousePointerClick,
  BarChart3,
  TrendingUp,
  Settings2,
  Layers3,
  Filter,
  Users,
  LineChart,
  Megaphone,
  RefreshCw,
  CheckCircle2,
  Gauge,
  FileText,
  Eye,
  ShoppingCart,
  UserCheck,
  Database,
  Smartphone,
  Monitor,
  ShieldCheck,
  Code2,
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

interface CaseStudy {
  id: number;
  client: string;
  objective: string;
  image: string;
  alt: string;
  services: string[];
}

interface PaidChannel {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ReactNode;
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

interface MapPosition {
  top: string;
  left: string;
}

interface TechnologyLogo {
  name: string;
  image: string;
  alt: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    client: "Client Campaign 01",
    objective: "Lead generation campaign",
    image: "/assets/performance-marketing/case-studies/case-study-1.webp",
    alt: "Performance marketing lead generation campaign",
    services: ["Paid Search", "Lead Generation", "Conversion Tracking"],
  },
  {
    id: 2,
    client: "Client Campaign 02",
    objective: "Ecommerce acquisition campaign",
    image: "/assets/performance-marketing/case-studies/case-study-2.webp",
    alt: "Performance marketing ecommerce campaign",
    services: ["Meta Ads", "Shopping Ads", "Remarketing"],
  },
  {
    id: 3,
    client: "Client Campaign 03",
    objective: "B2B demand generation",
    image: "/assets/performance-marketing/case-studies/case-study-3.webp",
    alt: "B2B performance marketing campaign",
    services: ["LinkedIn Ads", "Lead Generation", "Analytics"],
  },
  {
    id: 4,
    client: "Client Campaign 04",
    objective: "Product and website acquisition",
    image: "/assets/performance-marketing/case-studies/case-study-4.webp",
    alt: "Digital advertising campaign and analytics dashboard",
    services: ["Google Ads", "YouTube Ads", "CRO"],
  },
];

const paidChannels: PaidChannel[] = [
  {
    id: "google",
    name: "Google Ads",
    eyebrow: "SEARCH / SHOPPING / DISPLAY / YOUTUBE",
    description:
      "Search, Shopping, Display and YouTube campaigns planned around intent, audience quality, conversion goals and measurable acquisition.",
    image: "/assets/performance-marketing/platforms/google-ads.webp",
    alt: "Google Ads campaign management",
    icon: <Search className="h-6 w-6" />,
  },
  {
    id: "meta",
    name: "Meta Ads",
    eyebrow: "FACEBOOK / INSTAGRAM",
    description:
      "Facebook and Instagram advertising for prospecting, lead generation, ecommerce acquisition, retargeting and customer re-engagement.",
    image: "/assets/performance-marketing/platforms/meta-ads.webp",
    alt: "Meta Ads campaign management",
    icon: <Megaphone className="h-6 w-6" />,
  },
  {
    id: "linkedin",
    name: "LinkedIn Ads",
    eyebrow: "B2B / LEAD GENERATION",
    description:
      "B2B targeting, lead generation and account-based campaigns designed around professional audiences, decision-makers and business intent.",
    image: "/assets/performance-marketing/platforms/linkedin-ads.webp",
    alt: "LinkedIn Ads campaign management",
    icon: <Users className="h-6 w-6" />,
  },
  {
    id: "youtube",
    name: "YouTube Ads",
    eyebrow: "VIDEO / AWARENESS / ACTION",
    description:
      "Video campaigns that connect audience targeting, creative messaging and measurable actions across the customer journey.",
    image: "/assets/performance-marketing/platforms/youtube-ads.webp",
    alt: "YouTube Ads campaign management",
    icon: <Monitor className="h-6 w-6" />,
  },
  {
    id: "display",
    name: "Display Ads",
    eyebrow: "REACH / REMARKETING",
    description:
      "Display campaigns for audience reach, remarketing and repeated exposure across relevant websites and digital properties.",
    image: "/assets/performance-marketing/platforms/display-ads.webp",
    alt: "Display advertising campaign management",
    icon: <Layers3 className="h-6 w-6" />,
  },
  {
    id: "shopping",
    name: "Shopping Ads",
    eyebrow: "ECOMMERCE / PRODUCT",
    description:
      "Product-led campaigns that connect catalogues, product feeds, search intent and ecommerce conversion journeys.",
    image: "/assets/performance-marketing/platforms/shopping-ads.webp",
    alt: "Shopping advertising campaign management",
    icon: <ShoppingCart className="h-6 w-6" />,
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
    image: "/assets/blog/singleblogs/performance-marketing-guide.webp",
    date: "August 28, 2026",
    primaryCategory: "Performance Marketing",
    title: "What Is Performance Marketing and How Does It Work?",
    description:
      "A practical guide to paid acquisition, conversion tracking, optimisation and measurable campaign outcomes.",
    link: "/blog/what-is-performance-marketing",
    readTime: "7 min read",
  },
  {
    id: 2,
    image: "/assets/blog/singleblogs/google-ads-optimization.webp",
    date: "September 2, 2026",
    primaryCategory: "Google Ads",
    title: "How to Improve Google Ads Campaign Performance",
    description:
      "A practical look at search intent, campaign structure, creative, landing pages, bidding and conversion data.",
    link: "/blog/google-ads-optimization",
    readTime: "6 min read",
  },
  {
    id: 3,
    image: "/assets/blog/singleblogs/meta-ads-strategy.webp",
    date: "September 6, 2026",
    primaryCategory: "Meta Ads",
    title: "A Practical Meta Ads Strategy for Lead Generation",
    description:
      "How audience structure, creative testing, lead forms, landing pages and remarketing work together.",
    link: "/blog/meta-ads-lead-generation",
    readTime: "6 min read",
  },
];

const technologyRows: TechnologyLogo[][] = [
  [
    {
      name: "Google Ads",
      image: "/assets/technologies/google-ads.svg",
      alt: "Google Ads",
    },
    {
      name: "Meta Ads",
      image: "/assets/technologies/meta.svg",
      alt: "Meta",
    },
    {
      name: "Google Analytics",
      image: "/assets/technologies/google-analytics.svg",
      alt: "Google Analytics",
    },
    {
      name: "Google Tag Manager",
      image: "/assets/technologies/google-tag-manager.svg",
      alt: "Google Tag Manager",
    },
  ],
  [
    {
      name: "Looker Studio",
      image: "/assets/technologies/looker-studio.svg",
      alt: "Looker Studio",
    },
    {
      name: "LinkedIn",
      image: "/assets/technologies/linkedin.svg",
      alt: "LinkedIn",
    },
    {
      name: "YouTube",
      image: "/assets/technologies/youtube.svg",
      alt: "YouTube",
    },
    {
      name: "WordPress",
      image: "/assets/technologies/wordpress.svg",
      alt: "WordPress",
    },
  ],
  [
    {
      name: "Shopify",
      image: "/assets/technologies/shopify.svg",
      alt: "Shopify",
    },
    {
      name: "HubSpot",
      image: "/assets/technologies/hubspot.svg",
      alt: "HubSpot",
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

const performanceSlides = [
  {
    image: "/assets/performance-marketing/performance-1.webp",
    alt: "Performance marketing campaign dashboard",
  },
  {
    image: "/assets/performance-marketing/performance-2.webp",
    alt: "Paid advertising analytics",
  },
  {
    image: "/assets/performance-marketing/performance-3.webp",
    alt: "Digital campaign optimisation",
  },
  {
    image: "/assets/performance-marketing/performance-4.webp",
    alt: "Lead generation campaign",
  },
  {
    image: "/assets/performance-marketing/performance-5.webp",
    alt: "Performance marketing reporting",
  },
];

const strategySteps = [
  {
    number: "01",
    title: "Research",
    description: "Understand the market, audience, competitors and search intent.",
    icon: <Search className="h-5 w-5" />,
  },
  {
    number: "02",
    title: "Strategy",
    description: "Define channels, audiences, offers, budgets and conversion goals.",
    icon: <Target className="h-5 w-5" />,
  },
  {
    number: "03",
    title: "Campaign Setup",
    description: "Build campaigns, creatives, tracking, audiences and landing paths.",
    icon: <Settings2 className="h-5 w-5" />,
  },
  {
    number: "04",
    title: "Traffic",
    description: "Generate targeted traffic through relevant paid advertising channels.",
    icon: <MousePointerClick className="h-5 w-5" />,
  },
  {
    number: "05",
    title: "Conversion",
    description: "Turn qualified visits into leads, enquiries, purchases or actions.",
    icon: <UserCheck className="h-5 w-5" />,
  },
  {
    number: "06",
    title: "Optimisation",
    description: "Use campaign data to refine audiences, creative, bids and pages.",
    icon: <LineChart className="h-5 w-5" />,
  },
  {
    number: "07",
    title: "Scale",
    description: "Increase investment where performance data supports expansion.",
    icon: <TrendingUp className="h-5 w-5" />,
  },
];

const acquisitionSteps = [
  {
    title: "Ad Impression",
    description: "A relevant person sees the campaign.",
    icon: <Eye className="h-5 w-5" />,
  },
  {
    title: "Click",
    description: "The message creates enough intent to visit.",
    icon: <MousePointerClick className="h-5 w-5" />,
  },
  {
    title: "Landing Page",
    description: "The visitor reaches a focused conversion experience.",
    icon: <Monitor className="h-5 w-5" />,
  },
  {
    title: "Lead",
    description: "The visitor submits an enquiry or takes the target action.",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Qualified Lead",
    description: "The enquiry matches the agreed customer criteria.",
    icon: <UserCheck className="h-5 w-5" />,
  },
  {
    title: "Customer",
    description: "The acquisition journey reaches a business outcome.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
];

const retargetingSteps = [
  {
    title: "Visitor",
    description: "A person interacts with the website or product.",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Leaves Website",
    description: "The person leaves without completing the target action.",
    icon: <ExternalLink className="h-5 w-5" />,
  },
  {
    title: "Retargeting Ad",
    description: "A relevant follow-up message brings the brand back into view.",
    icon: <RefreshCw className="h-5 w-5" />,
  },
  {
    title: "Returns",
    description: "The visitor comes back through a relevant campaign.",
    icon: <MousePointerClick className="h-5 w-5" />,
  },
  {
    title: "Conversion",
    description: "The returning visitor completes the intended action.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
];


const leftFaqs: FAQ[] = [
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
];

const rightFaqs: FAQ[] = [
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

function DashboardMetric({
  label,
  value,
  change,
  icon,
}: {
  label: string;
  value: string;
  change?: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
          {label}
        </span>
        <span className="text-[#F8BC04]">{icon}</span>
      </div>
      <div className="mt-3 text-xl font-bold text-white sm:text-2xl">
        {value}
      </div>
      {change && (
        <div className="mt-1 text-[11px] text-white/40">{change}</div>
      )}
    </div>
  );
}

function CampaignDashboard({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#080808] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-6">
      <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#F8BC04]/10 blur-3xl" />

      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F8BC04]">
            PERFORMANCE DASHBOARD
          </div>
          <div className="mt-1 text-sm font-bold text-white">
            Campaign Overview
          </div>
        </div>

        <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] text-white/50">
          Live Data UI
        </div>
      </div>

      <div className="relative z-10 mt-4 grid grid-cols-2 gap-3">
        <DashboardMetric
          label="ROAS"
          value="—"
          change="Account data"
          icon={<TrendingUp className="h-4 w-4" />}
        />
        <DashboardMetric
          label="CPA"
          value="—"
          change="Account data"
          icon={<Gauge className="h-4 w-4" />}
        />
        <DashboardMetric
          label="CPL"
          value="—"
          change="Account data"
          icon={<Target className="h-4 w-4" />}
        />
        <DashboardMetric
          label="Conversion Rate"
          value="—"
          change="Account data"
          icon={<BarChart3 className="h-4 w-4" />}
        />
      </div>

      <div className="relative z-10 mt-3 grid grid-cols-2 gap-3">
        <DashboardMetric
          label="Leads"
          value="—"
          change="Tracked conversions"
          icon={<Users className="h-4 w-4" />}
        />
        <DashboardMetric
          label="Revenue"
          value="—"
          change="Where ecommerce tracking applies"
          icon={<ShoppingCart className="h-4 w-4" />}
        />
      </div>

      {!compact && (
        <div className="relative z-10 mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white">
              Conversion Trend
            </span>
            <LineChart className="h-4 w-4 text-[#F8BC04]" />
          </div>

          <div className="mt-5 flex h-28 items-end gap-2">
            {[28, 42, 34, 55, 48, 68, 60, 82, 74, 92, 80, 100].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-sm bg-[#F8BC04]/70 transition-all duration-300 hover:bg-[#F8BC04]"
                  style={{ height: `${height}%` }}
                />
              )
            )}
          </div>

          <div className="mt-3 flex justify-between text-[9px] uppercase tracking-widest text-white/25">
            <span>Period Start</span>
            <span>Period End</span>
          </div>
        </div>
      )}
    </div>
  );
}

function StrategyStep({
  number,
  title,
  description,
  icon,
  index,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <div className="group relative">
      <div className="flex items-center gap-3">
        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#F8BC04]/60 bg-black text-[#F8BC04] transition-colors group-hover:bg-[#F8BC04] group-hover:text-black">
          {icon}
        </div>

        <span className="text-[10px] font-black tracking-[0.16em] text-[#F8BC04]">
          {number}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/55">
          {description}
        </p>
      </div>

      {index < 6 && (
        <div className="absolute left-12 top-12 hidden h-px w-[calc(100%-48px)] bg-white/10 lg:block" />
      )}
    </div>
  );
}

export default function PerformanceMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [performanceSlide, setPerformanceSlide] = useState(0);
  const [activePrimaryChannel, setActivePrimaryChannel] = useState("google");
  const [activeSecondaryChannel, setActiveSecondaryChannel] = useState("youtube");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPerformanceSlide(
        (current) => (current + 1) % performanceSlides.length
      );
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

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

        .pm-section {
          padding-top: 90px;
          padding-bottom: 90px;
        }

        .pm-hero-image {
          animation: pmHeroFloat 6s ease-in-out infinite;
        }

        @keyframes pmHeroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .pm-slider-track {
          animation: pmSlider 35s linear infinite;
        }

        @keyframes pmSlider {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .pm-slider-wrapper:hover .pm-slider-track {
          animation-play-state: paused;
        }

        .pm-step-grid {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 28px;
        }

        .pm-step-line {
          position: absolute;
          left: 6%;
          right: 6%;
          top: 24px;
          height: 1px;
          background: rgba(255,255,255,0.14);
        }

        .pm-acquisition-timeline {
          width: 100%;
        }

        .pm-acquisition-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 24px;
        }

        .pm-acquisition-line {
          position: absolute;
          left: 8.33%;
          right: 8.33%;
          top: 28px;
          height: 1px;
          background: linear-gradient(90deg, rgba(248,188,4,0.15), rgba(248,188,4,0.55), rgba(248,188,4,0.15));
          transform-origin: left center;
        }

        .pm-acquisition-step {
          min-width: 0;
          text-align: center;
        }

        .pm-acquisition-icon {
          position: relative;
          z-index: 2;
          display: flex;
          width: 56px;
          height: 56px;
          margin: 0 auto;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(248,188,4,0.65);
          border-radius: 999px;
          background: #050505;
          color: #F8BC04;
          box-shadow: 0 0 0 8px #000, 0 0 24px rgba(248,188,4,0.08);
        }

        .pm-before-after {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 24px;
          background: #090909;
        }

        .pm-callout {
          position: absolute;
          z-index: 4;
          border: 1px solid rgba(248,188,4,0.45);
          border-radius: 999px;
          background: rgba(0,0,0,0.82);
          padding: 8px 12px;
          font-size: 10px;
          font-weight: 800;
          color: #F8BC04;
          backdrop-filter: blur(10px);
        }

        .pm-report-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 14px;
        }

        .pm-report-bar {
          height: 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          overflow: hidden;
        }

        .pm-report-bar > span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: #F8BC04;
        }

        .pm-retarget-path {
          position: relative;
        }

        .pm-retarget-path::before {
          content: "";
          position: absolute;
          left: 8%;
          right: 8%;
          top: 31px;
          height: 1px;
          background: rgba(255,255,255,0.12);
        }

        .pm-technology-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .pm-technology-item {
          display: flex;
          min-width: 0;
          align-items: center;
          gap: 20px;
          color: #fff;
        }

        .pm-technology-image-wrap {
          position: relative;
          width: 74px;
          height: 74px;
          flex: 0 0 74px;
        }

        .pm-technology-image {
          object-fit: contain;
          object-position: center;
          filter: brightness(0) invert(1);
        }

        .pm-technology-name {
          white-space: nowrap;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: clamp(20px, 1.8vw, 32px);
          line-height: 1;
          font-weight: 600;
          color: #fff;
        }

        @media (max-width: 1100px) {
          .pm-step-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            row-gap: 50px;
          }

          .pm-step-line {
            display: none;
          }

          .pm-report-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .pm-section {
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

          .pm-hero-image {
            animation: none;
          }

          .pm-step-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 30px 20px;
          }

          .pm-acquisition-grid {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .pm-acquisition-line {
            top: 28px;
            bottom: 28px;
            left: 50%;
            right: auto;
            width: 1px;
            height: auto;
            background: linear-gradient(180deg, rgba(248,188,4,0.15), rgba(248,188,4,0.55), rgba(248,188,4,0.15));
          }

          .pm-retarget-path::before {
            display: none;
          }

          .pm-technology-row {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 28px 18px;
          }

          .pm-technology-item {
            gap: 12px;
          }

          .pm-technology-image-wrap {
            width: 48px;
            height: 48px;
            flex-basis: 48px;
          }

          .pm-technology-name {
            font-size: 17px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pm-hero-image,
          .pm-slider-track {
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

          <span className="font-bold text-white">Performance Marketing</span>
        </nav>
      </section>

      {/* 2. HERO */}
      <section className="pm-section relative overflow-hidden bg-black">
        <div className="mx-auto grid max-w-[1550px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
          <div className="relative z-20 lg:col-span-6">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F8BC04] sm:text-sm">
              [ PERFORMANCE MARKETING ]
            </span>

            <h1 className="mt-5 font-bold leading-[0.96] tracking-[-1.5px]">
              <span className="block text-white">Advertising Built</span>
              <span className="highlight-font block text-[#F8BC04]">
                Around Results
              </span>
            </h1>

            <p className="mt-6 max-w-[680px] leading-relaxed text-white/70">
              Big Beans Digital plans and manages performance marketing
              campaigns around measurable business goals. We connect audience
              research, paid advertising, conversion tracking, landing pages
              and continuous optimisation so your advertising budget is tied to
              real actions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/connect"
                className="inline-flex items-center justify-between gap-6 rounded-full bg-[#F8BC04] px-7 py-3.5 text-sm font-extrabold text-black transition-all duration-300 hover:scale-105 hover:bg-white"
              >
                <span>Plan Your Campaign</span>
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
                <div className="text-lg font-bold text-white">DATA</div>
                <div className="mt-1 text-xs text-white/50">
                  Measured Decisions
                </div>
              </div>

              <div className="border-l border-[#F8BC04] pl-3">
                <div className="text-lg font-bold text-white">PAID</div>
                <div className="mt-1 text-xs text-white/50">
                  Targeted Traffic
                </div>
              </div>

              <div className="border-l border-[#F8BC04] pl-3">
                <div className="text-lg font-bold text-white">CRO</div>
                <div className="mt-1 text-xs text-white/50">
                  Better Conversion
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[500px] lg:col-span-6">
            <div className="pm-hero-image absolute inset-0 flex items-center justify-center">
              <div className="relative h-[480px] w-full max-w-[720px]">
                <Image
                  src="/assets/performance-marketing/hero.webp"
                  alt="Performance marketing campaign dashboard"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5 z-20 lg:left-10 lg:right-10">
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black/85 p-4 backdrop-blur-md">
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {[
                    ["ROAS", "—"],
                    ["CPA", "—"],
                    ["CPL", "—"],
                    ["CTR", "—"],
                    ["LEADS", "—"],
                    ["REVENUE", "—"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="text-[8px] font-bold tracking-widest text-white/35">
                        {label}
                      </div>
                      <div className="mt-1 text-sm font-bold text-white">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. USPs / WHY CHOOSE US */}
      <section className="pm-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">
                [ WHY CHOOSE US ]
              </span>

              <h2 className="mt-4 font-bold leading-[0.95]">
                Performance Marketing
                <br />
                <span className="highlight-font text-[#F8BC04]">
                  Built Around Business Outcomes
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-relaxed text-white/60">
                Performance marketing works best when targeting, creative,
                traffic, conversion tracking and optimisation are treated as
                one system. We use campaign data to decide what to test,
                improve and scale.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Data-driven campaign planning",
                  "Precise audience and intent targeting",
                  "Conversion-focused acquisition",
                  "Continuous campaign optimisation",
                  "Measurable reporting and clear accountability",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/10 pb-3 text-sm text-white/70"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F8BC04]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#080808] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
                <Image
                  src="/assets/performance-marketing/why-choose-us-dashboard.webp"
                  alt="Performance marketing dashboard showing campaign performance metrics"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUST / RESULTS */}
      <section className="pm-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">
                [ TRUST / RESULTS ]
              </span>

              <h2 className="mt-4 font-bold leading-tight">
                Campaign Work That Can Be
                <br />
                <span className="highlight-font text-[#F8BC04]">
                  Reviewed and Measured
                </span>
              </h2>
            </div>

            <p className="max-w-xl leading-relaxed text-white/55">
              Explore campaign examples across lead generation, ecommerce,
              B2B and acquisition. Verified campaign metrics can be added here
              when the corresponding client data is approved for publication.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group overflow-hidden rounded-[26px] border border-white/10 bg-[#090909] transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]/40"
              >
                <div className="relative h-[270px] overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F8BC04]">
                      CAMPAIGN CASE STUDY
                    </div>
                    <div className="mt-1 text-lg font-bold text-white">
                      {study.client}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/35">
                    OBJECTIVE
                  </div>

                  <div className="mt-2 text-base font-bold text-white">
                    {study.objective}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {study.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold text-white/55"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-xs text-white/35">
                      Verified metrics: add when approved
                    </span>
                    <ArrowRight className="h-4 w-4 text-[#F8BC04]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PERFORMANCE MARKETING STRATEGY / HOW WE WORK */}
      <section className="pm-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">
              [ HOW WE WORK ]
            </span>

            <h2 className="mt-4 font-bold leading-tight">
              Performance Marketing Is a Process,
              <br />
              <span className="highlight-font text-[#F8BC04]">
                Not Just Running Ads
              </span>
            </h2>

            <p className="mt-4 leading-relaxed text-white/55">
              Every campaign moves through research, planning, execution,
              measurement and optimisation. The exact mix changes by business,
              audience, channel and conversion objective.
            </p>
          </div>

          <div className="relative mt-14">
            <div className="pm-step-line" />

            <div className="pm-step-grid">
              {strategySteps.map((step, index) => (
                <StrategyStep key={step.number} {...step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PAID ADVERTISING / CAMPAIGN MANAGEMENT */}
      <section className="pm-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          {/* First row: Google / Meta / LinkedIn */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">
                [ PAID ADVERTISING ]
              </span>

              <h2 className="mt-4 font-bold leading-[0.95]">
                Campaign Management
                <br />
                <span className="highlight-font text-[#F8BC04]">
                  Across the Right Channels
                </span>
              </h2>

              <p className="mt-6 max-w-2xl leading-relaxed text-white/60">
                Choose the advertising channels that match the audience,
                buying journey and business objective. Campaign setup,
                targeting, creative, tracking and optimisation are managed as
                connected parts of the acquisition process.
              </p>

              {(() => {
                const primaryChannels = paidChannels.filter((channel) =>
                  ["google", "meta", "linkedin"].includes(channel.id)
                );
                const activeChannel =
                  primaryChannels.find(
                    (channel) => channel.id === activePrimaryChannel
                  ) ?? primaryChannels[0];

                return (
                  <div className="mt-9">
                    <div className="flex overflow-x-auto border-b border-[#F8BC04]">
                      {primaryChannels.map((channel) => (
                        <button
                          key={channel.id}
                          type="button"
                          onClick={() => setActivePrimaryChannel(channel.id)}
                          className={`shrink-0 px-6 py-4 text-left text-base font-semibold transition-all sm:px-8 sm:text-lg ${
                            activeChannel.id === channel.id
                              ? "bg-[#F8BC04] text-black"
                              : "text-white hover:text-[#F8BC04]"
                          }`}
                        >
                          {channel.name}
                        </button>
                      ))}
                    </div>

                    <div className="pt-9">
                      <div className="text-[9px] font-black tracking-[0.2em] text-[#F8BC04]">
                        {activeChannel.eyebrow}
                      </div>

                      <h3 className="mt-3 font-bold text-white">
                        {activeChannel.name}
                      </h3>

                      <p className="mt-5 max-w-2xl leading-relaxed text-white/60">
                        {activeChannel.description}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>

            <div className="lg:col-span-6">
              {(() => {
                const primaryChannels = paidChannels.filter((channel) =>
                  ["google", "meta", "linkedin"].includes(channel.id)
                );
                const activeChannel =
                  primaryChannels.find(
                    (channel) => channel.id === activePrimaryChannel
                  ) ?? primaryChannels[0];

                return (
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[4px] bg-[#090909]">
                    <Image
                      key={activeChannel.id}
                      src={activeChannel.image}
                      alt={activeChannel.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-all duration-500"
                    />
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Second row: YouTube / Display / Shopping */}
          <div className="mt-28 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="order-2 lg:order-1 lg:col-span-6">
              {(() => {
                const secondaryChannels = paidChannels.filter((channel) =>
                  ["youtube", "display", "shopping"].includes(channel.id)
                );
                const activeChannel =
                  secondaryChannels.find(
                    (channel) => channel.id === activeSecondaryChannel
                  ) ?? secondaryChannels[0];

                return (
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[4px] bg-[#090909]">
                    <Image
                      key={activeChannel.id}
                      src={activeChannel.image}
                      alt={activeChannel.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-all duration-500"
                    />
                  </div>
                );
              })()}
            </div>

            <div className="order-1 lg:order-2 lg:col-span-6">
              {(() => {
                const secondaryChannels = paidChannels.filter((channel) =>
                  ["youtube", "display", "shopping"].includes(channel.id)
                );
                const activeChannel =
                  secondaryChannels.find(
                    (channel) => channel.id === activeSecondaryChannel
                  ) ?? secondaryChannels[0];

                return (
                  <div>
                    <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">
                      [ CAMPAIGN CHANNELS ]
                    </span>

                    <h2 className="mt-4 font-bold leading-[0.95]">
                      Extend Your Paid Reach
                      <br />
                      <span className="highlight-font text-[#F8BC04]">
                        Beyond Core Search & Social
                      </span>
                    </h2>

                    <div className="mt-9 flex overflow-x-auto border-b border-[#F8BC04]">
                      {secondaryChannels.map((channel) => (
                        <button
                          key={channel.id}
                          type="button"
                          onClick={() => setActiveSecondaryChannel(channel.id)}
                          className={`shrink-0 px-4 py-4 text-left text-sm font-semibold transition-all sm:px-6 sm:text-base ${
                            activeChannel.id === channel.id
                              ? "bg-[#F8BC04] text-black"
                              : "text-white hover:text-[#F8BC04]"
                          }`}
                        >
                          {channel.name}
                        </button>
                      ))}
                    </div>

                    <div className="pt-9">
                      <div className="text-[9px] font-black tracking-[0.2em] text-[#F8BC04]">
                        {activeChannel.eyebrow}
                      </div>

                      <h3 className="mt-3 font-bold text-white">
                        {activeChannel.name}
                      </h3>

                      <p className="mt-5 max-w-2xl leading-relaxed text-white/60">
                        {activeChannel.description}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* 7. LEAD GENERATION & CUSTOMER ACQUISITION */}
      <section className="pm-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">
              [ LEAD GENERATION & CUSTOMER ACQUISITION ]
            </span>

            <h2 className="mt-4 font-bold leading-tight">
              Turn Paid Traffic Into
              <br />
              <span className="highlight-font text-[#F8BC04]">
                Potential Customers
              </span>
            </h2>

            <p className="mt-5 leading-relaxed text-white/55">
              Advertising only creates an opportunity. The acquisition system
              needs to move that opportunity through a relevant landing page,
              conversion action, qualification step and customer journey.
            </p>
          </div>

          <div className="pm-acquisition-timeline relative mt-14">
            <div className="pm-acquisition-line" aria-hidden="true" />

            <div className="pm-acquisition-grid">
              {acquisitionSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="pm-acquisition-step relative z-10"
                  initial={{ opacity: 0, y: 34, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="pm-acquisition-icon">
                    {step.icon}
                  </div>

                  <div className="mt-5 text-sm font-bold text-white sm:text-base">
                    {step.title}
                  </div>

                  <p className="mt-2 text-xs leading-relaxed text-white/45 sm:text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONVERSION RATE OPTIMISATION / LANDING PAGE OPTIMISATION */}
      <section className="pm-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">
                [ CRO / LANDING PAGE OPTIMISATION ]
              </span>

              <h2 className="mt-4 font-bold leading-[0.95]">
                More Clicks Do Not Help
                <br />
                <span className="highlight-font text-[#F8BC04]">
                  If the Page Does Not Convert
                </span>
              </h2>

              <p className="mt-6 leading-relaxed text-white/60">
                We can review the experience after the ad click, including
                messaging, page structure, CTA placement, forms, mobile
                usability and conversion friction. The aim is to make the next
                step clearer for the visitor.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  ["01", "Clearer CTA"],
                  ["02", "Focused Messaging"],
                  ["03", "Simpler Forms"],
                  ["04", "Better Structure"],
                  ["05", "Mobile UX"],
                  ["06", "A/B Testing"],
                ].map(([number, label]) => (
                  <div
                    key={number}
                    className="flex items-center gap-3 border-t border-white/10 pt-3"
                  >
                    <span className="text-[10px] font-black text-[#F8BC04]">
                      {number}
                    </span>
                    <span className="text-xs font-semibold text-white/65">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="pm-before-after">
                  <div className="border-b border-white/10 px-5 py-4">
                    <span className="text-[10px] font-black tracking-[0.18em] text-white/35">
                      BEFORE
                    </span>
                  </div>

                  <div className="relative h-[390px]">
                    <Image
                      src="/assets/performance-marketing/cro/before.webp"
                      alt="Landing page before optimisation"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />

                    <span className="pm-callout left-4 top-20">
                      MESSAGE
                    </span>
                    <span className="pm-callout right-4 top-48">
                      CTA
                    </span>
                    <span className="pm-callout left-8 bottom-16">
                      FORM
                    </span>
                  </div>
                </div>

                <div className="pm-before-after">
                  <div className="border-b border-white/10 px-5 py-4">
                    <span className="text-[10px] font-black tracking-[0.18em] text-[#F8BC04]">
                      AFTER
                    </span>
                  </div>

                  <div className="relative h-[390px]">
                    <Image
                      src="/assets/performance-marketing/cro/after.webp"
                      alt="Landing page after optimisation"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />

                    <span className="pm-callout left-4 top-16">
                      CLEAR CTA
                    </span>
                    <span className="pm-callout right-4 top-32">
                      VALUE
                    </span>
                    <span className="pm-callout left-8 bottom-20">
                      SIMPLE FORM
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-xs text-white/35">
                Example UI representation. Replace with approved client
                before/after screenshots or test data where available.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. DATA, ANALYTICS & CAMPAIGN OPTIMISATION */}
      <section className="pm-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#080808] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
                <Image
                  src="/assets/performance-marketing/data-analytics.webp"
                  alt="Performance marketing data analytics and campaign optimisation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">
                [ DATA / ANALYTICS / OPTIMISATION ]
              </span>

              <h2 className="mt-4 font-bold leading-[0.95]">
                Decisions Based on
                <br />
                <span className="highlight-font text-[#F8BC04]">
                  Campaign Data
                </span>
              </h2>

              <p className="mt-6 max-w-2xl leading-relaxed text-white/60">
                Campaign optimisation depends on reliable tracking and useful
                signals. We can analyse spend, traffic, keywords, audiences,
                creative, conversions, acquisition costs and other relevant
                data to identify what needs attention.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                {[
                  ["Conversion Tracking", Database],
                  ["Audience Behaviour", Users],
                  ["Keyword Performance", Search],
                  ["Ad Performance", BarChart3],
                  ["Attribution Signals", Layers3],
                  ["Ongoing Optimisation", RefreshCw],
                ].map(([label, Icon]) => {
                  const IconComponent = Icon as typeof Database;
                  return (
                    <div
                      key={label as string}
                      className="flex items-center gap-3 text-sm text-white/65"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#F8BC04]/30 bg-[#F8BC04]/5">
                        <IconComponent className="h-3.5 w-3.5 text-[#F8BC04]" />
                      </span>
                      <span>{label as string}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. RETARGETING & CUSTOMER RE-ENGAGEMENT */}
      <section className="pm-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">
              [ RETARGETING & RE-ENGAGEMENT ]
            </span>

            <h2 className="mt-4 font-bold leading-tight">
              Bring Interested Visitors
              <br />
              <span className="highlight-font text-[#F8BC04]">
                Back Into the Journey
              </span>
            </h2>

            <p className="mt-5 leading-relaxed text-white/55">
              Retargeting can reconnect with people who have already interacted
              with the business. Depending on the campaign, that can include
              website visitors, product viewers, previous leads or abandoned
              purchase journeys.
            </p>
          </div>

          <div className="pm-retarget-path">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {retargetingSteps.map((step, index) => (
                <div key={step.title} className="relative z-10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#F8BC04]/50 bg-black text-[#F8BC04]">
                    {step.icon}
                  </div>

                  <div className="mt-5 text-center">
                    <h3 className="font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">
                      {step.description}
                    </p>
                  </div>

                  {index < retargetingSteps.length - 1 && (
                    <ArrowRight className="absolute right-[-18px] top-6 hidden h-5 w-5 text-[#F8BC04]/50 lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. REPORTING / TRANSPARENCY */}
      <section className="pm-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">
                [ REPORTING / TRANSPARENCY ]
              </span>

              <h2 className="mt-4 font-bold leading-[0.95]">
                Know What Is Happening
                <br />
                <span className="highlight-font text-[#F8BC04]">
                  With Your Ad Budget
                </span>
              </h2>

              <p className="mt-6 leading-relaxed text-white/60">
                Reporting should make campaign activity understandable. We can
                structure reporting around spend, traffic, leads, conversions,
                acquisition costs, channel performance and optimisation work,
                using the actual account data available.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  "Ad Spend",
                  "Leads",
                  "Conversions",
                  "CPA / CPL",
                  "ROAS",
                  "Optimisation Updates",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-xs font-semibold text-white/65"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#090909] shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
                <Image
                  src="/assets/performance-marketing/reporting-transparency.webp"
                  alt="Performance marketing reporting and campaign transparency dashboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FIVE-IMAGE CENTER SLIDER */}
      <section className="pm-section relative overflow-hidden bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">
              [ CAMPAIGN VISUALS ]
            </span>

            <h2 className="mt-4 font-bold">
              Performance Marketing in{" "}
              <span className="highlight-font text-[#F8BC04]">
                Practice
              </span>
            </h2>
          </div>

          <div className="pm-slider-wrapper relative overflow-hidden rounded-[28px] border border-white/10 bg-[#080808]">
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#080808] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#080808] to-transparent" />

            <div className="pm-slider-track flex w-max gap-4 p-4">
              {[...performanceSlides, ...performanceSlides].map(
                (slide, index) => (
                  <div
                    key={`${slide.image}-${index}`}
                    className="relative h-[300px] w-[430px] shrink-0 overflow-hidden rounded-[22px] border border-white/10 bg-[#111]"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      sizes="430px"
                      className="object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {performanceSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show campaign image ${index + 1}`}
                onClick={() => setPerformanceSlide(index)}
                className={
                  performanceSlide === index
                    ? "h-2.5 w-7 rounded-full bg-[#F8BC04]"
                    : "h-2.5 w-2.5 rounded-full bg-white/15 transition-colors hover:bg-white/30"
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* 13. TECHNOLOGIES WE WORK WITH */}
      <section className="pm-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="text-center">
            <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">
              [ TECHNOLOGIES WE WORK WITH ]
            </span>

            <h2 className="mt-4 font-bold">
              Platforms, Analytics &{" "}
              <span className="highlight-font text-[#F8BC04]">
                Marketing Technology
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/50">
              We use the advertising, analytics, tracking and commerce tools
              that fit the campaign, website and measurement requirements.
            </p>
          </div>

          <div className="mt-14 space-y-12">
            {technologyRows.map((row, rowIndex) => (
              <div key={rowIndex} className="pm-technology-row">
                {row.map((technology) => (
                  <div
                    key={technology.name}
                    className="pm-technology-item"
                  >
                    <div className="pm-technology-image-wrap">
                      <Image
                        src={technology.image}
                        alt={technology.alt}
                        fill
                        sizes="74px"
                        className="pm-technology-image"
                      />
                    </div>

                    <span className="pm-technology-name">
                      {technology.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. OUR RECENT WORK */}
      <section className="pm-section relative bg-black">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">
                [ OUR RECENT WORK ]
              </span>

              <h2 className="mt-4 font-bold leading-tight">
                Work Across
                <br />
                <span className="highlight-font text-[#F8BC04]">
                  Digital Growth
                </span>
              </h2>
            </div>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-[#F8BC04]"
            >
              View All Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

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
