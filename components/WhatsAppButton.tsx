"use client";

import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false);

  const whatsappLink =
    "https://api.whatsapp.com/send?phone=916289102537&text=Hello%20Beans";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* =========================================================
          WHATSAPP CHAT POPUP
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
          <div className="flex items-center justify-between bg-[#075E54] px-3.5 py-3 sm:px-4 sm:py-3.5">

            {/* Brand */}
            <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">

              {/* Logo */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-black sm:h-10 sm:w-10">
  <img
    src="/bbdlogo.png"
    alt="Big Beans Digital Best Social Media Marketing Agency"
    className="h-full w-full object-contain"
  />
</div>

              {/* Name */}
              <div className="min-w-0">
                <p className="truncate text-[13px] font-semibold leading-tight text-white sm:text-[15px]">
                  Big Beans
                </p>

                <div className="mt-1 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] sm:h-2 sm:w-2" />

                  <span className="text-[10px] text-white/90 sm:text-[12px]">
                    Online
                  </span>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              aria-label="Close WhatsApp popup"
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
              CHAT MESSAGE AREA
          ===================================================== */}
          <div className="bg-[#E5DDD5] px-3.5 py-3.5 sm:px-4 sm:py-4">

            <div className="relative w-fit max-w-[85%] rounded-[9px] rounded-tl-none bg-white px-3 py-2.5 shadow-sm sm:max-w-[245px]">

              {/* Message Tail */}
              <span className="absolute -left-[7px] top-0 h-0 w-0 border-b-[8px] border-r-[8px] border-b-transparent border-r-white" />

              {/* Sender */}
              <p className="text-[10px] font-medium text-[#777] sm:text-[11px]">
                BigBeans
              </p>

              {/* Message */}
              <p className="mt-1 text-[13px] leading-[1.4] text-[#222] sm:text-[14px]">
                Hi! 👋I'm Beans.
                <br />
                I live in this tiny box, but my marketing ideas are huge. Lets Chat and see how can I help you!
              </p>

              {/* Time */}
              <p className="mt-1 text-right text-[8px] text-[#999] sm:text-[9px]">
                Now
              </p>
            </div>
          </div>

          {/* =====================================================
              START CHAT BUTTON
          ===================================================== */}
          <div className="bg-white px-3.5 py-2.5 sm:px-4 sm:py-3">

            <a
              href={whatsappLink}
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
                bg-[#25D366]
                px-3
                text-[13px]
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:bg-[#20bd5a]
                hover:shadow-md
                active:scale-[0.98]
                sm:h-11
                sm:text-[14px]
              "
            >

              {/* WhatsApp Icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] shrink-0 fill-white sm:h-[19px] sm:w-[19px]"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.79 11.79 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.59 5.93L.1 24l6.35-1.66a11.85 11.85 0 0 0 5.59 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.42ZM12.05 21.7h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.8 9.8 0 0 1-1.5-5.2C2.18 6.44 6.6 2.02 12.05 2.02c2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.43 9.8-9.87 9.8Zm5.4-7.35c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              </svg>

              <span>Alright Beans, 
                <br></br>Show me what you've got.</span>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          FLOATING WHATSAPP BUTTON
      ========================================================= */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BigBeans on WhatsApp"
        className="
          fixed
          bottom-4
          right-3
          z-[9999]
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          shadow-[0_5px_20px_rgba(0,0,0,0.2)]
          transition-transform
          duration-300
          hover:scale-110
          active:scale-95
          sm:bottom-5
          sm:right-5
          sm:h-14
          sm:w-14
          md:bottom-6
          md:right-6
        "
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-white sm:h-8 sm:w-8"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.79 11.79 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.59 5.93L.1 24l6.35-1.66a11.85 11.85 0 0 0 5.59 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.42ZM12.05 21.7h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.8 9.8 0 0 1-1.5-5.2C2.18 6.44 6.6 2.02 12.05 2.02c2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.43 9.8-9.87 9.8Zm5.4-7.35c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </>
  );
}