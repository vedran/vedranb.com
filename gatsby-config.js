module.exports = {
  siteMetadata: {
    title: `Vedran Budimcic`,
    author: `Vedran Budimcic`,
    description: `Personal site`,
    siteUrl: `https://vedranb.com`,
    social: {
      twitter: `@vbudimcic`,
      github: `vedran`,
      email: `vedranb+site@gmail.com`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              removeAccents: true,
              isIconAfterHeader: true,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-28210494-1`,
      },
    },
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vedran Budimcic`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    // Fix for https://github.com/gatsbyjs/gatsby/issues/17595
    {
      resolve: `gatsby-remark-images`,
      options: {
        linkImagesToOriginal: false,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
