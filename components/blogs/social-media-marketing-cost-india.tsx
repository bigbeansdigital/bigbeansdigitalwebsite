import Image from "next/image";
import Link from "next/link";

const thumbnail =
  "/assets/blog/singleblogs/social-media-marketing-cost-india.webp";

const pageUrl =
  "https://www.bigbeansdigital.com/blog/social-media-marketing-cost-india";

const services = [
  {
    title: "Social Media Marketing",
    description:
      "Build relevant, creative and conversion-focused social media campaigns.",
    href: "/services/social-media-marketing",
  },
  {
    title: "Branding",
    description:
      "Build a memorable brand identity that stays consistent across every platform.",
    href: "/services/branding",
  },
  {
    title: "Google Ads & Meta Ads",
    description:
      "Reach high-intent audiences with targeted performance marketing campaigns.",
    href: "/services/google-ads-meta-ads",
  },
  {
    title: "Logo Designing",
    description:
      "Create a distinctive visual identity that makes your brand recognizable.",
    href: "/services/logo-designing",
  },
  {
    title: "Website Development",
    description:
      "Build modern websites designed to turn attention into meaningful action.",
    href: "/services/website-development",
  },
];

const pricingRows = [
  {
    option:
      "Social Media Marketing Agency in India like Big Beans Digital for Startups or Early-stage Businesses",
    cost: "₹12,000 – ₹40,000",
    bestFor:
      "Startups and early-stage businesses, including 1–2 platforms, content creation and management, with advertising depending on the package.",
  },
  {
    option: "Social Media Marketing Agency Based Out of Tier 1 Cities",
    cost: "₹40,000 – ₹90,000",
    bestFor:
      "Startups and businesses ready for strategy, content and light paid social.",
  },
  {
    option: "Digital Marketing Agency Which Provides Full-Services",
    cost: "₹90,000 – ₹2,00,000+",
    bestFor:
      "Scaling brands running organic social, paid campaigns and analytics across multiple platforms.",
  },
  {
    option: "In-House Social Media Marketing Team",
    cost: "₹93,000 – ₹1,95,000+",
    bestFor:
      "Businesses spending ₹1,50,000+ per month on marketing overall.",
  },
];

