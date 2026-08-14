import Image from "next/image";
import Link from "next/link";

const thumbnail =
  "/assets/blog/allblogs/website-seo-audit/website-seo-audit-thumbnail.png";

const services = [
  {
    title: "Social Media Marketing",
    description: "Build brand awareness and grow your audience across social platforms.",
    href: "/services/social-media-marketing",
  },
  
  {
    title: "Performance Marketing",
    description:
      "Reach the right audience with targeted advertising campaigns built for measurable growth.",
    href: "/services/google-ads-meta-ads",
    icon: "target",
  },
  {
    title: "Website Development",
    description: "Create fast, responsive and SEO-friendly websites that convert.",
    href: "/services/website-development",
  },
  {
    title: "Branding",
    description: "Build a strong brand identity that connects with your audience.",
    href: "/services/branding",
  },
];

const featuredPosts = [
  {
    title: "How to Audit Your Own Website SEO Before Hiring an Agency",
    date: "August 14, 2026",
    image: thumbnail,
    href: "/blog/allblogs/website-seo-audit",
  },
  {
    title: "Stop Guessing the Weather: How Agile Brands Turn Real-Time Data into Revenue",
    date: "August 14, 2026",
    image:
      "/assets/blog/allblogs/real-time-weather-marketing/real-time-weather-marketing-card.png",
    href: "/blog/allblogs/real-time-weather-marketing",
  },
];

const checklist = [
  "Check whether important pages are indexed",
  "Review your website's mobile experience",
  "Test page speed and Core Web Vitals",
  "Find broken links and 404 errors",
  "Review internal links",
  "Check page titles",
  "Review meta descriptions",
  "Look for duplicate metadata",
  "Check whether important pages target relevant keywords",
  "Make sure key services have dedicated pages",
  "Review content quality",
  "Check whether content matches search intent",
  "Identify outdated or thin content",
  "Review your website navigation",
];

const auditAreas = [
  {
    number: "01",
    title: "Technical SEO",
    text: "Make sure search engines can crawl, understand and access your important pages.",
  },
  {
    number: "02",
    title: "On-Page SEO",
    text: "Review titles, descriptions, headings, keywords and the structure of important pages.",
  },
  {
    number: "03",
    title: "Content Quality",
    text: "Check whether your content genuinely answers the questions your audience is searching for.",
  },
  {
    number: "04",
    title: "Website Speed",
    text: "Identify slow pages, oversized media and performance problems affecting user experience.",
  },
  {
    number: "05",
    title: "Internal Linking",
    text: "Make sure important pages are connected naturally so visitors and search engines can discover them.",
  },
  {
    number: "06",
    title: "Mobile Experience",
    text: "Check whether your website remains useful, readable and easy to navigate on smaller screens.",
  },
];

const keywordQuestions = [
  "Does each important service have a dedicated page?",
  "Does each page focus on a clear topic?",
  "Does the page match what the searcher actually wants?",
  "Are the keywords relevant to people who could become customers?",
];

const contentQuestions = [
  "What does this company do?",
  "Who does it help?",
  "What service or product is being offered?",
  "Why should I choose it?",
  "What should I do next?",
];

const speedMetrics = [
  {
    label: "LCP",
    title: "Largest Contentful Paint",
    description: "Measures how quickly the main content becomes visible.",
  },
  {
    label: "INP",
    title: "Interaction to Next Paint",
    description: "Measures how responsive the page is to user interactions.",
  },
  {
    label: "CLS",
    title: "Cumulative Layout Shift",
    description: "Measures unexpected movement of content while the page loads.",
  },
];

