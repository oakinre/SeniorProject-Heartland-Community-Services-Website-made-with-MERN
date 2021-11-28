
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import SignInPage from './pages/auth'
import EventsPage from './pages/event';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/auth' component={SignInPage} exact />
        <Route path='/event' component= {EventsPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
