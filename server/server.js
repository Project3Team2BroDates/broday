const express = require("express");
const { ApolloServer } = require("apollo-server-express");
// import { WebSocketLink } from "@apollo/client/link/ws";
const { PubSub } = require("graphql-yoga");
const path = require("path");


const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");

const PORT = process.env.PORT || 3001;
const app = express();
const pubsub = new PubSub();

// const link = new WebSocketLink({
//   uri: `ws://localhost:4000/`,
//   options: {
//     reconnect: true,
//   },
// });

const server = new ApolloServer({
  // link,
  typeDefs,
  resolvers,
  context: {authMiddleware, pubsub},
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.use(
  "/images",
  express.static(path.join(__dirname, "../client/public/images"))
);

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  console.log("ur mom");
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer();
