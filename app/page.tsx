"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface MediaItem {
  id: string;
  title: string;
  category?: string;
  src: string;
  aspect?: string;
}

const CERTIFICATES: MediaItem[] = [
  { id: "cert-1", title: "Certificate of Training", src: "/briones-portfolio_files/4e3a8e33222477c9e57da8b116c6f9ce.jpg" },
  { id: "cert-2", title: "Certificate of Completion", src: "/briones-portfolio_files/d5f65c4d0d4800f3096efb4be0c47996.jpg" },
  { id: "cert-3", title: "Bookkeeping & Accounting Training", src: "/briones-portfolio_files/2251aa63e03232fd5de5c0387620c57f.jpg" },
  { id: "cert-4", title: "Professional Development Certificate", src: "/briones-portfolio_files/0b681a3a17394537e87961bfac4256b4.jpg" },
  { id: "cert-5", title: "QuickBooks & Xero Accounting", src: "/briones-portfolio_files/bef59d472005a623fbb34c4b35e947ab.jpg" },
  { id: "cert-6", title: "Financial Reporting Certificate", src: "/briones-portfolio_files/ffd8eb309e8209d429a2a034d77f330e.jpg" },
  { id: "cert-7", title: "Administrative Assistant Credential", src: "/briones-portfolio_files/a6f4f4e8a52dd5955bbfc3c190d4f513.jpg" },
  { id: "cert-8", title: "Specialized Accounting Workshop", src: "/briones-portfolio_files/2418844b83a2d75a55f54ea5c267aebd.png" },
  { id: "cert-9", title: "Cooperative Bookkeeping Accreditation", src: "/briones-portfolio_files/e265edefb98df5c5c0c78b8c34d57012.png" },
  { id: "cert-10", title: "Financial Systems Compliance", src: "/briones-portfolio_files/9ec92cb1cfcb180a8f9aa0c7b69a16cb.png" },
  { id: "cert-11", title: "Business Operations & Auditing", src: "/briones-portfolio_files/b069382ba63f85dd4da773903143d4bc.png" },
  { id: "cert-12", title: "Statutory Reporting & Voucher Audit", src: "/briones-portfolio_files/304c471577542b3901ebc2f3d215f36c.png" },
];

