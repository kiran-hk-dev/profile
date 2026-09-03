import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "mychits-chitxpert",
    title: "MyChits",
    subtitle: "ChitXpert",
    category: "Full Stack + DevOps",
    duration: "March 2025 – Present",
    description:
      "MyChits (module: ChitXpert) is a platform for managing chit-fund operations — customer enrolment, real-time payment reporting, and collection workflows — built and deployed end to end as a freelance engagement.",
    role: "DevOps Engineer & Full Stack Developer (Freelance)",
    technologies: {
      frontend: ["React", "React Hooks", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "REST APIs"],
      database: ["MongoDB"],
      cloud: ["AWS", "DigitalOcean"],
      devops: ["Docker", "Kubernetes", "Jenkins", "GitLab CI/CD"],
      monitoring: ["Prometheus", "Grafana"],
      security: ["Container image scanning"],
    },
    features: [
      {
        title: "Customer Enrolment",
        items: ["Customer onboarding workflows", "Enrolment tracking", "Customer profiles"],
      },
      {
        title: "Payment Reporting",
        items: ["Real-time payment reports", "Collection tracking", "Financial reporting dashboards"],
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
          "Deployed and operated workloads on Kubernetes",
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
      "Reduced enrolment processing time by 60%",
      "Improved financial reporting accuracy to 97%",
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
      "Retail billing platform run as containerized microservices on Kubernetes, built to scale through traffic spikes without downtime or performance loss.",
    role: "DevOps Engineer",
    technologies: {
      devops: ["Docker", "Kubernetes"],
      cloud: ["AWS","Digital Ocean"],
      monitoring: ["Prometheus", "Grafana"],
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
          "Containerized microservices using Docker",
          "Orchestrated services with Kubernetes for scaling and rollbacks",
          "Maintained cluster reliability across traffic spikes",
        ],
      },
    ],
    architecture: [
      { label: "Microservices" },
      { label: "Docker" },
      { label: "Kubernetes" },
      { label: "AWS" },
      { label: "Monitoring" },
    ],
    kpis: ["Zero-downtime deployments", "Scaled services to handle traffic spikes without performance loss"],
    featured: true,
  },
];
