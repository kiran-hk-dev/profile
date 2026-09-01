import { NavItem, Profile } from "@/types";

export const profile: Profile = {
  name: "Kiran H K",
  title: "DevOps Engineer and MERN Full Stack Developer",
  experience: "4.8+ Years Experience",
  location: "Bengaluru, Karnataka, India",
  openTo: ["Hyderabad"],
  summary:
    "Highly motivated and results-driven DevOps Engineer with 4.8+ years of experience in building, automating, deploying, and maintaining scalable applications and cloud infrastructure. Experienced in CI/CD, Docker, Kubernetes, AWS, DigitalOcean, Helm, Jenkins, GitLab, ArgoCD, monitoring, security automation, and cloud-native technologies.",
  email: "kiranhk96@gmail.com",
  github: "https://github.com/kiranhk",
  linkedin: "https://linkedin.com/in/kiranhk",
  resumePath: "/resume/Kiran-HK-DevOps-Engineer.pdf",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "DevOps", href: "/#devops" },
  { label: "Contact", href: "/#contact" },
];

export const stats = [
  { value: "4.8+", label: "Years experience" },
  { value: "10+", label: "DevOps technologies" },
  { value: "Multiple", label: "Production deployments" },
  { value: "Cloud Native", label: "Infrastructure" },
];
