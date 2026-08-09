"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function Internship() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedDomain, setSelectedDomain] = useState("All Domains");
  const [selectedMode, setSelectedMode] = useState("All");
  const [search, setSearch] = useState("");

  const internshipDomains = [
    "Social Media Marketing",
    "Graphic Design",
  ];

  const filteredDomains = useMemo(() => {
    return internshipDomains.filter((domain) => {
      const matchesSearch =
        !search ||
        domain.toLowerCase().includes(search.toLowerCase());

      const matchesDomain =
        selectedDomain === "All Domains" || domain === selectedDomain;

      return matchesSearch && matchesDomain;
    });
  }, [search, selectedDomain]);

  const scrollToApply = () => {
    document
      .getElementById("apply")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToOpportunities = () => {
    document
      .getElementById("opportunities")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const faqs = [
    {
      q: "Who can apply for the BIGBEANS DIGITAL Internship Program?",
      a: "The BIGBEANS DIGITAL Internship Program is open to college students, recent graduates, freshers, and aspiring professionals who want to gain practical experience in Social Media Marketing , Artificial Intelligence (AI), Social Media Marketing, Graphic Design, Branding, Google Ads, Meta Ads, Performance Marketing, and Content Creation.",
    },
    {
      q: "What will I learn during the internship?",
      a: "Our Social Media Marketing  Internship provides hands-on training in Social Media Marketing, AI Tools, Graphic Design, Branding, Content Creation, Google Ads, Meta Ads, and Performance Marketing. You'll work on real-world projects, build practical skills, and gain valuable industry experience.",
    },
    {
      q: "Is this internship suitable for beginners?",
      a: "Yes. Our internship is designed for beginners and college students with little or no prior experience. We provide structured guidance, practical assignments, mentorship, and live project exposure to help you develop job-ready skills.",
    },
    {
      q: "Will I receive a certificate after completing the internship?",
      a: "Yes. All eligible interns who successfully complete the program receive an Internship Completion Certificate, recognizing their practical experience and skills in Social Media Marketing , AI, Graphic Design, and related digital domains.",
    },
    {
      q: "Will I get to work on live projects?",
      a: "Absolutely. Unlike traditional training programs, our Social Media Marketing  Internship for College Students includes live client projects, practical assignments, and real business case studies that help you build a strong portfolio.",
    },
    {
      q: "Is the internship available online?",
      a: "Yes. BIGBEANS DIGITAL offers flexible internship opportunities that can be attended online, making it convenient for college students and learners from different cities to participate and gain industry experience.",
    },
    {
      q: "How will this internship help my career?",
      a: "Our internship helps you develop practical digital skills, improve your resume, build a professional portfolio, gain real project experience, and prepare for placements, freelancing, or full-time careers in the Social Media Marketing  industry.",
    },
    {
      q: "Why choose the BIGBEANS DIGITAL Internship Program?",
      a: "BIGBEANS DIGITAL offers one of the most practical Internships for College Students, focusing on hands-on learning instead of theory. You'll receive mentorship from industry professionals, work on real projects, and gain skills that employers value.",
    },
    {
      q: "Is there any selection process for the internship?",
      a: "Yes. Every application is reviewed to understand the candidate's interest, learning attitude, and career goals. Selected applicants may be invited for a short interaction before joining the internship program.",
    },
    {
      q: "How can I apply for the BIGBEANS DIGITAL Internship?",
      a: "Applying is simple. Complete the online application form, share your basic details, and submit your application. Our team will review your profile and contact shortlisted candidates with the next steps for joining the BIGBEANS DIGITAL Internship Program.",
    },
  ];

  const interns = [
    {
      name: "Intern Name",
      college: "College Name",
      image: "/assets/interns/intern1.png",
    },
    {
      name: "Intern Name",
      college: "College Name",
      image: "/assets/interns/intern2.png",
    },
    {
      name: "Intern Name",
      college: "College Name",
      image: "/assets/interns/intern3.png",
    },
    {
      name: "Intern Name",
      college: "College Name",
      image: "/assets/interns/intern4.png",
    },
    {
      name: "Intern Name",
      college: "College Name",
      image: "/assets/interns/intern5.png",
    },
    {
      name: "Intern Name",
      college: "College Name",
      image: "/assets/interns/intern6.png",
    },
    {
      name: "Intern Name",
      college: "College Name",
      image: "/assets/interns/intern7.png",
    },
  ];

  const highlights = [
    {
      number: "01",
      title: "Hands-On Client Projects",
      description:
        "Work on real business websites, branding campaigns, SEO strategies, social media, and Social Media Marketing  assignments instead of only practicing on demo tasks.",
    },
    {
      number: "02",
      title: "Experienced Mentorship",
      description:
        "Receive continuous guidance, practical feedback, and structured learning from professionals who understand current industry standards and workflows.",
    },
    {
      number: "03",
      title: "Industry-Ready Skill Development",
      description:
        "Master design thinking, communication, teamwork, project execution, AI-powered tools, and modern digital technologies used by leading agencies.",
    },
    {
      number: "04",
      title: "Career & Portfolio Growth",
      description:
        "Graduate with valuable project experience, a stronger portfolio, greater confidence, and practical skills that help you stand out during placements and freelance opportunities.",
    },
  ];

  const comparison = [
    {
      feature: "Live Client Projects",
      ours:
        "Work on real client websites, branding campaigns and Social Media Marketing  projects.",
      other: "Mostly practice assignments or observation-based learning.",
    },
    {
      feature: "Experienced Mentorship",
      ours:
        "One-on-one guidance from professionals working in the digital industry.",
      other: "Limited interaction with mentors and minimal feedback.",
    },
    {
      feature: "AI-Powered Learning",
      ours:
        "Learn modern AI tools, automation, prompt engineering and productivity workflows.",
      other: "Focuses mainly on traditional learning methods.",
    },
    {
      feature: "Portfolio Development",
      ours:
        "Build an impressive portfolio with projects you actually worked on.",
      other: "Few or no portfolio-worthy projects.",
    },
    {
      feature: "Industry Exposure",
      ours:
        "Understand agency operations, client communication and project management.",
      other: "Little exposure to real business environments.",
    },
    {
      feature: "Career Readiness",
      ours:
        "Interview preparation, resume guidance and professional skill development.",
      other: "Minimal career support after internship completion.",
    },
    {
      feature: "Flexible Learning",
      ours:
        "Remote collaboration with structured workflows and practical sessions.",
      other: "Rigid schedules with limited flexibility.",
    },
  ];

  const applicationSteps = [
    {
      step: "01",
      title: "Submit Your Application",
      description:
        "Complete the internship application form with your academic details, skills, and preferred internship domain.",
    },
    {
      step: "02",
      title: "Interview & Evaluation",
      description:
        "Our team reviews your profile and conducts a short interaction to understand your learning goals and suitability.",
    },
    {
      step: "03",
      title: "Start Your Internship",
      description:
        "Selected candidates receive onboarding details, mentor allocation, and begin working on real client projects.",
    },
  ];

  const testimonials = [
    {
      name: "Intern Name",
      college: "ABC College",
      image: "/assets/interns/intern1.png",
      review:
        "Working with BIGBEANS DIGITAL completely transformed my understanding of the industry. I gained confidence, practical skills, and valuable experience by contributing to real client projects.",
    },
    {
      name: "Intern Name",
      college: "XYZ University",
      image: "/assets/interns/intern2.png",
      review:
        "The mentorship, supportive environment, and hands-on learning helped me improve both technically and professionally. Every task challenged me to think creatively and solve real problems.",
    },
    {
      name: "Intern Name",
      college: "College Name",
      image: "/assets/interns/intern3.png",
      review:
        "From collaborating with experienced professionals to building my portfolio, this internship prepared me for future opportunities and gave me the confidence to work with real clients.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FFFFFF] text-[#171717] selection:bg-[#F8BC04] selection:text-[#171717]">
      {/* =========================================================
          HERO / INTERNSHIP SEARCH
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-black/5 bg-[#FFFFFF]">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#171717 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#F8BC04]/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#F8BC04]/10 blur-[110px]"
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 pb-12 pt-5 sm:px-6 lg:px-10 lg:pb-16 lg:pt-7">
          {/* Breadcrumb */}

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-8 flex items-center gap-2 text-sm sm:mb-10"
          >
            <a
              href="/"
              className="font-medium text-gray-500 transition hover:text-[#F8BC04]"
            >
              Home
            </a>

            <span className="text-gray-400">/</span>

            <span className="font-semibold text-[#171717]">Internship</span>
          </motion.div>

          {/* Hero */}

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.55 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F8BC04]/30 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#171717] shadow-sm sm:text-sm"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                BIGBEANS DIGITAL
              </motion.div>

              <h1 className="max-w-4xl text-[42px] font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[78px] xl:text-[88px]">
                Don't Just
                <span className="text-[#F8BC04]"> Study.</span>
                <br />
                <span className="relative inline-block">
                  Start Your
                  <span className="relative ml-2 inline-block">
                    Career.
                    <motion.span
                      animate={{ width: ["0%", "100%", "100%"] }}
                      transition={{
                        duration: 1.3,
                        delay: 1,
                        times: [0, 0.7, 1],
                      }}
                      className="absolute bottom-[-4px] left-0 h-[5px] rounded-full bg-[#F8BC04]"
                    />
                  </span>
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:text-xl">
                Learn from industry professionals, work on live client
                projects, develop real-world skills, and kickstart your career
                with BIGBEANS DIGITAL&apos;s practical internship program.
              </p>

              {/* Search Box */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="mt-8 rounded-[24px] border border-black/10 bg-white p-2 shadow-[0_25px_70px_rgba(0,0,0,.10)] sm:rounded-full"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <div className="flex min-w-0 flex-1 items-center gap-3 rounded-full px-4 py-3">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="shrink-0 text-gray-400"
                    >
                      <circle
                        cx="11"
                        cy="11"
                        r="7"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M16.5 16.5L21 21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>

                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search internship domain..."
                      className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-gray-400 sm:text-base"
                    />
                  </div>

                  <select
                    value={selectedDomain}
                    onChange={(e) => setSelectedDomain(e.target.value)}
                    className="rounded-full border border-black/5 bg-[#FFFFFF] px-5 py-3 text-sm font-semibold outline-none transition focus:border-[#F8BC04]"
                  >
                    <option>All Domains</option>
                    {internshipDomains.map((domain) => (
                      <option key={domain}>{domain}</option>
                    ))}
                  </select>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={scrollToOpportunities}
                    className="rounded-full bg-[#171717] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#F8BC04] hover:text-[#171717]"
                  >
                    Find Internship
                  </motion.button>
                </div>
              </motion.div>

              {/* Quick Filters */}

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-xs font-semibold text-gray-500">
                  Popular:
                </span>

                {["Social Media Marketing", "Graphic Design", "AI Tools"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setSelectedDomain(item);
                        setSearch("");
                      }}
                      className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 transition hover:border-[#F8BC04] hover:text-[#171717]"
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>
            </motion.div>

            {/* Hero Visual */}

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[620px]"
            >
              <div className="relative overflow-hidden rounded-[30px] bg-[#171717] p-2 shadow-[0_35px_90px_rgba(0,0,0,.18)] sm:rounded-[38px]">
                <div className="relative overflow-hidden rounded-[25px] bg-[#F8BC04] sm:rounded-[31px]">
                  <Image
                    src="/assets/internship-team.jpg"
                    alt="BIGBEANS DIGITAL Internship"
                    width={760}
                    height={560}
                    priority
                    className="h-[330px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[410px] lg:h-[470px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/85 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F8BC04]">
                          Internship Admissions
                        </p>
                        <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                          Open Now
                        </h2>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.08, rotate: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToApply}
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F8BC04] text-xl font-black text-[#171717] shadow-xl sm:h-14 sm:w-14"
                      >
                        →
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-2 top-6 z-20 hidden rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,.15)] sm:block sm:-left-7"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Experience
                </p>
                <p className="mt-1 text-lg font-black">Real Projects</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.4 }}
                className="absolute -right-2 bottom-7 z-20 hidden rounded-2xl bg-[#171717] px-4 py-3 text-white shadow-[0_20px_50px_rgba(0,0,0,.2)] sm:block sm:-right-7"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#F8BC04]">
                  Learning
                </p>
                <p className="mt-1 text-lg font-black">100% Practical</p>
              </motion.div>

              <div className="absolute -bottom-5 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-[#F8BC04]/30 blur-2xl" />
            </motion.div>
          </div>

          {/* Hero Trust Bar */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-12 grid overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,.06)] sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              ["01", "Live Client Projects"],
              ["02", "Industry Mentorship"],
              ["03", "Portfolio Building"],
              ["04", "Career Growth"],
            ].map(([number, label], index) => (
              <div
                key={number}
                className={`flex items-center gap-4 px-5 py-5 sm:px-6 lg:py-6 ${
                  index !== 3 ? "border-b sm:border-r lg:border-b-0" : ""
                } ${
                  index === 1 ? "sm:border-r-0 lg:border-r" : ""
                }`}
              >
                <span className="text-sm font-black text-[#F8BC04]">
                  {number}
                </span>
                <span className="text-sm font-bold text-[#171717]">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTERNSHIP OPPORTUNITIES / INTERNSHALA-STYLE DISCOVERY
      ========================================================= */}

      <section
        id="opportunities"
        className="relative scroll-mt-24 overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[250px_1fr] xl:grid-cols-[270px_1fr]">
            {/* Filters */}

            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-[24px] border border-black/10 bg-[#FFFFFF] p-5">
                <div className="mt-6 border-t border-black/10 pt-5">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400">
                    Domains
                  </p>

                  <div className="mt-4 space-y-1">
                    {["All Domains", ...internshipDomains].map((domain) => (
                      <button
                        key={domain}
                        onClick={() => setSelectedDomain(domain)}
                        className={`block w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                          selectedDomain === domain
                            ? "bg-[#171717] text-white"
                            : "text-gray-600 hover:bg-white hover:text-[#171717]"
                        }`}
                      >
                        {domain}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Listings */}

            <div className="min-w-0">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#F8BC04]">
                    Find Your Starting Point
                  </p>

                  <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                    Internship Opportunities
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                    Explore practical learning opportunities designed for
                    college students, beginners, freshers, and aspiring
                    professionals.
                  </p>
                </div>

                
              </div>

              {/* Mobile filter */}

              <div className="mt-6 flex gap-2 overflow-x-auto pb-1 lg:hidden">
                {["All Domains", ...internshipDomains].map((domain) => (
                  <button
                    key={domain}
                    onClick={() => setSelectedDomain(domain)}
                    className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-bold transition ${
                      selectedDomain === domain
                        ? "border-[#171717] bg-[#171717] text-white"
                        : "border-black/10 bg-white text-gray-600"
                    }`}
                  >
                    {domain}
                  </button>
                ))}
              </div>

              <div className="mt-7 space-y-4">
                <AnimatePresence mode="popLayout">
                  {filteredDomains.length > 0 ? (
                    filteredDomains.map((domain, index) => (
                      <motion.article
                        layout
                        key={domain}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ delay: index * 0.04 }}
                        whileHover={{ y: -3 }}
                        className="group relative overflow-hidden rounded-[24px] border border-black/10 bg-white p-5 shadow-[0_12px_35px_rgba(0,0,0,.05)] transition-all duration-300 hover:border-[#F8BC04]/50 hover:shadow-[0_20px_50px_rgba(248,188,4,.13)] sm:p-6"
                      >
                        <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[70px] bg-[#F8BC04]/10 transition group-hover:bg-[#F8BC04]/20" />

                        <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="rounded-full bg-[#F8BC04]/12 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#171717]">
                                Internship
                              </span>

                              <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-green-600">
                                Open
                              </span>
                            </div>

                            <h3 className="mt-3 text-xl font-black sm:text-2xl">
                              {domain} Internship
                            </h3>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                              Gain practical experience through live client
                              projects, structured mentorship, assignments,
                              modern tools, and real-world execution.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="rounded-full bg-[#FFFFFF] px-3 py-1.5 text-xs font-semibold text-gray-600">
                                Online
                              </span>
                              <span className="rounded-full bg-[#FFFFFF] px-3 py-1.5 text-xs font-semibold text-gray-600">
                                Flexible Learning
                              </span>
                              <span className="rounded-full bg-[#FFFFFF] px-3 py-1.5 text-xs font-semibold text-gray-600">
                                Live Projects
                              </span>
                              <span className="rounded-full bg-[#FFFFFF] px-3 py-1.5 text-xs font-semibold text-gray-600">
                                Certificate
                              </span>
                            </div>
                          </div>

                          <div className="flex shrink-0 items-center gap-3 md:flex-col md:items-stretch">
                            <motion.button
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              onClick={scrollToApply}
                              className="flex-1 rounded-full bg-[#F8BC04] px-6 py-3 text-sm font-black text-[#171717] shadow-[0_10px_25px_rgba(248,188,4,.22)] transition hover:bg-[#171717] hover:text-white md:min-w-[150px]"
                            >
                              Apply Now
                            </motion.button>

                            <button
                              onClick={() =>
                                document
                                  .getElementById("why")
                                  ?.scrollIntoView({
                                    behavior: "smooth",
                                  })
                              }
                              className="rounded-full border border-black/10 px-5 py-3 text-sm font-bold text-gray-600 transition hover:border-[#171717] hover:text-[#171717]"
                            >
                              Know More
                            </button>
                          </div>
                        </div>
                      </motion.article>
                    ))
                  ) : (
                    <div className="rounded-[24px] border border-dashed border-black/15 bg-[#FFFFFF] p-10 text-center">
                      <p className="font-bold">No internship domain found.</p>
                      <button
                        onClick={() => {
                          setSearch("");
                          setSelectedDomain("All Domains");
                        }}
                        className="mt-3 text-sm font-bold text-[#F8BC04]"
                      >
                        Reset filters
                      </button>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT THE INTERNSHIP
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#FFFFFF] py-14 sm:py-18 lg:py-20">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#171717 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75 }}
            >
              <span className="inline-flex rounded-full bg-[#F8BC04]/12 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#171717]">
                Learn • Practice • Grow • Get Industry Ready
              </span>

              <h2 className="mt-5 text-[38px] font-black leading-[1.02] tracking-[-0.035em] sm:text-5xl md:text-6xl">
                Build Your Career With
                <span className="text-[#F8BC04]"> Real Agency</span>
                <br className="hidden sm:block" /> Experience
              </h2>

              <h3 className="mt-6 text-2xl font-black sm:text-3xl">
                Trusted By Hundreds Of Future Professionals
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                The BIGBEANS DIGITAL Internship Program is designed to bridge
                the gap between learning and real-world execution. Work on live
                client projects, collaborate with experienced mentors, master
                modern tools, and gain practical exposure that prepares you for
                agency careers, freelancing, entrepreneurship, and corporate
                opportunities.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href="/connect"
                  className="rounded-full bg-[#171717] px-7 py-3.5 text-sm font-bold text-white shadow-xl transition hover:bg-[#F8BC04] hover:text-[#171717]"
                >
                  Apply For Internship →
                </motion.a>

                <motion.a
                  whileHover={{ y: -3 }}
                  href="/about"
                  className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-sm font-bold text-[#171717] transition hover:border-[#F8BC04]"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[30px] bg-[#171717] p-2 shadow-[0_30px_80px_rgba(0,0,0,.14)] sm:rounded-[38px]">
                <div className="overflow-hidden rounded-[24px] sm:rounded-[31px]">
                  <Image
                    src="/assets/internship-team.jpg"
                    alt="BIGBEANS DIGITAL Internship"
                    width={760}
                    height={560}
                    className="h-[320px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px]"
                  />
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-5 left-3 rounded-2xl bg-white px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,.15)] sm:-left-5 sm:px-5 sm:py-4"
              >
                <div className="text-lg tracking-wide text-[#F8BC04]">
                  ★★★★★
                </div>
                <p className="mt-1 text-xs font-black sm:text-sm">
                  5.0/5 Learning Experience
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute -right-2 top-5 rounded-2xl bg-[#171717] px-4 py-3 text-white shadow-[0_20px_50px_rgba(0,0,0,.2)] sm:-right-5 sm:px-5 sm:py-4"
              >
                <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#F8BC04]">
                  Industry Exposure
                </p>
                <p className="mt-1 text-sm font-black sm:text-base">
                  Live Client Projects
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SUCCESSFUL INTERNS
      ========================================================= */}

      <section className="overflow-hidden bg-white py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-[#F8BC04]/12 px-4 py-2 text-xs font-black uppercase tracking-wider">
                Success Stories
              </span>

              <h2 className="mt-4 text-[38px] font-black leading-[1.03] tracking-[-0.035em] sm:text-5xl md:text-6xl">
                Meet Our
                <span className="text-[#F8BC04]"> Successful Interns</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500 sm:text-base">
              Every internship journey begins with curiosity and ends with
              confidence. Meet some of the talented students who gained
              practical experience while working on real projects at BIGBEANS
              DIGITAL.
            </p>
          </motion.div>

          {/* Horizontal Student Rail */}

          <div className="mt-9 overflow-visible">
            <div className="flex snap-x gap-4 overflow-x-auto pb-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5 lg:grid lg:grid-cols-4 lg:overflow-visible xl:grid-cols-5">
              {interns.map((intern, index) => (
                <motion.div
                  key={`${intern.image}-${index}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group w-[245px] shrink-0 snap-start overflow-hidden rounded-[25px] border border-black/10 bg-white shadow-[0_15px_40px_rgba(0,0,0,.06)] transition hover:border-[#F8BC04]/40 hover:shadow-[0_25px_55px_rgba(248,188,4,.14)] sm:w-[280px] lg:w-auto"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={intern.image}
                      alt={intern.name}
                      width={400}
                      height={520}
                      className="h-[285px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[330px]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/70 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider backdrop-blur">
                      BIGBEANS INTERN
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="rounded-full bg-[#F8BC04] px-3 py-1.5 text-[9px] font-black uppercase">
                        Internship Completed
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-black">{intern.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {intern.college}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-400">
                        Real Project Experience
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171717] text-white transition group-hover:rotate-[-10deg] group-hover:bg-[#F8BC04] group-hover:text-[#171717]">
                        →
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HIGHLIGHTS
      ========================================================= */}

      <section className="bg-[#FFFFFF] py-10 sm:py-14">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,.06)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["395K+", "Students Trained", "text-green-500"],
              ["100%", "Practical Learning", "text-[#F8BC04]"],
              ["500+", "Live Projects", "text-purple-600"],
              ["98%", "Success Rate", "text-pink-500"],
            ].map(([number, label, color], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ backgroundColor: "#FFFDF5" }}
                className={`relative px-5 py-7 text-center sm:px-6 lg:py-8 ${
                  index < 3
                    ? "border-b sm:border-r lg:border-b-0"
                    : ""
                } ${index === 1 ? "sm:border-r-0 lg:border-r" : ""}`}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className={`text-4xl font-black sm:text-5xl ${color}`}
                >
                  {number}
                </motion.div>

                <p className="mt-2 text-sm font-bold">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY JOIN
      ========================================================= */}

      <section
        id="why"
        className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-20"
      >
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#171717 1px,transparent 1px),linear-gradient(to bottom,#171717 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <span className="inline-flex rounded-full bg-[#F8BC04]/12 px-4 py-2 text-xs font-black uppercase tracking-wider">
                Why Students Choose BIGBEANS DIGITAL
              </span>

              <h2 className="mt-5 text-[38px] font-black leading-[1.02] tracking-[-0.035em] sm:text-5xl md:text-6xl">
                Build Skills That
                <span className="text-[#F8BC04]"> Companies</span>
                <br className="hidden sm:block" />
                Actually Need
              </h2>

              <motion.div
                whileHover={{ y: -5 }}
                className="mt-7 overflow-hidden rounded-[25px] bg-gradient-to-br from-[#F8BC04]/20 to-[#FFE8A3] p-5 shadow-[0_20px_50px_rgba(0,0,0,.06)] sm:p-7"
              >
                <div className="flex items-center gap-5">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg"
                  >
                    <Image
                      src="/assets/mentor.png"
                      alt="Mentor"
                      width={105}
                      height={105}
                      className="h-[78px] w-[78px] object-cover sm:h-[100px] sm:w-[100px]"
                    />
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-black leading-tight sm:text-3xl">
                      Learn From
                      <br />
                      Industry Experts
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                      Practical guidance from experienced professionals
                      working on real business projects.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="mt-7">
                <p className="text-xl font-black sm:text-2xl">
                  Real Learning. Real Projects. Real Career Growth.
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                  Our internship program is built around practical execution
                  rather than theory. You&apos;ll collaborate on live
                  assignments, understand agency workflows, strengthen
                  problem-solving abilities, and develop confidence by working
                  on projects that reflect real industry expectations.
                </p>
              </div>

              <div className="mt-6 rounded-[22px] border-l-4 border-[#F8BC04] bg-[#FFFFFF] p-5">
                <p className="text-base font-semibold italic leading-7 text-[#171717] sm:text-lg">
                  &quot;The fastest way to become job-ready is by building real
                  experience while you&apos;re still learning.&quot;
                </p>
              </div>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-[24px] border border-black/10 bg-white p-5 shadow-[0_15px_40px_rgba(0,0,0,.05)] transition-all hover:border-[#F8BC04]/40 hover:shadow-[0_20px_50px_rgba(248,188,4,.12)] sm:p-6"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#F8BC04]/10 transition group-hover:scale-125" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8BC04] text-sm font-black">
                        {item.number}
                      </span>

                      <span className="text-2xl text-[#F8BC04] transition group-hover:translate-x-1">
                        →
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-black sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT MAKES DIFFERENT
      ========================================================= */}

      <section className="overflow-hidden bg-[#FFFFFF] py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full bg-[#F8BC04]/12 px-4 py-2 text-xs font-black uppercase tracking-wider">
              Why Choose BIGBEANS DIGITAL
            </span>

            <h2 className="mt-5 text-[38px] font-black leading-[1.02] tracking-[-0.035em] sm:text-5xl md:text-6xl">
              What Makes Our Internship
              <span className="text-[#F8BC04]"> Different?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Unlike conventional internships focused only on observation,
              BIGBEANS DIGITAL gives you practical exposure, live client work,
              modern AI-powered workflows, structured mentorship, and portfolio
              development that prepares you for real industry opportunities.
            </p>
          </motion.div>

          {/* Desktop comparison */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-9 hidden overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,.07)] lg:block"
          >
            <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-[#171717] text-white">
              <div className="px-7 py-5 font-black">Feature</div>
              <div className="border-l border-white/10 px-7 py-5 text-center font-black text-[#F8BC04]">
                BIGBEANS DIGITAL
              </div>
              <div className="border-l border-white/10 px-7 py-5 text-center font-black">
                Traditional Internships
              </div>
            </div>

            {comparison.map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ backgroundColor: "#FFFDF5" }}
                className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-black/10 last:border-0"
              >
                <div className="flex items-center px-7 py-6">
                  <h3 className="text-sm font-black">{row.feature}</h3>
                </div>

                <div className="border-l border-black/10 px-7 py-6">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-50 text-sm font-black text-green-600">
                      ✓
                    </span>
                    <p className="text-sm leading-6 text-gray-600">
                      {row.ours}
                    </p>
                  </div>
                </div>

                <div className="border-l border-black/10 px-7 py-6">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-black text-red-500">
                      ✕
                    </span>
                    <p className="text-sm leading-6 text-gray-500">
                      {row.other}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile / Tablet comparison cards */}

          <div className="mt-7 space-y-3 lg:hidden">
            {comparison.map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="overflow-hidden rounded-[22px] border border-black/10 bg-white"
              >
                <div className="border-b border-black/10 px-5 py-4">
                  <h3 className="font-black">{row.feature}</h3>
                </div>

                <div className="grid grid-cols-2">
                  <div className="bg-[#FFFDF5] p-4">
                    <p className="mb-2 text-[9px] font-black uppercase tracking-wider text-[#F8BC04]">
                      BIGBEANS DIGITAL
                    </p>
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-black text-green-600">
                        ✓
                      </span>
                      <p className="text-xs leading-5 text-gray-600">
                        {row.ours}
                      </p>
                    </div>
                  </div>

                  <div className="border-l border-black/10 p-4">
                    <p className="mb-2 text-[9px] font-black uppercase tracking-wider text-gray-400">
                      Traditional
                    </p>
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-black text-red-500">
                        ✕
                      </span>
                      <p className="text-xs leading-5 text-gray-500">
                        {row.other}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW TO APPLY
      ========================================================= */}

      <section
        id="apply"
        className="scroll-mt-20 bg-white py-14 sm:py-18 lg:py-20"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full bg-[#F8BC04]/12 px-4 py-2 text-xs font-black uppercase tracking-wider">
              Internship Process
            </span>

            <h2 className="mt-5 text-[38px] font-black leading-[1.02] tracking-[-0.035em] sm:text-5xl md:text-6xl">
              Start Your Internship
              <span className="text-[#F8BC04]"> In 3 Simple Steps</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              We&apos;ve made the application process simple and transparent
              so you can focus on preparing for an exciting learning journey
              with BIGBEANS DIGITAL.
            </p>
          </motion.div>

          <div className="relative mt-9 grid gap-4 lg:grid-cols-3 lg:gap-6">
            <div className="absolute left-[16%] right-[16%] top-[48px] hidden h-px bg-black/10 lg:block" />

            {applicationSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[26px] border border-black/10 bg-[#171717] p-6 text-white shadow-[0_20px_50px_rgba(0,0,0,.10)] sm:p-7"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#F8BC04] text-lg font-black text-[#171717] shadow-lg"
                >
                  {item.step}
                </motion.div>

                <h3 className="relative z-10 mt-6 text-xl font-black sm:text-2xl">
                  {item.title}
                </h3>

                <p className="relative z-10 mt-3 text-sm leading-6 text-white/70">
                  {item.description}
                </p>

                <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full border border-white/10 transition duration-700 group-hover:scale-125" />
                <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#F8BC04]/10" />
              </motion.div>
            ))}
          </div>

          <div className="mt-7 flex justify-center">
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/connect"
              className="rounded-full bg-[#F8BC04] px-8 py-4 text-sm font-black text-[#171717] shadow-[0_15px_40px_rgba(248,188,4,.22)]"
            >
              Apply For Internship →
            </motion.a>
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}

      <section className="bg-[#FFFFFF] py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full bg-[#F8BC04]/12 px-4 py-2 text-xs font-black uppercase tracking-wider">
              Success Stories
            </span>

            <h2 className="mt-5 text-[38px] font-black leading-[1.02] tracking-[-0.035em] sm:text-5xl md:text-6xl">
              Hear From Our
              <span className="text-[#F8BC04]"> Amazing Interns</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Discover how our internship program has helped students gain
              practical experience, strengthen their portfolios, and begin
              successful careers in the digital industry.
            </p>
          </motion.div>

          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-[25px] border border-black/10 bg-white p-5 shadow-[0_15px_40px_rgba(0,0,0,.05)] sm:p-6"
              >
                <div className="text-5xl font-black leading-none text-[#F8BC04]/30">
                  “
                </div>

                <p className="mt-1 text-sm leading-7 text-gray-600 sm:text-base">
                  {item.review}
                </p>

                <div className="mt-6 flex items-center gap-4 border-t border-black/10 pt-5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-lg"
                  />

                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-black">
                      {item.name}
                    </h3>

                    <p className="truncate text-xs text-gray-500">
                      {item.college}
                    </p>

                    <div className="mt-1 text-sm tracking-widest text-[#F8BC04]">
                      ★★★★★
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="bg-white py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex rounded-full bg-[#F8BC04]/12 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-gray-600">
              Internship FAQs
            </span>

            <h2 className="mt-5 text-[38px] font-black leading-[1.02] tracking-[-0.035em] sm:text-5xl md:text-6xl">
              Frequently Asked
              <span className="text-[#F8BC04]"> Questions</span>
            </h2>
          </motion.div>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <motion.div
                  layout
                  key={faq.q}
                  className={`overflow-hidden rounded-[20px] border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-[#F8BC04]/60 shadow-[0_15px_40px_rgba(248,188,4,.10)]"
                      : "border-black/10"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-sm font-black leading-6 sm:text-base">
                      {faq.q}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl font-medium transition ${
                        isOpen
                          ? "bg-[#F8BC04] text-[#171717]"
                          : "bg-[#171717] text-white"
                      }`}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="border-t border-black/5 px-5 pb-5 pt-4 sm:px-6">
                          <p className="text-sm leading-7 text-gray-600">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          GLOBAL PRESENCE
      ========================================================= */}

      <section className="overflow-hidden bg-[#FFFFFF] py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid items-center gap-8 rounded-[30px] border border-black/10 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,.05)] sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                Global Presence
              </p>

              <h2 className="mt-4 text-[38px] font-black leading-[1.02] tracking-[-0.035em] sm:text-5xl md:text-6xl">
                Digital Excellence in
                <span className="text-[#F8BC04]"> 12+</span>
                <br />
                Locations
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                BIGBEANS DIGITAL serves businesses across India and
                international markets. Our strategies are built for local
                relevance and global scalability.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-6">
                <div className="border-r border-black/10 pr-5">
                  <h3 className="font-black">In India</h3>
                  <div className="my-3 h-0.5 w-12 bg-[#F8BC04]" />

                  <ul className="space-y-2 text-sm text-gray-600">
                    {[
                      "Kolkata",
                      "Delhi",
                      "Bangalore",
                      "Noida",
                      "Tripura",
                      "Mumbai",
                      "Pune",
                    ].map((location) => (
                      <li
                        key={location}
                        className="flex items-center gap-2"
                      >
                        <span className="text-[#F8BC04]">●</span>
                        {location}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-black">International Presence</h3>
                  <div className="my-3 h-0.5 w-12 bg-[#F8BC04]" />

                  <ul className="space-y-2 text-sm text-gray-600">
                    {[
                      "London",
                      "Singapore",
                      "Canada",
                      "Australia",
                      "Nigeria",
                    ].map((location) => (
                      <li
                        key={location}
                        className="flex items-center gap-2"
                      >
                        <span className="text-[#F8BC04]">●</span>
                        {location}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[680px]">
              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8BC04]/15 blur-[80px]" />

              <Image
                src="/maps/world-map.png"
                alt="World Map"
                width={1200}
                height={700}
                className="relative z-10 h-auto w-full opacity-80"
              />

              {[
                ["top-[42%]", "left-[67%]", "2s"],
                ["top-[27%]", "left-[44%]", "2.2s"],
                ["top-[28%]", "left-[18%]", "2.4s"],
                ["top-[50%]", "left-[47%]", "2.1s"],
                ["top-[54%]", "left-[74%]", "2.3s"],
                ["top-[65%]", "left-[84%]", "2.5s"],
              ].map(([top, left, duration], index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 1.45, 1],
                    opacity: [0.45, 1, 0.45],
                  }}
                  transition={{
                    duration: Number(duration.replace("s", "")),
                    repeat: Infinity,
                  }}
                  className={`absolute z-20 h-3 w-3 rounded-full bg-[#F8BC04] shadow-[0_0_22px_#F8BC04] ${top} ${left}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-[#FFFFFF] px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[30px] bg-[#171717] px-5 py-10 shadow-[0_30px_80px_rgba(0,0,0,.15)] sm:px-8 sm:py-12 lg:px-14 lg:py-14"
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#F8BC04] blur-[100px]"
          />

          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, -10, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-[#F8BC04]/10 blur-[100px]"
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#F8BC04]">
                Your Next Step Starts Here
              </p>

              <h2 className="mt-3 max-w-4xl text-[34px] font-black leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                Ready To Turn Clicks Into
                <span className="text-[#F8BC04]">
                  {" "}
                  Real Business Growth?
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                Partner with BIGBEANS DIGITAL to launch data-driven Social
                Media Marketing campaigns that generate quality leads, increase
                conversions and accelerate your business growth.
              </p>
            </div>

            <motion.a
              whileHover={{
                scale: 1.04,
                y: -4,
              }}
              whileTap={{ scale: 0.96 }}
              href="/connect"
              className="shrink-0 rounded-full bg-[#F8BC04] px-7 py-4 text-sm font-black text-[#171717] shadow-[0_20px_50px_rgba(248,188,4,.25)] sm:px-9 sm:py-5 sm:text-base"
            >
              Talk to Our Team and Apply →
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}