import Image from "next/image";
import Link from "next/link";

const thumbnail =
  "/assets/blog/allblogs/In-HousevsAgency/card.png";

const services = [
  {
    title: "Social Media Marketing",
    description:
      "Build brand awareness and grow your audience across social platforms.",
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
    description:
      "Create fast, responsive and SEO-friendly websites that convert.",
    href: "/services/website-development",
  },
  {
    title: "Branding",
    description:
      "Build a strong brand identity that connects with your audience.",
    href: "/services/branding",
  },
];

const featuredPosts = [
  {
    title: "How to Audit Your Own Website SEO Before Hiring an Agency",
    date: "August 14, 2026",
    image:
      "/assets/blog/allblogs/website-seo-audit/website-seo-audit-thumbnail.png",
    href: "/blog/allblogs/website-seo-audit",
  },
  {
    title:
      "In-House vs. Agency: When Is the Right Time for a London Startup to Outsource Social Media?",
    date: "August 14, 2026",
    image: thumbnail,
    href: "/blog/allblogs/In-HousevsAgency",
  },
];

const checklist = [
  "Social media depends on your founder having spare time",
  "Your posting schedule is inconsistent",
  "You need more than one social media skill",
  "Your team doesn't know what's actually working",
  "Your competitors look more visible than you",
  "You're preparing for a launch, funding round or major growth phase",
  "You want growth but don't want another full-time hire yet",
];

const auditAreas = [
  {
    number: "01",
    title: "Brand Voice & Strategy",
    text: "Build a clear social strategy that connects your brand presence with your business goals.",
  },
  {
    number: "02",
    title: "Content Production",
    text: "Create consistent, high-quality content across platforms without relying entirely on internal resources.",
  },
  {
    number: "03",
    title: "Specialist Expertise",
    text: "Access strategy, copywriting, design, video, paid social and analytics through the right team.",
  },
  {
    number: "04",
    title: "Performance Tracking",
    text: "Measure meaningful outcomes such as traffic, enquiries, leads, conversions and content performance.",
  },
  {
    number: "05",
    title: "Community Management",
    text: "Keep conversations active and make sure your audience receives consistent engagement.",
  },
  {
    number: "06",
    title: "Scalable Growth",
    text: "Increase social media capacity quickly when your startup launches, raises funding or enters a new market.",
  },
];

const keywordQuestions = [
  "Is social media already responsible for a meaningful portion of your leads or sales?",
  "Does your current team have enough specialist social media expertise?",
  "Can your internal team maintain consistent content without becoming overloaded?",
  "Would outsourcing give your startup more capability without requiring multiple hires?",
];

const contentQuestions = [
  "Who is your target customer?",
  "What does your startup offer?",
  "Why should your audience choose you?",
  "What makes your brand different from competitors?",
  "What action should your social content encourage?",
];

