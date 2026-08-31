import Link from "next/link";

export default function Sitemap() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      {/* Breadcrumb */}
      <section className="w-full bg-white py-6 sm:py-10">
        <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:gap-3 sm:px-8 sm:py-4">
            <Link
              href="/"
              className="text-sm text-gray-700 transition-colors duration-300 hover:text-[#F8BC04] sm:text-base"
            >
              Home
            </Link>

            <span className="text-base text-[#F8BC04] sm:text-lg">→</span>

            <span className="text-sm font-semibold text-black sm:text-base">
              Sitemap
            </span>
          </div>
        </div>
      </section>

      {/* Sitemap Categories */}
      <section className="w-full bg-white px-4 pb-16 sm:px-6 lg:pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">

          {/* PAGES */}
          <div className="rounded-[28px] border border-[#E8E8E8] bg-[#FAFAFA] p-8 sm:p-10">
            <h2 className="mb-8 font-serif text-3xl text-[#F8BC04] sm:text-4xl">
              Pages
            </h2>

            <ul className="space-y-4">

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link href="/" className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                  Home
                </Link>
              </li>

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link href="/about" className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                  About
                </Link>
              </li>

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link href="/academy" className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                  Academy
                </Link>
              </li>

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link href="/blog" className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                  Blog
                </Link>
              </li>

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link href="/connect" className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                  Connect
                </Link>
              </li>

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link href="/courses" className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                  Courses
                </Link>
              </li>

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link href="/courses/digital-marketing-mastery" className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                  Digital Marketing Mastery
                </Link>
              </li>

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link href="/internship" className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                  Internship
                </Link>
              </li>

            </ul>
          </div>

          {/* SERVICES */}
          <div className="rounded-[28px] border border-[#E8E8E8] bg-[#FAFAFA] p-8 sm:p-10">
            <h2 className="mb-8 font-serif text-3xl text-[#F8BC04] sm:text-4xl">
              Services
            </h2>

            <ul className="space-y-4">

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link href="/services/branding" className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                  Branding
                </Link>
              </li>

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link href="/services/google-ads-meta-ads" className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                  Google Ads & Meta Ads
                </Link>
              </li>

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link href="/services/logo-designing" className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                  Logo Designing
                </Link>
              </li>

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link href="/services/social-media-marketing" className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                  Social Media Marketing
                </Link>
              </li>

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link href="/services/website-development" className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                  Website Development
                </Link>
              </li>

            </ul>
          </div>

          {/* LOCATIONS */}
          <div className="rounded-[28px] border border-[#E8E8E8] bg-[#FAFAFA] p-8 sm:p-10">
            <h2 className="mb-8 font-serif text-3xl text-[#F8BC04] sm:text-4xl">
              Locations
            </h2>

            <ul className="space-y-4">

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link 
                href="https://www.bigbeansdigital.com/digital-marketing-agency-london" 
                className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                 Best Social Media Marketing Agency in London
                </Link>
                </li>

            </ul>

            <ul className="space-y-4">

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link 
                href="https://www.bigbeansdigital.com/digital-marketing-agency-kolkata" 
                className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                 Best Social Media Marketing Agency in Kolkata
                </Link>
                </li>

            </ul>

            <ul className="space-y-4">

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link 
                href="https://www.bigbeansdigital.com/digital-marketing-agency-mumbai" 
                className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                 Best Social Media Marketing Agency in Mumbai
                </Link>
                </li>

            </ul>

          </div>

          {/* INDUSTRIES */}
          <div className="rounded-[28px] border border-[#E8E8E8] bg-[#FAFAFA] p-8 sm:p-10">
            <h2 className="mb-8 font-serif text-3xl text-[#F8BC04] sm:text-4xl">
              Industries
            </h2>

            <ul className="space-y-4">

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link 
                href="https://www.bigbeansdigital.com/" 
                className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                 TOPIC
                </Link>
                </li>



            </ul>
          </div>

          {/* CASE STUDIES */}
          <div className="rounded-[28px] border border-[#E8E8E8] bg-[#FAFAFA] p-8 sm:p-10">
            <h2 className="mb-8 font-serif text-3xl text-[#F8BC04] sm:text-4xl">
              Case Studies
            </h2>

            <ul className="space-y-4">

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link 
                href="https://www.bigbeansdigital.com/" 
                className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                 TOPIC
                </Link>
                </li>




            </ul>
          </div>

          {/* BLOGS */}
          <div className="rounded-[28px] border border-[#E8E8E8] bg-[#FAFAFA] p-8 sm:p-10">
            <h2 className="mb-8 font-serif text-3xl text-[#F8BC04] sm:text-4xl">
              Blogs
            </h2>

            <ul className="space-y-4">

               <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link 
                href="/blog/allblogs/social-media-marketing-cost-india" 
                className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                 Social Media Marketing Cost in India
                </Link>
              </li>

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link 
                href="/blog/allblogs/how-to-choose-a-business-name-guide-for-startups" 
                className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                 How to Choose a Business Name: A Complete Guide for Startups
                </Link>
              </li>





            </ul>
          </div>

          {/* INTERNS REPORT */}
          <div className="rounded-[28px] border border-[#E8E8E8] bg-[#FAFAFA] p-8 sm:p-10">
            <h2 className="mb-8 font-serif text-3xl text-[#F8BC04] sm:text-4xl">
              Interns Report
            </h2>

            <ul className="space-y-4">

              <li className="relative pl-5 text-[15px] leading-6 sm:text-[16px]">
                <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#171717]" />
                <Link 
                href="https://www.bigbeansdigital.com/" 
                className="text-[#173B91] transition-colors duration-300 hover:text-[#F8BC04] hover:underline underline-offset-4">
                 TOPIC
                </Link>
                </li>

            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}