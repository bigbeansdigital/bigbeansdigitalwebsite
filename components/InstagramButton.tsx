"use client";

import { useEffect, useState } from "react";

export default function InstagramButton() {
  const [showPopup, setShowPopup] = useState(false);

  const instagramLink = "https://www.instagram.com/bigbeans_digital/";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* =========================================================
          INSTAGRAM POPUP
      ========================================================= */}
      <div
        className={`
          fixed
          z-[9998]
          right-3
          bottom-[82px]
          w-[calc(100vw-24px)]
          max-w-[340px]
          sm:right-5
          sm:bottom-[88px]
          sm:w-[320px]
          md:right-6
          md:bottom-[92px]
          md:w-[340px]
          transition-all
          duration-500
          ease-out
          ${
            showPopup
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-4 scale-95 opacity-0"
          }
        `}
      >
        <div className="overflow-hidden rounded-[16px] bg-white shadow-[0_12px_45px_rgba(0,0,0,0.22)] sm:rounded-[18px]">

          {/* =====================================================
              HEADER
          ===================================================== */}
          <div className="flex items-center justify-between bg-gradient-to-r from-[#405DE6] via-[#E1306C] to-[#FCAF45] px-3.5 py-3 sm:px-4 sm:py-3.5">

            <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">

              {/* Logo */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-black sm:h-10 sm:w-10">
                <img
                  src="/bbdlogo.png"
                  alt="BigBeans Digital"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Name */}
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="truncate text-[13px] font-semibold leading-tight text-white sm:text-[15px]">
                    Big Beans Digital
                  </p>

                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3897f0] text-xs text-white">
                    ✓
                  </span>
                </div>

                <div className="mt-1 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3ad46b] sm:h-2 sm:w-2" />

                  <span className="text-[10px] text-white/90 sm:text-[12px]">
                    Online
                  </span>
                </div>
              </div>

            </div>

            {/* Close */}
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              aria-label="Close Instagram popup"
              className="
                ml-2
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                text-[20px]
                leading-none
                text-white
                transition
                duration-200
                hover:bg-white/10
                active:scale-90
              "
            >
              ×
            </button>
          </div>

          {/* =====================================================
              MESSAGE AREA
          ===================================================== */}
          <div className="bg-[#f7f7f7] px-3.5 py-3.5 sm:px-4 sm:py-4">

            <div className="flex items-end gap-2.5">

              {/* Small Logo */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-black sm:h-10 sm:w-10">
                <img
                  src="/bbdlogo.png"
                  alt="BigBeans Digital"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Message Bubble */}
              <div className="max-w-[245px] rounded-[18px] rounded-bl-none bg-[#f0f1f3] px-3 py-3 shadow-sm">

                <p className="text-[13px] leading-[1.45] text-[#222] sm:text-[14px]">
                  Honestly ! We feel you would like to always stay updated about this kind
                  of blogs.
                  <br />
                  <br />
                  So why not follow us on Instagram and stay updated 😍
                </p>

              </div>

            </div>
          </div>

          {/* =====================================================
              FOLLOW BUTTON
          ===================================================== */}
          <div className="bg-white px-3.5 py-2.5 sm:px-4 sm:py-3">

            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                h-10
                w-full
                items-center
                justify-center
                gap-2
                rounded-[7px]
                bg-[#2878D4]
                px-3
                text-center
                text-[13px]
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:bg-[#2168ba]
                hover:shadow-md
                active:scale-[0.98]
                sm:h-11
                sm:text-[14px]
              "
            >
              {/* Instagram Icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] shrink-0 fill-none stroke-white stroke-[1.8] sm:h-[19px] sm:w-[19px]"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  className="fill-white stroke-none"
                />
              </svg>

              <span>
                Follow us on Instagram 
              </span>
            </a>

          </div>
        </div>
      </div>

      {/* =========================================================
          FLOATING INSTAGRAM BUTTON
      ========================================================= */}
      <button
        type="button"
        onClick={() => setShowPopup(true)}
        aria-label="Follow BigBeans Digital on Instagram"
        className="
          fixed
          bottom-[18px]
          right-3
          z-[9999]
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-gradient-to-tr
          from-[#FCAF45]
          via-[#E1306C]
          to-[#405DE6]
          shadow-[0_5px_20px_rgba(0,0,0,0.2)]
          transition-transform
          duration-300
          hover:scale-110
          active:scale-95
          sm:bottom-[5px]
          sm:right-5
          sm:h-14
          sm:w-14
          md:bottom-[30px]
          md:right-6
        "
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-none stroke-white stroke-[1.8] sm:h-8 sm:w-8"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            className="fill-white stroke-none"
          />
        </svg>
      </button>
    </>
  );
}