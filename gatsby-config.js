module.exports = {
  siteMetadata: {
    title: `Keshav Kumar - Full Stack Web Developer`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@keshavkumar_in`,
    siteUrl: "https://keshavkumar.in/",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "content",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/media`,
        name: "media",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Keshav Kumar`,
        short_name: `Keshav Kumar`,
        start_url: `/`,
        background_color: `#df5a08`,
        theme_color: `#df5a08`,
        display: `standalone`,
        icon: `static/media/profile-img.png`,
        icons: [
          {
            src: "static/media/profile-img.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "static/media/maskable_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
