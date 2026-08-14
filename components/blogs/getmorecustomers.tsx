import Image from "next/image";
import Link from "next/link";

const thumbnail =
  "/assets/blog/singleblogs/getmorecustomers.png";

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
    title: "You Won the Customer. Now Give Them a Reason to Stay.",
    date: "August 14, 2026",
    image: thumbnail,
    href: "/blog/allblogs/singleblogs/getmorecustomers",
  },
  {
    title: "How to Audit Your Own Website SEO Before Hiring an Agency",
    date: "August 14, 2026",
    image:
      "/assets/blog/allblogs/website-seo-audit/website-seo-audit-thumbnail.png",
    href: "/blog/allblogs/website-seo-audit",
  },
];

const retentionSigns = [
  "You're celebrating new customers while ignoring churn",
  "Your sales team gets more attention than your customer team",
  "Customers disappear after the first purchase",
  "Your social media only talks to prospects",
  "Customers keep asking the same questions",
  "Your founder is still personally rescuing customer relationships",
];

const retentionBasics = [
  {
    number: "01",
    title: "Know Why Customers Stay",
    text: "Talk to your best customers. Ask what they value. Don't assume the answer is price. They may stay because you're responsive, because your team understands their industry, because switching would be painful, or because your product saves them time.",
  },
  {
    number: "02",
    title: "Make Customer Feedback Part of Marketing",
    text: "Your customer service team knows what people complain about. Your sales team knows what prospects hesitate over. Your account managers know what customers value. Your marketing team should hear all of it.",
  },
  {
    number: "03",
    title: "Create Content That Reflects Real Customer Problems",
    text: "The best startup content often comes from real conversations rather than keyword research alone. If your customers are struggling with something, talk about it. If they're confused about an industry change, explain it.",
  },
  {
    number: "04",
    title: "Don't Try to Manufacture Loyalty",
    text: "A loyalty programme isn't going to fix a bad experience. Neither will posting every day. Neither will a clever email sequence. Loyalty is usually much less complicated.",
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

export default function CustomerRetentionForStartupsPage() {
  const postedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date());

  const articleTitle =
    "You Won the Customer. Now Give Them a Reason to Stay.";

  const aiPrompt = encodeURIComponent(
    `Summarize the following BIGBEANS DIGITAL blog in a clear, practical way. Highlight the most important customer retention lessons, actionable strategies, social media ideas, key signs, and takeaways for a London startup. Blog title: "${articleTitle}". URL: ${
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
              Customer Retention
            </span>
          </div>
        </div>

        {/* HERO */}
        <section className="mx-auto max-w-[1380px] px-5 pb-12 pt-8 md:px-8 md:pt-12 lg:px-10 lg:pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
            {/* LEFT */}
            <div>
              <h1 className="max-w-[650px] text-[42px] font-black leading-[0.98] tracking-[-2px] md:text-[58px] lg:text-[68px]">
                You Won the Customer. Now Give Them a Reason to Stay.
              </h1>

              <p className="mt-7 max-w-[610px] text-[17px] leading-[1.65] text-[#3F3F3F] md:text-[18px]">
                Learn how London startups can improve customer retention, build
                loyalty and keep customers coming back.
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
                    There is a particular kind of excitement that comes with
                    winning a new customer.
                  </p>

                  <p className="mt-4 text-[16px] leading-[1.8] text-[#333]">
                    The sales conversation finally goes your way. The contract
                    gets signed. The payment comes through.
                  </p>

                  <p className="mt-4 text-[16px] leading-[1.8] text-[#333]">
                    For a startup, that moment matters.
                  </p>

                  <p className="mt-4 text-[16px] leading-[1.8] text-[#333]">
                    You have proved someone is willing to trust a business that
                    may still be relatively young. Your product has made sense.
                    Your pitch worked. Your team delivered.
                  </p>

                  <p className="mt-4 text-[16px] leading-[1.8] text-[#333]">
                    So naturally, the next thought is:
                  </p>

                  <div className="my-5 rounded-xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] px-5 py-4 text-[18px] font-bold leading-[1.55]">
                    Who is the next customer?
                  </div>

                  <p className="text-[16px] leading-[1.8] text-[#333]">
                    That's where things can get interesting.
                  </p>

                  <p className="mt-4 text-[16px] leading-[1.8] text-[#333]">
                    Because the customer you just won is now asking a different
                    question.
                  </p>

                  <p className="mt-4 text-[16px] leading-[1.8] text-[#333]">
                    Not <em>“Why should I buy from you?”</em>
                  </p>

                  <div className="my-5 rounded-xl bg-[#171717] px-5 py-4 text-[18px] font-extrabold leading-[1.55] text-white">
                    “Was choosing you the right decision?”
                  </div>

                  <p className="text-[16px] leading-[1.8] text-[#333]">
                    That question is where customer retention really begins.
                  </p>

                  <p className="mt-4 text-[16px] leading-[1.8] text-[#333]">
                    And for a growing London startup, it can be the difference
                    between constantly chasing new business and building a
                    customer base that actually compounds over time.
                  </p>
                </div>
              </section>

              {/* SECTION 1 */}
              <section className="mb-14">
                <SectionTitle
                  number="01"
                  title="Winning the Customer Is Only the First Part"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  Startup marketing is often built around one very obvious
                  objective: <strong>get more customers.</strong>
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "More leads.",
                    "More demos.",
                    "More enquiries.",
                    "More sales.",
                    "More followers.",
                    "More traffic.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#E9E9E9] bg-white px-5 py-4 text-[14px] font-bold"
                    >
                      <span className="mr-2 text-[#F8BC04]">→</span>
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-[16px] leading-[1.8] text-[#444]">
                  It makes sense. A young business needs momentum.
                </p>

                <p className="mt-4 text-[16px] leading-[1.8] text-[#444]">
                  But there is a point where constantly looking for the next
                  customer can distract you from something sitting right in
                  front of you: the people who have already chosen your
                  business.
                </p>

                <div className="mt-7 rounded-2xl border border-[#E8E8E8] bg-white p-6">
                  <p className="text-[15px] leading-[1.8] text-[#555]">
                    Those customers have already crossed the biggest hurdle.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "They know who you are.",
                      "They've experienced your sales process.",
                      "They've handed over their money.",
                      "They've taken a chance on you.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl bg-[#FAFAFA] p-4"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFF3C5] text-[#E2A500]">
                          <CheckIcon />
                        </span>

                        <span className="text-[14px] font-semibold leading-[1.5]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-7 text-[16px] leading-[1.8] text-[#444]">
                  That means your job changes.
                </p>

                <p className="mt-4 text-[16px] font-semibold leading-[1.8] text-[#444]">
                  You no longer have to convince them that you exist.
                </p>

                <div className="mt-5 rounded-2xl bg-[#171717] p-7 text-white">
                  <p className="text-[19px] font-extrabold leading-[1.5]">
                    You have to give them a reason to believe they made the
                    right choice.
                  </p>
                </div>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  The First Few Weeks Matter
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  Think about what happens immediately after someone becomes a
                  customer.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#555]">
                  This is when their expectations are often at their highest.
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "They remember what your salesperson told them.",
                    "They remember what they saw on your website.",
                    "They remember the promises in your marketing.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-[#E8E8E8] bg-white px-5 py-4"
                    >
                      <span className="text-[#F8BC04]">✓</span>
                      <span className="text-[14px] font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] p-6">
                  <p className="text-[15px] leading-[1.8] text-[#444]">
                    If the experience after the sale feels completely
                    different, they'll notice.
                  </p>

                  <p className="mt-4 text-[15px] leading-[1.8] text-[#444]">
                    A startup that was responsive during the sales process but
                    suddenly takes three days to answer an email has created a
                    problem without necessarily realising it.
                  </p>

                  <p className="mt-4 text-[15px] font-bold leading-[1.8] text-[#444]">
                    The customer isn't comparing you with the company you were
                    six months ago. They're comparing you with the version of
                    you that convinced them to buy.
                  </p>
                </div>
              </section>

              {/* SECTION 2 */}
              <section className="mb-14">
                <SectionTitle
                  number="02"
                  title="Why Customers Leave Even When Your Product Is Good"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  Not every customer leaves because your product is bad.
                </p>

                <p className="mt-4 text-[16px] leading-[1.8] text-[#444]">
                  Sometimes the product is perfectly fine.
                </p>

                <div className="my-6 rounded-2xl bg-[#171717] p-7 text-white">
                  <p className="text-[19px] font-extrabold leading-[1.5]">
                    The problem is everything surrounding it.
                  </p>
                </div>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  The Sales Promise Doesn't Match the Experience
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  This is one of the quickest ways to lose trust.
                </p>

                <div className="mt-5 rounded-2xl border border-[#E8E8E8] bg-white p-6">
                  <p className="text-[15px] leading-[1.8] text-[#555]">
                    If you position yourself as an easy, personal alternative
                    to a huge company, customers expect the experience to feel
                    personal.
                  </p>

                  <p className="mt-4 text-[15px] leading-[1.8] text-[#555]">
                    If you promise fast support, they expect fast support.
                  </p>

                  <p className="mt-4 text-[15px] leading-[1.8] text-[#555]">
                    If you talk about flexibility, they expect you to be
                    flexible when circumstances change.
                  </p>

                  <div className="mt-5 rounded-xl bg-[#FFF9E8] p-5">
                    <p className="text-[15px] font-bold leading-[1.7] text-[#444]">
                      Your marketing creates expectations.
                    </p>

                    <p className="mt-2 text-[15px] font-bold leading-[1.7] text-[#444]">
                      Your customer experience has to live up to them.
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Communication Gets Worse After the Sale
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  A strange thing happens in some businesses.
                </p>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
                    <span className="text-xs font-bold uppercase tracking-[1.3px] text-[#888]">
                      Before Buying
                    </span>

                    <div className="mt-5 space-y-3">
                      {[
                        "Quick replies",
                        "Detailed explanations",
                        "Helpful calls",
                        "Regular follow-ups",
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
                      After Buying
                    </span>

                    <div className="mt-5 space-y-3">
                      {[
                        "Automated emails",
                        "Generic updates",
                        "Long response times",
                        "A support inbox",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-xl bg-white px-4 py-3"
                        >
                          <span className="text-[#D99D00]">→</span>
                          <span className="text-[14px] font-semibold">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-7 text-[15px] leading-[1.8] text-[#555]">
                  That change is noticeable.
                </p>

                <p className="mt-4 text-[15px] font-semibold leading-[1.8] text-[#555]">
                  Customers don't expect a startup to be perfect. They do
                  expect it to care.
                </p>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Customers Stop Feeling Valued
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  You don't need to send customers expensive gifts or build an
                  elaborate loyalty programme to make them feel valued.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#555]">
                  Sometimes it is much simpler.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Remember the context of their business.",
                    "Ask how something went.",
                    "Follow up after solving an issue.",
                    "Share something genuinely useful.",
                    "Tell them when you've made an improvement based on their feedback.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-[#E8E8E8] bg-white p-4"
                    >
                      <span className="mt-0.5 text-[#F8BC04]">✓</span>
                      <span className="text-[14px] font-semibold leading-[1.6]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl bg-[#171717] p-7 text-white">
                  <p className="text-[18px] font-extrabold leading-[1.5]">
                    “We still know you're here.”
                  </p>

                  <p className="mt-3 text-[14px] leading-[1.75] text-[#D5D5D5]">
                    That's important as a startup grows.
                  </p>
                </div>
              </section>

              {/* SECTION 3 */}
              <section className="mb-14">
                <SectionTitle
                  number="03"
                  title="Retention Starts With the Experience, Not Another Campaign"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  When customer numbers fall, the instinct can be to launch
                  another campaign.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "A discount.",
                    "An email.",
                    "A retargeting ad.",
                    "A social post.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#E8E8E8] bg-white px-5 py-4 text-[14px] font-bold"
                    >
                      <span className="mr-2 text-[#F8BC04]">→</span>
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-[15px] leading-[1.8] text-[#555]">
                  Sometimes that's useful.
                </p>

                <div className="mt-5 rounded-2xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] p-6">
                  <p className="text-[15px] font-bold leading-[1.8] text-[#444]">
                    But marketing can't rescue an experience that customers
                    don't want to repeat.
                  </p>
                </div>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Deliver What You Promised
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  This is the least glamorous retention strategy—and possibly
                  the most important.
                </p>

                <div className="mt-5 rounded-2xl bg-white p-6 shadow-[0_5px_20px_rgba(0,0,0,0.04)]">
                  <div className="space-y-4">
                    <p className="text-[15px] leading-[1.8] text-[#555]">
                      If you said Friday, deliver Friday.
                    </p>

                    <p className="text-[15px] leading-[1.8] text-[#555]">
                      If you said someone would call, make sure they call.
                    </p>

                    <p className="text-[15px] leading-[1.8] text-[#555]">
                      If you said a feature was coming, keep people informed
                      when the timeline changes.
                    </p>
                  </div>

                  <div className="mt-5 rounded-xl bg-[#171717] p-5 text-white">
                    <p className="text-[17px] font-extrabold">
                      Reliability isn't exciting.
                    </p>

                    <p className="mt-1 text-[17px] font-extrabold text-[#F8BC04]">
                      It's valuable.
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Make Onboarding Easier
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  The period immediately after purchase can determine how
                  quickly customers see value.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Show them where to start.",
                    "Answer the obvious questions before they have to ask.",
                    "Give them useful resources.",
                    "Explain what success looks like.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-[#E8E8E8] bg-white p-4"
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

                <p className="mt-6 text-[15px] leading-[1.8] text-[#555]">
                  The easier you make the first steps, the less likely a new
                  customer is to wonder whether they've made a mistake.
                </p>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Stay Useful After the Sale
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  This is where content marketing can become much more
                  interesting.
                </p>

                <div className="my-5 rounded-xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] px-5 py-4">
                  <p className="text-[17px] font-extrabold leading-[1.6]">
                    Instead of constantly asking:
                  </p>

                  <p className="mt-2 text-[18px] font-bold leading-[1.6]">
                    “How can we sell something else?”
                  </p>
                </div>

                <div className="my-5 rounded-xl bg-[#171717] px-5 py-4 text-white">
                  <p className="text-[17px] font-extrabold leading-[1.6]">
                    Ask:
                  </p>

                  <p className="mt-2 text-[18px] font-bold leading-[1.6]">
                    “What could we teach our customer today?”
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    "A practical tip.",
                    "An industry insight.",
                    "A better way to use your product.",
                    "An answer to a question your support team receives every week.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                    >
                      <span className="text-[#F8BC04]">✓</span>
                      <span className="text-[14px] font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-[15px] leading-[1.8] text-[#555]">
                  Useful content keeps your business relevant without turning
                  every interaction into a sales pitch.
                </p>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Fix Problems Without Making Customers Chase You
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  Something will eventually go wrong.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#555]">
                  That's business.
                </p>

                <div className="mt-5 rounded-2xl border border-[#E8E8E8] bg-white p-6">
                  <p className="text-[15px] leading-[1.8] text-[#555]">
                    What matters is what happens next.
                  </p>

                  <p className="mt-4 text-[15px] leading-[1.8] text-[#555]">
                    A customer who reports a problem shouldn't have to send
                    four emails just to find out whether anyone is looking
                    into it.
                  </p>

                  <div className="mt-5 rounded-xl bg-[#FFF9E8] p-5">
                    <p className="text-[15px] font-bold leading-[1.8] text-[#444]">
                      Good retention isn't about pretending problems don't
                      happen.
                    </p>

                    <p className="mt-2 text-[15px] font-bold leading-[1.8] text-[#444]">
                      It's about making customers confident that problems will
                      be taken seriously.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 4 */}
              <section className="mb-14">
                <SectionTitle
                  number="04"
                  title="Stop Treating Existing Customers Like Yesterday's Leads"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  One of the biggest mistakes startups make with social media
                  is creating content almost entirely for people who haven't
                  bought yet.
                </p>

                <div className="mt-6 rounded-2xl bg-[#171717] p-7 text-white">
                  <div className="space-y-2 text-[15px] font-bold">
                    <p>What we do.</p>
                    <p>Why we're different.</p>
                    <p>Why you should choose us.</p>
                    <p>Book a call.</p>
                    <p>Get started.</p>
                  </div>
                </div>

                <p className="mt-7 text-[15px] leading-[1.8] text-[#555]">
                  That's understandable.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#555]">
                  But your existing customers are reading that content too.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#555]">
                  And they shouldn't always feel like spectators watching you
                  try to find someone new.
                </p>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Give Existing Customers Something Worth Following
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  Your content can help customers after the sale.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Talk about the problems they are dealing with now.",
                    "Answer questions they're likely to have.",
                    "Share insights from the work you're already doing.",
                    "Show how customers are using your product or service successfully.",
                    "Explain changes before they become confusing.",
                    "Introduce the people behind the business.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-[#E8E8E8] bg-white p-4"
                    >
                      <span className="mt-0.5 text-[#F8BC04]">✓</span>

                      <span className="text-[14px] font-semibold leading-[1.6]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-[15px] leading-[1.8] text-[#555]">
                  Not every post needs a CTA.
                </p>

                <div className="mt-5 rounded-2xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] p-6">
                  <p className="text-[17px] font-extrabold leading-[1.6]">
                    Sometimes the best customer retention content is simply
                    something that makes someone think:
                  </p>

                  <p className="mt-3 text-[18px] font-bold leading-[1.6]">
                    “That's useful. I'll keep following them.”
                  </p>
                </div>
              </section>

              {/* SECTION 5 */}
              <section className="mb-14">
                <SectionTitle
                  number="05"
                  title="How Social Media Can Help You Keep Customers"
                />

                <p className="text-[16px] leading-[1.8] text-[#444]">
                  For a London startup, social media can do more than generate
                  leads.
                </p>

                <div className="mt-6 rounded-2xl bg-[#171717] p-7 text-white">
                  <p className="text-[19px] font-extrabold leading-[1.5]">
                    It can keep your brand familiar after the transaction.
                  </p>
                </div>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Keep Customers Connected to Your Brand
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  People have short attention spans.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#555]">
                  Even satisfied customers are busy.
                </p>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#555]">
                  They don't spend their day thinking about your company.
                </p>

                <div className="mt-5 rounded-2xl border border-[#E8E8E8] bg-white p-6">
                  <p className="text-[15px] leading-[1.8] text-[#555]">
                    Regular, useful social content gives them small reminders
                    that you're still there.
                  </p>

                  <p className="mt-4 text-[15px] font-bold leading-[1.8] text-[#444]">
                    That matters when the next purchase, renewal or
                    recommendation opportunity comes around.
                  </p>
                </div>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Show Customers What Happens Behind the Scenes
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  As businesses grow, they can start feeling distant.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "A founder who once answered customer emails is suddenly nowhere to be seen.",
                    "A team that felt accessible becomes a brand logo.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#E8E8E8] bg-white p-5 text-[14px] font-semibold leading-[1.6]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-[15px] leading-[1.8] text-[#555]">
                  Social media gives startups an opportunity to keep some of
                  that human connection.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Show the team.",
                    "Share the thinking behind a new product.",
                    "Talk about lessons from a difficult project.",
                    "Let customers see that real people are still making decisions behind the brand.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                    >
                      <span className="text-[#F8BC04]">✓</span>
                      <span className="text-[14px] font-semibold leading-[1.6]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Turn Customer Questions Into Useful Content
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  Your customers are handing you content ideas every day.
                </p>

                <p className="mt-4 text-[15px] font-semibold text-[#555]">
                  Look at:
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Support questions",
                    "Sales objections",
                    "Comments",
                    "Direct messages",
                    "Reviews",
                    "Account manager conversations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#E8E8E8] bg-white px-4 py-4 text-[14px] font-semibold"
                    >
                      <span className="mr-2 text-[#F8BC04]">#</span>
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-[15px] leading-[1.8] text-[#555]">
                  If customers repeatedly ask the same thing, don't answer it
                  50 times individually if you can answer it once publicly in a
                  useful way.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "A LinkedIn post.",
                    "A short video.",
                    "A carousel.",
                    "An FAQ.",
                    "A newsletter.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-[#171717] px-5 py-4 text-[14px] font-bold text-white"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] p-6">
                  <p className="text-[17px] font-extrabold leading-[1.6]">
                    Your customer conversations can become your content
                    strategy.
                  </p>
                </div>

                <h3 className="mt-8 text-[21px] font-extrabold">
                  Create Opportunities for Advocacy
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#555]">
                  The ultimate retention win isn't just getting someone to
                  stay.
                </p>

                <div className="my-5 rounded-2xl bg-[#171717] p-7 text-white">
                  <p className="text-[19px] font-extrabold leading-[1.5]">
                    It's getting them to say:
                  </p>

                  <p className="mt-3 text-[19px] font-bold leading-[1.5] text-[#F8BC04]">
                    “You should speak to these people.”
                  </p>
                </div>

                <p className="text-[15px] font-semibold leading-[1.8] text-[#555]">
                  Happy customers can become:
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Referrers",
                    "Reviewers",
                    "Case-study subjects",
                    "Commenters",
                    "Repeat buyers",
                    "Brand advocates",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-[#E8E8E8] bg-white px-4 py-4"
                    >
                      <span className="text-[#F8BC04]">✓</span>
                      <span className="text-[14px] font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-[15px] leading-[1.8] text-[#555]">
                  But advocacy can't be manufactured through a clever social
                  media trick.
                </p>

                <div className="mt-5 rounded-2xl border-2 border-[#F8BC04] bg-[#FFF9E8] p-6">
                  <p className="text-[15px] font-bold leading-[1.8] text-[#444]">
                    It comes from giving people an experience they're
                    comfortable recommending.
                  </p>
                </div>
              </section>

              {/* SECTION 6 */}
              <section className="mb-14">
                <SectionTitle
                  number="06"
                  title="6 Signs Your Startup Needs to Think More Seriously About Retention"
                />

                <p className="mb-7 text-[16px] leading-[1.8] text-[#444]">
                  Look for these signals:
                </p>

                <div className="overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-white">
                  <div className="grid sm:grid-cols-2">
                    {retentionSigns.map((item, index) => (
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
                        "You're celebrating new customers while ignoring churn",
                      text: "Acquisition numbers look great until you compare them with how many customers you're losing.",
                    },
                    {
                      number: "02",
                      title:
                        "Your sales team gets more attention than your customer team",
                      text: "Winning the deal matters. Delivering on it matters just as much.",
                    },
                    {
                      number: "03",
                      title: "Customers disappear after the first purchase",
                      text: "If there's no obvious reason for them to return, your business may need a stronger post-purchase experience.",
                    },
                    {
                      number: "04",
                      title: "Your social media only talks to prospects",
                      text: "Existing customers shouldn't feel like your marketing has forgotten them.",
                    },
                    {
                      number: "05",
                      title: "Customers keep asking the same questions",
                      text: "Repeated questions often point to gaps in onboarding, communication or content.",
                    },
                    {
                      number: "06",
                      title:
                        "Your founder is still personally rescuing customer relationships",
                      text: "Founder involvement can be valuable. But if every difficult customer situation requires the founder, the business hasn't yet built a scalable customer experience.",
                    },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="rounded-2xl border border-[#E8E8E8] bg-white p-6"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#171717] text-xs font-bold text-white">
                          {item.number}
                        </span>

                        <div>
                          <h3 className="text-[16px] font-extrabold">
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
              </section>

              {/* SECTION 7 */}
              <section className="mb-14">
                <SectionTitle
                  number="07"
                  title="How London Startups Can Build Customer Loyalty Without Overcomplicating It"
                />

                <div className="rounded-[22px] bg-[#171717] p-7 text-white">
                  <p className="text-[18px] font-extrabold leading-[1.5]">
                    You don't need a massive retention department.
                  </p>

                  <p className="mt-3 text-[15px] leading-[1.75] text-[#D5D5D5]">
                    Start with the basics.
                  </p>
                </div>

                <div className="mt-7 space-y-5">
                  {retentionBasics.map((item) => (
                    <div
                      key={item.number}
                      className="rounded-2xl border border-[#E8E8E8] bg-white p-6"
                    >
                      <div className="mb-4 flex items-center gap-4">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8BC04] text-xs font-extrabold text-black">
                          {item.number}
                        </span>

                        <h3 className="text-[18px] font-extrabold">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-[15px] leading-[1.8] text-[#555]">
                        {item.text}
                      </p>

                      {item.number === "01" && (
                        <div className="mt-5 rounded-xl bg-[#FFF9E8] p-5">
                          <p className="text-[15px] font-bold leading-[1.8] text-[#444]">
                            Find the real reason.
                          </p>

                          <p className="mt-1 text-[15px] font-bold leading-[1.8] text-[#444]">
                            Then protect it.
                          </p>
                        </div>
                      )}

                      {item.number === "02" && (
                        <div className="mt-5 rounded-xl bg-[#F7F7F7] p-5">
                          <p className="text-[14px] font-semibold leading-[1.7] text-[#555]">
                            When those teams operate separately, valuable
                            insight gets lost.
                          </p>
                        </div>
                      )}

                      {item.number === "03" && (
                        <div className="mt-5 rounded-xl bg-[#F7F7F7] p-5">
                          <p className="text-[14px] leading-[1.7] text-[#555]">
                            That is how content starts sounding like a business
                            that actually understands its audience.
                          </p>
                        </div>
                      )}

                      {item.number === "04" && (
                        <div className="mt-5 rounded-xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] p-5">
                          <p className="text-[15px] font-extrabold leading-[1.7] text-[#444]">
                            Keep your promises. Make life easier. Communicate
                            properly. Keep providing value.
                          </p>

                          <p className="mt-2 text-[14px] leading-[1.7] text-[#555]">
                            Do that consistently and you have something worth
                            retaining.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* FINAL THOUGHTS */}
              <section className="mb-14">
                <div className="rounded-[26px] bg-[#171717] p-8 text-white md:p-10">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-8 w-2 rounded-full bg-[#F8BC04]" />

                    <span className="text-xs font-bold uppercase tracking-[2px] text-[#F8BC04]">
                      The Bottom Line
                    </span>
                  </div>

                  <h2 className="text-[29px] font-black leading-[1.15] md:text-[36px]">
                    Make Staying Feel Like the Easy Choice
                  </h2>

                  <p className="mt-5 max-w-[750px] text-[15px] leading-[1.8] text-[#D5D5D5]">
                    Getting the first customer is exciting.
                  </p>

                  <p className="mt-4 max-w-[750px] text-[15px] leading-[1.8] text-[#D5D5D5]">
                    But the second purchase tells you something the first one
                    can't.
                  </p>

                  <div className="my-6 border-l-4 border-[#F8BC04] pl-5 text-[17px] font-bold leading-[1.6]">
                    It tells you the customer experienced your business and
                    decided: “I'd choose them again.”
                  </div>

                  <p className="max-w-[750px] text-[15px] leading-[1.8] text-[#D5D5D5]">
                    That's the moment startups should care about.
                  </p>

                  <p className="mt-4 max-w-[750px] text-[15px] leading-[1.8] text-[#D5D5D5]">
                    Because long-term growth isn't built purely by finding
                    more people to sell to.
                  </p>

                  <p className="mt-4 max-w-[750px] text-[15px] leading-[1.8] text-[#D5D5D5]">
                    It's built by creating a business people are happy to
                    continue buying from, recommending and talking about.
                  </p>

                  <p className="mt-4 max-w-[750px] text-[15px] leading-[1.8] text-[#D5D5D5]">
                    So yes, keep improving your acquisition.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {[
                      "Keep creating better campaigns.",
                      "Keep finding new audiences.",
                      "But don't let the next customer become more important than the customer you've already won.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/5 p-4 text-[13px] font-semibold leading-[1.6]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 border-l-4 border-[#F8BC04] pl-5 text-[17px] font-bold leading-[1.6]">
                    You worked hard to earn their trust. Now give them a reason
                    to keep it.
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
                      Ready to Build Stronger Customer Relationships?
                    </h2>

                    <p className="mt-3 max-w-[680px] text-[14px] leading-[1.7] text-[#D4D4D4]">
                      Build a stronger digital presence that keeps your
                      customers connected, engaged and more likely to come
                      back.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-semibold text-[#E7E7E7]">
                      <span>✓ Social Media Strategy</span>
                      <span>✓ Customer Engagement</span>
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