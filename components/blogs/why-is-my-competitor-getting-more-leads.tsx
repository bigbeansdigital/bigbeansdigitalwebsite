import Image from "next/image";
import Link from "next/link";

const thumbnail =
  "/assets/blog/singleblogs/why-is-my-competitor-getting-more-leads.png";

const services = [
  {
    title: "Social Media Marketing",
    description:
      "Build brand awareness and generate enquiries through strategic social media marketing.",
    href: "/services/social-media-marketing",
  },
  {
    title: "Branding",
    description:
      "Create a strong, memorable brand identity that helps customers remember you.",
    href: "/services/branding",
  },
  {
    title: "Google Ads & Meta Ads",
    description:
      "Reach high-intent customers with targeted paid advertising campaigns.",
    href: "/services/google-ads-meta-ads",
  },
  {
    title: "Website Development",
    description:
      "Build fast, conversion-focused websites that turn visitors into enquiries.",
    href: "/services/website-development",
  },
];

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-[#F8BC04]">{children}</span>;
}

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
      className="font-bold text-[#B57F00] no-underline transition-colors duration-300 hover:text-[#171717]"
    >
      {children}
    </Link>
  );
}

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

export default function WhyIsMyCompetitorGettingMoreLeads() {
  const articleTitle =
    "Why Is My Competitor Getting More Leads? | Digital Marketing India";

  const aiPrompt = encodeURIComponent(
    `Summarize this BigBeans Digital blog: "${articleTitle}". Focus on local SEO, Google Business Profile, social media marketing, reviews, websites, paid advertising, WhatsApp marketing, Tier 2 and Tier 3 city marketing, and how small businesses can generate more local leads.`
  );

  return (
    <main className="bg-[#FAFAFA] text-[#171717]">
      {/* HERO */}
      <section className="mx-auto max-w-[1380px] px-5 pb-14 pt-8 md:px-8 md:pt-12 lg:px-10 lg:pb-16">
        <div className="grid items-center gap-9 lg:grid-cols-[0.93fr_1.07fr] lg:gap-12">
          <div className="animate-[fadeIn_0.7s_ease-out]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E9E9E9] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#666] shadow-[0_6px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F8BC04]" />
              Digital Marketing & Lead Generation
            </div>

            <h1 className="max-w-[620px] text-[40px] font-black leading-[1.04] tracking-[-1.8px] md:text-[49px] lg:text-[55px]">
              Why Is My Competitor Getting More{" "}
              <Highlight>Leads?</Highlight>
            </h1>

            <p className="mt-6 max-w-[590px] text-[15px] leading-[1.75] text-[#4A4A4A] md:text-[16px]">
              Your competitor opened later but gets more enquiries. Discover
              how SEO, Google Business Profile, social media, reviews and local
              digital marketing can help Indian businesses grow.
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
                "Lead Generation",
                "Local SEO",
                "Digital Marketing",
                "Tier 2 & Tier 3 Cities",
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
                  You started your business first.
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  You opened your shop, launched your service, created your
                  social media pages and started waiting for customers.
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  Six months later, another business entered your market.
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  They had less experience.
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  They were newer.
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  They may even be selling almost the same product or service.
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  Yet somehow, they are getting more enquiries.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "More WhatsApp messages.",
                    "More phone calls.",
                    "More website visitors.",
                    "More people asking for prices.",
                    "And sometimes, more customers.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-[#FFF9E8] px-5 py-4 text-[14px] font-bold text-[#333] transition-all duration-300 hover:-translate-y-1"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-[15px] font-extrabold leading-[1.85] md:text-[16px]">
                  So what went wrong?
                </p>

                <div className="my-6 rounded-2xl bg-[#171717] p-7 text-white">
                  <p className="text-[18px] font-extrabold leading-[1.6]">
                    The uncomfortable answer is that{" "}
                    <Highlight>
                      being in business longer does not automatically make you
                      more visible online.
                    </Highlight>
                  </p>
                </div>

                <p className="text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  In today&apos;s India, especially in Tier 2 and Tier 3 cities,
                  your competitor does not necessarily need to be better than
                  you.
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  They may simply be{" "}
                  <strong>
                    easier to find, easier to trust and easier to contact
                    online.
                  </strong>
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  That difference can have a massive impact on lead generation.
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  Recent market data shows how quickly India&apos;s smaller
                  cities are becoming important digital markets. Tier 2 and
                  Tier 3 cities are expected to contribute nearly 66% of new
                  D2C orders in FY26, while Google research has highlighted the
                  growing role of online Search, video and digital touchpoints
                  in purchase journeys beyond India&apos;s major metros.
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  So if your business is based in a city such as{" "}
                  <strong>
                    Indore, Jaipur, Lucknow, Patna, Ranchi, Guwahati,
                    Bhubaneswar, Nagpur, Dehradun, Raipur, Jodhpur, Surat,
                    Coimbatore, Mysuru or another growing Indian city
                  </strong>
                  , this matters to you.
                </p>

                <div className="mt-6 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                  <p className="text-[20px] font-black leading-[1.5]">
                    Your competitor may not have started earlier.
                  </p>

                  <p className="mt-2 text-[22px] font-black text-[#C48D00]">
                    They may simply have started marketing better.
                  </p>
                </div>
              </div>
            </section>

            {/* 01 */}
            <section className="mb-14">
              <SectionTitle number="01">
                The Real Reason Your Newer Competitor May Be{" "}
                <Highlight>Getting More Leads</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                There is a common misconception among small business owners:
              </p>

              <div className="my-6 rounded-2xl bg-[#171717] p-6 text-[18px] font-extrabold leading-[1.6] text-white">
                “I have been in the market longer, so customers should know
                me.”
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                Unfortunately, customers do not always reward businesses based
                on age.
              </p>

              <p className="mt-4 text-[15px] font-extrabold leading-[1.85]">
                They reward businesses they can <strong>discover and trust</strong>.
              </p>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                Imagine someone in your city needs a service.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "They search on Google.",
                  "They check Instagram.",
                  "They look at Google Maps.",
                  "They visit a website.",
                  "They read reviews.",
                  "They look at photos.",
                  "They check prices or services.",
                  "They send a WhatsApp message.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#E8E8E8] bg-white px-5 py-4 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                At every step, your competitor has an opportunity to appear.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                If your business isn&apos;t visible at those moments, your
                years of experience may never enter the customer&apos;s
                decision.
              </p>

              <div className="mt-6 rounded-2xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[17px] font-extrabold leading-[1.6]">
                  This is why{" "}
                  <InternalLink href="/services/social-media-marketing">
                    digital marketing for small businesses
                  </InternalLink>{" "}
                  in India has become increasingly important.
                </p>
              </div>
            </section>

            {/* 02 */}
            <section className="mb-14">
              <SectionTitle number="02">
                Your Competitor Is Easier to{" "}
                <Highlight>Find on Google</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                Let&apos;s say you own a:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Salon",
                  "Coaching centre",
                  "Interior design business",
                  "Jewellery store",
                  "Restaurant",
                  "Dental clinic",
                  "Real estate agency",
                  "Travel company",
                  "Boutique",
                  "Fitness centre",
                  "Local service business",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white px-5 py-4 text-[14px] font-semibold shadow-[0_5px_20px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                A potential customer searches:
              </p>

              <div className="my-5 space-y-3">
                {[
                  "“best salon in [city]”",
                  "“interior designer near me”",
                  "“best coaching centre in [city]”",
                  "“digital marketing agency near me”",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#E8E8E8] bg-[#FFF9E8] px-5 py-4 text-[14px] font-bold text-[#333]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                If your competitor appears before you, they have already won
                the first battle.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                The customer may never know that your business has been
                operating for six months, two years or ten years longer.
              </p>

              <div className="mt-6 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[20px] font-black text-[#F8BC04]">
                  This is where local SEO becomes critical.
                </p>
              </div>

              <h3 className="mt-8 text-[20px] font-extrabold">
                Your Google Visibility Matters
              </h3>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Your Google Business Profile, website, reviews, location
                information, photos, services and overall online presence can
                influence whether potential customers discover your business.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                And for businesses in Tier 2 and Tier 3 cities, local search
                can be particularly important because many purchase decisions
                still have a strong geographical element.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Google has previously reported that online research plays a
                significant role even when purchases happen offline, including
                among consumers in India&apos;s rural heartland.
              </p>

              <div className="mt-6 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[20px] font-black">
                  Your customer may discover you online and walk into your
                  physical store later.
                </p>

                <p className="mt-3 text-[23px] font-black text-[#C48D00]">
                  Digital visibility can create offline business.
                </p>
              </div>
            </section>

            {/* 03 */}
            <section className="mb-14">
              <SectionTitle number="03">
                Your Competitor May Have a Better{" "}
                <Highlight>Google Business Profile</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                This is one of the most overlooked areas of local lead
                generation.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                Your competitor may have:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "More Google reviews",
                  "Better photographs",
                  "Updated business information",
                  "Correct opening hours",
                  "Detailed services",
                  "Regular Google updates",
                  "Location-specific content",
                  "Better review responses",
                  "More complete business information",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="text-[#F8BC04]">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                Meanwhile, your Google Business Profile may have been created
                two years ago and forgotten.
              </p>

              <div className="mt-6 rounded-2xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[18px] font-extrabold leading-[1.6]">
                  If so, you have a visibility problem.
                </p>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  And it isn&apos;t necessarily because your business is
                  worse. Your digital storefront simply isn&apos;t being
                  maintained.
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                Think of Google Business Profile as the{" "}
                <strong>front door of your business on Google.</strong>
              </p>

              <p className="mt-4 text-[15px] font-extrabold leading-[1.85]">
                Would you leave your physical shop dirty, dark and outdated?
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Probably not.
              </p>

              <p className="mt-4 text-[15px] font-extrabold leading-[1.85]">
                So why would you leave your digital storefront that way?
              </p>
            </section>

            {/* 04 */}
            <section className="mb-14">
              <SectionTitle number="04">
                Your Competitor Is Probably More Active on{" "}
                <Highlight>Social Media</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                You might have 2,000 followers.
              </p>

              <p className="mt-2 text-[15px] leading-[1.85] text-[#555]">
                Your competitor might have 700.
              </p>

              <p className="mt-2 text-[15px] leading-[1.85] text-[#555]">
                Yet they are getting more enquiries.
              </p>

              <div className="my-6 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[23px] font-black text-[#F8BC04]">
                  Why?
                </p>

                <p className="mt-3 text-[19px] font-extrabold leading-[1.5]">
                  Because followers are not the same as leads.
                </p>
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                A business can have a small audience and still generate
                customers if its content is designed around the right audience
                and the right action.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                Your competitor may be posting:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Customer testimonials",
                  "Before-and-after content",
                  "Product demonstrations",
                  "Short videos",
                  "FAQs",
                  "Offers",
                  "Educational content",
                  "Local content",
                  "Behind-the-scenes videos",
                  "Customer stories",
                  "Team introductions",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#E8E8E8] bg-white px-5 py-4 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                Meanwhile, you may be posting:
              </p>

              <div className="my-5 space-y-3">
                {[
                  "“Good Morning 😊”",
                  "“Happy Monday!”",
                  "“Visit our store today.”",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-[#F3F3F3] px-5 py-4 text-[14px] font-semibold text-[#555]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                The problem isn&apos;t that these posts are bad.
              </p>

              <p className="mt-4 text-[15px] font-extrabold leading-[1.85]">
                The problem is that they may not give the customer a reason to
                act.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                A stronger{" "}
                <InternalLink href="/services/social-media-marketing">
                  social media marketing
                </InternalLink>{" "}
                strategy connects content with the actual customer journey.
              </p>
            </section>

            {/* 05 */}
            <section className="mb-14">
              <SectionTitle number="05">
                They Are Creating Content for Their City —{" "}
                <Highlight>Not for Everyone</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                This is especially important for businesses in India&apos;s Tier
                2 and Tier 3 cities.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                A local business does not necessarily need millions of views.
              </p>

              <div className="my-6 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[20px] font-black text-[#F8BC04]">
                  It needs the right 500 people in the right city to see its
                  content.
                </p>
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                Imagine a restaurant in Guwahati.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Getting 100,000 views from people in Delhi may look impressive.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                But getting 5,000 views from people around Guwahati who are
                actually interested in dining could be far more valuable.
              </p>

              <div className="mt-7 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[19px] font-extrabold leading-[1.6]">
                  This is why <strong>hyperlocal digital marketing</strong>{" "}
                  matters.
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                Your content can include:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "City names",
                  "Local landmarks",
                  "Local events",
                  "Local languages",
                  "Regional culture",
                  "Local customer stories",
                  "Neighbourhood references",
                  "Location-specific offers",
                  "City-specific keywords",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white px-5 py-4 text-[14px] font-semibold shadow-[0_5px_20px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-center text-white">
                <p className="text-[16px] font-semibold">The goal is not:</p>

                <p className="mt-2 text-[23px] font-black text-[#F8BC04]">
                  “Get more views.”
                </p>

                <p className="mt-6 text-[16px] font-semibold">
                  The goal is:
                </p>

                <p className="mt-2 text-[23px] font-black text-[#F8BC04]">
                  “Get discovered by more potential customers in our market.”
                </p>
              </div>
            </section>

            {/* 06 */}
            <section className="mb-14">
              <SectionTitle number="06">
                Your Competitor May Understand{" "}
                <Highlight>WhatsApp Marketing Better</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                For many Indian businesses, especially local businesses, the
                customer journey does not end on a website.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                It moves to WhatsApp.
              </p>

              <div className="my-6 rounded-2xl bg-[#F3F3F3] p-6">
                <p className="text-[14px] font-semibold text-[#555]">
                  A customer sees an Instagram Reel.
                </p>

                <p className="mt-4 text-[14px] font-semibold text-[#555]">
                  They click the WhatsApp button.
                </p>

                <p className="mt-4 text-[14px] font-semibold text-[#555]">
                  They ask:
                </p>

                <p className="mt-2 text-[17px] font-extrabold">“Price?”</p>

                <p className="mt-4 text-[17px] font-extrabold">
                  “Do you deliver?”
                </p>

                <p className="mt-4 text-[17px] font-extrabold">
                  “Can I book tomorrow?”
                </p>
              </div>

              <div className="rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[20px] font-black">That is a lead.</p>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                Your competitor may have made this process extremely easy.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                You may still be asking customers to:
              </p>

              <div className="my-5 rounded-xl bg-white p-5 text-[15px] font-extrabold">
                “Call us during business hours.”
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                The easier you make communication, the less friction there is
                between interest and enquiry.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "What you sell.",
                  "Who it is for.",
                  "Where you operate.",
                  "Why customers should trust you.",
                  "How customers can contact you.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#E8E8E8] bg-white px-5 py-4 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* 07 */}
            <section className="mb-14">
              <SectionTitle number="07">
                Your Competitor Has{" "}
                <Highlight>Better Reviews</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                Trust is one of the biggest reasons a customer chooses one
                business over another.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                Consider two businesses.
              </p>

              <div className="my-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
                  <h3 className="text-[18px] font-extrabold">Business A</h3>

                  <p className="mt-4 text-[22px] font-black text-[#777]">
                    ★★★★☆
                  </p>

                  <p className="mt-2 text-[14px] font-semibold">
                    37 reviews
                  </p>

                  <p className="mt-2 text-[13px] text-[#777]">
                    Last review: 8 months ago
                  </p>

                  <p className="mt-2 text-[13px] text-[#777]">
                    Few photographs
                  </p>

                  <p className="mt-2 text-[13px] text-[#777]">
                    No recent updates
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                  <h3 className="text-[18px] font-extrabold">Business B</h3>

                  <p className="mt-4 text-[22px] font-black text-[#F0AA00]">
                    ★★★★★
                  </p>

                  <p className="mt-2 text-[14px] font-semibold">
                    312 reviews
                  </p>

                  <p className="mt-2 text-[13px] text-[#666]">
                    Recent customer photographs
                  </p>

                  <p className="mt-2 text-[13px] text-[#666]">
                    Regular updates
                  </p>

                  <p className="mt-2 text-[13px] text-[#666]">
                    Detailed responses
                  </p>

                  <p className="mt-2 text-[13px] text-[#666]">
                    Testimonials
                  </p>
                </div>
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                Which one feels safer?
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Even if Business A has been operating for five years longer,
                Business B may appear more active and trustworthy.
              </p>

              <div className="mt-6 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[18px] font-extrabold leading-[1.6]">
                  This is why{" "}
                  <strong>online reputation management</strong> matters.
                </p>

                <p className="mt-4 text-[20px] font-black text-[#F8BC04]">
                  Reviews aren&apos;t just numbers.
                </p>

                <p className="mt-3 text-[18px] font-extrabold">
                  They are digital proof.
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                And for businesses trying to grow in competitive local markets,
                proof can be the difference between:
              </p>

              <div className="my-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-[#F3F3F3] p-5 text-center text-[15px] font-extrabold">
                  “I&apos;ll think about it.”
                </div>

                <div className="rounded-xl bg-[#FFF9E8] p-5 text-center text-[15px] font-extrabold">
                  “How can I book?”
                </div>
              </div>
            </section>

            {/* 08 */}
            <section className="mb-14">
              <SectionTitle number="08">
                Your Website May Be{" "}
                <Highlight>Losing Customers</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                You may be thinking:
              </p>

              <div className="my-5 rounded-xl bg-[#171717] p-6 text-[17px] font-extrabold text-white">
                “We already have a website.”
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                That&apos;s good.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                But having a website and having a{" "}
                <strong>lead-generating website</strong> are two different
                things.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                Your competitor&apos;s website may answer the customer&apos;s
                questions faster.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "What do they offer?",
                  "How much does it cost?",
                  "Where are they located?",
                  "Who are they?",
                  "Why should I trust them?",
                  "What do customers say?",
                  "How do I contact them?",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#E8E8E8] bg-white px-5 py-4 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                If your website makes the customer search for these answers,
                they may leave.
              </p>

              <div className="mt-6 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[18px] font-extrabold leading-[1.6]">
                  A good business website should not simply say:
                </p>

                <p className="mt-3 text-[17px] font-bold">
                  “Welcome to our website.”
                </p>

                <p className="mt-5 text-[18px] font-extrabold leading-[1.6]">
                  It should move the customer toward an action.
                </p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Call.",
                  "WhatsApp.",
                  "Book.",
                  "Request a quote.",
                  "Visit the store.",
                  "Submit an enquiry.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white px-5 py-4 text-center text-[14px] font-extrabold shadow-[0_5px_20px_rgba(0,0,0,0.035)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                If your business needs a stronger digital storefront,{" "}
                <InternalLink href="/services/website-development">
                  website development
                </InternalLink>{" "}
                can help turn your website into a more effective customer
                acquisition tool.
              </p>
            </section>

            {/* 09 */}
            <section className="mb-14">
              <SectionTitle number="09">
                Your Competitor May Be Using Paid Ads{" "}
                <Highlight>More Strategically</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                You may have tried Facebook or Instagram advertising before.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Maybe you spent ₹5,000.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Nothing happened.
              </p>

              <div className="my-5 rounded-xl bg-[#F3F3F3] p-6 text-[17px] font-extrabold">
                “Meta Ads don&apos;t work.”
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                But that&apos;s not necessarily true.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                The problem may have been the strategy.
              </p>

              <div className="mt-6 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[19px] font-black text-[#F8BC04]">
                  A successful local advertising campaign requires more than
                  pressing the “Boost Post” button.
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                Your competitor may be targeting:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Specific cities",
                  "Specific age groups",
                  "Relevant interests",
                  "Local audiences",
                  "Website visitors",
                  "Previous customers",
                  "People who interacted with content",
                  "High-intent audiences",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#E8E8E8] bg-white px-5 py-4 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                They may also be testing different:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Creatives",
                  "Headlines",
                  "Offers",
                  "Landing pages",
                  "Calls to action",
                  "Audience segments",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-[#FFF9E8] px-5 py-4 text-center text-[14px] font-bold"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                Paid advertising works best when it is treated as a system
                rather than a one-time experiment. That includes both{" "}
                <InternalLink href="/services/google-ads-meta-ads">
                  Google Ads and Meta Ads
                </InternalLink>
                .
              </p>
            </section>

            {/* 10 */}
            <section className="mb-14">
              <SectionTitle number="10">
                They May Be Speaking the{" "}
                <Highlight>Language of Their Customers</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                This is one of the biggest opportunities in India&apos;s
                smaller cities.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                India&apos;s digital audience is not one uniform audience.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                A customer in Bengaluru may behave differently from a customer
                in Bhubaneswar.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                A customer in Jaipur may respond differently from someone in
                Guwahati.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                A customer in Patna may prefer different communication styles
                from someone in Pune.
              </p>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                That doesn&apos;t mean every campaign needs to be completely
                translated into a regional language.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                But it does mean businesses should understand:
              </p>

              <div className="my-5 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[20px] font-black text-[#F8BC04]">
                  How does my customer actually speak?
                </p>
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                Sometimes the difference is simply using a familiar phrase.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Sometimes it is using Hindi, Bengali, Assamese, Marathi, Tamil,
                Telugu, Odia or another regional language.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Sometimes it is using local cultural references.
              </p>

              <div className="mt-6 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[20px] font-black leading-[1.5]">
                  The objective is simple:
                </p>

                <p className="mt-3 text-[22px] font-black text-[#C48D00]">
                  Make the customer feel that the business understands them.
                </p>
              </div>
            </section>

            {/* 11 */}
            <section className="mb-14">
              <SectionTitle number="11">
                Your Competitor Is Building a Brand — While You Are{" "}
                <Highlight>Selling a Product</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                This is a major difference.
              </p>

              <div className="my-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
                  <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#888]">
                    Selling
                  </span>

                  <p className="mt-4 text-[18px] font-extrabold">
                    “We sell premium furniture.”
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                  <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#B57F00]">
                    Branding
                  </span>

                  <p className="mt-4 text-[18px] font-extrabold">
                    “We help Indian families create beautiful homes without
                    overspending.”
                  </p>
                </div>
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                The second statement is more emotional.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                It gives the customer a reason to connect.
              </p>

              <div className="mt-6 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[20px] font-black text-[#F8BC04]">
                  This is the difference between selling and branding.
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                A strong brand creates familiarity before the customer is ready
                to buy.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                When the customer finally needs the product or service, your
                business is already in their mind.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                If your business needs to build stronger brand recognition,
                explore our{" "}
                <InternalLink href="/services/branding">
                  branding services
                </InternalLink>
                .
              </p>
            </section>

            {/* 12 */}
            <section className="mb-14">
              <SectionTitle number="12">
                They Started Digital Marketing Earlier — Even Though They{" "}
                <Highlight>Started the Business Later</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                This is perhaps the biggest reason of all.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                Your competitor may have opened six months after you.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                But they may have started:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "SEO immediately",
                  "Social media immediately",
                  "Google Business Profile optimisation immediately",
                  "Content marketing immediately",
                  "Paid advertising immediately",
                  "Review collection immediately",
                  "Video marketing immediately",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white px-5 py-4 text-[14px] font-semibold shadow-[0_5px_20px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                So while you were building your business offline, they were
                simultaneously building their{" "}
                <strong>digital presence.</strong>
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Six months later, they have accumulated:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Content",
                  "Reviews",
                  "Website pages",
                  "Search visibility",
                  "Social proof",
                  "Audience data",
                  "Customer testimonials",
                  "Ad performance data",
                  "Brand recognition",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#E8E8E8] bg-[#FFF9E8] px-5 py-4 text-[14px] font-bold"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[22px] font-black text-[#F8BC04]">
                  Digital growth compounds.
                </p>

                <p className="mt-3 text-[16px] leading-[1.7]">
                  The earlier you build the foundation, the more data and
                  authority you can accumulate over time.
                </p>
              </div>
            </section>

            {/* 13 */}
            <section className="mb-14">
              <SectionTitle number="13">
                The Real Difference Is Not Age. It&apos;s{" "}
                <Highlight>Visibility.</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                This is the part every business owner should remember.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                Your competitor being newer does not mean they are better.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                They may simply be:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "More visible.",
                  "More active.",
                  "More searchable.",
                  "More trusted.",
                  "More relevant.",
                  "Easier to contact.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-[#171717] px-5 py-5 text-center text-[16px] font-black text-[#F8BC04] transition-all duration-300 hover:-translate-y-1"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                That is why the question should not be:
              </p>

              <div className="my-5 rounded-xl bg-[#F3F3F3] p-6 text-[17px] font-extrabold">
                “Why are they getting more customers than me?”
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                Instead ask:
              </p>

              <div className="mt-4 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-7">
                <p className="text-[21px] font-black leading-[1.5]">
                  “Where are they being discovered that we aren&apos;t?”
                </p>
              </div>

              <p className="mt-5 text-[15px] font-semibold leading-[1.8] text-[#555]">
                That question can completely change your marketing strategy.
              </p>
            </section>

            {/* AUDIT */}
            <section className="mb-14">
              <SectionTitle number="14">
                A Simple Digital Marketing{" "}
                <Highlight>Audit for Your Business</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                If your competitor is generating more leads, review these ten
                areas.
              </p>

              <div className="mt-7 space-y-5">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
                  <h3 className="text-[19px] font-extrabold">
                    <Highlight>Google</Highlight>
                  </h3>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {[
                      "Is your Google Business Profile fully optimised?",
                      "Are you appearing for relevant local searches?",
                      "Do you have recent reviews?",
                      "Are your photographs updated?",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg bg-[#FAFAFA] p-3 text-[13px] font-semibold"
                      >
                        ✓ {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
                  <h3 className="text-[19px] font-extrabold">
                    <Highlight>Website</Highlight>
                  </h3>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {[
                      "Is your website mobile-friendly?",
                      "Is your location clearly mentioned?",
                      "Are your services easy to understand?",
                      "Is there a strong CTA?",
                      "Can customers contact you quickly?",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg bg-[#FAFAFA] p-3 text-[13px] font-semibold"
                      >
                        ✓ {item}
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-[13px] leading-[1.7] text-[#666]">
                    Need a stronger website? Explore{" "}
                    <InternalLink href="/services/website-development">
                      BIGBEANS DIGITAL website development
                    </InternalLink>
                    .
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
                  <h3 className="text-[19px] font-extrabold">
                    <Highlight>Social Media</Highlight>
                  </h3>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {[
                      "Are you posting consistently?",
                      "Is your content designed for your target audience?",
                      "Are you creating Reels or short-form video?",
                      "Are you showing real customers?",
                      "Are you demonstrating your products or services?",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg bg-[#FAFAFA] p-3 text-[13px] font-semibold"
                      >
                        ✓ {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
                  <h3 className="text-[19px] font-extrabold">
                    <Highlight>Advertising</Highlight>
                  </h3>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {[
                      "Are you running targeted campaigns?",
                      "Are you tracking leads?",
                      "Are you testing creatives?",
                      "Are you retargeting people who already interacted with your business?",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg bg-[#FAFAFA] p-3 text-[13px] font-semibold"
                      >
                        ✓ {item}
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-[13px] leading-[1.7] text-[#666]">
                    For targeted paid campaigns, explore{" "}
                    <InternalLink href="/services/google-ads-meta-ads">
                      Google Ads and Meta Ads
                    </InternalLink>
                    .
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
                  <h3 className="text-[19px] font-extrabold">
                    <Highlight>Reputation</Highlight>
                  </h3>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {[
                      "Are you actively collecting reviews?",
                      "Are you responding to reviews?",
                      "Are you showcasing testimonials?",
                      "Are you building social proof?",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg bg-[#FAFAFA] p-3 text-[13px] font-semibold"
                      >
                        ✓ {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[18px] font-extrabold leading-[1.6]">
                  If you find weaknesses in several of these areas, your
                  problem probably isn&apos;t your business.
                </p>

                <p className="mt-4 text-[23px] font-black text-[#F8BC04]">
                  It&apos;s your digital marketing system.
                </p>
              </div>
            </section>

            {/* TIER 2 / TIER 3 */}
            <section className="mb-14">
              <SectionTitle number="15">
                Why Tier 2 and Tier 3 Indian Cities Are a{" "}
                <Highlight>Huge Opportunity</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                For years, digital marketing conversations in India focused
                heavily on Mumbai, Delhi, Bengaluru, Hyderabad, Chennai and
                other major metros.
              </p>

              <p className="mt-5 text-[15px] font-extrabold leading-[1.85]">
                That is changing.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                India&apos;s smaller cities are becoming increasingly important
                markets for digital businesses and consumer brands.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Recent reporting indicates that Tier 2 and Tier 3 cities are
                expected to account for a significant share of new D2C orders
                in FY26.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Google has also highlighted the growing influence of non-metro
                consumers and the importance of hyperlocal marketing. In one
                recent example, Zomato&apos;s localized campaign targeting Tier
                2 and Tier 3 cities reportedly tripled new users in those
                markets.
              </p>

              <div className="mt-7 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-7">
                <p className="text-[20px] font-black leading-[1.5]">
                  This creates an enormous opportunity for local businesses.
                </p>

                <p className="mt-4 text-[21px] font-black text-[#C48D00]">
                  You don&apos;t have to compete with every business in India.
                </p>

                <p className="mt-2 text-[21px] font-black">
                  You need to dominate your market.
                </p>
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                Imagine becoming the business people in your city see
                repeatedly when they:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Search Google.",
                  "Scroll Instagram.",
                  "Watch YouTube.",
                  "Check Google Maps.",
                  "Ask for recommendations.",
                  "Search for a product or service.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white px-5 py-4 text-[14px] font-semibold shadow-[0_5px_20px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] font-extrabold leading-[1.85]">
                That is what strong local digital marketing should accomplish.
              </p>
            </section>

            {/* WHAT TO DO */}
            <section className="mb-14">
              <SectionTitle number="16">
                What Should You Do If Your Competitor Is{" "}
                <Highlight>Already Ahead?</Highlight>
              </SectionTitle>

              <div className="mb-7 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[24px] font-black text-[#F8BC04]">
                  Don&apos;t panic.
                </p>

                <p className="mt-3 text-[18px] font-extrabold">
                  And don&apos;t immediately copy them.
                </p>

                <p className="mt-4 text-[16px] leading-[1.7] text-[#D5D5D5]">
                  Start with an audit.
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-7">
                  <h3 className="text-[20px] font-extrabold">
                    Step 1: Find Where They Are Winning
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.8] text-[#666]">
                    Search your most important keywords on Google. Check
                    Google Maps. Search your city + your service. Look at
                    Instagram. Look at their website. Read their reviews.
                    Study their advertisements.
                  </p>

                  <div className="mt-5 rounded-xl bg-[#FFF9E8] p-5 text-[14px] font-extrabold">
                    Find out where customers are discovering them.
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-7">
                  <h3 className="text-[20px] font-extrabold">
                    Step 2: Identify Your Biggest Gap
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.8] text-[#666]">
                    You may discover that your biggest problem is:
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "SEO",
                      "Social media",
                      "Google Business Profile",
                      "Website",
                      "Reviews",
                      "Advertising",
                      "Content",
                      "Branding",
                      "Lead follow-up",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg bg-[#FAFAFA] p-3 text-[13px] font-semibold"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-[14px] font-extrabold leading-[1.8]">
                    Don&apos;t try to fix everything at once. Fix the biggest
                    bottleneck first.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-7">
                  <h3 className="text-[20px] font-extrabold">
                    Step 3: Build a Local Content Strategy
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.8] text-[#666]">
                    Create content specifically for your market.
                  </p>

                  <div className="mt-5 space-y-3">
                    {[
                      "“5 Things to Check Before Hiring an Interior Designer in Guwahati”",
                      "“How Students in Ranchi Can Choose the Right Coaching Centre”",
                      "“How Local Businesses in Indore Can Get More Customers From Google”",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl bg-[#FFF9E8] p-4 text-[14px] font-bold"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl bg-[#171717] p-5 text-[15px] font-black text-[#F8BC04]">
                    Specific content attracts specific customers.
                  </div>

                  <p className="mt-5 text-[14px] leading-[1.8] text-[#666]">
                    A consistent{" "}
                    <InternalLink href="/services/social-media-marketing">
                      social media marketing
                    </InternalLink>{" "}
                    strategy can help distribute this local content to the
                    right audience.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-7">
                  <h3 className="text-[20px] font-extrabold">
                    Step 4: Make It Easy to Enquire
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.8] text-[#666]">
                    Your customer should never have to hunt for your contact
                    details.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      "Call",
                      "WhatsApp",
                      "Get Quote",
                      "Book Now",
                      "Visit Us",
                      "Send Enquiry",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl bg-[#F8BC04] px-4 py-4 text-center text-[13px] font-black text-black"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-[14px] font-extrabold leading-[1.8]">
                    Every additional step can create friction.
                  </p>
                </div>
              </div>
            </section>

            {/* BIGBEANS TAKE */}
            <section className="mb-14">
              <SectionTitle number="17">
                The <Highlight>BIGBEANS DIGITAL Take</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                At{" "}
                <InternalLink href="/">
                  BIGBEANS DIGITAL
                </InternalLink>
                , we believe one of the biggest misconceptions among Indian
                small businesses is that marketing is simply about posting on
                social media.
              </p>

              <div className="my-6 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[22px] font-black text-[#F8BC04]">
                  It isn&apos;t.
                </p>

                <p className="mt-4 text-[19px] font-extrabold leading-[1.6]">
                  Effective digital marketing is about creating a system where
                  the right customer can:
                </p>

                <p className="mt-5 text-[21px] font-black leading-[1.6]">
                  Discover you → Understand you → Trust you → Contact you →
                  Become your customer.
                </p>
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                And this is particularly important in India&apos;s Tier 2 and
                Tier 3 cities.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                The next big customer may not come from a billboard.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "They may find you through Google.",
                  "They may watch your Reel.",
                  "They may see a customer review.",
                  "They may discover your Google Business Profile.",
                  "They may click your website.",
                  "They may send you a WhatsApp message at 10:30 PM.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#E8E8E8] bg-white px-5 py-4 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] font-extrabold leading-[1.85]">
                Your job is to make sure your business is ready when that
                moment happens.
              </p>

              <div className="mt-6 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-7">
                <p className="text-[19px] font-extrabold leading-[1.6]">
                  Because your competitor doesn&apos;t need to have a better
                  business than yours.
                </p>

                <p className="mt-4 text-[25px] font-black text-[#C48D00]">
                  They just need to be better at being found.
                </p>
              </div>
            </section>

            {/* FINAL THOUGHTS */}
            <section className="mb-14">
              <div className="rounded-[26px] border-2 border-[#F8BC04] bg-[#FFF9E8] p-8 shadow-[0_15px_40px_rgba(248,188,4,0.08)] transition-all duration-500 hover:-translate-y-1 md:p-10">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#C48D00]">
                  Final Thoughts
                </span>

                <h2 className="mt-3 text-[28px] font-black leading-[1.16] md:text-[35px]">
                  Your Competitor Opened Later. So Why Are They{" "}
                  <Highlight>Getting More Leads?</Highlight>
                </h2>

                <p className="mt-5 text-[15px] leading-[1.8] text-[#444]">
                  Your competitor opened six months after you.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#444]">
                  So why are they getting more leads?
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#444]">
                  Maybe they have a better product.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#444]">
                  Maybe they have better pricing.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#444]">
                  But very often, the answer is much simpler.
                </p>

                <div className="my-7 rounded-2xl bg-[#171717] p-7 text-center">
                  <p className="text-[25px] font-black text-[#F8BC04]">
                    They have built a better digital presence.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "They are showing up where customers are searching.",
                    "They are creating content customers want to see.",
                    "They are collecting reviews.",
                    "They are building trust.",
                    "They are using local targeting.",
                    "They are making it easy to contact them.",
                    "They are consistently putting their business in front of the right people.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-white p-5 text-[14px] font-bold leading-[1.6] transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="text-[#F8BC04]">✓</span> {item}
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-[15px] font-extrabold leading-[1.8] text-[#444]">
                  The good news?
                </p>

                <p className="mt-3 text-[24px] font-black text-[#C48D00]">
                  You can still catch up.
                </p>

                <p className="mt-5 text-[15px] leading-[1.8] text-[#444]">
                  You don&apos;t need to become the biggest business in your
                  city overnight.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#444]">
                  You need to become easier to find, easier to trust and easier
                  to contact.
                </p>

                <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-center text-white">
                  <p className="text-[17px] font-semibold leading-[1.6]">
                    Because in today&apos;s India, especially in growing Tier 2
                    and Tier 3 cities:
                  </p>

                  <p className="mt-4 text-[23px] font-black text-[#F8BC04]">
                    The business that gets noticed first often gets the enquiry
                    first.
                  </p>

                  <p className="mt-4 text-[17px] font-extrabold leading-[1.6]">
                    And the enquiry that gets handled best can become the
                    customer.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-14">
              <SectionTitle number="18">
                <Highlight>Frequently Asked Questions</Highlight>
              </SectionTitle>

              <div className="space-y-4">
                {[
                  {
                    question:
                      "Why is my competitor getting more leads than my business?",
                    answer:
                      "Your competitor may have better online visibility, local SEO, Google Business Profile optimisation, social media content, online reviews, paid advertising or a more effective website. Business age alone does not determine lead generation.",
                  },
                  {
                    question:
                      "How can a small business get more leads in a Tier 2 or Tier 3 city?",
                    answer:
                      "Focus on local SEO, Google Business Profile optimisation, social media marketing, local content, customer reviews, WhatsApp lead generation and targeted advertising. The goal is to become highly visible within your specific market rather than trying to reach everyone.",
                  },
                  {
                    question: "Is social media enough to generate leads?",
                    answer:
                      "Not always. Social media can generate awareness and enquiries, but businesses often need a combination of social media, SEO, Google Business Profile, website optimisation, paid advertising and reputation management.",
                  },
                  {
                    question:
                      "Should local businesses invest in Google Ads?",
                    answer:
                      "Google Ads can be effective when targeting high-intent local searches and when the landing page and lead-follow-up process are strong. Advertising should be measured based on qualified leads and conversions rather than clicks alone.",
                  },
                  {
                    question:
                      "How important is Google Business Profile for local businesses?",
                    answer:
                      "It can be extremely valuable for businesses that depend on local customers because it helps people discover information about the business when searching on Google and Maps. Keeping the profile accurate, active and supported by genuine customer reviews is an important part of local digital marketing.",
                  },
                  {
                    question:
                      "Should businesses in Tier 2 and Tier 3 cities use regional languages?",
                    answer:
                      "Regional-language or bilingual content can be valuable when it reflects how the target audience actually communicates. The right approach depends on the city, audience, category and buying journey.",
                  },
                  {
                    question:
                      "Can a newer business outrank an older business on Google?",
                    answer:
                      "Yes. Business age alone does not guarantee higher search visibility. Search visibility depends on many factors, including relevance, content, website quality, local signals, authority, user experience and competition.",
                  },
                  {
                    question: "How long does it take to improve local SEO?",
                    answer:
                      "There is no universal timeline. Results depend on the market, competition, website, existing authority, content, Google Business Profile, reviews and the quality of the SEO work. Businesses should think in terms of consistent improvement rather than instant rankings.",
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

            {/* FINAL CTA */}
            <section className="overflow-hidden rounded-[26px] bg-[#111111] p-7 text-white md:p-9">
              <div className="grid items-center gap-7 md:grid-cols-[1fr_auto]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[2px] text-[#F8BC04]">
                    BIGBEANS DIGITAL
                  </span>

                  <h2 className="mt-3 text-[25px] font-black leading-[1.2] md:text-[32px]">
                    Ready to Find Out Why Your Competitor Is{" "}
                    <Highlight>Getting More Leads?</Highlight>
                  </h2>

                  <p className="mt-3 max-w-[680px] text-[14px] leading-[1.7] text-[#D4D4D4]">
                    Your business may not need another random social media
                    post. It may need a proper digital marketing strategy.
                  </p>

                  <p className="mt-4 max-w-[680px] text-[14px] leading-[1.7] text-[#D4D4D4]">
                    BIGBEANS DIGITAL helps businesses build stronger online
                    visibility through{" "}
                    <InternalLink href="/services/social-media-marketing">
                      social media marketing
                    </InternalLink>
                    ,{" "}
                    <InternalLink href="/services/branding">
                      branding
                    </InternalLink>
                    , creative content, SEO,{" "}
                    <InternalLink href="/services/google-ads-meta-ads">
                      paid advertising
                    </InternalLink>{" "}
                    and digital growth strategies.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-semibold text-[#E7E7E7]">
                    <span>✓ Social Media Marketing</span>
                    <span>✓ Branding</span>
                    <span>✓ Paid Advertising</span>
                    <span>✓ Website Development</span>
                  </div>
                </div>

                <Link
                  href="/connect"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#F8BC04] px-6 py-4 text-sm font-extrabold text-black no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFC72C] hover:shadow-[0_12px_30px_rgba(248,188,4,0.25)]"
                >
                  Contact BIGBEANS DIGITAL

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </section>
          </article>

          {/* STICKY SIDEBAR */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
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

              <div className="mt-6 rounded-2xl border border-[#2B2B2B] bg-[#181818] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#F8BC04]">
                  Need More Leads?
                </p>

                <p className="mt-2 text-[15px] font-extrabold leading-[1.5] text-white">
                  Let&apos;s find where your competitors are winning online.
                </p>

                <Link
                  href="/connect"
                  className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold text-[#F8BC04] no-underline transition-all duration-300 hover:gap-3"
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