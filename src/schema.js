const { makeExecutableSchema } = require('apollo-server');
const { resolvers } = require('./model/resolvers');

const typeDefs = `

type Query {
    allItems: [Item!]!
}

type Mutation {
    createItem(data: ItemCreateInput!): Item
}

input ItemCreateInput {
    name: String
}

type Item {
    id: Int!
    name: String
}
`

const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
  })

module.exports = {
    schema,
}