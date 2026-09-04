"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm relative z-50">
      {/* Main Header */}
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div className="h-[90px] flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/bbdlogo.png"
              alt="BIGBEANS DIGITAL"
              width={180}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 text-[16px] font-medium text-gray-800">

            {/* Home */}
            <Link
              href="/"
              className="transition-all duration-300 hover:scale-110 hover:font-bold hover:text-black"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 transition-all duration-300 hover:scale-110 hover:font-bold hover:text-black"
              >
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

                  <Link
                    href="/services/branding"
                    className="block px-5 py-3 hover:bg-yellow-50 hover:text-[#F8BC04] transition"
                  >
                    End to End Branding
                  </Link>

                  <Link
                href="/services/google-ads-meta-ads"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 pl-4 text-[15px] text-gray-600 hover:text-[#F8BC04] transition"
              >
                Performance Marketing
              </Link>

                  <Link
                    href="/services/logo-designing"
                    className="block px-5 py-3 hover:bg-yellow-50 hover:text-[#F8BC04] transition"
                  >
                    Logo Designing
                  </Link>

                  <Link
                    href="/services/website-development"
                    className="block px-5 py-3 hover:bg-yellow-50 hover:text-[#F8BC04] transition"
                  >
                    Website Development
                  </Link>

                  <Link
                href="/services/social-media-marketing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 pl-4 text-[15px] text-gray-600 hover:text-[#F8BC04] transition"
              >
                Digital Marketing
              </Link>

              <Link
                href="/services/social-media-marketing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 pl-4 text-[15px] text-gray-600 hover:text-[#F8BC04] transition"
              >
                SEO & Content Writing
              </Link>

                </div>
              </div>
            </div>

            {/* About */}
            <Link
              href="/#"
              className="transition-all duration-300 hover:scale-110 hover:font-bold hover:text-black"
            >
              About
            </Link>

            {/* Academy */}
            <Link
              href="/academy"
              className="transition-all duration-300 hover:scale-110 hover:font-bold hover:text-black"
            >
              Academy
            </Link>

            {/* Blogs */}
            <Link
              href="/blog"
              className="transition-all duration-300 hover:scale-110 hover:font-bold hover:text-black"
            >
              Blogs
            </Link>

            {/* Connect */}
            <Link
              href="/connect"
              className="transition-all duration-300 hover:scale-110 hover:font-bold hover:text-black"
            >
              Connect
            </Link>

            {/* Join Our Team */}
            <Link
              href="https://wa.link/pxmrrm"
              className="transition-all duration-300 hover:scale-110 hover:font-bold hover:text-black"
            >
              Join Our Team
            </Link>

          </nav>

          {/* Desktop CTA */}
          <Link
            href="https://wa.link/pxmrrm"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center justify-center bg-[#F8BC04] text-black font-bold text-[16px] px-7 h-[49px] rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#eeb000]"
          >
            Book Free Consultation &amp; Audit
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-[42px] h-[42px] flex-shrink-0"
          >
            <span
              className={`block w-[28px] h-[2px] bg-gray-700 transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />

            <span
              className={`block w-[28px] h-[2px] bg-gray-700 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`block w-[28px] h-[2px] bg-gray-700 transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`lg:hidden overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-[700px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pt-5 pb-7">

          {/* Home */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-[16px] font-medium text-gray-800 border-b border-gray-100"
          >
            Home
          </Link>

          {/* Mobile Services */}
          <div className="border-b border-gray-100">

            <button
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between py-3 text-[16px] font-medium text-gray-800"
            >
              <span>Services</span>

              <span
                className={`text-xs transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen
                  ? "max-h-[300px] opacity-100 pb-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <Link
                href="/services/social-media-marketing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 pl-4 text-[15px] text-gray-600 hover:text-[#F8BC04] transition"
              >
                Social Media Marketing
              </Link>


              <Link
                href="/services/branding"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 pl-4 text-[15px] text-gray-600 hover:text-[#F8BC04] transition"
              >
                End to End Branding
              </Link>

              <Link
                href="/services/google-ads-meta-ads"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 pl-4 text-[15px] text-gray-600 hover:text-[#F8BC04] transition"
              >
                Performance Marketing
              </Link>

              <Link
                href="/services/logo-designing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 pl-4 text-[15px] text-gray-600 hover:text-[#F8BC04] transition"
              >
                Logo Designing
              </Link>

              <Link
                href="/services/website-development"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 pl-4 text-[15px] text-gray-600 hover:text-[#F8BC04] transition"
              >
                Website Development
              </Link>

<Link
                href="/services/social-media-marketing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 pl-4 text-[15px] text-gray-600 hover:text-[#F8BC04] transition"
              >
                Digital Marketing
              </Link>

              <Link
                href="/services/social-media-marketing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 pl-4 text-[15px] text-gray-600 hover:text-[#F8BC04] transition"
              >
                SEO & Content Writing
              </Link>

              

            </div>

          </div>

          {/* About */}
          <Link
            href="/#"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-[16px] font-medium text-gray-800 border-b border-gray-100"
          >
            About
          </Link>

          {/* Blog */}
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-[16px] font-medium text-gray-800 border-b border-gray-100"
          >
            Blog
          </Link>

          {/* Academy */}
          <Link
            href="/academy"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-[16px] font-medium text-gray-800 border-b border-gray-100"
          >
            Academy
          </Link>


          {/* Connect */}
          <Link
            href="/connect"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-[16px] font-medium text-gray-800 border-b border-gray-100"
          >
            Connect
          </Link>

          {/* Join Our Team */}
          <Link
            href="https://wa.link/pxmrrm"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-[16px] font-medium text-gray-800 border-b border-gray-100"
          >
            Join Our Team
          </Link>

          {/* Mobile CTA */}
          <Link
            href="https://wa.link/pxmrrm"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-5 flex items-center justify-center w-full max-w-[300px] h-[50px] bg-[#F8BC04] text-black font-bold text-[15px] rounded-full transition-all duration-300 hover:bg-[#eeb000]"
          >
            Book Free Consultation &amp; Audit
          </Link>

        </div>
      </div>
    </header>
  );
}