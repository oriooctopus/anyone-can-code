export const resolvers = {
  //   Query: {
  //     Editor: {
  //       code:
  //     },
  //   },
  Mutation: {
    setEditorCode: (_root, { code }, { cache }) => {
      cache.writeData({
        editor: {
          code,
        },
      });

      return code;
    },
  },
};
