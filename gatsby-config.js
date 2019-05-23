module.exports = {
  siteMetadata: {
    title: 'Hiperative - Software & Design Studio',
    description:
      'Hiperative is a Barcelona based software & design studio. We build fot the web.',
    keywords:
      'hiperative, hiperative studio, hiperative.com, software, design, ui, ux, user interface, user experience, uiux, apps, branding, brand, development, web, studio, node.js, javascript, js, react, ecommerce, webgl,  applications, webapp, webapps, nodejs, elasticsearch, couchbase, couchdb, npm, ipfs, iplf, dapp, dapps, decentralised, decentralized',
    author: '@rafaelllycan',
    url: 'https://hiperative.com'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/img`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Hiperative Studio',
        short_name: 'Hiperative',
        start_url: '/',
        background_color: '#f1f1f1',
        theme_color: '#f1f1f1',
        display: 'standalone',
        icon: 'src/assets/img/Hiperative_Logo.png' // This path is relative to the root of the site.
      }
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline'
  ]
};
