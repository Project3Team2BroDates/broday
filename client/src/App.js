import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Meet from './pages/Meet'
import ActivitiesList from './pages/Activites';
import User from './pages/User';
import Bro from './pages/Bro';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Activites from './components/Activities';
import Friends from './pages/Friends';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container-1">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login"
                element={<Login />}
              />
              <Route 
                path="/signup"
                element={<Signup />}
              />
              <Route 
                path="/Friends"
                element={<Friends />}
              />
              <Route 
                path="/ActivitiesList"
                element={<ActivitiesList />}
              />
              {/* <Route 
                path="/user/:userId" 
                element={<User />} 
              /> */}
              <Route
              path="/user/:userId" 
              element={<Bro />}
              />
              <Route 
                path="/me" 
                element={<User />} 
              />
              <Route 
                path="/Meet"
                element={<Meet />}
              />
              <Route 
                path="/activities" 
                element={<Activites />} 
              />
              <Route 
                path="/Contact"
                element={<Contact />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;