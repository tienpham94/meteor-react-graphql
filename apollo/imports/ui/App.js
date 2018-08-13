import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const App = ({ data }) =>
  data.loading ? null : (
    <div>
      <h1>{data.hi}</h1>
      <ul>
        {data.resolutions.map(r => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
    </div>
  );

const hiQuery = gql`
  {
    hi
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(hiQuery)(App);
