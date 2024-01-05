/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Bartosz Kazuła CV`,
        siteUrl: `https://kazula.eu`,
    },
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-postcss",
        "gatsby-transformer-json",
        "gatsby-plugin-image",
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
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Kalam`, `Lato`],
                display: "swap",
            },
        },
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: "hdm6kqob",
                dataset: "production",
                watchMode: true,
                overlayDrafts: true,
            },
        },
    ],
};
