import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  base: "/magic-mirror-doc",
  integrations: [
    starlight({
      title: "Magic Mirror",
      social: {
        github: "https://github.com/a23-5a6/",
      },
      sidebar: [
        {
          label: "Welcome",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Blah", link: "/magic-mirror/" },
          ],
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "API",
          autogenerate: { directory: "api" },
        },
        {
          label: "App",
          autogenerate: { directory: "app" },
        },
        {
          label: "Packages",
          autogenerate: { directory: "package" },
        },
        {
          label: "Gateway",
          autogenerate: { directory: "gateway" },
        },
      ],
    }),
  ],
});
