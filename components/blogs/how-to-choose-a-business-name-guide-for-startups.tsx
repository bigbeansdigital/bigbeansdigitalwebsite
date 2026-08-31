import Image from "next/image";
import Link from "next/link";

const thumbnail =
  "/assets/blog/singleblogs/how-to-choose-a-business-name-guide-for-startups.webp";

const pageUrl =
  "https://www.bigbeansdigital.com/blog/how-to-choose-a-business-name-guide-for-startups";

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

const faqs = [
  {
    question:
      "What is the best business name generator to use for a new company?",
    answer: (
      <>
        There isn't a single "best" tool — an{" "}
        <InternalLink href="/" dark>
          AI business name generator
        </InternalLink>{" "}
        is most useful for producing volume quickly, while a{" "}
        <InternalLink href="/" dark>
          business company name generator
        </InternalLink>{" "}
        focused on your specific industry will return more relevant options.
        Use any generator to widen your list, then run the results through the
        legal and practical checks in this guide before shortlisting.
      </>
    ),
  },
  {
    question:
      "How do I get unique business name ideas without hiring an agency?",
    answer: (
      <>
        Combine two relevant words, anchor the name to a founder's surname, or
        borrow meaning through metaphor the way Amazon did with scale and a
        river. Pair that with an{" "}
        <InternalLink href="/" dark>
          AI business name generator
        </InternalLink>{" "}
        for extra volume, then filter everything through a trademark and domain
        check before you decide.
      </>
    ),
  },
  {
    question: "What's the difference between a business name and a trading name?",
    answer: (
      <>
        Your registered legal name is what appears on incorporation documents
        with the MCA (India) or Companies House (UK). A trading name is whatever
        you actually operate under day-to-day, which can be different — but a
        trading name still needs its own trademark and domain check, since
        registering a company doesn't automatically protect a separate trading
        name.
      </>
    ),
  },
  {
    question: "How do I check if a business name is already taken?",
    answer: (
      <>
        Search the MCA portal in India or the Companies House name checker in
        the UK for registry conflicts, then search the IP India or UKIPO
        trademark database separately for trademark conflicts, and finally
        check domain and social handle availability. All four checks matter —
        clearing one doesn't mean the others are clear too.
      </>
    ),
  },
  {
    question: "Should my business name describe exactly what I sell?",
    answer: (
      <>
        Only if you're certain you'll never expand beyond that category. A
        descriptive name builds instant clarity but limits growth; an evocative
        or invented name takes more marketing effort early on but scales more
        easily as your product range grows.
      </>
    ),
  },
  {
    question: "How long should a good business name be?",
    answer: (
      <>
        Shorter is almost always better for recall, spelling, and domain
        availability — most strong names fall between one and three syllables.
        If your name naturally runs longer, make sure it still reads clearly in
        a URL and fits cleanly on a{" "}
        <InternalLink href="/services/logo-designing" dark>
          logo lockup
        </InternalLink>
        .
      </>
    ),
  },
  {
    question:
      "Can I use an AI-generated name for a serious, long-term brand?",
    answer: (
      <>
        Yes, as long as you treat the AI output as a starting list rather than a
        final answer. Run any AI-suggested name through the same trademark,
        registry, domain, and pronunciation checks you'd apply to a name your
        team came up with manually.
      </>
    ),
  },
  {
    question:
      "What are good brand name ideas for a startup with a limited budget?",
    answer: (
      <>
        Founder-name anchoring and simple word combinations are the cheapest
        routes to a workable name, since they don't require paid tools. Spend
        your limited budget instead on the trademark and domain checks — those
        protect the name once you've chosen it, which matters more than the
        brainstorming method itself.
      </>
    ),
  },
  {
    question: "How do I choose a name for a food or restaurant business?",
    answer: (
      <>
        Decide first whether you need instant clarity (a descriptive name that
        works well on delivery apps) or a premium, evocative feel (which needs a
        strong tagline alongside it). Test the name against your actual menu
        and price point, not just how it sounds in isolation.
      </>
    ),
  },
  {
    question: "How do I choose a name for a clothing or fashion store?",
    answer: (
      <>
        Pick words that imply a specific look, fabric, or attitude rather than
        generic terms like "style" or "elegance," which are overused across the
        category. Say the name alongside your{" "}
        <InternalLink href="/services/logo-designing" dark>
          logo concept
        </InternalLink>{" "}
        to confirm it works visually as well as verbally.
      </>
    ),
  },
  {
    question:
      "Do I need to register a trademark before I start using a business name?",
    answer: (
      <>
        It's not legally required to start trading, but waiting increases your
        risk — a competitor or later applicant could register the trademark
        first and force you to rebrand. Run the trademark search before you
        commit to signage, packaging, or a domain, and file early if the name is
        central to your brand.
      </>
    ),
  },
  {
    question:
      "What should I do if my ideal business name is already taken?",
    answer: (
      <>
        Check whether it's taken at the registry level, the trademark level, or
        just as a domain — each has a different workaround, from adding a
        distinguishing word to considering an alternate domain extension. If
        it's taken as a live trademark in your exact category, move on rather
        than risk a dispute; a strong second choice beats a legal fight over a
        first choice.
      </>
    ),
  },
];

