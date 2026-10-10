import React from 'react';
import { clsx } from 'clsx';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  CheckCircle2,
  ExternalLink,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Wrench,
  Terminal,
  Award,
  Sparkles,
  Cpu,
  Layers,
  Shield,
  Zap,
  TrendingUp,
  Check,
  Star,
  Code2,
} from 'lucide-react';

export type TemplateId =
  // 31 Unique Core Templates (Matching Welcome & Builder Galleries)
  | 'split_duo'
  | 'prestige_gold'
  | 'ai_ml_lead'
  | 'graphite_compact'
  | 'cpa_audit_lead'
  | 'global_director_ops'
  | 'backend_distributed_arch'
  | 'vp_product_strategy'
  | 'strategic_sourcing_ops'
  | 'growth_marketing_dir'
  | 'data_science_ml_lead'
  | 'enterprise_bizdev'
  | 'staff_ml_systems'
  | 'startup_founder_pitch'
  | 'cloud_infra_sre'
  | 'biotech_pharma_lead'
  | 'cybersecurity_soc2'
  | 'head_of_ux_design'
  | 'quant_research_fund'
  | 'corporate_counsel_lead'
  | 'swiss_bauhaus_grid'
  | 'oxford_academic_fellow'
  | 'tokyo_zen_minimal'
  | 'scandinavian_frost'
  | 'neo_brutalist_tech'
  | 'coral_sunset_product'
  | 'deep_teal_biotech'
  | 'classic_ats'
  | 'modern_executive'
  | 'navy_sidebar'
  | 'navy_header'
  // FlowCV Scraped Signature Templates
  | 'flowcv_atlantic_blue'
  | 'flowcv_mercury_flow'
  | 'flowcv_steady_form'
  | 'flowcv_classic_serif'
  | 'flowcv_leaves'
  | 'flowcv_editorial_rule'
  | 'flowcv_precision_line'
  | 'flowcv_silver_banner'
  // TealHQ Scraped Signature Templates
  | 'teal_modern'
  | 'teal_clean_ats'
  | 'teal_executive'
  // Backward compatibility aliases
  | 'minimalist_tech'
  | 'soft_green_pill'
  | 'right_sidebar'
  | 'yellow_creative'
  | 'fortune500_single'
  | 'boardroom_serif'
  | 'yc_founder_pitch'
  | 'stealth_scale'
  | 'fintech_lead'
  | 'crypto_web3'
  | 'saas_operator'
  | 'mckinsey_consulting'
  | 'swiss_grid'
  | 'oxford_academic'
  | 'tokyo_minimal'
  | 'nordic_clean'
  | 'neo_brutalist'
  | 'coral_modern'
  | 'teal_innovator'
  | 'cloud_architect'
  | 'rust_systems'
  | 'ai_researcher'
  | 'quantum_research'
  | 'growth_lead'
  | 'design_portfolio';

export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    website?: string;
    summary: string;
  };
  experiences: {
    id: string;
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    bullets: string[];
  }[];
  education: {
    id: string;
    degree: string;
    institution: string;
    location?: string;
    startDate: string;
    endDate: string;
    gpa?: string;
  }[];
  projects: {
    id: string;
    title: string;
    techStack?: string;
    link?: string;
    bullets: string[];
  }[];
  skills: string[];
  certifications?: string[];
}

interface ResumeTemplateProps {
  templateId: TemplateId;
  data: ResumeData;
  zoomLevel?: number;
  isMicroPreview?: boolean;
}

// Universal High-Caliber Mock Persona for Demo Preview
export const MOCK_PERSONA = {
  personalInfo: {
    fullName: 'Alex Morgan',
    headline: 'Staff Software Engineer & Systems Architect',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/alexmorgan-eng',
    github: 'github.com/alexmorgan-dev',
    website: 'alexmorgan.ai',
    summary:
      'Staff Software Engineer and Systems Architect with 6+ years of experience engineering high-throughput distributed infrastructure, low-latency LLM inference pipelines, and enterprise-grade full-stack platforms. Founder of SynthBase (YC W24, acquired) and core contributor to open-source agent frameworks. Proven track record scaling microservices to 10M+ daily active requests with 99.99% uptime, cutting p99 query latencies by 60%, and orchestrating multi-region cloud deployments on AWS and GCP. Passionate about autonomous agents, vector indexing, and developer tooling.',
  },
  fullName: 'Alex Morgan',
  title: 'Staff Software Engineer & Systems Architect',
  email: 'alex.morgan@example.com',
  phone: '+1 (555) 234-5678',
  location: 'San Francisco, CA',
  linkedin: 'linkedin.com/in/alexmorgan-eng',
  github: 'github.com/alexmorgan-dev',
  website: 'alexmorgan.ai',
  summary:
    'Staff Software Engineer and Systems Architect with 6+ years of experience engineering high-throughput distributed infrastructure, low-latency LLM inference pipelines, and enterprise-grade full-stack platforms. Founder of SynthBase (YC W24, acquired) and core contributor to open-source agent frameworks. Proven track record scaling microservices to 10M+ daily active requests with 99.99% uptime, cutting p99 query latencies by 60%, and orchestrating multi-region cloud deployments on AWS and GCP. Passionate about autonomous agents, vector indexing, and developer tooling.',
  experiences: [
    {
      id: 'exp-1',
      role: 'Founding Staff AI Engineer',
      company: 'NeuralFlow Systems (AI Agents & RAG Infra)',
      location: 'San Francisco, CA',
      startDate: 'Jun 2024',
      endDate: 'Present',
      bullets: [
        'Architected asynchronous distributed task-queue engine handling 120k peak req/sec at sub-45ms p95 latency.',
        'Engineered custom semantic cache & hybrid vector retrieval pipeline, reducing LLM API token spend by 48%.',
        'Designed multi-tenant access control and end-to-end telemetry streaming across Kubernetes clusters.',
        'Led technical strategy and mentored an engineering team of 8 full-stack and ML infrastructure developers.',
      ],
    },
    {
      id: 'exp-2',
      role: 'Senior Full-Stack Engineer',
      company: 'Stripe (Core Billing & Payment Routing)',
      location: 'San Francisco, CA',
      startDate: 'Jan 2022',
      endDate: 'May 2024',
      bullets: [
        'Led frontend and backend architecture for next-gen adaptive payment flow using React, TypeScript, and Go.',
        'Optimized PostgreSQL shard indexing strategies, cutting complex ledger reconciliation runtimes from 8.4s to 320ms.',
        'Instituted automated canary deployment workflows and integration testing suites, achieving zero-downtime releases.',
      ],
    },
    {
      id: 'exp-3',
      role: 'Full Stack Engineering Intern',
      company: 'Vercel (Developer Experience & Edge)',
      location: 'Remote',
      startDate: 'May 2021',
      endDate: 'Dec 2021',
      bullets: [
        'Built Next.js edge runtime middleware extensions and analytics dashboard for enterprise team tiers.',
        'Implemented incremental static regeneration (ISR) stress testing harnesses and automated regression monitors.',
        'Collaborated directly with framework core team to optimize Cold Start latency by 35%.',
      ],
    },
    {
      id: 'exp-4',
      role: 'Lead Architect & Hackathon Winner',
      company: 'ApexAgent – Global AI Hackathon Champion',
      location: 'San Francisco, CA',
      startDate: 'Oct 2023',
      endDate: 'Oct 2023',
      bullets: [
        'Spearheaded architecture of autonomous reasoning pipeline utilizing LangChain, Next.js 14, and PgVector.',
        'Won 1st Place Grand Prize among 1,200+ international engineering teams.',
      ],
    },
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'M.S. in Computer Science (AI & Systems)',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      startDate: '2020',
      endDate: '2022',
      gpa: '3.92 / 4.0',
    },
    {
      id: 'edu-2',
      degree: 'B.S. in Electrical Engineering & Computer Science (EECS)',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      startDate: '2016',
      endDate: '2020',
      gpa: '3.88 / 4.0',
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'SynthBase — Multi-Agent Developer Infrastructure',
      techStack: 'Next.js 15, TypeScript, Python, PgVector, Claude 3.5 Sonnet',
      bullets: [
        'Architected distributed workflow runner supporting 10,000+ concurrently running autonomous agents.',
        'Open-sourced SDK with 4,200+ GitHub stars; acquired by Enterprise AI Platform in 2025.',
      ],
    },
    {
      id: 'proj-2',
      title: 'PulseTrace — Distributed Real-Time Telemetry Engine',
      techStack: 'Go, eBPF, Redis, ClickHouse, Docker',
      bullets: [
        'Sub-millisecond packet capture and latency tracer deployed across 500+ Kubernetes nodes.',
        'Reduced network troubleshooting mean-time-to-resolution (MTTR) by 64% for SRE teams.',
      ],
    },
  ],
  skills: [
    'TypeScript',
    'Python',
    'Go',
    'Rust',
    'C++',
    'SQL',
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'PgVector',
    'Redis',
    'AWS',
    'GCP',
    'Docker',
    'Kubernetes',
    'Terraform',
    'CI/CD',
    'Git',
    'LLM Swarms',
    'RAG Pipelines',
    'LangChain',
    'Prompt Engineering',
  ],
  certifications: [
    '1st Place Grand Prize Winner at Global AI Autonomous Agent Hackathon (1,200+ teams).',
    'AWS Certified Solutions Architect – Professional & CKA Kubernetes Administrator.',
    'Y Combinator W24 Founder Batch Alumni (SynthBase — acquired 2025).',
    'GitHub Open Source Creator with 8,500+ stars across developer tooling repositories.',
    'Maintained 99.999% SLA uptime across distributed payment & inference clusters.',
  ],
};

