import Link from "next/link";
import Image from "next/image";

export default function WebsiteSeoAudit() {
  return (
    <main className="min-h-screen bg-white text-[#3f3f3f]">

      {/* =========================================================
          BREADCRUMB
      ========================================================= */}
      <section className="w-full bg-white px-4 py-6 sm:px-6 sm:py-8 lg:py-10">
        <div className="mx-auto flex max-w-7xl justify-center">
          <div
            className="
              flex
              max-w-full
              items-center
              gap-2
              overflow-x-auto
              whitespace-nowrap
              rounded-full
              bg-white
              px-5
              py-3
              shadow-[0_8px_28px_rgba(0,0,0,0.08)]
              sm:gap-3
              sm:px-7
              sm:py-3.5
              lg:px-8
              lg:py-4
            "
          >
            <Link
              href="/"
              className="text-sm text-gray-600 transition hover:text-[#F8BC04] sm:text-base"
            >
              Home
            </Link>

            <span className="text-[#F8BC04]">→</span>

            <Link
              href="/blog"
              className="text-sm text-gray-600 transition hover:text-[#F8BC04] sm:text-base"
            >
              BLOGS
            </Link>

            <span className="text-[#F8BC04]">→</span>

            <span className="text-sm font-semibold text-[#171717] sm:text-base">
              Website SEO Audit
            </span>
          </div>
        </div>
      </section>


      {/* =========================================================
          HERO THUMBNAIL
          DESKTOP MAX: 1237 × 402
      ========================================================= */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1237px]">
          <div
            className="
              relative
              aspect-[1237/402]
              w-full
              overflow-hidden
              rounded-xl
              bg-[#111111]
              sm:rounded-2xl
              lg:rounded-[22px]
            "
          >
            <Image
              src="/assets/blog/allblogs/website-seo-audit/website-seo-audit-thumbnail.png"
              alt="How to Audit Your Own Website SEO Before Hiring an Agency"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1237px"
              className="object-cover"
            />
          </div>
        </div>
      </section>


      {/* =========================================================
          ARTICLE
      ========================================================= */}
      <article
        className="
          mx-auto
          w-full
          max-w-[1050px]
          px-5
          pb-20
          pt-12
          sm:px-7
          sm:pt-14
          md:px-8
          md:pt-16
          lg:px-10
          lg:pb-28
          lg:pt-20
        "
      >

        {/* =======================================================
            TITLE
        ======================================================= */}
        <header className="mb-10 sm:mb-12 lg:mb-14">

          <h1
            className="
              max-w-[1000px]
              text-[30px]
              font-semibold
              leading-[1.18]
              tracking-[-0.025em]
              text-[#222222]
              sm:text-[36px]
              md:text-[42px]
              lg:text-[48px]
            "
          >
            How to Audit Your Own Website SEO Before Hiring an Agency
          </h1>

        </header>


        {/* =======================================================
            INTRODUCTION
        ======================================================= */}
        <section className="mb-16 sm:mb-20 lg:mb-24">

          <div
            className="
              space-y-5
              text-[16px]
              leading-[1.75]
              text-[#555555]
              sm:text-[17px]
              lg:text-[18px]
            "
          >

            <p>
              If your website isn&apos;t getting enough traffic, enquiries, or
              sales from Google, you may be wondering:
              <strong className="font-semibold text-[#303030]">
                {" "}Is my website SEO actually bad?
              </strong>
            </p>

            <p>
              Before paying an SEO agency, you can perform a basic website SEO
              audit yourself.
            </p>

            <p>
              You don&apos;t need to be an SEO expert. With a few free tools
              and straightforward checks, you can identify common problems
              with your{" "}
              <strong className="font-semibold text-[#303030]">
                speed, indexing, broken links, page titles, keywords, content,
                and mobile experience
              </strong>
              .
            </p>

            <p>
              This DIY SEO audit won&apos;t replace a professional technical
              audit, but it can help you understand where obvious problems
              exist and whether your website needs deeper SEO work.
            </p>

          </div>

        </section>


        {/* =======================================================
            WHAT IS SEO AUDIT
        ======================================================= */}
        <section className="mb-16 sm:mb-20 lg:mb-24">

          <h2
            className="
              mb-5
              text-[26px]
              font-semibold
              leading-[1.25]
              tracking-[-0.02em]
              text-[#333333]
              sm:text-[31px]
              lg:text-[36px]
            "
          >
            What Is a Website SEO Audit?
          </h2>

          <div
            className="
              space-y-5
              text-[16px]
              leading-[1.75]
              text-[#555555]
              sm:text-[17px]
              lg:text-[18px]
            "
          >

            <p>
              A website SEO audit is a systematic review of your website to
              find issues that may prevent search engines from crawling,
              understanding, indexing, and ranking your pages effectively.
            </p>

            <p>
              A comprehensive SEO audit can examine:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Technical SEO</li>
              <li>On-page SEO</li>
              <li>Keyword targeting</li>
              <li>Content quality</li>
              <li>Website speed</li>
              <li>Internal linking</li>
              <li>Backlinks</li>
              <li>Site architecture</li>
              <li>Structured data</li>
              <li>Mobile usability</li>
              <li>Indexing and crawlability</li>
            </ul>

            <p>
              For a business owner, you don&apos;t need to start with the most
              technical areas.
            </p>

            <p>
              Start with these{" "}
              <strong className="font-semibold text-[#303030]">
                six basic checks.
              </strong>
            </p>

          </div>

        </section>


        {/* =======================================================
            SECTION 01
            TEXT LEFT / IMAGE RIGHT
        ======================================================= */}
        <section className="mb-20 sm:mb-24 lg:mb-28">

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_430px]">

            <div>

              <h2
                className="
                  mb-6
                  text-[25px]
                  font-semibold
                  leading-[1.25]
                  tracking-[-0.02em]
                  text-[#333333]
                  sm:text-[30px]
                  lg:text-[34px]
                "
              >
                1. Check If Google Has Indexed Your Website
              </h2>

              <div
                className="
                  space-y-5
                  text-[16px]
                  leading-[1.75]
                  text-[#555555]
                  sm:text-[17px]
                  lg:text-[18px]
                "
              >

                <p>
                  Before worrying about keywords or backlinks, make sure Google
                  can actually find your important pages.
                </p>

                <p>
                  A quick way to check is to search Google for:
                </p>

                <div className="overflow-x-auto rounded-lg bg-[#f7f7f7] px-5 py-4 font-mono text-sm text-[#333333]">
                  site:yourwebsite.com
                </div>

                <p>
                  Replace <strong>yourwebsite.com</strong> with your actual
                  domain.
                </p>

                <p>
                  For example:
                </p>

                <div className="overflow-x-auto rounded-lg bg-[#f7f7f7] px-5 py-4 font-mono text-sm text-[#333333]">
                  site:example.com
                </div>

                <p>
                  You should see pages from your website in the results.
                </p>

                <h3 className="pt-2 text-xl font-semibold text-[#333333]">
                  What should you check?
                </h3>

                <p>Look for:</p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Your homepage</li>
                  <li>Main service pages</li>
                  <li>Product or category pages</li>
                  <li>Important blog posts</li>
                  <li>Location pages, if applicable</li>
                </ul>

                <p>
                  Also look for pages that{" "}
                  <strong>shouldn&apos;t</strong> be appearing, such as
                  duplicate, outdated, or irrelevant URLs.
                </p>

                <p>
                  If important pages aren&apos;t indexed, don&apos;t
                  immediately assume your website has been penalized. There may
                  be a technical reason, such as a{" "}
                  <strong>noindex directive, crawling problem,
                  canonicalization issue, or lack of internal links.</strong>
                </p>

                <p>
                  For a more accurate diagnosis, use{" "}
                  <strong>Google Search Console</strong> to inspect your URLs
                  and review indexing reports.
                </p>

                <div className="mt-7 border-l-4 border-[#F8BC04] bg-[#fffaf0] px-5 py-4">
                  <p className="font-medium text-[#333333]">
                    Quick DIY check
                  </p>

                  <p className="mt-2 italic">
                    Can Google find and index the pages that actually generate
                    business for me?
                  </p>
                </div>

                <p>
                  If the answer is unclear, this deserves further
                  investigation.
                </p>

              </div>

            </div>


            <figure className="self-start overflow-hidden rounded-2xl bg-[#f5f5f5]">
              <Image
                src="/assets/blog/allblogs/website-seo-audit/website-seo-audit-1.png"
                alt="Website SEO audit showing website indexing and SEO improvement"
                width={1536}
                height={1536}
                sizes="(max-width: 1023px) 100vw, 430px"
                className="h-auto w-full object-contain"
              />
            </figure>

          </div>

        </section>


        {/* =======================================================
            SECTION 02
            IMAGE LEFT / TEXT RIGHT
        ======================================================= */}
        <section className="mb-20 sm:mb-24 lg:mb-28">

          <div className="grid items-start gap-10 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[430px_minmax(0,1fr)]">

            <figure className="order-2 self-start overflow-hidden rounded-2xl bg-[#f5f5f5] lg:order-1">
              <Image
                src="/assets/blog/allblogs/website-seo-audit/website-seo-audit-2.png"
                alt="SEO audit checklist and website optimization"
                width={2048}
                height={1024}
                sizes="(max-width: 1023px) 100vw, 430px"
                className="h-auto w-full object-contain"
              />
            </figure>


            <div className="order-1 lg:order-2">

              <h2
                className="
                  mb-6
                  text-[25px]
                  font-semibold
                  leading-[1.25]
                  tracking-[-0.02em]
                  text-[#333333]
                  sm:text-[30px]
                  lg:text-[34px]
                "
              >
                2. Test Your Website Speed and Core Web Vitals
              </h2>

              <div
                className="
                  space-y-5
                  text-[16px]
                  leading-[1.75]
                  text-[#555555]
                  sm:text-[17px]
                  lg:text-[18px]
                "
              >

                <p>
                  Imagine clicking a Google result and waiting several seconds
                  for the website to load.
                </p>

                <p>
                  Most people won&apos;t wait forever.
                </p>

                <p>
                  Website performance affects user experience, and Google&apos;s
                  page experience systems include{" "}
                  <strong>Core Web Vitals</strong> as important measurements of
                  real-world page experience.
                </p>

                <p>
                  Use a tool such as PageSpeed Insights to test your most
                  important pages.
                </p>

                <p>Pay attention to:</p>

                <ul className="list-disc space-y-3 pl-6">
                  <li>
                    <strong>LCP (Largest Contentful Paint):</strong> How quickly
                    the main content becomes visible
                  </li>

                  <li>
                    <strong>INP (Interaction to Next Paint):</strong> How
                    responsive the page is to user interactions
                  </li>

                  <li>
                    <strong>CLS (Cumulative Layout Shift):</strong> How much
                    the page unexpectedly moves while loading
                  </li>
                </ul>

                <p>
                  Don&apos;t obsess over getting a perfect score.
                </p>

                <p>
                  Instead, look for obvious problems such as:
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Oversized images</li>
                  <li>Unoptimized media</li>
                  <li>Excessive JavaScript</li>
                  <li>Slow third-party scripts</li>
                  <li>Poor mobile performance</li>
                  <li>Heavy themes or plugins</li>
                  <li>Render-blocking resources</li>
                </ul>

                <h3 className="pt-2 text-xl font-semibold text-[#333333]">
                  Don&apos;t audit desktop only
                </h3>

                <p>
                  Your customers may be visiting from smartphones.
                </p>

                <p>
                  Test your important pages on mobile and ask:
                </p>

                <div className="border-l-4 border-[#F8BC04] bg-[#fffaf0] px-5 py-4 italic">
                  Would I stay on this page if I were searching for this
                  service right now?
                </div>

                <p>
                  If the answer is no, performance and usability should move
                  higher on your SEO priority list.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =======================================================
            SECTION 03
            TEXT LEFT / IMAGE RIGHT
        ======================================================= */}
        <section className="mb-20 sm:mb-24 lg:mb-28">

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:gap-12">

            <div>

              <h2
                className="
                  mb-6
                  text-[25px]
                  font-semibold
                  leading-[1.25]
                  tracking-[-0.02em]
                  text-[#333333]
                  sm:text-[30px]
                  lg:text-[34px]
                "
              >
                3. Find Broken Links and 404 Errors
              </h2>

              <div
                className="
                  space-y-5
                  text-[16px]
                  leading-[1.75]
                  text-[#555555]
                  sm:text-[17px]
                  lg:text-[18px]
                "
              >

                <p>
                  Broken links are another simple issue to look for during a
                  DIY SEO audit.
                </p>

                <p>
                  A broken link may lead visitors to a page that no longer
                  exists, often producing a{" "}
                  <strong>404 Not Found</strong> error.
                </p>

                <p>Check whether your website contains links that:</p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Point to deleted pages</li>
                  <li>Use incorrect URLs</li>
                  <li>Lead to 404 pages</li>
                  <li>Redirect unnecessarily</li>
                  <li>Point to outdated resources</li>
                </ul>

                <p>
                  Don&apos;t only check random pages.
                </p>

                <p>
                  Follow the paths that matter to your business.
                </p>

                <div className="rounded-xl border border-gray-200 bg-[#fafafa] px-5 py-4 font-medium text-[#333333]">
                  Homepage → SEO Services → SEO Audit → Contact
                </div>

                <p>
                  If visitors can&apos;t easily move between important pages,
                  your website may have both a usability and site-structure
                  problem.
                </p>

                <h3 className="pt-2 text-xl font-semibold text-[#333333]">
                  Check your internal links too
                </h3>

                <p>
                  Internal links connect pages within your own website.
                </p>

                <p>
                  They help visitors discover related information and help
                  search engines understand how your content fits together.
                </p>

                <p>
                  For example, a blog post about local SEO could naturally link
                  to your{" "}
                  <Link
                    href="/services/google-ads"
                    className="font-medium underline decoration-[#F8BC04] decoration-2 underline-offset-4"
                  >
                    Local SEO Services
                  </Link>{" "}
                  page.
                </p>

                <p>
                  Use descriptive anchor text rather than vague phrases such as
                  &quot;click here.&quot;
                </p>

              </div>

            </div>


            <figure className="self-start overflow-hidden rounded-2xl bg-[#f5f5f5]">
              <Image
                src="/assets/blog/allblogs/website-seo-audit/website-seo-audit-3.png"
                alt="Technical SEO audit dashboard showing website SEO issues"
                width={2048}
                height={1365}
                sizes="(max-width: 1023px) 100vw, 430px"
                className="h-auto w-full object-contain"
              />
            </figure>

          </div>

        </section>


        {/* =======================================================
            SECTION 04
        ======================================================= */}
        <section className="mb-20 sm:mb-24 lg:mb-28">

          <h2
            className="
              mb-6
              text-[25px]
              font-semibold
              leading-[1.25]
              tracking-[-0.02em]
              text-[#333333]
              sm:text-[30px]
              lg:text-[34px]
            "
          >
            4. Review Your Page Titles and Meta Descriptions
          </h2>

          <div
            className="
              space-y-5
              text-[16px]
              leading-[1.75]
              text-[#555555]
              sm:text-[17px]
              lg:text-[18px]
            "
          >

            <p>
              Your page title is one of the simplest on-page SEO elements to
              review.
            </p>

            <p>
              Open your most important pages and check whether their titles
              clearly describe what each page is about.
            </p>

            <p>Look for:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Missing title tags</li>
              <li>Duplicate titles</li>
              <li>Generic titles</li>
              <li>Titles that are too long</li>
              <li>Titles that don&apos;t reflect the page content</li>
              <li>Missing or weak meta descriptions</li>
            </ul>

            <h3 className="pt-2 text-xl font-semibold text-[#333333]">
              Example
            </h3>

            <p>
              A title such as:
            </p>

            <div className="rounded-xl bg-[#f7f7f7] px-5 py-4 font-semibold text-[#333333]">
              Home | ABC Company
            </div>

            <p>
              doesn&apos;t tell a potential customer much.
            </p>

            <p>
              A more descriptive title could be:
            </p>

            <div className="rounded-xl bg-[#fffaf0] px-5 py-4 font-semibold text-[#333333]">
              SEO Services for Small Businesses | ABC Company
            </div>

            <p>
              It immediately communicates the page&apos;s topic and potential
              value.
            </p>

            <p>
              Your meta description should also accurately summarize the page
              and give searchers a reason to click.
            </p>

            <p>Don&apos;t force keywords into every sentence.</p>

            <p className="font-semibold text-[#333333]">
              Write for people first, then make the topic clear to search
              engines.
            </p>

          </div>

        </section>


        {/* =======================================================
            SECTION 05
        ======================================================= */}
        <section className="mb-20 sm:mb-24 lg:mb-28">

          <h2
            className="
              mb-6
              text-[25px]
              font-semibold
              leading-[1.25]
              tracking-[-0.02em]
              text-[#333333]
              sm:text-[30px]
              lg:text-[34px]
            "
          >
            5. Check Whether You&apos;re Targeting the Right Keywords
          </h2>

          <div
            className="
              space-y-5
              text-[16px]
              leading-[1.75]
              text-[#555555]
              sm:text-[17px]
              lg:text-[18px]
            "
          >

            <p>
              You can have a technically healthy website and still struggle
              with Google traffic if you&apos;re targeting the wrong search
              terms.
            </p>

            <p>
              Think about what your ideal customer searches for when they need
              your product or service.
            </p>

            <p>
              For example, a digital marketing business might target searches
              such as:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>SEO agency in [city]</li>
              <li>website SEO audit</li>
              <li>local SEO services</li>
              <li>digital marketing services for small businesses</li>
              <li>technical SEO services</li>
            </ul>

            <p>
              Now compare those searches with the pages on your website.
            </p>

            <h3 className="pt-2 text-xl font-semibold text-[#333333]">
              Ask these four questions
            </h3>

            <div className="space-y-3">
              <p className="font-medium text-[#333333]">
                Does each important service have a dedicated page?
              </p>

              <p className="font-medium text-[#333333]">
                Does each page focus on a clear topic?
              </p>

              <p className="font-medium text-[#333333]">
                Does the page match what the searcher actually wants?
              </p>

              <p className="font-medium text-[#333333]">
                Are the keywords relevant to people who could become customers?
              </p>
            </div>

            <p>
              This last point is particularly important.
            </p>

            <p>
              A keyword with thousands of searches isn&apos;t automatically
              valuable if those searches have nothing to do with your business.
            </p>

            <p>
              A local plumber, for example, may get far more commercial value
              from a specific search such as{" "}
              <strong>&quot;emergency plumber in [city]&quot;</strong> than
              from a broad keyword with a much larger search volume.
            </p>

            <h3 className="pt-2 text-xl font-semibold text-[#333333]">
              Don&apos;t keyword-stuff
            </h3>

            <p>
              Repeating the same keyword dozens of times isn&apos;t a good SEO
              strategy.
            </p>

            <p>
              Use your primary keyword naturally, then cover related questions,
              concepts, and terminology that genuinely help the reader.
            </p>

          </div>

        </section>


        {/* =======================================================
            SECTION 06
        ======================================================= */}
        <section className="mb-20 sm:mb-24 lg:mb-28">

          <h2
            className="
              mb-6
              text-[25px]
              font-semibold
              leading-[1.25]
              tracking-[-0.02em]
              text-[#333333]
              sm:text-[30px]
              lg:text-[34px]
            "
          >
            6. Check Your Content Against Search Intent
          </h2>

          <div
            className="
              space-y-5
              text-[16px]
              leading-[1.75]
              text-[#555555]
              sm:text-[17px]
              lg:text-[18px]
            "
          >

            <p>
              Now read your most important pages as if you were a potential
              customer.
            </p>

            <p>
              Within the first few seconds, can you understand:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>What does this company do?</li>
              <li>Who does it help?</li>
              <li>What service or product is being offered?</li>
              <li>Why should I choose it?</li>
              <li>What should I do next?</li>
            </ul>

            <p>
              If your homepage begins with:
            </p>

            <div className="rounded-xl bg-[#f7f7f7] px-5 py-4 font-semibold text-[#333333]">
              &quot;Welcome to Our Website&quot;
            </div>

            <p>
              you aren&apos;t giving visitors much information.
            </p>

            <p>
              Compare that with something more specific:
            </p>

            <div className="rounded-xl bg-[#fffaf0] px-5 py-4 font-semibold text-[#333333]">
              &quot;SEO Services Helping Local Businesses Generate More
              Qualified Leads&quot;
            </div>

            <p>
              The second headline immediately communicates the topic, audience,
              and value proposition.
            </p>

            <h3 className="pt-2 text-xl font-semibold text-[#333333]">
              Look for thin or outdated content
            </h3>

            <p>
              During your audit, identify pages containing:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Very little useful information</li>
              <li>Outdated information</li>
              <li>Duplicate content</li>
              <li>Excessive keyword repetition</li>
              <li>Generic content that offers little original value</li>
              <li>Content that doesn&apos;t satisfy the searcher&apos;s intent</li>
            </ul>

            <p>
              Good SEO content isn&apos;t created simply by adding keywords.
            </p>

            <p>
              It should help the reader accomplish what they came to Google to
              do.
            </p>

          </div>

        </section>


        {/* =======================================================
            DIY CHECKLIST
        ======================================================= */}
        <section className="mb-20 sm:mb-24 lg:mb-28">

          <div
            className="
              overflow-hidden
              rounded-[24px]
              border
              border-gray-200
              bg-[#fafafa]
            "
          >

            <div className="grid lg:grid-cols-[minmax(0,1fr)_340px]">

              <div className="p-7 sm:p-9 lg:p-11">

                <h2
                  className="
                    mb-5
                    text-[27px]
                    font-semibold
                    leading-[1.25]
                    tracking-[-0.02em]
                    text-[#333333]
                    sm:text-[32px]
                    lg:text-[36px]
                  "
                >
                  DIY SEO Audit Checklist
                </h2>

                <p className="mb-7 text-[16px] leading-[1.75] text-[#555555] sm:text-[17px]">
                  Here&apos;s a quick{" "}
                  <strong>DIY SEO audit checklist</strong> you can save and
                  work through:
                </p>

                <ul className="grid gap-3 sm:grid-cols-2">

                  {[
                    "Check whether important pages are indexed",
                    "Review your website's mobile experience",
                    "Test page speed and Core Web Vitals",
                    "Find broken links and 404 errors",
                    "Review internal links",
                    "Check page titles",
                    "Review meta descriptions",
                    "Look for duplicate metadata",
                    "Check whether important pages target relevant keywords",
                    "Make sure key services have dedicated pages",
                    "Review content quality",
                    "Check whether content matches search intent",
                    "Identify outdated or thin content",
                    "Review your website navigation",
                    "Check whether important pages are easy to reach",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] leading-7 text-[#555555]"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F8BC04]" />
                      <span>{item}</span>
                    </li>
                  ))}

                </ul>

                <p className="mt-7 text-[16px] leading-[1.75] text-[#555555]">
                  If you discover several problems, you&apos;ve already found
                  useful information about where your SEO needs attention.
                </p>

              </div>


              <div className="flex items-center justify-center bg-[#111111] p-6 sm:p-8 lg:p-10">
                <Image
                  src="/assets/blog/allblogs/website-seo-audit/website-seo-audit-card.png"
                  alt="DIY SEO audit checklist"
                  width={1536}
                  height={1536}
                  sizes="(max-width: 1023px) 70vw, 340px"
                  className="h-auto w-full max-w-[320px] rounded-xl object-contain"
                />
              </div>

            </div>

          </div>

        </section>


        {/* =======================================================
            FREE TOOLS
        ======================================================= */}
        <section className="mb-20 sm:mb-24 lg:mb-28">

          <h2
            className="
              mb-6
              text-[25px]
              font-semibold
              leading-[1.25]
              tracking-[-0.02em]
              text-[#333333]
              sm:text-[30px]
              lg:text-[34px]
            "
          >
            Free Tools You Can Use for a DIY SEO Audit
          </h2>

          <div
            className="
              space-y-8
              text-[16px]
              leading-[1.75]
              text-[#555555]
              sm:text-[17px]
              lg:text-[18px]
            "
          >

            <p>
              You don&apos;t need an expensive SEO platform to perform your
              first audit.
            </p>

            <div>
              <h3 className="mb-2 text-xl font-semibold text-[#333333]">
                Google Search Console
              </h3>

              <p className="mb-3">Use it to investigate:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Search performance</li>
                <li>Indexing</li>
                <li>Search queries</li>
                <li>Pages appearing in Google</li>
                <li>Search-related technical issues</li>
              </ul>
            </div>


            <div>
              <h3 className="mb-2 text-xl font-semibold text-[#333333]">
                Google PageSpeed Insights
              </h3>

              <p className="mb-3">Use it to assess:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Mobile performance</li>
                <li>Desktop performance</li>
                <li>Core Web Vitals</li>
                <li>Performance opportunities</li>
              </ul>
            </div>


            <div>
              <h3 className="mb-2 text-xl font-semibold text-[#333333]">
                Your Browser
              </h3>

              <p className="mb-3">
                Don&apos;t underestimate a manual inspection.
              </p>

              <p>Open your website on:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Desktop</li>
                <li>Smartphone</li>
                <li>Different browsers</li>
              </ul>

              <p className="mt-4">
                Click through your navigation and important links.
              </p>

              <p className="mt-4">
                Sometimes the simplest checks reveal problems that automated
                reports don&apos;t make obvious to a business owner.
              </p>
            </div>

          </div>

        </section>


        {/* =======================================================
            WHEN DIY ISN'T ENOUGH
        ======================================================= */}
        <section className="mb-20 sm:mb-24 lg:mb-28">

          <h2
            className="
              mb-6
              text-[25px]
              font-semibold
              leading-[1.25]
              tracking-[-0.02em]
              text-[#333333]
              sm:text-[30px]
              lg:text-[34px]
            "
          >
            When a DIY SEO Audit Isn&apos;t Enough
          </h2>

          <div
            className="
              space-y-5
              text-[16px]
              leading-[1.75]
              text-[#555555]
              sm:text-[17px]
              lg:text-[18px]
            "
          >

            <p>
              This is where many business owners hit a wall.
            </p>

            <p>
              Basic SEO checks can uncover obvious problems, but they
              don&apos;t tell the entire story.
            </p>

            <p>
              A deeper technical SEO audit may need to investigate:
            </p>

            <ul className="grid gap-2 sm:grid-cols-2">
              {[
                "XML sitemaps",
                "Robots.txt",
                "Canonical URLs",
                "Schema markup",
                "JavaScript rendering",
                "Crawlability",
                "Crawl budget",
                "Duplicate URLs",
                "Redirect chains",
                "HTTP status codes",
                "Site architecture",
                "International SEO",
                "Backlink quality",
                "Unnatural link patterns",
                "Backlink disavowal",
                "Server and log-file data",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F8BC04]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              These areas require considerably more technical knowledge.
            </p>

            <p>
              For example, discovering a suspicious backlink doesn&apos;t
              automatically mean you should disavow it.
            </p>

            <p>
              Likewise, seeing a crawl warning doesn&apos;t necessarily mean
              every affected URL is harming your rankings.
            </p>

            <div className="my-8 border-l-4 border-[#F8BC04] bg-[#fffaf0] px-6 py-5">
              <p className="font-semibold leading-7 text-[#333333]">
                The difficult part isn&apos;t finding SEO data. It&apos;s
                knowing what the data actually means and what should be
                changed.
              </p>
            </div>

            <p>
              That&apos;s where a professional technical SEO audit can provide
              much more value.
            </p>

          </div>

        </section>


        {/* =======================================================
            CTA
        ======================================================= */}
        <section className="mb-20 sm:mb-24 lg:mb-28">

          <div
            className="
              overflow-hidden
              rounded-[26px]
              bg-[#171717]
              text-white
            "
          >

            <div className="grid items-center lg:grid-cols-[minmax(0,1fr)_300px]">

              <div className="p-7 sm:p-10 lg:p-12">

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#F8BC04]">
                  Need Professional Help?
                </p>

                <h2
                  className="
                    mb-5
                    text-[28px]
                    font-semibold
                    leading-[1.2]
                    tracking-[-0.02em]
                    sm:text-[34px]
                    lg:text-[38px]
                  "
                >
                  Want Our SEO Team to Run a Free Deep-Dive Audit?
                </h2>

                <div className="space-y-4 text-[16px] leading-[1.75] text-gray-300 sm:text-[17px]">

                  <p>
                    If your website isn&apos;t generating the traffic,
                    enquiries, or sales you expected, guessing at SEO problems
                    can waste valuable time.
                  </p>

                  <p>
                    Our SEO team can take a deeper look at your website to
                    identify:
                  </p>

                  <ul className="grid gap-2 sm:grid-cols-2">
                    <li>• Technical SEO problems</li>
                    <li>• Indexing issues</li>
                    <li>• Keyword opportunities</li>
                    <li>• Content gaps</li>
                    <li>• Site-structure problems</li>
                    <li>• Performance concerns</li>
                    <li>• Other factors affecting organic visibility</li>
                  </ul>

                  <p className="font-medium text-white">
                    Want our SEO team to run a free, deep-dive technical audit
                    for you?
                  </p>

                  <p>
                    Instead of wondering whether your website SEO is bad,
                    you&apos;ll have a clearer picture of{" "}
                    <strong className="text-white">
                      what needs fixing, why it matters, and where you should
                      start.
                    </strong>
                  </p>

                </div>

                <Link
                  href="/connect"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#F8BC04]
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-[#171717]
                    transition
                    duration-300
                    hover:bg-white
                  "
                >
                  Get Your Free SEO Audit
                  <span>→</span>
                </Link>

              </div>


              <div className="hidden h-full min-h-[320px] items-center justify-center bg-[#111111] p-7 lg:flex">
                <Image
                  src="/assets/blog/allblogs/website-seo-audit/website-seo-audit-card.png"
                  alt="DIY SEO audit checklist"
                  width={1536}
                  height={1536}
                  sizes="300px"
                  className="h-auto w-full max-w-[250px] rounded-xl object-contain"
                />
              </div>

            </div>

          </div>

        </section>


        {/* =======================================================
            FINAL THOUGHTS
        ======================================================= */}
        <section className="mb-16 sm:mb-20">

          <h2
            className="
              mb-6
              text-[25px]
              font-semibold
              leading-[1.25]
              tracking-[-0.02em]
              text-[#333333]
              sm:text-[30px]
              lg:text-[34px]
            "
          >
            Final Thoughts
          </h2>

          <div
            className="
              space-y-5
              text-[16px]
              leading-[1.75]
              text-[#555555]
              sm:text-[17px]
              lg:text-[18px]
            "
          >

            <p>
              You don&apos;t need to be an SEO professional to start auditing
              your website.
            </p>

            <p>
              By checking{" "}
              <strong>
                indexing, speed, broken links, metadata, keyword targeting,
                and content quality
              </strong>
              , you can uncover many common SEO problems yourself.
            </p>

            <p>
              But a DIY audit is only the first step.
            </p>

            <p>
              If your website has deeper problems involving schema markup,
              crawlability, site architecture, backlinks, redirects, or
              indexing, a professional technical SEO audit can help uncover
              what&apos;s happening beneath the surface.
            </p>

            <p>
              The goal isn&apos;t simply to make your website
              &quot;SEO-friendly.&quot;
            </p>

            <p className="font-semibold text-[#333333]">
              The goal is to create a website that Google can understand, your
              customers can use, and your business can grow from.
            </p>

          </div>

        </section>


        {/* =======================================================
            FINAL BIGBEANS CTA
        ======================================================= */}
        <section className="border-t border-gray-200 pt-10 text-center sm:pt-12">

          <h2 className="text-[24px] font-semibold text-[#222222] sm:text-[30px]">
            Ready to Improve Your Website&apos;s SEO?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-7 text-gray-500 sm:text-[16px]">
            Let BIGBEANS DIGITAL help you identify SEO problems, improve
            organic visibility, and build a stronger digital foundation for
            your business.
          </p>

          <Link
            href="/"
            className="
              mt-6
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#F8BC04]
              px-7
              py-3.5
              text-sm
              font-semibold
              text-[#171717]
              transition
              duration-300
              hover:bg-[#171717]
              hover:text-white
            "
          >
            Visit BIGBEANS DIGITAL
            <span>→</span>
          </Link>

        </section>

      </article>

    </main>
  );
}