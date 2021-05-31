require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Keshav Kumar - Full-Stack Web Developer`,
    description: `Dedicated and efficient Full-Stack Web Developer based in India. I have been developing websites since 2015. I started developing websites for local businesses as a Freelancer using WordPress and then shifted to PHP & MySQL. Currently, my personal preference is MERN (MongoDB, ExpressJs, ReactJs & NodeJs) Stack and I am learning & developing projects on MERN Stack.`,
    author: `@keshavkumar_in`,
    siteUrl: "https://keshavkumar.in/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/media`,
        name: "media",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `r0pizu02a5ls`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-53KQ4YJYQT", // Google Analytics / GA
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
