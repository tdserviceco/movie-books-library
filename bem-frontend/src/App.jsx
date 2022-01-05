import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {
  Landing,
  HTMLErrorCodes,
  AllMoviesAndBooks,
  AllMoviesAndBooksByCategoryID,
  Books,
  Movies
} from './containers';
import { Footer } from './components';

const domain = import.meta.env.VITE_APP_DOMAIN ? import.meta.env.VITE_APP_DOMAIN : 'http://localhost:8082';
/** Apollo setup */
//Error link handler
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: `${domain}/graphql` })
])


const client = new ApolloClient({
  cache: new InMemoryCache,
  link: link
})

/**Apollo setup ends here */

const App = () => {


  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Landing />} />
          <Route index path='/movies' element={<Movies />} />
          <Route index path='/books' element={<Books />} />
          <Route index path='/all' element={<AllMoviesAndBooks />} />
          <Route index path='/all/category/:categoryID' element={<AllMoviesAndBooksByCategoryID />} />
          <Route path="*" element={<HTMLErrorCodes status={404} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;