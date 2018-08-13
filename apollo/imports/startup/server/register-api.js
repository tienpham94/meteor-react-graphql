import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";

const testSchema = `
  type Query {
    hi: String
    resolutions: [Resolution]
  }
`;

const typeDefs = [testSchema, ResolutionsSchema];

const resolvers = {
  Query: {
    hi() {
      return "Hello level up";
    },
    resolutions() {
      return [
        {
          _id: "asfasffsd",
          name: "Get stuff done!"
        },
        {
          _id: "asfasffsffd",
          name: "Lose some weight!"
        },
      ];
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
