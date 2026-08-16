import Image from "next/image";
import Link from "next/link";

const thumbnail =
  "/assets/blog/singleblogs/clinic-instagram-marketing-strategy.png";

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
    image: thumbnail,
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

export default function ClinicInstagramMarketingStrategy() {
  const articleTitle =
    "What Would We Post If We Had to Launch a Clinic in India From Zero on Instagram?";

  const aiPrompt = encodeURIComponent(
    `Summarize this BigBeans Digital blog: "${articleTitle}". Focus on the healthcare Instagram marketing strategy, content pillars, Reels, patient engagement, doctor branding, clinic lead generation, compliance considerations and actionable takeaways.`
  );

  return (
    <main className="overflow-hidden bg-[#FAFAFA] text-[#171717]">
      {/* HERO */}
      <section className="mx-auto max-w-[1380px] px-5 pb-14 pt-8 md:px-8 md:pt-12 lg:px-10 lg:pb-16">
        <div className="grid items-center gap-9 lg:grid-cols-[0.93fr_1.07fr] lg:gap-12">
          {/* HERO CONTENT */}
          <div className="animate-[fadeIn_0.7s_ease-out]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E9E9E9] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#666] shadow-[0_6px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F8BC04]" />
              Healthcare Social Media Marketing
            </div>

            <h1 className="max-w-[610px] text-[40px] font-black leading-[1.04] tracking-[-1.8px] md:text-[49px] lg:text-[55px]">
              What Would We Post If We Had to{" "}
              <Highlight>
                Launch a Clinic in India From Zero on Instagram?
              </Highlight>
            </h1>

            <p className="mt-6 max-w-[570px] text-[15px] leading-[1.75] text-[#4A4A4A] md:text-[16px]">
              A practical healthcare Instagram marketing strategy for clinics,
              doctors and healthcare founders starting from zero in India.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] text-[#666] md:text-[12px]">
              <span>August 17, 2026</span>

              <span className="h-3.5 w-px bg-[#CFCFCF]" />

              <span className="font-extrabold tracking-[0.5px] text-[#171717]">
                BY BIG BEANS DIGITAL
              </span>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Healthcare Marketing",
                "Instagram Strategy",
                "Clinic Growth",
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

          {/* HERO IMAGE */}
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

            {/* INTRO */}
            <section className="mb-14">
              <div className="rounded-[22px] border border-[#E9E9E9] bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.035)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.06)] md:p-9">
                <p className="text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  Launching a clinic is one thing.
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  Getting people to{" "}
                  <strong>
                    notice it, trust it, remember it, and eventually book an
                    appointment
                  </strong>{" "}
                  is another.
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  If we had to launch a new clinic in India from absolute zero
                  on Instagram, we wouldn't begin by posting,{" "}
                  <em>“Grand Opening! Visit Us Today.”</em>
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  We wouldn't spend the first month posting stock photos of
                  doctors either.
                </p>

                <p className="mt-4 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  And we definitely wouldn't try to make every post sell a
                  consultation.
                </p>

                <div className="my-7 rounded-xl border-l-[3px] border-[#F8BC04] bg-[#FFF9E8] px-5 py-4 transition-all duration-300 hover:translate-x-1">
                  <p className="text-[16px] font-extrabold leading-[1.65]">
                    We'd build the Instagram account like we were building the
                    clinic's reputation from scratch.
                  </p>
                </div>

                <p className="text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  Because for a new clinic, Instagram isn't just another social
                  media platform. It can become a powerful part of the
                  clinic's{" "}
                  <strong>
                    healthcare online presence, patient education, local brand
                    awareness, and patient acquisition strategy
                  </strong>{" "}
                  when it is planned properly.
                </p>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#383838] md:text-[16px]">
                  At{" "}
                  <Link
                    href="/"
                    className="font-bold text-[#B57F00] no-underline transition-colors duration-200 hover:text-[#171717]"
                  >
                    Big Beans Digital
                  </Link>
                  , our approach would be simple:
                </p>

                <div className="mt-5 rounded-2xl bg-[#171717] p-5 text-center text-[15px] font-extrabold leading-[1.7] text-white transition-all duration-300 hover:scale-[1.01]">
                  <span className="text-[#F8BC04]">Educate</span>
                  <span className="mx-1.5 text-white/30">→</span>
                  <span className="text-[#F8BC04]">Build familiarity</span>
                  <span className="mx-1.5 text-white/30">→</span>
                  <span className="text-[#F8BC04]">Establish trust</span>
                  <span className="mx-1.5 text-white/30">→</span>
                  <span className="text-[#F8BC04]">
                    Create local relevance
                  </span>
                  <span className="mx-1.5 text-white/30">→</span>
                  <span className="text-[#F8BC04]">
                    Generate enquiries
                  </span>
                </div>

                <p className="mt-6 text-[15px] font-bold leading-[1.8]">
                  Here's exactly what we'd post.
                </p>
              </div>
            </section>

            {/* 1 */}
            <section className="mb-14">
              <SectionTitle number="01">
                First, We'd Build the Clinic's{" "}
                <Highlight>Instagram Foundation</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                Before creating a single Reel, we'd make sure the profile itself
                answers five questions:
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Who are you?",
                  "What do you specialize in?",
                  "Where are you located?",
                  "Who do you help?",
                  "What should someone do next?",
                ].map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 rounded-xl border border-[#E8E8E8] bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFF3C5] text-[#E2A500] transition-transform duration-300 group-hover:scale-110">
                      <CheckIcon />
                    </span>

                    <span className="text-[14px] font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
                  <h3 className="text-[18px] font-extrabold">
                    What the Profile Could Include
                  </h3>

                  <div className="mt-5 space-y-4 text-[14px] leading-[1.7] text-[#555]">
                    <p>
                      <strong className="text-[#171717]">Name:</strong>
                      <br />
                      Clinic Name | Specialty | City
                    </p>

                    <p>
                      <strong className="text-[#171717]">Bio:</strong>
                      <br />
                      Specialized healthcare for [target patient group]
                      <br />
                      Evidence-based care | [Location]
                      <br />
                      Appointments & enquiries ↓
                    </p>

                    <p>
                      <strong className="text-[#171717]">Link:</strong>
                      <br />
                      Appointment booking / clinic website / enquiry page
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(248,188,4,0.12)]">
                  <h3 className="text-[18px] font-extrabold">
                    <Highlight>Highlights</Highlight>
                  </h3>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      "About Us",
                      "Doctors",
                      "Services",
                      "Location",
                      "FAQs",
                      "Timings",
                      "Contact",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl bg-white px-3 py-3 text-center text-[13px] font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                This may look basic, but it is important.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Imagine someone discovers your Reel, visits your profile and
                still doesn't understand what your clinic does.
              </p>

              <div className="mt-5 rounded-2xl bg-[#171717] p-6 text-white transition-all duration-300 hover:scale-[1.01]">
                <p className="text-[17px] font-extrabold leading-[1.5]">
                  You've earned the view but lost the opportunity.
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                That's why Instagram should work alongside your{" "}
                <Link
                  href="/services/website-development"
                  className="font-bold text-[#B57F00] no-underline transition-colors hover:text-[#171717]"
                >
                  website
                </Link>
                , Google Business Profile, and other digital channels as part
                of a broader <strong>clinic marketing</strong> strategy.
              </p>
            </section>

            {/* 2 */}
            <section className="mb-14">
              <SectionTitle number="02">
                We Wouldn't Start With{" "}
                <Highlight>Promotional Posts</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                This is probably the biggest mistake we'd avoid.
              </p>

              <div className="mt-6 rounded-2xl bg-[#171717] p-7 text-white transition-all duration-300 hover:-translate-y-1">
                <p className="text-[18px] font-extrabold leading-[1.5]">
                  A new clinic has almost no social proof.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    "Nobody knows the doctor.",
                    "Nobody knows the clinic.",
                    "Nobody knows whether the clinic is trustworthy.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 text-[13px] font-semibold leading-[1.6] transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                So aggressively promoting consultations from Day 1 is usually
                the wrong approach.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Instead, we'd use the first few weeks to answer the questions
                potential patients already have.
              </p>

              <h3 className="mt-8 text-[20px] font-extrabold">
                Example: <Highlight>Dermatology Clinic Content</Highlight>
              </h3>

              <div className="mt-5 grid gap-3">
                {[
                  "5 skincare mistakes dermatologists see every week",
                  "Is your acne actually getting worse because of your routine?",
                  "When should you see a dermatologist for hair fall?",
                  "Can sunscreen really prevent pigmentation?",
                  "What should you know before starting acne treatment?",
                ].map((item) => (
                  <div
                    key={item}
                    className="group rounded-xl border border-[#E8E8E8] bg-white px-5 py-4 text-[14px] font-semibold transition-all duration-300 hover:translate-x-1 hover:border-[#F8BC04] hover:shadow-[0_8px_22px_rgba(0,0,0,0.04)]"
                  >
                    <span className="mr-2 text-[#F8BC04]">→</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] px-6 py-5 transition-all duration-300 hover:translate-x-1">
                <p className="text-[15px] leading-[1.8] text-[#444]">
                  The objective isn't to diagnose people through Instagram.
                </p>

                <p className="mt-2 text-[17px] font-extrabold leading-[1.6]">
                  The objective is to demonstrate{" "}
                  <Highlight>knowledge, clarity, and credibility.</Highlight>
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                That distinction matters in healthcare marketing.
              </p>
            </section>

            {/* 3 */}
            <section className="mb-14">
              <SectionTitle number="03">
                We'd Introduce the Doctor — But Not Like a{" "}
                <Highlight>Celebrity</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                People don't only choose clinics.
              </p>

              <div className="my-6 rounded-2xl bg-[#171717] p-7 text-white transition-all duration-300 hover:scale-[1.01]">
                <p className="text-[20px] font-extrabold leading-[1.5]">
                  They choose people they feel comfortable trusting.
                </p>
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                So <strong>doctor personal branding</strong> would become an
                important part of the content strategy.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                But we wouldn't create exaggerated posts such as:
              </p>

              <div className="my-5 rounded-xl border border-[#E8E8E8] bg-white p-5 text-[17px] font-extrabold shadow-[0_6px_22px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1">
                “India's No. 1 Dermatologist!”
              </div>

              <h3 className="mt-8 text-[20px] font-extrabold">
                Post Idea: <Highlight>“Meet Dr. [Name]”</Highlight>
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Qualification",
                  "Specialty",
                  "Areas of clinical interest",
                  "Years of experience, where appropriate",
                  "Why they entered the field",
                  "What patients can expect during consultation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[#E8E8E8] bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]"
                  >
                    <span className="text-[#F8BC04]">✓</span>
                    <span className="text-[14px] font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6 transition-all duration-300 hover:-translate-y-1">
                <p className="text-[15px] leading-[1.8] text-[#444]">
                  Then create a Reel around:
                </p>

                <p className="mt-3 text-[19px] font-extrabold leading-[1.5]">
                  “3 things I wish every patient knew before their first
                  consultation.”
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                This creates authority without turning the account into a
                personal advertising billboard.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                For doctors, this approach can become a core part of{" "}
                <strong>SMM services for doctors</strong> and long-term medical
                practice growth.
              </p>
            </section>

            {/* 4 */}
            <section className="mb-14">
              <SectionTitle number="04">
                We'd Create <Highlight>5 Core Content Pillars</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                Instead of randomly deciding what to post every morning, we'd
                build a repeatable content system.
              </p>

              <p className="mt-5 text-[15px] font-bold leading-[1.8]">
                Our five pillars would be:
              </p>

              <div className="mt-7 space-y-5">
                {[
                  {
                    title: "Pillar 1: Patient Education",
                    items: [
                      "Symptoms people shouldn't ignore",
                      "Common misconceptions",
                      "Prevention tips",
                      "Treatment myths",
                      "Frequently asked questions",
                      "When to consult a specialist",
                      "Healthy lifestyle education",
                    ],
                    note: "The content should always remain within the doctor's legitimate area of expertise.",
                  },
                  {
                    title: "Pillar 2: Doctor Authority",
                    items: [
                      "Doctor introductions",
                      "Professional background",
                      "Educational opinions",
                      "“Doctor explains” Reels",
                      "Common questions answered",
                      "Behind-the-scenes professional moments",
                    ],
                  },
                  {
                    title: "Pillar 3: Clinic Experience",
                    items: [
                      "Reception",
                      "Waiting area",
                      "Consultation environment",
                      "Clinic location",
                      "Staff introductions",
                      "Appointment process",
                      "Accessibility information",
                      "Operating hours",
                    ],
                    note: "People want to know what happens after they book.",
                  },
                  {
                    title: "Pillar 4: Community & Local Content",
                    items: [],
                    paragraph:
                      "A clinic doesn't serve “India.” It serves people in a particular area.",
                    extra:
                      "If the clinic is in Mumbai, we'd create content relevant to people searching for healthcare locally. If it's in Bengaluru, we'd build Bengaluru relevance. If it's in Delhi, we'd build local awareness around the clinic's service area.",
                  },
                  {
                    title: "Pillar 5: Conversion Content",
                    items: [
                      "Now accepting appointments",
                      "Book your consultation",
                      "New clinic opening this Saturday",
                      "Appointments available this week",
                      "How to reach our clinic",
                    ],
                    note: "The selling shouldn't dominate the account. It should have a clear place within the overall content mix.",
                  },
                ].map((pillar, index) => (
                  <div
                    key={pillar.title}
                    className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(0,0,0,0.05)] ${
                      index === 4
                        ? "border-2 border-[#F8BC04] bg-[#FFF9E8]"
                        : "border-[#E8E8E8] bg-white"
                    }`}
                  >
                    <h3 className="text-[19px] font-extrabold">
                      {pillar.title.split(":")[0]}:{" "}
                      <Highlight>
                        {pillar.title.split(":").slice(1).join(":").trim()}
                      </Highlight>
                    </h3>

                    {pillar.paragraph && (
                      <p className="mt-4 text-[15px] leading-[1.8] text-[#555]">
                        {pillar.paragraph}
                      </p>
                    )}

                    {pillar.extra && (
                      <p className="mt-4 text-[15px] leading-[1.8] text-[#555]">
                        {pillar.extra}
                      </p>
                    )}

                    {pillar.items.length > 0 && (
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {pillar.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-xl bg-[#FAFAFA] px-4 py-3 transition-all duration-200 hover:-translate-y-0.5"
                          >
                            <span className="text-[#F8BC04]">✓</span>
                            <span className="text-[14px] font-semibold">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {index === 3 && (
                      <div className="mt-5 rounded-xl bg-[#FFF9E8] p-5">
                        <p className="text-[15px] font-bold">
                          “Looking for a dermatologist in [Area]?”
                        </p>
                      </div>
                    )}

                    {pillar.note && (
                      <p className="mt-5 text-[14px] leading-[1.7] text-[#666]">
                        {pillar.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 5 */}
            <section className="mb-14">
              <SectionTitle number="05">
                We'd Make Instagram Reels the Main{" "}
                <Highlight>Discovery Format</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                If we're starting from zero, we'd want content that has the
                potential to reach people who don't already follow the clinic.
              </p>

              <div className="mt-6 rounded-2xl bg-[#171717] p-7 text-white transition-all duration-300 hover:-translate-y-1">
                <p className="text-[18px] font-extrabold leading-[1.5]">
                  That's why{" "}
                  <strong className="text-[#F8BC04]">
                    Healthcare Instagram Reels creation
                  </strong>{" "}
                  would be a major part of our strategy.
                </p>

                <p className="mt-3 text-[14px] leading-[1.75] text-[#D5D5D5]">
                  But we wouldn't make Reels simply because “Reels get views.”
                </p>
              </div>

              <p className="mt-6 text-[16px] font-bold leading-[1.8]">
                Every Reel would have a job.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "Reel Format 1: Doctor Answers a Question",
                    hook: "“Doctor, is hair fall after a stressful period normal?”",
                    text: "Then provide a concise educational answer.",
                  },
                  {
                    title: "Reel Format 2: Myth vs Fact",
                    hook: "“Does oily skin mean you don't need moisturizer?”",
                    text: "Then explain.",
                  },
                  {
                    title: "Reel Format 3: Three Things to Know",
                    hook: "“3 things parents should know about recurring fever in children.”",
                    text: "",
                  },
                  {
                    title: "Reel Format 4: Clinic Walkthrough",
                    hook: "",
                    text: "Show the clinic from entrance to consultation room.",
                  },
                  {
                    title: "Reel Format 5: Doctor's Perspective",
                    hook: "“Something I wish more patients knew before their first consultation.”",
                    text: "",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E8E8E8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                  >
                    <h3 className="text-[17px] font-extrabold">
                      {item.title}
                    </h3>

                    {item.hook && (
                      <div className="mt-4 rounded-xl bg-[#FFF9E8] p-4 text-[15px] font-bold leading-[1.6] transition-all duration-300 hover:translate-x-1">
                        {item.hook}
                      </div>
                    )}

                    {item.text && (
                      <p className="mt-3 text-[14px] leading-[1.7] text-[#666]">
                        {item.text}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                These formats are simple, repeatable, and don't require a
                massive production budget.
              </p>
            </section>

            {/* 6 */}
            <section className="mb-14">
              <SectionTitle number="06">
                We'd Use Carousels to Build{" "}
                <Highlight>Saves and Shares</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                Not everything needs to be a Reel.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Some healthcare topics are better explained through carousels.
              </p>

              <div className="mt-6 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-7 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-[20px] font-extrabold">
                  “7 Questions to Ask Before{" "}
                  <Highlight>Choosing a Specialist</Highlight>”
                </h3>

                <div className="mt-5 space-y-3">
                  {[
                    "Slide 1: Strong headline",
                    "Slide 2–8: One practical question per slide",
                    "Final slide: “Save this before your next consultation.”",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl bg-white p-4 transition-all duration-200 hover:translate-x-1"
                    >
                      <span className="text-[#F8BC04]">✓</span>
                      <span className="text-[14px] font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="mt-8 text-[20px] font-extrabold">
                Other <Highlight>Carousel Ideas</Highlight>
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "5 signs you shouldn't ignore",
                  "What to bring to your first consultation",
                  "A simple guide to understanding your lab report",
                  "Common misconceptions about [condition]",
                  "What happens during your first clinic visit?",
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

            {/* 7 */}
            <section className="mb-14">
              <SectionTitle number="07">
                We'd Show the Clinic Before Asking People to{" "}
                <Highlight>Visit It</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                Imagine discovering a clinic you've never heard of.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "There are 20 posts.",
                  "But you can't see the clinic.",
                  "You don't know what the reception looks like.",
                  "You don't know where it is.",
                  "You don't know what the consultation environment feels like.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#E8E8E8] bg-white p-5 text-[14px] font-semibold leading-[1.6] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.04)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-white transition-all duration-300 hover:scale-[1.01]">
                <p className="text-[20px] font-extrabold leading-[1.5]">
                  That's a missed opportunity.
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                So we'd create a simple{" "}
                <strong>clinic walkthrough Reel</strong>.
              </p>

              <div className="my-5 rounded-xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] p-5 text-[18px] font-extrabold">
                “Welcome to [Clinic Name]. Here's what your{" "}
                <Highlight>first visit looks like.</Highlight>”
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Entrance",
                  "Reception",
                  "Waiting area",
                  "Consultation room",
                  "Key facilities",
                  "Location",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.07)]"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F8BC04] text-xs font-extrabold text-black">
                      {index + 1}
                    </span>

                    <span className="text-[14px] font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                This is less about showing off the interior and more about
                reducing uncertainty.
              </p>
            </section>

            {/* 8 */}
            <section className="mb-14">
              <SectionTitle number="08">
                We'd Create Content Around{" "}
                <Highlight>Real Patient Questions</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                One of the easiest ways to build a useful content calendar is
                to listen to the front desk.
              </p>

              <div className="mt-6 rounded-2xl bg-[#171717] p-7 text-white transition-all duration-300 hover:-translate-y-1">
                <p className="text-[18px] font-extrabold leading-[1.5]">
                  Every day, patients ask questions.
                </p>

                <p className="mt-2 text-[15px] leading-[1.7] text-[#D5D5D5]">
                  Those questions can become content topics.
                </p>
              </div>

              <div className="mt-7 space-y-4">
                {[
                  {
                    question: "Do I need an appointment?",
                    answer: "Instagram post.",
                  },
                  {
                    question: "How long does a consultation take?",
                    answer: "Story + FAQ highlight.",
                  },
                  {
                    question: "Should I bring my previous reports?",
                    answer: "Carousel.",
                  },
                  {
                    question: "Do you offer teleconsultation?",
                    answer: "Story + Reel.",
                  },
                ].map((item) => (
                  <div
                    key={item.question}
                    className="grid gap-4 rounded-2xl border border-[#E8E8E8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] md:grid-cols-[1fr_auto]"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[1.3px] text-[#888]">
                        Patient asks
                      </span>

                      <p className="mt-2 text-[16px] font-extrabold">
                        “{item.question}”
                      </p>
                    </div>

                    <div className="flex items-center rounded-xl bg-[#FFF9E8] px-5 py-3 text-[14px] font-bold">
                      → {item.answer}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[15px] leading-[1.8] text-[#444]">
                  This turns Instagram into a reflection of actual patient
                  concerns rather than a collection of generic healthcare
                  posts.
                </p>

                <p className="mt-3 text-[18px] font-extrabold">
                  That's a much stronger{" "}
                  <Highlight>patient engagement strategy.</Highlight>
                </p>
              </div>
            </section>

            {/* 9 */}
            <section className="mb-14">
              <SectionTitle number="09">
                We'd <Highlight>Localize the Content</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                A clinic's Instagram strategy shouldn't feel like it could
                belong to any clinic in India.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  {
                    city: "Pune",
                    text: "Create content with a Pune audience in mind.",
                  },
                  {
                    city: "Hyderabad",
                    text: "Incorporate Hyderabad context where relevant.",
                  },
                  {
                    city: "Delhi",
                    text: "Build local awareness around the clinic's service area.",
                  },
                ].map((item) => (
                  <div
                    key={item.city}
                    className="rounded-2xl border border-[#E8E8E8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                  >
                    <h3 className="text-[18px] font-extrabold">
                      {item.city}
                    </h3>

                    <p className="mt-3 text-[14px] leading-[1.7] text-[#666]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[17px] font-extrabold">
                  “Looking for a dermatologist in <Highlight>[Area]?</Highlight>
                  ”
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                This can be useful when written naturally and supported by
                genuinely local information.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                This can complement <strong>local SEO efforts</strong> and
                terms such as:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Healthcare marketing agency near me",
                  "Doctor marketing near me",
                  "Clinic SMM company near me",
                  "Local medical SMM agency",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white px-5 py-4 text-[14px] font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                The important thing is not to turn every caption into a
                keyword list.
              </p>

              <div className="mt-5 rounded-2xl bg-[#171717] p-6 text-white">
                <p className="text-[16px] font-extrabold leading-[1.6]">
                  Local relevance should come from the actual clinic, its
                  location, patients, community and services.
                </p>
              </div>
            </section>

            {/* 10 */}
            <section className="mb-14">
              <SectionTitle number="10">
                We'd Use <Highlight>Stories Every Day</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                Feed posts help discovery.
              </p>

              <div className="my-5 rounded-2xl bg-[#171717] p-6 text-white">
                <p className="text-[20px] font-extrabold">
                  Stories help familiarity.
                </p>
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                For a new clinic, that's extremely valuable.
              </p>

              <h3 className="mt-8 text-[20px] font-extrabold">
                Daily <Highlight>Story Ideas</Highlight>
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Polls",
                  "Health questions",
                  "Doctor Q&A",
                  "Clinic timings",
                  "Appointment reminders",
                  "Behind-the-scenes moments",
                  "“Ask the doctor”",
                  "Educational snippets",
                  "Clinic location",
                  "Frequently asked questions",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#E8E8E8] bg-white px-4 py-4 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[15px] font-bold">Story 1:</p>

                <p className="mt-2 text-[15px] font-semibold">
                  “What's your biggest skincare concern?”
                </p>

                <p className="mt-5 text-[15px] font-bold">Story 2:</p>

                <p className="mt-2 text-[15px] font-semibold">
                  Poll: Acne / Pigmentation / Hair fall / Other
                </p>

                <p className="mt-5 text-[15px] font-bold">Story 3:</p>

                <p className="mt-2 text-[15px] font-semibold">
                  Doctor answers the most common response.
                </p>
              </div>

              <p className="mt-6 text-[15px] font-extrabold leading-[1.8]">
                Now Instagram becomes a conversation rather than a notice
                board.
              </p>
            </section>

            {/* 11 */}
            <section className="mb-14">
              <SectionTitle number="11">
                We'd Turn One Doctor's Answer Into{" "}
                <Highlight>Multiple Pieces of Content</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                Content production becomes much easier when you stop treating
                every post as a separate project.
              </p>

              <div className="mt-6 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[18px] font-extrabold leading-[1.5]">
                  Suppose a doctor records a 10-minute conversation about
                  diabetes management.
                </p>
              </div>

              <p className="mt-7 text-[15px] font-semibold text-[#555]">
                From that one recording, we could create:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "3 Reels",
                  "1 carousel",
                  "5 Story snippets",
                  "1 FAQ",
                  "1 blog topic",
                  "1 website FAQ section",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[#E8E8E8] bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]"
                  >
                    <span className="text-[#F8BC04]">✓</span>
                    <span className="text-[14px] font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[17px] font-extrabold leading-[1.6]">
                  This is how a professional{" "}
                  <Highlight>Healthcare SMM</Highlight> strategy becomes
                  sustainable.
                </p>
              </div>
            </section>

            {/* 12 */}
            <section className="mb-14">
              <SectionTitle number="12">
                We'd Be Very Careful With Testimonials and{" "}
                <Highlight>Patient Content</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                This is where healthcare social media requires more care than
                ordinary business marketing.
              </p>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
                A normal brand might aggressively collect testimonials,
                before-and-after images and customer success stories.
              </p>

              <div className="mt-6 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[18px] font-extrabold leading-[1.6]">
                  A medical practice cannot simply copy that approach.
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                Medical marketing needs a higher standard of responsibility.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                The NMC's published professional-conduct material places
                restrictions around advertising, patient solicitation and
                publicity. The NMC's published social-media guidance also
                emphasizes truthful, professional communication and cautions
                against sharing patient photographs, treatment discussions and
                patient testimonials or endorsements on social media.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Educational content",
                  "Accurate information",
                  "Professional credibility",
                  "Clinic information",
                  "Patient experience information that is appropriate to publish",
                  "Local visibility",
                  "Clear appointment pathways",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-[#E8E8E8] bg-white p-4 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="text-[#F8BC04]">✓</span>
                    <span className="text-[14px] font-semibold leading-[1.6]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[15px] font-bold leading-[1.8] text-[#444]">
                  We wouldn't blindly copy tactics from beauty, fitness or
                  e-commerce brands.
                </p>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  We'd review healthcare advertising and professional-conduct
                  requirements before launching paid campaigns or publishing
                  sensitive patient-related content.
                </p>
              </div>
            </section>

            {/* 13 */}
            <section className="mb-14">
              <SectionTitle number="13">
                We'd Avoid the <Highlight>“Before & After” Trap</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                A new clinic might think:
              </p>

              <div className="my-5 rounded-xl bg-[#171717] p-5 text-center text-[18px] font-extrabold text-white">
                “If we show dramatic results, we'll get patients.”
              </div>

              <p className="text-[15px] leading-[1.85] text-[#555]">
                That's not the strategy we'd build.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Medical marketing needs a higher standard of responsibility.
              </p>

              <h3 className="mt-8 text-[20px] font-extrabold">
                Instead of Making{" "}
                <Highlight>Dramatic Outcome Claims</Highlight>
              </h3>

              <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                We'd explain:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "What the treatment is",
                  "Who it may be appropriate for",
                  "What patients should discuss with a qualified professional",
                  "What the consultation process involves",
                  "What factors influence treatment decisions",
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

            {/* 14 */}
            <section className="mb-14">
              <SectionTitle number="14">
                We'd Build a Strong “Why Choose Us?” Without Saying{" "}
                <Highlight>“We're the Best”</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                There are thousands of healthcare businesses competing for
                attention.
              </p>

              <div className="mt-6 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[19px] font-extrabold">But saying:</p>

                <p className="mt-3 text-[20px] font-black text-[#F8BC04]">
                  “We are the best clinic in India.”
                </p>

                <p className="mt-3 text-[15px] text-[#D5D5D5]">
                  doesn't create trust.
                </p>
              </div>

              <p className="mt-7 text-[15px] leading-[1.85] text-[#555]">
                We'd demonstrate differentiation instead.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
                  <span className="text-[10px] font-bold uppercase tracking-[1.3px] text-[#888]">
                    Instead of
                  </span>

                  <p className="mt-4 text-[17px] font-extrabold">
                    “Best dental clinic in the city.”
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                  <span className="text-[10px] font-bold uppercase tracking-[1.3px] text-[#C48D00]">
                    We'd say
                  </span>

                  <p className="mt-4 text-[17px] font-extrabold">
                    “Here's what your first consultation at our clinic looks
                    like.”
                  </p>
                </div>
              </div>

              <p className="mt-7 text-[15px] font-semibold text-[#555]">
                Instead of:
              </p>

              <div className="my-4 rounded-xl bg-white p-5 text-[16px] font-extrabold shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                “Expert doctors. Best treatment.”
              </div>

              <p className="text-[15px] font-semibold text-[#555]">
                We'd explain:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "The doctor's qualifications",
                  "Areas of expertise",
                  "Consultation process",
                  "Available services",
                  "Clinic facilities",
                  "Appointment process",
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

              <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-center text-white">
                <p className="text-[23px] font-black">
                  <Highlight>Proof beats adjectives.</Highlight>
                </p>
              </div>
            </section>

            {/* 15 */}
            <section className="mb-14">
              <SectionTitle number="15">
                We'd Track <Highlight>More Than Followers</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                A clinic doesn't need 100,000 followers to succeed.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                If an account has 5,000 followers but generates qualified
                appointment enquiries, it may be much more valuable than an
                account with 100,000 followers and no meaningful business
                outcome.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {[
                  {
                    title: "Awareness Metrics",
                    items: [
                      "Reach",
                      "Profile visits",
                      "Video views",
                      "Non-follower reach",
                    ],
                  },
                  {
                    title: "Engagement Metrics",
                    items: [
                      "Saves",
                      "Shares",
                      "Comments",
                      "Story interactions",
                    ],
                  },
                  {
                    title: "Lead Metrics",
                    items: [
                      "DM enquiries",
                      "Website clicks",
                      "Appointment enquiries",
                      "Calls",
                      "WhatsApp enquiries",
                    ],
                  },
                  {
                    title: "Business Metrics",
                    items: [
                      "Qualified patient enquiries",
                      "Consultation bookings",
                      "Show-up rate",
                      "Cost per lead",
                      "Cost per qualified enquiry",
                      "Revenue attributable to campaigns",
                    ],
                  },
                ].map((box, index) => (
                  <div
                    key={box.title}
                    className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] ${
                      index === 3
                        ? "border-2 border-[#F8BC04] bg-[#FFF9E8]"
                        : "border-[#E8E8E8] bg-white"
                    }`}
                  >
                    <h3 className="text-[19px] font-extrabold">
                      <Highlight>{box.title}</Highlight>
                    </h3>

                    <div className="mt-5 grid gap-3">
                      {box.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-xl bg-[#FAFAFA] px-4 py-3 text-[14px] font-semibold transition-all duration-200 hover:translate-x-1"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[18px] font-extrabold leading-[1.5]">
                  That's where{" "}
                  <strong>ROI on hospital social media</strong> and broader{" "}
                  <strong>hospital digital ROI</strong> thinking becomes
                  important.
                </p>

                <p className="mt-3 text-[15px] font-semibold text-[#F8BC04]">
                  Social media shouldn't be judged only by likes.
                </p>
              </div>
            </section>

            {/* 16 */}
            <section className="mb-14">
              <SectionTitle number="16">
                We'd Eventually Introduce{" "}
                <Highlight>Paid Promotion</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                Organic content should establish what resonates.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                Once we know which topics, audiences and creatives are
                producing meaningful engagement or enquiries, we can consider
                paid distribution.
              </p>

              <h3 className="mt-8 text-[20px] font-extrabold">
                Potential <Highlight>Campaign Objectives</Highlight>
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Local awareness",
                  "Website traffic",
                  "Appointment enquiries",
                  "Consultation lead generation",
                  "Event or clinic-launch awareness",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[#E8E8E8] bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]"
                  >
                    <span className="text-[#F8BC04]">✓</span>
                    <span className="text-[14px] font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] p-6">
                <p className="text-[15px] leading-[1.8] text-[#444]">
                  But paid medical advertising requires careful review.
                </p>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#444]">
                  We would not simply take an ordinary e-commerce Facebook Ads
                  strategy and apply it to healthcare.
                </p>

                <p className="mt-3 text-[15px] font-bold leading-[1.8] text-[#444]">
                  The creative, claims, targeting, landing page and conversion
                  process all need to be evaluated carefully.
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                For businesses that need paid acquisition alongside social
                strategy, our{" "}
                <Link
                  href="/services/google-ads-meta-ads"
                  className="font-bold text-[#B57F00] no-underline transition-colors hover:text-[#171717]"
                >
                  Google Ads and Meta Ads services
                </Link>{" "}
                can support the wider digital marketing system.
              </p>
            </section>

            {/* 17 */}
            <section className="mb-14">
              <SectionTitle number="17">
                We'd Create a <Highlight>Content Funnel</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                The Instagram account would effectively have three levels.
              </p>

              <div className="mt-7 space-y-5">
                {[
                  {
                    label: "Top of Funnel",
                    title: "Get Attention",
                    items: [
                      "Reels",
                      "Myths",
                      "Health tips",
                      "Educational videos",
                      "Local awareness content",
                    ],
                    goal: "Reach new people.",
                  },
                  {
                    label: "Middle of Funnel",
                    title: "Build Trust",
                    items: [
                      "Doctor introductions",
                      "FAQs",
                      "Clinic walkthroughs",
                      "Educational carousels",
                      "Professional expertise",
                      "Clinic experience",
                    ],
                    goal: "Give people a reason to remember the clinic.",
                  },
                  {
                    label: "Bottom of Funnel",
                    title: "Generate Action",
                    items: [
                      "Appointment information",
                      "Consultation process",
                      "Clinic timings",
                      "Location",
                      "Service information",
                      "Enquiry pathways",
                    ],
                    goal: "Make taking the next step easy.",
                  },
                ].map((funnel, index) => (
                  <div
                    key={funnel.title}
                    className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] ${
                      index === 2
                        ? "border-2 border-[#F8BC04] bg-[#FFF9E8]"
                        : "border-[#E8E8E8] bg-white"
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#888]">
                      {funnel.label}
                    </span>

                    <h3 className="mt-2 text-[21px] font-extrabold">
                      <Highlight>{funnel.title}</Highlight>
                    </h3>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {funnel.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-xl bg-[#FAFAFA] px-4 py-3 text-[14px] font-semibold transition-all duration-200 hover:translate-x-1"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-xl bg-[#171717] p-4 text-white">
                      <strong>Goal:</strong> {funnel.goal}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-center text-white">
                <p className="text-[19px] font-extrabold leading-[1.5]">
                  This is much more strategic than simply saying:
                </p>

                <p className="mt-3 text-[20px] font-black text-[#F8BC04]">
                  “Post three times a week.”
                </p>
              </div>
            </section>

            {/* 18 */}
            <section className="mb-14">
              <SectionTitle number="18">
                What We Would <Highlight>NOT Post</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                If we were launching a clinic from zero, we'd actively avoid
                several types of content.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  {
                    title: "Generic stock photos every day",
                    text: "A stock photo of a smiling doctor doesn't build a memorable clinic brand.",
                  },
                  {
                    title: "Constant promotional graphics",
                    text: "“Book Now” cannot be the answer to every content problem.",
                  },
                  {
                    title: "Unsupported medical claims",
                    text: "Healthcare communication needs accuracy.",
                  },
                  {
                    title: "Fake urgency",
                    text: "“Only 2 slots left! Book immediately!” We wouldn't manufacture urgency.",
                  },
                  {
                    title: "Purchased followers",
                    text: "Numbers don't equal patients.",
                  },
                  {
                    title:
                      "Patient content without appropriate permission and safeguards",
                    text: "Healthcare privacy is not something to compromise for engagement.",
                  },
                  {
                    title: "Copying competitors",
                    text: "The clinic needs its own positioning and voice.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E8E8E8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-[0_10px_25px_rgba(0,0,0,0.04)]"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#171717] text-sm font-black text-[#F8BC04]">
                        ×
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
                <p className="text-[15px] leading-[1.8] text-[#444]">
                  The NMC's published social-media guidance specifically
                  cautions registered medical practitioners against purchasing
                  likes/followers or paying to manipulate search rankings.
                </p>
              </div>
            </section>

            {/* 19 */}
            <section className="mb-14">
              <SectionTitle number="19">
                If We Had Only <Highlight>₹30,000 for the First Month</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                We wouldn't spend the entire amount on ads.
              </p>

              <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
                We'd first invest in building the foundation.
              </p>

              <div className="mt-7 overflow-hidden rounded-[22px] border border-[#E7E7E7] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.035)]">
                <div className="divide-y divide-[#EEEEEE]">
                  {[
                    ["Content strategy & planning", "₹5,000"],
                    ["Photo/video shoot", "₹8,000"],
                    ["Reels & creative production", "₹7,000"],
                    ["Community management", "₹3,000"],
                    ["Initial paid promotion", "₹5,000"],
                    ["Total", "₹28,000"],
                  ].map(([label, amount], index) => (
                    <div
                      key={label}
                      className={`flex items-center justify-between gap-5 px-5 py-4 transition-colors duration-200 hover:bg-[#FFF9E8] ${
                        index === 5 ? "bg-[#FFF9E8] font-extrabold" : ""
                      }`}
                    >
                      <span className="text-[14px]">{label}</span>
                      <span className="text-[14px]">{amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-[15px] leading-[1.85] text-[#555]">
                The exact budget would depend on the city, specialty,
                production requirements and campaign objectives.
              </p>

              <div className="mt-5 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[17px] font-extrabold leading-[1.6]">
                  The point is that we'd prioritize{" "}
                  <Highlight>
                    creative assets and a repeatable content system
                  </Highlight>{" "}
                  before pouring money into advertising.
                </p>
              </div>
            </section>

            {/* 20 */}
            <section className="mb-14">
              <SectionTitle number="20">
                What We'd Want the Instagram Account to Look Like After{" "}
                <Highlight>90 Days</Highlight>
              </SectionTitle>

              <p className="text-[15px] leading-[1.85] text-[#444] md:text-[16px]">
                After three months, we wouldn't necessarily judge success by
                follower count.
              </p>

              <p className="mt-5 text-[15px] font-semibold leading-[1.8] text-[#555]">
                We'd want someone in the clinic's target area to encounter the
                account and quickly understand:
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Who the clinic is.",
                  "What it specializes in.",
                  "Who the doctors are.",
                  "What the clinic experience is like.",
                  "What questions the clinic can help them understand.",
                  "Where the clinic is located.",
                  "How to make an appointment.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-[#E8E8E8] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFF3C5] text-[#E2A500]">
                      <CheckIcon />
                    </span>

                    <span className="text-[14px] font-semibold leading-[1.6]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[21px] font-black leading-[1.4]">
                  That's what a useful healthcare Instagram presence looks
                  like.
                </p>
              </div>
            </section>

            {/* BIG IDEA */}
            <section className="mb-14">
              <div className="rounded-[26px] bg-[#171717] p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(0,0,0,0.17)] md:p-10">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full bg-[#F8BC04]" />

                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#F8BC04]">
                    The Big Idea
                  </span>
                </div>

                <h2 className="text-[27px] font-black leading-[1.16] md:text-[34px]">
                  Don't Launch the Instagram Page.{" "}
                  <Highlight>Launch the Clinic's Reputation.</Highlight>
                </h2>

                <p className="mt-5 text-[15px] leading-[1.8] text-[#D5D5D5]">
                  If we had to launch a clinic in India from zero, our strategy
                  wouldn't be:
                </p>

                <div className="my-5 rounded-xl bg-white/5 p-5 text-[18px] font-extrabold">
                  “Let's make 30 Instagram posts.”
                </div>

                <p className="text-[15px] leading-[1.8] text-[#D5D5D5]">
                  It would be:
                </p>

                <div className="my-5 rounded-xl border border-[#F8BC04]/40 bg-[#F8BC04]/10 p-5 text-[18px] font-extrabold text-[#F8BC04]">
                  “Let's give potential patients 30 reasons to understand,
                  remember and trust this clinic.”
                </div>

                <p className="text-[15px] leading-[1.8] text-[#D5D5D5]">
                  That's the difference between content creation and healthcare
                  social media marketing.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#D5D5D5]">
                  A successful clinic account should not feel like an
                  advertisement channel.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#D5D5D5]">
                  It should feel like a reliable extension of the clinic's
                  expertise and patient experience.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#D5D5D5]">
                  And when Instagram is connected with a strong{" "}
                  <Link
                    href="/services/website-development"
                    className="font-bold text-white no-underline transition-colors hover:text-[#F8BC04]"
                  >
                    website
                  </Link>
                  , local search presence, appointment journey, content
                  strategy and compliant advertising framework, it can become
                  a meaningful part of a broader{" "}
                  <strong>organic patient acquisition strategy</strong>.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#D5D5D5]">
                  For clinics that want to build that system professionally,{" "}
                  <Link
                    href="/"
                    className="font-bold text-white no-underline transition-colors hover:text-[#F8BC04]"
                  >
                    Big Beans Digital
                  </Link>{" "}
                  approaches healthcare marketing as a combination of content,
                  brand building, audience development and measurable lead
                  generation—not just posting graphics.
                </p>

                <div className="mt-7 border-l-4 border-[#F8BC04] pl-5 text-[18px] font-extrabold leading-[1.6]">
                  The goal isn't simply to get more followers.
                </div>

                <p className="mt-5 text-[19px] font-black leading-[1.5] text-[#F8BC04]">
                  The goal is to become the clinic people remember when they
                  decide it's time to seek care.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-14">
              <SectionTitle number="21">
                <Highlight>Frequently Asked Questions</Highlight>
              </SectionTitle>

              <div className="space-y-4">
                {[
                  {
                    question:
                      "How do I start Instagram marketing for a new clinic in India?",
                    answer:
                      "Start by defining the clinic's specialty, target audience, location and positioning. Build a complete Instagram profile, create educational and doctor-led content, showcase the clinic experience, answer common patient questions and gradually introduce appropriate conversion-focused content.",
                  },
                  {
                    question:
                      "How often should a new clinic post on Instagram?",
                    answer:
                      "Consistency is more important than an arbitrary number. A new clinic could begin with several strong feed posts or Reels per week while maintaining regular Stories, provided the team can sustain the quality.",
                  },
                  {
                    question:
                      "What should a new clinic post on Instagram?",
                    answer:
                      "Focus on patient education, doctor expertise, frequently asked questions, clinic experience, local relevance, healthcare awareness and appropriate appointment information.",
                  },
                  {
                    question:
                      "Can doctors use Instagram for marketing in India?",
                    answer:
                      "Doctors can use social media to provide factual and educational information, but medical professionals need to consider applicable professional-conduct and advertising requirements.",
                  },
                  {
                    question:
                      "Can Instagram generate patients for a new clinic?",
                    answer:
                      "Yes, Instagram can contribute to patient acquisition, but it should not be treated as a guaranteed direct-booking channel. Its role can include awareness, education, trust-building, local discovery and directing interested people toward an appropriate appointment or enquiry process.",
                  },
                  {
                    question:
                      "Is Instagram enough for clinic digital marketing?",
                    answer:
                      "Usually, no. A stronger strategy combines Instagram with local SEO, a clinic website, Google Business Profile optimization, reputation management, appropriate paid campaigns and a clear appointment journey.",
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

            {/* FINAL TAKEAWAY */}
            <section className="mb-14">
              <div className="rounded-[26px] border-2 border-[#F8BC04] bg-[#FFF9E8] p-8 shadow-[0_15px_40px_rgba(248,188,4,0.08)] transition-all duration-500 hover:-translate-y-1 md:p-10">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#C48D00]">
                  Final Takeaway
                </span>

                <h2 className="mt-3 text-[28px] font-black leading-[1.16] md:text-[35px]">
                  Make the Clinic{" "}
                  <Highlight>
                    Useful, Recognizable, Credible and Easy to Understand
                  </Highlight>
                </h2>

                <p className="mt-5 text-[15px] leading-[1.8] text-[#444]">
                  If we were starting a clinic in India from zero today, we
                  wouldn't try to make the clinic look famous.
                </p>

                <div className="my-6 rounded-2xl bg-[#171717] p-6 text-center text-[19px] font-black text-[#F8BC04]">
                  We'd make it useful, recognizable, credible and easy to
                  understand.
                </div>

                <p className="text-[15px] leading-[1.8] text-[#444]">
                  Because before someone becomes a patient, they usually have
                  to become aware of you.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#444]">
                  Then they need a reason to trust you.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#444]">
                  Then they need an easy way to take the next step.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#444]">
                  That's exactly where strategic{" "}
                  <strong>Healthcare social media marketing</strong> can make a
                  difference.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#444]">
                  <Link
                    href="/services/social-media-marketing"
                    className="font-bold text-[#B57F00] no-underline transition-colors hover:text-[#171717]"
                  >
                    Big Beans Digital Social Media Marketing Agency
                  </Link>{" "}
                  helps healthcare businesses build that journey through
                  strategy-led content, social media management, healthcare
                  brand awareness and patient-focused digital marketing.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="overflow-hidden rounded-[26px] bg-[#111111] p-7 text-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 md:p-9">
              <div className="grid items-center gap-7 md:grid-cols-[1fr_auto]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#F8BC04]">
                    BIGBEANS DIGITAL
                  </span>

                  <h2 className="mt-3 text-[25px] font-black leading-[1.2] md:text-[31px]">
                    Ready to Build a Stronger{" "}
                    <Highlight>Healthcare Social Media Strategy?</Highlight>
                  </h2>

                  <p className="mt-3 max-w-[680px] text-[14px] leading-[1.7] text-[#D4D4D4]">
                    Build a strategic social media presence that helps your
                    clinic become more visible, credible and memorable to the
                    patients you want to reach.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-semibold text-[#E7E7E7]">
                    <span>✓ Healthcare Social Media</span>
                    <span>✓ Content Strategy</span>
                    <span>✓ Patient Lead Generation</span>
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
          <aside className="space-y-7 lg:sticky lg:top-24">
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