export const ResumeTemplateRenderer: React.FC<ResumeTemplateProps> = ({
  templateId,
  data,
  zoomLevel = 100,
  isMicroPreview = false,
}) => {
  const safeData = data || (MOCK_PERSONA as any);
  const pInfo = safeData?.personalInfo || (safeData as any) || MOCK_PERSONA.personalInfo;

  // Always ensure rich, fully-filled resume presentation (matching Image 3 professional density)
  const fullName = pInfo?.fullName || (safeData as any)?.fullName || MOCK_PERSONA.fullName;
  const email = pInfo?.email || (safeData as any)?.email || MOCK_PERSONA.email;
  const phone = pInfo?.phone || (safeData as any)?.phone || MOCK_PERSONA.phone;
  const location = pInfo?.location || (safeData as any)?.location || MOCK_PERSONA.location;
  const linkedin = pInfo?.linkedin || (safeData as any)?.linkedin || MOCK_PERSONA.linkedin;
  const github = pInfo?.github || (safeData as any)?.github || MOCK_PERSONA.github;
  const website = pInfo?.website || (safeData as any)?.website || MOCK_PERSONA.website;
  const summary = pInfo?.summary || (safeData as any)?.summary || MOCK_PERSONA.summary;

  const personalInfo = {
    fullName,
    email,
    phone,
    location,
    linkedin,
    github,
    website,
    summary,
  };

  const rawExp = safeData?.experiences;
  const rawEdu = safeData?.education;
  const rawProj = safeData?.projects;
  const rawSkills = safeData?.skills;
  const rawCerts = safeData?.certifications;

  const expList = Array.isArray(rawExp) && rawExp.length > 0 ? rawExp : MOCK_PERSONA.experiences;
  const eduList = Array.isArray(rawEdu) && rawEdu.length > 0 ? rawEdu : MOCK_PERSONA.education;
  const projList = Array.isArray(rawProj) && rawProj.length > 0 ? rawProj : MOCK_PERSONA.projects;
  const skillList = Array.isArray(rawSkills) && rawSkills.length > 0 ? rawSkills : MOCK_PERSONA.skills;
  const certList =
    Array.isArray(rawCerts) && rawCerts.length > 0
      ? rawCerts
      : MOCK_PERSONA.certifications;

  const candidateRole = expList.length > 0 ? expList[0].role : MOCK_PERSONA.title;

  return (
    <div
      id={isMicroPreview ? undefined : "resume-print-sheet"}
      contentEditable={!isMicroPreview}
      suppressContentEditableWarning
      className={`bg-white text-[#1E293B] ${
        isMicroPreview ? 'shadow-none' : 'shadow-2xl rounded-xs print:shadow-none'
      } transition-transform origin-top select-text box-border font-sans focus:outline-none focus:ring-1 focus:ring-emerald-500/20`}
      style={{
        width: '210mm',
        minHeight: '297mm',
        maxWidth: '210mm',
        padding: isMicroPreview ? '8mm 10mm' : '12mm 14mm',
        transform: `scale(${zoomLevel / 100})`,
      }}
    >
      {/* =========================================================================
          1. SPLIT DUO (Cobalt Blue Balanced 2-Column Grid)
         ========================================================================= */}
      {templateId === 'split_duo' && (
        <div className="flex flex-col gap-3.5">
          {/* Header */}
          <div className="border-b-2 border-blue-600 pb-2.5 flex justify-between items-start">
            <div>
              <h1 className="text-[23px] font-black uppercase text-slate-900 tracking-tight leading-none">
                {fullName || 'YOUR NAME'}
              </h1>
              <p className="text-[11.5px] font-bold text-blue-600 mt-1">{candidateRole}</p>
            </div>
            <div className="text-[9.5px] text-slate-600 flex flex-col items-end gap-0.5 leading-tight">
              {email && <span>{email}</span>}
              {phone && <span>{phone} • {location}</span>}
              {linkedin && <span className="text-blue-600">{linkedin}</span>}
            </div>
          </div>

          {/* 2-Column Balanced Body (62% Left / 38% Right) */}
          <div className="grid grid-cols-12 gap-5">
            {/* Left Column: Work Experience & Projects */}
            <div className="col-span-7 flex flex-col gap-3">
              {expList.length > 0 && (
                <div className="flex flex-col gap-2">
                  <h2 className="text-[10.5px] font-black uppercase text-blue-700 tracking-wider flex items-center gap-1 border-b border-blue-100 pb-0.5">
                    <Briefcase className="w-3 h-3 text-blue-600" /> Work Experience
                  </h2>
                  <div className="flex flex-col gap-2.5">
                    {expList.map((exp) => (
                      <div key={exp.id} className="flex flex-col gap-0.5">
                        <div className="flex justify-between items-baseline text-[10.5px]">
                          <span className="font-extrabold text-slate-900">{exp.role}</span>
                          <span className="text-[9px] text-slate-500 shrink-0">{exp.startDate} – {exp.endDate}</span>
                        </div>
                        <span className="text-[10px] font-bold text-blue-700">{exp.company}</span>
                        {exp.bullets && (
                          <ul className="list-disc list-outside ml-3.5 text-[9.5px] text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                            {exp.bullets.map((b, idx) => (
                              <li key={idx}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {projList.length > 0 && (
                <div className="flex flex-col gap-1.5 mt-1">
                  <h2 className="text-[10.5px] font-black uppercase text-blue-700 tracking-wider flex items-center gap-1 border-b border-blue-100 pb-0.5">
                    <FolderGit2 className="w-3 h-3 text-blue-600" /> Featured Projects
                  </h2>
                  {projList.map((p) => (
                    <div key={p.id} className="flex flex-col gap-0.5 text-[9.5px]">
                      <span className="font-bold text-slate-900">{p.title}</span>
                      {p.techStack && <span className="text-[8.5px] text-blue-600 font-mono font-medium">{p.techStack}</span>}
                      {p.bullets?.map((b, idx) => (
                        <p key={idx} className="text-slate-600 leading-snug">• {b}</p>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Summary, Skills, Education */}
            <div className="col-span-5 flex flex-col gap-3">
              {summary && (
                <div className="bg-blue-50/60 border-l-3 border-blue-600 p-2.5 rounded-r">
                  <span className="text-[9px] font-black uppercase text-blue-800 block mb-0.5 tracking-wider">
                    Executive Profile
                  </span>
                  <p className="text-[9.5px] text-slate-800 leading-relaxed">{summary}</p>
                </div>
              )}

              {skillList.length > 0 && (
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-[10.5px] font-black uppercase text-blue-700 tracking-wider flex items-center gap-1 border-b border-blue-100 pb-0.5">
                    <Wrench className="w-3 h-3 text-blue-600" /> Technical Arsenal
                  </h2>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {skillList.map((sk, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 bg-blue-50 text-blue-900 border border-blue-200/80 rounded text-[9px] font-semibold">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {eduList.length > 0 && (
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-[10.5px] font-black uppercase text-blue-700 tracking-wider flex items-center gap-1 border-b border-blue-100 pb-0.5">
                    <GraduationCap className="w-3 h-3 text-blue-600" /> Education
                  </h2>
                  <div className="flex flex-col gap-2">
                    {eduList.map((edu) => (
                      <div key={edu.id} className="flex flex-col text-[9.5px]">
                        <span className="font-bold text-slate-900">{edu.institution}</span>
                        <span className="text-slate-700">{edu.degree}</span>
                        <span className="text-[8.5px] text-slate-500">{edu.startDate} – {edu.endDate} {edu.gpa && `| GPA ${edu.gpa}`}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {certList.length > 0 && (
                <div className="flex flex-col gap-1">
                  <h2 className="text-[10.5px] font-black uppercase text-blue-700 tracking-wider flex items-center gap-1 border-b border-blue-100 pb-0.5">
                    <Award className="w-3 h-3 text-blue-600" /> Key Milestones
                  </h2>
                  {certList.slice(0, 3).map((c, idx) => (
                    <div key={idx} className="text-[9px] text-slate-700 flex items-start gap-1">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          2. PRESTIGE GOLD (Obsidian Banner + Metallic Warm Gold Accents)
         ========================================================================= */}
      {(templateId === 'prestige_gold' || templateId === 'boardroom_serif') && (
        <div className="flex flex-col gap-3 -mx-[14mm] -mt-[12mm] pb-4">
          {/* Obsidian & Gold Banner */}
          <div className="bg-[#0B132B] text-white px-8 py-5 flex flex-col gap-2 relative">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-2 py-0.5 bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded-full text-[9px] font-black tracking-widest uppercase mb-1">
                  ★ C-SUITE / BOARD EXECUTIVE
                </span>
                <h1 className="text-[25px] font-black tracking-tight text-white leading-none">
                  {fullName || 'YOUR NAME'}
                </h1>
                <p className="text-[11.5px] font-bold text-amber-400 mt-1 tracking-wide">{candidateRole}</p>
              </div>
              <div className="text-[9.5px] text-slate-300 flex flex-col items-end gap-0.5">
                {email && <span>{email}</span>}
                {phone && <span>{phone} • {location}</span>}
                {linkedin && <span className="text-amber-300">{linkedin}</span>}
              </div>
            </div>
            {/* Gold separator hairline */}
            <div className="h-0.5 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600 w-full mt-2" />
          </div>

          {/* Body Content */}
          <div className="px-8 flex flex-col gap-3 text-slate-800">
            {summary && (
              <div className="border-l-3 border-amber-600 pl-3 py-0.5">
                <span className="text-[9px] font-black uppercase text-amber-700 tracking-wider block mb-0.5">
                  Executive Mandate & Leadership Vision
                </span>
                <p className="text-[9.5px] text-slate-800 leading-relaxed">{summary}</p>
              </div>
            )}

            <div className="grid grid-cols-12 gap-5 mt-1">
              {/* Left Column (65%) */}
              <div className="col-span-8 flex flex-col gap-3">
                {expList.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[11px] font-serif font-black uppercase tracking-wider text-slate-900 border-b-2 border-amber-500/60 pb-0.5">
                      Executive Trajectory & Key Results
                    </h2>
                    <div className="flex flex-col gap-3">
                      {expList.map((exp) => (
                        <div key={exp.id} className="flex flex-col gap-0.5">
                          <div className="flex justify-between items-baseline text-[11px]">
                            <span className="font-extrabold text-slate-950 font-serif">{exp.role}</span>
                            <span className="text-[9.5px] text-slate-500">{exp.startDate} – {exp.endDate}</span>
                          </div>
                          <span className="text-[10px] font-bold text-amber-700">{exp.company}</span>
                          {exp.bullets && (
                            <ul className="list-disc list-outside ml-3.5 text-[9.5px] text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                              {exp.bullets.map((b, idx) => (
                                <li key={idx}>{b}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column (35%) */}
              <div className="col-span-4 flex flex-col gap-3">
                <div className="bg-amber-50/50 border border-amber-200 p-2.5 rounded-lg flex flex-col gap-1.5">
                  <h3 className="text-[10px] font-black uppercase tracking-wider text-amber-900 border-b border-amber-200 pb-0.5">
                    Core Competencies
                  </h3>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {skillList.map((sk, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 bg-white text-slate-800 border border-amber-300 rounded text-[8.5px] font-bold">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                {eduList.length > 0 && (
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[10px] font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                      Academic Pedigree
                    </h3>
                    {eduList.map((edu) => (
                      <div key={edu.id} className="text-[9px] flex flex-col">
                        <span className="font-bold text-slate-900">{edu.institution}</span>
                        <span className="text-slate-700">{edu.degree}</span>
                      </div>
                    ))}
                  </div>
                )}

                {certList.length > 0 && (
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[10px] font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                      Distinctions & Honors
                    </h3>
                    {certList.slice(0, 3).map((c, idx) => (
                      <div key={idx} className="text-[8.5px] text-slate-700 leading-snug">
                        ◆ {c}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          3. AI / ML LEAD (High-Density Telemetry & Swarm Metrics)
         ========================================================================= */}
      {(templateId === 'ai_ml_lead' || templateId === 'ai_researcher' || templateId === 'quantum_research') && (
        <div className="flex flex-col gap-3 font-sans">
          {/* Top AI Telemetry Banner */}
          <div className="border-b-2 border-indigo-600 pb-2">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-[23px] font-black tracking-tight text-slate-900">{fullName || 'YOUR NAME'}</h1>
                  <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 font-mono text-[9px] font-bold rounded">
                    [ AI // LLM LEAD ]
                  </span>
                </div>
                <p className="text-[11px] font-mono text-indigo-700 mt-0.5 font-bold">{candidateRole}</p>
              </div>
              <div className="text-[9.5px] font-mono text-slate-600 flex flex-col items-end">
                <span>{email}</span>
                <span>{phone} • {location}</span>
                {github && <span className="text-indigo-600">{github}</span>}
              </div>
            </div>

            {/* 4 Telemetry Metrics Cards */}
            <div className="grid grid-cols-4 gap-2 mt-2 font-mono text-center">
              <div className="bg-indigo-50/70 border border-indigo-200 p-1 rounded">
                <span className="block text-[8px] text-slate-500 uppercase">Throughput</span>
                <span className="text-[10px] font-black text-indigo-900">120k Req/s</span>
              </div>
              <div className="bg-indigo-50/70 border border-indigo-200 p-1 rounded">
                <span className="block text-[8px] text-slate-500 uppercase">p95 Latency</span>
                <span className="text-[10px] font-black text-indigo-900">&lt;45ms SLA</span>
              </div>
              <div className="bg-indigo-50/70 border border-indigo-200 p-1 rounded">
                <span className="block text-[8px] text-slate-500 uppercase">Token Cost</span>
                <span className="text-[10px] font-black text-indigo-900">-48% Spend</span>
              </div>
              <div className="bg-indigo-50/70 border border-indigo-200 p-1 rounded">
                <span className="block text-[8px] text-slate-500 uppercase">Availability</span>
                <span className="text-[10px] font-black text-indigo-900">99.999% SLA</span>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-2.5">
            {summary && (
              <div className="text-[9.5px] text-slate-800 leading-relaxed font-mono bg-slate-50 border-l-2 border-indigo-600 p-2">
                &gt; {summary}
              </div>
            )}

            {expList.length > 0 && (
              <div className="flex flex-col gap-2">
                <h2 className="text-[10.5px] font-black font-mono uppercase tracking-wider text-indigo-900 border-b border-indigo-200 pb-0.5">
                  01 // DISTRIBUTED SYSTEMS & MODEL EXECUTION
                </h2>
                <div className="flex flex-col gap-2.5">
                  {expList.map((exp) => (
                    <div key={exp.id} className="flex flex-col gap-0.5">
                      <div className="flex justify-between items-baseline text-[10.5px]">
                        <span className="font-extrabold text-slate-900">{exp.role}</span>
                        <span className="text-[9px] font-mono text-indigo-700">{exp.startDate} – {exp.endDate}</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-700">{exp.company}</span>
                      {exp.bullets && (
                        <ul className="list-disc list-outside ml-3.5 text-[9.5px] text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                          {exp.bullets.map((b, idx) => (
                            <li key={idx}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 pt-1">
              {skillList.length > 0 && (
                <div>
                  <h2 className="text-[10.5px] font-black font-mono uppercase tracking-wider text-indigo-900 border-b border-indigo-200 pb-0.5">
                    02 // AI / ML STACK
                  </h2>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {skillList.map((sk, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 bg-indigo-50 text-indigo-900 border border-indigo-200 font-mono text-[9px] rounded font-semibold">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {eduList.length > 0 && (
                <div>
                  <h2 className="text-[10.5px] font-black font-mono uppercase tracking-wider text-indigo-900 border-b border-indigo-200 pb-0.5">
                    03 // CREDENTIALS & RESEARCH
                  </h2>
                  <div className="flex flex-col gap-1.5 mt-1 text-[9.5px]">
                    {eduList.map((edu) => (
                      <div key={edu.id}>
                        <span className="font-bold text-slate-900 block">{edu.institution}</span>
                        <span className="text-slate-600">{edu.degree} ({edu.startDate} - {edu.endDate})</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          4. GRAPHITE COMPACT (Ultra-Dense 1-Page Leading)
         ========================================================================= */}
      {templateId === 'graphite_compact' && (
        <div className="flex flex-col gap-2.5 text-[#1E293B]">
          {/* Header */}
          <div className="border-b border-slate-400 pb-1.5 flex justify-between items-baseline">
            <div>
              <h1 className="text-[22px] font-black uppercase tracking-tight text-slate-900 leading-none">
                {fullName || 'YOUR NAME'}
              </h1>
              <p className="text-[10.5px] font-semibold text-slate-700 mt-0.5">{candidateRole}</p>
            </div>
            <div className="text-[9px] text-slate-600 flex flex-wrap gap-2">
              {email && <span>{email}</span>}
              {phone && <span>• {phone}</span>}
              {location && <span>• {location}</span>}
              {linkedin && <span>• {linkedin}</span>}
            </div>
          </div>

          {summary && (
            <p className="text-[9.5px] text-slate-800 leading-snug border-l-2 border-slate-600 pl-2">
              {summary}
            </p>
          )}

          {/* Dual Column Compact Layout */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8 flex flex-col gap-2">
              {expList.length > 0 && (
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-[10px] font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-0.5">
                    PROFESSIONAL EXPERIENCE
                  </h2>
                  <div className="flex flex-col gap-2">
                    {expList.map((exp) => (
                      <div key={exp.id} className="flex flex-col text-[9.5px]">
                        <div className="flex justify-between font-bold text-slate-900">
                          <span>{exp.role} — <span className="font-semibold text-slate-700">{exp.company}</span></span>
                          <span className="text-[8.5px] text-slate-500 font-normal">{exp.startDate} – {exp.endDate}</span>
                        </div>
                        {exp.bullets && (
                          <ul className="list-disc list-outside ml-3 text-[9px] text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-snug">
                            {exp.bullets.map((b, idx) => (
                              <li key={idx}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="col-span-4 flex flex-col gap-2">
              {skillList.length > 0 && (
                <div className="flex flex-col gap-1">
                  <h2 className="text-[10px] font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-0.5">
                    COMPETENCIES
                  </h2>
                  <div className="flex flex-wrap gap-1">
                    {skillList.map((sk, idx) => (
                      <span key={idx} className="px-1 py-0.5 bg-slate-100 text-slate-800 rounded text-[8.5px] font-medium">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {eduList.length > 0 && (
                <div className="flex flex-col gap-1">
                  <h2 className="text-[10px] font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-0.5">
                    EDUCATION
                  </h2>
                  {eduList.map((edu) => (
                    <div key={edu.id} className="text-[9px]">
                      <span className="font-bold block">{edu.institution}</span>
                      <span className="text-slate-600">{edu.degree}</span>
                      <span className="text-[8px] text-slate-500 block">{edu.startDate} – {edu.endDate}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          5. CPA & AUDIT LEAD / CORPORATE COUNSEL (Classic Centered Double Hairline)
         ========================================================================= */}
      {(templateId === 'cpa_audit_lead' || templateId === 'corporate_counsel_lead' || templateId === 'fortune500_single') && (
        <div className="flex flex-col gap-3 font-serif">
          {/* Centered Serif Header */}
          <div className="text-center flex flex-col items-center">
            <h1 className="text-[24px] font-bold uppercase tracking-widest text-slate-950">
              {fullName || 'YOUR NAME'}
            </h1>
            <p className="text-[11px] font-semibold text-slate-700 tracking-wide mt-0.5">
              {templateId === 'corporate_counsel_lead' ? 'CORPORATE COUNSEL & STRATEGIC ADVISORY' : 'CERTIFIED PUBLIC ACCOUNTANT (CPA) & AUDIT LEAD'}
            </p>
            <div className="text-[9.5px] text-slate-600 flex justify-center flex-wrap gap-2 mt-1">
              {email && <span>{email}</span>}
              {phone && <span>• {phone}</span>}
              {location && <span>• {location}</span>}
              {linkedin && <span>• {linkedin}</span>}
            </div>
          </div>

          {/* Double Hairline Rule */}
          <div className="border-y-2 border-double border-slate-700 py-1 my-0.5">
            <p className="text-[9.5px] text-slate-800 text-center italic leading-relaxed px-4">
              {summary}
            </p>
          </div>

          {/* Experience */}
          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-0.5 text-center">
                PROFESSIONAL EXPERIENCE & AUDIT RECORD
              </h2>
              <div className="flex flex-col gap-2.5">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5">
                    <div className="flex justify-between items-baseline text-[11px]">
                      <span className="font-bold text-slate-950">{exp.role}</span>
                      <span className="text-[9.5px] text-slate-600 italic">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <span className="text-[10px] text-slate-700 italic">{exp.company} — {exp.location}</span>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-4 text-[9.5px] text-slate-800 flex flex-col gap-0.5 mt-0.5 leading-relaxed font-sans">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Credentials Grid */}
          <div className="grid grid-cols-2 gap-5 pt-1">
            {eduList.length > 0 && (
              <div>
                <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-0.5">
                  EDUCATION & LICENSURES
                </h2>
                <div className="flex flex-col gap-1.5 mt-1 text-[9.5px]">
                  {eduList.map((edu) => (
                    <div key={edu.id}>
                      <span className="font-bold block text-slate-950">{edu.institution}</span>
                      <span className="text-slate-700">{edu.degree}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {skillList.length > 0 && (
              <div>
                <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-0.5">
                  CORE AUDIT & GOVERNANCE
                </h2>
                <div className="flex flex-wrap gap-1 mt-1 font-sans">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-slate-100 text-slate-800 border border-slate-300 rounded text-[9px]">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          6. BACKEND & DISTRIBUTED ARCHITECTURE (Terminal Code Styling)
         ========================================================================= */}
      {(templateId === 'backend_distributed_arch' || templateId === 'minimalist_tech' || templateId === 'rust_systems') && (
        <div className="flex flex-col gap-3 font-mono text-slate-900">
          <div className="border-b-2 border-slate-900 pb-2">
            <div className="text-[9px] text-emerald-600 font-bold mb-0.5">
              usr@distributed-arch:~$ cat profile.json
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-[22px] font-black uppercase text-slate-950 tracking-tight">
                  {fullName || 'YOUR NAME'}
                </h1>
                <p className="text-[11px] font-bold text-emerald-700 mt-0.5">&gt; {candidateRole}</p>
              </div>
              <div className="text-[9.5px] text-slate-600 flex flex-col items-end">
                <span>{email}</span>
                <span>{phone}</span>
                {github && <span className="text-emerald-700">{github}</span>}
              </div>
            </div>
          </div>

          {summary && (
            <div className="p-2 bg-slate-100 rounded text-[9.5px] text-slate-800 border-l-2 border-emerald-600">
              // {summary}
            </div>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-[10px] font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-0.5">
                $ /usr/bin/experience --verbose
              </h2>
              <div className="flex flex-col gap-2.5">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between font-bold text-slate-950">
                      <span>&gt; {exp.role} @ {exp.company}</span>
                      <span className="text-slate-500 text-[8.5px]">{exp.startDate} .. {exp.endDate}</span>
                    </div>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 font-sans leading-snug">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-1">
            {skillList.length > 0 && (
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-0.5">
                  $ env | grep SKILLS
                </h2>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-slate-100 text-slate-900 border border-slate-300 rounded text-[8.5px]">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {eduList.length > 0 && (
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-0.5">
                  $ ./verify_education.sh
                </h2>
                <div className="flex flex-col gap-1 mt-1 text-[9px]">
                  {eduList.map((edu) => (
                    <div key={edu.id}>
                      <span className="font-bold block">{edu.institution}</span>
                      <span className="text-slate-600">{edu.degree}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          7. VP PRODUCT STRATEGY / NORDIC EMERALD
         ========================================================================= */}
      {(templateId === 'vp_product_strategy' || templateId === 'growth_lead') && (
        <div className="flex flex-col gap-3 font-sans">
          <div className="border-b-2 border-emerald-700 pb-2 flex justify-between items-start">
            <div>
              <span className="text-[9px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                PRODUCT LEADERSHIP
              </span>
              <h1 className="text-[23px] font-black tracking-tight text-slate-900 mt-1">{fullName || 'YOUR NAME'}</h1>
              <p className="text-[11px] font-bold text-emerald-800 mt-0.5">{candidateRole}</p>
            </div>
            <div className="text-[9.5px] text-slate-600 flex flex-col items-end">
              <span>{email}</span>
              <span>{phone} • {location}</span>
            </div>
          </div>

          {summary && (
            <div className="bg-emerald-50/60 border-l-3 border-emerald-600 p-2.5 rounded-r text-[9.5px] text-slate-800 leading-relaxed">
              {summary}
            </div>
          )}

          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-8 flex flex-col gap-2.5">
              {expList.length > 0 && (
                <div className="flex flex-col gap-2">
                  <h2 className="text-[10.5px] font-black uppercase tracking-wider text-emerald-900 border-b border-emerald-200 pb-0.5">
                    Product Impact & Deliverables
                  </h2>
                  <div className="flex flex-col gap-2.5">
                    {expList.map((exp) => (
                      <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                        <div className="flex justify-between items-baseline font-bold text-slate-900">
                          <span>{exp.role}</span>
                          <span className="text-slate-500 text-[8.5px]">{exp.startDate} – {exp.endDate}</span>
                        </div>
                        <span className="font-bold text-emerald-800">{exp.company}</span>
                        {exp.bullets && (
                          <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                            {exp.bullets.map((b, idx) => (
                              <li key={idx}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="col-span-4 flex flex-col gap-3">
              {skillList.length > 0 && (
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-wider text-emerald-900 border-b border-emerald-200 pb-0.5">
                    Domain Competencies
                  </h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {skillList.map((sk, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-full text-[8.5px] font-semibold">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {eduList.length > 0 && (
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-wider text-emerald-900 border-b border-emerald-200 pb-0.5">
                    Education
                  </h3>
                  {eduList.map((edu) => (
                    <div key={edu.id} className="text-[9px] mt-1">
                      <span className="font-bold block text-slate-900">{edu.institution}</span>
                      <span className="text-slate-600">{edu.degree}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          8. SWISS BAUHAUS GRID (Stark Black & Swiss Red Geometric)
         ========================================================================= */}
      {(templateId === 'swiss_bauhaus_grid' || templateId === 'swiss_grid') && (
        <div className="flex flex-col gap-3 font-sans">
          {/* Bauhaus Red Block Header */}
          <div className="flex items-stretch gap-3 border-b-4 border-black pb-3">
            <div className="w-4 bg-red-600 shrink-0" />
            <div className="flex-1">
              <h1 className="text-[26px] font-black uppercase tracking-tight text-black leading-none">
                {fullName || 'YOUR NAME'}
              </h1>
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-red-600 mt-1">
                {candidateRole}
              </p>
              <div className="text-[9px] font-bold text-gray-700 flex flex-wrap gap-3 mt-1 uppercase">
                {email && <span>{email}</span>}
                {phone && <span>• {phone}</span>}
                {location && <span>• {location}</span>}
              </div>
            </div>
          </div>

          {/* Grid Body */}
          <div className="grid grid-cols-12 gap-5 mt-1">
            <div className="col-span-8 flex flex-col gap-3">
              {expList.length > 0 && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 border-b-2 border-black pb-0.5">
                    <span className="px-1 bg-red-600 text-white font-black text-[9px]">01</span>
                    <h2 className="text-[11px] font-black uppercase tracking-wider text-black">
                      EXPERIENCE
                    </h2>
                  </div>
                  <div className="flex flex-col gap-3">
                    {expList.map((exp) => (
                      <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                        <div className="flex justify-between items-baseline font-black text-black">
                          <span>{exp.role}</span>
                          <span className="text-red-600 text-[8.5px] font-mono">{exp.startDate} / {exp.endDate}</span>
                        </div>
                        <span className="font-bold text-gray-800 uppercase text-[9px]">{exp.company}</span>
                        {exp.bullets && (
                          <ul className="list-square list-outside ml-3.5 text-gray-800 flex flex-col gap-0.5 mt-0.5 leading-snug">
                            {exp.bullets.map((b, idx) => (
                              <li key={idx}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="col-span-4 flex flex-col gap-3">
              {summary && (
                <div>
                  <div className="flex items-center gap-1 border-b-2 border-black pb-0.5 mb-1">
                    <span className="px-1 bg-black text-white font-black text-[9px]">02</span>
                    <h3 className="text-[10px] font-black uppercase tracking-wider">STATEMENT</h3>
                  </div>
                  <p className="text-[9px] text-gray-800 leading-relaxed font-medium">{summary}</p>
                </div>
              )}

              {skillList.length > 0 && (
                <div>
                  <div className="flex items-center gap-1 border-b-2 border-black pb-0.5 mb-1">
                    <span className="px-1 bg-black text-white font-black text-[9px]">03</span>
                    <h3 className="text-[10px] font-black uppercase tracking-wider">SKILLS</h3>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {skillList.map((sk, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 bg-gray-100 text-black border border-black text-[8.5px] font-bold uppercase">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {eduList.length > 0 && (
                <div>
                  <div className="flex items-center gap-1 border-b-2 border-black pb-0.5 mb-1">
                    <span className="px-1 bg-black text-white font-black text-[9px]">04</span>
                    <h3 className="text-[10px] font-black uppercase tracking-wider">EDUCATION</h3>
                  </div>
                  {eduList.map((edu) => (
                    <div key={edu.id} className="text-[8.5px] mt-1 font-bold">
                      <span className="block text-black">{edu.institution}</span>
                      <span className="text-gray-600 font-normal">{edu.degree}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          9. NEO-BRUTALIST TECH (Bold Borders & High-Contrast Yellow Badges)
         ========================================================================= */}
      {(templateId === 'neo_brutalist_tech' || templateId === 'neo_brutalist' || templateId === 'yellow_creative') && (
        <div className="flex flex-col gap-3 font-sans">
          <div className="border-3 border-black bg-yellow-300 p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center">
            <div>
              <h1 className="text-[23px] font-black uppercase text-black tracking-tight leading-none">
                {fullName || 'YOUR NAME'}
              </h1>
              <p className="text-[11px] font-black uppercase text-black mt-1 bg-white inline-block px-1.5 py-0.5 border border-black">
                {candidateRole}
              </p>
            </div>
            <div className="text-[9.5px] font-bold text-black flex flex-col items-end">
              <span>{email}</span>
              <span>{phone} • {location}</span>
            </div>
          </div>

          {summary && (
            <div className="border-2 border-black p-2 bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-[9.5px] text-black font-medium leading-relaxed">
              {summary}
            </div>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <div className="bg-black text-white px-2 py-0.5 inline-block self-start font-black text-[10px] uppercase">
                // WORK EXPERIENCE
              </div>
              <div className="flex flex-col gap-2.5">
                {expList.map((exp) => (
                  <div key={exp.id} className="border-2 border-black p-2 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between items-baseline font-black text-black">
                      <span>{exp.role} @ {exp.company}</span>
                      <span className="text-[8.5px] bg-yellow-200 px-1 border border-black">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3.5 text-black flex flex-col gap-0.5 mt-0.5 leading-snug">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 pt-1">
            {skillList.length > 0 && (
              <div className="border-2 border-black p-2 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-black text-[9.5px] uppercase border-b-2 border-black pb-0.5 mb-1.5">
                  SKILLS & TOOLS
                </div>
                <div className="flex flex-wrap gap-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-yellow-100 text-black border border-black text-[8.5px] font-black">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {eduList.length > 0 && (
              <div className="border-2 border-black p-2 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-black text-[9.5px] uppercase border-b-2 border-black pb-0.5 mb-1.5">
                  EDUCATION
                </div>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[8.5px] font-bold">
                    <span>{edu.institution}</span>
                    <span className="text-gray-700 block font-normal">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          10. STARTUP FOUNDER PITCH (Punchy Orange Accents & Traction Badges)
         ========================================================================= */}
      {(templateId === 'startup_founder_pitch' || templateId === 'yc_founder_pitch' || templateId === 'stealth_scale' || templateId === 'crypto_web3') && (
        <div className="flex flex-col gap-3 font-sans">
          <div className="border-b-2 border-orange-500 pb-2 flex justify-between items-start">
            <div>
              <span className="inline-block px-2 py-0.5 bg-orange-100 text-orange-800 text-[9px] font-black rounded-full mb-1 border border-orange-300">
                ⚡ VENTURE-BACKED FOUNDER // YC ALUM
              </span>
              <h1 className="text-[23px] font-black tracking-tight text-slate-950 leading-none">
                {fullName || 'YOUR NAME'}
              </h1>
              <p className="text-[11px] font-bold text-orange-600 mt-1">{candidateRole}</p>
            </div>
            <div className="text-[9.5px] text-slate-600 flex flex-col items-end">
              <span>{email}</span>
              <span>{phone} • {location}</span>
            </div>
          </div>

          <div className="bg-orange-50/70 border border-orange-200 p-2.5 rounded-lg flex justify-between items-center text-[9px]">
            <div><span className="font-black text-orange-900">MILESTONES:</span> <span className="text-slate-700">$3.2M Seed Raised • $1.8M ARR Scaled • Product Hunt #1 of Day</span></div>
          </div>

          {summary && (
            <p className="text-[9.5px] text-slate-800 leading-relaxed border-l-2 border-orange-500 pl-2">
              {summary}
            </p>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-[10.5px] font-black uppercase tracking-wider text-orange-800 border-b border-orange-200 pb-0.5">
                EXECUTION & VENTURE TRAJECTORY
              </h2>
              <div className="flex flex-col gap-2.5">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>{exp.role}</span>
                      <span className="text-[8.5px] text-slate-500">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <span className="font-bold text-orange-600">{exp.company}</span>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-1">
            {skillList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-orange-800 border-b border-orange-200 pb-0.5">
                  CORE ARSENAL
                </h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-orange-50 text-orange-950 border border-orange-200 rounded text-[8.5px] font-bold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {eduList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-orange-800 border-b border-orange-200 pb-0.5">
                  EDUCATION
                </h3>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[9px] mt-1">
                    <span className="font-bold text-slate-900 block">{edu.institution}</span>
                    <span className="text-slate-600">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          11. CLOUD INFRA & SRE (AWS / GCP Cyan Blueprint)
         ========================================================================= */}
      {(templateId === 'cloud_infra_sre' || templateId === 'cloud_architect') && (
        <div className="flex flex-col gap-3 font-sans text-slate-900">
          <div className="border-b-2 border-sky-600 pb-2 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-[23px] font-black tracking-tight">{fullName || 'YOUR NAME'}</h1>
                <span className="px-2 py-0.5 bg-sky-100 text-sky-800 text-[8.5px] font-mono font-bold rounded">
                  [ 99.999% SLA ]
                </span>
              </div>
              <p className="text-[11px] font-bold text-sky-700 mt-0.5">{candidateRole}</p>
            </div>
            <div className="text-[9.5px] text-slate-600 flex flex-col items-end">
              <span>{email}</span>
              <span>{phone} • {location}</span>
            </div>
          </div>

          {summary && (
            <div className="bg-sky-50/70 border-l-3 border-sky-600 p-2.5 rounded-r text-[9.5px] text-slate-800 leading-relaxed">
              {summary}
            </div>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-[10.5px] font-black uppercase tracking-wider text-sky-900 border-b border-sky-200 pb-0.5">
                CLOUD ARCHITECTURE & SRE RELIABILITY
              </h2>
              <div className="flex flex-col gap-2.5">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between items-baseline font-bold">
                      <span>{exp.role}</span>
                      <span className="text-slate-500 text-[8.5px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <span className="font-bold text-sky-700">{exp.company}</span>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-1">
            {skillList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-sky-900 border-b border-sky-200 pb-0.5">
                  INFRASTRUCTURE & DEVOPS
                </h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-sky-50 text-sky-900 border border-sky-200 rounded text-[8.5px] font-semibold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {eduList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-sky-900 border-b border-sky-200 pb-0.5">
                  EDUCATION
                </h3>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[9px] mt-1">
                    <span className="font-bold block">{edu.institution}</span>
                    <span className="text-slate-600">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          12. CORAL SUNSET PRODUCT DESIGNER (Warm Rose Coral Aesthetics)
         ========================================================================= */}
      {(templateId === 'coral_sunset_product' || templateId === 'coral_modern' || templateId === 'head_of_ux_design' || templateId === 'design_portfolio') && (
        <div className="flex flex-col gap-3 font-sans">
          <div className="border-b-2 border-rose-500 pb-2 flex justify-between items-start">
            <div>
              <span className="text-[9px] font-black uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                EXPERIENCE ARCHITECT
              </span>
              <h1 className="text-[23px] font-black tracking-tight text-slate-900 mt-1">{fullName || 'YOUR NAME'}</h1>
              <p className="text-[11px] font-bold text-rose-600 mt-0.5">{candidateRole}</p>
            </div>
            <div className="text-[9.5px] text-slate-600 flex flex-col items-end">
              <span>{email}</span>
              <span>{phone} • {location}</span>
            </div>
          </div>

          {summary && (
            <div className="bg-rose-50/50 border-l-3 border-rose-500 p-2.5 rounded-r text-[9.5px] text-slate-800 leading-relaxed">
              {summary}
            </div>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-[10.5px] font-black uppercase tracking-wider text-rose-900 border-b border-rose-200 pb-0.5">
                DESIGN SYSTEMS & PRODUCT CRAFT
              </h2>
              <div className="flex flex-col gap-2.5">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>{exp.role}</span>
                      <span className="text-slate-500 text-[8.5px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <span className="font-bold text-rose-600">{exp.company}</span>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-1">
            {skillList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-rose-900 border-b border-rose-200 pb-0.5">
                  DESIGN & UX ARSENAL
                </h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-rose-50 text-rose-950 border border-rose-200 rounded-full text-[8.5px] font-semibold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {eduList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-rose-900 border-b border-rose-200 pb-0.5">
                  EDUCATION
                </h3>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[9px] mt-1">
                    <span className="font-bold text-slate-900 block">{edu.institution}</span>
                    <span className="text-slate-600">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          13. QUANT RESEARCH / BURGUNDY HEDGE FUND
         ========================================================================= */}
      {(templateId === 'quant_research_fund' || templateId === 'fintech_lead') && (
        <div className="flex flex-col gap-3 font-serif text-slate-900">
          <div className="border-b-2 border-rose-950 pb-2 flex justify-between items-start">
            <div>
              <span className="text-[9px] font-sans font-black uppercase tracking-wider text-rose-900 bg-rose-100/60 px-2 py-0.5 rounded border border-rose-300">
                QUANTITATIVE STRATEGY & ALPHA GENERATION
              </span>
              <h1 className="text-[23px] font-black tracking-tight text-slate-950 mt-1">{fullName || 'YOUR NAME'}</h1>
              <p className="text-[11px] font-bold text-rose-900 mt-0.5 font-sans">{candidateRole}</p>
            </div>
            <div className="text-[9.5px] text-slate-600 font-sans flex flex-col items-end">
              <span>{email}</span>
              <span>{phone} • {location}</span>
            </div>
          </div>

          <div className="bg-rose-50/60 border border-rose-200 p-2 rounded text-[9px] font-sans flex justify-between">
            <span><strong className="text-rose-950">Sharpe Ratio:</strong> 2.85</span>
            <span><strong className="text-rose-950">Latency:</strong> &lt;2μs C++</span>
            <span><strong className="text-rose-950">Pedigree:</strong> Stanford & Berkeley</span>
          </div>

          {summary && (
            <p className="text-[9.5px] text-slate-800 leading-relaxed italic border-l-2 border-rose-900 pl-2">
              {summary}
            </p>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-[10.5px] font-black uppercase tracking-wider text-rose-950 border-b border-rose-300 pb-0.5">
                QUANTITATIVE RESEARCH & TRADING SYSTEMS
              </h2>
              <div className="flex flex-col gap-2.5">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between items-baseline font-bold text-slate-950">
                      <span>{exp.role}</span>
                      <span className="text-slate-500 text-[8.5px] font-sans">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <span className="font-bold text-rose-900">{exp.company}</span>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 font-sans leading-relaxed">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-1 font-sans">
            {skillList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-rose-950 border-b border-rose-300 pb-0.5">
                  MATHEMATICAL & DEV TOOLKIT
                </h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-rose-50 text-rose-950 border border-rose-200 rounded text-[8.5px] font-bold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {eduList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-rose-950 border-b border-rose-300 pb-0.5">
                  EDUCATION
                </h3>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[9px] mt-1 font-serif">
                    <span className="font-bold text-slate-950 block">{edu.institution}</span>
                    <span className="text-slate-600">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          14. TOKYO ZEN MINIMAL (Whisper-Thin Dividers & Generous Whitespace)
         ========================================================================= */}
      {(templateId === 'tokyo_zen_minimal' || templateId === 'tokyo_minimal') && (
        <div className="flex flex-col gap-3 font-sans text-slate-800">
          <div className="border-b border-slate-200 pb-2 flex justify-between items-end">
            <div>
              <h1 className="text-[21px] font-light tracking-wide text-slate-900">{fullName || 'YOUR NAME'}</h1>
              <p className="text-[10.5px] text-slate-500 tracking-wider uppercase mt-0.5">{candidateRole}</p>
            </div>
            <div className="text-[9px] text-slate-400 flex flex-col items-end">
              <span>{email}</span>
              <span>{phone} • {location}</span>
            </div>
          </div>

          {summary && (
            <p className="text-[9px] text-slate-600 leading-relaxed font-light py-1 border-l border-slate-300 pl-3">
              {summary}
            </p>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <span className="text-[9.5px] font-medium tracking-widest text-slate-400 uppercase">
                EXPERIENCE
              </span>
              <div className="flex flex-col gap-2.5">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5 text-[9px]">
                    <div className="flex justify-between text-slate-900">
                      <span className="font-medium">{exp.role} — <span className="text-slate-600">{exp.company}</span></span>
                      <span className="text-slate-400 text-[8.5px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3 text-slate-600 flex flex-col gap-0.5 mt-0.5 leading-relaxed font-light">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-1 border-t border-slate-100">
            {skillList.length > 0 && (
              <div>
                <span className="text-[9.5px] font-medium tracking-widest text-slate-400 uppercase block mb-1">
                  DISCIPLINES
                </span>
                <div className="flex flex-wrap gap-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-slate-50 text-slate-700 text-[8.5px] rounded">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {eduList.length > 0 && (
              <div>
                <span className="text-[9.5px] font-medium tracking-widest text-slate-400 uppercase block mb-1">
                  EDUCATION
                </span>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[8.5px]">
                    <span className="text-slate-800 block font-medium">{edu.institution}</span>
                    <span className="text-slate-500">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          15. SCANDINAVIAN FROST CLEAN (Frost Blue Rounded Cards)
         ========================================================================= */}
      {(templateId === 'scandinavian_frost' || templateId === 'nordic_clean') && (
        <div className="flex flex-col gap-3 font-sans">
          <div className="bg-sky-50/80 border border-sky-200/80 p-3 rounded-xl flex justify-between items-center">
            <div>
              <h1 className="text-[22px] font-black tracking-tight text-slate-900">{fullName || 'YOUR NAME'}</h1>
              <p className="text-[11px] font-bold text-sky-700 mt-0.5">{candidateRole}</p>
            </div>
            <div className="text-[9px] text-slate-600 flex flex-col items-end">
              <span>{email}</span>
              <span>{phone} • {location}</span>
            </div>
          </div>

          {summary && (
            <p className="text-[9.5px] text-slate-700 leading-relaxed px-1">
              {summary}
            </p>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-[10px] font-black uppercase tracking-wider text-sky-900 border-b border-sky-100 pb-0.5">
                EXPERIENCE
              </h2>
              <div className="flex flex-col gap-2">
                {expList.map((exp) => (
                  <div key={exp.id} className="p-2.5 rounded-lg border border-slate-100 bg-slate-50/50 flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>{exp.role} • <span className="text-sky-700">{exp.company}</span></span>
                      <span className="text-slate-500 text-[8.5px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3 text-slate-600 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 pt-1">
            {skillList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-sky-900 border-b border-sky-100 pb-0.5">
                  CORE SKILLS
                </h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-sky-50 text-sky-900 border border-sky-200 rounded-full text-[8.5px] font-semibold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {eduList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-sky-900 border-b border-sky-100 pb-0.5">
                  EDUCATION
                </h3>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[8.5px] mt-1">
                    <span className="font-bold text-slate-900 block">{edu.institution}</span>
                    <span className="text-slate-600">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          16. DEEP TEAL BIOTECH & HARDWARE
         ========================================================================= */}
      {(templateId === 'deep_teal_biotech' || templateId === 'teal_innovator' || templateId === 'soft_green_pill' || templateId === 'biotech_pharma_lead') && (
        <div className="flex flex-col gap-3 font-sans">
          <div className="border-b-2 border-teal-700 pb-2 flex justify-between items-start">
            <div>
              <span className="text-[9px] font-black uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                BIO-ENGINEERING & HARDWARE
              </span>
              <h1 className="text-[23px] font-black tracking-tight text-slate-950 mt-1">{fullName || 'YOUR NAME'}</h1>
              <p className="text-[11px] font-bold text-teal-800 mt-0.5">{candidateRole}</p>
            </div>
            <div className="text-[9.5px] text-slate-600 flex flex-col items-end">
              <span>{email}</span>
              <span>{phone} • {location}</span>
            </div>
          </div>

          {summary && (
            <div className="bg-teal-50/60 border-l-3 border-teal-700 p-2.5 rounded-r text-[9.5px] text-slate-800 leading-relaxed">
              {summary}
            </div>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-[10.5px] font-black uppercase tracking-wider text-teal-950 border-b border-teal-200 pb-0.5">
                RESEARCH & SYSTEMS ENGINEERING
              </h2>
              <div className="flex flex-col gap-2.5">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>{exp.role}</span>
                      <span className="text-slate-500 text-[8.5px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <span className="font-bold text-teal-800">{exp.company}</span>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-1">
            {skillList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-teal-950 border-b border-teal-200 pb-0.5">
                  CORE TECHNICAL EXPERTISE
                </h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-teal-50 text-teal-900 border border-teal-200 rounded text-[8.5px] font-bold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {eduList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-teal-950 border-b border-teal-200 pb-0.5">
                  EDUCATION & CREDENTIALS
                </h3>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[9px] mt-1">
                    <span className="font-bold text-slate-900 block">{edu.institution}</span>
                    <span className="text-slate-600">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          17. CYBERSECURITY & SOC-2 AUDIT (Electric Indigo Security Borders)
         ========================================================================= */}
      {templateId === 'cybersecurity_soc2' && (
        <div className="flex flex-col gap-3 font-sans text-slate-900">
          <div className="border-b-2 border-indigo-700 pb-2 flex justify-between items-start">
            <div>
              <span className="text-[8.5px] font-mono font-bold uppercase tracking-wider text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                🔒 ZERO-TRUST ARCHITECTURE // SOC-2 COMPLIANCE
              </span>
              <h1 className="text-[23px] font-black tracking-tight text-slate-950 mt-1">{fullName || 'YOUR NAME'}</h1>
              <p className="text-[11px] font-bold text-indigo-700 mt-0.5">{candidateRole}</p>
            </div>
            <div className="text-[9.5px] text-slate-600 font-mono flex flex-col items-end">
              <span>{email}</span>
              <span>{phone} • {location}</span>
            </div>
          </div>

          {summary && (
            <div className="bg-slate-50 border-l-3 border-indigo-700 p-2.5 rounded-r text-[9.5px] text-slate-800 leading-relaxed font-mono">
              [SECURITY_PROFILE] {summary}
            </div>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-[10.5px] font-mono font-black uppercase tracking-wider text-indigo-950 border-b border-indigo-200 pb-0.5">
                SECURITY INFRASTRUCTURE & THREAT HUNTING
              </h2>
              <div className="flex flex-col gap-2.5">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between items-baseline font-bold">
                      <span>{exp.role}</span>
                      <span className="text-slate-500 font-mono text-[8.5px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <span className="font-bold text-indigo-700 font-mono text-[9px]">{exp.company}</span>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-1 font-mono">
            {skillList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-indigo-950 border-b border-indigo-200 pb-0.5">
                  SECURITY PROTOCOLS & TOOLING
                </h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-indigo-50 text-indigo-900 border border-indigo-200 rounded text-[8.5px] font-bold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {eduList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-indigo-950 border-b border-indigo-200 pb-0.5">
                  EDUCATION & CERTIFICATIONS
                </h3>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[9px] mt-1">
                    <span className="font-bold text-slate-900 block">{edu.institution}</span>
                    <span className="text-slate-600">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          18. OXFORD ACADEMIC FELLOW (Timeless Scholarly CV Typography)
         ========================================================================= */}
      {(templateId === 'oxford_academic_fellow' || templateId === 'oxford_academic') && (
        <div className="flex flex-col gap-3 font-serif text-slate-950">
          <div className="text-center border-b border-blue-900 pb-2">
            <h1 className="text-[24px] font-normal tracking-wide text-blue-950 uppercase">{fullName || 'YOUR NAME'}</h1>
            <p className="text-[11px] italic text-slate-700 mt-0.5">{candidateRole}</p>
            <div className="text-[9px] font-sans text-slate-600 flex justify-center gap-3 mt-1">
              <span>{email}</span>
              <span>• {phone}</span>
              <span>• {location}</span>
            </div>
          </div>

          {summary && (
            <p className="text-[9.5px] text-slate-800 leading-relaxed text-justify px-2 italic">
              {summary}
            </p>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-[11px] font-bold uppercase tracking-widest text-blue-950 border-b border-blue-200 pb-0.5">
                ACADEMIC & RESEARCH APPOINTMENTS
              </h2>
              <div className="flex flex-col gap-2.5">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between items-baseline font-bold text-blue-950">
                      <span>{exp.role}</span>
                      <span className="text-slate-500 italic text-[9px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <span className="text-slate-800 italic">{exp.company}</span>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3.5 text-slate-800 flex flex-col gap-0.5 mt-0.5 leading-relaxed font-sans text-[9px]">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-1">
            {eduList.length > 0 && (
              <div>
                <h3 className="text-[10.5px] font-bold uppercase tracking-widest text-blue-950 border-b border-blue-200 pb-0.5">
                  DEGREES & FELLOWSHIPS
                </h3>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[9px] mt-1">
                    <span className="font-bold text-blue-950 block">{edu.institution}</span>
                    <span className="text-slate-700">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}

            {skillList.length > 0 && (
              <div>
                <h3 className="text-[10.5px] font-bold uppercase tracking-widest text-blue-950 border-b border-blue-200 pb-0.5">
                  AREAS OF SPECIALIZATION
                </h3>
                <div className="flex flex-wrap gap-1 mt-1 font-sans">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-blue-50 text-blue-950 border border-blue-200 rounded text-[8.5px]">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          19. GROWTH MARKETING / GTM DIRECT (Sky Blue Geometry)
         ========================================================================= */}
      {templateId === 'growth_marketing_dir' && (
        <div className="flex flex-col gap-3 font-sans">
          <div className="border-b-2 border-sky-600 pb-2 flex justify-between items-start">
            <div>
              <span className="text-[9px] font-black uppercase text-sky-800 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                GTM & GROWTH ARCHITECT
              </span>
              <h1 className="text-[23px] font-black tracking-tight text-slate-900 mt-1">{fullName || 'YOUR NAME'}</h1>
              <p className="text-[11px] font-bold text-sky-700 mt-0.5">{candidateRole}</p>
            </div>
            <div className="text-[9.5px] text-slate-600 flex flex-col items-end">
              <span>{email}</span>
              <span>{phone} • {location}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[9px] font-bold">
            <div className="bg-sky-50 border border-sky-200 p-1.5 rounded"><span className="text-sky-800 block text-[11px] font-black">+340% YoY</span> ARR Growth</div>
            <div className="bg-sky-50 border border-sky-200 p-1.5 rounded"><span className="text-sky-800 block text-[11px] font-black">4.2x</span> LTV:CAC Ratio</div>
            <div className="bg-sky-50 border border-sky-200 p-1.5 rounded"><span className="text-sky-800 block text-[11px] font-black">$14M+</span> Pipeline Sourced</div>
          </div>

          {summary && (
            <p className="text-[9.5px] text-slate-800 leading-relaxed border-l-2 border-sky-600 pl-2">
              {summary}
            </p>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-[10.5px] font-black uppercase tracking-wider text-sky-900 border-b border-sky-200 pb-0.5">
                GROWTH TRAJECTORY & CAMPAIGN EXECUTION
              </h2>
              <div className="flex flex-col gap-2.5">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>{exp.role}</span>
                      <span className="text-slate-500 text-[8.5px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <span className="font-bold text-sky-700">{exp.company}</span>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-1">
            {skillList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-sky-900 border-b border-sky-200 pb-0.5">
                  MARKETING STACK & ATTRIBUTION
                </h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-sky-50 text-sky-900 border border-sky-200 rounded text-[8.5px] font-bold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {eduList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-sky-900 border-b border-sky-200 pb-0.5">
                  EDUCATION
                </h3>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[9px] mt-1">
                    <span className="font-bold text-slate-900 block">{edu.institution}</span>
                    <span className="text-slate-600">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          20. DATA SCIENCE & ML LEAD (Copper Amber Borders)
         ========================================================================= */}
      {templateId === 'data_science_ml_lead' && (
        <div className="flex flex-col gap-3 font-sans">
          <div className="border-b-2 border-orange-700 pb-2 flex justify-between items-start">
            <div>
              <span className="text-[9px] font-black uppercase text-orange-900 bg-orange-100 px-2 py-0.5 rounded border border-orange-300">
                STATISTICAL INFERENCE & PREDICTIVE MODELING
              </span>
              <h1 className="text-[23px] font-black tracking-tight text-slate-950 mt-1">{fullName || 'YOUR NAME'}</h1>
              <p className="text-[11px] font-bold text-orange-700 mt-0.5">{candidateRole}</p>
            </div>
            <div className="text-[9.5px] text-slate-600 flex flex-col items-end">
              <span>{email}</span>
              <span>{phone} • {location}</span>
            </div>
          </div>

          {summary && (
            <div className="bg-orange-50/70 border-l-3 border-orange-700 p-2.5 rounded-r text-[9.5px] text-slate-800 leading-relaxed">
              {summary}
            </div>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-[10.5px] font-black uppercase tracking-wider text-orange-950 border-b border-orange-300 pb-0.5">
                MODEL DEPLOYMENT & ALGORITHMIC RESEARCH
              </h2>
              <div className="flex flex-col gap-2.5">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>{exp.role}</span>
                      <span className="text-slate-500 text-[8.5px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <span className="font-bold text-orange-800">{exp.company}</span>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-1">
            {skillList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-orange-950 border-b border-orange-300 pb-0.5">
                  DATA SCIENCE TOOLKIT
                </h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-orange-50 text-orange-950 border border-orange-200 rounded text-[8.5px] font-bold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {eduList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-orange-950 border-b border-orange-300 pb-0.5">
                  EDUCATION
                </h3>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[9px] mt-1">
                    <span className="font-bold text-slate-900 block">{edu.institution}</span>
                    <span className="text-slate-600">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          21. STRATEGIC SOURCING / GLOBAL OPS CONSOLE
         ========================================================================= */}
      {(templateId === 'strategic_sourcing_ops' || templateId === 'global_director_ops' || templateId === 'enterprise_bizdev' || templateId === 'staff_ml_systems' || templateId === 'saas_operator' || templateId === 'mckinsey_consulting') && (
        <div className="flex flex-col gap-3 font-sans text-slate-900">
          <div className="border-b-2 border-slate-900 pb-2 flex justify-between items-start">
            <div>
              <span className="text-[8.5px] font-black uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
                GLOBAL OPERATIONS & ENTERPRISE STRATEGY
              </span>
              <h1 className="text-[23px] font-black tracking-tight text-slate-950 mt-1">{fullName || 'YOUR NAME'}</h1>
              <p className="text-[11px] font-bold text-slate-700 mt-0.5">{candidateRole}</p>
            </div>
            <div className="text-[9.5px] text-slate-600 flex flex-col items-end">
              <span>{email}</span>
              <span>{phone} • {location}</span>
            </div>
          </div>

          {summary && (
            <div className="bg-slate-50 border-l-3 border-slate-800 p-2.5 rounded-r text-[9.5px] text-slate-800 leading-relaxed">
              {summary}
            </div>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-[10.5px] font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-0.5">
                OPERATIONAL LEADERSHIP & GLOBAL IMPACT
              </h2>
              <div className="flex flex-col gap-2.5">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between items-baseline font-bold">
                      <span>{exp.role}</span>
                      <span className="text-slate-500 text-[8.5px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <span className="font-bold text-slate-700">{exp.company}</span>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-1">
            {skillList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-0.5">
                  CORE DISCIPLINES
                </h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-slate-100 text-slate-900 border border-slate-300 rounded text-[8.5px] font-semibold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {eduList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-0.5">
                  EDUCATION & CREDENTIALS
                </h3>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[9px] mt-1">
                    <span className="font-bold text-slate-900 block">{edu.institution}</span>
                    <span className="text-slate-600">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          22. CLASSIC ATS 2-COLUMN (Item 28 in Gallery)
         ========================================================================= */}
      {templateId === 'classic_ats' && (
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <h1 className="text-[24px] font-black uppercase text-[#0B132B] tracking-tight leading-none">
              {fullName || 'YOUR NAME'}
            </h1>
            <p className="text-[11px] font-semibold text-[#334155] mt-1 leading-snug">{candidateRole}</p>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[10px] text-[#475569] mt-2 border-b-[1.5px] border-[#0B132B] pb-2">
              {email && <span>{email}</span>}
              {phone && <span>• {phone}</span>}
              {location && <span>• {location}</span>}
              {linkedin && <span>• {linkedin}</span>}
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-7 flex flex-col gap-3">
              {summary && (
                <div className="flex flex-col gap-1">
                  <h2 className="text-[11px] font-black uppercase text-[#0B132B] border-b-[1.5px] border-[#0B132B] pb-0.5 tracking-wider">
                    EXECUTIVE SUMMARY
                  </h2>
                  <p className="text-[9.5px] text-[#334155] leading-relaxed mt-0.5">{summary}</p>
                </div>
              )}

              {expList.length > 0 && (
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-[11px] font-black uppercase text-[#0B132B] border-b-[1.5px] border-[#0B132B] pb-0.5 tracking-wider">
                    EXPERIENCE
                  </h2>
                  <div className="flex flex-col gap-2.5 mt-0.5">
                    {expList.map((exp) => (
                      <div key={exp.id} className="flex flex-col">
                        <div className="flex justify-between items-baseline text-[10.5px]">
                          <span className="font-extrabold text-[#0B132B] leading-tight">{exp.role}</span>
                          <span className="text-[9px] font-medium text-[#64748B] shrink-0">{exp.startDate} – {exp.endDate}</span>
                        </div>
                        <span className="text-[10px] font-bold text-[#1E293B]">{exp.company}</span>
                        {exp.bullets && (
                          <ul className="list-disc list-outside ml-3.5 text-[9.5px] text-[#1E293B] flex flex-col gap-0.5 mt-0.5 leading-snug">
                            {exp.bullets.map((b, idx) => (
                              <li key={idx}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="col-span-5 flex flex-col gap-3">
              {eduList.length > 0 && (
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-[11px] font-black uppercase text-[#0B132B] border-b-[1.5px] border-[#0B132B] pb-0.5 tracking-wider">
                    EDUCATION
                  </h2>
                  <div className="flex flex-col gap-2 mt-0.5">
                    {eduList.map((edu) => (
                      <div key={edu.id} className="flex flex-col text-[10px]">
                        <span className="font-extrabold text-[#0B132B] leading-tight">{edu.institution}</span>
                        <span className="text-[#334155] leading-snug">{edu.degree}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {skillList.length > 0 && (
                <div className="flex flex-col gap-1.5 mt-1">
                  <h2 className="text-[11px] font-black uppercase text-[#0B132B] border-b-[1.5px] border-[#0B132B] pb-0.5 tracking-wider">
                    SKILLS & TECH STACK
                  </h2>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {skillList.map((sk, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-800 text-[9px] font-medium">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {certList.length > 0 && (
                <div className="flex flex-col gap-1 mt-1">
                  <h2 className="text-[11px] font-black uppercase text-[#0B132B] border-b-[1.5px] border-[#0B132B] pb-0.5 tracking-wider">
                    VERIFIED ACHIEVEMENTS
                  </h2>
                  {certList.slice(0, 3).map((c, idx) => (
                    <div key={idx} className="text-[8.5px] text-[#334155] leading-snug">
                      • {c}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          23. MODERN EXECUTIVE (Item 29 in Gallery - Royal Blue Accent Border)
         ========================================================================= */}
      {templateId === 'modern_executive' && (
        <div className="flex flex-col gap-4 border-l-4 border-blue-600 pl-6">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">{fullName || 'YOUR NAME'}</h1>
            <p className="text-xs text-blue-600 font-bold mt-0.5">{candidateRole}</p>
            <div className="text-xs text-slate-600 font-semibold flex flex-wrap gap-2 mt-1">
              {email && <span>{email}</span>}
              {phone && <span>• {phone}</span>}
              {location && <span>• {location}</span>}
            </div>
          </div>
          {summary && (
            <div className="bg-blue-50/50 border-l-2 border-blue-600 p-3 rounded-r">
              <p className="text-xs text-slate-800 leading-relaxed italic">{summary}</p>
            </div>
          )}
          {expList.length > 0 && (
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-black text-blue-600 uppercase tracking-wider border-b border-slate-200 pb-1">
                Work Experience
              </h3>
              {expList.map((exp) => (
                <div key={exp.id} className="flex flex-col gap-0.5">
                  <div className="flex justify-between font-bold text-gray-900 text-xs">
                    <span>{exp.role} @ {exp.company}</span>
                    <span className="text-gray-500 text-[11px]">{exp.startDate} – {exp.endDate}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-gray-700">
                    {exp.bullets?.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          24. NAVY SIDEBAR (Item 30 in Gallery - Left 4-Col Navy Banner)
         ========================================================================= */}
      {(templateId === 'navy_sidebar' || templateId === 'right_sidebar') && (
        <div className="grid grid-cols-12 gap-6 h-full min-h-[900px] -mx-[14mm] -my-[12mm]">
          <div className="col-span-4 bg-[#0B1E36] text-white p-6 flex flex-col gap-5 text-xs">
            <div>
              <h1 className="text-xl font-black text-white leading-tight">{fullName || 'YOUR NAME'}</h1>
              <span className="text-sky-300 font-medium text-[10.5px] block mt-1">{candidateRole}</span>
              <span className="text-sky-300 font-medium text-[10.5px]">{location}</span>
            </div>
            <div className="flex flex-col gap-1.5 border-t border-sky-900 pt-3">
              <span className="font-bold uppercase text-[10px] text-sky-400">Contact</span>
              <span className="text-gray-300 break-all">{email}</span>
              <span className="text-gray-300">{phone}</span>
            </div>
            {eduList.length > 0 && (
              <div className="flex flex-col gap-2 border-t border-sky-900 pt-3">
                <span className="font-bold uppercase text-[10px] text-sky-400">Education</span>
                {eduList.map((edu) => (
                  <div key={edu.id} className="flex flex-col text-[10.5px]">
                    <span className="font-bold text-white">{edu.institution}</span>
                    <span className="text-gray-300">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
            {skillList.length > 0 && (
              <div className="flex flex-col gap-2 border-t border-sky-900 pt-3">
                <span className="font-bold uppercase text-[10px] text-sky-400">Skills</span>
                <div className="flex flex-wrap gap-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-sky-950 text-sky-200 border border-sky-800 rounded text-[9px]">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="col-span-8 p-6 pl-2 flex flex-col gap-4 text-xs">
            {summary && (
              <div>
                <h3 className="font-black text-[#0B1E36] uppercase text-[11px] border-b border-gray-200 pb-0.5">
                  Summary
                </h3>
                <p className="text-gray-800 leading-relaxed mt-1">{summary}</p>
              </div>
            )}
            {expList.length > 0 && (
              <div className="flex flex-col gap-3">
                <h3 className="font-black text-[#0B1E36] uppercase text-[11px] border-b border-gray-200 pb-0.5">
                  Experience
                </h3>
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5">
                    <div className="flex justify-between font-bold text-gray-900">
                      <span>{exp.role} — <span className="text-[#0B1E36]">{exp.company}</span></span>
                      <span className="text-gray-500 font-normal text-[10.5px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-700">
                      {exp.bullets?.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          25. NAVY HEADER (Item 31 in Gallery - Full Top Navy Banner)
         ========================================================================= */}
      {templateId === 'navy_header' && (
        <div className="flex flex-col gap-4 -mx-[14mm] -mt-[12mm]">
          <div className="bg-[#0B1E36] text-white p-6 pb-4">
            <h1 className="text-2xl font-black tracking-tight">{fullName || 'YOUR NAME'}</h1>
            <p className="text-xs text-sky-300 font-semibold mt-1">{candidateRole}</p>
            <div className="text-[10px] text-gray-300 flex flex-wrap gap-3 mt-2">
              {email && <span>{email}</span>}
              {phone && <span>• {phone}</span>}
              {location && <span>• {location}</span>}
              {linkedin && <span>• {linkedin}</span>}
            </div>
          </div>

          <div className="p-8 pt-2 flex flex-col gap-4 text-xs text-[#1E293B]">
            {summary && (
              <div>
                <h3 className="font-black text-[#0B1E36] uppercase text-[11px] border-b-2 border-sky-900 pb-0.5">
                  Executive Summary
                </h3>
                <p className="leading-relaxed mt-1 text-gray-800">{summary}</p>
              </div>
            )}

            <div className="grid grid-cols-12 gap-6 mt-1">
              <div className="col-span-8 flex flex-col gap-3">
                {expList.length > 0 && (
                  <div>
                    <h3 className="font-black text-[#0B1E36] uppercase text-[11px] border-b-2 border-sky-900 pb-0.5">
                      Professional Experience
                    </h3>
                    <div className="flex flex-col gap-3 mt-2">
                      {expList.map((exp) => (
                        <div key={exp.id} className="flex flex-col gap-0.5">
                          <div className="flex justify-between font-bold text-gray-900 text-[11.5px]">
                            <span>{exp.role} @ <span className="text-[#0B1E36]">{exp.company}</span></span>
                            <span className="text-gray-500 font-normal text-[10px]">{exp.startDate} – {exp.endDate}</span>
                          </div>
                          <ul className="list-disc list-inside text-gray-700 text-[10.5px]">
                            {exp.bullets?.map((b, idx) => (
                              <li key={idx}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="col-span-4 flex flex-col gap-4">
                {eduList.length > 0 && (
                  <div>
                    <h3 className="font-black text-[#0B1E36] uppercase text-[11px] border-b-2 border-sky-900 pb-0.5">
                      Education
                    </h3>
                    <div className="flex flex-col gap-2 mt-2">
                      {eduList.map((edu) => (
                        <div key={edu.id} className="flex flex-col text-[10.5px]">
                          <span className="font-bold text-gray-900">{edu.institution}</span>
                          <span className="text-gray-700">{edu.degree}</span>
                          <span className="text-gray-500 text-[9.5px]">{edu.startDate} – {edu.endDate}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {skillList.length > 0 && (
                  <div>
                    <h3 className="font-black text-[#0B1E36] uppercase text-[11px] border-b-2 border-sky-900 pb-0.5">
                      Technical Skills
                    </h3>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {skillList.map((sk, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-sky-50 text-sky-950 font-medium rounded text-[10px] border border-sky-200">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          26. FLOWCV ATLANTIC BLUE (Multi-Column Left Navy Sidebar)
         ========================================================================= */}
      {templateId === 'flowcv_atlantic_blue' && (
        <div className="grid grid-cols-12 gap-6 h-full min-h-[900px] -mx-[14mm] -my-[12mm]">
          <div className="col-span-4 bg-[#0B2545] text-white p-6 flex flex-col gap-5 text-xs">
            <div>
              <h1 className="text-xl font-black text-white leading-tight">{fullName || 'YOUR NAME'}</h1>
              <span className="text-sky-300 font-medium text-[10.5px] block mt-1">{candidateRole}</span>
              <span className="text-sky-300 font-medium text-[10.5px]">{location}</span>
            </div>
            <div className="flex flex-col gap-1.5 border-t border-sky-900 pt-3">
              <span className="font-bold uppercase text-[10px] text-sky-400">Contact</span>
              <span className="text-gray-300 break-all">{email}</span>
              <span className="text-gray-300">{phone}</span>
            </div>
            {eduList.length > 0 && (
              <div className="flex flex-col gap-2 border-t border-sky-900 pt-3">
                <span className="font-bold uppercase text-[10px] text-sky-400">Education</span>
                {eduList.map((edu) => (
                  <div key={edu.id} className="flex flex-col text-[10.5px]">
                    <span className="font-bold text-white">{edu.institution}</span>
                    <span className="text-gray-300">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
            {skillList.length > 0 && (
              <div className="flex flex-col gap-2 border-t border-sky-900 pt-3">
                <span className="font-bold uppercase text-[10px] text-sky-400">Skills</span>
                <div className="flex flex-wrap gap-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-[#133C55] text-sky-200 border border-sky-700/60 rounded text-[9px] font-semibold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="col-span-8 p-6 pl-2 flex flex-col gap-4 text-xs">
            {summary && (
              <div>
                <h3 className="font-black text-[#0B2545] uppercase text-[11px] border-b border-gray-200 pb-0.5">
                  Summary
                </h3>
                <p className="text-gray-800 leading-relaxed mt-1">{summary}</p>
              </div>
            )}
            {expList.length > 0 && (
              <div className="flex flex-col gap-3">
                <h3 className="font-black text-[#0B2545] uppercase text-[11px] border-b border-gray-200 pb-0.5">
                  Experience
                </h3>
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5">
                    <div className="flex justify-between font-bold text-gray-900">
                      <span>{exp.role} — <span className="text-[#0B2545]">{exp.company}</span></span>
                      <span className="text-gray-500 font-normal text-[10.5px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-700">
                      {exp.bullets?.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          27. FLOWCV MERCURY FLOW (Fluid 1-Column Minimalist)
         ========================================================================= */}
      {templateId === 'flowcv_mercury_flow' && (
        <div className="flex flex-col gap-3.5 font-sans">
          <div className="border-b border-slate-900 pb-2">
            <h1 className="text-[25px] font-black tracking-tight text-slate-950 uppercase">{fullName || 'YOUR NAME'}</h1>
            <p className="text-[11.5px] font-bold text-slate-700 mt-0.5">{candidateRole}</p>
            <div className="text-[9.5px] text-slate-500 flex flex-wrap gap-2.5 mt-1 font-medium">
              {email && <span>{email}</span>}
              {phone && <span>• {phone}</span>}
              {location && <span>• {location}</span>}
              {linkedin && <span>• {linkedin}</span>}
            </div>
          </div>

          {summary && (
            <p className="text-[9.5px] text-slate-800 leading-relaxed italic border-l-2 border-slate-900 pl-2">
              {summary}
            </p>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-[11px] font-black uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-0.5">
                Work Experience
              </h2>
              <div className="flex flex-col gap-2.5">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between items-baseline font-bold text-slate-950">
                      <span>{exp.role} @ {exp.company}</span>
                      <span className="text-slate-500 text-[8.5px] font-normal">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-1">
            {skillList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-0.5">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-slate-100 text-slate-900 rounded-md text-[8.5px] font-semibold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {eduList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-0.5">
                  Education
                </h3>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[9px] mt-1">
                    <span className="font-bold text-slate-950 block">{edu.institution}</span>
                    <span className="text-slate-600">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          28. FLOWCV LEAVES (Dark Forest Green Accent Border)
         ========================================================================= */}
      {templateId === 'flowcv_leaves' && (
        <div className="flex flex-col gap-3.5 font-sans border-l-4 border-[#1B4332] pl-5">
          <div>
            <h1 className="text-[24px] font-black tracking-tight text-[#1B4332] uppercase">{fullName || 'YOUR NAME'}</h1>
            <p className="text-[11.5px] font-bold text-[#2D6A4F] mt-0.5">{candidateRole}</p>
            <div className="text-[9.5px] text-slate-600 flex flex-wrap gap-2.5 mt-1">
              {email && <span>{email}</span>}
              {phone && <span>• {phone}</span>}
              {location && <span>• {location}</span>}
            </div>
          </div>

          {summary && (
            <div className="bg-[#D8F3DC]/40 border-l-2 border-[#2D6A4F] p-2.5 rounded-r text-[9.5px] text-slate-800 leading-relaxed">
              {summary}
            </div>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-[11px] font-black uppercase tracking-wider text-[#1B4332] border-b border-[#D8F3DC] pb-0.5">
                Professional Experience
              </h2>
              <div className="flex flex-col gap-2.5">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between items-baseline font-bold text-slate-950">
                      <span>{exp.role} @ <span className="text-[#2D6A4F]">{exp.company}</span></span>
                      <span className="text-slate-500 text-[8.5px] font-normal">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-1">
            {skillList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-[#1B4332] border-b border-[#D8F3DC] pb-0.5">
                  Core Skills
                </h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-[#D8F3DC]/60 text-[#1B4332] rounded text-[8.5px] font-bold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {eduList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-wider text-[#1B4332] border-b border-[#D8F3DC] pb-0.5">
                  Education
                </h3>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[9px] mt-1">
                    <span className="font-bold text-slate-950 block">{edu.institution}</span>
                    <span className="text-slate-600">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          29. TEALHQ MODERN (Signature Teal #0D9488 Layout)
         ========================================================================= */}
      {(templateId === 'teal_modern' || templateId === 'teal_clean_ats') && (
        <div className="flex flex-col gap-3.5 font-sans">
          <div className="border-b-2 border-[#0D9488] pb-2.5 flex justify-between items-start">
            <div>
              <span className="text-[9px] font-black uppercase text-[#0D9488] bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                TEALHQ ATS VERIFIED
              </span>
              <h1 className="text-[23px] font-black uppercase text-slate-900 tracking-tight leading-none mt-1">
                {fullName || 'YOUR NAME'}
              </h1>
              <p className="text-[11.5px] font-bold text-[#0D9488] mt-0.5">{candidateRole}</p>
            </div>
            <div className="text-[9.5px] text-slate-600 flex flex-col items-end gap-0.5">
              {email && <span>{email}</span>}
              {phone && <span>{phone} • {location}</span>}
              {linkedin && <span className="text-[#0D9488]">{linkedin}</span>}
            </div>
          </div>

          {summary && (
            <div className="bg-teal-50/60 border-l-3 border-[#0D9488] p-2.5 rounded-r">
              <p className="text-[9.5px] text-slate-800 leading-relaxed">{summary}</p>
            </div>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-[10.5px] font-black uppercase text-[#0D9488] tracking-wider border-b border-teal-100 pb-0.5">
                Work Experience
              </h2>
              <div className="flex flex-col gap-2.5">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>{exp.role} @ <span className="text-[#0D9488]">{exp.company}</span></span>
                      <span className="text-slate-500 text-[8.5px] font-normal">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-1">
            {skillList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase text-[#0D9488] tracking-wider border-b border-teal-100 pb-0.5">
                  Key Skills & Competencies
                </h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-teal-50 text-teal-900 border border-teal-200 rounded text-[8.5px] font-bold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {eduList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black uppercase text-[#0D9488] tracking-wider border-b border-teal-100 pb-0.5">
                  Education
                </h3>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[9px] mt-1">
                    <span className="font-bold text-slate-900 block">{edu.institution}</span>
                    <span className="text-slate-600">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          30. FLOWCV STEADY FORM (Balanced 60/40 Split)
         ========================================================================= */}
      {templateId === 'flowcv_steady_form' && (
        <div className="flex flex-col gap-4 font-sans text-slate-800">
          <div className="border-b-2 border-slate-800 pb-3 flex justify-between items-end">
            <div>
              <h1 className="text-[24px] font-black uppercase text-slate-950 tracking-tight leading-none">
                {fullName || 'YOUR NAME'}
              </h1>
              <p className="text-[12px] font-semibold text-slate-700 mt-1">{candidateRole}</p>
            </div>
            <div className="text-[9.5px] text-slate-600 flex flex-col items-end gap-0.5">
              {email && <span>{email}</span>}
              {phone && <span>{phone} • {location}</span>}
              {linkedin && <span className="text-slate-800 font-medium">{linkedin}</span>}
            </div>
          </div>

          {summary && (
            <p className="text-[9.5px] text-slate-700 leading-relaxed border-b border-slate-200 pb-2.5">
              {summary}
            </p>
          )}

          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-8 flex flex-col gap-3">
              {expList.length > 0 && (
                <div className="flex flex-col gap-2">
                  <h2 className="text-[10px] font-black uppercase text-slate-950 tracking-wider border-b border-slate-300 pb-0.5">
                    Experience
                  </h2>
                  <div className="flex flex-col gap-2.5">
                    {expList.map((exp) => (
                      <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                        <div className="flex justify-between font-bold text-slate-900">
                          <span>{exp.role} — <span className="text-slate-700">{exp.company}</span></span>
                          <span className="text-slate-500 font-normal text-[8.5px]">{exp.startDate} – {exp.endDate}</span>
                        </div>
                        {exp.bullets && (
                          <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                            {exp.bullets.map((b, idx) => (
                              <li key={idx}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="col-span-4 flex flex-col gap-3.5 border-l border-slate-200 pl-4">
              {skillList.length > 0 && (
                <div>
                  <h3 className="text-[10px] font-black uppercase text-slate-950 tracking-wider border-b border-slate-300 pb-0.5">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {skillList.map((sk, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 bg-slate-100 text-slate-800 rounded text-[8.5px] font-semibold border border-slate-200">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {eduList.length > 0 && (
                <div>
                  <h3 className="text-[10px] font-black uppercase text-slate-950 tracking-wider border-b border-slate-300 pb-0.5">
                    Education
                  </h3>
                  {eduList.map((edu) => (
                    <div key={edu.id} className="text-[9px] mt-1.5">
                      <span className="font-bold text-slate-900 block">{edu.institution}</span>
                      <span className="text-slate-600">{edu.degree}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          31. FLOWCV CLASSIC SERIF (Formal Publication & Legal Standard)
         ========================================================================= */}
      {templateId === 'flowcv_classic_serif' && (
        <div className="flex flex-col gap-3.5 font-serif text-slate-900">
          <div className="text-center border-b border-t border-slate-900 py-2.5">
            <h1 className="text-[25px] font-bold tracking-wider text-slate-950 uppercase">{fullName || 'YOUR NAME'}</h1>
            <p className="text-[11px] italic text-slate-700 mt-0.5">{candidateRole}</p>
            <div className="text-[9px] text-slate-600 flex justify-center flex-wrap gap-3 mt-1 font-sans">
              {email && <span>{email}</span>}
              {phone && <span>• {phone}</span>}
              {location && <span>• {location}</span>}
              {linkedin && <span>• {linkedin}</span>}
            </div>
          </div>

          {summary && (
            <p className="text-[9.5px] text-slate-800 leading-relaxed text-center italic px-4">
              "{summary}"
            </p>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-[10.5px] font-bold uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-0.5 text-center">
                Professional Experience
              </h2>
              <div className="flex flex-col gap-2.5 font-sans">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span><span className="font-serif italic font-semibold">{exp.role}</span>, {exp.company}</span>
                      <span className="text-slate-500 text-[8.5px] font-normal">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-5 pt-1">
            {eduList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-0.5">
                  Education & Honors
                </h3>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[9px] mt-1 font-sans">
                    <span className="font-bold text-slate-900 block font-serif">{edu.institution}</span>
                    <span className="text-slate-600">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}

            {skillList.length > 0 && (
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-0.5">
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-1 mt-1 font-sans">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-slate-50 border border-slate-300 text-slate-800 rounded text-[8.5px]">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          32. FLOWCV EDITORIAL RULE (Clean Horizontal Dividers)
         ========================================================================= */}
      {templateId === 'flowcv_editorial_rule' && (
        <div className="flex flex-col gap-3 font-sans text-slate-900">
          <div className="flex justify-between items-baseline border-b-2 border-slate-900 pb-2">
            <div>
              <h1 className="text-[22px] font-black uppercase tracking-tight text-slate-900">{fullName || 'YOUR NAME'}</h1>
              <p className="text-[11px] font-bold text-slate-600 uppercase tracking-widest mt-0.5">{candidateRole}</p>
            </div>
            <div className="text-[9px] text-slate-500 text-right flex flex-col gap-0.5">
              <span>{email} • {phone}</span>
              <span>{location}</span>
            </div>
          </div>

          {summary && (
            <div className="border-b border-slate-200 pb-2">
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-0.5">Profile</span>
              <p className="text-[9.5px] text-slate-700 leading-relaxed">{summary}</p>
            </div>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-2 border-b border-slate-200 pb-2">
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block">Experience</span>
              <div className="flex flex-col gap-2">
                {expList.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>{exp.role} <span className="font-normal text-slate-500">at</span> {exp.company}</span>
                      <span className="text-slate-400 text-[8.5px] font-normal">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3 text-slate-700 flex flex-col gap-0.5 text-[9px] leading-relaxed">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            {skillList.length > 0 && (
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1">Skills</span>
                <p className="text-[9px] text-slate-700 leading-relaxed">{skillList.join(' • ')}</p>
              </div>
            )}
            {eduList.length > 0 && (
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1">Education</span>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[9px] leading-tight mb-1">
                    <span className="font-bold text-slate-900">{edu.institution}</span> — <span className="text-slate-600">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          33. FLOWCV PRECISION LINE (High-Density Engineering)
         ========================================================================= */}
      {templateId === 'flowcv_precision_line' && (
        <div className="flex flex-col gap-2.5 font-sans text-slate-900">
          <div className="bg-slate-900 text-white p-3 rounded-lg flex justify-between items-center -mx-2 -mt-2">
            <div>
              <h1 className="text-[20px] font-mono font-bold tracking-tight text-white leading-none">{fullName || 'YOUR NAME'}</h1>
              <p className="text-[10.5px] font-mono text-teal-400 mt-1">{candidateRole}</p>
            </div>
            <div className="text-[8.5px] font-mono text-slate-300 text-right flex flex-col gap-0.5">
              <span>{email}</span>
              <span>{phone} • {location}</span>
            </div>
          </div>

          {summary && (
            <p className="text-[9px] text-slate-700 leading-tight bg-slate-50 p-2 rounded border border-slate-200">
              {summary}
            </p>
          )}

          {expList.length > 0 && (
            <div className="flex flex-col gap-1.5">
              <span className="text-[9.5px] font-mono font-bold uppercase text-slate-900 border-b border-slate-900 pb-0.5 flex items-center gap-1">
                <span className="w-2 h-2 bg-slate-900 inline-block" /> WORK EXPERIENCE
              </span>
              <div className="flex flex-col gap-2">
                {expList.map((exp) => (
                  <div key={exp.id} className="text-[9px]">
                    <div className="flex justify-between font-bold text-slate-900 font-mono">
                      <span>{exp.role} // <span className="text-teal-700">{exp.company}</span></span>
                      <span className="text-slate-500 font-normal text-[8px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    {exp.bullets && (
                      <ul className="list-disc list-outside ml-3 text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-tight">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 pt-1">
            {skillList.length > 0 && (
              <div>
                <span className="text-[9px] font-mono font-bold uppercase text-slate-900 border-b border-slate-300 pb-0.5 block">
                  TECHNICAL ARSENAL
                </span>
                <div className="flex flex-wrap gap-1 mt-1 font-mono">
                  {skillList.map((sk, idx) => (
                    <span key={idx} className="px-1 py-0.5 bg-slate-100 text-slate-800 border border-slate-300 rounded text-[8px]">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {eduList.length > 0 && (
              <div>
                <span className="text-[9px] font-mono font-bold uppercase text-slate-900 border-b border-slate-300 pb-0.5 block">
                  ACADEMICS
                </span>
                {eduList.map((edu) => (
                  <div key={edu.id} className="text-[8.5px] font-mono mt-1">
                    <span className="font-bold text-slate-900 block">{edu.institution}</span>
                    <span className="text-slate-600">{edu.degree}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          34. FLOWCV SILVER BANNER (Sleek Slate Corporate Header)
         ========================================================================= */}
      {templateId === 'flowcv_silver_banner' && (
        <div className="flex flex-col gap-3 font-sans text-slate-900 -mx-[14mm] -my-[12mm]">
          <div className="bg-[#334155] text-white p-6 pb-5">
            <h1 className="text-[23px] font-black tracking-tight uppercase leading-none">{fullName || 'YOUR NAME'}</h1>
            <p className="text-[12px] font-bold text-slate-200 mt-1">{candidateRole}</p>
            <div className="text-[9.5px] text-slate-300 flex flex-wrap gap-3 mt-2 font-medium">
              {email && <span>{email}</span>}
              {phone && <span>• {phone}</span>}
              {location && <span>• {location}</span>}
              {linkedin && <span>• {linkedin}</span>}
            </div>
          </div>

          <div className="p-6 pt-2 flex flex-col gap-3">
            {summary && (
              <p className="text-[9.5px] text-slate-700 leading-relaxed border-b border-slate-200 pb-2">
                {summary}
              </p>
            )}

            {expList.length > 0 && (
              <div className="flex flex-col gap-2">
                <h2 className="text-[10.5px] font-black uppercase text-[#334155] tracking-wider border-b border-slate-200 pb-0.5">
                  Experience
                </h2>
                <div className="flex flex-col gap-2.5">
                  {expList.map((exp) => (
                    <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>{exp.role} — <span className="text-[#334155]">{exp.company}</span></span>
                        <span className="text-slate-500 font-normal text-[8.5px]">{exp.startDate} – {exp.endDate}</span>
                      </div>
                      {exp.bullets && (
                        <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                          {exp.bullets.map((b, idx) => (
                            <li key={idx}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 pt-1">
              {skillList.length > 0 && (
                <div>
                  <h3 className="text-[10px] font-black uppercase text-[#334155] tracking-wider border-b border-slate-200 pb-0.5">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {skillList.map((sk, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 bg-slate-100 text-slate-800 rounded text-[8.5px] font-bold">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {eduList.length > 0 && (
                <div>
                  <h3 className="text-[10px] font-black uppercase text-[#334155] tracking-wider border-b border-slate-200 pb-0.5">
                    Education
                  </h3>
                  {eduList.map((edu) => (
                    <div key={edu.id} className="text-[9px] mt-1">
                      <span className="font-bold text-slate-900 block">{edu.institution}</span>
                      <span className="text-slate-600">{edu.degree}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          35. TEALHQ EXECUTIVE LEADERSHIP (Dark Teal #115E59)
         ========================================================================= */}
      {templateId === 'teal_executive' && (
        <div className="flex flex-col gap-3 font-sans text-slate-900 -mx-[14mm] -my-[12mm]">
          <div className="bg-[#115E59] text-white p-6 pb-5">
            <span className="text-[9px] font-black tracking-widest uppercase text-teal-200 bg-teal-800/80 px-2 py-0.5 rounded-full inline-block mb-1">
              TEALHQ EXECUTIVE C-SUITE
            </span>
            <h1 className="text-[23px] font-black tracking-tight uppercase leading-none text-white">{fullName || 'YOUR NAME'}</h1>
            <p className="text-[12px] font-bold text-teal-100 mt-1">{candidateRole}</p>
            <div className="text-[9.5px] text-teal-200 flex flex-wrap gap-3 mt-2 font-medium">
              {email && <span>{email}</span>}
              {phone && <span>• {phone}</span>}
              {location && <span>• {location}</span>}
              {linkedin && <span>• {linkedin}</span>}
            </div>
          </div>

          <div className="p-6 pt-2 flex flex-col gap-3">
            {summary && (
              <div className="bg-teal-50/70 border-l-4 border-[#115E59] p-2.5 rounded-r">
                <p className="text-[9.5px] text-slate-800 leading-relaxed font-medium">{summary}</p>
              </div>
            )}

            {expList.length > 0 && (
              <div className="flex flex-col gap-2">
                <h2 className="text-[10.5px] font-black uppercase text-[#115E59] tracking-wider border-b-2 border-teal-200 pb-0.5">
                  Executive Leadership & Career History
                </h2>
                <div className="flex flex-col gap-2.5">
                  {expList.map((exp) => (
                    <div key={exp.id} className="flex flex-col gap-0.5 text-[9.5px]">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>{exp.role} — <span className="text-[#115E59]">{exp.company}</span></span>
                        <span className="text-slate-500 font-normal text-[8.5px]">{exp.startDate} – {exp.endDate}</span>
                      </div>
                      {exp.bullets && (
                        <ul className="list-disc list-outside ml-3.5 text-slate-700 flex flex-col gap-0.5 mt-0.5 leading-relaxed">
                          {exp.bullets.map((b, idx) => (
                            <li key={idx}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 pt-1">
              {skillList.length > 0 && (
                <div>
                  <h3 className="text-[10px] font-black uppercase text-[#115E59] tracking-wider border-b border-teal-200 pb-0.5">
                    Core Competencies
                  </h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {skillList.map((sk, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 bg-teal-50 text-teal-900 border border-teal-200 rounded text-[8.5px] font-bold">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {eduList.length > 0 && (
                <div>
                  <h3 className="text-[10px] font-black uppercase text-[#115E59] tracking-wider border-b border-teal-200 pb-0.5">
                    Education & Credentials
                  </h3>
                  {eduList.map((edu) => (
                    <div key={edu.id} className="text-[9px] mt-1">
                      <span className="font-bold text-slate-900 block">{edu.institution}</span>
                      <span className="text-slate-600">{edu.degree}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
