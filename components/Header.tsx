import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/bbdlogo.png"
            alt="BIGBEANS DIGITAL"
            width={180}
            height={50}
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-[16px] font-medium text-gray-800">

          <Link
  href="/"
  className="transition-all duration-300 hover:scale-110 hover:font-bold hover:text-black"
>
  Home
</Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 transition-all duration-300 hover:scale-110 hover:font-bold hover:text-black">
              Services
              <span className="text-xs">▾</span>
            </button>

            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">

               <Link
                href="/services/social-media-marketing"
                className="block px-5 py-3 hover:bg-yellow-50 hover:text-[#F8BC04] transition"
                >
                Social Media Marketing
                </Link>
                <a
  href="/services/branding"
  className="block px-5 py-3 hover:bg-yellow-50 hover:text-[#F8BC04] transition"
>
  Branding
</a>
              <Link
  href="/services/logo-designing"
  className="block px-5 py-3 hover:bg-yellow-50 hover:text-[#F8BC04] transition"
>
  Logo Designing
</Link>
<Link
  href="/services/google-ads-meta-ads"
  className="block px-5 py-3 hover:bg-yellow-50 hover:text-[#F8BC04] transition"
>
  Google Ads & Meta Ads
</Link>
              
                <Link
  href="/services/website-development"
  className="block px-5 py-3 hover:bg-yellow-50 hover:text-[#F8BC04] transition"
>
  Website Development
</Link>
                <Link
                href="/services/social-media-marketing"
                className="block px-5 py-3 hover:bg-yellow-50 hover:text-[#F8BC04] transition"
                >
                SEO
                </Link>
              </div>
            </div>
          </div>

          <Link
  href="/about"
  className="transition-all duration-300 hover:scale-110 hover:font-bold hover:text-black"
>
  About
</Link>

         <Link
  href="/internship"
  className="transition-all duration-300 hover:scale-110 hover:font-bold hover:text-black"
>
  Internship
</Link>

          <Link
  href="/academy"
  className="transition-all duration-300 hover:scale-110 hover:font-bold hover:text-black"
>
  Academy
</Link>

         <Link
  href="/connect"
  className="transition-all duration-300 hover:scale-110 hover:font-bold hover:text-black"
>
  Connect
</Link>

        </nav>

        {/* CTA Button */}
        <Link href="https://wa.link/pxmrrm">
  <button className="bg-[#F8BC04] text-black px-7 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300">
    Book Free Consultation & Audit
  </button>
</Link>

      </div>
    </header>
  );
}