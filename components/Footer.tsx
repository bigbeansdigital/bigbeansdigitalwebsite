"use client";

import {
  Mail,
  Phone,
  MapPin,
  
  
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white">

      <div className="max-w-[1400px] mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* COLUMN 1 */}

          <div>

            <Image
  src="/bbdlogo.png"
  alt="BIGBEANS DIGITAL"
  width={220}
  height={70}
  className="h-auto w-[300px]"
/>

            <p className="mt-8 text-gray-400">
              Trusted digital growth partner helping
              startups, local businesses and brands
              scale through strategy, creativity and
              performance marketing.
            </p>

            <div className="mt-8">

              <h3 className="text-gray-400 text-sm uppercase tracking-[3px]">
                Google Reviews
              </h3>

              <div className="mt-3 flex items-center gap-3">

                <span className="text-5xl font-black">
                  4.9
                </span>

                <span className="text-[#F8BC04] text-2xl">
                  ★★★★★
                </span>

              </div>

              <p className="mt-2 text-gray-400">
                Trusted by clients worldwide
              </p>

            </div>

          </div>

          {/* COLUMN 2 */}

          <div>

            <h3 className="text-2xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">

                <Mail
                  size={20}
                  className="text-[#F8BC04]"
                />

                <span>
                  connect.bigbeansdigital@gmail.com
                </span>

              </div>

              <div className="flex items-start gap-3">

                <Phone
                  size={20}
                  className="text-[#F8BC04]"
                />

                <span>
                  +91 62891 02537
                </span>

              </div>

              <div className="flex items-start gap-3">

                <MapPin
                  size={20}
                  className="text-[#F8BC04]"
                />

                <span>
                  kolkata,West Bengal,India
                </span>

              </div>

            </div>

            {/* SOCIAL */}

            <div className="flex gap-5 mt-8">

            </div>

          </div>

          {/* COLUMN 3 */}

          <div>

            <h3 className="text-2xl font-bold mb-8">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">

  <li>
    <Link href="/" className="transition hover:text-[#F8BC04]">
      Home
    </Link>
  </li>

  <li>
    <Link href="/about" className="transition hover:text-[#F8BC04]">
      About
    </Link>
  </li>

  <li>
    <Link href="/internship" className="transition hover:text-[#F8BC04]">
      Internship
    </Link>
  </li>

  <li>
    <Link href="/academy" className="transition hover:text-[#F8BC04]">
      Academy
    </Link>
  </li>

  <li>
    <Link href="/connect" className="transition hover:text-[#F8BC04]">
      Connect
    </Link>
  </li>

 <li>
  <a
    href="/blog"
    className="transition hover:text-[#F8BC04]"
  >
    Blogs
  </a>
</li>

</ul>

          </div>

          {/* COLUMN 4 */}

          <div>

  <h3 className="text-2xl font-bold mb-8">
    Services
  </h3>

  <ul className="space-y-4 text-gray-300">

    <li>
      <Link
        href="/services/social-media-marketing"
        className="transition duration-300 hover:text-[#F8BC04]"
      >
        Social Media Marketing
      </Link>
    </li>

    <li>
      <Link
        href="/services/website-development"
        className="transition duration-300 hover:text-[#F8BC04]"
      >
        Website Development
      </Link>
    </li>

    <li>
      <Link
        href="/services/branding"
        className="transition duration-300 hover:text-[#F8BC04]"
      >
        Branding
      </Link>
    </li>

    <li>
      <Link
        href="/services/logo-designing"
        className="transition duration-300 hover:text-[#F8BC04]"
      >
        Logo Designing
      </Link>
    </li>

    <li>
      <Link
        href="/services/google-ads-meta-ads"
        className="transition duration-300 hover:text-[#F8BC04]"
      >
        Digital Ads
      </Link>
    </li>

  </ul>

</div>
</div>

        {/* BOTTOM BAR */}

        <div
          className="
            border-t
            border-white/10
            mt-16
            pt-8
            flex
            flex-col
            lg:flex-row
            justify-between
            gap-5
          "
        >

          <div className="flex gap-6 text-gray-400">

            <span className="hover:text-[#F8BC04] cursor-pointer transition">
              Privacy Policy
            </span>

            <span className="hover:text-[#F8BC04] cursor-pointer transition">
              Sitemap
            </span>

            <span className="hover:text-[#F8BC04] cursor-pointer transition">
              Terms & Conditions
            </span>

          </div>

          <div className="text-gray-400">
            © 2026 BIGBEANS DIGITAL | All Rights Reserved
          </div>

        </div>

      </div>

    </footer>
  );
}