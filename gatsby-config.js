module.exports = {
  siteMetadata: {
    title: `Keshav Kumar - Full-Stack Web Developer`,
    description: `Dedicated and efficient Full-Stack Web Developer based in India. I have been developing websites since 2015. I started developing websites for local businesses as a Freelancer using WordPress and then shifted to PHP & MySQL. Currently, my personal preference is MERN (MongoDB, ExpressJs, ReactJs & NodeJs) Stack and I am learning & developing projects on MERN Stack.`,
    author: `@keshavkumar_in`,
    siteUrl: "https://keshavkumar.in/",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
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
    // `gatsby-plugin-offline`,
  ],
}