const faqItems = [
  {
    question:
      "How much should a business realistically budget for social media marketing per month?",
    answer: (
      <>
        A realistic budget depends on your growth stage, platform scope, and
        whether you are focusing on organic brand building or paid lead
        generation. Across India, professional social media management typically
        ranges from ₹15,000 to ₹90,000+ per month.
        <br />
        <br />
        At{" "}
        <InternalLink href="/">
          Big Beans Digital
        </InternalLink>
        , we eliminate guesswork by offering transparent, tiered pricing,
        starting from around ₹12,000–₹40,000/month for early-stage brands
        needing consistent, strategic posting on 1–2 platforms.
      </>
    ),
  },
  {
    question:
      "What makes Big Beans Digital different from traditional agencies when it comes to pricing transparency?",
    answer: (
      <>
        Unlike agencies that hide behind “contact us for a quote” forms or
        vague retainers,{" "}
        <InternalLink href="/">
          Big Beans Digital
        </InternalLink>{" "}
        focuses on clear, itemized deliverables for every package. This gives
        clients better clarity, predictable monthly billing and ownership of
        their advertising accounts.
      </>
    ),
  },
  {
    question:
      "Is it better to hire an in-house social media marketing team or partner with a leading social media marketing agency like Big Beans Digital?",
    answer: (
      <>
        Building an in-house team in 2026 typically costs ₹93,000 to
        ₹1,95,000+ per month in salaries alone, before software subscriptions
        and recruitment expenses.
        <br />
        <br />
        When you partner with{" "}
        <InternalLink href="/">
          Big Beans Digital
        </InternalLink>
        , you get access to a cross-functional team including strategy, design,
        copywriting and community management without carrying the full overhead
        of an in-house department.
      </>
    ),
  },
  {
    question: "Are paid ad costs included in agency fees?",
    answer: (
      <>
        No. Reputable marketing partners generally keep platform ad spend,
        which is paid directly to Meta, Google or LinkedIn, separate from
        agency management fees.
        <br />
        <br />
        At{" "}
        <InternalLink href="/services/google-ads-meta-ads">
          Big Beans Digital
        </InternalLink>
        , paid campaigns can include ad copy, visual assets, audience targeting
        and ongoing campaign optimization.
      </>
    ),
  },
  {
    question:
      "How long does it take to see a tangible return on investment from social media marketing?",
    answer: (
      <>
        Social media ROI generally operates on two tracks:
        <br />
        <br />
        <strong>Paid Social Advertising:</strong> Can generate targeted traffic,
        inquiries and leads within the first 14–30 days of campaign launch.
        <br />
        <br />
        <strong>Organic Social Management:</strong> Typically takes 3–6 months
        to establish brand authority, foster community trust and generate
        steady organic conversions.
      </>
    ),
  },
  {
    question:
      "Can Big Beans Digital effectively manage social media for international brands outside India?",
    answer: (
      <>
        Yes. Digital marketing processes, audience psychology and performance
        analytics can be scaled internationally.{" "}
        <InternalLink href="/">
          Big Beans Digital
        </InternalLink>{" "}
        manages campaigns for international clients looking for premium
        execution without Western agency price markups.
      </>
    ),
  },
  {
    question:
      "What red flags should I watch out for when evaluating agency quotes?",
    answer: (
      <>
        Watch for unrealistically cheap retainers, guaranteed leads in the
        first week, ad spend hidden inside management fees, recycled templates,
        no documented strategy and reporting focused only on vanity metrics.
      </>
    ),
  },
  {
    question:
      "Does Big Beans Digital offer Search Engine Optimization alongside social media services?",
    answer: (
      <>
        Yes. While social media can build community engagement and brand
        awareness, combining it with organic search visibility can create a
        more complete digital marketing funnel.
        <br />
        <br />
        <InternalLink href="/">
          Big Beans Digital
        </InternalLink>{" "}
        can integrate social content with technical and content-led search
        strategies as part of a broader growth approach.
      </>
    ),
  },
  {
    question:
      "What specific deliverables are included in Big Beans Digital’s Starter and Growth packages?",
    answer: (
      <>
        Every{" "}
        <InternalLink href="/">
          Big Beans Digital
        </InternalLink>{" "}
        package is structured around defined deliverables designed around the
        client’s business goals, platform requirements, content volume and
        campaign objectives. The exact mix can vary according to the package
        and engagement period.
      </>
    ),
  },
  {
    question:
      "Why should scaling and enterprise brands choose Big Beans Digital’s Full-Service package?",
    answer: (
      <>
        Scaling brands often find it inefficient to manage separate vendors for
        graphic design, video production, advertising and analytics. A
        full-service model brings these activities together under one connected
        strategy.
      </>
    ),
  },
  {
    question:
      "How do I know if my business needs Social Media Optimization or Social Media Marketing?",
    answer: (
      <>
        <strong>Choose SMO</strong> if your main goal is optimizing existing
        profiles, maintaining a professional brand identity and keeping current
        customers engaged organically.
        <br />
        <br />
        <strong>Choose SMM</strong> if you need active growth, new audience
        reach, lead generation and paid advertising funnels.
        <br />
        <br />
        At{" "}
        <InternalLink href="/services/social-media-marketing">
          Big Beans Digital
        </InternalLink>
        , we can help determine the operational mix your business needs.
      </>
    ),
  },
  {
    question:
      "How do I get started with Big Beans Digital, and what does the onboarding process look like?",
    answer: (
      <>
        Getting started takes three simple steps:
        <br />
        <br />
        <strong>1. Free Audit & Discovery Call:</strong> Analyze your current
        social presence, audience and business goals.
        <br />
        <br />
        <strong>2. Custom Package Recommendation:</strong> Receive an itemized
        proposal with deliverables matched to your budget.
        <br />
        <br />
        <strong>3. 7-Day Onboarding:</strong> Establish brand voice, content
        strategy, editorial workflows and the first content calendar.
      </>
    ),
  },
];

function InternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-bold text-[#171717] no-underline hover:text-[#171717]"
    >
      {children}
    </Link>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-[#F8BC04]">{children}</span>;
}

function SectionTitle({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-start gap-4">
      <span className="mt-1 flex h-9 min-w-9 items-center justify-center rounded-full bg-black px-2 text-[11px] font-black text-[#F8BC04]">
        {number}
      </span>

      <h2 className="text-[24px] font-black leading-[1.18] tracking-[-0.7px] text-[#171717] md:text-[29px]">
        {children}
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

function ChatGPTIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 4.5C12.9 4.5 10.3 6.3 8.7 9.1C5.6 9.3 3.2 11.8 3.2 14.9C3.2 18.1 5.6 20.6 8.7 20.8C10.3 23.6 12.9 25.4 16 25.4C19.1 25.4 21.7 23.6 23.3 20.8C26.4 20.6 28.8 18.1 28.8 14.9C28.8 11.8 26.4 9.3 23.3 9.1C21.7 6.3 19.1 4.5 16 4.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M11.1 10.2L20.9 19.8M20.9 10.2L11.1 19.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GeminiIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 3C17.7 10.4 21.6 14.3 29 16C21.6 17.7 17.7 21.6 16 29C14.3 21.6 10.4 17.7 3 16C10.4 14.3 14.3 10.4 16 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function SocialMediaMarketingCostIndia() {
  const articleTitle =
    "Social Media Marketing Cost in India: Complete Pricing Guide (2026)";

  const postedDate = "August 31, 2026";

  const aiPrompt = encodeURIComponent(
    `Please summarize this Big Beans Digital blog in a clear and practical way. Focus on social media marketing cost in India, social media management pricing, SMM packages, agency vs in-house costs, paid advertising costs, pricing factors, red flags when hiring an agency, and how businesses can choose the right social media marketing package.

Blog title: "${articleTitle}"

Page link: ${pageUrl}`
  );

  return (
    <main className="bg-[#FAFAFA] text-[#171717]">
      {/* BREADCRUMB */}
      <div className="mx-auto flex max-w-[1380px] justify-center px-5 pt-7 md:px-8 lg:px-10">
        <div className="inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-[#E8E8E8] bg-white px-5 py-3 text-[12px] shadow-[0_8px_25px_rgba(0,0,0,0.05)] md:text-[13px]">
          <Link
            href="/"
            className="shrink-0 text-[#171717] no-underline"
          >
            Home
          </Link>

          <span className="text-[#171717]">→</span>

          <Link
            href="/blog"
            className="shrink-0 text-[#171717] no-underline"
          >
            Blogs
          </Link>

          <span className="text-[#171717]">→</span>

          <span className="truncate font-bold">
            Social Media Marketing Cost in India
          </span>
        </div>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-[1380px] px-5 pb-12 pt-8 md:px-8 md:pt-12 lg:px-10 lg:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
          <div>
            <h1 className="max-w-[700px] text-[40px] font-black leading-[1.02] tracking-[-1.5px] text-[#171717] md:text-[55px] lg:text-[64px]">
              <Highlight>Social Media Marketing Cost in India</Highlight>
              : Complete Pricing Guide (2026)
            </h1>

            <p className="mt-7 max-w-[650px] text-[17px] leading-[1.65] text-[#171717] md:text-[18px]">
              Discover{" "}
              <InternalLink href="/services/social-media-marketing">
                social media marketing costs in India
              </InternalLink>
              , what agencies charge, package pricing and what affects your
              budget. Plan smarter with{" "}
              <InternalLink href="/">
                Big Beans Digital
              </InternalLink>
              .
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-[13px] text-[#171717]">
              <span>{postedDate}</span>

              <span className="h-4 w-px bg-[#BDBDBD]" />

              <span className="font-extrabold tracking-[0.3px]">
                By Big Beans Digital Team
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[34px] bg-black">
            <div className="relative aspect-[1350/1080] w-full">
              <Image
                src={thumbnail}
                alt="Social Media Marketing Cost in India"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-[1380px] px-5 pb-20 md:px-8 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_370px] lg:gap-14">
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

            {/* INTRO */}
            <section className="mb-14">
              <div className="rounded-[22px] border border-[#ECECEC] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.035)] md:p-9">
                <p className="text-[16px] leading-[1.8]">
                  <InternalLink href="/services/social-media-marketing">
                    Social media marketing pricing in India
                  </InternalLink>{" "}
                  typically ranges from ₹12,000 to ₹2,00,000+ per month. This
                  depends on the number of platforms managed, content volume and
                  whether paid advertising is included.
                </p>

                <p className="mt-5 text-[16px] leading-[1.8]">
                  A boutique agency managing one or two platforms generally
                  charges less, while a full-service agency handling organic
                  content, paid advertising and analytics across multiple
                  platforms sits at the higher end. Pricing can also change
                  depending on whether paid ads are included and how many months
                  you commit to.
                </p>

                <p className="mt-5 text-[16px] leading-[1.8]">
                  At{" "}
                  <InternalLink href="/">
                    Big Beans Digital
                  </InternalLink>
                  , our package pricing can change based on the number of months
                  you sign a contract for. Our packages are structured across
                  different growth stages, from early-stage startups to
                  full-service, multi-platform programmes for scaling brands.
                </p>

                <div className="my-7 rounded-2xl bg-black p-6">
                  <p className="text-[20px] font-black leading-[1.5] text-[#F8BC04]">
                    Important: Ad spend is separate.
                  </p>

                  <p className="mt-2 text-[15px] leading-[1.75] text-white">
                    The money you pay Meta, Google or LinkedIn directly is
                    almost always separate from the{" "}
                    <strong>social media management cost</strong> charged by an
                    agency.
                  </p>
                </div>

                <p className="text-[16px] leading-[1.8]">
                  If you have searched for{" "}
                  <InternalLink href="/services/social-media-marketing">
                    social media marketing cost in India
                  </InternalLink>{" "}
                  and landed on pages that simply say “contact us for a quote,”
                  this guide takes a more transparent approach. Below is a
                  practical breakdown of what{" "}
                  <InternalLink href="/services/social-media-marketing">
                    social media management services
                  </InternalLink>{" "}
                  can cost, who charges what and how to tell a fair price from
                  an overpriced or suspiciously cheap one.
                </p>
              </div>
            </section>

            {/* COST FACTORS */}
            <section className="mb-14">
              <SectionTitle number="01">
                What Determines Social Media Marketing Costs?
              </SectionTitle>

              <p className="text-[16px] leading-[1.8]">
                There is no single magic number because{" "}
                <InternalLink href="/services/social-media-marketing">
                  social media marketing packages
                </InternalLink>{" "}
                cover a wide scope of work. Before comparing quotes, it helps
                to know what actually drives the price.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  {
                    title: "Number of Platforms",
                    text: "Managing Instagram alone costs less than managing Instagram, Facebook, LinkedIn and X simultaneously. Each additional platform typically adds 30–50% to the base fee.",
                  },
                  {
                    title: "Content Volume and Format",
                    text: "A handful of static posts a month costs far less than daily posts plus Reels, carousels and short-form videos requiring scripting, shooting and editing.",
                  },
                  {
                    title: "Organic vs. Paid",
                    text: "Purely organic management is cheaper than a package that plans, executes and optimizes paid advertising campaigns.",
                  },
                  {
                    title: "Strategy and Reporting Depth",
                    text: "A documented content strategy, competitor analysis and plain-language monthly reporting cost more than a basic “just post it” arrangement.",
                  },
                  {
                    title: "Team Structure",
                    text: "A specialist agency team can include a strategist, designer, copywriter and community manager rather than relying on a single generalist.",
                  },
                  {
                    title: "Industry and Goals",
                    text: "Lead-generation-heavy industries such as real estate, education and B2B can require more targeting and testing than pure brand-awareness campaigns.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E8E8E8] bg-white p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 min-w-9 items-center justify-center rounded-full bg-black text-[12px] font-bold text-[#F8BC04]">
                        {index + 1}
                      </span>

                      <div>
                        <h3 className="text-[18px] font-extrabold">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[14px] leading-[1.75]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* PRICING TABLE */}
            <section className="mb-14">
              <SectionTitle number="02">
                Boutique Agency vs. Full-Service Agency vs. In-House Team
              </SectionTitle>

              <p className="text-[16px] leading-[1.8]">
                Every business researching{" "}
                <InternalLink href="/services/social-media-marketing">
                  SMM pricing in India
                </InternalLink>{" "}
                eventually has to choose the right level of support. Big Beans
                Digital is structured to cover businesses across different
                stages so they do not have to switch agencies every time they
                grow.
              </p>

              <div className="mt-7 overflow-x-auto rounded-2xl border border-[#E6E6E6] bg-white">
                <table className="w-full min-w-[760px] border-collapse text-left">
                  <thead>
                    <tr className="bg-black text-white">
                      <th className="px-5 py-5 text-sm font-extrabold">
                        Option
                      </th>

                      <th className="px-5 py-5 text-sm font-extrabold">
                        Typical Monthly Cost
                      </th>

                      <th className="px-5 py-5 text-sm font-extrabold">
                        Best For
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {pricingRows.map((row, index) => (
                      <tr
                        key={row.option}
                        className={
                          index % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                        }
                      >
                        <td className="border-t border-[#E8E8E8] px-5 py-5 align-top text-[14px] font-bold">
                          {index === 0 ? (
                            <InternalLink href="/services/social-media-marketing">
                              {row.option}
                            </InternalLink>
                          ) : (
                            row.option
                          )}
                        </td>

                        <td className="border-t border-[#E8E8E8] px-5 py-5 align-top text-[15px] font-black">
                          {row.cost}
                        </td>

                        <td className="border-t border-[#E8E8E8] px-5 py-5 align-top text-[14px] leading-[1.65]">
                          {row.bestFor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-7 rounded-2xl bg-[#FFF9E8] p-6">
                <p className="text-[16px] font-bold leading-[1.75]">
                  For most early-stage startups and SMEs, hiring a dedicated
                  agency team like{" "}
                  <InternalLink href="/services/social-media-marketing">
                    Big Beans Digital
                  </InternalLink>{" "}
                  can be more cost-effective than building an in-house
                  department that requires salaries, software subscriptions and
                  ongoing recruitment.
                </p>
              </div>
            </section>

            {/* SMM VS SMO */}
            <section className="mb-14">
              <SectionTitle number="03">
                SMM vs. SMO: Are They Priced Differently?
              </SectionTitle>

              <p className="text-[16px] leading-[1.8]">
                You will see both terms used in the Indian market.{" "}
                <InternalLink href="/services/social-media-marketing">
                  Social Media Marketing (SMM)
                </InternalLink>{" "}
                generally refers to a broader package covering content,
                community management and paid campaigns aimed at growth and
                conversions.
              </p>

              <p className="mt-5 text-[16px] leading-[1.8]">
                <InternalLink href="/services/social-media-marketing">
                  Social Media Optimization (SMO)
                </InternalLink>{" "}
                is the narrower, mostly organic discipline of optimizing
                profiles and posting consistently without running advertising
                campaigns.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
                  <h3 className="text-[20px] font-black">
                    Social Media Optimization
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.75]">
                    Usually focuses on profile optimization, organic posting,
                    consistency and existing audience engagement.
                  </p>
                </div>

                <div className="rounded-2xl bg-black p-6 text-white">
                  <h3 className="text-[20px] font-black text-[#F8BC04]">
                    Social Media Marketing
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.75] text-white">
                    Generally covers a wider growth system involving content,
                    audience building, paid campaigns, community management and
                    conversion-focused activity.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-[16px] leading-[1.8]">
                In practice, many agencies price SMO packages as the entry tier
                of their overall SMM offering. If a quote says “SMO package,”
                expect it to sit towards the lower end of the pricing range.
              </p>
            </section>

            {/* LOCATION */}
            <section className="mb-14">
              <SectionTitle number="04">
                How Location Impacts Agency Pricing: Local vs. Global
              </SectionTitle>

              <p className="text-[16px] leading-[1.8]">
                Location can influence agency overheads and therefore affect
                pricing. However, remote work has made it possible for
                businesses to work with skilled teams regardless of where the
                agency is physically located.
              </p>

              <h3 className="mt-9 text-[22px] font-black">
                The Kolkata & Eastern India Hub
              </h3>

              <p className="mt-3 text-[16px] leading-[1.8]">
                As Eastern India&apos;s primary commercial capital, Kolkata
                offers a blend of creative storytelling, technical skills and
                cost efficiency. Businesses evaluating agencies in Kolkata can
                often find high value per rupee compared with higher-overhead
                metropolitan markets.
              </p>

              <p className="mt-5 text-[16px] leading-[1.8]">
                Operational overheads can influence the cost of full-service
                teams, including services such as SEO, social media management
                and performance marketing. The deciding factor, however, should
                still be strategic process, portfolio and proven business
                results rather than simply the agency&apos;s location.
              </p>

              <h3 className="mt-9 text-[22px] font-black">
                Tier 1 Cities & High-Growth Regional Hubs
              </h3>

              <p className="mt-3 text-[16px] leading-[1.8]">
                Tier 1 cities and growing regional hubs have developed strong
                ecosystems for performance marketing, lead generation and
                social media. Businesses can compare local agencies based on
                strategy, service quality, experience and measurable outcomes.
              </p>

              <p className="mt-5 text-[16px] leading-[1.8]">
                Remote execution has also levelled the playing field. A capable
                team can serve a national brand without needing to operate from
                the same city as the client.
              </p>

              <div className="mt-7 rounded-2xl border-l-4 border-[#F8BC04] bg-white p-6">
                <p className="text-[16px] font-bold leading-[1.75]">
                  The right question is not simply “Where is the agency?” It is
                  “Does the agency have the strategy, process, creative quality
                  and reporting needed to achieve our business goals?”
                </p>
              </div>
            </section>

            {/* INTERNATIONAL */}
            <section className="mb-14">
              <SectionTitle number="05">
                The International Arbitrage: London vs. India
              </SectionTitle>

              <p className="text-[16px] leading-[1.8]">
                Many international brands outsource marketing activities to
                India to reduce the overhead associated with local Western
                agencies while maintaining access to skilled strategic and
                creative teams.
              </p>

              <p className="mt-5 text-[16px] leading-[1.8]">
                UK brands can face significantly higher agency retainers,
                especially when working with specialized advertising,
                performance marketing or SEO teams. This geographic difference
                can make Indian agencies attractive for businesses looking for
                a strong balance between execution quality and cost.
              </p>

              <p className="mt-5 text-[16px] leading-[1.8]">
                For international brands, the focus should remain on strategic
                execution, communication, measurable results and the agency&apos;s
                ability to understand the target market.
              </p>

              <div className="mt-7 rounded-2xl bg-black p-7">
                <p className="text-[23px] font-black leading-[1.45] text-[#F8BC04]">
                  Geographic pricing should never be confused with marketing
                  quality.
                </p>

                <p className="mt-3 text-[15px] leading-[1.75] text-white">
                  The right team is the one that can deliver the right strategy
                  for your business, audience and growth objectives.
                </p>
              </div>
            </section>

            {/* PLATFORM COSTS */}
            <section className="mb-14">
              <SectionTitle number="06">
                Platform Advertising Costs: CPC & CPM
              </SectionTitle>

              <p className="text-[16px] leading-[1.8]">
                It is vital to separate two different costs that often get
                lumped together.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
                  <span className="text-xs font-bold uppercase tracking-[1.2px]">
                    Cost 01
                  </span>

                  <h3 className="mt-3 text-[20px] font-black">
                    Management Fee
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.75]">
                    What you pay your agency for strategy, campaign management,
                    creative execution, optimization and reporting.
                  </p>
                </div>

                <div className="rounded-2xl bg-black p-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-[1.2px] text-[#F8BC04]">
                    Cost 02
                  </span>

                  <h3 className="mt-3 text-[20px] font-black text-white">
                    Ad Spend
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.75] text-white">
                    What you pay directly to Meta, Google or LinkedIn to
                    distribute your advertising.
                  </p>
                </div>
              </div>

              <p className="mt-7 text-[16px] leading-[1.8]">
                The source article gives indicative Indian CPC and CPM figures
                for Meta advertising and notes that LinkedIn and YouTube
                generally cost more per click. Agencies may charge a flat fee or
                a percentage of ad spend for campaign management.
              </p>

              <div className="mt-7 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[17px] font-black leading-[1.6]">
                  If anyone quotes you one “all-inclusive” number covering both
                  management and ad spend, ask for an itemized breakdown before
                  signing.
                </p>
              </div>
            </section>

            {/* RED FLAGS */}
            <section className="mb-14">
              <SectionTitle number="07">
                Red Flags to Watch For When Hiring an Agency
              </SectionTitle>

              <div className="space-y-4">
                {[
                  {
                    title: "Unrealistically Low Pricing",
                    text: "Packages priced at ₹3,000–₹5,000/month can indicate recycled templates, limited strategy and little or no community engagement.",
                  },
                  {
                    title: "No Documented Strategy",
                    text: "If an agency cannot show you a sample content calendar or explain its strategic process before you sign, ask how that process will work after onboarding.",
                  },
                  {
                    title: "Vanity-Metric Reporting",
                    text: "Reports that only highlight likes and reach without discussing leads, website traffic or sales can make it difficult to judge actual business impact.",
                  },
                  {
                    title: "Guaranteed Immediate Leads",
                    text: "Organic social media takes time. Promises of guaranteed leads in week one can indicate unrealistic expectations or unsustainable advertising practices.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E8E8E8] bg-white p-6"
                  >
                    <div className="flex gap-4">
                      <span className="text-[20px] font-black text-[#F8BC04]">
                        0{index + 1}
                      </span>

                      <div>
                        <h3 className="text-[18px] font-extrabold">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[14px] leading-[1.75]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-14">
              <SectionTitle number="08">
                Frequently Asked Questions
              </SectionTitle>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <details
                    key={item.question}
                    className="group rounded-[18px] border border-[#D9D9D9] bg-white"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-6 text-[16px] font-bold">
                      <span>
                        {index + 1}. {item.question}
                      </span>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-[20px] text-[#F8BC04]">
                        +
                      </span>
                    </summary>

                    <div className="border-t border-[#E8E8E8] px-6 pb-6 pt-5 text-[15px] leading-[1.8]">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-[24px] bg-black p-7 text-white md:p-9">
              <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#F8BC04]">
                Social Media Marketing Pricing
              </span>

              <h2 className="mt-3 text-[30px] font-black leading-[1.25] md:text-[38px]">
                Your social media marketing budget should match your ambition.
              </h2>

              <p className="mt-5 max-w-[800px] text-[16px] leading-[1.8]">
                Looking for a{" "}
                <InternalLink href="/services/social-media-marketing">
                  social media marketing company
                </InternalLink>{" "}
                that is upfront about pricing from the very first conversation?
                Big Beans Digital&apos;s packages are structured around different
                business growth stages and marketing requirements.
              </p>

              <p className="mt-4 max-w-[800px] text-[16px] leading-[1.8]">
                Get in touch for a free audit of your current social presence
                and a package recommendation based on your actual business
                goals.
              </p>

              <Link
                href="/connect"
                className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#F8BC04] px-6 py-4 text-sm font-bold text-black no-underline"
              >
                Contact Big Beans Digital
                <ArrowIcon />
              </Link>
            </section>
          </article>

          {/* STICKY SIDEBAR */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[24px] bg-[#111111] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.09)] md:p-6">
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
                    className="block rounded-2xl bg-white p-5 no-underline"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[14px] font-extrabold text-[#171717]">
                          {service.title}
                        </h3>

                        <p className="mt-2 text-[12px] leading-[1.6] text-[#171717]">
                          {service.description}
                        </p>
                      </div>

                      <span className="mt-1 shrink-0 text-[#F8BC04]">→</span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#2B2B2B] bg-[#181818] p-5">
                <p className="text-xs font-bold uppercase tracking-[1.3px] text-[#F8BC04]">
                  Let&apos;s Grow Your Business
                </p>

                <p className="mt-3 text-[15px] font-bold leading-[1.6] text-white">
                  Want a social media strategy and package built around your
                  actual business goals?
                </p>

                <Link
                  href="/connect"
                  className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-[#F8BC04] no-underline"
                >
                  Talk to Our Experts
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}