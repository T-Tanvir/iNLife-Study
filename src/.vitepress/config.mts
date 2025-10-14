import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === "lite-youtube",
      },
    },
  },

  srcDir: "docs",

  title: "iNLife Study",
  description: "My study life",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Starting",
        items: [{ text: "Intro", link: "/intro" }],
      },
      {
        text: "Physics",
        collapsed: false,
        items: [
          { text: "1st Paper", link: "/Physics/1st-Paper" },
          { text: "2nd Paper", link: "/Physics/2nd-Paper" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
