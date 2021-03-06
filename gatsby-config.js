module.exports = {
  siteMetadata: {
    title: `<kayak /> | Web Developer & Designer`,
    // eslint-disable-next-line
    description: `Aussie web developer and designer availiable for hire. Committed to good code, good looks, and a good Vegemite sandwich.`,
    twitterUsername: `@by_k4y4k`,
    url: 'https://kayak.rocks',
    image: 'src/images/icon.png',
    author: 'kayak',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `<kayak /> | Web Developer & Designer`,
        short_name: `<kayak />`,
        start_url: `/`,
        background_color: `#915fee`,
        theme_color: `#915fee`,
        display: `standalone`,
        // This path is relative to the root of the site.
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {name: `src`, path: `${__dirname}/src/`},
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end excerpt -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 960,
              linkImagesToOriginal: false,
              showCaptions: [`alt`, `title`],
              withWebp: true,
              backgroundColor: `#050509`,
              quality: 90,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: '›',
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {javascript: 'js'},
            },
          },
          `gatsby-remark-twemoji-shortcut`,
          {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: 'UA-141223900-1',
              head: false,
              respectDNT: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat:900i', 'Fira Sans:400,400i'],
        },
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App
    // + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
