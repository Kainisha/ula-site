const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Urszula Kuczyńska`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `logrodnicki@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@atoms': path.join(__dirname, 'src/components/atoms'),
        '@molecules': path.join(__dirname, 'src/components/molecules'),
        '@organisms': path.join(__dirname, 'src/components/organisms'),
        '@data': path.join(__dirname, 'src/data'),
        '@root': path.join(__dirname, 'src'),
        '@icons': path.join(__dirname, 'src/icons')
      }
    },
    `gatsby-plugin-scroll-indicator`,
    // {
    //   resolve: `gatsby-plugin-alias-imports`,
    //   options: {
    //     alias: {
    //       "@data": path.resolve(__dirname, "src/data"),
    //       "@molecules": path.resolve(__dirname, "src/components/molecules"),
    //     },
    //     extensions: ["js"]
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
