"use client";

import Link from "next/link";

export default function AboutBigbeansDigitalBlog() {
  return (
    <main className="min-h-screen bg-white text-[#4a4a4a]">

      {/* =========================================================
          BREADCRUMB
      ========================================================= */}
      <section className="w-full bg-white py-6 sm:py-8 md:py-10">
        <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6">
          <div
            className="
              inline-flex
              max-w-full
              items-center
              gap-2
              overflow-x-auto
              whitespace-nowrap
              rounded-full
              bg-white
              px-5
              py-3
              shadow-[0_8px_24px_rgba(0,0,0,0.08)]

              sm:gap-3
              sm:px-8
              sm:py-4
            "
          >
            <Link
              href="/"
              className="
                shrink-0
                text-sm
                text-gray-700
                transition-colors
                duration-300
                hover:text-[#F8BC04]

                sm:text-base
              "
            >
              Home
            </Link>

            <span className="shrink-0 text-base text-[#F8BC04] sm:text-lg">
              →
            </span>

            <Link
              href="/blog"
              className="
                shrink-0
                text-sm
                text-gray-700
                transition-colors
                duration-300
                hover:text-[#F8BC04]

                sm:text-base
              "
            >
              BLOGS
            </Link>

            <span className="shrink-0 text-base text-[#F8BC04] sm:text-lg">
              →
            </span>

            <span className="shrink-0 text-sm font-semibold text-black sm:text-base">
              Scaling Startups into Powerhouses
            </span>
          </div>
        </div>
      </section>


      {/* =========================================================
          HERO / THUMBNAIL
          MAXIMUM: 1237px × 402px
      ========================================================= */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1237px]
          px-4
          sm:px-5
          md:px-6
          lg:px-7
          xl:px-0
        "
      >
        <div
          className="
            relative
            aspect-[1237/402]
            w-full
            overflow-hidden
            rounded-none

            sm:rounded-xl
            md:rounded-2xl
          "
        >
          <img
            src="/assets/blog/allblogs/demoblog/blogthumbnail.png"
            alt="Scaling Startups into Powerhouses: The BIGBEANS DIGITAL Advantage"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>


      {/* =========================================================
          ARTICLE
      ========================================================= */}
      <article
        className="
          mx-auto
          w-full
          max-w-[920px]
          px-5
          pb-16
          pt-9

          sm:px-7
          sm:pb-20
          sm:pt-11

          md:px-8
          md:pt-12

          lg:px-10
          lg:pb-24
          lg:pt-14
        "
      >

        {/* =======================================================
            TITLE
        ======================================================= */}
        <header className="mb-8 sm:mb-10 md:mb-11">

          <h1
            className="
              text-[28px]
              font-semibold
              leading-[1.2]
              tracking-[-0.02em]
              text-[#303030]

              sm:text-[32px]
              sm:leading-[1.22]

              md:text-[36px]

              lg:text-[40px]
              lg:leading-[1.2]
            "
          >
            Scaling Startups into Powerhouses: The BIGBEANS DIGITAL Advantage
          </h1>

        </header>


        {/* =======================================================
            INTRODUCTION
        ======================================================= */}
        <section>

          <p
            className="
              text-[15px]
              font-normal
              leading-[1.65]
              text-[#555555]

              sm:text-[16px]

              md:text-[17px]

              lg:text-[18px]
              lg:leading-[1.65]
            "
          >
            In today’s hyper-competitive digital landscape, turning a
            breakthrough idea into an industry-leading brand requires far more
            than aesthetic graphics or basic ad campaigns. It demands
            data-backed strategy, creative mastery, and precision execution.
            Enter{" "}
            <Link
              href="/"
              className="font-medium text-[#333333] underline decoration-[#F8BC04] decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
            >
              BIGBEANS DIGITAL
            </Link>
            , a premier{" "}
            <Link
              href="/services"
              className="font-medium text-[#333333] underline decoration-[#F8BC04] decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
            >
              digital growth agency
            </Link>{" "}
            engineered specifically to help startups and scaling enterprises
            build market dominance across India, London, the USA, Dubai,
            Singapore, Canada, Australia, and Nigeria.
          </p>

        </section>


        {/* =======================================================
            SECTION 01
            HEADING ABOVE
            TEXT LEFT / IMAGE RIGHT
            SAME HEIGHT
        ======================================================= */}
        <section className="mt-12 sm:mt-14 md:mt-16">

          {/* FULL-WIDTH HEADING */}
          <h2
            className="
              mb-7
              whitespace-nowrap
              text-[22px]
              font-medium
              leading-[1.25]
              tracking-[-0.015em]
              text-[#555555]

              sm:mb-8
              sm:text-[26px]

              md:text-[29px]

              lg:text-[31px]
            "
          >
            Where Strategy Meets Creativity
          </h2>


          {/* TEXT + IMAGE */}
          <div
            className="
              grid
              items-stretch
              gap-8

              md:grid-cols-[minmax(0,1fr)_360px]

              lg:grid-cols-[minmax(0,1fr)_400px]

              xl:grid-cols-[minmax(0,1fr)_420px]
            "
          >

            {/* LEFT CONTENT */}
            <div
              className="
                flex
                flex-col
                justify-between
                text-[15px]
                leading-[1.65]
                text-[#555555]

                sm:text-[16px]

                md:text-[17px]

                lg:text-[18px]
              "
            >

              <p>
                At its core,{" "}
                <Link
                  href="/"
                  className="font-medium text-[#333333] underline decoration-[#F8BC04] decoration-2 underline-offset-4 hover:opacity-70"
                >
                  BIGBEANS DIGITAL
                </Link>{" "}
                operates on a simple yet transformative ethos: aligning
                creative storytelling with high-yield performance marketing.
                Serving over 100 startups and growing businesses across key
                Indian hubs—such as Kolkata, Delhi, Bangalore, Mumbai, Pune,
                Noida, and Tripura—as well as international markets, the
                agency has established itself as an indispensable growth
                partner for modern founders.
              </p>


              <p className="mt-5">
                Whether a company is preparing for its first pre-seed launch or
                expanding an established enterprise into new global
                territories, BIGBEANS DIGITAL bridges the gap between customer
                discovery and long-term brand equity.
              </p>

            </div>


            {/* RIGHT IMAGE */}
            <figure className="flex h-full w-full overflow-hidden rounded-xl md:rounded-2xl">

              <img
                src="/assets/blog/allblogs/demoblog/blogimage1.png"
                alt="Where Strategy Meets Creativity at BIGBEANS DIGITAL"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                "
              />

            </figure>

          </div>

        </section>


        {/* =======================================================
            SECTION 02
            HEADING + INTRO ABOVE
            IMAGE LEFT / CONTENT RIGHT
        ======================================================= */}
        <section className="mt-14 sm:mt-16 md:mt-20">

          {/* HEADING */}
          <h2
            className="
              mb-4
              text-[22px]
              font-medium
              leading-[1.3]
              tracking-[-0.015em]
              text-[#555555]

              sm:text-[26px]

              md:text-[29px]

              lg:text-[31px]
            "
          >
            A Comprehensive Suite of Growth Solutions
          </h2>


          {/* INTRODUCTION ABOVE IMAGE + CONTENT */}
          <p
            className="
              mb-8
              text-[15px]
              leading-[1.65]
              text-[#555555]

              sm:mb-9
              sm:text-[16px]

              md:mb-10
              md:text-[17px]

              lg:text-[18px]
            "
          >
            Rather than relying on one-size-fits-all packages, BIGBEANS DIGITAL
            tailors every intervention around distinct business outcomes across
            seven core industries: Real Estate, Finance, E-Commerce,
            Healthcare, Lifestyle, Manufacturing, and Education.
          </p>


          {/* IMAGE + CONTENT */}
          <div
            className="
              grid
              items-stretch
              gap-8

              md:grid-cols-[360px_minmax(0,1fr)]

              lg:grid-cols-[400px_minmax(0,1fr)]

              xl:grid-cols-[420px_minmax(0,1fr)]
            "
          >

            {/* LEFT IMAGE */}
            <figure className="flex h-full w-full overflow-hidden rounded-xl md:rounded-2xl">

              <img
                src="/assets/blog/allblogs/demoblog/blogimage2.png"
                alt="Driving Measurable Impact at BIGBEANS DIGITAL"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                "
              />

            </figure>


            {/* RIGHT CONTENT */}
            <div
              className="
                text-[15px]
                leading-[1.65]
                text-[#555555]

                sm:text-[16px]

                md:text-[17px]

                lg:text-[18px]
              "
            >

              <ul className="list-disc space-y-5 pl-6 sm:space-y-6 sm:pl-7">

                <li className="pl-1">

                  <strong className="font-semibold text-[#3f3f3f]">
                    Strategic Branding &amp; Visual Identity:
                  </strong>{" "}

                  From full identity blueprints and messaging frameworks to
                  custom{" "}
                  <Link
                    href="/services/logo-designing"
                    className="font-medium text-[#333333] underline decoration-[#F8BC04] decoration-2 underline-offset-4 hover:opacity-70"
                  >
                    logo design
                  </Link>
                  , BIGBEANS DIGITAL builds memorable brand ecosystems that
                  instill trust from day one.

                </li>


                <li className="pl-1">

                  <strong className="font-semibold text-[#3f3f3f]">
                    Performance Marketing &amp; Digital Advertising:
                  </strong>{" "}

                  Deploying targeted campaigns across{" "}
                  <Link
                    href="/services/meta-ads"
                    className="font-medium text-[#333333] underline decoration-[#F8BC04] decoration-2 underline-offset-4 hover:opacity-70"
                  >
                    Meta Ads
                  </Link>
                  ,{" "}
                  <Link
                    href="/services/google-ads"
                    className="font-medium text-[#333333] underline decoration-[#F8BC04] decoration-2 underline-offset-4 hover:opacity-70"
                  >
                    Google Ads
                  </Link>
                  , and specialized media channels to generate high-intent
                  leads with accelerated ROI.

                </li>


                <li className="pl-1">

                  <strong className="font-semibold text-[#3f3f3f]">
                    Social Media Experience:
                  </strong>{" "}

                  Creating content strategies, visual storytelling, and{" "}
                  <Link
                    href="/services/social-media-marketing"
                    className="font-medium text-[#333333] underline decoration-[#F8BC04] decoration-2 underline-offset-4 hover:opacity-70"
                  >
                    social media management
                  </Link>{" "}
                  that boost organic engagement and audience retention.

                </li>


                <li className="pl-1">

                  <strong className="font-semibold text-[#3f3f3f]">
                    Custom Website Development:
                  </strong>{" "}

                  Building fast, responsive, conversion-focused{" "}
                  <Link
                    href="/services/website-development"
                    className="font-medium text-[#333333] underline decoration-[#F8BC04] decoration-2 underline-offset-4 hover:opacity-70"
                  >
                    websites
                  </Link>{" "}
                  engineered to turn incoming traffic into paying customers.

                </li>

              </ul>

            </div>

          </div>

        </section>


        {/* =======================================================
            SECTION 03
            HEADING + INTRO ABOVE
            CONTENT LEFT / IMAGE RIGHT
        ======================================================= */}
        <section className="mt-14 sm:mt-16 md:mt-20">

          {/* HEADING */}
          <h2
            className="
              mb-4
              text-[22px]
              font-medium
              leading-[1.3]
              tracking-[-0.015em]
              text-[#555555]

              sm:text-[26px]

              md:text-[29px]

              lg:text-[31px]
            "
          >
            The 6-Step Proven Blueprint for Scale
          </h2>


          {/* INTRODUCTION ABOVE IMAGE + CONTENT */}
          <p
            className="
              mb-8
              text-[15px]
              leading-[1.65]
              text-[#555555]

              sm:mb-9
              sm:text-[16px]

              md:mb-10
              md:text-[17px]

              lg:text-[18px]
            "
          >
            BIGBEANS DIGITAL drives sustainable momentum through a structured,
            six-stage operational process:
          </p>


          {/* CONTENT + IMAGE */}
          <div
            className="
              grid
              items-stretch
              gap-8

              md:grid-cols-[minmax(0,1fr)_360px]

              lg:grid-cols-[minmax(0,1fr)_400px]

              xl:grid-cols-[minmax(0,1fr)_420px]
            "
          >

            {/* LEFT CONTENT */}
            <div
              className="
                text-[15px]
                leading-[1.65]
                text-[#555555]

                sm:text-[16px]

                md:text-[17px]

                lg:text-[18px]
              "
            >

              <ol className="list-decimal space-y-5 pl-6 sm:space-y-6 sm:pl-7">

                <li className="pl-1">

                  <strong className="font-semibold text-[#3f3f3f]">
                    Business Discovery:
                  </strong>{" "}

                  Deep research into market dynamics, target demographics,
                  competitor positioning, and unit economics.

                </li>


                <li className="pl-1">

                  <strong className="font-semibold text-[#3f3f3f]">
                    Strategy &amp; Growth Planning:
                  </strong>{" "}

                  Crafting multi-channel roadmaps across SEO,{" "}
                  <Link
                    href="/services/social-media-marketing"
                    className="font-medium text-[#333333] underline decoration-[#F8BC04] decoration-2 underline-offset-4 hover:opacity-70"
                  >
                    social media
                  </Link>
                  , paid ads, and conversion optimization.

                </li>


                <li className="pl-1">

                  <strong className="font-semibold text-[#3f3f3f]">
                    Brand Development:
                  </strong>{" "}

                  Aligning visual design, tone of voice, and brand collateral
                  to create a distinctive presence.

                </li>


                <li className="pl-1">

                  <strong className="font-semibold text-[#3f3f3f]">
                    Campaign Launch &amp; Management:
                  </strong>{" "}

                  Flawlessly executing marketing campaigns engineered for
                  direct ROI.

                </li>


                <li className="pl-1">

                  <strong className="font-semibold text-[#3f3f3f]">
                    Performance Optimization:
                  </strong>{" "}

                  Continuously analyzing real-time conversion funnel metrics to
                  scale top-performing channels.

                </li>


                <li className="pl-1">

                  <strong className="font-semibold text-[#3f3f3f]">
                    Transparent Reporting:
                  </strong>{" "}

                  Delivering clear, actionable dashboards detailing ROI, lead
                  counts, traffic trends, and campaign health.

                </li>

              </ol>

            </div>


            {/* RIGHT IMAGE */}
            <figure className="flex h-full w-full overflow-hidden rounded-xl md:rounded-2xl">

              <img
                src="/assets/blog/allblogs/demoblog/blogimage3.png"
                alt="BIGBEANS DIGITAL six-step blueprint for scale"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                "
              />

            </figure>

          </div>

        </section>


        {/* =======================================================
            SECTION 04 — MEASURABLE IMPACT
        ======================================================= */}
        <section className="mt-14 sm:mt-16 md:mt-20">

          <h2
            className="
              mb-4
              text-[22px]
              font-medium
              leading-[1.3]
              tracking-[-0.015em]
              text-[#555555]

              sm:text-[26px]

              md:text-[29px]

              lg:text-[31px]
            "
          >
            Driving Measurable Impact
          </h2>


          <div
            className="
              space-y-5
              text-[15px]
              leading-[1.65]
              text-[#555555]

              sm:text-[16px]

              md:text-[17px]

              lg:text-[18px]
            "
          >

            <p>
              The proof of BIGBEANS DIGITAL&apos;s strategic approach lives in
              its real-world results:
            </p>


            <ul className="space-y-5 pl-6 sm:pl-7">

              <li>
                <strong className="font-semibold text-[#3f3f3f]">
                  3.5x
                </strong>{" "}
                Average increase in campaign performance
              </li>

              <li>
                <strong className="font-semibold text-[#3f3f3f]">
                  10x
                </strong>{" "}
                Growth in qualified, high-intent lead volume
              </li>

              <li>
                <strong className="font-semibold text-[#3f3f3f]">
                  70%
                </strong>{" "}
                Boost in organic brand engagement
              </li>

              <li>
                <strong className="font-semibold text-[#3f3f3f]">
                  60%
                </strong>{" "}
                Revenue expansion achieved in as little as 3 months
              </li>

            </ul>


            <p>
              By pairing end-to-end campaign transparency with relentless ROI
              optimization, BIGBEANS DIGITAL equips emerging businesses with
              the strategy, execution, and technological foundation required
              to scale predictably in today&apos;s global digital economy.
            </p>

          </div>

        </section>


        {/* =======================================================
            FINAL CTA
        ======================================================= */}
        <section
          className="
            mt-14
            border-t
            border-gray-200
            pt-10
            text-center

            sm:mt-16
            sm:pt-12

            md:mt-20
          "
        >

          <h2
            className="
              text-[24px]
              font-semibold
              leading-[1.3]
              text-[#303030]

              sm:text-[28px]

              md:text-[32px]
            "
          >
            Ready to Build Your Next Growth Story?
          </h2>


          <p
            className="
              mx-auto
              mt-4
              max-w-[650px]
              text-[15px]
              leading-7
              text-[#666666]

              sm:text-[16px]

              md:text-[17px]
            "
          >
            Explore BIGBEANS DIGITAL and discover how strategy, creativity,
            and execution can help your business grow.
          </p>


          <Link
            href="/"
            className="
              mt-7
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#F8BC04]
              px-7
              py-3
              text-[15px]
              font-semibold
              text-[#171717]
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:shadow-lg

              sm:px-8
              sm:py-3.5
              sm:text-[16px]
            "
          >
            Explore BIGBEANS DIGITAL
            <span className="ml-2">→</span>
          </Link>

        </section>

      </article>

    </main>
  );
}