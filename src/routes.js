import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import SignupsPage from './components/signups/SignupsPage';
import ManageSignupPage from './components/signups/ManageSignupPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/about" component={AboutPage} />
    <Route path="/signups" component={SignupsPage} />
    <Route path="/signup" component={ManageSignupPage} />
    <Route path="/signup/:id" component={ManageSignupPage} />
  </Route>
);
