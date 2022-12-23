/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require(`path`);

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  /* assetPrefix: './dist', */
  /*   assetPrefix: '__GATSBY_RELATIVE_PATH__', */
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: ['./src/css/variables.scss'],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `assets/images`),
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Студсервис',
        short_name: 'Студсервис',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: './src/assets/images/favicon.png',
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `none`,
          quality: 90,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    /*     `@wardpeet/gatsby-plugin-static-site`,
    'gatsby-plugin-relative-paths', */
  ],
};
