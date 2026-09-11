import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "mychits-chitxpert",
    title: "MyChits",
    subtitle: "ChitXpert",
    category: "Full Stack + DevOps",
    duration: "April 2025 – Present",
    description:
      "ChitXpert/MyChits platform for licensed chit-fund operations — customer enrolment, real-time payment reporting, and collection workflows — built and run end-to-end (MERN app + Docker/Kubernetes/Jenkins on AWS) for Vijaya Vinayak Chitfunds Pvt. Ltd.",
    role: "DevOps Engineer & Full-Stack Developer",
    technologies: {
      frontend: ["React", "React Hooks", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "REST APIs"],
      database: ["MongoDB"],
      cloud: ["AWS", "DigitalOcean"],
      devops: ["Docker", "Kubernetes", "Jenkins", "GitLab CI/CD"],
      monitoring: ["Prometheus", "Grafana"],
      security: ["Container image scanning", "Access-control auditing"],
    },
    features: [
      {
        title: "Customer Enrolment",
        items: ["Customer onboarding workflows", "Enrolment tracking", "Customer profiles"],
      },
      {
        title: "Payment Reporting",
        items: ["Real-time payment reports (97% accuracy)", "Collection tracking", "Financial reporting dashboards"],
      },
      {
        title: "Communication",
        items: ["WhatsApp integration for customer notifications"],
      },
    ],
    contributions: [
      {
        title: "Frontend",
        items: [
          "Built customer enrolment and payment reporting interfaces in React",
          "Implemented reusable components and responsive layouts",
          "Integrated REST APIs into the frontend",
        ],
      },
      {
        title: "Backend",
        items: [
          "Developed REST APIs with Node.js and Express.js",
          "Modeled application data in MongoDB",
          "Integrated WhatsApp-based notifications into backend workflows",
        ],
      },
      {
        title: "DevOps",
        items: [
          "Containerized services with Docker",
          "Zero-downtime Kubernetes rollouts (100% uptime in peaks)",
          "Built CI/CD pipelines with Jenkins and GitLab CI/CD",
          "Set up Prometheus and Grafana monitoring",
        ],
      },
    ],
    architecture: [
      { label: "React Frontend" },
      { label: "REST API" },
      { label: "Node.js / Express.js" },
      { label: "MongoDB" },
      { label: "Docker" },
      { label: "Kubernetes" },
      { label: "AWS / DigitalOcean" },
      { label: "Prometheus / Grafana" },
    ],
    kpis: [
      "60% faster customer onboarding",
      "97% financial reporting accuracy",
      "100% uptime through peak traffic spikes",
    ],
    featured: true,
  },
  {
    slug: "retail-billing-software",
    title: "Native minds Technology Pvt Ltd",
    subtitle: "Retail Billing Software",

    category: "DevOps · Retail",
    duration: "June 2022 – January 2025",
    description:
      "Retail billing platform run as containerized microservices on Kubernetes — +30% scalability, 99% cluster uptime, 30% faster deployments — built to scale through traffic spikes without downtime.",
    role: "DevOps Engineer",
    technologies: {
      devops: ["Docker", "Kubernetes", "Jenkins", "GitLab CI/CD"],
      cloud: ["AWS", "DigitalOcean"],
      monitoring: ["Prometheus", "Grafana"],
      security: ["Container image scanning"],
    },
    features: [
      {
        title: "Deployment & Scaling",
        items: ["Zero-downtime deployments", "Horizontal scaling under traffic spikes", "Automated rollbacks"],
      },
    ],
    contributions: [
      {
        title: "DevOps",
        items: [
          "Containerized microservices with Docker (−10% image size)",
          "Orchestrated services with Kubernetes for scaling and rollbacks",
          "Automated Jenkins pipelines across dev/staging/prod (−30% deploy time)",
          "Prometheus/Grafana monitoring (−10% MTTR)",
        ],
      },
    ],
    architecture: [
      { label: "Microservices" },
      { label: "Docker" },
      { label: "Kubernetes" },
      { label: "Jenkins CI/CD" },
      { label: "AWS" },
      { label: "Prometheus / Grafana" },
    ],
    kpis: ["30% faster deployments", "99% cluster uptime", "Zero-downtime deployments"],
    featured: true,
  },
  {
    slug: "developer-portfolio",
    title: "Developer Portfolio",
    subtitle: "Live 2026 Build",
    category: "Frontend · Next.js",
    duration: "2026",
    description:
      "Personal portfolio site — the live build of this profile — presenting DevOps + MERN experience, skills, projects, and contact. Next.js App Router with dark/light theming, deployed on Vercel.",
    role: "Designer & Full-Stack Developer",
    technologies: {
      frontend: ["Next.js 16 (App Router)", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js Route Handlers"],
      cloud: ["Vercel"],
      devops: ["GitHub Actions (lint/typecheck/preview)"],
    },
    features: [
      {
        title: "Portfolio Sections",
        items: ["Hero + pipeline diagram", "Experience timeline", "Skills grid", "Featured projects", "DevOps practice", "Contact"],
      },
      {
        title: "Platform",
        items: ["Dark/light theme", "SEO + sitemap + JSON-LD", "Responsive layouts"],
      },
    ],
    contributions: [
      {
        title: "Build",
        items: [
          "Built all pages and components in Next.js + TypeScript + Tailwind",
          "Synced content with 2026 resume (metrics, competencies, experience)",
          "Deployed to Vercel with preview environments",
        ],
      },
    ],
    architecture: [
      { label: "Next.js Frontend" },
      { label: "Vercel Edge" },
      { label: "GitHub Actions CI" },
    ],
    kpis: ["Live in production on Vercel"],
    liveDemo: "https://profile-theta-smoky.vercel.app/",
    featured: true,
  },
  {
    slug: "learn-with-kiran",
    title: "Learn With Kiran",
    subtitle: "DevOps Training Platform",
    category: "Full Stack · EdTech",
    duration: "2026",
    description:
      "Complete DevOps training platform — Linux, Git, AWS, Docker, Jenkins, Kubernetes, EKS, Terraform — with roadmaps, command playground, troubleshooting guides, and interview prep. Deployed on Vercel.",
    role: "Full-Stack Developer & DevOps Curriculum Engineer",
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["REST APIs"],
      cloud: ["Vercel", "AWS (taught: EC2/S3/VPC/IAM/EKS/ECR)"],
      devops: ["Docker", "Jenkins", "Kubernetes", "Terraform", "GitHub Actions"],
    },
    features: [
      {
        title: "Learn",
        items: ["Linux, Git, AWS, Docker, Jenkins, Kubernetes, EKS, Terraform tracks", "What/why/how + commands + troubleshooting per topic"],
      },
      {
        title: "Practice",
        items: ["Interactive command playground terminal", "Real-world projects section", "Career roadmap (Beginner → Job Ready)"],
      },
      {
        title: "Interview",
        items: ["Interview questions bank", "Architecture walkthroughs (Git push → production)"],
      },
    ],
    contributions: [
      {
        title: "Build",
        items: [
          "Built curriculum pages, playground terminal, and roadmap flows",
          "Authored production-grade DevOps content (EKS/ECR/ALB/Route 53/Terraform)",
          "Deployed and operated the Vercel production build",
        ],
      },
    ],
    architecture: [
      { label: "Next.js Frontend" },
      { label: "Interactive Playground" },
      { label: "Curriculum Content Layer" },
      { label: "Vercel Edge" },
    ],
    kpis: ["8 technology tracks live", "Playground + roadmap + interview prep shipped"],
    liveDemo: "https://learnwithkiran.vercel.app/",
    featured: true,
  },
  {
    slug: "hotel-website-admin-suite",
    title: "Hotel Website + Admin Suite",
    subtitle: "Supabase Realtime + Android App",
    category: "Full Stack · Mobile",
    duration: "2026",
    description:
      "Hotel ordering and management system: customer web ordering plus a realtime Admin Suite (orders, kitchen display, GST billing, inventory, reports, roles/audit) on one Supabase backend — with a companion Android app.",
    role: "Full-Stack + Mobile Developer",
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Supabase (Postgres, Realtime, Auth, RLS)"],
      database: ["PostgreSQL (Supabase)", "Row-Level Security"],
      cloud: ["Vercel", "Supabase Cloud"],
      devops: ["GitHub Actions"],
    },
    features: [
      {
        title: "Realtime Orders",
        items: ["Orders pop in instantly with sound + browser alerts", "No refresh needed (Supabase Realtime)"],
      },
      {
        title: "Kitchen Display",
        items: ["NEW → PREPARING → READY → COMPLETED board", "Tablet-optimized"],
      },
      {
        title: "Billing & GST",
        items: ["Invoices with CGST/SGST/IGST", "PDF download + Excel exports"],
      },
      {
        title: "Inventory & Reports",
        items: ["Live stock, low-stock warnings, transaction history", "Sales, hourly peaks, item performance, staff KPIs"],
      },
      {
        title: "Access",
        items: ["Kitchen/billing/manager/admin roles with audit logs", "Staff login + dashboard"],
      },
    ],
    contributions: [
      {
        title: "Build",
        items: [
          "Built customer ordering web app + admin dashboard on one Supabase project",
          "Implemented realtime orders, KDS board, GST billing, inventory, and reports",
          "Shipped companion Hotel Android app against the same backend",
        ],
      },
    ],
    architecture: [
      { label: "Customer Web App" },
      { label: "Admin Suite Dashboard" },
      { label: "Supabase Realtime + Postgres" },
      { label: "Android App" },
      { label: "Vercel Edge" },
    ],
    kpis: ["Realtime order-to-kitchen flow live", "GST billing + inventory + reports shipped"],
    liveDemo: "https://myhotelwebsite.vercel.app/",
    featured: true,
  },
  {
    slug: "train-with-kiran-academy",
    title: "Train With Kiran Academy",
    subtitle: "Interactive DevOps Academy",
    duration: "2026",
    category: "Full Stack · EdTech · IaC",
    description:
      "Interactive academy build: 14 topics from Linux to production AWS (IAM, VPC, EC2, S3, ALB, Route 53, Docker, Jenkins, Kubernetes, EKS/ECR, Terraform, monitoring/security) with architecture explorer, playground, and progress dashboard.",
    role: "Full-Stack Developer & DevOps Curriculum Engineer",
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["REST APIs"],
      database: ["PostgreSQL"],
      cloud: ["Vercel", "AWS (taught: IAM/VPC/EC2/S3/ALB/Route 53/EKS/ECR)"],
      devops: ["Terraform", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
      monitoring: ["Prometheus", "Grafana"],
    },
    features: [
      {
        title: "Curriculum",
        items: ["14 topics: Linux → Git → AWS → Docker → Jenkins → K8s → EKS/ECR → Terraform → monitoring/security", "60+ commands with expected output + real errors", "25+ interview questions with graded answers"],
      },
      {
        title: "Interactive",
        items: ["Architecture explorer (user request → app)", "Command playground", "Hands-on projects (14)", "Progress dashboard"],
      },
    ],
    contributions: [
      {
        title: "Build",
        items: [
          "Built topic system answering what/why/how/commands/troubleshooting/interview per lesson",
          "Built architecture + playground + dashboard experiences",
          "Deployed the interactive academy to Vercel",
        ],
      },
    ],
    architecture: [
      { label: "Next.js Academy Frontend" },
      { label: "Architecture Explorer" },
      { label: "Command Playground" },
      { label: "Progress Dashboard" },
      { label: "Vercel Edge" },
    ],
    kpis: ["14 topics · 60+ commands · 14 hands-on projects live"],
    liveDemo: "https://learn-with-kiran.vercel.app/",
    featured: true,
  },
];
