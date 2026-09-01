import { ContactCTA } from "@/components/home/ContactCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kiran H K for DevOps, Cloud, or SRE opportunities.",
};

export default function ContactPage() {
  return (
    <div className="py-20 sm:py-28">
      <ContactCTA />
    </div>
  );
}
