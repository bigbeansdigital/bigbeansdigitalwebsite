"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function Internship() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedDomain, setSelectedDomain] = useState("All Domains");
  const [selectedMode, setSelectedMode] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Featured");
  const [selectedInternship, setSelectedInternship] = useState(
    "Social Media Marketing"
  );

  const internshipDomains = [
    "Social Media Marketing",
    "Graphic Designing",
  ];

  const internshipModes = ["All", "Online", "Flexible Learning"];

  const internshipOpportunities = [
    {
      title: "Social Media Marketing",
      description:
        "Learn social media strategy, content planning, campaign execution, audience engagement and practical digital workflows through real-world assignments and live project exposure.",
      tags: ["Online", "Flexible Learning", "Live Projects", "Certificate"],
      featured: true,
    },
    {
      title: "Graphic Designing",
      description:
        "Develop practical graphic design skills through creative briefs, social media creatives, branding assignments, visual communication and portfolio-focused project work.",
      tags: ["Online", "Flexible Learning", "Live Projects", "Certificate"],
      featured: true,
    },
  ];

  const filteredOpportunities = useMemo(() => {
    const items = internshipOpportunities.filter((item) => {
      const query = search.trim().toLowerCase();

      return (
        (!query || item.title.toLowerCase().includes(query)) &&
        (selectedDomain === "All Domains" ||
          item.title === selectedDomain) &&
        (selectedMode === "All" || item.tags.includes(selectedMode))
      );
    });

    return [...items].sort((a, b) => {
      if (sortBy === "A-Z") return a.title.localeCompare(b.title);
      if (sortBy === "Z-A") return b.title.localeCompare(a.title);
      return Number(b.featured) - Number(a.featured);
    });
  }, [search, selectedDomain, selectedMode, sortBy]);

  const chooseInternship = (title: string) => {
    setSelectedInternship(title);

    document
      .getElementById("apply")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const faqs = [
    {
      q: "Who can apply for the BIGBEANS DIGITAL Internship Program?",
      a: "The BIGBEANS DIGITAL Internship Program is open to college students, recent graduates, freshers, and aspiring professionals who want to gain practical experience in Social Media Marketing, Artificial Intelligence (AI), Graphic Design, Branding, Google Ads, Meta Ads, Performance Marketing, and Content Creation.",
    },
    {
      q: "What will I learn during the internship?",
      a: "Our internship provides hands-on training in Social Media Marketing, AI Tools, Graphic Design, Branding, Content Creation, Google Ads, Meta Ads, and Performance Marketing. You'll work on real-world projects, build practical skills, and gain valuable industry experience.",
    },
    {
      q: "Is this internship suitable for beginners?",
      a: "Yes. Our internship is designed for beginners and college students with little or no prior experience. We provide structured guidance, practical assignments, mentorship, and live project exposure to help you develop job-ready skills.",
    },
    {
      q: "Will I receive a certificate after completing the internship?",
      a: "Yes. All eligible interns who successfully complete the program receive an Internship Completion Certificate, recognizing their practical experience and skills in digital marketing, AI, Graphic Design, and related digital domains.",
    },
    {
      q: "Will I get to work on live projects?",
      a: "Absolutely. Unlike traditional training programs, our internship for college students includes live client projects, practical assignments, and real business case studies that help you build a strong portfolio.",
    },
    {
      q: "Is the internship available online?",
      a: "Yes. BIGBEANS DIGITAL offers flexible internship opportunities that can be attended online, making it convenient for college students and learners from different cities to participate and gain industry experience.",
    },
    {
      q: "How will this internship help my career?",
      a: "Our internship helps you develop practical digital skills, improve your resume, build a professional portfolio, gain real project experience, and prepare for placements, freelancing, or full-time careers in the digital industry.",
    },
    {
      q: "Why choose the BIGBEANS DIGITAL Internship Program?",
      a: "BIGBEANS DIGITAL offers a practical internship model for college students, focusing on hands-on learning instead of theory. You'll receive mentorship from industry professionals, work on real projects, and gain skills that employers value.",
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

  const learningStages = [
    {
      number: "01",
      title: "Learn",
      description:
        "Understand the relevant skills, tools, concepts, and methods before working on practical tasks.",
    },
    {
      number: "02",
      title: "Practice",
      description:
        "Use what you have learned through guided exercises, assignments, examples, and mentor feedback.",
    },
    {
      number: "03",
      title: "Implement",
      description:
        "Apply your skills to real assignments, business requirements, or client-related work.",
    },
    {
      number: "04",
      title: "Analyse",
      description:
        "Review the work, observe the outcome, identify what worked, and understand what needs improvement.",
    },
    {
      number: "05",
      title: "Improve",
      description:
        "Use feedback and results to refine your work and develop stronger professional skills.",
    },
  ];

  const skillsForward = [
    {
      number: "01",
      category: "Technical Skill",
      title: "Digital Tools",
      description:
        "Build practical confidence with modern digital tools, platforms, and workflows used in real projects.",
      image: "/assets/internship-team.jpg",
      position: "20% center",
    },
    {
      number: "02",
      category: "Technical Skill",
      title: "Project Execution",
      description:
        "Turn briefs and requirements into organised tasks, deliverables, and completed project work.",
      image: "/assets/internship-team.jpg",
      position: "42% center",
    },
    {
      number: "03",
      category: "Technical Skill",
      title: "Analytical Thinking",
      description:
        "Read results, identify patterns, understand performance, and use evidence to improve your work.",
      image: "/assets/internship-team.jpg",
      position: "65% center",
    },
    {
      number: "04",
      category: "Workplace Skill",
      title: "Problem Solving",
      description:
        "Break practical problems into clear steps and develop solutions based on the situation and goal.",
      image: "/assets/internship-team.jpg",
      position: "28% center",
    },
    {
      number: "05",
      category: "Workplace Skill",
      title: "Communication & Presentation",
      description:
        "Present ideas clearly, discuss work professionally, and communicate with teammates and clients.",
      image: "/assets/internship-team.jpg",
      position: "52% center",
    },
    {
      number: "06",
      category: "Workplace Skill",
      title: "Teamwork & Client Thinking",
      description:
        "Collaborate effectively and understand requirements from a client perspective while connecting work to business goals.",
      image: "/assets/internship-team.jpg",
      position: "78% center",
    },
  ];

  const comparison = [
    {
      feature: "Live Client Projects",
      ours:
        "Work on real client websites, branding campaigns and digital marketing projects.",
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
    <main className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-[#F8BC04] selection:text-black">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #000 !important;
        }
      `}</style>

      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="min-h-screen bg-black px-4 pb-14 pt-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <nav className="flex justify-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/45 sm:text-sm">
            <a href="/" className="hover:text-[#F8BC04]">
              Home
            </a>

            <span className="text-[#F8BC04]">→</span>

            <span className="text-white">Internship</span>
          </nav>

          {/* =========================================================
          FIND YOUR DIRECTION
      ========================================================= */}

      <section
        id="opportunities"
        className="scroll-mt-16 bg-black px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[.25em] text-[#F8BC04]">
                Find Your Direction
              </p>

              <h2 className="mt-4 text-[clamp(44px,6vw,78px)] font-black uppercase leading-[.86] tracking-[-.055em]">
                Choose Your{" "}
                <span className="block font-serif font-normal italic text-[#F8BC04]">
                  Internship.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/50 sm:text-base">
                Explore the available internship tracks, filter by learning
                format, sort the opportunities and apply for the path that
                matches your interests.
              </p>

              <div className="mt-8">
                {internshipDomains.map((domain, index) => (
                  <button
                    key={domain}
                    onClick={() => setSelectedDomain(domain)}
                    className={`flex w-full items-center justify-between border-b py-5 text-left transition ${
                      selectedDomain === domain
                        ? "border-[#F8BC04] text-white"
                        : "border-white/10 text-white/40 hover:text-white"
                    }`}
                  >
                    <span className="text-sm font-black uppercase tracking-[.08em] sm:text-base">
                      0{index + 1} / {domain}
                    </span>

                    <span
                      className={
                        selectedDomain === domain
                          ? "text-[#F8BC04]"
                          : ""
                      }
                    >
                      →
                    </span>
                  </button>
                ))}

                <button
                  onClick={() => setSelectedDomain("All Domains")}
                  className={`mt-4 text-xs font-black uppercase tracking-[.18em] ${
                    selectedDomain === "All Domains"
                      ? "text-[#F8BC04]"
                      : "text-white/35"
                  }`}
                >
                  View All Internships
                </button>
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-4 border-y border-white/10 py-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="text-lg text-[#F8BC04]">⌕</span>

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search internship..."
                    className="w-full bg-black text-sm outline-none placeholder:text-white/25"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {internshipModes.map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setSelectedMode(mode)}
                      className={`border px-3 py-2 text-[10px] font-black uppercase tracking-[.1em] ${
                        selectedMode === mode
                          ? "border-[#F8BC04] text-[#F8BC04]"
                          : "border-white/10 text-white/40"
                      }`}
                    >
                      {mode}
                    </button>
                  ))}

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-white/10 bg-black px-3 py-2 text-[10px] font-black uppercase tracking-[.1em] text-white outline-none"
                  >
                    <option>Featured</option>
                    <option>A-Z</option>
                    <option>Z-A</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between py-5">
                <p className="text-[10px] font-black uppercase tracking-[.16em] text-white/30">
                  {filteredOpportunities.length} opportunities
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedDomain("All Domains");
                    setSelectedMode("All");
                    setSortBy("Featured");
                  }}
                  className="text-xs text-white/35 hover:text-[#F8BC04]"
                >
                  Reset
                </button>
              </div>

              <div className="space-y-4">
                {filteredOpportunities.map((item, index) => (
                  <motion.article
                    key={item.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className="border border-white/10 p-5 transition hover:border-[#F8BC04] sm:p-7"
                  >
                    <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
                      <div className="max-w-2xl">
                        <p className="text-[10px] font-black uppercase tracking-[.18em] text-[#F8BC04]">
                          0{index + 1} / Internship / Open
                        </p>

                        <h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-[-.04em] sm:text-4xl">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-white/50">
                          {item.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.08em] text-white/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => chooseInternship(item.title)}
                        className="shrink-0 bg-[#F8BC04] px-6 py-4 text-xs font-black uppercase tracking-[.12em] text-black"
                      >
                        Apply Now →
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-12 max-w-[1120px] text-center sm:mt-16"
          >
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#F8BC04] sm:text-sm">
              BIGBEANS DIGITAL / INTERNSHIP PROGRAM
            </p>

            <h1 className="mt-5 text-[clamp(48px,8vw,112px)] font-black uppercase leading-[.82] tracking-[-.065em]">
              <span className="font-serif font-normal italic text-[#F8BC04]">
                Don&apos;t Just Study.
              </span>
              <br />
              Start Your Career.
            </h1>

            <p className="mx-auto mt-7 max-w-[780px] text-sm leading-7 text-white/60 sm:text-base lg:text-lg">
              Learn from industry professionals, work on live client projects,
              develop real-world skills, and kickstart your career with
              BIGBEANS DIGITAL&apos;s practical internship program.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto mt-12 max-w-[1180px] overflow-hidden"
          >
            <Image
              src="/assets/internship-team.jpg"
              alt="BIGBEANS DIGITAL Internship"
              width={1600}
              height={900}
              priority
              className="h-[360px] w-full object-cover sm:h-[500px] lg:h-[650px]"
            />
          </motion.div>

          <div className="mx-auto flex max-w-[1050px] flex-wrap justify-center gap-x-8 gap-y-3 border-y border-white/10 py-5 text-[10px] font-black uppercase tracking-[.18em] text-white/45 sm:text-xs">
            <span>Live Client Projects</span>
            <span>Industry Mentorship</span>
            <span>Portfolio Building</span>
            <span>Career Growth</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT IS A LEARNING INTERNSHIP?
      ========================================================= */}

      <section className="bg-black px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            {/* LEFT IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="overflow-hidden border border-white/10">
                <Image
                  src="/assets/internship-team.jpg"
                  alt="Learning Internship at BIGBEANS DIGITAL"
                  width={900}
                  height={700}
                  className="h-[430px] w-full object-cover sm:h-[560px]"
                />
              </div>

              <div className="absolute bottom-5 left-5 border border-[#F8BC04] bg-black px-5 py-4 sm:bottom-8 sm:left-8">
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-[#F8BC04]">
                  LEARNING MODEL
                </p>

                <p className="mt-1 text-lg font-black uppercase">
                  Learn. Apply. Improve.
                </p>
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-black uppercase tracking-[.25em] text-[#F8BC04]">
                What Is A Learning Internship?
              </p>

              <h2 className="mt-4 text-[clamp(44px,6vw,78px)] font-black uppercase leading-[.86] tracking-[-.055em]">
                Learn First.
                <br />
                <span className="font-serif font-normal italic text-[#F8BC04]">
                  Then Do.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                A learning internship is a practical learning model where
                students first understand the relevant skills and tools,
                receive guidance from experienced professionals, and then use
                that knowledge on real assignments or business requirements.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                Instead of stopping at classroom learning, the process moves
                from learning to practice, implementation, analysis, and
                improvement. Students can see how their work performs, receive
                feedback, and understand how professional work is actually
                completed.
              </p>

              <div className="mt-10 border-t border-white/10">
                {learningStages.map((stage, index) => (
                  <motion.div
                    key={stage.number}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    className="group grid grid-cols-[48px_1fr] gap-4 border-b border-white/10 py-5 sm:grid-cols-[60px_150px_1fr] sm:gap-5"
                  >
                    <span className="text-xs font-black text-[#F8BC04]">
                      {stage.number}
                    </span>

                    <h3 className="text-base font-black uppercase tracking-[-.01em] sm:text-lg">
                      {stage.title}
                    </h3>

                    <p className="col-span-2 text-sm leading-6 text-white/40 sm:col-span-1">
                      {stage.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


                      {/* =========================================================
          SECTION 3 — LEARN. IMPLEMENT. EXPERIENCE.
      ========================================================= */}

      <section className="bg-black px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[.25em] text-[#F8BC04]">
              The Learning Cycle
            </p>

            <h2 className="mt-4 text-[clamp(44px,6vw,78px)] font-black uppercase leading-[.86] tracking-[-.055em]">
              Learn. Implement.{" "}
              <span className="font-serif font-normal italic text-[#F8BC04]">
                Experience.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
              Learn a concept, apply it to real work, measure the outcome,
              understand what happened, improve your approach, and learn again.
            </p>
          </div>

          {/* DESKTOP LEARNING CYCLE */}
          <div className="mt-16 hidden lg:block">
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-start">
              {[
                {
                  number: "01",
                  title: "Learn",
                  text: "Understand the concept, tools and methods.",
                  active: true,
                },
                {
                  number: "02",
                  title: "Implement",
                  text: "Apply what you learned to a practical task.",
                },
                {
                  number: "03",
                  title: "Measure",
                  text: "Observe the result and understand the outcome.",
                },
                {
                  number: "04",
                  title: "Analyse",
                  text: "Identify what worked and what needs to change.",
                },
                {
                  number: "05",
                  title: "Improve",
                  text: "Refine your work using feedback and results.",
                },
                {
                  number: "06",
                  title: "Learn Again",
                  text: "Use the experience to deepen your understanding.",
                  active: true,
                },
              ].map((stage, index, stages) => (
                <div key={stage.number} className="contents">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="flex min-w-0 flex-col items-center text-center"
                  >
                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-full border ${
                        stage.active
                          ? "border-[#F8BC04] bg-[#F8BC04] text-black"
                          : "border-white/20 bg-black text-white"
                      }`}
                    >
                      <span className="text-xs font-black">
                        {stage.number}
                      </span>
                    </div>

                    <h3
                      className={`mt-6 text-sm font-black uppercase tracking-[.12em] ${
                        stage.active ? "text-[#F8BC04]" : "text-white"
                      }`}
                    >
                      {stage.title}
                    </h3>

                    <p className="mt-3 max-w-[145px] text-xs leading-6 text-white/35">
                      {stage.text}
                    </p>
                  </motion.div>

                  {index < stages.length - 1 && (
                    <div className="mt-10 w-8 border-t border-dashed border-white/20" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE LEARNING CYCLE */}
          <div className="mt-12 border-t border-white/10 lg:hidden">
            {[
              {
                number: "01",
                title: "Learn",
                text: "Understand the concept, tools and methods.",
              },
              {
                number: "02",
                title: "Implement",
                text: "Apply what you learned to a practical task.",
              },
              {
                number: "03",
                title: "Measure",
                text: "Observe the result and understand the outcome.",
              },
              {
                number: "04",
                title: "Analyse",
                text: "Identify what worked and what needs to change.",
              },
              {
                number: "05",
                title: "Improve",
                text: "Refine your work using feedback and results.",
              },
              {
                number: "06",
                title: "Learn Again",
                text: "Use the experience to deepen your understanding.",
              },
            ].map((stage) => (
              <div
                key={stage.number}
                className="grid grid-cols-[48px_1fr] gap-4 border-b border-white/10 py-6"
              >
                <span className="text-xs font-black text-[#F8BC04]">
                  {stage.number}
                </span>

                <div>
                  <h3 className="text-xl font-black uppercase tracking-[-.03em]">
                    {stage.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
                    {stage.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 border-y border-white/10 py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[10px] font-black uppercase tracking-[.2em] text-[#F8BC04]">
                Core Philosophy
              </p>

              <p className="text-sm font-black uppercase tracking-[.08em] text-white/70 sm:text-right">
                Learn → Implement → Measure → Analyse → Improve → Learn Again
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4 — HOW STUDENTS ARE GUIDED
      ========================================================= */}

      <section className="bg-black px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.25em] text-[#F8BC04]">
                How Students Are Guided
              </p>

              <h2 className="mt-4 max-w-5xl text-[clamp(44px,6vw,78px)] font-black uppercase leading-[.86] tracking-[-.055em]">
                You&apos;re Never{" "}
                <span className="font-serif font-normal italic text-[#F8BC04]">
                  Left Alone.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/45 lg:justify-self-end lg:text-right sm:text-base">
              Students are guided throughout the internship with structured
              learning, practical assignments, reviews, feedback, corrections,
              discussions and mentor support before moving on to the next
              stage.
            </p>
          </div>

          {/* DESKTOP GUIDANCE WORKFLOW */}
          <div className="mt-16 hidden xl:block">
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-start">
              {[
                {
                  number: "01",
                  title: "Learn",
                  text: "Understand the topic, tools, process and skills through structured training and mentor guidance.",
                  active: true,
                },
                {
                  number: "02",
                  title: "Practice",
                  text: "Work through guided exercises and assignments to turn concepts into practical skills.",
                },
                {
                  number: "03",
                  title: "Submit",
                  text: "Complete the task and submit your work for review instead of simply moving on to the next topic.",
                },
                {
                  number: "04",
                  title: "Review",
                  text: "Mentors review the work and discuss the approach, execution, quality and areas that need attention.",
                },
                {
                  number: "05",
                  title: "Feedback",
                  text: "Receive clear feedback, corrections and explanations so you understand why something needs to change.",
                },
                {
                  number: "06",
                  title: "Improve",
                  text: "Make the required corrections, apply the feedback and strengthen the quality of your work.",
                },
                {
                  number: "07",
                  title: "Implement",
                  text: "Take the improved understanding into real requirements, client work and practical implementation.",
                  active: true,
                },
              ].map((step, index, steps) => (
                <div key={step.number} className="contents">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="min-w-0"
                  >
                    <div
                      className={`border-t pt-5 ${
                        step.active
                          ? "border-[#F8BC04]"
                          : "border-white/15"
                      }`}
                    >
                      <span
                        className={`text-xs font-black ${
                          step.active
                            ? "text-[#F8BC04]"
                            : "text-white/45"
                        }`}
                      >
                        {step.number}
                      </span>

                      <h3 className="mt-5 text-xl font-black uppercase tracking-[-.03em]">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-xs leading-6 text-white/35">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>

                  {index < steps.length - 1 && (
                    <div className="mt-8 w-6 border-t border-dashed border-white/20" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* TABLET + MOBILE GUIDANCE WORKFLOW */}
          <div className="mt-12 grid grid-cols-1 border-t border-white/10 md:grid-cols-2 xl:hidden">
            {[
              {
                number: "01",
                title: "Learn",
                text: "Understand the topic, tools, process and skills through structured training and mentor guidance.",
              },
              {
                number: "02",
                title: "Practice",
                text: "Work through guided exercises and assignments to turn concepts into practical skills.",
              },
              {
                number: "03",
                title: "Submit",
                text: "Complete the task and submit your work for review instead of simply moving on to the next topic.",
              },
              {
                number: "04",
                title: "Review",
                text: "Mentors review the work and discuss the approach, execution, quality and areas that need attention.",
              },
              {
                number: "05",
                title: "Feedback",
                text: "Receive clear feedback, corrections and explanations so you understand why something needs to change.",
              },
              {
                number: "06",
                title: "Improve",
                text: "Make the required corrections, apply the feedback and strengthen the quality of your work.",
              },
              {
                number: "07",
                title: "Implement",
                text: "Take the improved understanding into real requirements, client work and practical implementation.",
              },
            ].map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="border-b border-white/10 p-6 md:[&:nth-child(odd)]:border-r"
              >
                <span className="text-xs font-black text-[#F8BC04]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-black uppercase tracking-[-.03em]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* SUPPORT MESSAGE */}
          <div className="mt-10 grid gap-5 border-y border-white/10 py-7 sm:grid-cols-3">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.18em] text-[#F8BC04]">
                01 / Training
              </p>

              <p className="mt-2 text-sm leading-6 text-white/45">
                Concepts and tools are explained before students are expected
                to apply them.
              </p>
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[.18em] text-[#F8BC04]">
                02 / Mentorship
              </p>

              <p className="mt-2 text-sm leading-6 text-white/45">
                Students have opportunities to discuss their work and receive
                guidance during the process.
              </p>
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[.18em] text-[#F8BC04]">
                03 / Continuous Improvement
              </p>

              <p className="mt-2 text-sm leading-6 text-white/45">
                Feedback and corrections become part of the learning process
                before students move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SKILLS YOU TAKE FORWARD
      ========================================================= */}

      <section className="bg-black px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.25em] text-[#F8BC04]">
                Skills You Take Forward
              </p>

              <h2 className="mt-4 max-w-5xl text-[clamp(44px,6vw,78px)] font-black uppercase leading-[.86] tracking-[-.055em]">
                Skills That Stay With
                <span className="font-serif font-normal italic text-[#F8BC04]">
                  You.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/45 lg:text-right sm:text-base">
              The internship is designed to build skills you can carry into
              your studies, portfolio, placements, freelance work, and future
              professional roles.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:grid-cols-6">
            {skillsForward.map((skill, index) => (
              <motion.article
                key={skill.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative min-w-0 border-b border-r border-white/10 bg-black transition-colors duration-300 hover:bg-white/[.025]"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10">
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    width={600}
                    height={450}
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    style={{ objectPosition: skill.position }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  <span className="absolute left-3 top-3 text-[10px] font-black tracking-[.14em] text-[#F8BC04] sm:left-4 sm:top-4">
                    {skill.number}
                  </span>
                </div>

                <div className="p-4 sm:p-5 lg:p-4 xl:p-5">
                  <p className="text-[8px] font-black uppercase tracking-[.16em] text-[#F8BC04] sm:text-[9px]">
                    {skill.category}
                  </p>

                  <h3 className="mt-2 text-base font-black uppercase leading-[.95] tracking-[-.025em] sm:text-lg">
                    {skill.title}
                  </h3>

                  <p className="mt-3 text-[11px] leading-5 text-white/35 sm:text-xs sm:leading-6">
                    {skill.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 border-y border-white/10 py-6 sm:grid-cols-2">
            <div className="flex items-start gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 bg-[#F8BC04]" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-[#F8BC04]">
                  Technical Skills
                </p>
                <p className="mt-2 text-sm leading-6 text-white/40">
                  Digital tools, project execution, practical implementation,
                  analysis, and performance-focused thinking.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 bg-white" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-white/60">
                  Professional & Workplace Skills
                </p>
                <p className="mt-2 text-sm leading-6 text-white/40">
                  Problem-solving, communication, teamwork, presentation, and
                  client-oriented thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* =========================================================
          SUCCESSFUL INTERNS
      ========================================================= */}

      <section className="bg-black px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.25em] text-[#F8BC04]">
                Success Stories
              </p>

              <h2 className="mt-4 text-[clamp(44px,6vw,78px)] font-black uppercase leading-[.86] tracking-[-.055em]">
                Meet Our{" "}
                <span className="font-serif font-normal italic text-[#F8BC04]">
                  Successful Interns
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/50">
              Every internship journey begins with curiosity and ends with
              confidence. Meet some of the talented students who gained
              practical experience while working on real projects at BIGBEANS
              DIGITAL.
            </p>
          </div>

          <div className="mt-10 flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 xl:grid-cols-5">
            {interns.map((intern, index) => (
              <motion.div
                key={`${intern.image}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-[250px] shrink-0 lg:w-auto"
              >
                <Image
                  src={intern.image}
                  alt={intern.name}
                  width={400}
                  height={520}
                  className="h-[340px] w-full object-cover sm:h-[390px]"
                />

                <div className="border-b border-white/10 py-4">
                  <p className="text-[10px] font-black uppercase tracking-[.16em] text-[#F8BC04]">
                    BIGBEANS INTERN
                  </p>

                  <h3 className="mt-2 text-xl font-black">
                    {intern.name}
                  </h3>

                  <p className="text-sm text-white/35">
                    {intern.college}
                  </p>

                  <a
                    href="https://www.bigbeansdigital.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-[#F8BC04] px-4 py-3 text-center text-[10px] font-black uppercase tracking-[.12em] text-black transition hover:bg-white"
                  >
                    Read Full Experience →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT MAKES US DIFFERENT
      ========================================================= */}

      <section className="bg-black px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-black uppercase tracking-[.25em] text-[#F8BC04]">
            What Makes Us Different
          </p>

          <h2 className="mt-4 max-w-4xl text-[clamp(44px,6vw,76px)] font-black uppercase leading-[.86] tracking-[-.055em]">
            Not Just Another{" "}
            <span className="font-serif font-normal italic text-[#F8BC04]">
              Internship.
            </span>
          </h2>

          <div className="mt-10 hidden border border-white/10 lg:block">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-white/10 text-xs font-black uppercase tracking-[.14em]">
              <div className="p-6">Feature</div>

              <div className="border-l border-white/10 p-6 text-[#F8BC04]">
                BIGBEANS DIGITAL
              </div>

              <div className="border-l border-white/10 p-6 text-white/35">
                Traditional Internships
              </div>
            </div>

            {comparison.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-white/10"
              >
                <div className="p-6 text-sm font-black">
                  {row.feature}
                </div>

                <div className="border-l border-white/10 p-6 text-sm leading-7 text-white/50">
                  <span className="mr-2 text-[#F8BC04]">✓</span>
                  {row.ours}
                </div>

                <div className="border-l border-white/10 p-6 text-sm leading-7 text-white/30">
                  <span className="mr-2">✕</span>
                  {row.other}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3 lg:hidden">
            {comparison.map((row) => (
              <div
                key={row.feature}
                className="border border-white/10 p-5"
              >
                <h3 className="font-black uppercase">
                  {row.feature}
                </h3>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-[10px] font-black uppercase text-[#F8BC04]">
                      BIGBEANS DIGITAL
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/50">
                      {row.ours}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase text-white/30">
                      Traditional
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/30">
                      {row.other}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}

      <section className="bg-black px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-black uppercase tracking-[.25em] text-[#F8BC04]">
            Success Stories
          </p>

          <h2 className="mt-4 max-w-4xl text-[clamp(44px,6vw,78px)] font-black uppercase leading-[.86] tracking-[-.055em]">
            Hear From Our{" "}
            <span className="font-serif font-normal italic text-[#F8BC04]">
              Amazing Interns
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            Discover how our internship program has helped students gain
            practical experience, strengthen their portfolios, and begin
            successful careers in the digital industry.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.review}
                className="border-t border-white/10 pt-6"
              >
                <div className="text-5xl font-serif italic text-[#F8BC04]">
                  “
                </div>

                <p className="mt-2 text-sm leading-7 text-white/55 sm:text-base">
                  {item.review}
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="h-14 w-14 object-cover"
                  />

                  <div>
                    <h3 className="font-black">{item.name}</h3>

                    <p className="text-xs text-white/35">
                      {item.college}
                    </p>

                    <p className="mt-1 text-xs tracking-widest text-[#F8BC04]">
                      ★★★★★
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="bg-black px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[.25em] text-[#F8BC04]">
              Internship FAQs
            </p>

            <h2 className="mt-4 text-[clamp(44px,6vw,78px)] font-black uppercase leading-[.86] tracking-[-.055em]">
              Frequently Asked{" "}
              <span className="font-serif font-normal italic text-[#F8BC04]">
                Questions
              </span>
            </h2>
          </div>

          <div className="mt-12">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.q} className="border-b border-white/10">
                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  >
                    <span className="text-sm font-black sm:text-base">
                      {faq.q}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center border border-white/15 transition ${
                        isOpen
                          ? "rotate-45 bg-[#F8BC04] text-black"
                          : "text-white"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <p className="max-w-4xl pb-6 pr-10 text-sm leading-7 text-white/50">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          GLOBAL PRESENCE
      ========================================================= */}

      <section className="bg-black px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[.25em] text-[#F8BC04]">
                Global Presence
              </p>

              <h2 className="mt-4 text-[clamp(44px,6vw,78px)] font-black uppercase leading-[.86] tracking-[-.055em]">
                Digital Excellence in{" "}
                <span className="font-serif font-normal italic text-[#F8BC04]">
                  12+ Locations
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                BIGBEANS DIGITAL serves businesses across India and
                international markets. Our strategies are built for local
                relevance and global scalability.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-black uppercase">
                    In India
                  </h3>

                  <div className="my-3 h-px w-10 bg-[#F8BC04]" />

                  <ul className="space-y-2 text-sm text-white/40">
                    {[
                      "Kolkata",
                      "Delhi",
                      "Bangalore",
                      "Noida",
                      "Tripura",
                      "Mumbai",
                      "Pune",
                    ].map((location) => (
                      <li key={location}>● {location}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-black uppercase">
                    International Presence
                  </h3>

                  <div className="my-3 h-px w-10 bg-[#F8BC04]" />

                  <ul className="space-y-2 text-sm text-white/40">
                    {[
                      "London",
                      "Singapore",
                      "Canada",
                      "Australia",
                      "Nigeria",
                    ].map((location) => (
                      <li key={location}>● {location}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-white/10 p-4">
              <Image
                src="/maps/world-map.png"
                alt="World Map"
                width={1200}
                height={700}
                className="w-full opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-black px-4 py-12 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1440px] border-y border-[#F8BC04] py-12 sm:py-16">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.25em] text-[#F8BC04]">
                Your Next Step Starts Here
              </p>

              <h2 className="mt-4 max-w-5xl text-[clamp(44px,7vw,94px)] font-black uppercase leading-[.84] tracking-[-.06em]">
                Ready To Start Your{" "}
                <span className="font-serif font-normal italic text-[#F8BC04]">
                  Career?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                Partner with BIGBEANS DIGITAL to gain practical experience,
                build your portfolio, work on real projects and prepare for
                your next career opportunity.
              </p>
            </div>

            <a
              href={`/connect?internship=${encodeURIComponent(
                selectedInternship
              )}`}
              className="bg-[#F8BC04] px-8 py-5 text-center text-xs font-black uppercase tracking-[.14em] text-black"
            >
              Apply Now →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}