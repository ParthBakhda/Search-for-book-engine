const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./path/to/your/schema-and-resolvers');

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

const PORT = 4000; // Replace with your desired port number

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});



const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./path/to/your/schema');
const { resolvers } = require('./path/to/your/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const express = require('express');
const app = express();

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});




import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
