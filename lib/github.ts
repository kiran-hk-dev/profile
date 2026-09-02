// Optional helper if you later want to pull repositories dynamically from
// the GitHub REST API instead of maintaining data/repositories.ts by hand.
// Not called anywhere by default — wire it into a Server Component if needed.

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}
