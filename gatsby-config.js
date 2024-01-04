module.exports = {
  siteMetadata: {
    title: `Segurat - Summa Insurance | Especialistas en seguros personales, patrimoniales y agrarios en Almenara, Castellón y Valencia.`,
    description: `En Segurat - Summa Insurance te ayudamos a encontrar las mejores pólizas de seguros en Almenara, Castellón y Valencia. Ahorra en tu seguro con asesoría personalizada y profesional por expertos en seguros personales, patrimoniales y agrarios.`,
    author: `Segurat - Summa Insurance`,
    siteUrl: 'https://segurat-summa.es',
  },
  flags: {
    THE_FLAG: false
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-Q27WRR1LJK',
          cookieName: 'gdprConsent',
          anonymize: false,
          allowAdFeatures: false,
        },
      },
    },
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
        lang: `es`,
        start_url: `/`,
        background_color: `#e5e7eb`,
        theme_color: `#e5e7eb`,
        display: `standalone`,
        icon: `src/images/favicon-summa-seguros.gif`,
        icons: [
          {
            src: `src/images/segurat-summa-insurance-192-w.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/segurat-summa-insurance-512-w.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
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