function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <span className="flex h-9 min-w-9 items-center justify-center rounded-md bg-[#F8BC04] px-2 text-sm font-extrabold text-black">
        {number}
      </span>

      <h2 className="pt-1 text-[25px] font-extrabold leading-[1.15] tracking-[-0.5px] text-[#171717] md:text-[30px]">
        {title}
      </h2>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12.5L9.5 17L19 7.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatGPTIcon() {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 4.5C12.9 4.5 10.3 6.5 9.4 9.3C6.3 9.1 3.7 11.5 3.7 14.6C3.7 16.2 4.4 17.7 5.5 18.8C4.4 21.6 5.8 24.8 8.7 25.8C10.2 26.3 11.8 26.2 13.1 25.4C15.4 27.5 18.9 27.3 20.8 25C21.8 23.8 22.2 22.3 21.9 20.8C24.9 20.4 27.2 17.8 27.2 14.7C27.2 11.6 24.8 9.1 21.8 8.8C20.8 6.3 18.6 4.5 16 4.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 9.4L16 13.1L22.3 9.3M5.6 18.7L12 15M13 25.3L12.1 17.8M21.8 20.6L16 17.2L16.2 13.1M27 14.7L20.4 18.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GeminiIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 2.8C17.4 9.6 21.7 14.1 29.2 16C21.7 17.9 17.4 22.4 16 29.2C14.6 22.4 10.3 17.9 2.8 16C10.3 14.1 14.6 9.6 16 2.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function WebsiteSeoAuditPage() {
  const postedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date());

  const articleTitle =
    "How to Audit Your Own Website SEO Before Hiring an Agency";

  const aiPrompt = encodeURIComponent(
    `Summarize the following BIGBEANS DIGITAL blog in a clear, practical way. Highlight the most important SEO lessons, actionable checks, tools mentioned, and key takeaways for a business owner. Blog title: "${articleTitle}". URL: ${typeof window !== "undefined" ? window.location.href : "BIGBEANS DIGITAL blog"}`
  );

  return (
    <>
      

      <main className="bg-[#FAFAFA] text-[#171717]">
        {/* BREADCRUMB */}
        <div className="mx-auto flex max-w-[1380px] justify-center px-5 pt-7 md:px-8 lg:px-10">
          <div className="inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-[#E8E8E8] bg-white px-5 py-3 text-[12px] shadow-[0_8px_25px_rgba(0,0,0,0.05)] md:text-[13px]">
            <Link
              href="/"
              className="shrink-0 transition-colors hover:text-[#F8BC04]"
            >
              Home
            </Link>

            <span className="text-[#F8BC04]">→</span>

            <Link
              href="/blog"
              className="shrink-0 transition-colors hover:text-[#F8BC04]"
            >
              Blogs
            </Link>

            <span className="text-[#F8BC04]">→</span>

            <span className="truncate font-bold uppercase">
              Website SEO Audit
            </span>
          </div>
        </div>

        {/* HERO */}
        <section className="mx-auto max-w-[1380px] px-5 pb-12 pt-8 md:px-8 md:pt-12 lg:px-10 lg:pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
            {/* LEFT */}
            <div>
              <h1 className="max-w-[650px] text-[42px] font-black leading-[0.98] tracking-[-2px] md:text-[58px] lg:text-[68px]">
                How to Audit Your Own Website{" "}
                <span className="text-[#F8BC04]">SEO</span> Before Hiring an
                Agency
              </h1>

              <p className="mt-7 max-w-[610px] text-[17px] leading-[1.65] text-[#3F3F3F] md:text-[18px]">
                A step-by-step DIY SEO audit guide to help you find issues,
                improve rankings, and hire the right SEO agency.
              </p>

              {/* DATE + AUTHOR */}
              <div className="mt-7 flex flex-wrap items-center gap-3 text-[13px] text-[#555]">
                <span>{postedDate}</span>

                <span className="h-4 w-px bg-[#BDBDBD]" />

                <span className="font-extrabold tracking-[0.3px] text-[#171717]">
                  BY BIG BEANS DIGITAL
                </span>
              </div>
            </div>

            {/* THUMBNAIL */}
            <div className="relative overflow-hidden rounded-[34px] bg-[#F8BC04]">
              <div className="relative aspect-[1350/1080] w-full">
                <Image
                  src={thumbnail}
                  alt={articleTitle}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MAIN BLOG AREA */}
        <section className="mx-auto max-w-[1380px] px-5 pb-20 md:px-8 lg:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_370px] lg:gap-14">
            {/* LEFT CONTENT */}
            <article className="min-w-0">
              {/* AI SUMMARY */}
              <div className="mb-10 flex min-h-[68px] w-full items-center justify-between gap-5 rounded-[16px] bg-[#111111] px-7 py-4 md:px-7">
                <span className="text-[16px] font-medium text-[#F8BC04] md:text-[18px]">
                  Summarize with AI
                </span>

                <div className="flex shrink-0 items-center gap-6">
                  <a
                    href={`https://chatgpt.com/?q=${aiPrompt}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Summarize this blog with ChatGPT"
                    className="flex items-center justify-center text-[#F8BC04] transition-all hover:scale-110"
                  >
                    <ChatGPTIcon />
                  </a>

                  <a
                    href={`https://gemini.google.com/app?text=${aiPrompt}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Summarize this blog with Gemini"
                    className="flex items-center justify-center text-[#F8BC04] transition-all hover:scale-110"
                  >
                    <GeminiIcon />
                  </a>
                </div>
              </div>

              {/* INTRODUCTION */}
              <section className="mb-14">
                <div className="rounded-[22px] border border-[#ECECEC] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.035)] md:p-9">
                  <p className="text-[16px] leading-[1.8] text-[#333]">
                    If your website isn't getting enough traffic, enquiries,
                    or sales from Google, you may be wondering:
                  </p>

                  <div className="my-5 rounded-xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] px-5 py-4 text-[18px] font-bold leading-[1.55]">
                    Is my website SEO actually bad?
                  </div>

                  <p className="text-[16px] leading-[1.8] text-[#333]">
                    Before paying an SEO agency, you can perform a basic
                    website SEO audit yourself.
                  </p>

                  <p className="mt-4 text-[16px] leading-[1.8] text-[#333]">
                    You don't need to be an SEO expert. With a few free tools
                    and straightforward checks, you can identify common
                    problems with your{" "}
                    <strong>
                      speed, indexing, broken links, page titles, keywords,
                      content, and mobile experience
                    </strong>
                    .
                  </p>

                  <p className="mt-4 text-[16px] leading-[1.8] text-[#333]">
                    This DIY SEO audit won't replace a professional technical
                    audit, but it can help you understand where obvious
                    problems exist and whether your website needs deeper SEO
                    work.
                  </p>
                </div>
              </section>

              {/* WHAT IS SEO AUDIT */}
              <section className="mb-14">
                <SectionTitle
                  number="01"
                  title="What Is a Website SEO Audit?"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  A website SEO audit is a systematic review of your website
                  to find issues that may prevent search engines from
                  crawling, understanding, indexing, and ranking your pages
                  effectively.
                </p>

                <p className="mt-5 text-[16px] font-semibold leading-[1.7]">
                  A comprehensive SEO audit can examine:
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {auditAreas.map((item) => (
                    <div
                      key={item.number}
                      className="group rounded-2xl border border-[#E7E7E7] bg-white p-5 transition-all hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)]"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] text-[11px] font-bold text-white">
                          {item.number}
                        </span>

                        <span className="text-[#F8BC04]">↗</span>
                      </div>

                      <h3 className="text-[16px] font-extrabold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[13px] leading-[1.55] text-[#777]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl bg-[#171717] p-6 text-white md:p-7">
                  <p className="text-[15px] leading-[1.75] text-[#E5E5E5]">
                    For a business owner, you don't need to start with the
                    most technical areas.
                  </p>

                  <p className="mt-2 text-[19px] font-extrabold leading-[1.4]">
                    Start with these six basic checks.
                  </p>
                </div>
              </section>

              {/* SECTION 2 */}
              <section className="mb-14">
                <SectionTitle
                  number="02"
                  title="Check If Google Has Indexed Your Website"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  Before worrying about keywords or backlinks, make sure Google
                  can actually find your important pages.
                </p>

                <div className="my-7 overflow-hidden rounded-2xl border border-[#E7E7E7] bg-white">
                  <div className="bg-[#171717] px-6 py-4 text-sm font-bold text-white">
                    QUICK GOOGLE CHECK
                  </div>

                  <div className="p-6">
                    <p className="mb-3 text-[14px] text-[#666]">
                      Search Google for:
                    </p>

                    <div className="rounded-xl bg-[#F7F7F7] px-5 py-4 font-mono text-[15px] font-semibold">
                      site:yourwebsite.com
                    </div>

                    <p className="mt-3 text-[12px] italic text-[#777]">
                      Replace yourwebsite.com with your actual domain, e.g.
                      site:example.com
                    </p>
                  </div>
                </div>

                <h3 className="mt-7 text-[20px] font-extrabold">
                  What should you check?
                </h3>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Your homepage",
                    "Main service pages",
                    "Product or category pages",
                    "Important blog posts",
                    "Location pages, if applicable",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-[#E9E9E9] bg-white px-4 py-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFF3C5] text-[#E2A500]">
                        <CheckIcon />
                      </span>

                      <span className="text-[14px] font-semibold">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-[#F1D982] bg-[#FFF9E8] p-6">
                  <p className="text-[15px] leading-[1.75] text-[#444]">
                    Also look for pages that{" "}
                    <strong>shouldn't be appearing</strong>, such as
                    duplicate, outdated, or irrelevant URLs.
                  </p>

                  <p className="mt-4 text-[15px] leading-[1.75] text-[#444]">
                    If important pages aren't indexed, don't immediately assume
                    your website has been penalized. There may be a technical
                    reason, such as a{" "}
                    <strong>
                      noindex directive, crawling problem, canonicalization
                      issue, or lack of internal links
                    </strong>
                    .
                  </p>
                </div>

                <div className="mt-7 flex gap-4 rounded-2xl bg-[#171717] p-6 text-white">
                  <div className="text-[25px] text-[#F8BC04]">★</div>

                  <div>
                    <h3 className="font-extrabold">Quick DIY Check</h3>
                    <p className="mt-2 text-[14px] leading-[1.65] text-[#D4D4D4]">
                      Can Google find and index the pages that actually
                      generate business for me? If the answer is unclear, this
                      deserves further investigation.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 3 */}
              <section className="mb-14">
                <SectionTitle
                  number="03"
                  title="Test Your Website Speed and Core Web Vitals"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  Imagine clicking a Google result and waiting several seconds
                  for the website to load. Most people won't wait forever.
                </p>

                <p className="mt-4 text-[16px] leading-[1.8] text-[#444]">
                  Website performance affects user experience, and Google's
                  page experience systems include{" "}
                  <strong>Core Web Vitals</strong> as important measurements of
                  real-world page experience.
                </p>

                <div className="mt-7 grid gap-4 md:grid-cols-3">
                  {speedMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="relative overflow-hidden rounded-2xl border border-[#E7E7E7] bg-white p-6"
                    >
                      <div className="absolute right-4 top-4 text-[30px] font-black text-[#F8BC04]/30">
                        {metric.label}
                      </div>

                      <span className="relative z-10 inline-flex rounded-lg bg-[#171717] px-3 py-1 text-xs font-bold text-white">
                        {metric.label}
                      </span>

                      <h3 className="mt-6 text-[16px] font-extrabold">
                        {metric.title}
                      </h3>

                      <p className="mt-2 text-[13px] leading-[1.6] text-[#777]">
                        {metric.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-[21px] font-extrabold">
                    Don't obsess over getting a perfect score.
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                    Instead, look for obvious problems such as:
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Oversized images",
                      "Unoptimized media",
                      "Excessive JavaScript",
                      "Slow third-party scripts",
                      "Poor mobile performance",
                      "Heavy themes or plugins",
                      "Render-blocking resources",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl bg-white px-4 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                      >
                        <span className="text-[#F8BC04]">✓</span>
                        <span className="text-[14px] font-semibold">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-[22px] border border-[#E9E9E9] bg-white p-7">
                  <h3 className="text-[21px] font-extrabold">
                    Don't audit desktop only
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                    Your customers may be visiting from smartphones. Test your
                    important pages on mobile and ask:
                  </p>

                  <div className="my-5 border-l-4 border-[#F8BC04] pl-5 text-[17px] font-bold italic leading-[1.6]">
                    "Would I stay on this page if I were searching for this
                    service right now?"
                  </div>

                  <p className="text-[15px] leading-[1.8] text-[#555]">
                    If the answer is no, performance and usability should move
                    higher on your SEO priority list.
                  </p>
                </div>
              </section>

              {/* SECTION 4 */}
              <section className="mb-14">
                <SectionTitle
                  number="04"
                  title="Find Broken Links and 404 Errors"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  Broken links are another simple issue to look for during a
                  DIY SEO audit. A broken link may lead visitors to a page that
                  no longer exists, often producing a{" "}
                  <strong>404 Not Found</strong> error.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    "Point to deleted pages",
                    "Use incorrect URLs",
                    "Lead to 404 pages",
                    "Redirect unnecessarily",
                    "Point to outdated resources",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-[#E8E8E8] bg-white p-5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#171717] text-xs font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="pt-1 text-[14px] font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl bg-[#F2F2F2] p-6">
                  <span className="text-xs font-extrabold uppercase tracking-[1.5px] text-[#F0AA00]">
                    Think Like A Customer
                  </span>

                  <p className="mt-3 text-[16px] font-bold">
                    Homepage → SEO Services → SEO Audit → Contact
                  </p>

                  <p className="mt-3 text-[14px] leading-[1.7] text-[#666]">
                    Don't only check random pages. Follow the paths that matter
                    to your business.
                  </p>
                </div>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Check your internal links too
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  Internal links connect pages within your own website. They
                  help visitors discover related information and help search
                  engines understand how your content fits together.
                </p>

                <div className="mt-5 rounded-2xl border border-[#E7E7E7] bg-white p-6">
                  <p className="text-[14px] leading-[1.75] text-[#555]">
                    For example, a blog post about local SEO could naturally
                    link to your <strong>Local SEO Services</strong> page. Use
                    descriptive anchor text rather than vague phrases such as
                    "click here."
                  </p>
                </div>
              </section>

              {/* SECTION 5 */}
              <section className="mb-14">
                <SectionTitle
                  number="05"
                  title="Review Your Page Titles and Meta Descriptions"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  Your page title is one of the simplest on-page SEO elements
                  to review. Open your most important pages and check whether
                  their titles clearly describe what each page is about.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    "Missing title tags",
                    "Duplicate titles",
                    "Generic titles",
                    "Titles that are too long",
                    "Titles that don't reflect the page content",
                    "Missing or weak meta descriptions",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#E9E9E9] bg-white p-4 text-[14px] font-semibold"
                    >
                      <span className="mr-2 text-[#F8BC04]">●</span>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-[#E8E8E8] bg-[#F4F4F4] p-6">
                    <span className="text-xs font-bold uppercase tracking-[1.3px] text-[#888]">
                      Generic
                    </span>

                    <p className="mt-4 font-mono text-[14px] font-semibold">
                      Home | ABC Company
                    </p>
                  </div>

                  <div className="rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                    <span className="text-xs font-bold uppercase tracking-[1.3px] text-[#C48D00]">
                      Better
                    </span>

                    <p className="mt-4 text-[14px] font-bold leading-[1.6]">
                      SEO Services for Small Businesses | ABC Company
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-[#171717] p-6 text-white">
                  <p className="text-[15px] leading-[1.75] text-[#DDD]">
                    Your meta description should accurately summarize the page
                    and give searchers a reason to click.
                  </p>

                  <p className="mt-3 text-[15px] font-bold leading-[1.7]">
                    Don't force keywords into every sentence. Write for people
                    first, then make the topic clear to search engines.
                  </p>
                </div>
              </section>

              {/* SECTION 6 */}
              <section className="mb-14">
                <SectionTitle
                  number="06"
                  title="Check Whether You're Targeting the Right Keywords"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  You can have a technically healthy website and still
                  struggle with Google traffic if you're targeting the wrong
                  search terms.
                </p>

                <div className="mt-7 rounded-[22px] bg-[#171717] p-7 text-white">
                  <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#F8BC04]">
                    Example Keyword Set
                  </span>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "SEO agency in [city]",
                      "website SEO audit",
                      "local SEO services",
                      "digital marketing services for small businesses",
                      "technical SEO services",
                    ].map((keyword) => (
                      <div
                        key={keyword}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-[14px]"
                      >
                        <span className="mr-2 text-[#F8BC04]">#</span>
                        {keyword}
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Ask these four questions
                </h3>

                <div className="mt-5 space-y-3">
                  {keywordQuestions.map((question, index) => (
                    <div
                      key={question}
                      className="flex gap-4 rounded-2xl border border-[#E8E8E8] bg-white p-5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8BC04] text-xs font-extrabold">
                        {index + 1}
                      </span>

                      <p className="pt-1 text-[14px] font-semibold leading-[1.6]">
                        {question}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border-l-4 border-[#171717] bg-white p-6 shadow-[0_5px_20px_rgba(0,0,0,0.04)]">
                  <p className="text-[15px] leading-[1.8] text-[#555]">
                    A keyword with thousands of searches isn't automatically
                    valuable if those searches have nothing to do with your
                    business.
                  </p>

                  <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                    A local plumber, for example, may get far more commercial
                    value from a specific search such as{" "}
                    <strong>"emergency plumber in [city]"</strong> than from a
                    broad keyword with a much larger search volume.
                  </p>
                </div>
              </section>

              {/* SECTION 7 */}
              <section className="mb-14">
                <SectionTitle
                  number="07"
                  title="Check Your Content Against Search Intent"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  Now read your most important pages as if you were a potential
                  customer.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {contentQuestions.map((question, index) => (
                    <div
                      key={question}
                      className="group rounded-2xl border border-[#E8E8E8] bg-white p-5 transition-all hover:border-[#F8BC04]"
                    >
                      <span className="text-[12px] font-black text-[#F0AA00]">
                        0{index + 1}
                      </span>

                      <p className="mt-2 text-[15px] font-bold leading-[1.55]">
                        {question}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-[22px] bg-[#FFF7D8] p-7">
                  <p className="text-[15px] leading-[1.8] text-[#444]">
                    If your homepage begins with{" "}
                    <strong>"Welcome to Our Website"</strong>, you aren't
                    giving visitors much information.
                  </p>

                  <div className="mt-5 rounded-xl bg-white p-5">
                    <span className="text-xs font-bold uppercase tracking-[1.2px] text-[#999]">
                      Instead
                    </span>

                    <p className="mt-2 text-[17px] font-extrabold leading-[1.5]">
                      "SEO Services Helping Local Businesses Generate More
                      Qualified Leads"
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Look for thin or outdated content
                </h3>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Very little useful information",
                    "Outdated information",
                    "Duplicate content",
                    "Excessive keyword repetition",
                    "Generic content with little original value",
                    "Content that doesn't satisfy search intent",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl bg-white p-4"
                    >
                      <span className="mt-0.5 text-[#F8BC04]">✕</span>

                      <span className="text-[14px] font-medium leading-[1.5]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-white">
                  <p className="text-[18px] font-extrabold leading-[1.5]">
                    Good SEO content isn't created simply by adding keywords.
                  </p>

                  <p className="mt-3 text-[14px] leading-[1.75] text-[#D5D5D5]">
                    It should help the reader accomplish what they came to
                    Google to do.
                  </p>
                </div>
              </section>

              {/* CHECKLIST */}
              <section className="mb-14">
                <SectionTitle
                  number="08"
                  title="DIY SEO Audit Checklist"
                />

                <p className="mb-7 text-[16px] leading-[1.8] text-[#444]">
                  Here's a quick checklist you can save and work through:
                </p>

                <div className="overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-white">
                  <div className="grid sm:grid-cols-2">
                    {checklist.map((item, index) => (
                      <div
                        key={item}
                        className={`flex items-start gap-4 p-5 ${
                          index % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                        } border-b border-[#EEEEEE]`}
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F8BC04] text-black">
                          <CheckIcon />
                        </span>

                        <span className="text-[14px] font-semibold leading-[1.55]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* FINAL THOUGHTS */}
              <section className="mb-14">
                <div className="rounded-[26px] bg-[#171717] p-8 text-white md:p-10">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-8 w-2 rounded-full bg-[#F8BC04]" />

                    <span className="text-xs font-bold uppercase tracking-[2px] text-[#F8BC04]">
                      Final Thoughts
                    </span>
                  </div>

                  <h2 className="text-[29px] font-black leading-[1.15] md:text-[36px]">
                    Audit First. Hire Smarter.
                  </h2>

                  <p className="mt-5 max-w-[750px] text-[15px] leading-[1.8] text-[#D5D5D5]">
                    A DIY SEO audit won't replace a professional technical
                    audit, but it can give you clarity about your website's
                    most obvious problems.
                  </p>

                  <p className="mt-4 max-w-[750px] text-[15px] leading-[1.8] text-[#D5D5D5]">
                    Start with indexing, performance, broken links, metadata,
                    keywords and content quality. Once you understand the
                    basics, you'll be in a much stronger position to decide
                    whether you need professional SEO support.
                  </p>

                  <div className="mt-7 border-l-4 border-[#F8BC04] pl-5 text-[17px] font-bold leading-[1.6]">
                    The goal isn't just to rank higher. It's to create a
                    website that Google understands and your customers trust.
                  </div>
                </div>
              </section>

              {/* BOTTOM CTA — ONLY ONE CTA */}
              <section className="overflow-hidden rounded-[26px] bg-[#111111] p-7 text-white md:p-9">
                <div className="grid items-center gap-7 md:grid-cols-[1fr_auto]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[2px] text-[#F8BC04]">
                      BIGBEANS DIGITAL
                    </span>

                    <h2 className="mt-3 text-[25px] font-black leading-[1.2] md:text-[32px]">
                      Ready to Find What's Holding Your Website Back?
                    </h2>

                    <p className="mt-3 max-w-[680px] text-[14px] leading-[1.7] text-[#D4D4D4]">
                      Let our SEO experts identify technical issues, content
                      gaps and growth opportunities so you can focus on
                      growing your business.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-semibold text-[#E7E7E7]">
                      <span>✓ Technical SEO Audit</span>
                      <span>✓ Actionable Insights</span>
                      <span>✓ Growth Strategy</span>
                    </div>
                  </div>

                  <Link
                    href="/connect"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#F8BC04] px-6 py-4 text-sm font-extrabold text-black transition-all hover:-translate-y-1 hover:bg-[#FFC72C]"
                  >
                    Get Your SEO Audit
                    <ArrowIcon />
                  </Link>
                </div>
              </section>
            </article>

            {/* RIGHT SIDEBAR */}
            <aside className="space-y-8 lg:sticky lg:top-24">
              {/* SERVICES */}
              <div className="rounded-[24px] bg-[#111111] p-5 md:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-7 w-1 rounded-full bg-[#F8BC04]" />

                  <h2 className="text-[20px] font-extrabold text-white">
                    Services We Provide
                  </h2>
                </div>

                <div className="space-y-3">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="group block rounded-2xl bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(248,188,4,0.12)]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-[14px] font-extrabold text-[#171717]">
                            {service.title}
                          </h3>

                          <p className="mt-2 text-[12px] leading-[1.6] text-[#777]">
                            {service.description}
                          </p>
                        </div>

                        <span className="mt-1 shrink-0 text-[#F0AA00] transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* FEATURED POSTS */}
              <div className="rounded-[24px] border border-[#E8E8E8] bg-white p-5 md:p-6">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-7 w-1 rounded-full bg-[#F8BC04]" />

                  <h2 className="text-[20px] font-extrabold">
                    Featured Posts
                  </h2>
                </div>

                <div className="space-y-5">
                  {featuredPosts.map((post) => (
                    <Link
                      href={post.href}
                      key={post.href}
                      className="group flex gap-4"
                    >
                      <div className="relative h-[76px] w-[105px] shrink-0 overflow-hidden rounded-xl bg-[#F4F4F4]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="105px"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="line-clamp-3 text-[13px] font-extrabold leading-[1.45] group-hover:text-[#D99D00]">
                          {post.title}
                        </h3>

                        <p className="mt-2 text-[11px] text-[#888]">
                          {post.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  href="/blog"
                  className="mt-7 inline-flex items-center gap-2 border-b-2 border-[#F8BC04] pb-1 text-[13px] font-bold"
                >
                  View All Blogs
                  <ArrowIcon />
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>

      
    </>
  );
}