const speedMetrics = [
  {
    label: "COST",
    title: "Total Cost",
    description:
      "Compare salary, recruitment, software, equipment, training and management costs rather than salary alone.",
  },
  {
    label: "SKILL",
    title: "Specialist Expertise",
    description:
      "Consider whether you need strategy, copy, design, video, paid social, analytics and community management.",
  },
  {
    label: "SCALE",
    title: "Scalability",
    description:
      "Consider how quickly your social media capability can expand when the startup enters a new growth phase.",
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

export default function InHouseVsAgencyPage() {
  const postedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date());

  const articleTitle =
    "In-House vs. Agency: When Is the Right Time for a London Startup to Outsource Social Media?";

  const aiPrompt = encodeURIComponent(
    `Summarize the following BIGBEANS DIGITAL blog in a clear, practical way. Highlight the most important lessons, actionable checks, key comparisons, and takeaways for a London startup deciding between in-house and agency social media. Blog title: "${articleTitle}". URL: ${
      typeof window !== "undefined"
        ? window.location.href
        : "BIGBEANS DIGITAL blog"
    }`
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
              In-House vs Agency
            </span>
          </div>
        </div>

        {/* HERO */}
        <section className="mx-auto max-w-[1380px] px-5 pb-12 pt-8 md:px-8 md:pt-12 lg:px-10 lg:pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
            {/* LEFT */}
            <div>
              <h1 className="max-w-[650px] text-[42px] font-black leading-[0.98] tracking-[-2px] md:text-[58px] lg:text-[68px]">
                In-House vs. Agency: When Is the Right Time for a London Startup
                to Outsource Social Media?
              </h1>

              <p className="mt-7 max-w-[610px] text-[17px] leading-[1.65] text-[#3F3F3F] md:text-[18px]">
                Should your London startup hire in-house or outsource social
                media? Discover the key signs, costs, benefits and when an
                agency is the smarter choice for growth.
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
                    For an early-stage London startup, social media can feel
                    deceptively simple.
                  </p>

                  <p className="mt-4 text-[16px] leading-[1.8] text-[#333]">
                    You create a LinkedIn post. Someone takes a few photos.
                    The founder records a quick video. A team member publishes
                    something on Instagram when they have five spare minutes.
                  </p>

                  <p className="mt-4 text-[16px] leading-[1.8] text-[#333]">
                    Then the startup grows.
                  </p>

                  <div className="my-5 rounded-xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] px-5 py-4 text-[18px] font-bold leading-[1.55]">
                    When should a London startup outsource social media?
                  </div>

                  <p className="text-[16px] leading-[1.8] text-[#333]">
                    Suddenly, social media is no longer just about posting. You
                    need a consistent content strategy, stronger creative,
                    community management, paid campaigns, analytics, brand
                    positioning and a clear connection between social activity
                    and commercial growth.
                  </p>

                  <p className="mt-4 text-[16px] leading-[1.8] text-[#333]">
                    That is usually when the{" "}
                    <strong>in-house vs agency social media</strong> question
                    appears.
                  </p>

                  <p className="mt-4 text-[16px] leading-[1.8] text-[#333]">
                    Should you hire a social media manager? Build an entire
                    internal team? Continue managing it yourself? Or partner
                    with a{" "}
                    <strong>social media agency for startups</strong>?
                  </p>

                  <p className="mt-4 text-[16px] leading-[1.8] text-[#333]">
                    For most London startups, the answer isn't simply about
                    company size. It comes down to{" "}
                    <strong>
                      stage, budget, internal expertise, content requirements
                      and growth ambitions
                    </strong>
                    .
                  </p>

                  <p className="mt-4 text-[16px] leading-[1.8] text-[#333]">
                    And sometimes, outsourcing social media earlier than
                    expected can be the smarter move.
                  </p>
                </div>
              </section>

              {/* SECTION 1 */}
              <section className="mb-14">
                <SectionTitle
                  number="01"
                  title="Why Social Media Matters for London Startups"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  Social media has become a serious business channel rather
                  than simply a place to build brand awareness.
                </p>

                <p className="mt-5 text-[16px] leading-[1.8] text-[#444]">
                  DataReportal reported 54.8 million active social media user
                  identities in the UK in January 2025, equivalent to 79% of
                  the country's population.
                </p>

                <p className="mt-4 text-[16px] leading-[1.8] text-[#444]">
                  Research from iwoca also found that 97% of UK SMEs use social
                  media to help their business, with Facebook and Instagram
                  among the most popular platforms.
                </p>

                <p className="mt-4 text-[16px] leading-[1.8] text-[#444]">
                  For a London startup competing for attention in a crowded
                  market, that creates both an opportunity and a challenge.
                </p>

                <p className="mt-4 text-[16px] leading-[1.8] text-[#444]">
                  Your potential customers are already on social platforms.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Build credibility before a prospect speaks to sales",
                    "Establish founder and brand authority",
                    "Generate awareness in a competitive market",
                    "Drive website traffic and enquiries",
                    "Create communities around products and services",
                    "Support recruitment and employer branding",
                    "Retarget potential customers through paid social",
                    "Turn customer stories into social proof",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-[#E9E9E9] bg-white px-4 py-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFF3C5] text-[#E2A500]">
                        <CheckIcon />
                      </span>

                      <span className="text-[14px] font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl bg-[#171717] p-6 text-white md:p-7">
                  <p className="text-[15px] leading-[1.75] text-[#E5E5E5]">
                    But none of this happens simply because a business has an
                    Instagram or LinkedIn account.
                  </p>

                  <p className="mt-2 text-[19px] font-extrabold leading-[1.4]">
                    Strategy matters.
                  </p>
                </div>
              </section>

              {/* SECTION 2 */}
              <section className="mb-14">
                <SectionTitle
                  number="02"
                  title="In-House vs. Agency Social Media: What's the Difference?"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  At a basic level, the difference is straightforward.
                </p>

                <div className="my-7 grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-[#E7E7E7] bg-white p-6">
                    <span className="text-xs font-bold uppercase tracking-[1.3px] text-[#888]">
                      In-House
                    </span>

                    <p className="mt-4 text-[15px] leading-[1.8] text-[#444]">
                      In-house social media means your employees manage the
                      strategy, content, publishing, engagement and reporting
                      internally.
                    </p>

                    <p className="mt-4 text-[14px] font-semibold leading-[1.7]">
                      The biggest advantage is proximity.
                    </p>
                  </div>

                  <div className="rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                    <span className="text-xs font-bold uppercase tracking-[1.3px] text-[#C48D00]">
                      Agency
                    </span>

                    <p className="mt-4 text-[15px] leading-[1.8] text-[#444]">
                      Agency social media means an external specialist team
                      handles some or all of those responsibilities.
                    </p>

                    <p className="mt-4 text-[14px] font-semibold leading-[1.7]">
                      The biggest advantage is broader specialist capability.
                    </p>
                  </div>
                </div>

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  Neither model is automatically better. The right choice
                  depends on what your startup needs at its current stage.
                </p>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  What an In-House Social Media Team Offers
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  Your employees understand your product, customers, culture
                  and internal conversations every day. They can quickly access
                  information from sales, product and leadership teams.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Brand voice",
                    "Approvals",
                    "Internal communications",
                    "Community interactions",
                    "Product updates",
                    "Founder content",
                    "Day-to-day priorities",
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

                <div className="mt-7 rounded-2xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] p-6">
                  <p className="text-[15px] leading-[1.75] text-[#444]">
                    One social media hire rarely covers everything. You may
                    need strategy, copywriting, graphic design, video editing,
                    paid advertising, analytics, community management and
                    platform expertise.
                  </p>
                </div>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  What a Social Media Agency Offers
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  A specialist agency gives you access to a broader team
                  without necessarily hiring multiple full-time employees.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Social media strategy",
                    "Content planning",
                    "Copywriting",
                    "Creative design",
                    "Video production",
                    "LinkedIn marketing",
                    "Instagram marketing",
                    "Paid social",
                    "Community management",
                    "Performance reporting",
                    "Content optimisation",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-[#E9E9E9] bg-white px-4 py-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFF3C5] text-[#E2A500]">
                        <CheckIcon />
                      </span>

                      <span className="text-[14px] font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl bg-[#171717] p-6 text-white">
                  <p className="text-[15px] leading-[1.75] text-[#DDD]">
                    That breadth can be particularly useful for startups that
                    need to move quickly but aren't ready to build a full
                    marketing department.
                  </p>

                  <p className="mt-3 text-[15px] font-bold leading-[1.7]">
                    The agency model is increasingly about access to specialist
                    skills, flexibility and speed rather than simply
                    outsourcing basic posting.
                  </p>
                </div>
              </section>

              {/* SECTION 3 */}
              <section className="mb-14">
                <SectionTitle
                  number="03"
                  title="When Does It Make Sense to Keep Social Media In-House?"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  Outsourcing isn't always the answer. There are situations
                  where building an internal social media function makes more
                  sense.
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    {
                      title: "You Have a Dedicated Marketing Team",
                      text: "If your startup already has a capable marketing department, adding social media responsibilities internally can be logical. You may already have a marketing lead, content resources, designers, video capability, paid media expertise and analytics support.",
                    },
                    {
                      title: "Your Brand Requires Constant Internal Input",
                      text: "Some businesses need frequent access to product teams, customer support or technical experts. A rapidly evolving SaaS startup, for example, may need its social team to understand product releases and technical developments almost immediately.",
                    },
                    {
                      title: "Social Is Already a Major Acquisition Channel",
                      text: "If social media is directly responsible for a substantial portion of your leads or sales, internal ownership may eventually become valuable. At that point, social isn't just a marketing task. It is a core business function.",
                    },
                    {
                      title:
                        "You Have Enough Content Volume to Justify Internal Resources",
                      text: "If your startup needs a large volume of content every week, the economics can change. An internal content team may become more efficient when there is enough ongoing work to keep those employees productive.",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#E8E8E8] bg-white p-6"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#171717] text-xs font-bold text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div>
                          <h3 className="text-[17px] font-extrabold">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-[14px] leading-[1.75] text-[#666]">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-white">
                  <p className="text-[15px] leading-[1.75] text-[#D5D5D5]">
                    The important point is that{" "}
                    <strong className="text-white">
                      you should hire based on workload and business
                      requirements
                    </strong>
                    , not simply because your startup has reached a certain
                    number of employees.
                  </p>
                </div>
              </section>

              {/* SECTION 4 */}
              <section className="mb-14">
                <SectionTitle
                  number="04"
                  title="When Should a London Startup Outsource Social Media?"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  For many startups, outsourcing makes sense before hiring a
                  full internal social media team.
                </p>

                <p className="mt-4 text-[16px] font-semibold leading-[1.7]">
                  Here are the strongest signals.
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    {
                      title: "Your Founder Is Still Doing the Posting",
                      text: "Founders often start by handling social media themselves because nobody else knows the business as well. But as the company grows, the founder's time becomes increasingly valuable. If you're spending several hours each week writing posts, editing videos, responding to comments and checking analytics, ask yourself: Is this really the highest-value use of my time?",
                    },
                    {
                      title: "Your Content Has Become Inconsistent",
                      text: "One week you publish four posts. The next week, nothing. Then you suddenly post three times because someone remembers that the account exists. An outsourced social media team can create a repeatable content workflow and editorial calendar so content doesn't depend on whether your founder or marketing manager has a free afternoon.",
                    },
                    {
                      title:
                        "You Need Specialist Skills Without Multiple Hires",
                      text: "A growing startup might need strategy, copy, design, video, paid social, analytics and community management. Hiring one person for each discipline can become expensive very quickly. An agency lets you access multiple specialists through one relationship.",
                    },
                    {
                      title:
                        "Your Social Media Isn't Producing Measurable Results",
                      text: "Likes are not a business strategy. If your startup has been posting consistently but cannot identify which content generates website visits, enquiries, audience engagement, leads or opportunities, your problem may not be a lack of content. It may be a lack of strategy and measurement.",
                    },
                    {
                      title: "You Need to Scale Quickly",
                      text: "You might close a major client, raise funding, enter a new market or launch a new product. Suddenly, you need more content and greater visibility. An agency can often increase capacity more quickly because the people, processes and tools are already in place.",
                    },
                    {
                      title: "Your Marketing Team Is Overloaded",
                      text: "Your marketing manager may already be responsible for email marketing, SEO, website updates, events, CRM, content, partnerships and reporting. Adding social media on top can turn an important growth channel into an afterthought.",
                    },
                    {
                      title: "You Don't Have Enough Strategic Expertise",
                      text: "Posting regularly isn't the same as having a social strategy. If nobody internally understands platform-specific content strategy, paid social, audience segmentation, creative testing, social analytics, conversion tracking, community growth or founder positioning, you may need specialist expertise before you need another employee.",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#E8E8E8] bg-white p-6"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8BC04] text-xs font-extrabold text-black">
                          {index + 1}
                        </span>

                        <div>
                          <h3 className="text-[17px] font-extrabold">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-[14px] leading-[1.75] text-[#666]">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] p-6">
                  <p className="text-[15px] leading-[1.75] text-[#444]">
                    A good{" "}
                    <strong>social media marketing agency for startups</strong>{" "}
                    should connect content activity with meaningful business
                    outcomes.
                  </p>
                </div>
              </section>

              {/* SECTION 5 */}
              <section className="mb-14">
                <SectionTitle
                  number="05"
                  title="In-House vs. Agency: Cost, Expertise, Control and Scalability"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  When comparing an in-house team with a social media agency,
                  don't compare <strong>salary vs retainer</strong>.
                </p>

                <p className="mt-4 text-[16px] leading-[1.8] text-[#444]">
                  That's too simplistic.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    "Salary",
                    "National Insurance",
                    "Pension contributions",
                    "Recruitment costs",
                    "Training",
                    "Software",
                    "Equipment",
                    "Management time",
                    "Holiday and sick cover",
                    "Additional specialist support",
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

                <p className="mt-7 text-[15px] leading-[1.8] text-[#555]">
                  And one employee may still leave major capability gaps.
                </p>

                <div className="mt-7 overflow-hidden rounded-[22px] border border-[#E7E7E7] bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[680px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#171717] text-white">
                          <th className="px-5 py-4 text-[13px] font-extrabold">
                            Factor
                          </th>
                          <th className="px-5 py-4 text-[13px] font-extrabold">
                            In-House
                          </th>
                          <th className="px-5 py-4 text-[13px] font-extrabold">
                            Agency
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {[
                          ["Brand control", "High", "High with good processes"],
                          [
                            "Specialist expertise",
                            "Limited by team",
                            "Broad",
                          ],
                          ["Hiring required", "Yes", "No"],
                          ["Scalability", "Slower", "Usually faster"],
                          ["Management required", "High", "Lower"],
                          [
                            "Internal knowledge",
                            "Excellent",
                            "Requires onboarding",
                          ],
                          [
                            "Access to multiple specialists",
                            "Requires multiple hires",
                            "Usually included",
                          ],
                          [
                            "Flexibility",
                            "Depends on team capacity",
                            "Typically high",
                          ],
                        ].map((row) => (
                          <tr
                            key={row[0]}
                            className="border-b border-[#EEEEEE] last:border-0"
                          >
                            <td className="px-5 py-4 text-[13px] font-bold text-[#171717]">
                              {row[0]}
                            </td>

                            <td className="px-5 py-4 text-[13px] text-[#666]">
                              {row[1]}
                            </td>

                            <td className="px-5 py-4 text-[13px] text-[#666]">
                              {row[2]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
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

                <div className="mt-8 rounded-2xl bg-[#171717] p-7 text-white">
                  <p className="text-[15px] leading-[1.75] text-[#D5D5D5]">
                    A recent UK comparison, for example, estimates that a
                    four-to-five-person in-house marketing team can cost
                    hundreds of thousands of pounds annually once employment
                    costs and overheads are included, while agency partnerships
                    can provide broader capability at a lower overall staffing
                    commitment.
                  </p>

                  <p className="mt-4 text-[15px] font-bold leading-[1.7]">
                    The goal is to calculate the total cost of achieving the
                    required output, rather than comparing two monthly numbers.
                  </p>
                </div>
              </section>

              {/* SECTION 6 */}
              <section className="mb-14">
                <SectionTitle
                  number="06"
                  title="The Hybrid Model: Often the Best Option for Growing Startups"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  The choice doesn't have to be completely in-house or
                  completely outsourced.
                </p>

                <div className="my-7 rounded-[22px] bg-[#171717] p-7 text-white">
                  <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#F8BC04]">
                    A Practical Alternative
                  </span>

                  <h3 className="mt-3 text-[24px] font-black leading-[1.3]">
                    A hybrid model can be the sweet spot.
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
                    <span className="text-xs font-bold uppercase tracking-[1.3px] text-[#888]">
                      Keep In-House
                    </span>

                    <div className="mt-5 space-y-3">
                      {[
                        "Founder thought leadership",
                        "Brand direction",
                        "Product expertise",
                        "Customer insights",
                        "Internal approvals",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-xl bg-[#F7F7F7] px-4 py-3"
                        >
                          <span className="text-[#F8BC04]">✓</span>

                          <span className="text-[14px] font-semibold">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                    <span className="text-xs font-bold uppercase tracking-[1.3px] text-[#C48D00]">
                      Outsource
                    </span>

                    <div className="mt-5 space-y-3">
                      {[
                        "Content strategy",
                        "Content production",
                        "Design",
                        "Video editing",
                        "Publishing",
                        "Paid social",
                        "Analytics",
                        "Performance optimisation",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-xl bg-white px-4 py-3"
                        >
                          <span className="text-[#F8BC04]">✓</span>

                          <span className="text-[14px] font-semibold">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-7 text-[15px] leading-[1.8] text-[#555]">
                  This gives the business internal ownership without requiring
                  employees to become experts in every aspect of social media.
                </p>

                <div className="mt-7 rounded-2xl border-l-4 border-[#F8BC04] bg-white p-6 shadow-[0_5px_20px_rgba(0,0,0,0.04)]">
                  <p className="text-[15px] leading-[1.8] text-[#555]">
                    For a growing London startup, this can be particularly
                    effective because the founder remains authentic and visible
                    while the agency creates the consistency and infrastructure
                    needed to scale.
                  </p>
                </div>
              </section>

              {/* SECTION 7 */}
              <section className="mb-14">
                <SectionTitle
                  number="07"
                  title="7 Signs Your London Startup Is Ready to Outsource Social Media"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  If you're still unsure, look for these signals.
                </p>

                <div className="mt-7 overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-white">
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

                <div className="mt-8 space-y-4">
                  {[
                    {
                      number: "01",
                      title:
                        "Social media depends on your founder having spare time.",
                      text: "If the founder is the bottleneck, outsourcing can give them their time back.",
                    },
                    {
                      number: "02",
                      title: "Your posting schedule is inconsistent.",
                      text: "A proper content system can solve the problem.",
                    },
                    {
                      number: "03",
                      title: "You need more than one social media skill.",
                      text: "If you require strategy, creative, video, paid media and analytics, one hire may not be enough.",
                    },
                    {
                      number: "04",
                      title: "Your team doesn't know what's actually working.",
                      text: "If you're measuring likes instead of leads, it's time to rethink your approach.",
                    },
                    {
                      number: "05",
                      title: "Your competitors look more visible than you.",
                      text: "A stronger content strategy can help your startup compete for attention without simply posting more frequently.",
                    },
                    {
                      number: "06",
                      title:
                        "You're preparing for a launch, funding round or major growth phase.",
                      text: "A stronger social presence can support awareness and credibility when the business enters a more visible phase.",
                    },
                    {
                      number: "07",
                      title:
                        "You want growth but don't want another full-time hire yet.",
                      text: "If you need additional expertise but aren't ready to build a department, outsourcing can fill the gap.",
                    },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="flex gap-4 rounded-2xl border border-[#E8E8E8] bg-white p-5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#171717] text-xs font-bold text-white">
                        {item.number}
                      </span>

                      <div>
                        <h3 className="text-[16px] font-extrabold">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[14px] leading-[1.7] text-[#666]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 8 */}
              <section className="mb-14">
                <SectionTitle
                  number="08"
                  title="How to Choose the Right Social Media Agency in London"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  Once you've decided to outsource, choosing the right partner
                  becomes the next challenge.
                </p>

                <div className="mt-7 rounded-[22px] bg-[#171717] p-7 text-white">
                  <p className="text-[17px] font-extrabold leading-[1.6]">
                    Don't simply search for the "best social media agency
                    London" and pick the one with the biggest follower count.
                  </p>

                  <p className="mt-3 text-[14px] leading-[1.75] text-[#D5D5D5]">
                    Look for an agency that understands your business model,
                    audience and growth objectives.
                  </p>
                </div>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Look Beyond Follower Growth
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  Followers can be useful, but they're not the end goal.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Qualified leads",
                    "Website traffic",
                    "Engagement quality",
                    "Conversion rates",
                    "Cost per lead",
                    "Content performance",
                    "Brand awareness",
                    "Revenue contribution",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-[#E9E9E9] bg-white px-4 py-4"
                    >
                      <span className="text-[#F8BC04]">✓</span>

                      <span className="text-[14px] font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Ask How Performance Is Measured
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  A credible agency should be able to explain what success
                  looks like before work begins.
                </p>

                <div className="mt-5 rounded-2xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] p-6">
                  <p className="text-[15px] leading-[1.8] text-[#444]">
                    If the reporting focuses entirely on impressions, likes and
                    follower numbers, ask harder questions.
                  </p>
                </div>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Check Strategic and Creative Capability
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  Your agency should be able to answer:
                </p>

                <div className="my-5 border-l-4 border-[#F8BC04] pl-5 text-[18px] font-bold italic leading-[1.6]">
                  "Why are we creating this content?"
                </div>

                <p className="text-[15px] leading-[1.8] text-[#555]">
                  Not simply:
                </p>

                <div className="my-5 rounded-xl bg-white p-5 shadow-[0_5px_20px_rgba(0,0,0,0.04)]">
                  <p className="text-[17px] font-extrabold leading-[1.5]">
                    "What should we post this Tuesday?"
                  </p>
                </div>

                <p className="text-[15px] font-semibold leading-[1.8] text-[#555]">
                  Strategy should come before the content calendar.
                </p>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Make Sure the Agency Understands Your Audience
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  A London startup doesn't need generic social media advice
                  copied from a global brand.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Your customer",
                    "Your market",
                    "Your competitors",
                    "Your positioning",
                    "Your sales process",
                    "Your business objectives",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-white px-4 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFF3C5] text-[#E2A500]">
                        <CheckIcon />
                      </span>

                      <span className="text-[14px] font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-white">
                  <p className="text-[18px] font-extrabold leading-[1.5]">
                    That context is what turns social media management into a
                    growth function.
                  </p>
                </div>
              </section>

              {/* SECTION 9 */}
              <section className="mb-14">
                <SectionTitle
                  number="09"
                  title="Final Verdict: When Should a London Startup Outsource Social Media?"
                />

                <div className="rounded-[26px] bg-[#171717] p-8 text-white md:p-10">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-8 w-2 rounded-full bg-[#F8BC04]" />

                    <span className="text-xs font-bold uppercase tracking-[2px] text-[#F8BC04]">
                      Final Verdict
                    </span>
                  </div>

                  <h2 className="text-[29px] font-black leading-[1.15] md:text-[36px]">
                    Build the Social Media Capability Your Startup Actually
                    Needs.
                  </h2>

                  <p className="mt-5 max-w-[750px] text-[15px] leading-[1.8] text-[#D5D5D5]">
                    There is no magic employee count or revenue figure that
                    tells every London startup when to outsource social media.
                  </p>

                  <p className="mt-4 max-w-[750px] text-[15px] leading-[1.8] text-[#D5D5D5]">
                    The better question is whether your current setup is giving
                    social media the expertise, consistency and strategic
                    attention it needs to contribute to growth.
                  </p>

                  <div className="my-6 border-l-4 border-[#F8BC04] pl-5 text-[17px] font-bold leading-[1.6]">
                    Is your current setup giving social media the expertise,
                    consistency and strategic attention it needs to contribute
                    to growth?
                  </div>

                  <p className="max-w-[750px] text-[15px] leading-[1.8] text-[#D5D5D5]">
                    If the answer is no, you may already be at the right time.
                  </p>

                  <p className="mt-4 max-w-[750px] text-[15px] leading-[1.8] text-[#D5D5D5]">
                    For an early-stage startup, outsourcing can make sense when
                    the founder is stretched, internal marketing resources are
                    limited, content is inconsistent or specialist skills are
                    missing.
                  </p>

                  <p className="mt-4 max-w-[750px] text-[15px] leading-[1.8] text-[#D5D5D5]">
                    For a more established startup with a mature marketing
                    department, high content volume and social media as a core
                    acquisition channel, building an internal team may
                    eventually provide greater control and long-term value.
                  </p>

                  <p className="mt-4 max-w-[750px] text-[15px] leading-[1.8] text-[#D5D5D5]">
                    And for many businesses in between, the{" "}
                    <strong className="text-white">hybrid model</strong> can be
                    the smartest option.
                  </p>

                  <p className="mt-4 max-w-[750px] text-[15px] leading-[1.8] text-[#D5D5D5]">
                    The goal isn't to choose between an agency and an
                    employee.
                  </p>

                  <div className="mt-7 border-l-4 border-[#F8BC04] pl-5 text-[17px] font-bold leading-[1.6]">
                    The goal is to build the social media capability your
                    startup needs without wasting time, budget or attention.
                  </div>

                  <p className="mt-5 max-w-[750px] text-[15px] leading-[1.8] text-[#D5D5D5]">
                    For London founders, that means knowing when social media
                    has moved from something you{" "}
                    <em>should be doing</em> to something you need to be doing{" "}
                    <strong className="text-white">properly</strong>.
                  </p>
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
                      Ready to Build a Stronger Social Media Strategy?
                    </h2>

                    <p className="mt-3 max-w-[680px] text-[14px] leading-[1.7] text-[#D4D4D4]">
                      Let our social media experts build a consistent,
                      strategic content system that helps your startup grow
                      without the pressure of building a full internal team.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-semibold text-[#E7E7E7]">
                      <span>✓ Social Media Strategy</span>
                      <span>✓ Creative Content</span>
                      <span>✓ Growth Strategy</span>
                    </div>
                  </div>

                  <Link
                    href="/connect"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#F8BC04] px-6 py-4 text-sm font-extrabold text-black transition-all hover:-translate-y-1 hover:bg-[#FFC72C]"
                  >
                    Talk to Our Experts
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