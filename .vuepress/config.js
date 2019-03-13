module.exports = {
  title: "Netlify",
  markdown: {
    config: md => {
      md.set({ breaks: true });
      md.use(require("markdown-it-anchor"));
      md.use(require("markdown-it-table-of-contents"));
    }
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      // {
      //   text: "Topic Group 1",
      //   items: [
      //     { text: "Page 1A", link: "/page-1a" },
      //     { text: "Page 1B", link: "/page-1b" },
      //     { text: "Page 1C", link: "/page-1c" }
      //   ]
      // }
    ],
    sidebar: [
      {
        title: "Topic Group 1",
        collapsable: false,
        children: ["/page-1a", "/page-1b", "/page-1c"]
      },
      {
        title: "Topic Group 2",
        collapsable: false,
        children: ["/page-2a", "/page-2b", "/page-2c"]
      }
    ]
  }
};
