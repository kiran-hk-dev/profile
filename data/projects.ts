import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "mychits-chitxpert",
    title: "Mychit Software (ChitXpert)",
    subtitle: "Chit-fund operations platform",
    category: "Full Stack · MERN",
    duration: "Apr 2025 – Present",
    description:
      "Full MERN build for Vijaya Vinayak Chitfunds Pvt. Ltd. (React.js, Node.js, Express.js, MongoDB): customer enrolment, real-time payment reporting, and WhatsApp API integration — containerized with Docker and rolled out on Kubernetes with Jenkins CI/CD.",
    role: "DevOps Engineer & Full-Stack Developer",
    technologies: {
      frontend: ["React.js", "React Hooks", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "REST APIs", "Postman"],
      database: ["MongoDB"],
      cloud: ["AWS (EC2, ECS, EKS)", "DigitalOcean"],
      devops: ["Docker", "Kubernetes", "Jenkins", "GitLab CI"],
      monitoring: ["Prometheus", "Grafana"],
      security: ["Container Image Scanning", "Access-Control Auditing"],
    },
    features: [
      {
        title: "Customer Enrolment",
        items: [
          "Enrolment module built end-to-end on the MERN stack",
          "Enrolment tracking by branch, agent and chit group",
          "Searchable customer profiles with payment history",
        ],
      },
      {
        title: "Payments & Reporting",
        items: [
          "Real-time payment-reporting engine (97% reconciliation accuracy)",
          "Due / overdue tracking for agents and managers",
          "Exportable financial summaries for audits",
        ],
      },
      {
        title: "Notifications & Quality",
        items: [
          "WhatsApp notifications integrated via REST APIs",
          "Every endpoint authored and validated in Postman before deployment",
          "Containerized releases with zero-downtime rollouts",
        ],
      },
    ],
    contributions: [
      {
        title: "Step 1 — Enrolment UI in React",
        items: [
          "Built enrolment screens, reusable tables/forms and responsive layouts with React.js + Hooks + Tailwind",
          "Wired every screen to REST APIs with loading and error states",
          "How: broke the flow into small components and tested against real agent data",
        ],
      },
      {
        title: "Step 2 — REST APIs in Express",
        items: [
          "Built routes/controllers for customers, groups, payments and collections (Node.js + Express.js)",
          "Authored and validated every endpoint in Postman before deployment",
          "How: one resource at a time — model → route → controller → Postman test",
        ],
      },
      {
        title: "Step 3 — MongoDB models",
        items: [
          "Designed schemas for customers, chit groups, payments and users",
          "Added indexes for report queries and due lookups",
          "How: modelled around the reports first, then normalised where it hurt",
        ],
      },
      {
        title: "Step 4 — Reporting + WhatsApp",
        items: [
          "Engineered the real-time payment-reporting engine (97% accuracy per reconciliation audits)",
          "Integrated WhatsApp notifications via REST APIs on collection events",
          "How: queued sends on payment-status change with retry and logs",
        ],
      },
      {
        title: "Step 5 — Docker + Jenkins delivery",
        items: [
          "Containerized services with Docker; Jenkins pipeline spans dev, staging and production",
          "Image scanning + access-control checks gate every release",
          "How: containerised one service first, then copied the pattern to the rest",
        ],
      },
      {
        title: "Step 6 — Kubernetes rollout + monitoring",
        items: [
          "Zero-downtime rollouts on Kubernetes (100% uptime through peak traffic spikes)",
          "Prometheus + Grafana dashboards for API health and error rates",
          "How: manifests per environment, rollout status verified before marking done",
        ],
      },
    ],
    architecture: [
      { label: "React Frontend", detail: "Enrolment + reports UI" },
      { label: "Express REST API", detail: "Validated in Postman" },
      { label: "MongoDB", detail: "Customers, groups, payments" },
      { label: "WhatsApp API", detail: "Reminders + confirmations" },
      { label: "Docker Images", detail: "Scanned before release" },
      { label: "Jenkins CI/CD", detail: "Dev → staging → prod" },
      { label: "Kubernetes + Monitoring", detail: "Rolling updates + Prometheus / Grafana" },
    ],
    kpis: [
      "100% uptime through peak traffic spikes",
      "60% faster customer onboarding",
      "97% reporting accuracy",
    ],
    featured: true,
  },
  {
    slug: "retail-billing-software",
    title: "Retail Billing Software",
    subtitle: "Native Minds Technologies",
    category: "DevOps · Docker · Kubernetes",
    duration: "Jun 2022 – Present",
    description:
      "Dockerized microservices orchestrated on Kubernetes for Native Minds Technologies — handles live traffic spikes with zero-downtime rollouts, Jenkins pipelines across dev/staging/prod, and Prometheus/Grafana monitoring.",
    role: "DevOps Engineer",
    technologies: {
      devops: ["Docker", "Kubernetes", "Jenkins", "GitLab CI"],
      cloud: ["AWS (EC2, ECS, EKS)", "DigitalOcean"],
      monitoring: ["Prometheus", "Grafana"],
      security: ["Container Image Scanning", "Access-Control Auditing"],
    },
    features: [
      {
        title: "Billing & Inventory",
        items: ["Fast billing flow for counter staff", "Stock tracking with low-stock alerts", "Daily sales and collection reports"],
      },
      {
        title: "Deployment & Scaling",
        items: ["Declarative K8s manifests per environment", "Zero-downtime rolling updates", "Horizontal scaling under peak load (+30% scalability)"],
      },
    ],
    contributions: [
      {
        title: "Step 1 — Containerize with Docker",
        items: [
          "Containerized microservices and standardized build images across environments",
          "Cut average deployment package size by 10% (measured by image size)",
          "How: started with one service, proved the image, then rolled the pattern out",
        ],
      },
      {
        title: "Step 2 — Jenkins pipelines",
        items: [
          "Designed automated Jenkins CI/CD pipelines spanning dev, staging, and production",
          "Cut deployment time by 30% and errors by 10% (per release-cycle logs)",
          "How: pipeline-as-code in the repo, reviewed like app code",
        ],
      },
      {
        title: "Step 3 — Kubernetes clusters",
        items: [
          "Engineered and maintained clusters wired directly into the CI/CD pipeline",
          "Sustained 99% uptime per cluster monitoring SLAs",
          "How: infra changes reviewed, never click-ops; rolling updates with health checks",
        ],
      },
      {
        title: "Step 4 — Monitor + secure",
        items: [
          "Implemented real-time monitoring/alerting with Prometheus and Grafana (−10% resolution time)",
          "Integrated image scanning + access-control checks — zero critical vulns shipped",
          "How: dashboard per service; alert only on symptoms that need a human",
        ],
      },
    ],
    architecture: [
      { label: "Billing UI + APIs", detail: "Counter + inventory services" },
      { label: "Docker Images", detail: "Standardized, scanned" },
      { label: "Jenkins CI/CD", detail: "Dev → staging → prod" },
      { label: "Kubernetes", detail: "Zero-downtime rollouts" },
      { label: "AWS (ECS / EKS)", detail: "Scaled production workloads" },
      { label: "Prometheus / Grafana", detail: "Monitoring + alerting" },
    ],
    kpis: ["30% faster deployments", "99% cluster uptime", "+30% scalability"],
    featured: true,
  },
  {
    slug: "learn-with-kiran",
    title: "Learn With Kiran",
    subtitle: "DevOps training platform · live",
    category: "Full Stack · EdTech",
    duration: "2026",
    description:
      "Training platform built from my daily stack — Linux, Git, AWS, Docker, Jenkins, Kubernetes — with roadmaps, command playgrounds and interview prep. A live build linked from my resume.",
    role: "Full-Stack Developer & Curriculum Builder",
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["REST APIs"],
      database: ["PostgreSQL"],
      cloud: ["Vercel", "AWS (taught: EC2 / S3 / IAM / ECS / EKS)"],
      devops: ["Docker", "Jenkins", "Kubernetes", "GitLab CI"],
      monitoring: ["Prometheus", "Grafana"],
    },
    features: [
      {
        title: "How I built it",
        items: ["Topic system answering what / why / how / commands / troubleshooting per lesson", "Command playground terminal + career roadmap flows", "Interview question bank drawn from real on-call scenarios"],
      },
    ],
    contributions: [
      {
        title: "Step 1 — Curriculum from real work",
        items: [
          "Wrote each track from commands I actually run (Jenkins, Docker, Kubernetes on AWS)",
          "How: notes from real deploys first, polished into lessons second",
        ],
      },
      {
        title: "Step 2 — Interactive practice",
        items: [
          "Built playground terminal and roadmap progress so learners do, not just read",
          "How: small runnable examples per topic, verified in a lab cluster",
        ],
      },
      {
        title: "Step 3 — Deploy and iterate",
        items: ["Shipped on Vercel with preview URLs; fixed content from learner feedback"],
      },
    ],
    architecture: [
      { label: "Next.js Frontend", detail: "Lessons + playground" },
      { label: "Content Layer", detail: "Commands + guides" },
      { label: "Vercel Edge", detail: "Production hosting" },
    ],
    kpis: ["Hands-on tracks for my daily stack", "Playground + roadmap + interview prep live"],
    liveDemo: "https://learnwithkiran.vercel.app/",
    featured: true,
  },
  {
    slug: "hotel-website-admin-suite",
    title: "Hotel Website + Admin Suite",
    subtitle: "Supabase Realtime + Android app · live",
    category: "Full Stack · Mobile",
    duration: "2026",
    description:
      "Hotel ordering and management system linked from my resume: customer web ordering plus a realtime admin suite (orders, kitchen display, GST billing, inventory, reports, roles/audit) on one Supabase backend — with the companion Hotel Android app on the same backend.",
    role: "Full-Stack + Mobile Developer",
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Supabase (Postgres, Realtime, Auth, RLS)"],
      database: ["PostgreSQL (Supabase)", "Row-Level Security"],
      cloud: ["Vercel", "Supabase Cloud"],
      devops: ["Git", "GitHub"],
    },
    features: [
      {
        title: "How I built it",
        items: ["One Supabase project for web + admin + Android — Postgres + Realtime + Auth + RLS", "Realtime orders with sound/alerts; KDS board NEW → PREPARING → READY → COMPLETED", "GST invoices (CGST/SGST/IGST) with PDF + Excel export; inventory + sales reports"],
      },
    ],
    contributions: [
      {
        title: "Step 1 — Data + auth",
        items: [
          "Modelled menu, orders, inventory and staff in Postgres with RLS policies",
          "How: schema per workflow (order → kitchen → bill → stock), tested with RLS on",
        ],
      },
      {
        title: "Step 2 — Realtime ordering + KDS",
        items: [
          "Subscribed admin/KDS screens to order changes — no refresh needed",
          "How: Supabase Realtime channels per store, sound + badge on new orders",
        ],
      },
      {
        title: "Step 3 — Billing, inventory, mobile",
        items: [
          "Built GST billing, stock deductions and reports; shipped Android app on the same backend",
          "How: shared API layer, role-gated screens, audit log per action",
        ],
      },
    ],
    architecture: [
      { label: "Customer Web App", detail: "Ordering UI" },
      { label: "Admin Suite", detail: "Orders, KDS, billing" },
      { label: "Supabase Backend", detail: "Postgres + Realtime + Auth" },
      { label: "Android App", detail: "Same backend (repo)" },
      { label: "Vercel Edge", detail: "Web hosting" },
    ],
    kpis: ["Realtime order-to-kitchen flow live", "GST billing + inventory + reports shipped"],
    liveDemo: "https://myhotelwebsite.vercel.app/",
    featured: false,
  },
  {
    slug: "developer-portfolio",
    title: "Developer Profile",
    subtitle: "This site · live build",
    category: "Frontend · Next.js",
    duration: "2026",
    description:
      "This portfolio itself — the Developer Profile linked from my resume. Next.js App Router with dark/light theming, every page and diagram component built in TypeScript + Tailwind and deployed on Vercel.",
    role: "Designer & Full-Stack Developer",
    technologies: {
      frontend: ["Next.js 16 (App Router)", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js Route Handlers"],
      cloud: ["Vercel"],
      devops: ["Git", "GitHub"],
    },
    features: [
      {
        title: "How I built it",
        items: ["Content-first data files (projects, skills, experience) mirroring my resume", "Reusable pipeline + timeline components for architecture sections", "SEO, sitemap and JSON-LD from day one"],
      },
      {
        title: "Platform",
        items: ["Dark/light theme", "Responsive layouts", "Preview deploys per PR on Vercel"],
      },
    ],
    contributions: [
      {
        title: "Step 1 — Content model",
        items: [
          "Defined typed data files so resume updates never touch layout code",
          "How: one Project type powers cards, detail pages and sitemap",
        ],
      },
      {
        title: "Step 2 — Components + diagrams",
        items: [
          "Built pipeline/timeline components used across home, projects and DevOps pages",
          "How: fixed alignment, numbering and wrapping before adding content",
        ],
      },
      {
        title: "Step 3 — Ship on Vercel",
        items: [
          "Git-based deploys with preview per change, promoted to production",
          "How: small changes, verify preview URL, then merge",
        ],
      },
    ],
    architecture: [
      { label: "Next.js Frontend", detail: "App Router + resume content" },
      { label: "Git-based Deploys", detail: "Preview → production" },
      { label: "Vercel Edge", detail: "Live hosting" },
    ],
    kpis: ["Live in production on Vercel"],
    liveDemo: "https://profile-theta-smoky.vercel.app/",
    featured: false,
  },
];
