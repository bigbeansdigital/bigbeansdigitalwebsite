"use client";

import Image from "next/image";
import Link from "next/link";

type GalleryImage = {
  src: string;
  alt: string;
};

type CampaignImage = {
  src: string;
  alt: string;
};

function ImageFrame({
  image,
  className = "",
}: {
  image: GalleryImage;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden border border-white/20 bg-[#111111] ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 50vw, 20vw"
        className="object-cover"
      />
    </div>
  );
}

function CampaignFrame({
  image,
}: {
  image: CampaignImage;
}) {
  return (
    <div className="relative aspect-[1.55/1] overflow-hidden border border-white/30 bg-[#111111] p-[3px]">
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 50vw, 22vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function DesiVdesiBrandPage() {
  /*
   * ============================================================
   * IMAGE PATHS
   * Replace these paths later with your actual images.
   * ============================================================
   */

  const campaignImages: CampaignImage[] = [
    {
      src: "/desi-vdesi/campaign-01.webp",
      alt: "Desi Vdesi campaign creative 1",
    },
    {
      src: "/desi-vdesi/campaign-02.webp",
      alt: "Desi Vdesi campaign creative 2",
    },
    {
      src: "/desi-vdesi/campaign-03.webp",
      alt: "Desi Vdesi campaign creative 3",
    },
    {
      src: "/desi-vdesi/campaign-04.webp",
      alt: "Desi Vdesi campaign creative 4",
    },
  ];

  const galleryImages: GalleryImage[] = [
    {
      src: "/desi-vdesi/gallery-01.webp",
      alt: "Desi Vdesi beauty campaign 1",
    },
    {
      src: "/desi-vdesi/gallery-02.webp",
      alt: "Desi Vdesi beauty campaign 2",
    },
    {
      src: "/desi-vdesi/gallery-03.webp",
      alt: "Desi Vdesi beauty campaign 3",
    },
    {
      src: "/desi-vdesi/gallery-04.webp",
      alt: "Desi Vdesi beauty campaign 4",
    },
    {
      src: "/desi-vdesi/gallery-05.webp",
      alt: "Desi Vdesi beauty campaign 5",
    },
    {
      src: "/desi-vdesi/gallery-06.webp",
      alt: "Desi Vdesi beauty campaign 6",
    },
    {
      src: "/desi-vdesi/gallery-07.webp",
      alt: "Desi Vdesi beauty campaign 7",
    },
    {
      src: "/desi-vdesi/gallery-08.webp",
      alt: "Desi Vdesi beauty campaign 8",
    },
    {
      src: "/desi-vdesi/gallery-09.webp",
      alt: "Desi Vdesi beauty campaign 9",
    },
    {
      src: "/desi-vdesi/gallery-10.webp",
      alt: "Desi Vdesi beauty campaign 10",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="mx-auto w-full max-w-[1440px] px-3 py-4 sm:px-5 sm:py-6 lg:px-7 lg:py-8">

        {/* =======================================================
            HERO SECTION
            ======================================================= */}

        <section className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.15fr] md:items-center md:gap-8">

          {/* LEFT HEADER */}

          <div className="flex flex-col justify-center">
            <h1 className="text-[29px] font-bold leading-[0.98] tracking-[-0.04em] sm:text-[38px] lg:text-[45px]">
              <span className="block text-white">
                The Brand -
              </span>

              <span className="block text-[#F8BC04]">
                The Desi Vdesi
              </span>
            </h1>

            <p className="mt-3 max-w-[460px] text-[9px] leading-[1.55] text-white/80 sm:text-[11px]">
              A story of tradition, culture and modern living — how The Desi
              Vdesi is bringing the best of both worlds together in London.
            </p>
          </div>

          {/* RIGHT LOGO */}

          <div className="flex items-center justify-center md:justify-end">
            <div className="relative h-[95px] w-full max-w-[430px] sm:h-[120px] lg:h-[145px]">
              <Image
                src="/desi-vdesi/logo.webp"
                alt="The Desi Vdesi"
                fill
                priority
                className="object-contain object-center md:object-right"
              />
            </div>
          </div>
        </section>


        {/* =======================================================
            ABOUT THE BRAND
            ======================================================= */}

        <section className="mt-10 flex justify-center sm:mt-12 lg:mt-14">

          <div className="w-full max-w-[850px] text-center">

            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#F8BC04] sm:text-[10px]">
              About the Brand
            </p>

            <h2 className="mt-3 text-[24px] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[30px] lg:text-[36px]">
              Tradition, Culture & Modern Living
            </h2>

            <p className="mx-auto mt-4 max-w-[760px] text-[10px] leading-[1.7] text-white/70 sm:text-[12px] sm:leading-[1.8]">
              The Desi Vdesi brings together the familiarity of Indian
              traditions with the pace and lifestyle of modern London. The
              brand focuses on creating a connection between cultural roots,
              contemporary living and the everyday experiences of a new
              generation.
            </p>

            <p className="mx-auto mt-3 max-w-[760px] text-[10px] leading-[1.7] text-white/70 sm:text-[12px] sm:leading-[1.8]">
              With its identity built around the idea of bringing the best of
              both worlds together, The Desi Vdesi creates a space where
              Indian culture can feel relevant, familiar and naturally part of
              modern life in London.
            </p>

            <div className="mx-auto mt-5 h-[2px] w-12 bg-[#F8BC04] sm:mt-6 sm:w-16" />

          </div>

        </section>


        {/* =======================================================
            CASE STUDY SECTION
            ======================================================= */}

        <section className="mt-8 grid grid-cols-1 gap-5 md:mt-10 md:grid-cols-[1fr_1.02fr] md:gap-7 lg:gap-9">

          {/* LEFT CASE STUDY TEXT */}

          <div className="flex flex-col justify-center">

            <div className="text-[10px] leading-[1.45] text-white/80 sm:text-[11px] lg:text-[12px]">
              <span className="font-bold text-[#F8BC04]">
                Background:
              </span>{" "}
              A decade old regional beauty brand with premium Ayurvedic
              products.
            </div>

            <div className="mt-4 text-[10px] leading-[1.45] text-white/80 sm:text-[11px] lg:text-[12px]">
              <span className="font-bold text-[#F8BC04]">
                Challenge:
              </span>{" "}
              Establish it as the leading Ayurvedic beauty brand and inspire
              trust on the products.
            </div>

            <div className="mt-4 text-[10px] leading-[1.45] text-white/80 sm:text-[11px] lg:text-[12px]">
              <span className="font-bold text-[#F8BC04]">
                Task:
              </span>{" "}
              Educating the TG about the product benefits, making it a
              household name.
            </div>

            <div className="mt-4 text-[10px] leading-[1.45] text-white/80 sm:text-[11px] lg:text-[12px]">
              <span className="font-bold text-[#F8BC04]">
                Strategy:
              </span>{" "}
              Leveraging their ethos of Pure Ayurvedic products. Extracting
              its exact beauty benefit and the ingredients, and highlighting
              them in the creative most way possible.
            </div>

            <div className="mt-4 text-[10px] leading-[1.45] text-white/80 sm:text-[11px] lg:text-[12px]">
              <span className="font-bold text-[#F8BC04]">
                Result:
              </span>{" "}
              Ads like ‘Chul porar goray tola’ came up, helped us bag the SR
              JUNAN/SANNAN and of course, goodness of the Arish products is a
              market hit and one of the most sought after beauty brands.
            </div>

          </div>


          {/* RIGHT 2 x 2 CAMPAIGN GRID */}

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {campaignImages.map((image, index) => (
              <CampaignFrame
                key={`${image.src}-${index}`}
                image={image}
              />
            ))}
          </div>

        </section>


        {/* =======================================================
            MAIN IMAGE GALLERY
            ======================================================= */}

        <section className="mt-7 sm:mt-9 lg:mt-10">

          <div className="grid grid-cols-2 gap-[4px] sm:grid-cols-3 sm:gap-[5px] md:grid-cols-5 md:gap-[6px]">

            {galleryImages.map((image, index) => (
              <ImageFrame
                key={`${image.src}-${index}`}
                image={image}
                className="aspect-[0.72/1]"
              />
            ))}

          </div>

        </section>


        {/* =======================================================
            CTA SECTION
            ======================================================= */}

        <section className="mt-10 sm:mt-12 lg:mt-14">

          <div className="relative overflow-hidden border border-white/15 bg-[#111111] px-5 py-8 text-center sm:px-8 sm:py-10 lg:px-12 lg:py-12">

            {/* SUBTLE YELLOW ACCENT */}

            <div className="absolute left-1/2 top-0 h-[3px] w-20 -translate-x-1/2 bg-[#F8BC04] sm:w-28" />

            {/* SMALL LABEL */}

            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#F8BC04] sm:text-[10px]">
              Have a Brand Story to Tell?
            </p>

            {/* CTA HEADING */}

            <h2 className="mx-auto mt-3 max-w-[700px] text-[24px] font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-[30px] lg:text-[38px]">
              Let’s Create Something
              <span className="text-[#F8BC04]">
                {" "}Worth Remembering.
              </span>
            </h2>

            {/* CTA DESCRIPTION */}

            <p className="mx-auto mt-4 max-w-[650px] text-[10px] leading-[1.7] text-white/60 sm:text-[12px] sm:leading-[1.8]">
              From strategy and creative direction to digital campaigns and
              brand communication, we help businesses turn their ideas into
              work that connects with the right audience.
            </p>

            {/* CTA BUTTONS */}

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                href="/connect"
                className="inline-flex min-h-[40px] items-center justify-center bg-[#F8BC04] px-6 text-[10px] font-bold text-black transition-all duration-300 hover:bg-white sm:min-h-[44px] sm:px-7 sm:text-[11px]"
              >
                Start a Conversation
              </Link>

              <Link
                href="/our-work"
                className="inline-flex min-h-[40px] items-center justify-center border border-white/25 px-6 text-[10px] font-semibold text-white transition-all duration-300 hover:border-[#F8BC04] hover:text-[#F8BC04] sm:min-h-[44px] sm:px-7 sm:text-[11px]"
              >
                View More Work
              </Link>

            </div>

          </div>

        </section>


        {/* =======================================================
            BOTTOM SPACE
            ======================================================= */}

        <div className="h-5 sm:h-8" />

      </div>
    </main>
  );
}