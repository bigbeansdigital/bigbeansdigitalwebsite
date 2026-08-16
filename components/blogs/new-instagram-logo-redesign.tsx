import Image from "next/image";
import Link from "next/link";

const thumbnail =
  "/assets/blog/singleblogs/new-instagram-logo-redesign.png";

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
    title:
      "What Would We Post If We Had to Launch a Clinic in India From Zero on Instagram?",
    date: "August 17, 2026",
    image:
      "/assets/blog/allblogs/singleblogs/clinic-instagram-marketing-strategy.png",
    href: "/blog/clinic-instagram-marketing-strategy",
  },
];

function SectionTitle({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group mb-6 flex items-start gap-4">
      <span className="mt-1 flex h-9 min-w-9 items-center justify-center rounded-full bg-[#F8BC04] px-2 text-[12px] font-black text-black shadow-[0_6px_18px_rgba(248,188,4,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
        {number}
      </span>

      <h2 className="text-[24px] font-black leading-[1.18] tracking-[-0.7px] text-[#171717] md:text-[29px]">
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
      width="26"
      height="26"
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
      width="27"
      height="27"
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

export default function NewInstagramLogoRedesign() {
  const articleTitle =
    "New Instagram Logo 2026: What the Wordmark Redesign Means for Brands and Marketers";

  const aiPrompt = encodeURIComponent(
    `Summarize this BigBeans Digital blog: "${articleTitle}". Focus on Instagram's 2026 wordmark redesign, typography, brand equity, visual identity, social media branding, logo redesign principles and lessons for businesses.`
  );

  return (
    <main className="bg-[#FAFAFA] text-[#171717]">
      {/* HERO */}
      <section className="mx-auto max-w-[1380px] px-5 pb-14 pt-8 md:px-8 md:pt-12 lg:px-10 lg:pb-16">
        <div className="grid items-center gap-9 lg:grid-cols-[0.93fr_1.07fr] lg:gap-12">
          <div className="animate-[fadeIn_0.7s_ease-out]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E9E9E9] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#666] shadow-[0_6px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F8BC04]" />
              Branding & Digital Marketing
            </div>

            <h1 className="max-w-[610px] text-[40px] font-black leading-[1.04] tracking-[-1.8px] md:text-[49px] lg:text-[55px]">
              New Instagram Logo 2026: What the{" "}
              <Highlight>
                Wordmark Redesign Means for Brands and Marketers
              </Highlight>
            </h1>

            <p className="mt-6 max-w-[570px] text-[15px] leading-[1.75] text-[#4A4A4A] md:text-[16px]">
              Instagram has refreshed its wordmark after around a decade. Here
              is what the redesign means for brand equity, typography, visual
              identity and businesses.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] text-[#666] md:text-[12px]">
              <span>August 2026</span>

              <span className="h-3.5 w-px bg-[#CFCFCF]" />

              <span className="font-extrabold tracking-[0.5px] text-[#171717]">
                BY BIG BEANS DIGITAL
              </span>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Instagram Logo 2026",
                "Branding",
                "Typography",
                "Visual Identity",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#FFF7D8] px-3.5 py-2 text-[10px] font-bold text-[#9B7300] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8BC04] hover:text-black"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-[fadeIn_0.9s_ease-out]">
            <div className="group relative overflow-hidden rounded-[30px] border border-[#E6E0D3] bg-[#EEEAE2] shadow-[0_25px_70px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(0,0,0,0.13)]">
              <div className="relative aspect-[1350/1080] w-full overflow-hidden rounded-[28px]">
                <Image
                  src={thumbnail}
                  alt={articleTitle}
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-[1380px] px-5 pb-20 md:px-8 lg:px-10">
        <div className="grid items-start gap-9 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-12">
          <article className="min-w-0">
            {/* AI SUMMARY */}
            <div className="mb-9 flex min-h-[64px] w-full items-center justify-between gap-5 rounded-[18px] bg-[#111111] px-6 py-3.5 shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.13)] md:px-7">
              <span className="text-[14px] font-semibold text-[#F8BC04] md:text-[16px]">
                Summarize with AI
              </span>

              <div className="flex shrink-0 items-center gap-5">
                <a
                  href={`https://chatgpt.com/?q=${aiPrompt}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Summarize this blog with ChatGPT"
                  className="flex items-center justify-center text-[#F8BC04] no-underline transition-all duration-300 hover:scale-125 hover:-rotate-3"
                >
                  <ChatGPTIcon />
                </a>

                <a
                  href={`https://gemini.google.com/app?text=${aiPrompt}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Summarize this blog with Gemini"
                  className="flex items-center justify-center text-[#F8BC04] no-underline transition-all duration-300 hover:scale-125 hover:rotate-3"
                >
                  <GeminiIcon />
                </a>
              </div>
            </div>

            {/* INTRODUCTION */}
            <section className="mb-14">
              <div className="rounded-[22px] border border-[#E9E9E9] bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.035)] md:p-9">
                <p className="text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  Instagram has a new look — at least when it comes to its
                  name.
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  In August 2026, Instagram introduced a refreshed wordmark,
                  marking the first major change to its written logo in around
                  a decade. The familiar Instagram camera icon has not been
                  replaced; instead, the focus of the update is the text-based
                  logo and the broader visual identity surrounding it.
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  Instagram Head Adam Mosseri described the new direction as
                  cleaner and more modern while maintaining a connection to the
                  platform&apos;s original visual character.
                </p>

                <div className="my-7 rounded-2xl bg-[#171717] p-6 text-white">
                  <p className="text-[19px] font-black leading-[1.5]">
                    But beyond the internet jokes, Instagram&apos;s 2026 logo
                    update raises a much more important question for businesses:
                  </p>

                  <p className="mt-4 text-[20px] font-black leading-[1.5] text-[#F8BC04]">
                    What can brands learn from one of the world&apos;s biggest
                    social platforms redesigning its identity?
                  </p>
                </div>

                <p className="text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  At{" "}
                  <Link
                    href="/"
                    className="font-bold text-[#B57F00] no-underline transition-colors hover:text-[#171717]"
                  >
                    BIGBEANS DIGITAL
                  </Link>
                  , we believe the answer goes far beyond typography.
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  This is a story about brand equity, visual identity, social
                  media branding, digital design and knowing when a brand
                  should — or should not — redesign itself.
                </p>
              </div>
            </section>

            {/* 01 */}
            <section className="mb-14">
              <SectionTitle number="01">
                What Is the <Highlight>New Instagram Logo in 2026?</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                The new Instagram logo in 2026 is primarily a refreshed{" "}
                <strong>wordmark</strong>, rather than a replacement of the
                familiar Instagram camera icon.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                Instagram has refreshed its text-based representation of the
                Instagram name. The familiar camera icon remains an important
                part of the brand identity.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                The new Instagram text logo retains the recognizable
                handwritten influence associated with the previous wordmark but
                introduces a more contemporary typographic treatment.
              </p>

              <div className="mt-7 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[18px] font-extrabold leading-[1.6]">
                  Instagram is changing the way it expresses itself without
                  throwing away the visual associations that billions of users
                  already recognize.
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                A <strong>logo redesign</strong> can mean replacing an existing
                identity completely. A <strong>brand refresh</strong> can mean
                refining the existing identity while preserving elements that
                already carry strong recognition.
              </p>

              <p className="mt-4 text-[15px] font-extrabold leading-[1.8]">
                Instagram&apos;s 2026 update falls much closer to the second
                category.
              </p>
            </section>

            {/* 02 */}
            <section className="mb-14">
              <SectionTitle number="02">
                What Does the{" "}
                <Highlight>New Instagram Wordmark Look Like?</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                The easiest way to describe the Instagram wordmark redesign is
                as a more contemporary interpretation of Instagram&apos;s
                familiar script-inspired lettering.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                The previous wordmark was strongly associated with a continuous
                cursive style. The new version combines characteristics of
                cursive lettering with more structured, print-like forms,
                creating what can be described as a{" "}
                <strong>hybrid typography</strong> approach.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "More contemporary",
                  "More simplified",
                  "Still connected to Instagram's handwritten heritage",
                  "More flexible across digital applications",
                  "Designed to express individuality and creativity",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[#E8E8E8] bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFF3C5] text-[#E2A500]">
                      <CheckIcon />
                    </span>

                    <span className="text-[14px] font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                It is not a traditional serif-to-sans-serif transformation. It
                is not a complete move from handwriting to geometric
                typography.
              </p>

              <div className="mt-5 rounded-2xl bg-[#171717] p-6 text-white">
                <p className="text-[19px] font-extrabold leading-[1.5]">
                  Instead, Instagram is experimenting with a{" "}
                  <Highlight>sans-serif/script hybrid visual language.</Highlight>
                </p>
              </div>
            </section>

            {/* 03 */}
            <section className="mb-14">
              <SectionTitle number="03">
                Differences Between the{" "}
                <Highlight>Old and New Instagram Cursive Wordmark</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                The biggest difference between the old and new Instagram
                wordmark is not simply the shape of individual letters.
              </p>

              <div className="my-7 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 transition-all duration-300 hover:-translate-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#888]">
                    Previous Wordmark
                  </span>

                  <h3 className="mt-3 text-[20px] font-extrabold">
                    Familiarity & Nostalgia
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.7] text-[#666]">
                    The old wordmark leaned heavily into a recognizable cursive
                    character.
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6 transition-all duration-300 hover:-translate-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#B57F00]">
                    New Wordmark
                  </span>

                  <h3 className="mt-3 text-[20px] font-extrabold">
                    Modernization
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.7] text-[#555]">
                    The new version retains personality while introducing more
                    controlled and simplified letterforms.
                  </p>
                </div>
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                Instagram is effectively asking its audience to accept a new
                visual expression while still recognizing the brand they&apos;ve
                known for years.
              </p>

              <div className="mt-6 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[18px] font-extrabold leading-[1.6]">
                  You have to change enough to demonstrate progress without
                  changing so much that you lose recognition.
                </p>
              </div>
            </section>

            {/* 04 */}
            <section className="mb-14">
              <SectionTitle number="04">
                Why Did Instagram <Highlight>Change Its Logo?</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                The simplest answer is that the wordmark had been unchanged for
                about ten years, and Instagram felt it was time for a refresh.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                But there is a broader strategic reason.
              </p>

              <div className="mt-6 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[20px] font-black leading-[1.45]">
                  Instagram today is fundamentally different from Instagram a
                  decade ago.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Short-form video",
                  "Reels",
                  "Stories",
                  "Creators",
                  "Businesses",
                  "Advertising",
                  "Messaging",
                  "Communities",
                  "Shopping",
                  "AI-powered creative experiences",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#E8E8E8] bg-white px-4 py-4 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                Its brand therefore needs to represent more than photography.
                It needs to represent{" "}
                <strong>creation, communication and self-expression.</strong>
              </p>

              <div className="mt-6 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[18px] font-extrabold leading-[1.6]">
                  The visual identity is evolving because the product itself has
                  evolved.
                </p>
              </div>
            </section>

            {/* 05 */}
            <section className="mb-14">
              <SectionTitle number="05">
                Why Do People Call the New Instagram Logo{" "}
                <Highlight>&quot;Instagzam&quot;?</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                Shortly after the new wordmark appeared, social media users
                began joking that the redesigned lettering looked like
                &quot;Instagzam&quot; rather than &quot;Instagram.&quot;
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                The criticism primarily focuses on the appearance of certain
                letters, particularly the redesigned &quot;r,&quot; which some
                viewers find difficult to interpret immediately.
              </p>

              <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[18px] font-extrabold leading-[1.6]">
                  A wordmark has one fundamental job:
                </p>

                <p className="mt-4 text-[23px] font-black text-[#F8BC04]">
                  It should communicate the brand name clearly.
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                Instagram has enormous brand recognition, so most users can
                identify the word even when individual letters are stylized.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                A smaller business may not have that advantage.
              </p>

              <div className="mt-6 rounded-2xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[17px] font-extrabold leading-[1.6]">
                  If customers need to spend several seconds figuring out what
                  your logo says, the design may be sacrificing communication
                  for aesthetics.
                </p>
              </div>
            </section>

            {/* 06 */}
            <section className="mb-14">
              <SectionTitle number="06">
                What Typefaces Are Used in Instagram&apos;s{" "}
                <Highlight>Brand Refresh?</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                Typography is one of the most interesting aspects of
                Instagram&apos;s wider brand refresh.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                Alongside the wordmark update, Instagram has continued
                developing its proprietary typography system. The refreshed
                identity includes an updated Instagram Sans and introduces
                additional typefaces including Instagram Pen and Instagram
                Mono.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {[
                  {
                    title: "Instagram Sans",
                    text: "A flexible typeface supporting the broader digital brand system.",
                  },
                  {
                    title: "Instagram Pen",
                    text: "A handwritten voice reinforcing personal expression and creativity.",
                  },
                  {
                    title: "Instagram Mono",
                    text: "A more structured typographic voice for specific communication contexts.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E8E8E8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                  >
                    <h3 className="text-[18px] font-extrabold">
                      <Highlight>{item.title}</Highlight>
                    </h3>

                    <p className="mt-3 text-[14px] leading-[1.7] text-[#666]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[19px] font-extrabold leading-[1.5]">
                  A sophisticated brand can create a complete typographic
                  system where different typefaces serve different purposes.
                </p>

                <p className="mt-4 text-[18px] font-black text-[#F8BC04]">
                  That is the difference between choosing a font and building a
                  brand typography strategy.
                </p>
              </div>
            </section>

            {/* 07 */}
            <section className="mb-14">
              <SectionTitle number="07">
                Instagram Sans and Pen Typefaces:{" "}
                <Highlight>Why Typography Matters</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                Typography communicates personality.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Geometric Sans-Serif",
                    text: "Modern, technological and precise.",
                  },
                  {
                    title: "Handwritten Typeface",
                    text: "Personal, expressive and human.",
                  },
                  {
                    title: "Monospaced Typeface",
                    text: "Technical or editorial structure.",
                  },
                  {
                    title: "Typography System",
                    text: "Multiple voices working together inside one recognizable brand.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E8E8E8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]"
                  >
                    <h3 className="text-[18px] font-extrabold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-[1.7] text-[#666]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                Typography influences:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Brand recognition",
                  "Social media content",
                  "Website experience",
                  "Advertising",
                  "Video graphics",
                  "Packaging",
                  "Presentation design",
                  "User perception",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-[#FFF9E8] px-4 py-4 text-center text-[13px] font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8BC04]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* 08 */}
            <section className="mb-14">
              <SectionTitle number="08">
                The Adam Mosseri Instagram Update:{" "}
                <Highlight>What Does It Tell Us?</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                The Adam Mosseri Instagram update is important because it
                confirms that the change is intentional rather than simply an
                accidental interface experiment.
              </p>

              <div className="mt-6 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[18px] font-extrabold leading-[1.6]">
                  Instagram is not positioning the update as an entirely new
                  brand.
                </p>

                <p className="mt-4 text-[20px] font-black text-[#F8BC04]">
                  It is positioning it as an evolution.
                </p>
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                That distinction should be familiar to every business owner
                considering a rebrand.
              </p>
            </section>

            {/* 09 */}
            <section className="mb-14">
              <SectionTitle number="09">
                What Instagram&apos;s 2026 Wordmark Change Teaches Brands About{" "}
                <Highlight>Redesigns</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                Businesses often believe that a rebrand means getting a new
                logo, choosing new colors and changing the website.
              </p>

              <div className="my-6 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[22px] font-black text-[#F8BC04]">
                  It doesn&apos;t.
                </p>

                <p className="mt-3 text-[16px] font-semibold leading-[1.7]">
                  A successful rebrand begins with strategy.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    title: "Brand Equity Should Be Protected",
                    text: "Instagram already has enormous brand recognition. Its name, camera icon, gradient and typography are deeply associated with the platform. Throwing everything away would create unnecessary risk.",
                  },
                  {
                    title: "A Logo Needs to Work in Digital Environments",
                    text: "Modern branding is primarily experienced through screens. A logo may appear on Instagram profiles, websites, mobile screens, digital advertisements, Reels, YouTube videos, email signatures, presentations and search results.",
                  },
                  {
                    title: "Don't Confuse Complexity With Creativity",
                    text: "The Instagram reaction demonstrates that a visually interesting design can still generate questions about readability. Good branding balances creativity, recognition and functionality.",
                  },
                  {
                    title: "Build a Visual Identity, Not Just a Logo",
                    text: "Instagram's refresh extends beyond the wordmark. Its broader system includes typography, gradients, motion and other visual elements. Your logo is the signature. Your visual identity is the entire language.",
                  },
                  {
                    title: "Modernization Does Not Require Forgetting Your Past",
                    text: "Modern branding does not mean every company needs to become minimalist. The right approach depends on the brand. A company can modernize while retaining elements of its history.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E8E8E8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8BC04] text-[12px] font-black">
                        {index + 1}
                      </span>

                      <div>
                        <h3 className="text-[18px] font-extrabold">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-[14px] leading-[1.8] text-[#666]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 10 */}
            <section className="mb-14">
              <SectionTitle number="10">
                How Does Instagram&apos;s 2026 Rebrand{" "}
                <Highlight>Affect Marketers?</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                The impact is less about the logo itself and more about what it
                tells us about the direction of social media branding.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                Instagram is increasingly a platform where brands compete
                through visual storytelling.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Reels",
                  "Stories",
                  "Feed content",
                  "Paid advertising",
                  "Creator collaborations",
                  "Product launches",
                  "Campaigns",
                  "Branded content",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#E8E8E8] bg-white px-5 py-4 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-7">
                <p className="text-[18px] font-extrabold leading-[1.6]">
                  Your audience should ideally be able to recognize your
                  content <Highlight>before they read your username.</Highlight>
                </p>

                <p className="mt-3 text-[15px] font-semibold text-[#555]">
                  That is the real power of a visual identity.
                </p>
              </div>
            </section>

            {/* 11 */}
            <section className="mb-14">
              <SectionTitle number="11">
                How Social Media Agencies View Instagram&apos;s Latest{" "}
                <Highlight>Typography Update</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                From an agency perspective, the Instagram typography update
                reinforces a broader industry trend:
              </p>

              <div className="my-6 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[20px] font-black text-[#F8BC04]">
                  Brands are building flexible visual systems instead of
                  relying on a single logo.
                </p>
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                For a social media marketing team, that means content needs to
                be designed as part of the brand rather than as isolated posts.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "A campaign should have a recognizable visual language.",
                  "A Reel should feel connected to the brand.",
                  "An advertisement should feel like the same company.",
                  "A website should not look completely different from the Instagram profile.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#E8E8E8] bg-white p-5 text-[14px] font-semibold leading-[1.7] transition-all duration-300 hover:-translate-y-1"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* 12 */}
            <section className="mb-14">
              <SectionTitle number="12">
                Should Your Business{" "}
                <Highlight>Redesign Its Logo?</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                Instagram&apos;s redesign does not mean every company should
                redesign its logo.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                  <h3 className="text-[19px] font-extrabold">
                    Consider a Logo Redesign If...
                  </h3>

                  <div className="mt-5 space-y-3">
                    {[
                      "Your business has significantly changed.",
                      "Your target audience has changed.",
                      "Your current identity looks outdated.",
                      "Your logo performs poorly on digital platforms.",
                      "Your visual identity is inconsistent.",
                      "Your company has expanded into new markets.",
                      "Your current branding no longer represents your positioning.",
                      "Your competitors communicate your category more effectively.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl bg-white p-3 text-[13px] font-semibold"
                      >
                        <span className="text-[#F8BC04]">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
                  <h3 className="text-[19px] font-extrabold">
                    You Probably Don&apos;t Need One If...
                  </h3>

                  <div className="mt-5 space-y-3">
                    {[
                      "Your competitor changed its logo.",
                      "A famous company changed its logo.",
                      "You personally got bored of your branding.",
                      "A designer told you your logo is “old.”",
                      "Minimalism is currently popular.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl bg-[#FAFAFA] p-3 text-[13px] font-semibold"
                      >
                        <span className="text-[#171717]">×</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-center text-white">
                <p className="text-[23px] font-black text-[#F8BC04]">
                  Branding should follow strategy. Not trends.
                </p>
              </div>
            </section>

            {/* 13 */}
            <section className="mb-14">
              <SectionTitle number="13">
                What Should Businesses Do After Instagram&apos;s{" "}
                <Highlight>2026 Brand Refresh?</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                Businesses can use this moment as an opportunity to conduct
                their own brand audit.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Does our logo work at small sizes?",
                  "Are our social media designs recognizable?",
                  "Do our website and social profiles look like the same brand?",
                  "Are our fonts consistent?",
                  "Are our colors consistent?",
                  "Does our content reflect our target audience?",
                  "Does our visual identity still represent where our business is going?",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#E8E8E8] bg-white px-5 py-4 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[17px] font-extrabold leading-[1.6]">
                  You may not need a complete rebrand.
                </p>

                <p className="mt-2 text-[15px] leading-[1.8] text-[#555]">
                  You may simply need a stronger brand system.
                </p>
              </div>
            </section>

            {/* 14 */}
            <section className="mb-14">
              <SectionTitle number="14">
                What This Means for Businesses Looking for a{" "}
                <Highlight>Digital Marketing Agency</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                A modern brand cannot treat branding, social media and digital
                marketing as completely separate activities.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Your logo is part of your brand.",
                  "Your website is part of your brand.",
                  "Your social media content is part of your brand.",
                  "Your advertisements are part of your brand.",
                  "Your customer experience is part of your brand.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#E8E8E8] bg-white p-5 text-[14px] font-bold leading-[1.7] transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                That is why businesses increasingly need agencies that
                understand both{" "}
                <strong>creative branding and digital marketing.</strong>
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                For companies looking for a digital marketing agency, the goal
                should not simply be to find someone who can create attractive
                Instagram posts.
              </p>

              <h3 className="mt-8 text-[20px] font-extrabold">
                The Right Partner Should Understand
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Brand strategy",
                  "Visual identity",
                  "Social media marketing",
                  "Creative design",
                  "Content strategy",
                  "Digital advertising",
                  "Audience psychology",
                  "Conversion-focused communication",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="text-[#F8BC04]">✓</span>
                    <span className="text-[14px] font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 15 */}
            <section className="mb-14">
              <SectionTitle number="15">
                The <Highlight>BIGBEANS DIGITAL Perspective</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                At{" "}
                <Link
                  href="/"
                  className="font-bold text-[#B57F00] no-underline transition-colors hover:text-[#171717]"
                >
                  BIGBEANS DIGITAL
                </Link>
                , we see the Instagram 2026 logo update as a useful reminder
                that branding is not about changing things simply to make them
                look new.
              </p>

              <div className="my-6 rounded-2xl bg-[#171717] p-7 text-center text-white">
                <p className="text-[25px] font-black text-[#F8BC04]">
                  It is about evolution with purpose.
                </p>
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                Instagram has enough brand recognition to experiment with its
                typography without needing to explain who it is.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Most businesses don&apos;t have that luxury.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "For an emerging company, a logo needs to be immediately understandable.",
                  "For an established company, a redesign needs to protect existing recognition.",
                  "For a growing digital brand, the identity needs to work across websites, social media, advertising and content.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#E8E8E8] bg-white p-5 text-[14px] font-semibold leading-[1.75] transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-7">
                <p className="text-[15px] leading-[1.8] text-[#444]">
                  That is why we believe a successful brand refresh should
                  answer three questions:
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {[
                    "What should we keep?",
                    "What needs to change?",
                    "Why does it need to change?",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-white p-5 text-center text-[15px] font-extrabold transition-all duration-300 hover:-translate-y-1"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 16 */}
            <section className="mb-14">
              <SectionTitle number="16">
                What Instagram&apos;s New Logo Can Teach Us About{" "}
                <Highlight>Modern Branding</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                The Instagram wordmark debate may eventually disappear from
                social media.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                People will get used to the new lettering. The jokes will fade.
                The new wordmark will simply become &quot;Instagram.&quot;
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Recognition is earned over time.",
                  "Good design needs to communicate.",
                  "A brand refresh should have a reason.",
                  "Typography is part of brand strategy.",
                  "A logo is only one part of a complete visual identity.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#E8E8E8] bg-white p-6 text-[15px] font-extrabold leading-[1.6] transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                  >
                    <span className="text-[#F8BC04]">→</span> {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-[24px] bg-[#171717] p-8 text-center text-white">
                <p className="text-[18px] font-extrabold leading-[1.6]">
                  Don&apos;t redesign because everyone else is redesigning.
                </p>

                <p className="mt-4 text-[24px] font-black leading-[1.4] text-[#F8BC04]">
                  Evolve because your audience, your business and your market
                  are evolving.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-14">
              <SectionTitle number="17">
                <Highlight>Frequently Asked Questions</Highlight>
              </SectionTitle>

              <div className="space-y-4">
                {[
                  {
                    question: "Is Instagram changing its logo in 2026?",
                    answer:
                      "Instagram has refreshed its wordmark in 2026. The update focuses on the text-based logo rather than replacing the familiar Instagram camera icon. The new wordmark is part of a broader visual identity refresh.",
                  },
                  {
                    question: "What is the new Instagram logo called?",
                    answer:
                      "The update is more accurately described as a new Instagram wordmark or new Instagram text logo. The camera icon remains a separate and recognizable part of Instagram's visual identity.",
                  },
                  {
                    question: "Why did Instagram change its logo?",
                    answer:
                      "The wordmark had remained unchanged for about ten years and Instagram felt it was time for a cleaner, more modern refresh while maintaining connections to the existing design language.",
                  },
                  {
                    question:
                      "Why do people call the new Instagram logo “Instagzam”?",
                    answer:
                      "Some users believe the stylized design of certain letters makes the wordmark difficult to read, particularly the “r,” resulting in jokes that the logo reads “Instagzam.”",
                  },
                  {
                    question:
                      "What typefaces are included in Instagram's brand refresh?",
                    answer:
                      "Instagram has updated Instagram Sans and introduced additional typefaces including Instagram Pen and Instagram Mono as part of the broader identity system.",
                  },
                  {
                    question: "Is the Instagram camera icon changing?",
                    answer:
                      "The 2026 update is focused on the wordmark. The familiar multicolored camera icon remains an important part of Instagram's visual identity.",
                  },
                  {
                    question:
                      "What can businesses learn from Instagram's rebrand?",
                    answer:
                      "The biggest lessons are to protect brand equity, design for digital environments, maintain readability, develop a complete visual identity and make strategic decisions rather than redesigning simply because a trend has changed.",
                  },
                  {
                    question: "Does every business need a logo redesign?",
                    answer:
                      "No. A logo should be redesigned when the existing identity no longer supports the company's strategy, audience or digital requirements. Sometimes a brand refresh or visual identity update is more appropriate than a complete rebrand.",
                  },
                ].map((item) => (
                  <div
                    key={item.question}
                    className="group rounded-2xl border border-[#E8E8E8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                  >
                    <h3 className="text-[17px] font-extrabold">
                      {item.question}
                    </h3>

                    <p className="mt-3 text-[14px] leading-[1.8] text-[#666]">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FINAL THOUGHTS */}
            <section className="mb-14">
              <div className="rounded-[26px] border-2 border-[#F8BC04] bg-[#FFF9E8] p-8 shadow-[0_15px_40px_rgba(248,188,4,0.08)] transition-all duration-500 hover:-translate-y-1 md:p-10">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#C48D00]">
                  Final Thoughts
                </span>

                <h2 className="mt-3 text-[28px] font-black leading-[1.16] md:text-[35px]">
                  The New Instagram Logo Is Really a Lesson in{" "}
                  <Highlight>Modern Branding</Highlight>
                </h2>

                <p className="mt-5 text-[15px] leading-[1.8] text-[#444]">
                  The new Instagram logo 2026 update may have started as a
                  typography change, but it has quickly become a conversation
                  about branding itself.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#444]">
                  The debate around the Instagram wordmark redesign — including
                  the &quot;Instagzam&quot; reaction — demonstrates just how
                  difficult it is to change an identity that millions of people
                  already recognize.
                </p>

                <div className="my-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "A case study in brand equity.",
                    "A case study in typography.",
                    "A case study in social media branding.",
                    "A case study in how a globally recognized identity can evolve.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-white p-5 text-[14px] font-bold transition-all duration-300 hover:-translate-y-1"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="text-[15px] leading-[1.8] text-[#444]">
                  For businesses, that is the real takeaway.
                </p>

                <p className="mt-4 text-[21px] font-black leading-[1.5]">
                  Don&apos;t redesign because everyone else is redesigning.
                </p>

                <p className="mt-3 text-[23px] font-black leading-[1.45] text-[#C48D00]">
                  Evolve because your audience, your business and your market
                  are evolving.
                </p>
              </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="overflow-hidden rounded-[26px] bg-[#111111] p-7 text-white md:p-9">
              <div className="grid items-center gap-7 md:grid-cols-[1fr_auto]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[2px] text-[#F8BC04]">
                    BIGBEANS DIGITAL
                  </span>

                  <h2 className="mt-3 text-[25px] font-black leading-[1.2] md:text-[32px]">
                    Build a Brand That Works{" "}
                    <Highlight>Beyond the Logo</Highlight>
                  </h2>

                  <p className="mt-3 max-w-[680px] text-[14px] leading-[1.7] text-[#D4D4D4]">
                    BIGBEANS DIGITAL helps businesses build stronger digital
                    identities through branding, creative design, social media
                    marketing and digital growth.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-semibold text-[#E7E7E7]">
                    <span>✓ Brand Strategy</span>
                    <span>✓ Visual Identity</span>
                    <span>✓ Digital Growth</span>
                  </div>
                </div>

                <Link
                  href="/connect"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#F8BC04] px-6 py-4 text-sm font-extrabold text-black no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFC72C] hover:shadow-[0_12px_30px_rgba(248,188,4,0.25)]"
                >
                  Talk to Our Experts

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </section>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-7 lg:sticky lg:top-24 lg:self-start">
            {/* SERVICES */}
            <div className="rounded-[24px] bg-[#111111] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-1 md:p-6">
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
                    className="group block rounded-2xl bg-white p-5 no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFF9E8] hover:shadow-[0_10px_28px_rgba(248,188,4,0.12)]"
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

                      <span className="mt-1 shrink-0 text-[#F0AA00] transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* FEATURED POSTS */}
            <div className="rounded-[24px] border border-[#E8E8E8] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.035)] transition-all duration-500 hover:-translate-y-1 md:p-6">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-7 w-1 rounded-full bg-[#F8BC04]" />

                <h2 className="text-[20px] font-extrabold">
                  <Highlight>Featured Posts</Highlight>
                </h2>
              </div>

              <div className="space-y-5">
                {featuredPosts.map((post) => (
                  <Link
                    href={post.href}
                    key={post.href}
                    className="group flex gap-4 no-underline"
                  >
                    <div className="relative h-[76px] w-[105px] shrink-0 overflow-hidden rounded-xl bg-[#F4F4F4]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="105px"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="line-clamp-3 text-[13px] font-extrabold leading-[1.45] transition-colors duration-200 group-hover:text-[#B57F00]">
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
                className="mt-7 inline-flex items-center gap-2 border-b-0 pb-1 text-[13px] font-bold text-[#171717] no-underline transition-colors hover:text-[#B57F00]"
              >
                View All Blogs

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}