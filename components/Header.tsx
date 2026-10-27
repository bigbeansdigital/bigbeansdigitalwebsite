
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const navItem = { hidden: { opacity: 0, y: -6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } };
const navContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } };
const services = [
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Full Scale Branding", href: "/services/branding" },
  { label: "3D Immersive Website Development", href: "/services/website-development" },
  { label: "Performance Marketing", href: "/services/google-ads-meta-ads" },
  { label: "Logo Designing", href: "/services/logo-designing" },
  { label: "Full Scale Digital Marketing", href: "/services/social-media-marketing" },
];
const mobileServices = [
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "End to End Branding", href: "/services/branding" },
  { label: "Performance Marketing", href: "/services/google-ads-meta-ads" },
  { label: "Logo Designing", href: "/services/logo-designing" },
  { label: "Website Development", href: "/services/website-development" },
  { label: "Digital Marketing", href: "/services/social-media-marketing" },
  { label: "SEO & Content Writing", href: "/services/social-media-marketing" },
];
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <header className="sticky top-0 z-[100] w-full bg-black px-4 py-2 sm:px-6 lg:px-[26px]">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1895px] items-center justify-between gap-5 sm:min-h-[82px] lg:gap-8">
        <Link href="/" aria-label="Big Beans Digital Home" className="relative z-10 flex shrink-0 items-center">
          <Image src="/bbdlogo.png" alt="Big Beans Digital" width={260} height={80} priority className="h-auto w-[165px] object-contain sm:w-[190px] lg:w-[220px] xl:w-[240px]" />
        </Link>
        <motion.nav variants={navContainer} initial="hidden" animate="visible" className="hidden h-[62px] flex-1 items-center justify-center rounded-full border border-black/[0.04] bg-white px-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)] lg:flex xl:max-w-[1065px]">
          <AnimatedNavItem href="/">Home</AnimatedNavItem>
          <motion.div variants={navItem} className="relative flex h-full items-center" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button type="button" aria-haspopup="true" aria-expanded={servicesOpen} onClick={() => setServicesOpen((open) => !open)} className="flex h-[50px] items-center gap-2 rounded-full px-5 text-[17px] font-semibold text-black transition-colors hover:text-[#B88600] xl:px-7 xl:text-[18px]">
              Services
              <motion.span animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-[12px]">▾</motion.span>
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.18 }} className="absolute left-1/2 top-full z-[200] w-[300px] -translate-x-1/2 pt-3">
                  <div className="overflow-hidden rounded-[18px] border border-black/10 bg-white p-1 shadow-xl">
                    {services.map((service) => (
                      <Link key={service.label} href={service.href} onClick={() => setServicesOpen(false)} className="block rounded-xl px-4 py-3 text-[15px] font-semibold text-black/80 transition-colors hover:bg-black/[0.05] hover:text-[#B88600]">
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <AnimatedNavItem href="/about">About</AnimatedNavItem>
          <AnimatedNavItem href="/academy">Academy</AnimatedNavItem>
          <AnimatedNavItem href="/blog">Blogs</AnimatedNavItem>
          <AnimatedNavItem href="/connect">Connect</AnimatedNavItem>
          <AnimatedNavItem href="https://wa.link/pxmrrm" external>Join Our Team</AnimatedNavItem>
        </motion.nav>
        <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="hidden shrink-0 lg:block">
          <Link href="https://wa.link/rtfeow" target="_blank" rel="noopener noreferrer" className="group flex h-[52px] items-center justify-center gap-2 rounded-full border border-[#E0AC00] bg-[#FFC400] px-6 text-black shadow-[0_2px_5px_rgba(0,0,0,0.12)] transition-colors hover:bg-[#FFD21A] xl:h-[56px] xl:min-w-[280px] xl:px-7">
            <PhoneIcon className="h-[21px] w-[21px] shrink-0" />
            <span className="whitespace-nowrap text-[14px] font-bold xl:text-[15px]">Request For A Quote</span>
            <span className="ml-1 text-[19px] transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
        <button type="button" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)} className="flex h-[46px] w-[46px] shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-white/20 bg-white text-black shadow-sm lg:hidden">
          <motion.span animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 7 : 0 }} transition={{ duration: 0.25 }} className="h-[2px] w-[22px] bg-current" />
          <motion.span animate={{ opacity: mobileMenuOpen ? 0 : 1, scaleX: mobileMenuOpen ? 0 : 1 }} transition={{ duration: 0.2 }} className="h-[2px] w-[22px] bg-current" />
          <motion.span animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -7 : 0 }} transition={{ duration: 0.25 }} className="h-[2px] w-[22px] bg-current" />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden lg:hidden">
            <div className="mx-0 mt-3 overflow-hidden rounded-[22px] border border-white/10 bg-black px-5 pb-5 pt-2 shadow-xl">
              <MobileNavLink href="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
              <div className="border-b border-white/10">
                <button type="button" aria-expanded={mobileServicesOpen} onClick={() => setMobileServicesOpen((open) => !open)} className="flex w-full items-center justify-between py-4 text-[18px] font-semibold text-white">
                  Services
                  <motion.span animate={{ rotate: mobileServicesOpen ? 180 : 0 }} className="text-xs text-white/60">▾</motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                      <div className="pb-3">
                        {mobileServices.map((service) => (
                          <MobileServiceLink key={service.label} href={service.href} onClick={() => setMobileMenuOpen(false)}>{service.label}</MobileServiceLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="/academy" onClick={() => setMobileMenuOpen(false)}>Academy</MobileNavLink>
              <MobileNavLink href="/blog" onClick={() => setMobileMenuOpen(false)}>Blogs</MobileNavLink>
              <MobileNavLink href="/connect" onClick={() => setMobileMenuOpen(false)}>Connect</MobileNavLink>
              <MobileNavLink href="https://wa.link/pxmrrm" external onClick={() => setMobileMenuOpen(false)}>Join Our Team</MobileNavLink>
              <Link href="https://wa.link/rtfeow" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="mt-4 flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#FFC400] px-4 text-[15px] font-bold text-black transition-colors hover:bg-[#FFD21A]">
                <PhoneIcon className="h-[19px] w-[19px]" />
                Request For A Quote <span className="text-[19px]">→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
function AnimatedNavItem({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <motion.div variants={navItem} whileHover={{ y: -1 }} className="flex h-full shrink-0 items-center">
      <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="whitespace-nowrap rounded-full px-5 py-2 text-[16px] font-semibold text-black transition-colors hover:text-[#B88600] xl:px-6 xl:text-[18px]">
        {children}
      </Link>
    </motion.div>
  );
}
function MobileNavLink({ href, children, onClick, external = false }: { href: string; children: React.ReactNode; onClick?: () => void; external?: boolean }) {
  return (
    <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} onClick={onClick} className="block border-b border-white/10 py-4 text-[17px] font-semibold text-white/90 transition-colors hover:text-[#FFC400]">
      {children}
    </Link>
  );
}
function MobileServiceLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="block py-3 pl-3 text-[15px] font-medium text-white/65 transition-colors hover:text-[#FFC400]">
      {children}
    </Link>
  );
}
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
