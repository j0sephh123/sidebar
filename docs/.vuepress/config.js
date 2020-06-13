module.exports = {
  title: 'Joseph Documentation',
  description: 'Just playing around with Vuepress',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vuepress docs', link: 'https://vuepress.vuejs.org/guide/' },
      { text: 'My favorite website', link: 'https://designcode.io/' },
    ],
    sidebarDepth: 2,
    displayAllHeaders: false,
    sidebar: [
      {
        title: "sidebar",
        path: "/sidebar/",
        collapsible: true,
        sidebarDepth: 2,
      },
      {
        title: "WP - The king",
        path: "/wp/",
        collapsible: true,
        sidebarDepth: 2,
        children: [
          ['/wp/quickstart', 'Quickstart'],
        ]
      },
      {
        title: "jquery",
        path: "/jquery/",
        collapsible: true,
        sidebarDepth: 2,
      },
      {
        title: "Gatsby",
        path: "/gatsby/",
        collapsible: true,
        sidebarDepth: 2,
        children: [
          ['/gatsby/wp_gatsby', 'Wp and Gatsby'],
          ['/gatsby/css_modules', 'CSS Modules'],
          ['/gatsby/styled_components', 'Styled Components'],
          ['/gatsby/importing_json_and_yaml', 'Importing JSON and YAML'],
          ['/gatsby/mdx', 'MDX'],
          ['/gatsby/showcases', 'Showcases'],
          ['/gatsby/working_with_svg', 'Working with SVG'],
        ]
      },
      {
        title: "React",
        path: "/react/",
        collapsible: true,
        sidebarDepth: 2,
        children: [
          ['/react/icons', 'Icons'],
          ['/react/modal', 'Modal'],
          ['/react/tooltip', 'Tooltip'],
        ]
      },
      {
        title: "PixiJS",
        path: "/pixijs/",
        collapsible: true,
        sidebarDepth: 2,
      },
      {
        title: "CPP",
        path: "/cpp/",
        collapsible: true,
        sidebarDepth: 2,
        children: [
          ['/cpp/', 'CPP'],
        ]
      },
      {
        title: "Python",
        path: "/python/",
        collapsible: true,
        sidebarDepth: 2,
        children: [
          ['/python/django/', 'Django'],
        ]
      },

      {
        title: "CodeWars",
        path: "/codewars/",
        collapsible: true,
        sidebarDepth: 2,
        children: [
          ['/codewars/vowelCount', 'vowelCount'],
          ['/codewars/multiples_of_3_or_5', 'multiples_of_3_or_5'],
        ]
      },

      {
        title: "Vue",
        path: "/vue/",
        collapsible: true,
        sidebarDepth: 2,
        children: [
          ['/vue/interpolation', 'Interpolation'],
        ]
      },
      {
        title: "Emacs",
        path: "/emacs/",
        collapsible: true,
        sidebarDepth: 2,
        
      },
      // '/',
      // '/js',
      // ['/React/Gatsby', 'Gatsby'],
      // ['/codewars/vowelCount', 'vowelCount'],
      // ['/codewars/multiples_of_3_or_5', 'Multiples of 3 or 5'],
    ]
  },
}