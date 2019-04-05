import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './containers/App';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  request: async operation => {
    const token = operation.getContext().cache.data.data.ROOT_QUERY.token;
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  },
  clientState: {
    defaults: {
      token: '',
      email: '',
      name: ''
    }
  }
});
const ApolloComponent = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(
  <BrowserRouter>
    <ApolloComponent />
  </BrowserRouter>,
  document.getElementById('root')
);
