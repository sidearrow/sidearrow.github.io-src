module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/content`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
      }
    }
  ],
}
