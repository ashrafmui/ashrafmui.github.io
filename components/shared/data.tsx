import type { Experience, Project, SkillGroup, EducationItem } from "./theme";
import { COLORS } from "./theme";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const CONTACT = {
  email: "ashrafmuhaiminul253@gmail.com",
  phone: "(347) 912-3983",
  linkedin: "https://www.linkedin.com/in/muhaiminul-a-58b893125/",
  linkedinLabel: "muhaiminul-a",
  github: "https://github.com/ashrafmui",
  githubLabel: "ashrafmui",
  location: "New York, NY",
} as const;

export const BOOT_LINES = [
  { text: "[  0.000] kernel: initializing m.ashraf // portfolio ...", delay: 0 },
  { text: "[  0.041] probe: full-stack web runtime ........ OK", delay: 400 },
  { text: "[  0.083] probe: ai / llm orchestration ........ OK", delay: 700 },
  { text: "[  0.124] probe: embedded + iot layer .......... OK", delay: 1000 },
  { text: "[  0.166] link:  PostgreSQL / Supabase ......... OK", delay: 1300 },
  { text: "[  0.207] link:  Anthropic API stream ......... OK", delay: 1600 },
  { text: "[  0.249] sys:   3 co-ops · 3 shipped projects", delay: 1900 },
  { text: "[  0.290] sys:   status — open to 2026 new-grad roles", delay: 2200 },
  { text: "[  0.332] sys:   welcome. scroll to begin._", delay: 2600 },
];

export const ABOUT_TEXT = [
  "I'm a Computer Engineering graduate from Northeastern University and a full-stack engineer with hardware knowledge. I build AI-integrated web applications, backend pipelines, and the systems underneath them — comfortable moving from a React component down to the Linux board it eventually talks to.",
  "My co-op experience spans three very different problem spaces: rebuilding a B2B e-commerce platform at Grovara, writing R&D software tooling and signal-processing pipelines for RF antenna testing at Kostas Research Institute, and automating medical-device verification for the Omnipod insulin system at Insulet — work that contributed to CE marking and $7M+ in grant renewals.",
  "I think the most interesting engineering happens in the seams between disciplines. Whether I'm decoding novel waveform data off a spectrum analyzer or shaving page loads from 3 seconds to instant across a thousand routes, the problem-solving muscle is the same — just applied at a different layer of the stack.",
];

export const SKILLS: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C", "C++", "SQL", "Bash"],
    accent: COLORS.green,
  },
  {
    label: "Web / Backend",
    items: ["Next.js", "React", "Node.js", "Flask", "REST APIs", "Prisma ORM", "Vercel AI SDK"],
    accent: COLORS.blue,
  },
  {
    label: "AI / Data",
    items: ["Anthropic API", "Zod", "d3.js", "Knowledge Graphs", "Spaced Repetition"],
    accent: COLORS.purple,
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "Supabase"],
    accent: COLORS.blue,
  },
  {
    label: "DevOps / Tooling",
    items: ["Git", "Docker", "GitHub Actions", "Linux", "AWS", "Jira"],
    accent: COLORS.amber,
  },
  {
    label: "Hardware",
    items: ["Embedded Linux", "ESP32 / STM32", "PCB Design (KiCad)", "RF Systems", "FPGA"],
    accent: COLORS.green,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Grovara",
    role: "Software Engineer (Contract)",
    location: "Remote",
    period: "Jan 2025 — Jun 2025",
    kind: "work",
    bullets: [
      "Rebuilt a B2B wholesale e-commerce platform from legacy CakePHP to a modern React + TypeScript stack, owning full-stack delivery from responsive UI and client-side state through API integration and deployment.",
      "Designed and deployed RESTful API endpoints in Node.js backed by PostgreSQL to automate inventory synchronization, eliminating manual reconciliation and supporting thousands of daily transactions with consistent data integrity.",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    company: "Kostas Research Institute",
    role: "Engineering R&D Co-Op",
    location: "Burlington, MA",
    period: "Jan 2025 — Aug 2025",
    kind: "work",
    bullets: [
      "Wrote Bash automation to bring up and configure Linux SBCs across a multi-board RF antenna test environment — standardizing signal capture, log collection, and fault detection, and cutting per-board setup from hours to minutes.",
      "Built MATLAB tooling to process raw spectrum-analyzer captures from antenna field tests, implementing filtering and demodulation pipelines to decode on-board signals and classify novel waveform data across multiple campaigns.",
      "Presented technical findings as documentation and live demos for non-technical stakeholders, supporting $7M+ in grant renewals.",
    ],
    tech: ["Bash", "MATLAB", "Embedded Linux", "RF Systems", "Signal Processing"],
  },
  {
    company: "Insulet",
    role: "Systems Engineer — QA & Design Verification Co-Op",
    location: "Acton, MA",
    period: "Jan 2024 — Aug 2024",
    kind: "work",
    bullets: [
      "Built a Python OCR automation script for mobile onboarding verification, increasing the team's daily testing throughput by 40%.",
      "Parsed device telemetry logs from AWS S3 with Python to identify fault signatures and support root-cause analysis.",
      "Ran end-to-end design verification for the Omnipod insulin delivery device, escalating three critical reliability issues before release and contributing to CE marking compliance for the European launch.",
    ],
    tech: ["Python", "OCR", "AWS S3", "Design Verification", "Medical Devices"],
  },
];

