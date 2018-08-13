import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";

const testSchema = `
  type Query {
    hi: String
  }
`;

const typeDefs = [testSchema, ResolutionsSchema];

const resolvers = {
  Query: {
    hi() {
      return "Hello level up";
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
