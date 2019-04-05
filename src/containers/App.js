import React from 'react';
import Header from '../components/Header/Header';
import gql from 'graphql-tag';
import { useQuery, useApolloClient } from 'react-apollo-hooks';
import Spinner from '../components/UI/Spinner/Spinner';

const LOGIN_QUERY = gql`
  query LoginQuery {
    loginUser(
      input: { username: "13bfrancis@gmail.com", password: "password" }
    ) {
      token
      username
    }
  }
`;

const App = () => {
  //have local state for username and token and assign it to the results of a use query hook
  const client = useApolloClient();
  const { data, loading, error } = useQuery(LOGIN_QUERY);
  if (error) {
    console.log(error);
    return '...error';
  }
  if (!loading) {
    client.writeData({
      data: {
        token: data.loginUser.token
      }
    });
  }
  return (
    <>
      <Header>
        <div>To Do List App</div>
      </Header>
      {loading ? <Spinner /> : <p>{data.loginUser.username}</p>}
    </>
  );
};

export default App;
