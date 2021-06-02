const { itemQueries } = require('./item/queries')
const { itemMutations } = require('./item/mutations')

const resolvers = {
    Query: {...itemQueries},
    Mutation: {...itemMutations},
}

module.exports = {
    resolvers: resolvers,
}