function InternalLink({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`font-bold no-underline hover:no-underline ${
        dark ? "text-white hover:text-white" : "text-[#171717] hover:text-[#171717]"
      }`}
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

export default function HowToChooseABusinessNameGuideForStartups() {
  const articleTitle =
    "How to Choose a Business Name: A Complete Guide for Startups";

  const postedDate = "August 31, 2026";

  const aiPrompt = encodeURIComponent(
    `Please summarize this Big Beans Digital blog in a clear and practical way. Focus on business name ideas, business name generators, brand name ideas, company name suggestions, naming strategy, legal checks in India and the UK, trademark checks, domain availability, social handles, common naming mistakes, and the scoring framework for choosing a final business name.

Blog title: "${articleTitle}"

Page link: ${pageUrl}`
  );

  return (
    <main className="bg-[#FAFAFA] text-[#171717]">
      {/* BREADCRUMB */}
      <div className="mx-auto flex max-w-[1380px] justify-center px-5 pt-7 md:px-8 lg:px-10">
        <div className="inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-[#E8E8E8] bg-white px-5 py-3 text-[12px] shadow-[0_8px_25px_rgba(0,0,0,0.05)] md:text-[13px]">
          <Link href="/" className="shrink-0 text-[#171717] no-underline">
            Home
          </Link>

          <span>→</span>

          <Link
            href="/blog"
            className="shrink-0 text-[#171717] no-underline"
          >
            Blogs
          </Link>

          <span>→</span>

          <span className="truncate font-bold">
            How to Choose a Business Name
          </span>
        </div>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-[1380px] px-5 pb-12 pt-8 md:px-8 md:pt-12 lg:px-10 lg:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
          <div>
            <h1 className="max-w-[700px] text-[40px] font-black leading-[1.02] tracking-[-1.5px] text-[#171717] md:text-[55px] lg:text-[64px]">
              How to Choose a{" "}
              <span className="text-[#F8BC04]">Business Name</span>: A
              Complete Guide for Startups
            </h1>

            <p className="mt-7 max-w-[680px] text-[17px] leading-[1.65] md:text-[18px]">
              A practical, step-by-step guide to choosing a{" "}
              <InternalLink href="/services/branding">
                business name
              </InternalLink>
              , generating strong naming ideas, checking legal availability and
              building a brand that can grow with your business.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-[13px]">
              <span>{postedDate}</span>

              <span className="h-4 w-px bg-[#BDBDBD]" />

              <span className="font-extrabold">
                By Big Beans Digital Team
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[34px] bg-black">
            <div className="relative aspect-[1350/1080] w-full">
              <Image
                src={thumbnail}
                alt="How to Choose a Business Name: A Complete Guide for Startups"
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
            <div className="mb-10 flex min-h-[68px] items-center justify-between gap-5 rounded-[16px] bg-[#111111] px-7 py-4">
              <span className="text-[16px] font-medium text-[#F8BC04] md:text-[18px]">
                Summarize with AI
              </span>

              <div className="flex shrink-0 items-center gap-6">
                <a
                  href={`https://chatgpt.com/?q=${aiPrompt}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Summarize with ChatGPT"
                  className="flex items-center justify-center text-[#F8BC04] no-underline"
                >
                  <ChatGPTIcon />
                </a>

                <a
                  href={`https://gemini.google.com/app?text=${aiPrompt}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Summarize with Gemini"
                  className="flex items-center justify-center text-[#F8BC04] no-underline"
                >
                  <GeminiIcon />
                </a>
              </div>
            </div>

            {/* INTRODUCTION */}
            <section className="mb-14">
              <div className="rounded-[22px] border border-[#ECECEC] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.035)] md:p-9">
                <p className="text-[16px] leading-[1.8]">
                  Most founders treat naming as the fun part before the "real
                  work" starts. It isn't. Your business name is the single word
                  or phrase that will appear on your invoices, your domain, your
                  signage, your ad headlines, and every review a customer ever
                  leaves. Change it later and you don't just redesign a logo —
                  you rebuild search rankings from zero, reprint everything
                  physical, and explain to existing customers why the business
                  they trusted suddenly has a different name.
                </p>

                <p className="mt-5 text-[16px] leading-[1.8]">
                  This guide walks through the entire process: what a name needs
                  to do before you brainstorm, proven ways to generate a long
                  list of{" "}
                  <InternalLink href="/services/branding">
                    business name ideas
                  </InternalLink>
                  , the legal checks that protect you in India and the UK, the
                  mistakes that force expensive rebrands, and a simple framework
                  for choosing between your finalists.
                </p>

                <div className="my-7 rounded-2xl bg-black p-6">
                  <p className="text-[20px] font-black leading-[1.55] text-[#F8BC04]">
                    TL;DR — How to choose a business name
                  </p>

                  <p className="mt-3 text-[15px] leading-[1.8] text-white">
                    Get clear on your audience, category, and tone before you
                    brainstorm anything. Generate a wide list using
                    founder-name, word-combination, and metaphor techniques —
                    an{" "}
                    <InternalLink href="/" dark>
                      AI business name generator
                    </InternalLink>{" "}
                    is useful for volume, not for the final decision. Cut every
                    name that fails a trademark, company-registry, domain, or
                    social-handle check. Say your top three out loud to people
                    outside your industry before you commit. Pick the name
                    that's easiest to spell and remember over the name that only
                    makes sense to you.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 1 */}
            <section className="mb-14">
              <SectionTitle number="01">
                Your Business Name Works Harder Than Any Other Word You'll
                Choose This Year
              </SectionTitle>

              <p className="text-[16px] leading-[1.8]">
                A business name has to do four jobs at once: get remembered, get
                searched for correctly, get trademarked without a fight, and
                still make sense five years and several product lines from now.
                Most naming guides treat this as a creative exercise. It's
                really a business decision with creative inputs.
              </p>

              <p className="mt-5 text-[16px] leading-[1.8]">
                Think about what actually happens after launch. Every rupee or
                pound you spend on{" "}
                <InternalLink href="/services/google-ads-meta-ads">
                  paid ads
                </InternalLink>
                ,{" "}
                <InternalLink href="/">
                  SEO
                </InternalLink>
                , or word-of-mouth is an investment in making your name
                recognizable. If that name is hard to spell, sounds like three
                other companies, or boxes you into "the cupcake place" when you
                eventually want to sell cookies too, you're spending marketing
                budget to fight your own name instead of building on it.
              </p>

              <p className="mt-5 text-[16px] leading-[1.8]">
                Founders searching for{" "}
                <InternalLink href="/services/branding">
                  business name ideas
                </InternalLink>{" "}
                or a quick{" "}
                <InternalLink href="/">
                  company name suggestion
                </InternalLink>{" "}
                often underestimate this — the name isn't the finish line, it's
                the foundation everything else gets built on.
              </p>

              <p className="mt-5 text-[16px] leading-[1.8]">
                That's also why we start every{" "}
                <InternalLink href="/services/branding">
                  branding engagement
                </InternalLink>{" "}
                with naming, not logo design. A strong visual identity can't
                compensate for a name that confuses people or doesn't clear
                legally.
              </p>
            </section>

            {/* SECTION 2 */}
            <section className="mb-14">
              <SectionTitle number="02">
                Define What Your Name Needs to Communicate Before You Start
                Brainstorming
              </SectionTitle>

              <p className="text-[16px] leading-[1.8]">
                Skipping straight to a{" "}
                <InternalLink href="/">
                  business name generator
                </InternalLink>{" "}
                without this step is why so many shortlists end up full of
                names nobody can agree on. Before you generate a single option,
                answer these five questions in writing:
              </p>

              <div className="mt-7 space-y-4">
                {[
                  {
                    title: "Who exactly are you selling to?",
                    text: "A name that appeals to enterprise buyers reads differently from one aimed at 20-something consumers on Instagram.",
                  },
                  {
                    title:
                      "What category are you in, and do you want the name to say it out loud?",
                    text: '"Descriptive" names (like a bakery called Wheat & Co.) win on clarity but limit expansion. "Evocative" names (like a bakery called Sundial) win on flexibility but need more marketing to explain what you do.',
                  },
                  {
                    title: "What's the tone?",
                    text: "Playful, premium, clinical, rebellious — the name should sound like it belongs to that personality before a single design element is added.",
                  },
                  {
                    title: "How big is your ambition, geographically?",
                    text: "A name tied to a city or region (Delhi Detailing Co.) works if you're staying local. It becomes a liability the moment you expand to a second market.",
                  },
                  {
                    title: "Will this name still make sense in five years?",
                    text: "Trend-driven names — anything leaning on a slang term or meme of the moment — tend to age the fastest and are the first thing customers forget how to spell.",
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

              <p className="mt-6 text-[16px] leading-[1.8]">
                Write the answers down. They become the filter for every name
                idea you generate next, whether it comes from a whiteboard
                session or an{" "}
                <InternalLink href="/">
                  AI business name generator
                </InternalLink>
                .
              </p>
            </section>

            {/* SECTION 3 */}
            <section className="mb-14">
              <SectionTitle number="03">
                Use These Proven Methods to Generate a Long List of Business
                Name Ideas
              </SectionTitle>

              <p className="text-[16px] leading-[1.8]">
                Volume matters at this stage. Most founders stall because
                they're trying to find the perfect name on the first attempt.
                Aim for 40–60 raw options before you start cutting.
              </p>

              <div className="mt-7 space-y-5">
                {[
                  {
                    title: "Word combination.",
                    text: "Merge two relevant words into something new — this is how names like Pinterest (pin + interest) and Instagram (instant + telegram) were built. It's one of the most reliable ways to land on unique business name ideas that still hint at what you do.",
                  },
                  {
                    title: "Founder or personal-name anchoring.",
                    text: 'Simple, credible, and hard to copy — think "Sharma Consulting" or "Reddy & Co." This works especially well for professional services and trades where trust matters more than novelty.',
                  },
                  {
                    title: "Metaphor and association.",
                    text: 'Borrow meaning from something outside your category. Amazon is named for the river specifically because of its scale — the name signals "vast selection" without describing books or logistics at all.',
                  },
                  {
                    title: "Foreign-language roots.",
                    text: "Latin, Sanskrit, and other language roots often produce names that sound premium and are rarely already trademarked in your category. Just get a native speaker to check the pronunciation and meaning before you commit.",
                  },
                  {
                    title: "Acronyms and initials.",
                    text: "Useful for B2B and technical businesses, but only if the letters are easy to say out loud — three-letter acronyms are far easier to remember than five.",
                  },
                  {
                    title: "A business name generator for raw volume.",
                    text: "A good AI powered business name generator can produce 50 combinations in the time it takes you to think of five. Feed it your keywords, your tone, and your category, then treat the output as a starting list, not a shortlist — most generated names still need a human filter for meaning, pronunciation, and legal clearance.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E8E8E8] bg-white p-6"
                  >
                    <h3 className="text-[18px] font-extrabold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-[1.8]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[16px] leading-[1.8]">
                Whether you use a general{" "}
                <InternalLink href="/">
                  business company name generator
                </InternalLink>
                , a niche{" "}
                <InternalLink href="/">
                  business firm name generator
                </InternalLink>
                , or you build your own by prompting an AI model directly, the
                output quality depends entirely on how specific your inputs are.
              </p>

              <p className="mt-5 text-[16px] leading-[1.8]">
                Once you have a long list, industry context changes what "good"
                looks like. Here's how naming priorities shift across the
                categories we get asked about most.
              </p>

              <h3 className="mt-10 text-[22px] font-black">
                Food and Restaurant Names Should Trigger an Appetite, Not Just
                Describe the Menu
              </h3>

              <p className="mt-4 text-[16px] leading-[1.8]">
                Food{" "}
                <InternalLink href="/services/branding">
                  business name ideas
                </InternalLink>{" "}
                work best when they create a sensory reaction before the
                customer has read the menu. Descriptive names ("Spice Route
                Kitchen") build instant clarity for delivery-app browsing,
                where customers scan dozens of options in seconds. Evocative
                names ("Copper & Clove") build a premium feel but need a strong
                tagline or cuisine tag alongside them so customers aren't left
                guessing. For food{" "}
                <InternalLink href="/services/branding">
                  company name ideas
                </InternalLink>{" "}
                beyond a single restaurant — packaged goods, cloud kitchens,
                catering brands — leave room in the name for a product range
                rather than one dish.
              </p>

              <h3 className="mt-10 text-[22px] font-black">
                Clothing and Fashion Store Names Need to Signal a Look Before
                Customers See the Product
              </h3>

              <p className="mt-4 text-[16px] leading-[1.8]">
                Clothing{" "}
                <InternalLink href="/services/branding">
                  shop name ideas
                </InternalLink>{" "}
                and fashion store name suggestions succeed when the name itself
                implies a visual identity — texture, fabric, era, or attitude.
                "Thread & Loom" implies craft. "Neon Row" implies streetwear.
                Vague, feel-good words ("Elegance," "Style Hub") get lost
                because dozens of competitors reach for the same words;
                specificity is what makes{" "}
                <InternalLink href="/services/branding">
                  fashion shop name suggestions
                </InternalLink>{" "}
                memorable in a crowded category.
              </p>

              <h3 className="mt-10 text-[22px] font-black">
                Creative Agencies and Studios Can Take More Risks With Wordplay
              </h3>

              <p className="mt-4 text-[16px] leading-[1.8]">
                Creative{" "}
                <InternalLink href="/services/branding">
                  shop name ideas
                </InternalLink>{" "}
                have more room for abstraction than most categories, because
                clients expect a creative business to demonstrate creativity in
                its own name. Puns, invented words, and unexpected pairings all
                work here in a way they wouldn't for, say, a law firm. The risk
                is going so abstract that nobody can guess what the studio
                actually does — pair an inventive name with a clear one-line
                description in your bio and metadata to close that gap.
              </p>

              <h3 className="mt-10 text-[22px] font-black">
                IT and Tech Companies Need Names That Sound Credible to Buyers
                and Investors
              </h3>

              <p className="mt-4 text-[16px] leading-[1.8]">
                New{" "}
                <InternalLink href="/">
                  IT company name suggestions
                </InternalLink>{" "}
                and{" "}
                <InternalLink href="/">
                  IT business name suggestions
                </InternalLink>{" "}
                should lean toward clarity and trust over cleverness, especially
                if you're selling into enterprise or raising investment. Buyers
                researching vendors and investors scanning a pitch deck both
                respond better to names that sound established rather than
                experimental. Short, invented words (like Zoho or Freshworks)
                tend to outperform long descriptive strings because they're
                easier to say in a sales call and easier to trademark cleanly.
              </p>
            </section>

            {/* SECTION 4 */}
            <section className="mb-14">
              <SectionTitle number="04">
                Filter Every Shortlisted Name Through These Legal and Practical
                Checks
              </SectionTitle>

              <p className="text-[16px] leading-[1.8]">
                This is the step founders skip most often, and it's the one that
                causes the most expensive mistakes later. Run every name on your
                shortlist through all five checks below before you fall in love
                with any of them.
              </p>

              <div className="mt-7 space-y-5">
                {[
                  {
                    title: "Company or business registry check.",
                    content:
                      "In India, name reservation happens on the MCA portal — either through the standalone RUN (Reserve Unique Name) service if you want to lock in a name before incorporating, or through Part A of the SPICe+ form if you're incorporating immediately. The registrar will reject names that are identical or deceptively similar to an existing company. In the UK, Companies House runs a free name-availability checker, and it applies strict “same as” rules — adding a generic word like “Group” or “UK” to an existing name usually won't be enough to make it distinct.",
                  },
                  {
                    title: "Trademark search.",
                    content:
                      "Registry approval is not trademark protection — treat them as two separate steps. In India, search the IP India trademark database. In the UK, search the UKIPO trademark register. A name can clear company registration and still infringe on a registered trademark in your product category, which can force a rebrand months or years into trading.",
                  },
                  {
                    title: "Trading name check.",
                    content:
                      "If you plan to trade under a different name than your registered legal entity — common for sole proprietors and early-stage founders — remember that a trading name doesn't carry the same legal protection as a registered trademark. Trading name ideas should still go through the domain and trademark checks above; “unregistered” doesn't mean “unchallengeable.”",
                  },
                  {
                    title: "Domain and handle availability.",
                    content:
                      "Check the .com first, then your relevant country domain (.in, .co.uk), and the exact handle on the platforms your customers actually use. A mismatched handle (business.official, get.business) creates friction and quietly costs you search visibility.",
                  },
                  {
                    title: "Pronunciation and spelling test.",
                    content:
                      "Say the name out loud to five people who've never heard it and ask them to spell it back. If two or more get it wrong, the name will cost you in word-of-mouth referrals and branded search traffic for as long as you use it.",
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

                        <p className="mt-3 text-[15px] leading-[1.8]">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 5 */}
            <section className="mb-14">
              <SectionTitle number="05">
                Avoid These Naming Mistakes That Force Costly Rebrands Later
              </SectionTitle>

              <p className="text-[16px] leading-[1.8]">
                We've seen the same handful of mistakes derail otherwise strong
                businesses. Watch for these specifically:
              </p>

              <div className="mt-7 space-y-4">
                {[
                  {
                    title: "Naming yourself into a corner.",
                    text: 'A name like "Mumbai Yoga Studio" stops working the moment you open a second city or add online classes. Leave room to grow before you need it.',
                  },
                  {
                    title: "Choosing a name only your team understands.",
                    text: "An inside joke or a reference only your co-founder gets isn't a brand asset — it's a barrier every new customer has to get past.",
                  },
                  {
                    title:
                      "Copying the naming pattern of a bigger competitor.",
                    text: "Sounding like the market leader doesn't borrow their trust; it just makes you forgettable by comparison and risks a trademark dispute.",
                  },
                  {
                    title: "Skipping the multilingual check.",
                    text: "A word that's neutral in English can carry an unfortunate or unrelated meaning in another language you'll eventually trade in — worth a quick check if you have any regional or international ambition.",
                  },
                  {
                    title: "Treating the legal search as optional.",
                    text: '"We\'ll check it later" is how founders end up rebranding eighteen months in, after the name is already on signage, packaging, and a growing customer base.',
                  },
                  {
                    title:
                      "Optimizing for how the name looks over how it sounds.",
                    text: "Most brand discovery today happens through voice search, word-of-mouth, and audio ads — a name that only works as a clever logo treatment will underperform everywhere else.",
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

                        <p className="mt-2 text-[15px] leading-[1.8]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 6 */}
            <section className="mb-14">
              <SectionTitle number="06">
                Score Your Finalists With This Simple Framework Before You
                Commit
              </SectionTitle>

              <p className="text-[16px] leading-[1.8]">
                By this stage you should have three to five names that survived
                the legal and practical filters. Instead of picking on gut
                feeling alone, score each one from 1–5 across these six criteria:
              </p>

              <div className="mt-7 overflow-x-auto rounded-2xl border border-[#E6E6E6] bg-white">
                <table className="w-full min-w-[650px] border-collapse text-left">
                  <thead>
                    <tr className="bg-black text-white">
                      <th className="px-5 py-5 text-sm font-extrabold">
                        Criterion
                      </th>

                      <th className="px-5 py-5 text-sm font-extrabold">
                        Ask Yourself
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      [
                        "Memorability",
                        "Can someone repeat it back correctly after hearing it once?",
                      ],
                      [
                        "Spelling ease",
                        "Would a stranger spell it right from hearing it on a podcast?",
                      ],
                      [
                        "Availability",
                        "Is the domain and social handle realistically available or affordable?",
                      ],
                      [
                        "Legal clearance",
                        "Does it clear both the company registry and trademark search?",
                      ],
                      [
                        "Room to grow",
                        "Does it still work if you add products, cities, or a new audience?",
                      ],
                      [
                        "Emotional fit",
                        "Does it feel like your brand's personality, not just your product category?",
                      ],
                    ].map(([criterion, question], index) => (
                      <tr
                        key={criterion}
                        className={index % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}
                      >
                        <td className="border-t border-[#E8E8E8] px-5 py-5 text-[14px] font-bold">
                          {criterion}
                        </td>

                        <td className="border-t border-[#E8E8E8] px-5 py-5 text-[14px] leading-[1.7]">
                          {question}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-[16px] leading-[1.8]">
                Add up the scores. The highest total is usually the right call —
                but if two names tie, run one more test: say your top two out
                loud to ten people who've never heard of your business and ask
                which one they'd trust with their money. That single question
                resolves more naming debates than another week of internal
                discussion ever will.
              </p>
            </section>

            {/* SECTION 7 */}
            <section className="mb-14">
              <SectionTitle number="07">
                Get Expert Naming and Branding Support When the Decision Feels
                Too Big to Make Alone
              </SectionTitle>

              <div className="rounded-[22px] bg-black p-7 text-white md:p-9">
                <p className="text-[16px] leading-[1.8] text-white">
                  Naming is a one-time decision with a permanent cost if you get
                  it wrong, which is exactly why so many founders spend weeks
                  stuck on it. If you'd rather have a second set of expert eyes
                  — someone to stress-test your shortlist, run the trademark and
                  registry checks properly, and carry the name straight through
                  to a full visual identity — that's the kind of work our brand
                  strategy team at{" "}
                  <InternalLink href="/" dark>
                    Big Beans Digital
                  </InternalLink>{" "}
                  does daily for early-stage founders across India and
                  internationally.
                </p>

                <p className="mt-5 text-[16px] leading-[1.8] text-white">
                  Beyond naming, we build the full identity around it:{" "}
                  <InternalLink href="/services/logo-designing" dark>
                    logo design
                  </InternalLink>
                  , visual guidelines, packaging, and the{" "}
                  <InternalLink href="/services/website-development" dark>
                    website
                  </InternalLink>{" "}
                  and{" "}
                  <InternalLink href="/services/social-media-marketing" dark>
                    social presence
                  </InternalLink>{" "}
                  that makes a new name feel established from day one.
                </p>

                <p className="mt-5 text-[16px] leading-[1.8] text-white">
                  If you're weighing a creative agency or{" "}
                  <InternalLink href="/services/branding" dark>
                    branding partner
                  </InternalLink>{" "}
                  for this stage of your business, we're happy to look at your
                  shortlist and tell you honestly which name we'd bet on.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-14">
              <SectionTitle number="08">
                Frequently Asked Questions
              </SectionTitle>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={faq.question}
                    className="group rounded-[18px] border border-[#D9D9D9] bg-white"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-6 text-[16px] font-bold">
                      <span>
                        {index + 1}. {faq.question}
                      </span>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-[20px] text-[#F8BC04]">
                        +
                      </span>
                    </summary>

                    <div className="border-t border-[#E8E8E8] px-6 pb-6 pt-5 text-[15px] leading-[1.8]">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-[24px] bg-black p-7 text-white md:p-9">
              <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#F8BC04]">
                Naming & Branding
              </span>

              <h2 className="mt-3 text-[30px] font-black leading-[1.25] text-white md:text-[38px]">
                Build a business name that can grow with your brand.
              </h2>

              <p className="mt-5 max-w-[800px] text-[16px] leading-[1.8] text-white">
                From naming and{" "}
                <InternalLink href="/services/branding" dark>
                  brand strategy
                </InternalLink>{" "}
                to{" "}
                <InternalLink href="/services/logo-designing" dark>
                  logo design
                </InternalLink>
                ,{" "}
                <InternalLink href="/services/website-development" dark>
                  website development
                </InternalLink>{" "}
                and{" "}
                <InternalLink href="/services/social-media-marketing" dark>
                  social media marketing
                </InternalLink>
                , Big Beans Digital can help you build the complete identity
                around your new business name.
              </p>

              <Link
                href="/connect"
                className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#F8BC04] px-6 py-4 text-sm font-bold text-black no-underline"
              >
                Talk to Big Beans Digital
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

                      <span className="mt-1 shrink-0 text-[#171717]">→</span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#2B2B2B] bg-[#181818] p-5">
                <p className="text-xs font-bold uppercase tracking-[1.3px] text-[#F8BC04]">
                  Build Your Brand
                </p>

                <p className="mt-3 text-[15px] font-bold leading-[1.6] text-white">
                  Have a shortlist of business names and want an expert
                  perspective before you commit?
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