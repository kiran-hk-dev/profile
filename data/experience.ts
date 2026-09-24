import { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    role: "DevOps Engineer & Full-Stack Developer",
    company: "ChitXpert · MyChits — Vijaya Vinayak Chitfunds Pvt. Ltd.",
    location: "Bengaluru, India",
    start: "Apr 2025",
    end: "Present",
    current: true,
    type: "freelance",
    summary:
      "Direct engagement with a licensed financial-services company, building and running its ChitXpert/MyChits platform end-to-end — infrastructure and MERN application layer.",
    highlights: [
      "Zero-downtime releases (100% uptime through peak traffic spikes): delivered continuous deployments with no service interruption by containerizing platform microservices with Docker and orchestrating rollouts on Kubernetes",
      "60% faster customer onboarding: cut enrolment processing time by 60% against pre-launch manual workflows by designing and building the enrolment module end-to-end on the MERN stack (React.js, Node.js, Express.js, MongoDB)",
      "97% reporting accuracy: raised financial reporting accuracy to 97% per reconciliation audits by engineering a real-time payment-reporting engine with WhatsApp notification integration via REST APIs",
      "Fewer production API defects: reduced post-release API defects per QA ticket volume by authoring and validating every REST endpoint in Postman before deployment",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Native Minds Technologies Pvt Ltd",
    location: "Bengaluru, India",
    start: "Jun 2022",
    end: "Jan 2025",
    current: false,
    type: "full-time",
    summary:
      "Platform team for the Retail Billing Software — converted from full-time employee to freelance engagement in Aug 2023 on the same team.",
    highlights: [
      "30% higher scalability (−10% image size): increased load-test throughput by 30% and cut average deployment package size by 10% by containerizing microservices with Docker and standardizing build images across environments",
      "99% cluster uptime: sustained 99% uptime for production workloads per cluster monitoring SLAs by engineering and maintaining Kubernetes clusters wired directly into the CI/CD pipeline",
      "30% faster deployments (−10% errors): cut deployment time by 30% and deployment errors by 10% per release-cycle logs by designing automated Jenkins CI/CD pipelines spanning dev, staging, and production",
      "10% faster incident resolution: reduced mean time to resolution by 10% per incident-response tracking by implementing real-time monitoring and alerting with Prometheus and Grafana",
      "Zero critical vulnerabilities shipped: eliminated critical container vulnerabilities before release per pre-deployment scan results by integrating automated image scanning and access-control checks into the pipeline",
    ],
  },
  {
    role: "Network Support Engineer",
    company: "CTK Networks",
    location: "Bengaluru, India",
    start: "Sep 2021",
    end: "May 2022",
    current: false,
    type: "full-time",
    summary: "Enterprise network operations — the pivot point into infrastructure and DevOps.",
    highlights: [
      "Ran enterprise network operations and resolved infrastructure issues to minimize downtime",
      "Configured and maintained LAN/Wi-Fi networks",
      "Performed system upgrades and preventive maintenance",
    ],
  },
  {
    role: "Senior Technical Engineer",
    company: "Next Education India Pvt Ltd",
    location: "Hyderabad, India",
    start: "Oct 2019",
    end: "Jul 2020",
    current: false,
    type: "full-time",
    summary: "Technical support and escalations for enterprise ed-tech clients.",
    highlights: [],
  },
];

export const education = {
  degree: "B.E., Computer Science & Engineering",
  school: "Siddaganga Institute of Technology",
};
