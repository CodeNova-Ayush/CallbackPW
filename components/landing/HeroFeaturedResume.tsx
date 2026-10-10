'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, Sparkles, ArrowRight } from 'lucide-react';

export function HeroFeaturedResume() {
  return (
    <div className="w-full relative z-10 flex flex-col items-center">
      <Link
        href="/welcome"
        className="group relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[450px] lg:max-w-[480px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl border border-slate-200/90 bg-white transition-all duration-300 hover:-translate-y-1 block text-left"
      >
        {/* Subtle Hover Action Badge */}
        <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1C152E] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 pointer-events-none">
          <Sparkles className="w-3.5 h-3.5 text-[#FF4B5E]" />
          <span>Customize This Template</span>
          <ArrowRight className="w-3 h-3 text-white/80" />
        </div>

        {/* Resume Sheet Container */}
        <div className="relative flex w-full bg-white text-slate-800 font-sans select-none">
          {/* Left Foliage Accent Strip */}
          <div className="w-8 sm:w-10 md:w-11 shrink-0 overflow-hidden relative">
            <img
              src="/images/templates/leaves-strip.png"
              alt="Botanical Accent"
              className="w-full h-full object-cover object-center block"
            />
          </div>

          {/* Right Main Resume Body */}
          <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col gap-3.5 leading-snug">
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-950 font-serif">
                  Catherine Bale
                </h2>
                <p className="text-xs sm:text-[13px] text-slate-700 italic font-medium mt-0.5">
                  Marketing Assistant & Growth Specialist
                </p>

                {/* Contact Details */}
                <div className="mt-2 flex flex-col gap-1 text-[10px] sm:text-[11px] text-slate-600">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3 text-slate-400 shrink-0" />
                      c.bale@bale.com
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-slate-400 shrink-0" />
                      +1 541 754 3010
                    </span>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      Malibu, California 9022
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="w-3 h-3 text-slate-400 shrink-0" />
                      linkedin.com/in/cbale
                    </span>
                  </div>
                </div>
              </div>

              {/* Headshot */}
              <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-md overflow-hidden border border-slate-200/90 shadow-2xs">
                <img
                  src="/images/templates/catherine-avatar.png"
                  alt="Catherine Bale"
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

            {/* Profile Section */}
            <div>
              <div className="border-b border-slate-900 pb-0.5 mb-1.5">
                <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-900">
                  Profile
                </h3>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-700 leading-relaxed">
                Dynamic and data-driven marketing specialist with 6+ years of demonstrated success executing high-converting multichannel acquisition campaigns. Proven track record driving 38% organic revenue growth, optimizing customer acquisition loops, and orchestrating brand positioning initiatives.
              </p>
            </div>

            {/* Professional Experience */}
            <div>
              <div className="border-b border-slate-900 pb-0.5 mb-1.5">
                <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-900">
                  Professional Experience
                </h3>
              </div>

              <div className="flex flex-col gap-2.5">
                {/* Role 1 */}
                <div>
                  <div className="flex items-baseline justify-between text-[10.5px] sm:text-[11.5px] font-bold text-slate-900">
                    <span>Acme Corporation, <span className="italic font-medium text-slate-700">Marketing Manager</span></span>
                    <span className="text-[9.5px] sm:text-[10.5px] font-normal text-slate-500 shrink-0">2021 – Present • Milwaukee</span>
                  </div>
                  <ul className="mt-1 list-disc list-outside ml-3.5 space-y-0.5 text-[9.5px] sm:text-[10.5px] text-slate-600 leading-relaxed">
                    <li>Spearheaded integrated GTM strategies across digital channels, driving a 38% increase in marketing-qualified pipeline and $2.4M in incremental revenue.</li>
                    <li>Orchestrated lifecycle email automation workflows, improving active user retention from 52% to 74%.</li>
                    <li>Mentored and led a cross-functional marketing team of 5, reducing campaign turnaround time by 30%.</li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div>
                  <div className="flex items-baseline justify-between text-[10.5px] sm:text-[11.5px] font-bold text-slate-900">
                    <span>Global Industries, <span className="italic font-medium text-slate-700">Marketing Coordinator</span></span>
                    <span className="text-[9.5px] sm:text-[10.5px] font-normal text-slate-500 shrink-0">2018 – 2021 • Grand Island</span>
                  </div>
                  <ul className="mt-1 list-disc list-outside ml-3.5 space-y-0.5 text-[9.5px] sm:text-[10.5px] text-slate-600 leading-relaxed">
                    <li>Managed end-to-end execution of 20+ inbound product campaigns, increasing qualified leads by 42%.</li>
                    <li>Conducted weekly multivariate A/B testing on high-traffic landing pages to maximize conversion efficiency.</li>
                  </ul>
                </div>

                {/* Role 3 */}
                <div>
                  <div className="flex items-baseline justify-between text-[10.5px] sm:text-[11.5px] font-bold text-slate-900">
                    <span>Apex Brand Media, <span className="italic font-medium text-slate-700">Growth Associate</span></span>
                    <span className="text-[9.5px] sm:text-[10.5px] font-normal text-slate-500 shrink-0">2016 – 2018 • Chicago</span>
                  </div>
                  <ul className="mt-1 list-disc list-outside ml-3.5 space-y-0.5 text-[9.5px] sm:text-[10.5px] text-slate-600 leading-relaxed">
                    <li>Assisted in performance ad spend allocation ($400K annual budget) across Google Search and Meta Ads.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="border-b border-slate-900 pb-0.5 mb-1.5">
                <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-900">
                  Education
                </h3>
              </div>
              <div className="flex items-baseline justify-between text-[10.5px] sm:text-[11.5px] font-bold text-slate-900">
                <span>University of Wisconsin, <span className="italic font-medium text-slate-700">B.S. in Business Marketing</span></span>
                <span className="text-[9.5px] sm:text-[10.5px] font-normal text-slate-500 shrink-0">2012 – 2016 • Milwaukee</span>
              </div>
              <p className="text-[9.5px] sm:text-[10.5px] text-slate-600 mt-0.5">
                Magna Cum Laude • Dean's List (All Semesters) • President of Marketing Association
              </p>
            </div>

            {/* Certificates & Languages */}
            <div className="grid grid-cols-2 gap-3 pt-0.5">
              <div>
                <div className="border-b border-slate-900 pb-0.5 mb-1">
                  <h3 className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-900">
                    Certificates
                  </h3>
                </div>
                <p className="text-[9.5px] sm:text-[10px] text-slate-600 leading-snug">
                  • Google Analytics 4 (GA4) Certified<br />
                  • HubSpot Inbound Marketing Certified<br />
                  • Reforge Growth Series (2023)
                </p>
              </div>

              <div>
                <div className="border-b border-slate-900 pb-0.5 mb-1">
                  <h3 className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-900">
                    Languages
                  </h3>
                </div>
                <p className="text-[9.5px] sm:text-[10px] text-slate-600 leading-snug">
                  • English (Native C2)<br />
                  • Spanish (Bilingual C2)<br />
                  • French (Conversational B1)
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="pt-0.5">
              <div className="border-b border-slate-900 pb-0.5 mb-1.5">
                <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-900">
                  Skills & Core Competencies
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[9.5px] sm:text-[10px] text-slate-600 leading-snug">
                <div>
                  <strong className="text-slate-900 font-semibold block">Market Research & Strategy</strong>
                  Competitive benchmarking, persona mapping, survey analytics, customer interviews.
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold block">Analytical Thinking & CRO</strong>
                  Funnel drop-off optimization, A/B split testing, cohort retention, attribution.
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold block">Campaign Management</strong>
                  Cross-functional leadership, product launches, budget management ($500K+).
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold block">Tools & Tech Stack</strong>
                  HubSpot CRM, Google Analytics 4, Meta Ads Manager, Looker, Webflow, Figma.
                </div>
              </div>
            </div>

          </div>
        </div>
      </Link>
    </div>
  );
}
