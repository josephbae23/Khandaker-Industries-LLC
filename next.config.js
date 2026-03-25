/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : "";
const isUserOrOrgPages = repositoryName.endsWith(".github.io");
const basePath = isGithubActions && !isUserOrOrgPages ? `/${repositoryName}` : "";

const nextConfig = {
  // Only use static export for GitHub Pages, not for Vercel
  ...(isGithubActions && {
    output: "export",
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  }),
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  serverExternalPackages: [],
}

module.exports = nextConfig
