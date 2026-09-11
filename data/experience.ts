import { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    role: "DevOps Engineer & Full-Stack Developer",
    company: "ChitXpert · MyChits — Vijaya Vinayak Chitfunds Pvt. Ltd.",
    location: "Bengaluru, India",
    start: "April 2025",
    end: "Present",
    current: true,
    type: "freelance",
    summary:
      "Direct engagement with a licensed financial-services company, building and running its ChitXpert/MyChits platform end-to-end — infrastructure and MERN application layer.",
    highlights: [
      "Zero-downtime releases: 100% uptime through peak traffic spikes by containerizing Retail Billing microservices with Docker and orchestrating rollouts on Kubernetes",
      "60% faster customer onboarding: cut enrolment processing time vs manual workflows with an end-to-end MERN enrolment module (React.js, Node.js, Express.js, MongoDB)",
      "97% reporting accuracy: real-time payment-reporting engine with WhatsApp notification integration via REST APIs, verified by reconciliation audits",
      "Fewer production API defects: authored and validated every REST endpoint in Postman before deployment, reducing QA ticket volume",
    ],
  },
  {
    role: "DevOps Engineer (Freelance)",
    company: "Native Minds Technologies Pvt Ltd",
    location: "Bengaluru, India",
    start: "August 2023",
    end: "January 2025",
    current: false,
    type: "freelance",
    summary:
      "Continued as a freelance DevOps Engineer, automating CI/CD pipelines and maintaining Kubernetes infrastructure.",
    highlights: [
      "30% higher scalability: +30% load-test throughput and −10% image size by containerizing microservices with Docker and standardizing build images",
      "99% cluster uptime for production workloads via Kubernetes clusters wired into the CI/CD pipeline",
      "30% faster deployments and 10% fewer deployment errors via automated Jenkins CI/CD pipelines across dev, staging, and production",
      "10% faster incident resolution with real-time Prometheus + Grafana monitoring and alerting",
      "Zero critical vulnerabilities shipped: automated image scanning and access-control checks in the pipeline",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Native Minds Technologies Pvt Ltd",
    location: "Bengaluru, India",
    start: "June 2022",
    end: "July 2023",
    current: false,
    type: "full-time",
    summary:
      "Started as a full-time DevOps Engineer, building CI/CD automation and container orchestration from the ground up.",
    highlights: [
      "Automated CI/CD pipelines with Jenkins, cutting deployment time by 30%",
      "Containerized microservices with Docker and orchestrated them with Kubernetes for +30% scalability",
      "Maintained Kubernetes clusters (99% uptime) supporting the Retail Billing Software project",
      "Used Git, GitHub, GitLab, and Bitbucket for version control and Agile team delivery",
    ],
  },
  {
    role: "Network Support Engineer",
    company: "CTK Networks",
    location: "Bengaluru, India",
    start: "September 2021",
    end: "May 2022",
    current: false,
    type: "full-time",
    summary: "Provided network and systems support, resolving infrastructure issues and maintaining connectivity.",
    highlights: [
      "Resolved network and system issues to minimize downtime",
      "Configured and maintained LAN/Wi-Fi networks",
      "Performed system upgrades and preventive maintenance",
    ],
  },
  {
    role: "Senior Technical Engineer",
    company: "Next Education India Pvt Ltd",
    location: "Hyderabad, India",
    start: "October 2019",
    end: "July 2020",
    current: false,
    type: "full-time",
    summary: "Provided technical engineering support.",
    highlights: [],
  },
];
