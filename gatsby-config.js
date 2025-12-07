require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Segurat - Summa Insurance | Especialistas en seguros personales, patrimoniales y agrarios en Almenara, Castellón y Valencia.`,
    description: `En Segurat - Summa Insurance te ayudamos a encontrar las mejores pólizas de seguros en Almenara, Castellón y Valencia. Ahorra en tu seguro con asesoría personalizada y profesional por expertos en seguros personales, patrimoniales y agrarios.`,
    author: `Segurat - Summa Insurance`,
    siteUrl: 'https://segurat-summa.es',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-Q27WRR1LJK', // Your Google Analytics tracking ID
          cookieName: 'gatsby-gdpr-google-analytics', // Custom cookie name
          anonymize: true, // GDPR settings
          allowAdFeatures: false
        },
        // Define the environments where the tracking should be active
        environments: ['production'], // Only enable tracking in production
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-netlify",
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
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,     // set true temporarily to confirm it was stripping slick
        develop: false,
        tailwind: true,
        safelist: [
          /^slick/,              
          /^hero-slick$/,        
        ],
      },
    },
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