const WORK_SAMPLES: MediaItem[] = [
  { id: "sample-tb", title: "Trial Balance", category: "Financial Statement", src: "/briones-portfolio_files/110ea3c20f5c48c626605d468384e6e0.png" },
  { id: "sample-bs", title: "Balance Sheet", category: "Financial Statement", src: "/briones-portfolio_files/72b91c662b8d992726d164faca8029bd.png" },
  { id: "sample-is", title: "Income Statement", category: "Financial Statement", src: "/briones-portfolio_files/c9c07ec693377bb902cb852828fd8bd5.png" },
  { id: "sample-br", title: "Bank Reconciliation", category: "Reconciliation", src: "/briones-portfolio_files/3188531c3cd5b513c6a6e336d38fdf9d.png" },
  { id: "sample-n1", title: "Bank Reconciliation - Note 1", category: "Reconciliation Note", src: "/briones-portfolio_files/69d5573dfbbb42a97f7b3f3a56e411e8.png" },
  { id: "sample-n2", title: "Bank Reconciliation - Note 2", category: "Reconciliation Note", src: "/briones-portfolio_files/8210398c9dbabd00ddc824ed07344551.png" },
  { id: "sample-n3", title: "Bank Reconciliation - Note 3", category: "Reconciliation Note", src: "/briones-portfolio_files/c6eaf92f1e9c346e1468f6ef1891c175.png" },
  { id: "sample-n4", title: "Bank Reconciliation - Note 4", category: "Reconciliation Note", src: "/briones-portfolio_files/e0422f83372ed56336019c538a90ee7a.png" },
  { id: "sample-n5", title: "Bank Reconciliation - Note 5", category: "Reconciliation Note", src: "/briones-portfolio_files/96f5467ae63abe13ac0f15e2122683d1.png" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModalItem, setActiveModalItem] = useState<MediaItem | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [sampleFilter, setSampleFilter] = useState<"all" | "statements" | "reconciliations">("all");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const filteredSamples = WORK_SAMPLES.filter((item) => {
    if (sampleFilter === "statements") return item.category === "Financial Statement";
    if (sampleFilter === "reconciliations") return item.category?.includes("Reconciliation");
    return true;
  });

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-indigo-600 selection:text-white">
      {/* ---------------- NAVIGATION ---------------- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-white font-serif font-bold text-lg group-hover:scale-105 transition-transform">
              F
            </div>
            <div>
              <span className="font-script text-2xl tracking-wide text-white block leading-none">
                Ma. Faith B. Briones
              </span>
              <span className="text-[10px] tracking-widest text-indigo-300 uppercase font-semibold">
                Certified Bookkeeper
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#tools" className="hover:text-white transition-colors">Tools</a>
            <a href="#certificates" className="hover:text-white transition-colors">Certificates</a>
            <a href="#samples" className="hover:text-white transition-colors">Work Samples</a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all shadow-md hover:shadow-indigo-500/20 hover:scale-[1.02]"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-950/95 border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-base font-medium">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white">About Me</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white">Work Experience</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white">Skills & Expertise</a>
            <a href="#tools" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white">Tools & Systems</a>
            <a href="#certificates" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white">Training Certificates</a>
            <a href="#samples" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white">Work Samples</a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 rounded-full bg-indigo-600 text-white font-semibold"
            >
              Get in Touch
            </a>
          </div>
        )}
      </nav>

      {/* ---------------- 1. HERO SECTION ---------------- */}
      <header
        id="home"
        className="relative min-h-[92vh] pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#13005d]"
      >
        {/* Background video loop with fallback */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-screen pointer-events-none"
          src="/briones-portfolio_files/d1c975d14da873fff6a9a55d389d92bb.mp4"
        />

        {/* Ambient radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Heading & Titles */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Script Signature Name */}
            <div className="space-y-2">
              <h1 className="font-script text-5xl sm:text-7xl lg:text-8xl text-white tracking-wide drop-shadow-lg">
                Ma. Faith B. Briones
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-indigo-400 to-white mx-auto lg:mx-0 rounded-full" />
            </div>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-widest text-zinc-100 uppercase leading-snug">
              VIRTUAL BOOKKEEPER <br />
              <span className="text-indigo-200">&amp; ADMINISTRATIVE ASSISTANT</span>
            </h2>

            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
              Dependable, accuracy-driven professional providing reliable bookkeeping, financial reconciliation, and executive administrative support tailored for modern growing businesses.
            </p>

            {/* Badge pill: LET'S WORK TOGETHER */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/80 bg-white/10 hover:bg-white text-white hover:text-[#13005d] font-bold text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-sm shadow-xl hover:scale-105"
              >
                <span>LET’S WORK TOGETHER</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* Quick direct contact icons */}
              <div className="flex items-center gap-3">
                <a
                  href="tel:+639055212870"
                  title="Call +63 905-521-2870"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
                >
                  <img src="/briones-portfolio_files/c2d4d84b7b06512dec77300a0407103a.svg" alt="Phone" className="w-5 h-5 invert" />
                </a>
                <a
                  href="mailto:faithbriones1984@gmail.com"
                  title="Email faithbriones1984@gmail.com"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
                >
                  <img src="/briones-portfolio_files/6d0704f77f107f0f7e621031a0b87f40.png" alt="Email" className="w-5 h-5 invert" />
                </a>
                <a
                  href="https://www.linkedin.com/in/faith-b-nesbrio1984"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
                >
                  <img src="/briones-portfolio_files/72eba520b9cc247025e207a250ef3eeb.svg" alt="LinkedIn" className="w-5 h-5 invert" />
                </a>
                <a
                  href="https://www.facebook.com/riaraivprince84/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook Profile"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
                >
                  <img src="/briones-portfolio_files/5cf389e86650420eb70dfe6eca0703fe.svg" alt="Facebook" className="w-5 h-5 invert" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait in Oval Frame + Dynamic Badges */}
          <div className="relative flex items-center justify-center">
            {/* Soft decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-400 opacity-30 blur-2xl rounded-full" />

            {/* Oval Portrait Container */}
            <div className="relative w-[300px] sm:w-[360px] lg:w-[400px] h-[440px] sm:h-[500px] lg:h-[540px] overflow-hidden rounded-[50%/60%_60%_40%_40%] border-4 border-white/30 shadow-2xl bg-zinc-900 group">
              <img
                src="/briones-portfolio_files/526dea370240d1475077ee2ab7470ab6.jpg"
                alt="Ma. Faith B. Briones"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Badge 1: Certified Bookkeeper Seal Badge */}
            <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-white text-zinc-900 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-zinc-200 hover:scale-105 transition-transform">
              <img
                src="/briones-portfolio_files/7653ff62e3eec31d5cefd810aa1b0403.png"
                alt="Certified Seal"
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="block text-xs uppercase font-extrabold tracking-wider text-indigo-700">Official</span>
                <span className="block text-sm font-bold text-zinc-900 leading-tight">Certified Bookkeeper</span>
              </div>
            </div>

            {/* Badge 2: Work with Faith */}
            <div className="absolute -top-4 -right-4 sm:-right-6 bg-gradient-to-br from-indigo-900/90 to-purple-900/90 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3">
              <img
                src="/briones-portfolio_files/da455a02e2e75cbe69c26856bcb9d28c.png"
                alt="Work with Faith"
                className="w-12 h-12 object-contain"
              />
              <div className="text-left pr-1">
                <span className="block font-bold text-sm leading-tight">Work with Faith</span>
                <span className="block text-[11px] text-zinc-300">18+ Yrs Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Smooth wave divider to black */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </header>

      {/* ---------------- 2. ABOUT ME SECTION ---------------- */}
      <section id="about" className="relative py-28 bg-black overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[40px] opacity-40 blur-xl group-hover:opacity-60 transition duration-500" />
                <div className="relative w-[300px] sm:w-[360px] h-[420px] sm:h-[480px] rounded-[36px] overflow-hidden border-2 border-white/20 bg-zinc-900 shadow-2xl">
                  <img
                    src="/briones-portfolio_files/8c6c8627c835a154c8cf264f0d96ea80.jpg"
                    alt="Ma. Faith Briones - About"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Bio Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-bold block">
                  Get To Know Me
                </span>
                <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-indigo-500 rounded-full" />
              </div>

              <h3 className="text-2xl font-semibold text-zinc-100">
                Hi, I'm Ma. Faith.
              </h3>

              <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
                <p>
                  I have extensive experience in bookkeeping and administrative work, including maintaining accurate financial records, preparing comprehensive financial reports, and managing day-to-day office transactions.
                </p>
                <p>
                  These experiences have helped me become a dependable bookkeeper and administrative specialist who deeply values <strong className="text-white font-semibold">accuracy, integrity, and responsibility</strong>.
                </p>
                <p>
                  I look forward to applying my skills and hands-on experience while continuously learning and growing alongside your organization.
                </p>
              </div>

              {/* Highlights Pill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="glass-panel p-4 rounded-2xl border border-white/10 text-center">
                  <span className="block text-2xl font-bold text-indigo-400">18+</span>
                  <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Years Experience</span>
                </div>
                <div className="glass-panel p-4 rounded-2xl border border-white/10 text-center">
                  <span className="block text-2xl font-bold text-indigo-400">100%</span>
                  <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Audit Compliance</span>
                </div>
                <div className="glass-panel p-4 rounded-2xl border border-white/10 text-center">
                  <span className="block text-2xl font-bold text-indigo-400">Certified</span>
                  <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Bookkeeper</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. WORK EXPERIENCE ---------------- */}
      <section id="experience" className="relative py-28 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-bold block">
              Professional Journey
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-white font-normal">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
            <p className="text-zinc-400 text-sm sm:text-base font-light">
              Demonstrated track record of handling high-volume financial disbursements, general ledgers, and institutional administrative operations.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Experience Card 1 */}
            <div className="glass-panel glass-panel-hover p-8 sm:p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-2">
                    May 2014 – Present
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Junior Administrative Assistant</h3>
                  <p className="text-zinc-300 font-medium text-base mt-1">
                    Social Security System, Oroquieta Branch
                  </p>
                  <p className="text-xs text-indigo-300">Office of the Branch Head (OBH) / Administrative Section</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Current Role
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider font-bold text-zinc-400 mb-3">Key Duties &amp; Responsibilities:</h4>
                <ul className="space-y-2.5 text-zinc-300 text-sm sm:text-base font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 text-lg leading-none mt-1">✦</span>
                    <span>Responsible for core branch administrative operations and daily office coordination.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 text-lg leading-none mt-1">✦</span>
                    <span>Preparation and thorough audit of financial disbursement vouchers with complete statutory attachments.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 text-lg leading-none mt-1">✦</span>
                    <span>Annual administrative budget planning, prioritization, and expenditure monitoring.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 text-lg leading-none mt-1">✦</span>
                    <span>PIMS supplies procurement, property asset registers, inventory counts, and UMID card releases.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Card 2 */}
            <div className="glass-panel glass-panel-hover p-8 sm:p-10 rounded-3xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-zinc-300 border border-white/20 mb-2">
                    January 2006 – October 2013
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Full-Charge Bookkeeper</h3>
                  <div className="text-zinc-300 font-medium text-base mt-1 space-y-0.5">
                    <p>1. Taytay Sa Kauswagan, Incorporated (TSKI)</p>
                    <p>2. Paglaum Multi-Purpose Cooperative (PMPC)</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider font-bold text-zinc-400 mb-3">Key Duties &amp; Responsibilities:</h4>
                <ul className="space-y-2.5 text-zinc-300 text-sm sm:text-base font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 text-lg leading-none mt-1">✦</span>
                    <span>Full-charge bookkeeper maintaining, posting, and preparing double-entry financial records and general ledgers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 text-lg leading-none mt-1">✦</span>
                    <span>Daily cash flow monitoring, cash disbursement journals, and periodic bank reconciliations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 text-lg leading-none mt-1">✦</span>
                    <span>Microfinance loan portfolio management and member share capital accounts ledgering.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 text-lg leading-none mt-1">✦</span>
                    <span>Timely compilation and submission of monthly, quarterly, and year-end financial statements.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 4. SKILLS & EXPERTISE ---------------- */}
      <section id="skills" className="relative py-28 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-bold block">
              Core Competencies
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-white font-normal">
              Skills &amp; Expertise
            </h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
            <p className="text-zinc-400 text-sm sm:text-base font-light">
              Structured precision across accounting standards, institutional administration, and modern cloud technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Bookkeeping & Accounting */}
            <div className="glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col items-center text-center group">
              <div className="w-full h-64 arch-card-frame overflow-hidden mb-6 bg-zinc-900 border-2 border-white/10 group-hover:border-indigo-400/50 transition-colors">
                <img
                  src="/briones-portfolio_files/21cec4524d65e4b625ba60b4aae56fbe.jpg"
                  alt="Bookkeeping & Accounting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Bookkeeping &amp; Accounting</h3>
              <ul className="space-y-3 text-zinc-300 text-sm w-full text-left px-2">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">✓</span>
                  <span>Financial Record Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">✓</span>
                  <span>Financial Reports Preparation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">✓</span>
                  <span>Record Reconciliation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">✓</span>
                  <span>General Ledger &amp; Journal Entries</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Administrative Support */}
            <div className="glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col items-center text-center group">
              <div className="w-full h-64 arch-card-frame overflow-hidden mb-6 bg-zinc-900 border-2 border-white/10 group-hover:border-indigo-400/50 transition-colors">
                <img
                  src="/briones-portfolio_files/cc9d8e7c7cc4856ec0692494c5bb9dd8.jpg"
                  alt="Administrative Support"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Administrative Support</h3>
              <ul className="space-y-3 text-zinc-300 text-sm w-full text-left px-2">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">✓</span>
                  <span>Office Operations &amp; Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">✓</span>
                  <span>Procurement &amp; Inventory Registers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">✓</span>
                  <span>Annual Budget Monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">✓</span>
                  <span>Audit Documentation &amp; Archiving</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Software & Applications */}
            <div className="glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col items-center text-center group">
              <div className="w-full h-64 arch-card-frame overflow-hidden mb-6 bg-zinc-900 border-2 border-white/10 group-hover:border-indigo-400/50 transition-colors">
                <img
                  src="/briones-portfolio_files/60a4d5cccc524ab4b736a8a12b36e445.jpg"
                  alt="Microsoft Office & Cloud Tools"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Software &amp; Tools</h3>
              <ul className="space-y-3 text-zinc-300 text-sm w-full text-left px-2">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">✓</span>
                  <span>Microsoft Office (Excel, Word, PPT)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">✓</span>
                  <span>QuickBooks Online &amp; Desktop</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">✓</span>
                  <span>Xero Accounting Software</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">✓</span>
                  <span>Customer &amp; Client Communication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 5. TOOLS & SYSTEMS ---------------- */}
      <section id="tools" className="relative py-28 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-bold block">
              Software Stack
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-white font-normal">
              Tools &amp; Systems
            </h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
            <p className="text-zinc-400 text-sm sm:text-base font-light">
              Proficient in leading accounting software, financial spreadsheet automation, and modern collaboration tools.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Device Mockup */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative group max-w-xl">
                <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full" />
                <img
                  src="/briones-portfolio_files/f7019419fb14241af4022dc818025202.png"
                  alt="Tools and Systems Mockup"
                  className="relative w-full h-auto drop-shadow-2xl rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Tool Cards */}
            <div className="lg:col-span-5 space-y-4">
              {/* QuickBooks */}
              <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:border-emerald-500/40 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center p-2 flex-shrink-0">
                  <img
                    src="/briones-portfolio_files/c33331a94c105394828f4928d377a1ae.png"
                    alt="QuickBooks"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Intuit QuickBooks</h4>
                  <p className="text-xs text-zinc-400">Invoicing, bank feeds, journal entries, and account reconciliation.</p>
                </div>
              </div>

              {/* Xero */}
              <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:border-cyan-500/40 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center p-2 flex-shrink-0">
                  <img
                    src="/briones-portfolio_files/236ee88d6486271acb81ba1402e4398a.png"
                    alt="Xero"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Xero Accounting</h4>
                  <p className="text-xs text-zinc-400">Cloud reconciliation, financial dashboards, and ledger tracking.</p>
                </div>
              </div>

              {/* Microsoft Excel */}
              <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:border-green-500/40 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center p-2 flex-shrink-0">
                  <img
                    src="/briones-portfolio_files/ccf093fef4e7a9a567222c79b21362f8.svg"
                    alt="Microsoft Excel"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Microsoft Excel &amp; Office</h4>
                  <p className="text-xs text-zinc-400">Advanced spreadsheets, formulas, financial modeling, and pivot tables.</p>
                </div>
              </div>

              {/* Institutional Systems */}
              <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:border-indigo-500/40 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center p-2 flex-shrink-0">
                  <img
                    src="/briones-portfolio_files/62cd021bbc681e35e864beec45c2a8f1.png"
                    alt="SSS & Enterprise Tools"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">PIMS &amp; Enterprise Databases</h4>
                  <p className="text-xs text-zinc-400">Government statutory reporting, voucher tracking, and inventory systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 6. TRAINING CERTIFICATES ---------------- */}
      <section id="certificates" className="relative py-28 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-bold block">
              Accreditations &amp; Seminars
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-white font-normal">
              Training Certificates
            </h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
            <p className="text-zinc-400 text-sm sm:text-base font-light">
              Continuous professional learning and verified qualifications. Click on any certificate to view high-resolution details.
            </p>
          </div>

          {/* Certificate Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CERTIFICATES.map((cert, index) => (
              <div
                key={cert.id}
                onClick={() => setActiveModalItem(cert)}
                className="group cursor-pointer glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-white text-black font-semibold text-xs flex items-center gap-1.5 shadow-lg">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      View Certificate
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider block mb-1">
                    Certificate #{index + 1}
                  </span>
                  <h4 className="text-sm font-bold text-zinc-100 line-clamp-2 group-hover:text-indigo-200 transition-colors">
                    {cert.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 7. WORK SAMPLES ---------------- */}
      <section id="samples" className="relative py-28 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-bold block">
              Portfolio Deliverables
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-white font-normal">
              Work Samples
            </h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
            <p className="text-zinc-400 text-sm sm:text-base font-light">
              Hands-on accounting statements, general ledger balances, and bank reconciliation notes demonstrating rigor and transparency.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
            <button
              onClick={() => setSampleFilter("all")}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                sampleFilter === "all"
                  ? "bg-white text-black shadow-lg"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              All Samples ({WORK_SAMPLES.length})
            </button>
            <button
              onClick={() => setSampleFilter("statements")}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                sampleFilter === "statements"
                  ? "bg-white text-black shadow-lg"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              Financial Statements (3)
            </button>
            <button
              onClick={() => setSampleFilter("reconciliations")}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                sampleFilter === "reconciliations"
                  ? "bg-white text-black shadow-lg"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              Bank Reconciliations (6)
            </button>
          </div>

          {/* Samples Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSamples.map((sample) => (
              <div
                key={sample.id}
                onClick={() => setActiveModalItem(sample)}
                className="group cursor-pointer glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col"
              >
                <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden">
                  <img
                    src={sample.src}
                    alt={sample.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="w-full py-2.5 rounded-full bg-white text-black font-semibold text-xs text-center shadow-lg">
                      Click to Enlarge Report
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">
                      {sample.category}
                    </span>
                    <h4 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {sample.title}
                    </h4>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                    <span>Verified Sample</span>
                    <span className="text-indigo-300 flex items-center gap-1">
                      Inspect
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 8. CONTACT / WORK WITH ME ---------------- */}
      <section id="contact" className="relative py-28 bg-[#13005d] overflow-hidden">
        {/* Ambient video background loop */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen pointer-events-none"
          src="/briones-portfolio_files/54a5437e2b9951fb2bb1815e32efc7d9.mp4"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-indigo-300 font-bold block">
                  Let's Connect
                </span>
                <h2 className="font-serif-heading text-4xl sm:text-6xl text-white font-normal">
                  Work with me
                </h2>
                <div className="w-20 h-1 bg-white rounded-full" />
                <p className="text-zinc-200 text-base sm:text-lg font-light max-w-lg">
                  Ready to optimize your financial books or need dependable administrative assistance? Reach out directly:
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <div className="glass-panel p-5 rounded-2xl flex items-center justify-between gap-4 border border-white/20 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <img src="/briones-portfolio_files/c2d4d84b7b06512dec77300a0407103a.svg" alt="Phone" className="w-6 h-6 invert" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-zinc-300 font-semibold block">Phone</span>
                      <a href="tel:+639055212870" className="text-lg font-bold text-white hover:underline">
                        +63 905-521-2870
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard("+639055212870", "phone")}
                    className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-medium transition-colors"
                  >
                    {copiedKey === "phone" ? "Copied!" : "Copy"}
                  </button>
                </div>

                {/* Email */}
                <div className="glass-panel p-5 rounded-2xl flex items-center justify-between gap-4 border border-white/20 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <img src="/briones-portfolio_files/6d0704f77f107f0f7e621031a0b87f40.png" alt="Email" className="w-6 h-6 invert" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-zinc-300 font-semibold block">Email</span>
                      <a href="mailto:faithbriones1984@gmail.com" className="text-lg font-bold text-white hover:underline break-all">
                        faithbriones1984@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard("faithbriones1984@gmail.com", "email")}
                    className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-medium transition-colors"
                  >
                    {copiedKey === "email" ? "Copied!" : "Copy"}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/faith-b-nesbrio1984"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-5 rounded-2xl flex items-center justify-between gap-4 border border-white/20 hover:bg-white/10 transition-colors block group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <img src="/briones-portfolio_files/72eba520b9cc247025e207a250ef3eeb.svg" alt="LinkedIn" className="w-6 h-6 invert" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-zinc-300 font-semibold block">LinkedIn</span>
                      <span className="text-base sm:text-lg font-bold text-white group-hover:underline">
                        linkedin.com/in/faith-b-nesbrio1984
                      </span>
                    </div>
                  </div>
                  <span className="text-white text-sm">➔</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/riaraivprince84/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-5 rounded-2xl flex items-center justify-between gap-4 border border-white/20 hover:bg-white/10 transition-colors block group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <img src="/briones-portfolio_files/5cf389e86650420eb70dfe6eca0703fe.svg" alt="Facebook" className="w-6 h-6 invert" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-zinc-300 font-semibold block">Facebook</span>
                      <span className="text-base sm:text-lg font-bold text-white group-hover:underline">
                        facebook.com/riaraivprince84
                      </span>
                    </div>
                  </div>
                  <span className="text-white text-sm">➔</span>
                </a>
              </div>

              {/* Big CTA Button */}
              <div className="pt-2">
                <a
                  href="mailto:faithbriones1984@gmail.com?subject=Bookkeeping%20Inquiry%20from%20Portfolio"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-full bg-white text-zinc-950 font-bold text-base hover:bg-zinc-100 transition-all shadow-2xl hover:scale-105"
                >
                  <span>Email Me To Get Started</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Portrait in Oval Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-purple-500/30 blur-3xl rounded-full" />
                <div className="relative w-[280px] sm:w-[340px] h-[400px] sm:h-[480px] overflow-hidden rounded-[50%/60%_60%_40%_40%] border-4 border-white/40 shadow-2xl bg-zinc-900">
                  <img
                    src="/briones-portfolio_files/ca5ace887644d054b10b35d4d7b3ef70.jpg"
                    alt="Ma. Faith Briones - Contact"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="py-12 bg-black border-t border-white/10 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <p className="font-script text-3xl text-white">Ma. Faith B. Briones</p>
          <p className="text-zinc-400">
            Certified Bookkeeper &amp; Virtual Administrative Assistant
          </p>
          <p className="text-zinc-600">
            © {new Date().getFullYear()} Ma. Faith B. Briones. All rights reserved.
          </p>
          <div className="pt-2">
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* ---------------- LIGHTBOX MODAL ---------------- */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-zinc-950 border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-900/60">
              <div>
                <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold block">
                  {activeModalItem.category || "Certificate View"}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-lg">
                  {activeModalItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/40">
              <img
                src={activeModalItem.src}
                alt={activeModalItem.title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-white/10 bg-zinc-900/60 flex items-center justify-between text-xs text-zinc-400">
              <span>Press ESC or click outside to close</span>
              <a
                href={activeModalItem.src}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
              >
                Open Original Image
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
