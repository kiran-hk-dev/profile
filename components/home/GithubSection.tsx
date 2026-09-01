import { profile } from "@/data/profile";
import { staticRepositories } from "@/data/repositories";
import { getFeaturedRepositories } from "@/lib/github";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../icons/GithubIcon";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export async function GithubSection() {
  const liveRepos = await getFeaturedRepositories();
  const repos = liveRepos && liveRepos.length > 0 ? liveRepos : staticRepositories;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            index="06"
            title="GitHub"
            description="Repositories that reflect how I structure infrastructure and delivery code."
            className="mb-0"
          />
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-(--color-border-strong) px-4 py-2 text-sm font-medium text-(--color-text) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
          >
            <GithubIcon size={15} />
            View profile
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-(--color-border) bg-(--color-surface) p-5 transition-colors hover:border-(--color-border-strong)"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-sm text-(--color-text)">
                  {repo.name}
                </span>
                <ArrowUpRight
                  size={14}
                  className="mt-0.5 shrink-0 text-(--color-text-faint) transition-colors group-hover:text-(--color-accent)"
                />
              </div>
              <p className="mt-2 text-sm text-(--color-text-muted)">
                {repo.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1.5 text-xs text-(--color-text-faint)">
                  <span className="h-2 w-2 rounded-full bg-(--color-accent)" />
                  {repo.language}
                </span>
                {repo.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="rounded-md border border-(--color-border) px-2 py-0.5 text-[11px] text-(--color-text-faint)"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
