import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

const thumbnail = "/assets/blog/singleblogs/website-seo-audit.webp";

const articleTitle = "How to Do a Website SEO Audit Before Hiring an Agency";

const articleUrl =
  "https://www.bigbeansdigital.com/blog/website-seo-audit";

const services = [
  {
    title: "Social Media Marketing",
    description:
      "Build a stronger social presence and connect with the right audience.",
    href: "/services/social-media-marketing",
  },
  {
    title: "Branding",
    description:
      "Create a memorable brand identity that helps your business stand out.",
    href: "/services/branding",
  },
  {
    title: "Google Ads & Meta Ads",
    description:
      "Reach potential customers with strategic performance marketing campaigns.",
    href: "/services/google-ads-meta-ads",
  },
  {
    title: "Website Development",
    description:
      "Build fast, responsive and conversion-focused websites for your business.",
    href: "/services/website-development",
  },
  {
    title: "Logo Designing",
    description:
      "Create a professional visual identity for your growing brand.",
    href: "/services/logo-designing",
  },
];

const auditAreas = [
  {
    number: "01",
    title: "Technical SEO",
    text: "Check whether search engines can crawl and understand your important pages.",
  },
  {
    number: "02",
    title: "On-Page SEO",
    text: "Review titles, descriptions, headings, keywords and page structure.",
  },
  {
    number: "03",
    title: "Content Quality",
    text: "Make sure your content answers the questions your audience is searching for.",
  },
  {
    number: "04",
    title: "Website Speed",
    text: "Identify performance problems that can affect visitors and search visibility.",
  },
  {
    number: "05",
    title: "Internal Linking",
    text: "Check whether important pages are naturally connected across your website.",
  },
  {
    number: "06",
    title: "Mobile Experience",
    text: "Make sure your website is easy to use on smartphones and smaller screens.",
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

function SectionTitle({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-start gap-4">
      <span className="mt-1 flex h-9 min-w-9 items-center justify-center rounded-full bg-[#F8BC04] px-2 text-[12px] font-black text-black">
        {number}
      </span>

      <h2 className="text-[25px] font-black leading-[1.2] tracking-[-0.5px] text-[#171717] md:text-[32px]">
        {children}
      </h2>
    </div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-[#F8BC04]">{children}</span>;
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
      width="15"
      height="15"
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
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 4.5C12.9 4.5 10.3 6.5 9.4 9.3C6.3 9.7 4 12.4 4 15.6C4 18.8 6.3 21.5 9.4 21.9C10.3 24.7 12.9 26.7 16 26.7C19.1 26.7 21.7 24.7 22.6 21.9C25.7 21.5 28 18.8 28 15.6C28 12.4 25.7 9.7 22.6 9.3C21.7 6.5 19.1 4.5 16 4.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
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

export default function WebsiteSeoAudit() {
  const postedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date());

  const aiPrompt = encodeURIComponent(
    `Summarize this BIGBEANS DIGITAL blog in a clear and practical way. Highlight the most important SEO lessons, actionable checks, tools mentioned and key takeaways for a business owner. Blog title: "${articleTitle}". Page URL: ${articleUrl}`
  );

  return (
    <main className="bg-[#FAFAFA] text-[#171717]">
      {/* BREADCRUMB */}
      <div className="mx-auto max-w-[1380px] px-5 pt-7 md:px-8 lg:px-10">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-[13px] text-[#5F5F5F]"
        >
          <Link
            href="/"
            className="no-underline transition-colors hover:text-[#F8BC04]"
          >
            Home
          </Link>

          <span aria-hidden="true">→</span>

          <Link
            href="/blog"
            className="no-underline transition-colors hover:text-[#F8BC04]"
          >
            Blogs
          </Link>

          <span aria-hidden="true">→</span>

          <Link
            href="/blog/website-seo-audit"
            className="font-bold text-[#171717] no-underline"
          >
            Website SEO Audit
          </Link>
        </nav>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-[1380px] px-5 pb-12 pt-8 md:px-8 md:pt-12 lg:px-10 lg:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
          <div>
            <h1 className="max-w-[700px] text-[38px] font-black leading-[1.03] tracking-[-1.5px] md:text-[52px] lg:text-[62px]">
              How to Do a Website <Highlight>SEO Audit</Highlight> Before
              Hiring an Agency
            </h1>

            <p className="mt-6 max-w-[640px] text-[17px] leading-[1.7] text-[#484848] md:text-[18px]">
              Learn how to audit your website for indexing, speed, keywords,
              technical SEO, broken links and content issues before hiring an
              agency.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-[13px] text-[#555]">
              <span>{postedDate}</span>

              <span className="h-4 w-px bg-[#BDBDBD]" />

              <span className="font-bold text-[#171717]">
                By Big Beans Digital Team
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[30px] bg-[#F2F2F2]">
            <div className="relative aspect-[16/11] w-full">
              <Image
                src={thumbnail}
                alt="How to do a website SEO audit before hiring an agency"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-[1380px] px-5 pb-20 md:px-8 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14">
          <article className="min-w-0">
            {/* AI SUMMARY */}
            <div className="mb-10 flex min-h-[68px] w-full items-center justify-between gap-5 rounded-[16px] bg-[#111111] px-6 py-4 md:px-7">
              <span className="text-[16px] font-medium text-white md:text-[18px]">
                Summarize with AI
              </span>

              <div className="flex shrink-0 items-center gap-5">
                <a
                  href={`https://chatgpt.com/?q=${aiPrompt}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Summarize this blog with ChatGPT"
                  className="flex items-center justify-center text-[#F8BC04] no-underline"
                >
                  <ChatGPTIcon />
                </a>

                <a
                  href={`https://gemini.google.com/app?text=${aiPrompt}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Summarize this blog with Gemini"
                  className="flex items-center justify-center text-[#F8BC04] no-underline"
                >
                  <GeminiIcon />
                </a>
              </div>
            </div>

            {/* INTRODUCTION */}
            <section className="mb-14">
              <div className="rounded-[22px] border border-[#ECECEC] bg-white p-7 md:p-9">
                <p className="text-[16px] leading-[1.85] text-[#333]">
                  If your website is not getting enough organic traffic,
                  qualified leads or sales from Google, you may be asking
                  yourself:
                </p>

                <div className="my-5 rounded-xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] px-5 py-4 text-[18px] font-bold leading-[1.55]">
                  Is my website&apos;s SEO actually underperforming?
                </div>

                <p className="text-[16px] leading-[1.85] text-[#333]">
                  Before signing a long-term contract with an agency, you can
                  perform a basic website SEO audit yourself.
                </p>

                <p className="mt-4 text-[16px] leading-[1.85] text-[#333]">
                  You do not need to be a technical expert. With a few free
                  tools and straightforward checks, you can identify issues
                  with <strong>site speed, indexing, broken links, metadata,
                  keywords and mobile usability</strong>.
                </p>

                <p className="mt-4 text-[16px] leading-[1.85] text-[#333]">
                  This DIY audit will not replace a professional technical
                  audit, but it can help you understand your website&apos;s
                  biggest problems before investing in professional SEO or{" "}
                  <Link
                    href="/services/website-development"
                    className="font-bold text-[#171717] no-underline hover:text-[#F0AA00]"
                  >
                    website development
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* SECTION 1 */}
            <section className="mb-14">
              <SectionTitle number="01">
                What Is a <Highlight>Website SEO Audit?</Highlight>
              </SectionTitle>

              <p className="text-[16px] leading-[1.85] text-[#444]">
                A website SEO audit is a systematic review of your website to
                find technical, structural and content-related issues that may
                prevent search engines from crawling, indexing and ranking your
                pages effectively.
              </p>

              <p className="mt-5 text-[16px] font-semibold leading-[1.75]">
                A complete audit can examine:
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {auditAreas.map((item) => (
                  <div
                    key={item.number}
                    className="rounded-2xl border border-[#E7E7E7] bg-white p-5"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] text-[11px] font-bold text-white">
                        {item.number}
                      </span>

                      <span className="text-[#F8BC04]">↗</span>
                    </div>

                    <h3 className="text-[16px] font-extrabold">{item.title}</h3>

                    <p className="mt-2 text-[13px] leading-[1.65] text-[#777]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[15px] leading-[1.75] text-[#DCDCDC]">
                  You do not need to start with the most complicated technical
                  issues.
                </p>

                <p className="mt-2 text-[20px] font-extrabold">
                  Start with the fundamentals and identify the biggest
                  problems first.
                </p>
              </div>
            </section>

            {/* SECTION 2 */}
            <section className="mb-14">
              <SectionTitle number="02">
                Check If Google Has <Highlight>Indexed Your Website</Highlight>
              </SectionTitle>

              <p className="text-[16px] leading-[1.85] text-[#444]">
                Before worrying about backlinks or keyword rankings, make sure
                Google can actually find your important pages. If your pages
                are not indexed, they have little chance of generating organic
                traffic.
              </p>

              <h3 className="mt-8 text-[21px] font-extrabold">
                The quick Google indexing check
              </h3>

              <p className="mt-3 text-[16px] leading-[1.85] text-[#555]">
                Search Google using:
              </p>

              <div className="mt-5 rounded-2xl bg-[#171717] px-6 py-5 font-mono text-[16px] font-bold text-[#F8BC04]">
                site:yourwebsite.com
              </div>

              <p className="mt-5 text-[15px] leading-[1.8] text-[#555]">
                Replace the domain with your own website. Then check whether
                your homepage, important service pages and key blog pages are
                appearing.
              </p>

              <div className="mt-6 rounded-[22px] border border-[#E7E7E7] bg-white p-6">
                <h3 className="text-[19px] font-extrabold">
                  What should you verify?
                </h3>

                <ul className="mt-4 space-y-3 text-[15px] leading-[1.7] text-[#555]">
                  <li>• Your homepage appears in Google.</li>
                  <li>• Important service pages are indexed.</li>
                  <li>• Important blog posts are discoverable.</li>
                  <li>• Duplicate or staging pages are not appearing.</li>
                  <li>• Important pages are not accidentally blocked.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 3 */}
            <section className="mb-14">
              <SectionTitle number="03">
                Test Website Speed and <Highlight>Core Web Vitals</Highlight>
              </SectionTitle>

              <p className="text-[16px] leading-[1.85] text-[#444]">
                Website performance affects user experience and can influence
                how easily visitors interact with your pages. A slow website
                can also reduce conversions.
              </p>

              <p className="mt-4 text-[16px] leading-[1.85] text-[#444]">
                Start by checking your important pages with Google PageSpeed
                Insights and pay special attention to mobile performance.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "LCP",
                    text: "Measures how quickly important visible content loads.",
                  },
                  {
                    title: "INP",
                    text: "Measures how responsive your website feels to users.",
                  },
                  {
                    title: "CLS",
                    text: "Measures unexpected layout movement while a page loads.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E8E8E8] bg-white p-5"
                  >
                    <span className="text-[22px] font-black text-[#F0AA00]">
                      {item.title}
                    </span>

                    <p className="mt-3 text-[13px] leading-[1.65] text-[#666]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 text-[21px] font-extrabold">
                Common speed problems to look for
              </h3>

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
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-4"
                  >
                    <span className="text-[#F8BC04]">✓</span>

                    <span className="text-[14px] font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-[22px] border border-[#E9E9E9] bg-white p-7">
                <h3 className="text-[21px] font-extrabold">
                  Do not audit desktop only
                </h3>

                <p className="mt-3 text-[15px] leading-[1.85] text-[#555]">
                  Many potential customers visit your website from smartphones.
                  Test important pages on mobile and ask whether the page is
                  fast, readable and easy to use.
                </p>
              </div>
            </section>

            {/* SECTION 4 */}
            <section className="mb-14">
              <SectionTitle number="04">
                Find Broken Links and <Highlight>404 Errors</Highlight>
              </SectionTitle>

              <p className="text-[16px] leading-[1.85] text-[#444]">
                Broken links create dead ends for visitors. A user may click a
                link expecting useful information and instead reach a{" "}
                <strong>404 Not Found</strong> page.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  "Links pointing to deleted pages",
                  "Incorrect URLs",
                  "Pages producing 404 errors",
                  "Unnecessary redirects",
                  "Outdated resources and pages",
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

              <h3 className="mt-8 text-[21px] font-extrabold">
                Check your internal links too
              </h3>

              <p className="mt-3 text-[15px] leading-[1.85] text-[#555]">
                Internal links help visitors discover related pages and help
                search engines understand your website structure. For example,
                content about marketing can naturally link to your{" "}
                <Link
                  href="/services/social-media-marketing"
                  className="font-bold text-[#171717] no-underline hover:text-[#F0AA00]"
                >
                  social media marketing services
                </Link>
                ,{" "}
                <Link
                  href="/services/branding"
                  className="font-bold text-[#171717] no-underline hover:text-[#F0AA00]"
                >
                  branding services
                </Link>{" "}
                or{" "}
                <Link
                  href="/services/website-development"
                  className="font-bold text-[#171717] no-underline hover:text-[#F0AA00]"
                >
                  website development services
                </Link>
                .
              </p>
            </section>

            {/* SECTION 5 */}
            <section className="mb-14">
              <SectionTitle number="05">
                Review Page Titles and <Highlight>Meta Descriptions</Highlight>
              </SectionTitle>

              <p className="text-[16px] leading-[1.85] text-[#444]">
                Every important page should have a clear and relevant title tag
                and meta description. These elements help search engines and
                users understand what the page is about.
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                <div className="rounded-[22px] bg-[#FFF7D8] p-6">
                  <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#9A7000]">
                    Weak Example
                  </span>

                  <p className="mt-4 text-[16px] font-bold leading-[1.6]">
                    Home | ABC Company
                  </p>
                </div>

                <div className="rounded-[22px] bg-[#171717] p-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#F8BC04]">
                    Better Example
                  </span>

                  <p className="mt-4 text-[16px] font-bold leading-[1.6]">
                    SEO Services for Small Businesses | ABC Company
                  </p>
                </div>
              </div>

              <h3 className="mt-8 text-[21px] font-extrabold">
                Metadata audit checklist
              </h3>

              <div className="mt-5 space-y-3">
                {[
                  "Does every important page have a unique title tag?",
                  "Are important terms placed naturally in the title?",
                  "Does the meta description explain the page clearly?",
                  "Have you removed duplicate titles and descriptions?",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-[#E8E8E8] bg-white p-4"
                  >
                    <span className="text-[#F8BC04]">✓</span>

                    <span className="text-[14px] font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 6 */}
            <section className="mb-14">
              <SectionTitle number="06">
                Audit Keyword Targeting and <Highlight>Search Intent</Highlight>
              </SectionTitle>

              <p className="text-[16px] leading-[1.85] text-[#444]">
                A technically healthy website can still struggle if it targets
                the wrong search terms or does not match what users actually
                want to find.
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
                    "digital marketing for small businesses",
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
                {[
                  "Does each important service have a dedicated page?",
                  "Does each page focus on one clear topic?",
                  "Does the content match what the searcher actually wants?",
                  "Are you targeting keywords that could bring relevant customers?",
                ].map((question, index) => (
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

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                Your keywords should connect naturally with the services you
                actually offer. For example, a business running paid campaigns
                can link visitors to dedicated{" "}
                <Link
                  href="/services/google-ads-meta-ads"
                  className="font-bold text-[#171717] no-underline hover:text-[#F0AA00]"
                >
                  Google Ads and Meta Ads services
                </Link>{" "}
                instead of sending everyone to a generic homepage.
              </p>
            </section>

            {/* SECTION 7 */}
            <section className="mb-14">
              <SectionTitle number="07">
                Review Content Quality and <Highlight>User Experience</Highlight>
              </SectionTitle>

              <p className="text-[16px] leading-[1.85] text-[#444]">
                Read your homepage and important service pages like a
                first-time visitor. Within a few seconds, can someone
                understand what your business does and what they should do
                next?
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "What does this company do?",
                  "Who does this business help?",
                  "What outcome or service is being offered?",
                  "Why should a customer trust this business?",
                  "What action should the visitor take next?",
                ].map((question, index) => (
                  <div
                    key={question}
                    className="rounded-2xl border border-[#E8E8E8] bg-white p-5"
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

              <h3 className="mt-8 text-[21px] font-extrabold">
                Red flags to clean up
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Thin or unhelpful content",
                  "Outdated information",
                  "Duplicate content",
                  "Keyword stuffing",
                  "Weak calls to action",
                  "Poor mobile usability",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white p-4 text-[14px] font-semibold"
                  >
                    <span className="mr-2 text-[#F8BC04]">✕</span>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 8 */}
            <section className="mb-14">
              <SectionTitle number="08">
                DIY <Highlight>SEO Audit Checklist</Highlight>
              </SectionTitle>

              <p className="mb-7 text-[16px] leading-[1.85] text-[#444]">
                Save this checklist and work through your website before
                interviewing an agency.
              </p>

              <div className="overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-white">
                <div className="grid sm:grid-cols-2">
                  {checklist.map((item, index) => (
                    <div
                      key={item}
                      className={`flex items-start gap-4 border-b border-[#EEEEEE] p-5 ${
                        index % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                      }`}
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

            {/* SEO AND MARKETING */}
            <section className="mb-14">
              <SectionTitle number="09">
                Why SEO Should Work With Your{" "}
                <Highlight>Digital Marketing Strategy</Highlight>
              </SectionTitle>

              <p className="text-[16px] leading-[1.85] text-[#444]">
                SEO should not exist separately from the rest of your digital
                strategy. Your website, brand, content, social media and paid
                campaigns should work together to improve visibility and
                conversions.
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                <div className="rounded-[22px] border border-[#E7E7E7] bg-white p-6">
                  <h3 className="text-[19px] font-extrabold">
                    Organic Growth
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.75] text-[#666]">
                    SEO helps potential customers discover your website through
                    relevant searches and useful content.
                  </p>

                  <Link
                    href="/services/website-development"
                    className="mt-4 inline-block text-[14px] font-bold text-[#171717] no-underline hover:text-[#F0AA00]"
                  >
                    Explore Website Development →
                  </Link>
                </div>

                <div className="rounded-[22px] bg-[#171717] p-6 text-white">
                  <h3 className="text-[19px] font-extrabold">
                    Brand and Audience Growth
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.75] text-[#D5D5D5]">
                    Social content and a strong brand can support awareness and
                    bring more relevant visitors to your website.
                  </p>

                  <Link
                    href="/services/social-media-marketing"
                    className="mt-4 inline-block text-[14px] font-bold text-[#F8BC04] no-underline"
                  >
                    Explore Social Media Marketing →
                  </Link>
                </div>
              </div>
            </section>

            {/* FINAL */}
            <section className="mb-14">
              <div className="rounded-[26px] bg-[#171717] p-8 text-white md:p-10">
                <span className="text-xs font-bold uppercase tracking-[2px] text-[#F8BC04]">
                  Final Thoughts
                </span>

                <h2 className="mt-4 text-[29px] font-black leading-[1.15] md:text-[38px]">
                  Audit First. <Highlight>Hire Smarter.</Highlight>
                </h2>

                <p className="mt-5 max-w-[760px] text-[15px] leading-[1.85] text-[#D5D5D5]">
                  A DIY website SEO audit will not replace a complete
                  professional audit, but it can help you identify obvious
                  problems and understand where your website needs attention.
                </p>

                <p className="mt-4 max-w-[760px] text-[15px] leading-[1.85] text-[#D5D5D5]">
                  Start with indexing, performance, broken links, metadata,
                  keywords and content quality. Once you understand the basics,
                  you will be in a stronger position to decide what kind of
                  professional support your business actually needs.
                </p>

                <div className="mt-7 border-l-4 border-[#F8BC04] pl-5 text-[17px] font-bold leading-[1.65]">
                  The goal is not simply to rank higher. It is to create a
                  website that search engines understand and customers trust.
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-[26px] bg-[#111111] p-7 text-white md:p-9">
              <div className="grid items-center gap-7 md:grid-cols-[1fr_auto]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[2px] text-[#F8BC04]">
                    BIG BEANS DIGITAL
                  </span>

                  <h2 className="mt-3 text-[25px] font-black leading-[1.2] md:text-[34px]">
                    Ready to Find What&apos;s Holding Your{" "}
                    <Highlight>Website Back?</Highlight>
                  </h2>

                  <p className="mt-3 max-w-[680px] text-[14px] leading-[1.75] text-[#D4D4D4]">
                    Get expert help with your website, digital strategy,
                    branding, social media and performance marketing.
                  </p>
                </div>

                <Link
                  href="/connect"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#F8BC04] px-6 py-4 text-sm font-extrabold text-black no-underline hover:bg-[#FFC72C]"
                >
                  Connect With Our Team
                  <ArrowIcon />
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="mt-14">
              <SectionTitle number="10">
                Frequently Asked <Highlight>Questions</Highlight>
              </SectionTitle>

              <div className="space-y-5">
                {[
                  {
                    question:
                      "Why is auditing my website before hiring an agency important?",
                    answer:
                      "A basic audit helps you identify obvious issues, understand your website's condition and ask better questions when speaking with an agency.",
                  },
                  {
                    question:
                      "What is the difference between SEO and social media marketing?",
                    answer:
                      "SEO focuses primarily on improving organic search visibility, while social media marketing focuses on audience growth, engagement, brand awareness and content distribution. Both can work together as part of a wider digital strategy.",
                  },
                  {
                    question: "How often should a business run an SEO audit?",
                    answer:
                      "A basic website audit can be performed regularly, while a deeper technical audit is useful when your website changes significantly or you notice major performance or traffic problems.",
                  },
                  {
                    question:
                      "Can small businesses improve rankings without a massive budget?",
                    answer:
                      "Yes. Small businesses can improve their online presence by fixing technical issues, creating useful content, targeting relevant searches and building a clear website experience.",
                  },
                  {
                    question: "When should I hire a professional SEO agency?",
                    answer:
                      "Consider professional help when your website has deeper technical problems, significant indexing issues, complex site architecture or when you need a structured long-term growth strategy.",
                  },
                ].map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-[22px] border border-[#D7D7D7] bg-white px-6"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[16px] font-bold md:text-[17px]">
                      {faq.question}

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#171717] text-[22px] font-light text-white">
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:inline">−</span>
                      </span>
                    </summary>

                    <div className="border-t border-[#ECECEC] pb-6 pt-5 text-[15px] leading-[1.8] text-[#666]">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </article>

          {/* STICKY SIDEBAR */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-[24px] bg-[#111111] p-5 md:p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-7 w-1 rounded-full bg-[#F8BC04]" />

                <h2 className="text-[20px] font-extrabold text-white">
                  Services <Highlight>We Provide</Highlight>
                </h2>
              </div>

              <div className="space-y-3">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block rounded-2xl bg-white p-5 text-[#171717] no-underline hover:bg-[#FFF9E8]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[14px] font-extrabold">
                          {service.title}
                        </h3>

                        <p className="mt-2 text-[12px] leading-[1.6] text-[#777]">
                          {service.description}
                        </p>
                      </div>

                      <span className="mt-1 shrink-0 text-[#F0AA00]">→</span>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href="/connect"
                className="mt-5 flex items-center justify-center rounded-xl bg-[#F8BC04] px-5 py-4 text-[14px] font-extrabold text-black no-underline hover:bg-[#FFC72C]"
              >
                Talk to Our Team
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}