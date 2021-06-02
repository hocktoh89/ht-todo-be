const queries = {
    allItems: async (_parent, _args, context) => {
        return context.prisma.item.findMany();
    },
} 

module.exports = {
    itemQueries: queries,
}