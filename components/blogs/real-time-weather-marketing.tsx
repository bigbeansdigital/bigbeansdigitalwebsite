"use client";

import Image from "next/image";
import Link from "next/link";

const blogUrl =
  "https://bigbeansdigital.com/blog/allblogs/real-time-weather-marketing";

const aiPrompt = `Summarize this BIGBEANS DIGITAL blog in a clear, concise and useful way. Explain the key ideas, important takeaways, practical recommendations and business implications.

Blog: Stop Guessing the Weather: How Agile Brands Turn Real-Time Data into Revenue
URL: ${blogUrl}`;

const chatGPTUrl = `https://chatgpt.com/?q=${encodeURIComponent(aiPrompt)}`;

const geminiUrl = `https://gemini.google.com/app?prompt=${encodeURIComponent(
  aiPrompt
)}`;

const services = [
  {
    title: "Social Media Marketing",
    description:
      "Build brand awareness and grow your audience across social platforms.",
    href: "/services/social-media-marketing",
    icon: "megaphone",
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
    icon: "code",
  },
  {
    title: "Branding",
    description:
      "Build a strong brand identity that connects with your audience.",
    href: "/services/branding",
    icon: "pen",
  },
];

const featuredPosts = [
  {
    title: "How to Audit Your Own Website SEO Before Hiring an Agency",
    date: "August 07, 2025",
    href: "/blog/allblogs/website-seo-audit",
    image: null,
    label: "SEO\nINSIGHTS",
  },
  {
    title:
      "Stop Guessing the Weather: How Agile Brands Turn Real-Time Data into Revenue",
    date: "August 14, 2026",
    href: "/blog/allblogs/real-time-weather-marketing",
    image:
      "/assets/blog/allblogs/real-time-weather-marketing/real-time-weather-marketing-thumbnail.png",
    label: "",
  },
];

function ServiceIcon({ type }: { type: string }) {
  if (type === "megaphone") {
    return (
      <svg
        viewBox="0 0 64 64"
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path d="M8 27h12l28-13v36L20 37H8V27Z" />
        <path d="M20 37l5 15h8l-5-15" />
        <path d="M48 23c4 3 6 7 6 11s-2 8-6 11" />
      </svg>
    );
  }

  if (type === "target") {
    return (
      <svg
        viewBox="0 0 64 64"
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <circle cx="29" cy="32" r="17" />
        <circle cx="29" cy="32" r="9" />
        <circle cx="29" cy="32" r="2.5" fill="currentColor" />
        <path d="M42 22l12-10" />
        <path d="M46 12h8v8" />
      </svg>
    );
  }

  if (type === "code") {
    return (
      <svg
        viewBox="0 0 64 64"
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <rect x="9" y="9" width="46" height="46" rx="3" />
        <path d="M25 23 17 32l8 9" />
        <path d="m39 23 8 9-8 9" />
        <path d="M35 19 29 45" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 64 64"
      className="h-9 w-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M10 48 43 15l7 7-33 33H10v-7Z" />
      <path d="m38 20 7 7" />
      <path d="M45 12 52 19" />
      <path d="M15 55h37" />
    </svg>
  );
}

function ChatGPTIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="M31 8c5-2 11 0 14 5 6-1 11 3 13 8 2 5 0 10-4 14 2 5 0 11-5 14-4 3-9 3-14 1-4 4-10 5-15 2-5-2-8-7-8-12-5-3-7-8-6-13 1-6 5-10 11-11 1-4 5-7 9-8Z" />
      <path d="M21 24 34 32l13-8" />
      <path d="M34 32v15" />
      <path d="m21 39 13-7 13 7" />
    </svg>
  );
}

function GeminiIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-8 w-8"
      fill="currentColor"
    >
      <path d="M32 3c2.8 14.7 8.3 22.2 25 29-16.7 6.8-22.2 14.3-25 29-2.8-14.7-8.3-22.2-25-29C23.7 25.2 29.2 17.7 32 3Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-7 flex items-center gap-3">
      <span className="h-5 w-[3px] rounded-full bg-[#F8BC04]" />
      <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-[#111111] md:text-[24px]">
        {children}
      </h2>
    </div>
  );
}

