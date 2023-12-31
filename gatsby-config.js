module.exports = {
  siteMetadata: {
    title: `Segurat - Summa Insurance: Especialistas en seguros patrimoniales y agrarios en Almenara, Castellón y Valencia.`,
    description: `En Summa Insurance - Segurat te ayudamos a encontrar las mejores pólizas de seguros en Almenara, Castellón y Valencia. Ahorra en tu seguro con asesoría personalizada y profesional por expertos en seguros patrimoniales y agrarios.`,
    author: `Segurat - Summa Insurance`,
  },
  flags: {
    THE_FLAG: false
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Segurat - Summa Insurance`,
        short_name: `Segurat`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-summa-seguros.gif`, 
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-Q27WRR1LJK",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "segurat-summa.es",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    }
  ],
}
