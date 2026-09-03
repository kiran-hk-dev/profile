"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { InterviewCard } from "@/components/learn/InterviewCard";
import { interviewQuestions } from "@/data/learn/interviews";
import { ArrowLeft } from "lucide-react";

export default function InterviewsPage() {
  return (
    <div className="py-32 sm:py-40">
      <Container>
        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text"
        >
          <ArrowLeft size={14} />
          Back to Learn
        </Link>

        <FadeIn className="mt-6">
          <SectionHeading
            index="Interview"
            title="DevOps Interview Questions"
            description={`${interviewQuestions.length} searchable questions with 30-second answers, detailed explanations, real-world examples, commands, and follow-up questions.`}
          />
        </FadeIn>

        <FadeIn>
          <InterviewCard questions={interviewQuestions} />
        </FadeIn>
      </Container>
    </div>
  );
}