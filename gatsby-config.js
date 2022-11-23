/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Bartosz Kazuła CV`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-postcss",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-42640749-2",
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-postcss",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/`,
                ignore: [`**/\.*`], // ignore files starting with a dot
            },
        },
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Kalam`, `Lato`],
                display: "swap",
            },
        },
    ],
};
