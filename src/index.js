import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';

import './index.css';
import App from './App';

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

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
