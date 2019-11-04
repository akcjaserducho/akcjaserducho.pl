module.exports = {
  siteMetadata: {
    title: `Akcja Serducho`,
    description: `Fundacja Akcja Serducho - osoby z wielkimi sercami podejmują sie pracy z młodzieżą i ich rodzinami, którzy w swoim życiu doświadczyli wielu trudności. Wierzymy, że ci, do których chcemy wyjść i o których pragniemy powalczyć mają w sobie ogromny potencjał, który jest jednak zasłonięty cierpieniem, wyuczoną bezradnością, poczuciem beznadziejności czy brakiem wiary w siebie.`,
    author: `Trojnacki & Draganek`,
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
        name: `Akcja Serducho`,
        short_name: `Akcja Serducho`,
        start_url: `/`,
        lang: `pl`,
        background_color: `#800000`,
        theme_color: `#800000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
