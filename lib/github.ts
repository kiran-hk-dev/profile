import { Repository } from "@/types";

const GITHUB_USERNAME =
  process.env.NEXT_PUBLIC_GITHUB_USERNAME || "kiranhk";

/**
 * Server-side fetch of public repositories for the configured GitHub user.
 * Falls back to null (rather than throwing) so the UI can gracefully show
 * the static repository configuration instead when the API is unreachable
 * or rate-limited.
 */
export async function getFeaturedRepositories(): Promise<Repository[] | null> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return null;

    const data = await res.json();
    if (!Array.isArray(data)) return null;

    return data
      .filter((repo) => !repo.fork)
      .slice(0, 6)
      .map((repo) => ({
        name: repo.name,
        description: repo.description || "No description provided.",
        url: repo.html_url,
        language: repo.language || "N/A",
        topics: repo.topics || [],
      }));
  } catch {
    return null;
  }
}
