'use client';

import Image from "next/image";
import Link from "next/link";

const thumbnail =
  "/assets/blog/singleblogs/real-estate-video-marketing-ideas-for-reels.png";

const services = [
  {
    title: "Social Media Marketing",
    description:
      "Build authority, reach the right audience and generate qualified enquiries through strategic social media.",
    href: "/services/social-media-marketing",
  },
  {
    title: "Branding",
    description:
      "Build a memorable brand identity that helps your business stand apart in a competitive market.",
    href: "/services/branding",
  },
  {
    title: "Google Ads & Meta Ads",
    description:
      "Reach high-intent buyers with targeted performance marketing campaigns.",
    href: "/services/google-ads-meta-ads",
  },
  {
    title: "Logo Designing",
    description:
      "Create a professional visual identity that makes your real estate brand memorable.",
    href: "/services/logo-designing",
  },
  {
    title: "Website Development",
    description:
      "Create conversion-focused websites that turn visitors into enquiries.",
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
      className="font-bold text-[#F8BC04] no-underline transition-all duration-300 hover:text-[#171717]"
    >
      {children}
    </Link>
  );
}

function LinkedBold({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-bold text-inherit no-underline transition-all duration-300 hover:text-[#F8BC04]"
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

const funnelSteps = [
  "Attention",
  "Interest",
  "Lead",
  "Qualification",
  "Site Visit",
  "Remarketing",
];

const funnelWidths = [
  "w-full",
  "w-[92%]",
  "w-[84%]",
  "w-[76%]",
  "w-[68%]",
  "w-[60%]",
];

export default function RealEstateVideoMarketingIdeasForReels() {
  const articleTitle =
    "Real Estate Video Marketing Ideas for Reels That Actually Close Property Deals";

  const aiPrompt = encodeURIComponent(
    `Summarize this BigBeans Digital blog: "${articleTitle}". Focus on real estate video marketing, Reels, property leads, site visits, builders, developers, brokers, realtors, social media marketing, performance marketing and lead generation.`
  );

  return (
    <main className="bg-[#FAFAFA] text-[#171717]">
      {/* HERO */}
      <section className="mx-auto max-w-[1380px] px-5 pb-14 pt-8 md:px-8 md:pt-12 lg:px-10 lg:pb-16">
        <div className="grid items-center gap-9 lg:grid-cols-[0.93fr_1.07fr] lg:gap-12">
          <div className="animate-[fadeIn_0.7s_ease-out]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E9E9E9] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#666] shadow-[0_6px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F8BC04]" />
              Real Estate Digital Marketing
            </div>

            <h1 className="max-w-[650px] text-[40px] font-black leading-[1.04] tracking-[-1.8px] md:text-[49px] lg:text-[55px]">
              Real Estate Video Marketing Ideas for Reels That Actually{" "}
              <Highlight>Close Property Deals</Highlight>
            </h1>

            <p className="mt-6 max-w-[620px] text-[15px] leading-[1.75] text-[#4A4A4A] md:text-[16px]">
              Discover real estate video marketing ideas for Reels that can
              generate property leads, site visits and sales for builders,
              brokers, developers and realtors in India.
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
                "Real Estate Reels",
                "Property Marketing",
                "Lead Generation",
                "Social Media Marketing",
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
                  alt="Real Estate Video Marketing Ideas for Reels"
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

      {/* CONTENT */}
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
              <div className="rounded-[22px] border border-[#E9E9E9] bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.035)]">
                <p className="text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  Let&apos;s be honest: most{" "}
                  <LinkedBold href="/services/social-media-marketing">
                    real estate Reels
                  </LinkedBold>{" "}
                  aren&apos;t really marketing; they are simply{" "}
                  <strong>property walkthrough videos</strong> set to trending
                  music featuring drone shots, living rooms, swimming pools,
                  and slow-motion balcony clips captioned with
                  &quot;Luxury Living Awaits&quot; or &quot;DM for Price.&quot;
                  It is no wonder everyone ends up asking why they get high view
                  counts but zero actual <strong>property bookings</strong>.
                </p>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  A beautiful property video does not automatically make a good
                  marketing video. If you are a{" "}
                  <strong>builder</strong>, <strong>developer</strong>,{" "}
                  <strong>broker</strong>, or <strong>realtor</strong>, your
                  content needs to do more than just display what a property
                  looks like—it needs to spark curiosity, build trust, generate
                  quality enquiries, and drive prospective buyers toward a
                  physical <strong>site visit</strong>. That is where strategic{" "}
                  <LinkedBold href="/services/social-media-marketing">
                    Real Estate Video Marketing
                  </LinkedBold>
                  ,{" "}
                  <LinkedBold href="/services/social-media-marketing">
                    Real Estate SMM
                  </LinkedBold>
                  , and <strong>Property Digital Marketing India</strong> make
                  all the difference.
                </p>
              </div>
            </section>

            {/* WHY REELS DON'T GENERATE LEADS */}
            <section className="mb-14">
              <SectionTitle number="01">
                Why Most Real Estate Reels Don&apos;t{" "}
                <Highlight>Generate Leads?</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                The biggest mistake is creating content around the{" "}
                <strong>property instead of the buyer</strong>.
              </p>

              <div className="my-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
                  <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#888]">
                    Typical Reel
                  </span>

                  <p className="mt-4 text-[17px] font-extrabold leading-[1.6]">
                    &quot;Premium 3BHK apartment with world-class
                    amenities.&quot;
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                  <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#B57F00]">
                    Better Reel
                  </span>

                  <p className="mt-4 text-[17px] font-extrabold leading-[1.6]">
                    &quot;If you&apos;re buying a 3BHK for your family, here
                    are 3 things you should check before booking.&quot;
                  </p>
                </div>
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                The first is an advertisement. The second provides value. And
                valuable content gives people a reason to stop scrolling.
              </p>

              <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[14px] font-bold uppercase tracking-[1.5px] text-[#F8BC04]">
                  The Real Estate Funnel
                </p>

                <p className="mt-4 text-[20px] font-black leading-[1.6]">
                  Attention → Interest → Enquiry → Site Visit → Deal
                </p>

                <p className="mt-4 text-[14px] leading-[1.7] text-[#D5D5D5]">
                  A successful{" "}
                  <LinkedBold href="/services/social-media-marketing">
                    Real Estate Social Media Agency
                  </LinkedBold>{" "}
                  understands that the objective isn&apos;t simply Views →
                  Likes → Followers. Your content should support the entire
                  funnel.
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                That is how we at{" "}
                <InternalLink href="/">BIGBEANS DIGITAL</InternalLink> work for
                real estate companies.
              </p>
            </section>

            {/* 10 IDEAS */}
            <section className="mb-14">
              <SectionTitle number="02">
                10 Real Estate Reel Ideas That Can Actually{" "}
                <Highlight>Generate Property Leads</Highlight>
              </SectionTitle>

              {/* IDEA 1 */}
              <div className="mb-10 rounded-[22px] border border-[#E8E8E8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] md:p-8">
                <h3 className="text-[21px] font-black">
                  <Highlight>1. “What ₹35 Lakhs Gets You in Kolkata”</Highlight>
                </h3>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  This is one of the simplest ways to create high-intent
                  content.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Carpet area",
                    "Bedrooms",
                    "Amenities",
                    "Location",
                    "Parking",
                    "Connectivity",
                    "Lifestyle",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-[#FFF9E8] px-4 py-4 text-[14px] font-bold"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                  This works brilliantly for{" "}
                  <strong>Flat Marketing</strong>,{" "}
                  <LinkedBold href="/services/social-media-marketing">
                    Flat SMM
                  </LinkedBold>
                  , villas and premium apartments. It also gives your audience
                  immediate price context.
                </p>
              </div>

              {/* IDEA 2 */}
              <div className="mb-10 rounded-[22px] border border-[#E8E8E8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] md:p-8">
                <h3 className="text-[21px] font-black">
                  <Highlight>
                    2. The “Don&apos;t Buy Before You Know This” Reel
                  </Highlight>
                </h3>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  Educational content works because property buyers have
                  questions.
                </p>

                <div className="my-6 space-y-3">
                  {[
                    "“Don't buy a flat before checking this.”",
                    "“3 things every first-time property buyer should ask a builder.”",
                    "“Before paying a booking amount, check these 5 things.”",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-[#FFF9E8] px-5 py-4 text-[14px] font-bold"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="text-[15px] leading-[1.85] text-[#555]">
                  This builds{" "}
                  <LinkedBold href="/services/branding">
                    Builder Brand Awareness
                  </LinkedBold>{" "}
                  and{" "}
                  <LinkedBold href="/services/branding">
                    Realtor Personal Branding
                  </LinkedBold>{" "}
                  while positioning your business as knowledgeable rather than
                  desperate to sell.
                </p>
              </div>

              {/* IDEA 3 */}
              <div className="mb-10 rounded-[22px] border border-[#E8E8E8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] md:p-8">
                <h3 className="text-[21px] font-black">
                  <Highlight>
                    3. Property Walkthrough — But Tell a Story
                  </Highlight>
                </h3>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  Instead of simply walking through a property, you need to
                  create a compelling <strong>buyer journey</strong> that
                  starts with an engaging hook like, &quot;Imagine this is your
                  home. Let&apos;s see what your morning looks like,&quot;
                  followed by a seamless flow from the entrance, living room,
                  kitchen, and bedroom to the balcony,{" "}
                  <strong>amenities</strong>, and location.
                </p>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  This is precisely where strategic{" "}
                  <LinkedBold href="/services/social-media-marketing">
                    Property Walkthrough Video SMM
                  </LinkedBold>{" "}
                  becomes useful, because you are not just showing physical{" "}
                  <strong>square footage</strong>—you are helping the buyer
                  visualize their future life inside the{" "}
                  <strong>property</strong>.
                </p>
              </div>

              {/* IDEA 4 */}
              <div className="mb-10 rounded-[22px] border border-[#E8E8E8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] md:p-8">
                <h3 className="text-[21px] font-black">
                  <Highlight>
                    4. “3 Reasons You Should NOT Buy This Property”
                  </Highlight>
                </h3>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  Yes, seriously—telling people who the{" "}
                  <strong>property</strong> isn&apos;t for can be a
                  game-changer.
                </p>

                <div className="my-6 rounded-2xl bg-[#171717] p-6 text-[17px] font-extrabold leading-[1.6] text-white">
                  &quot;Don&apos;t buy this <strong>apartment</strong> if you
                  need to be within 10 minutes of the airport.&quot;
                </div>

                <p className="text-[15px] leading-[1.85] text-[#555]">
                  Clearly explaining who the home is suitable for adds immense
                  value. This kind of raw honesty makes your{" "}
                  <LinkedBold href="/services/branding">
                    Real Estate Marketing Company
                  </LinkedBold>{" "}
                  appear significantly more credible, and building that trust
                  matters deeply when you&apos;re selling high-value{" "}
                  <strong>real estate</strong> assets worth ₹50 lakh, ₹1 crore,
                  or ₹5 crore.
                </p>
              </div>

              {/* IDEA 5 */}
              <div className="mb-10 rounded-[22px] border border-[#E8E8E8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] md:p-8">
                <h3 className="text-[21px] font-black">
                  <Highlight>5. Compare Two Properties</Highlight>
                </h3>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  When creating high-converting{" "}
                  <strong>real estate content</strong>, a direct comparison
                  style like &quot;₹1.2 crore apartment A vs ₹1.2 crore
                  apartment B — which one would you choose?&quot; serves as a
                  powerful hook for prospective{" "}
                  <strong>property buyers</strong>.
                </p>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  To break this down effectively for your audience, you can
                  evaluate both properties side-by-side across crucial
                  parameters.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Location",
                    "Connectivity",
                    "Carpet area",
                    "Amenities",
                    "Parking",
                    "Maintenance",
                    "Builder reputation",
                    "Property investment",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-[#FFF9E8] px-4 py-4 text-[14px] font-bold"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                  While Apartment A might boast a superior{" "}
                  <strong>Location</strong> and top-tier{" "}
                  <strong>Connectivity</strong> close to the business district,
                  Apartment B could offer a significantly larger{" "}
                  <strong>Carpet area</strong> and advanced lifestyle{" "}
                  <strong>Amenities</strong>. Furthermore, savvy buyers will
                  look closely at dedicated <strong>Parking</strong>{" "}
                  availability, monthly <strong>Maintenance</strong> charges,
                  and the overall <strong>Builder reputation</strong> to ensure
                  long-term value and peace of mind before making a final{" "}
                  <strong>property investment</strong>.
                </p>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  Publishing <strong>comparison content</strong> effectively
                  attracts prospects who already possess strong{" "}
                  <strong>Property Buyer Intent</strong>, meaning they are not
                  merely watching your videos—they are actively{" "}
                  <strong>evaluating</strong> their options.
                </p>
              </div>

              {/* IDEA 6 */}
              <div className="mb-10 rounded-[22px] border border-[#E8E8E8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] md:p-8">
                <h3 className="text-[21px] font-black">
                  <Highlight>
                    6. Show the Neighbourhood, Not Just the Property
                  </Highlight>
                </h3>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  When marketing <strong>real estate</strong>, remember that
                  you aren&apos;t just selling four walls—you are selling a
                  location and a lifestyle.
                </p>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  Creating engaging <strong>Reels</strong> like &quot;5 reasons
                  families are moving to this area&quot; allows you to showcase
                  vital community infrastructure, including nearby{" "}
                  <strong>schools</strong>, <strong>hospitals</strong>,{" "}
                  <strong>offices</strong>, <strong>shopping</strong> centers,{" "}
                  <strong>restaurants</strong>,{" "}
                  <strong>metro/highways</strong>, and{" "}
                  <strong>entertainment</strong> hubs.
                </p>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  This is a powerful form of{" "}
                  <LinkedBold href="/services/social-media-marketing">
                    Local Realtor SMM
                  </LinkedBold>{" "}
                  that seamlessly supports your broader{" "}
                  <strong>local SEO strategy</strong>.
                </p>

                <div className="mt-6 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                  <p className="text-[18px] font-black leading-[1.6]">
                    &quot;What will my life look like if I live here?&quot;
                  </p>
                </div>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  That is what a serious <strong>property buyer</strong> is
                  really asking.
                </p>
              </div>

              {/* IDEA 7 */}
              <div className="mb-10 rounded-[22px] border border-[#E8E8E8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] md:p-8">
                <h3 className="text-[21px] font-black">
                  <Highlight>
                    7. “What I Would Buy With ₹1 Crore”
                  </Highlight>
                </h3>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  Putting the realtor or founder directly on camera with a
                  compelling hook like, &quot;If I had ₹1 crore to invest in
                  Hyderabad, here&apos;s what I would look for,&quot; instantly
                  builds authority.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Location",
                    "Property type",
                    "Rental potential",
                    "Connectivity",
                    "Development",
                    "Risk factors",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-[#FFF9E8] px-4 py-4 text-[14px] font-bold"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                  This strategy is an exceptional execution of{" "}
                  <LinkedBold href="/services/social-media-marketing">
                    Realtor SMM
                  </LinkedBold>{" "}
                  and{" "}
                  <LinkedBold href="/services/branding">
                    Realtor Personal Branding
                  </LinkedBold>
                  , with the ultimate goal of transforming you into the trusted
                  expert people rely on long before they are ready to make a{" "}
                  <strong>property investment</strong>.
                </p>
              </div>

              {/* IDEA 8 */}
              <div className="mb-10 rounded-[22px] border border-[#E8E8E8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] md:p-8">
                <h3 className="text-[21px] font-black">
                  <Highlight>8. Customer Story Reel</Highlight>
                </h3>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  Stop simply claiming that &quot;We have happy customers&quot;
                  and instead let your actual buyers tell their stories. By
                  asking targeted questions like these, you capture genuine
                  consumer experiences.
                </p>

                <div className="my-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "What were you looking for?",
                    "What properties did you compare?",
                    "Why did you choose this one?",
                    "What convinced you to book?",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-[#FFF9E8] px-5 py-4 text-[14px] font-bold"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="text-[15px] leading-[1.85] text-[#555]">
                  This approach builds authentic <strong>social proof</strong>{" "}
                  and significantly strengthens your overall{" "}
                  <LinkedBold href="/services/google-ads-meta-ads">
                    Real Estate Lead Generation
                  </LinkedBold>{" "}
                  strategy.
                </p>
              </div>

              {/* IDEA 9 */}
              <div className="mb-10 rounded-[22px] border border-[#E8E8E8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] md:p-8">
                <h3 className="text-[21px] font-black">
                  <Highlight>
                    9. “What Does the Area Actually Offer?”
                  </Highlight>
                </h3>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  Location-focused <strong>Reels</strong> are particularly
                  useful for <strong>Villa Marketing</strong>,{" "}
                  <strong>Plot Marketing</strong>,{" "}
                  <strong>commercial property</strong>, and{" "}
                  <strong>new developments</strong>.
                </p>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  To capture attention, creators can feature engaging hooks
                  like, &quot;Here&apos;s what is coming to this location in
                  the next few years,&quot; while discussing vital{" "}
                  <strong>infrastructure</strong>,{" "}
                  <strong>connectivity</strong>, and upcoming{" "}
                  <strong>development</strong> using verified information.
                </p>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  For savvy <strong>investors</strong>, this type of strategic
                  insight can be far more compelling and valuable than simply
                  watching another cinematic shot of a{" "}
                  <strong>property&apos;s entrance</strong>.
                </p>
              </div>

              {/* IDEA 10 */}
              <div className="mb-2 rounded-[22px] border border-[#E8E8E8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] md:p-8">
                <h3 className="text-[21px] font-black">
                  <Highlight>
                    10. Virtual Tour for Outstation &amp; NRI Buyers
                  </Highlight>
                </h3>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  Recognizing that not every buyer can visit a property
                  immediately is crucial for international campaigns, making
                  targeted hooks like &quot;You&apos;re in Dubai. We&apos;re at
                  the property. Here&apos;s a complete{" "}
                  <strong>60-second walkthrough</strong>&quot; exceptionally
                  effective.
                </p>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                  This strategy is particularly useful for{" "}
                  <LinkedBold href="/services/social-media-marketing">
                    NRI Real Estate Marketing India
                  </LinkedBold>{" "}
                  and <strong>NRI Property SMM</strong>.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-[#FFF9E8] px-5 py-4 text-[14px] font-bold">
                    WhatsApp communication
                  </div>

                  <div className="rounded-xl bg-[#FFF9E8] px-5 py-4 text-[14px] font-bold">
                    Virtual consultation
                  </div>

                  <div className="rounded-xl bg-[#FFF9E8] px-5 py-4 text-[14px] font-bold">
                    Digital brochure
                  </div>

                  <div className="rounded-xl bg-[#FFF9E8] px-5 py-4 text-[14px] font-bold">
                    Floor plan
                  </div>

                  <div className="rounded-xl bg-[#FFF9E8] px-5 py-4 text-[14px] font-bold sm:col-span-2">
                    Site visit scheduling
                  </div>
                </div>

                <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                  Your Reel transforms from simple social media content into a
                  fully integrated and efficient <strong>sales process</strong>
                  .
                </p>
              </div>
            </section>

            {/* SALES FUNNEL */}
            <section className="mb-14">
              <SectionTitle number="03">
                Turn Your Reels Into a{" "}
                <Highlight>Lead Generation Funnel</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                A Reel shouldn&apos;t exist in isolation. A smart{" "}
                <LinkedBold href="/services/social-media-marketing">
                  Real Estate Social Media Strategy
                </LinkedBold>{" "}
                looks something like this:
              </p>

              <div className="mt-8 flex flex-col items-center overflow-hidden rounded-[26px] bg-white px-4 py-8 shadow-[0_12px_40px_rgba(0,0,0,0.045)] md:px-8 md:py-10">
                <div className="mb-7 text-center">
                  <span className="rounded-full bg-[#FFF4C7] px-4 py-2 text-[10px] font-black uppercase tracking-[1.7px] text-[#B57F00]">
                    From attention to conversion
                  </span>
                </div>

                <div className="flex w-full flex-col items-center gap-2">
                  {funnelSteps.map((step, index) => (
                    <div
                      key={step}
                      className={`group relative flex ${funnelWidths[index]} min-h-[66px] items-center justify-center overflow-hidden bg-[#171717] px-6 text-center shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#242424] hover:shadow-[0_15px_30px_rgba(248,188,4,0.14)] md:min-h-[70px]`}
                      style={{
                        clipPath:
                          index === 0
                            ? "polygon(3% 0, 97% 0, 100% 50%, 97% 100%, 3% 100%, 0 50%)"
                            : "polygon(3% 0, 97% 0, 100% 50%, 97% 100%, 3% 100%, 0 50%)",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F8BC04]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <span className="relative z-10 mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8BC04] text-[11px] font-black text-black">
                        {index + 1}
                      </span>

                      <span className="relative z-10 text-[14px] font-black text-white md:text-[16px]">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 max-w-[600px] text-center">
                  <p className="text-[13px] leading-[1.75] text-[#666]">
                    Every stage has a job. The goal is not to collect views—it
                    is to move the right prospect toward a qualified enquiry
                    and eventually a site visit.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                This is where{" "}
                <LinkedBold href="/services/social-media-marketing">
                  Real Estate WhatsApp Marketing Integration
                </LinkedBold>{" "}
                becomes extremely useful.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                People who watched your videos, visited your website or
                interacted with your social pages can potentially be reached
                again through{" "}
                <LinkedBold href="/services/google-ads-meta-ads">
                  Real Estate Remarketing Campaigns
                </LinkedBold>
                , subject to platform rules and campaign setup.
              </p>

              <div className="mt-6 rounded-2xl bg-[#171717] p-7 text-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1">
                <p className="text-[23px] font-black text-[#F8BC04]">
                  That&apos;s how you turn content into a system.
                </p>
              </div>
            </section>

            {/* METRICS */}
            <section className="mb-14">
              <SectionTitle number="04">
                Don&apos;t Measure Real Estate Reels by{" "}
                <Highlight>Views Alone</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                This is where many property businesses go wrong.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                The important metric isn&apos;t simply{" "}
                <strong>Cost Per Lead in Real Estate</strong>.
              </p>

              <div className="my-7 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-7 text-center transition-all duration-300 hover:-translate-y-1">
                <p className="text-[22px] font-black">
                  Cost → Qualified Lead → Site Visit → Booking
                </p>
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                If your <strong>Real Estate Conversion Rate</strong> is poor,
                more views won&apos;t necessarily solve the problem.
              </p>
            </section>

            {/* FACEBOOK ADS */}
            <section className="mb-14">
              <SectionTitle number="05">
                What About <Highlight>Facebook Ads for Real Estate?</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                Organic content is only one part of the equation.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                <LinkedBold href="/services/google-ads-meta-ads">
                  Property Facebook Ads
                </LinkedBold>{" "}
                and{" "}
                <LinkedBold href="/services/google-ads-meta-ads">
                  Facebook Advertising for Real Estate India
                </LinkedBold>{" "}
                can help put your strongest content in front of specific
                audiences.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                This is where a{" "}
                <LinkedBold href="/services/social-media-marketing">
                  Commercial Property SMM Agency
                </LinkedBold>{" "}
                can build content around genuine investor and business-owner
                questions.
              </p>

              <div className="mt-6 rounded-2xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[17px] font-extrabold leading-[1.6]">
                  Strong organic content + strategic paid distribution can turn
                  attention into measurable demand.
                </p>
              </div>
            </section>

            {/* BIGBEANS STRATEGY - ENTIRE SECTION BLACK */}
            <section className="mb-14 overflow-hidden rounded-[30px] bg-[#111111] p-7 text-white shadow-[0_25px_60px_rgba(0,0,0,0.13)] transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)] md:p-9">
              <div className="mb-10">
                <div className="mb-6 flex items-start gap-4">
                  <span className="mt-1 flex h-9 min-w-9 items-center justify-center rounded-full bg-[#F8BC04] px-2 text-[12px] font-black text-black shadow-[0_6px_18px_rgba(248,188,4,0.2)]">
                    06
                  </span>

                  <h2 className="text-[24px] font-black leading-[1.18] tracking-[-0.7px] md:text-[29px]">
                    What a Real Estate SMM Strategy Should{" "}
                    <Highlight>Actually Include?</Highlight>
                  </h2>
                </div>

                <p className="text-[15px] leading-[1.85] text-[#D5D5D5] md:text-[16px]">
                  When investing in{" "}
                  <LinkedBold href="/services/social-media-marketing">
                    Real Estate Social Media Packages
                  </LinkedBold>
                  , true success comes from a comprehensive marketing strategy
                  rather than a rigid calendar of arbitrary numbers.
                </p>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#D5D5D5]">
                  At{" "}
                  <InternalLink href="/">BIGBEANS DIGITAL</InternalLink>, we
                  believe that every piece of content should have a distinct
                  business purpose, transforming your social media channels into
                  a high-performing revenue driver.
                </p>
              </div>

              {/* CONTENT FRAMEWORK */}
              <div className="rounded-[22px] border border-[#303030] bg-[#181818] p-6 transition-all duration-500 hover:border-[#F8BC04]/40 md:p-7">
                <h3 className="text-[21px] font-black">
                  <Highlight>
                    The BIGBEANS DIGITAL Content Framework
                  </Highlight>
                </h3>

                <p className="mt-4 text-[14px] leading-[1.8] text-[#BDBDBD]">
                  We design every campaign to serve a specific, strategic role
                  in your customer journey:
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-xl bg-[#FFF9E8] p-5 text-[#171717] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8BC04]">
                    <h4 className="text-[15px] font-extrabold">
                      Building Awareness &amp; Education
                    </h4>

                    <p className="mt-2 text-[13px] leading-[1.7] text-[#666]">
                      Introducing your properties to the right audience while
                      providing genuine market value.
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#FFF9E8] p-5 text-[#171717] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8BC04]">
                    <h4 className="text-[15px] font-extrabold">
                      Establishing Authority
                    </h4>

                    <p className="mt-2 text-[13px] leading-[1.7] text-[#666]">
                      Positioning realtors, builders, and developers as trusted
                      industry experts.
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#FFF9E8] p-5 text-[#171717] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8BC04]">
                    <h4 className="text-[15px] font-extrabold">
                      Driving Action
                    </h4>

                    <p className="mt-2 text-[13px] leading-[1.7] text-[#666]">
                      Generating high-intent enquiries, supporting remarketing
                      campaigns, and helping prospective buyers visualize their
                      dream lifestyle.
                    </p>
                  </div>
                </div>
              </div>

              {/* EXPERTISE */}
              <div className="mt-7 rounded-[22px] border border-[#303030] bg-[#181818] p-6 transition-all duration-500 hover:border-[#F8BC04]/40 md:p-7">
                <h3 className="text-[21px] font-black">
                  <Highlight>Our Comprehensive Expertise</Highlight>
                </h3>

                <p className="mt-4 text-[14px] leading-[1.8] text-[#BDBDBD]">
                  A serious marketing partnership requires a complete
                  ecosystem. BIGBEANS DIGITAL integrates every crucial pillar
                  required to scale your brand:
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/services/social-media-marketing"
                    className="rounded-xl bg-[#242424] p-4 text-[13px] font-bold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8BC04] hover:text-black"
                  >
                    Content Strategy &amp; Organic Growth
                  </Link>

                  <Link
                    href="/services/social-media-marketing"
                    className="rounded-xl bg-[#242424] p-4 text-[13px] font-bold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8BC04] hover:text-black"
                  >
                    Real Estate Video Marketing
                  </Link>

                  <Link
                    href="/services/social-media-marketing"
                    className="rounded-xl bg-[#242424] p-4 text-[13px] font-bold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8BC04] hover:text-black"
                  >
                    Property Walkthrough Video SMM
                  </Link>

                  <Link
                    href="/services/google-ads-meta-ads"
                    className="rounded-xl bg-[#242424] p-4 text-[13px] font-bold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8BC04] hover:text-black"
                  >
                    Real Estate Ads &amp; Advanced Lead Generation
                  </Link>

                  <Link
                    href="/services/social-media-marketing"
                    className="rounded-xl bg-[#242424] p-4 text-[13px] font-bold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8BC04] hover:text-black"
                  >
                    WhatsApp Integration &amp; Lead Nurturing
                  </Link>

                  <Link
                    href="/services/google-ads-meta-ads"
                    className="rounded-xl bg-[#242424] p-4 text-[13px] font-bold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8BC04] hover:text-black"
                  >
                    Remarketing Campaigns &amp; Detailed Analytics
                  </Link>

                  <Link
                    href="/services/branding"
                    className="rounded-xl bg-[#242424] p-4 text-[13px] font-bold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8BC04] hover:text-black sm:col-span-2"
                  >
                    Realtor Personal Branding
                  </Link>
                </div>
              </div>

              {/* METRIC */}
              <div className="mt-7 rounded-[22px] border border-[#303030] bg-[#181818] p-6 transition-all duration-500 hover:border-[#F8BC04]/40 md:p-7">
                <h3 className="text-[21px] font-black">
                  <Highlight>The Metric That Actually Matters</Highlight>
                </h3>

                <p className="mt-4 text-[14px] leading-[1.8] text-[#BDBDBD]">
                  While standard agencies focus on vanity metrics like
                  &quot;How many Reels did you upload?&quot;,{" "}
                  <strong className="text-white">BIGBEANS DIGITAL</strong>{" "}
                  focuses on the ultimate business question:
                </p>

                <p className="mt-5 rounded-xl bg-[#242424] p-5 text-[18px] font-black text-[#F8BC04]">
                  &quot;How many qualified property enquiries did the marketing
                  generate?&quot;
                </p>
              </div>

              {/* IMPORTANT SALES MESSAGE */}
              <div className="mt-7 rounded-[22px] border-2 border-[#F8BC04] bg-[#181818] p-7 shadow-[0_15px_40px_rgba(248,188,4,0.08)] transition-all duration-500 hover:-translate-y-1 md:p-8">
                <p className="text-[15px] leading-[1.85] text-[#D5D5D5]">
                  Whether you are looking for a leading{" "}
                  <LinkedBold href="/services/social-media-marketing">
                    Real Estate Marketing Agency India
                  </LinkedBold>
                  , a specialized{" "}
                  <LinkedBold href="/services/social-media-marketing">
                    Real Estate Social Media Agency
                  </LinkedBold>
                  , expert <strong>Property Digital Marketing India</strong>, a
                  dedicated{" "}
                  <LinkedBold href="/services/social-media-marketing">
                    Social Media Agency for Builders in India
                  </LinkedBold>
                  , comprehensive{" "}
                  <LinkedBold href="/services/google-ads-meta-ads">
                    Digital Marketing for Real Estate Developers
                  </LinkedBold>
                  , or the{" "}
                  <LinkedBold href="/services/social-media-marketing">
                    Best SMM Company for Property Brokers
                  </LinkedBold>
                  ,{" "}
                  <InternalLink href="/">BIGBEANS DIGITAL</InternalLink> is your
                  ideal partner.
                </p>

                <div className="mt-6 rounded-2xl bg-[#F8BC04] p-6 text-black shadow-[0_12px_30px_rgba(248,188,4,0.16)]">
                  <p className="text-[19px] font-black leading-[1.65] md:text-[21px]">
                    We don&apos;t just sell you content—we build a predictable
                    system that turns your social media posts into verified
                    leads and successful site visits.
                  </p>
                </div>
              </div>
            </section>

            {/* FINAL THOUGHTS */}
            <section className="mb-14">
              <div className="rounded-[26px] border-2 border-[#F8BC04] bg-[#FFF9E8] p-8 shadow-[0_15px_40px_rgba(248,188,4,0.08)] transition-all duration-500 hover:-translate-y-1 md:p-10">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#C48D00]">
                  Final Thoughts
                </span>

                <h2 className="mt-3 text-[28px] font-black leading-[1.16] md:text-[35px]">
                  The Best Real Estate Reels{" "}
                  <Highlight>Drive Action</Highlight>
                </h2>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#444]">
                  The best{" "}
                  <LinkedBold href="/services/social-media-marketing">
                    real estate Reels
                  </LinkedBold>{" "}
                  aren&apos;t measured by view counts, but by their ability to
                  reach the right buyer, answer critical questions, and drive
                  action.
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#444]">
                  Instead of generic captions like &quot;Luxury living
                  awaits,&quot; successful marketing showcases real lifestyles,
                  addresses buyer objections, and builds genuine trust.
                </p>

                <div className="my-7 rounded-2xl bg-[#171717] p-7 text-center">
                  <p className="text-[21px] font-black text-[#F8BC04]">
                    High view counts without calls usually point to a funnel
                    problem rather than simply a content problem.
                  </p>
                </div>

                <p className="text-[15px] leading-[1.85] text-[#444]">
                  And that is where partnering with{" "}
                  <strong>BIGBEANS DIGITAL</strong> as your dedicated{" "}
                  <LinkedBold href="/services/google-ads-meta-ads">
                    Real Estate Lead Generation Company
                  </LinkedBold>{" "}
                  can help transform property content into revenue.
                </p>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#444]">
                  We help builders, developers, brokers, and realtors transform
                  property content into revenue through expert{" "}
                  <LinkedBold href="/services/social-media-marketing">
                    Social Media Marketing
                  </LinkedBold>
                  ,{" "}
                  <LinkedBold href="/services/google-ads-meta-ads">
                    Performance Marketing
                  </LinkedBold>{" "}
                  capabilities, specialized website experiences, and content
                  strategies that turn views into qualified enquiries, site
                  visits, and closed bookings.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="overflow-hidden rounded-[26px] bg-[#111111] p-7 text-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] md:p-9">
              <div className="grid items-center gap-7 md:grid-cols-[1fr_auto]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[2px] text-[#F8BC04]">
                    BIGBEANS DIGITAL
                  </span>

                  <h2 className="mt-3 text-[25px] font-black leading-[1.2] md:text-[32px]">
                    Turn Your Real Estate Reels Into{" "}
                    <Highlight>Qualified Property Leads</Highlight>
                  </h2>

                  <p className="mt-4 max-w-[700px] text-[14px] leading-[1.75] text-[#D4D4D4]">
                    Whether you need{" "}
                    <LinkedBold href="/services/social-media-marketing">
                      Real Estate Social Media Marketing
                    </LinkedBold>
                    ,{" "}
                    <LinkedBold href="/services/google-ads-meta-ads">
                      Performance Marketing
                    </LinkedBold>
                    ,{" "}
                    <LinkedBold href="/services/branding">
                      Branding
                    </LinkedBold>
                    , or conversion-focused{" "}
                    <LinkedBold href="/services/website-development">
                      Website Development
                    </LinkedBold>
                    , the goal is the same: create a system that generates
                    qualified enquiries and drives site visits.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-semibold text-[#E7E7E7]">
                    <span>✓ Real Estate Video Marketing</span>
                    <span>✓ Lead Generation</span>
                    <span>✓ Performance Marketing</span>
                    <span>✓ Social Media Marketing</span>
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
                  Real Estate Marketing
                </p>

                <p className="mt-2 text-[15px] font-extrabold leading-[1.5] text-white">
                  Ready to turn property content into qualified enquiries?
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

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}