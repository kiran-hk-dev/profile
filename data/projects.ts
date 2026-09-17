import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ai-augmented-gitops-platform",
    title: "AI-Augmented GitOps Platform",
    subtitle: "ArgoCD · EKS · LLM Incident Triage",
    category: "DevOps · GitOps · AIOps",
    duration: "2025 – 2026",
    description:
      "Reference GitOps platform recruiters ask for in 2026: app repos + GitOps repo, ArgoCD App-of-Apps with ApplicationSets across dev/staging/prod on EKS, Image Updater auto-bumps, Rollouts canaries gated by Prometheus — plus an LLM layer that turns every alert into a Slack message with log summary, probable cause, and runbook link.",
    role: "Platform / DevOps Engineer",
    technologies: {
      devops: ["ArgoCD (App-of-Apps, ApplicationSets, Image Updater)", "Argo Rollouts (canary/blue-green)", "Jenkins Shared Libs", "GitHub Actions", "Helm + Kustomize", "Terraform"],
      cloud: ["AWS EKS", "ECR", "VPC + ALB + Route 53", "IRSA", "External Secrets (AWS Secrets Manager)"],
      monitoring: ["Prometheus + Alertmanager", "Grafana (SLO dashboards)", "Loki + OpenTelemetry", "k8sgpt operator", "LLM alert-enrichment webhook → Slack"],
      security: ["Trivy + cosign signing + SBOM", "Kyverno policies", "Sealed/External Secrets", "ArgoCD RBAC + SSO"],
    },
    features: [
      {
        title: "GitOps Automation (the ArgoCD loop)",
        items: [
          "CI never deploys: Jenkins builds → tests → Trivy-scans → pushes to ECR → commits tag to GitOps repo",
          "ArgoCD automated sync + self-heal + prune; sync waves order CRDs → infra → app → PostSync smoke jobs",
          "ApplicationSets stamp dev/staging/prod from one template; Image Updater bumps tags automatically",
          "Notifications → Slack on sync succeeded/degraded; sync windows freeze prod during business hours",
        ],
      },
      {
        title: "Progressive Delivery",
        items: ["Argo Rollouts canary 10% → 50% → 100% with Prometheus analysis (error-rate, p99)", "Auto-rollback + ArgoCD health reflects rollout state"],
      },
      {
        title: "AI Integration (AIOps)",
        items: [
          "Alertmanager webhook → LLM service: summarises Loki logs + recent deploys + suggests fix with runbook link",
          "k8sgpt operator annotates failed pods/syncs in-cluster with remediation hints",
          "PR bot reviews Terraform/K8s diffs for cost + security risks before merge",
          "Slack ChatOps: /deploy status, /rollout promote|abort, /logs tail — backed by ArgoCD + Loki APIs",
        ],
      },
    ],
    contributions: [
      {
        title: "Platform",
        items: [
          "Designed app-repo/GitOps-repo split and App-of-Apps tree with per-team ArgoCD Projects + RBAC",
          "Wrote Terraform modules (VPC/EKS/ECR/IAM/IRSA) with S3 remote state; Karpenter autoscaling + spot pools",
          "Built Jenkins shared library + GitHub Actions reusable workflows for the CI half of GitOps",
          "Built LLM enrichment service (FastAPI + embeddings over runbooks) and Slack delivery",
        ],
      },
    ],
    architecture: [
      { label: "git push (app repo)" },
      { label: "CI: build → Trivy → ECR → commit tag to GitOps repo" },
      { label: "ArgoCD ApplicationSets (auto-sync + self-heal)" },
      { label: "Argo Rollouts canary + Prometheus analysis" },
      { label: "EKS (ALB → pods) + External Secrets" },
      { label: "Alerts → LLM summary + runbook → Slack" },
    ],
    kpis: ["Zero-touch prod deploys", "Canary-gated releases with auto-rollback", "AI-enriched pages cut triage time"],
    featured: true,
  },
  {
    slug: "eks-argocd-app-of-apps",
    title: "MERN on EKS with ArgoCD App-of-Apps",
    subtitle: "Production GitOps Reference",
    category: "DevOps · AWS EKS · GitOps",
    duration: "2025 – 2026",
    description:
      "Production-grade MERN deployment on EKS driven entirely by GitOps: one commit flows through CI to a GitOps tag bump, ArgoCD syncs three environments, Rollouts canary it, and Prometheus SLOs decide promotion — with sealed secrets and policy gates throughout.",
    role: "DevOps Engineer",
    technologies: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "REST APIs"],
      database: ["MongoDB"],
      cloud: ["AWS EKS", "ECR", "VPC", "ALB + ExternalDNS + cert-manager"],
      devops: ["ArgoCD", "ArgoCD Image Updater", "Argo Rollouts", "Terraform", "Jenkins + GitHub Actions", "Helm/Kustomize"],
      monitoring: ["Prometheus", "Grafana", "Loki"],
      security: ["Trivy", "Kyverno", "External Secrets"],
    },
    features: [
      {
        title: "Multi-Env GitOps",
        items: ["gitops/ overlays: base + dev/staging/prod; ApplicationSet generates all three", "PR to prod overlay = auditable promotion; ArgoCD diff shows exactly what changes"],
      },
      {
        title: "Zero-Downtime Releases",
        items: ["Rolling + canary strategies, PreSync DB migrations, PostSync smoke tests", "One-click ArgoCD rollback to last healthy revision"],
      },
    ],
    contributions: [
      {
        title: "DevOps",
        items: [
          "Built Terraform EKS cluster (managed node groups + Karpenter, ALB controller, EBS CSI)",
          "Authored Helm charts + Kustomize overlays consumed by ArgoCD; sync-wave annotated",
          "Wired Image Updater (ECR auth via IRSA) + Slack notifications for every sync",
          "Added Prometheus SLO burn-rate alerts and Grafana rollout dashboards",
        ],
      },
    ],
    architecture: [
      { label: "React + Node/Express (ECR images)" },
      { label: "GitOps repo (env overlays)" },
      { label: "ArgoCD ApplicationSets" },
      { label: "Argo Rollouts canary" },
      { label: "EKS + ALB + Route 53" },
    ],
    kpis: ["3 envs from one template", "Zero-downtime canary releases", "Full audit trail per deploy"],
    featured: true,
  },
  {
    slug: "mychits-chitxpert",
    title: "MyChits",
    subtitle: "ChitXpert",
    category: "Full Stack + GitOps",
    duration: "April 2025 – Present",
    description:
      "ChitXpert/MyChits platform for licensed chit-fund operations — customer enrolment, real-time payment reporting, and collection workflows — shipped through an ArgoCD GitOps pipeline (CI → ECR → GitOps tag commit → auto-sync) with AI-enriched on-call for Vijaya Vinayak Chitfunds Pvt. Ltd.",
    role: "DevOps Engineer & Full-Stack Developer",
    technologies: {
      frontend: ["React", "React Hooks", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "REST APIs"],
      database: ["MongoDB"],
      cloud: ["AWS EKS", "ECR", "ALB + Route 53", "DigitalOcean"],
      devops: ["Docker", "Kubernetes", "ArgoCD (auto-sync + Image Updater)", "Argo Rollouts canary", "Jenkins", "GitLab CI/CD", "Terraform"],
      monitoring: ["Prometheus", "Grafana", "Loki", "LLM alert summaries → Slack"],
      security: ["Trivy + image signing", "Kyverno policies", "External Secrets"],
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
      {
        title: "GitOps Delivery",
        items: ["ArgoCD App-of-Apps dev/staging/prod", "Canary rollouts with auto-rollback", "AI-summarised alerts in Slack"],
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
        title: "DevOps (GitOps + AI)",
        items: [
          "Containerized services with Docker; ECR-backed images",
          "ArgoCD automated sync + self-heal + Image Updater; zero manual kubectl to prod",
          "Argo Rollouts canaries gated by Prometheus; 100% uptime through peaks",
          "LLM alert enrichment (logs + runbook link → Slack) with k8sgpt in-cluster triage",
        ],
      },
    ],
    architecture: [
      { label: "React Frontend" },
      { label: "REST API" },
      { label: "Node.js / Express.js" },
      { label: "MongoDB" },
      { label: "Docker → ECR" },
      { label: "ArgoCD GitOps → EKS" },
      { label: "Prometheus / Grafana + AI triage" },
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

    category: "DevOps · Retail · GitOps",
    duration: "June 2022 – January 2025",
    description:
      "Retail billing platform run as containerized microservices on EKS with ArgoCD GitOps — +30% scalability, 99% cluster uptime, 30% faster deployments — canary releases and policy-gated, scanned images throughout.",
    role: "DevOps Engineer",
    technologies: {
      devops: ["Docker", "Kubernetes (EKS)", "ArgoCD", "Jenkins", "GitLab CI/CD", "Terraform", "Helm"],
      cloud: ["AWS (EKS/ECR/VPC/ALB)", "DigitalOcean"],
      monitoring: ["Prometheus", "Grafana", "Alertmanager"],
      security: ["Trivy image scanning", "Kyverno policies", "External Secrets"],
    },
    features: [
      {
        title: "Deployment & Scaling",
        items: ["ArgoCD-synced deployments with automated rollbacks", "Horizontal + Karpenter scaling under traffic spikes", "Sync-wave ordered infra→app deploys"],
      },
    ],
    contributions: [
      {
        title: "DevOps",
        items: [
          "Containerized microservices with Docker (−10% image size, multi-stage builds)",
          "Introduced ArgoCD GitOps pilot: declarative apps, auto-sync + self-heal, env overlays",
          "Automated Jenkins pipelines across dev/staging/prod (−30% deploy time, CI commits tag → ArgoCD deploys)",
          "Prometheus/Grafana monitoring + Alertmanager routing (−10% MTTR)",
        ],
      },
    ],
    architecture: [
      { label: "Microservices" },
      { label: "Docker → ECR" },
      { label: "GitOps repo" },
      { label: "ArgoCD → EKS" },
      { label: "AWS ALB + Route 53" },
      { label: "Prometheus / Grafana" },
    ],
    kpis: ["30% faster deployments", "99% cluster uptime", "Zero-downtime GitOps deployments"],
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
    featured: false,
  },
  {
    slug: "learn-with-kiran",
    title: "Learn With Kiran",
    subtitle: "DevOps Training Platform",
    category: "Full Stack · EdTech",
    duration: "2026",
    description:
      "Complete DevOps training platform — Linux, Git, AWS, Docker, Jenkins, Kubernetes, EKS, Terraform, ArgoCD GitOps, AI for DevOps — with roadmaps, command playground, troubleshooting guides, and interview prep. Deployed on Vercel.",
    role: "Full-Stack Developer & DevOps Curriculum Engineer",
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["REST APIs"],
      cloud: ["Vercel", "AWS (taught: EC2/S3/VPC/IAM/EKS/ECR)"],
      devops: ["Docker", "Jenkins", "Kubernetes", "ArgoCD + Rollouts", "Terraform", "GitHub Actions"],
    },
    features: [
      {
        title: "Learn",
        items: ["Linux, Git, AWS, Docker, Jenkins, Kubernetes, EKS, Terraform, ArgoCD, AIOps tracks", "What/why/how + commands + troubleshooting per topic"],
      },
      {
        title: "Practice",
        items: ["Interactive command playground terminal", "Real-world GitOps projects section", "Career roadmap (Beginner → Job Ready)"],
      },
      {
        title: "Interview",
        items: ["Interview questions bank (incl. ArgoCD + AI scenarios)", "Architecture walkthroughs (git push → ArgoCD sync → monitored prod)"],
      },
    ],
    contributions: [
      {
        title: "Build",
        items: [
          "Built curriculum pages, playground terminal, and roadmap flows",
          "Authored production-grade DevOps content (EKS/ECR/ALB/Route 53/Terraform/ArgoCD/AI triage)",
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
    kpis: ["10 technology tracks incl. ArgoCD + AIOps", "Playground + roadmap + interview prep shipped"],
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
    featured: false,
  },
  {
    slug: "train-with-kiran-academy",
    title: "Train With Kiran Academy",
    subtitle: "Interactive DevOps Academy",
    duration: "2026",
    category: "Full Stack · EdTech · IaC",
    description:
      "Interactive academy build: 16 topics from Linux to production AWS (IAM, VPC, EC2, S3, ALB, Route 53, Docker, Jenkins, Kubernetes, EKS/ECR, ArgoCD GitOps, Terraform, monitoring/security, AI for DevOps) with architecture explorer, playground, and progress dashboard.",
    role: "Full-Stack Developer & DevOps Curriculum Engineer",
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["REST APIs"],
      database: ["PostgreSQL"],
      cloud: ["Vercel", "AWS (taught: IAM/VPC/EC2/S3/ALB/Route 53/EKS/ECR)"],
      devops: ["Terraform", "Docker", "Kubernetes", "ArgoCD + Rollouts", "Jenkins", "GitHub Actions"],
      monitoring: ["Prometheus", "Grafana", "Loki + AI triage"],
    },
    features: [
      {
        title: "Curriculum",
        items: ["16 topics: Linux → Git → AWS → Docker → Jenkins → K8s → EKS/ECR → ArgoCD → Terraform → monitoring/security → AIOps", "60+ commands with expected output + real errors", "30+ interview questions with graded answers"],
      },
      {
        title: "Interactive",
        items: ["Architecture explorer (git push → ArgoCD → prod)", "Command playground", "Hands-on GitOps projects (14)", "Progress dashboard"],
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
    kpis: ["16 topics · 60+ commands · 14 hands-on projects live"],
    liveDemo: "https://learn-with-kiran.vercel.app/",
    featured: false,
  },
];
