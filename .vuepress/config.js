module.exports = {
  title: "Grey Software",
  description: "",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["link", { rel: "stylesheet", href: "/font-awesome-all.css" }],
    ["link", { rel: "stylesheet", href: "/font-awesome-all.css" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    ["script", { src: "https://plausible.io/js/plausible.js", dataDomain: "org.grey.software", async: true, defer: true }]
  ],
  themeConfig: {
    logo: "/logos/logo.png",
    repo: "https://github.com/grey-software/org",
    editLinks: true,
    editLinkText: "Help us improve the Grey Software website!",
    lastUpdated: "Last Updated",
    searchPlaceholder: "Explore...",
    smoothScroll: true,
    nav: [
      { text: "Vision", link: "/about/" },
      { text: "Projects", link: "/projects/" },
      { text: "Team", link: "/team/" },
      { text: "Weekly Updates", link: "/this-week/" },
      {
        text: "LinkedIn",
        link: "https://www.linkedin.com/company/grey-software",
      },

      { text: "AngelList", link: "https://angel.co/company/grey-software" },
    ],
  },
  dest: ".vuepress/dist",
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "Grey Software",
      description: "The org website for Grey Software",
    },
  },
  chainWebpack: (config) => {
    config.module.rules.delete("svg");
    config.module
      .rule("svg")
      .test(/\.svg$/)
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .end();
  },
};
