import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

const Routes = ({ token }) => (
  <Switch>
    {/* conditional logic that routes to login when no token */}

    <Route path="/" />
    {/* / path will be the main application when logged in, display todos here */}

    <Route path="/login" />
    {/* The login component should reload the page when rendered so that the session is cleared */}

    {/* conditional logic that redirects to login when no token */}
    <Route path="/create-account" />

    {/* conditionally render a route called create-todo if there is a token */}
    <Route path="/create-todo" />
  </Switch>
);
