"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

interface InterviewQuestion {
  id: string;
  category: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  realWorld?: string;
  commands?: string[];
  followUp?: string[];
  difficulty: "beginner" | "intermediate" | "advanced" | "senior";
}

const difficultyColors = {
  beginner: "bg-green-500/10 text-green-400 border-green-500/30",
  intermediate: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  advanced: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  senior: "bg-red-500/10 text-red-400 border-red-500/30",
};

export function InterviewCard({ questions }: { questions: InterviewQuestion[] }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const categories = ["All", ...Array.from(new Set(questions.map((q) => q.category)))];
  const filtered = questions.filter((q) => {
    const matchesCategory = category === "All" || q.category === category;
    const matchesSearch =
      q.question.toLowerCase().includes(search.toLowerCase()) ||
      q.shortAnswer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const active = questions.find((q) => q.id === selected);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium font-mono-tag transition-colors",
                category === cat
                  ? "bg-accent text-[#0b0f14]"
                  : "bg-bg-elevated text-text-muted border border-border-soft hover:text-text"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative mb-4">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-faint" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions..."
            className="w-full rounded-lg border border-border bg-bg-elevated py-2.5 pl-9 pr-4 text-sm text-text placeholder-text-faint outline-none focus:border-accent"
          />
        </div>

        <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
          {filtered.map((q) => (
            <button
              key={q.id}
              onClick={() => setSelected(q.id)}
              className={cn(
                "w-full text-left rounded-xl border p-4 transition-all",
                selected === q.id
                  ? "border-accent bg-accent-soft"
                  : "border-border bg-bg-elevated hover:border-border-strong"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-text-faint">{q.category}</span>
                <span className={cn("rounded-full border px-2 py-0.5 text-[10px] font-semibold", difficultyColors[q.difficulty])}>
                  {q.difficulty}
                </span>
              </div>
              <p className="text-sm font-medium text-text">{q.question}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-bg-elevated p-6 lg:sticky lg:top-20 h-fit">
        {active ? (
          <div>
            <h3 className="font-display text-lg font-semibold text-text mb-4">{active.question}</h3>

            <h4 className="text-xs font-semibold text-accent mb-2 font-mono-tag uppercase">30-Second Answer</h4>
            <p className="text-sm text-text-muted mb-4">{active.shortAnswer}</p>

            <h4 className="text-xs font-semibold text-accent mb-2 font-mono-tag uppercase">Detailed Explanation</h4>
            <p className="text-sm text-text-muted whitespace-pre-line mb-4">{active.detailedAnswer}</p>

            {active.realWorld && (
              <>
                <h4 className="text-xs font-semibold text-accent mb-2 font-mono-tag uppercase">Real-World Example</h4>
                <p className="text-sm text-text-muted mb-4">{active.realWorld}</p>
              </>
            )}

            {active.commands && active.commands.length > 0 && (
              <>
                <h4 className="text-xs font-semibold text-accent mb-2 font-mono-tag uppercase">Commands</h4>
                <div className="space-y-1 mb-4">
                  {active.commands.map((cmd) => (
                    <code key={cmd} className="block rounded-md bg-bg-elevated-2 px-3 py-2 font-mono text-xs text-accent-2">
                      {cmd}
                    </code>
                  ))}
                </div>
              </>
            )}

            {active.followUp && active.followUp.length > 0 && (
              <>
                <h4 className="text-xs font-semibold text-accent mb-2 font-mono-tag uppercase">Follow-Up Questions</h4>
                <ul className="space-y-1">
                  {active.followUp.map((q) => (
                    <li key={q} className="flex items-start gap-2 text-xs text-text-muted">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                      {q}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ) : (
          <div className="text-center py-12 text-text-faint">
            <p className="text-3xl mb-3">?</p>
            <p className="text-sm">Select a question to see the full answer</p>
          </div>
        )}
      </div>
    </div>
  );
}