import { defineConfig, markdown, openapi } from "sourcey";

export default defineConfig({
  name: "Gitea API",
  siteUrl: "https://ghulammujtabaquotex-cloud.github.io",
  baseUrl: "/gitea-api-docs",
  landingPage: true,
  repo: "https://github.com/go-gitea/gitea",
  editBranch: "main",
  editBasePath: "",
  prettyUrls: "strip",
  navigation: {
    tabs: [
      {
        tab: "Guide",
        slug: "",
        source: markdown({
          root: "docs",
          groups: [
            {
              group: "Overview",
              pages: ["index", "introduction", "coverage", "gaps"],
            },
          ],
        }),
      },
      {
        tab: "API Reference",
        slug: "api",
        source: openapi("./gitea-openapi.json"),
      },
    ],
  },
});
