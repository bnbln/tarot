/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: 'TarotCards',
            collection: 'deck',
            map: doc => ({
              id: doc.id,
              slug: doc.slug,
              title: doc.title,
              class: doc.class,
              description: {
                lead: doc.lead,
                
                list: {
                  positive: doc.positive !== undefined ? doc.positive[0] : null,
                  negative: doc.negative !== undefined ? doc.negative[0] : null,
                },
                time: doc.time
              },
              assets: {
                image: doc.url               
              }
              // author___NODE: doc.author.id,
            }),
          },
          // {
          //   type: 'Author',
          //   collection: 'authors',
          //   map: doc => ({
          //     name: doc.name,
          //     country: doc.country,
          //     books___NODE: doc.books.map(book => book.id),
          //   }),
          // },
        ],
      },
    },
  ],
}
