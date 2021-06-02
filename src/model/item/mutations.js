const mutations = {
    createItem: async (_parent, args, context) => {
        const { data } = args || {};
        const { name } = data;
        
        return context.prisma.item.create({
          data: {
              name
          }
        })
      },
}

module.exports = {
  itemMutations: mutations,
}