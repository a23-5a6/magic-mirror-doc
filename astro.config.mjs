import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  base: "/magic-mirror-doc",
  integrations: [
    starlight({
      title: "Magic Mirror",
      social: {
        github: "https://github.com/withastro/starlight",
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
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Socket",
          autogenerate: { directory: "socket" },
        },
      ],
    }),
  ],
});