export default function RealTimeWeatherMarketing() {
  return (
    <main className="w-full bg-white text-[#111111]">
      {/* =========================================================
          BREADCRUMB
      ========================================================= */}
      <section className="w-full bg-white px-4 py-5 sm:px-6 md:py-7">
        <div className="mx-auto flex max-w-7xl justify-center">
          <div className="inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-3 text-[11px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:gap-3 sm:px-7 sm:py-3.5 sm:text-[12px]">
            <Link
              href="/"
              className="shrink-0 font-medium text-[#555] transition-colors hover:text-[#F8BC04]"
            >
              Home
            </Link>

            <span className="text-[#999]">→</span>

            <Link
              href="/blog"
              className="shrink-0 font-semibold text-[#555] transition-colors hover:text-[#F8BC04]"
            >
              BLOGS
            </Link>

            <span className="text-[#999]">→</span>

            <span className="max-w-[170px] truncate font-semibold text-[#111] sm:max-w-[320px]">
              Real Time Weather Marketing
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="w-full bg-white px-4 pb-8 pt-4 sm:px-6 md:pb-10 md:pt-5">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* LEFT */}
          <div className="order-2 lg:order-1">
            <h1 className="max-w-[650px] text-[38px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#111] sm:text-[46px] md:text-[54px] lg:text-[58px] xl:text-[62px]">
              Stop Guessing the Weather: How Agile Brands Turn Real-Time Data
              into Revenue
            </h1>

            <p className="mt-6 max-w-[610px] text-[15px] leading-7 text-[#555] md:text-[16px]">
              Learn how agile brands use weather data, AI, and real-time
              signals to create contextual marketing campaigns that drive
              revenue.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-[13px] text-[#333]">
              <span className="flex items-center gap-2">
                <span className="text-[17px]">▣</span>
                August 14, 2026
              </span>

              <span className="hidden h-5 w-px bg-[#cfcfcf] sm:block" />

              <span className="font-bold">BY BIG BEANS DIGITAL</span>
            </div>
          </div>

          {/* RIGHT - HERO IMAGE */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[1350/1080] w-full overflow-hidden rounded-[32px] bg-[#F8BC04] shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
              <Image
                src="/assets/blog/allblogs/real-time-weather-marketing/real-time-weather-marketing-thumbnail.png"
                alt="Real-time weather marketing and contextual marketing signals"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT + SIDEBAR
      ========================================================= */}
      <section className="w-full bg-white px-4 pb-20 sm:px-6 md:pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_390px]">
          {/* =====================================================
              LEFT ARTICLE
          ===================================================== */}
          <article className="min-w-0">
            {/* SUMMARIZE WITH AI */}
            <div className="mb-9 rounded-2xl bg-[#111111] px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:px-7">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[18px] font-medium text-[#F8BC04] sm:text-[20px]">
                  Summarize with AI
                </span>

                <div className="flex items-center gap-5">
                  <a
                    href={chatGPTUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Summarize this blog with ChatGPT"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-[#F8BC04] transition-all duration-300 hover:scale-110 hover:bg-[#F8BC04] hover:text-black"
                  >
                    <ChatGPTIcon />
                  </a>

                  <a
                    href={geminiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Summarize this blog with Gemini"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-[#F8BC04] transition-all duration-300 hover:scale-110 hover:bg-[#F8BC04] hover:text-black"
                  >
                    <GeminiIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* ARTICLE */}
            <div className="space-y-11">
              {/* 01 */}
              <section>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-[-0.02em] md:text-[30px]">
                  <span className="mr-3 text-[#F8BC04]">01</span>
                  What Is Real-Time Marketing?
                </h2>

                <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#444] md:text-[16px]">
                  <p>
                    Real-time marketing is the practice of responding to
                    current events, customer behaviour, environmental
                    conditions and other live signals with marketing messages
                    that feel relevant to the exact moment.
                  </p>

                  <p>
                    Instead of relying entirely on campaigns planned weeks or
                    months in advance, brands can use live data to understand
                    what is happening now and adjust their marketing
                    accordingly.
                  </p>
                </div>
              </section>

              {/* 02 */}
              <section>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-[-0.02em] md:text-[30px]">
                  <span className="mr-3 text-[#F8BC04]">02</span>
                  The End of the Rigid Seasonal Marketing Calendar
                </h2>

                <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#444] md:text-[16px]">
                  <p>
                    Traditional marketing calendars provide structure, but
                    they can also create distance between a campaign and what
                    customers are actually experiencing.
                  </p>

                  <p>
                    Weather, local events, traffic patterns, purchasing
                    behaviour and cultural moments can all influence what
                    people want at a particular point in time. Real-time
                    marketing allows brands to react instead of simply waiting
                    for the next scheduled campaign.
                  </p>
                </div>

                <div className="relative mt-7 overflow-hidden rounded-[22px] bg-[#f5f5f5]">
                  <Image
                    src="/assets/blog/allblogs/real-time-weather-marketing/real-time-weather-marketing1.png"
                    alt="Real-time marketing responding to changing customer and environmental conditions"
                    width={1080}
                    height={1350}
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </section>

              {/* 03 */}
              <section>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-[-0.02em] md:text-[30px]">
                  <span className="mr-3 text-[#F8BC04]">03</span>
                  Why Weather Data Is a Powerful Marketing Signal
                </h2>

                <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#444] md:text-[16px]">
                  <p>
                    Weather affects consumer behaviour in remarkably practical
                    ways. A sudden temperature change can alter what people
                    buy, where they go and how they interact with brands.
                  </p>

                  <p>
                    When businesses connect weather data with their marketing
                    systems, they can create campaigns that respond to
                    real-world conditions rather than generic assumptions
                    about the season.
                  </p>
                </div>
              </section>

              {/* 04 */}
              <section>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-[-0.02em] md:text-[30px]">
                  <span className="mr-3 text-[#F8BC04]">04</span>
                  Data Meets Context: How Brands Can Act on Real-Time Signals
                </h2>

                <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#444] md:text-[16px]">
                  <p>
                    Data becomes valuable when it is connected to context. A
                    temperature reading on its own is simply a number.
                    Combined with location, customer behaviour, product
                    availability and timing, it becomes a potential marketing
                    trigger.
                  </p>

                  <p>
                    Brands can use these signals to change messaging,
                    recommend products, adjust offers and make digital
                    experiences more relevant to the person seeing them.
                  </p>
                </div>

                <div className="relative mt-7 overflow-hidden rounded-[22px] bg-[#f5f5f5]">
                  <Image
                    src="/assets/blog/allblogs/real-time-weather-marketing/real-time-weather-marketing2.png"
                    alt="Connecting real-time data with context to create relevant marketing triggers"
                    width={1080}
                    height={1350}
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </section>

              {/* 05 */}
              <section>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-[-0.02em] md:text-[30px]">
                  <span className="mr-3 text-[#F8BC04]">05</span>
                  First-Party Data Makes Contextual Marketing More Powerful
                </h2>

                <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#444] md:text-[16px]">
                  <p>
                    First-party data can provide another important layer of
                    context. Purchase history, preferences, engagement
                    patterns and website behaviour can help brands determine
                    which real-time message is most relevant to a customer.
                  </p>

                  <p>
                    The strongest campaigns combine external signals such as
                    weather with information a brand already understands about
                    its customers.
                  </p>
                </div>
              </section>

              {/* 06 */}
              <section>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-[-0.02em] md:text-[30px]">
                  <span className="mr-3 text-[#F8BC04]">06</span>
                  How AI Can Turn Real-Time Data Into Real-Time Decisions
                </h2>

                <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#444] md:text-[16px]">
                  <p>
                    AI can help marketers process large volumes of live signals
                    faster than manual workflows. It can identify patterns,
                    classify audiences and help determine which response is
                    most appropriate.
                  </p>

                  <p>
                    The result is not simply faster marketing. It is marketing
                    that can become more adaptive, contextual and responsive
                    to what customers are experiencing right now.
                  </p>
                </div>

                <div className="relative mt-7 overflow-hidden rounded-[22px] bg-[#f5f5f5]">
                  <Image
                    src="/assets/blog/allblogs/real-time-weather-marketing/real-time-weather-marketing3.png"
                    alt="AI processing real-time signals to support contextual marketing decisions"
                    width={1080}
                    height={1350}
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </section>

              {/* 07 */}
              <section>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-[-0.02em] md:text-[30px]">
                  <span className="mr-3 text-[#F8BC04]">07</span>
                  The Attribution Challenge: Did the Weather Actually Cause
                  the Sale?
                </h2>

                <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#444] md:text-[16px]">
                  <p>
                    Real-time campaigns also create a measurement challenge.
                    When several variables change simultaneously, marketers
                    need to understand whether the real-time signal genuinely
                    influenced the customer or simply happened at the same
                    time.
                  </p>

                  <p>
                    Strong measurement frameworks, controlled testing and clear
                    attribution models help businesses understand which
                    signals are actually creating incremental results.
                  </p>
                </div>
              </section>

              {/* 08 */}
              <section>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-[-0.02em] md:text-[30px]">
                  <span className="mr-3 text-[#F8BC04]">08</span>
                  From Seasonal Campaigns to Trigger-Based Marketing
                </h2>

                <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#444] md:text-[16px]">
                  <p>
                    Trigger-based marketing changes the way campaigns are
                    planned. Instead of building one message and distributing
                    it broadly, marketers can establish rules around specific
                    conditions.
                  </p>

                  <p>
                    When the right condition occurs, the appropriate campaign,
                    offer or message can be activated automatically.
                  </p>
                </div>
              </section>

              {/* 09 */}
              <section>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-[-0.02em] md:text-[30px]">
                  <span className="mr-3 text-[#F8BC04]">09</span>
                  How to Start Using Real-Time Marketing in Your Business
                </h2>

                <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#444] md:text-[16px]">
                  <p>
                    Businesses do not need an enormous technology stack to
                    begin. The first step is identifying the signals that
                    genuinely matter to the customer journey.
                  </p>

                  <ol className="list-decimal space-y-3 pl-6 marker:font-bold marker:text-[#F8BC04]">
                    <li>
                      Identify the real-time signals relevant to your audience.
                    </li>
                    <li>Connect those signals with your customer data.</li>
                    <li>Define campaign triggers and business rules.</li>
                    <li>Create contextual creative variations.</li>
                    <li>
                      Measure incremental performance and continuously improve.
                    </li>
                  </ol>
                </div>
              </section>

              {/* 10 */}
              <section>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-[-0.02em] md:text-[30px]">
                  <span className="mr-3 text-[#F8BC04]">10</span>
                  The Future of Marketing Is More Contextual
                </h2>

                <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#444] md:text-[16px]">
                  <p>
                    Customers increasingly expect brands to understand
                    context. The most effective marketing will not simply
                    reach the right person; it will reach that person with the
                    right message at the right moment.
                  </p>

                  <p>
                    Weather, location, behaviour, events and AI can all
                    contribute to that shift toward more intelligent and
                    responsive marketing.
                  </p>
                </div>
              </section>

              {/* 11 */}
              <section>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-[-0.02em] md:text-[30px]">
                  <span className="mr-3 text-[#F8BC04]">11</span>
                  Final Thoughts: Stop Guessing, Start Responding
                </h2>

                <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#444] md:text-[16px]">
                  <p>
                    Real-time marketing gives brands an opportunity to move
                    beyond rigid campaign calendars and respond to what is
                    actually happening around their customers.
                  </p>

                  <p>
                    The opportunity is simple: stop guessing what customers
                    need and start building marketing that responds to the
                    moments that matter.
                  </p>
                </div>

                <div className="mt-7 rounded-r-2xl border-l-4 border-[#F8BC04] bg-[#fafafa] px-5 py-5 text-[16px] font-bold leading-7 text-[#222] md:px-7">
                  The future belongs to brands that can turn real-time signals
                  into meaningful customer experiences.
                </div>
              </section>
            </div>

            {/* ===================================================
                FINAL CTA
            =================================================== */}
            <section className="relative mt-14 overflow-hidden rounded-[28px] bg-[#111111] px-7 py-9 text-white shadow-[0_18px_45px_rgba(0,0,0,0.12)] sm:px-9 md:mt-20 md:px-10 md:py-11">
              <div className="pointer-events-none absolute -right-10 -top-16 h-36 w-36 rounded-full border-[8px] border-[#F8BC04]/20" />
              <div className="pointer-events-none absolute -bottom-24 right-20 h-40 w-40 rounded-full border-[8px] border-[#F8BC04]/10" />

              <div className="relative z-10">
                <p className="text-[11px] font-bold tracking-[0.22em] text-[#F8BC04] sm:text-[12px]">
                  BIGBEANS DIGITAL
                </p>

                <div className="mt-4 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                  <div className="max-w-[720px]">
                    <h2 className="text-[31px] font-extrabold leading-[1.08] tracking-[-0.025em] sm:text-[37px] md:text-[42px]">
                      Turn Real-Time Signals Into Smarter Marketing
                    </h2>

                    <p className="mt-5 max-w-[720px] text-[14px] leading-6 text-[#d5d5d5] sm:text-[15px]">
                      Build contextual campaigns that react to customer
                      behaviour, real-world conditions and the moments that
                      matter.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-semibold text-[#eeeeee] sm:text-[12px]">
                      <span>✓ Contextual Campaigns</span>
                      <span>✓ Real-Time Signals</span>
                      <span>✓ Smarter Marketing</span>
                    </div>
                  </div>

                  <Link
                    href="/connect"
                    className="group inline-flex w-fit shrink-0 items-center justify-between gap-8 rounded-xl bg-[#F8BC04] px-6 py-4 text-[13px] font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(248,188,4,0.22)] sm:px-7"
                  >
                    <span>Explore Real-Time Marketing</span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowIcon />
                    </span>
                  </Link>
                </div>
              </div>
            </section>
          </article>

          {/* =====================================================
              RIGHT SIDEBAR
          ===================================================== */}
          <aside className="self-start space-y-8 lg:sticky lg:top-24">
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
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="105px"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[#111111] px-2 text-center">
                          <span className="whitespace-pre-line text-[9px] font-extrabold leading-[1.2] tracking-[0.08em] text-[#F8BC04]">
                            {post.label}
                          </span>
                        </div>
                      )}
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
  );
}