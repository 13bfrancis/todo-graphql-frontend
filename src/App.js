import React, { Component } from 'react';
import Header from './components/Header/Header';
import gql from 'graphql-tag';
import { useQuery, useApolloClient } from 'react-apollo-hooks';

const LOGIN_QUERY = gql`
  query LoginQuery {
    loginUser(input: { email: "13bfrancis@gmail.com", password: "password" }) {
      token
      name
    }
  }
`;

const App = () => {
  const client = useApolloClient();
  const { data, loading, error } = useQuery(LOGIN_QUERY);
  if (loading) {
    return '...loading';
  }
  if (error) {
    console.log(error);
    return '...error';
  }
  console.log(data);
  client.writeData({
    data: {
      token: data.loginUser.token
    }
  });
  return (
    <>
      <Header>
        <div>To Do List App</div>
      </Header>
      <p>{data.loginUser.name}</p>
    </>
  );
};

export default App;