export const LEADERSHIP: Experience[] = [
  {
    company: "TheBoard",
    role: "Head of Design",
    location: "Student-Founded EdTech Startup",
    period: "Jan 2024 — Jun 2024",
    kind: "leadership",
    bullets: [
      "Managed a 5-person design team, running weekly design reviews and feature brainstorming sessions while owning UX/UI direction from wireframes through prototype.",
    ],
    tech: ["UX/UI", "Figma", "Prototyping", "Team Leadership"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "poKeDB",
    subtitle: "Data-Visualization Full-Stack Web App",
    domain: "software",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Vercel", "GitHub Actions"],
    bullets: [
      "Iterated through three data-fetching architectures — client-side API calls, PostgreSQL with Redis caching, and build-time static generation — cutting page load from ~3s to instant across 1,000+ routes.",
      "Designed a normalized PostgreSQL schema with Prisma ORM for many-to-many relationships; seeded via ETL from the PokéAPI, migrated to Supabase, and deployed on Vercel with GitHub Actions CI/CD.",
      "Built 15+ reusable React components — sprite carousels, generation-tabbed Pokédex selectors, type-effectiveness charts — with dynamic theming that adapts per generation.",
    ],
    status: "Live",
    link: "https://pokedb-one.vercel.app",
  },
  {
    title: "Cortex",
    subtitle: "AI-Powered Adaptive Learning Platform",
    domain: "ai",
    tech: ["Next.js", "TypeScript", "Anthropic API", "Supabase", "Prisma", "Zod", "d3.js"],
    bullets: [
      "Built an adaptive learning platform that generates personalized tutoring sessions via the Anthropic API — Supabase (PostgreSQL + Auth), Prisma ORM, and a Next.js/TypeScript frontend with streaming AI responses on Vercel.",
      "Designed a deterministic session orchestrator that selects pedagogical modes, dynamically constructs LLM prompts from learner state, and parses structured JSON with Zod validation — keeping the UI predictable and the learning flow testable.",
      "Implemented a per-user knowledge graph with SM-2 spaced repetition, mastery-based difficulty progression, and a d3.js force-directed topic map that adapts review scheduling to each learner's retention in real time.",
    ],
    status: "Built",
  },
  {
    title: "AERIS",
    subtitle: "Full-Stack IoT Monitoring Platform",
    domain: "hybrid",
    tech: ["ESP32", "C++", "Flask", "MySQL", "REST API", "I2C / UART"],
    bullets: [
      "Built an IoT environmental-monitoring platform end-to-end: ESP32 C++ firmware collecting telemetry over I2C/UART with SRAM buffering for offline resilience.",
      "Wrote a Flask REST API ingesting sensor data into MySQL for time-series queries, with a dashboard surfacing trend visualizations and threshold-based safety alerts.",
    ],
    status: "Built",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    school: "Northeastern University",
    credential: "B.Sc. Computer Engineering",
    location: "Boston, MA",
    period: "Sep 2021 — Dec 2025",
  },
  {
    school: "Horace Mann School",
    credential: "High School Diploma",
    location: "Bronx, NY",
    period: "",
  },
];
