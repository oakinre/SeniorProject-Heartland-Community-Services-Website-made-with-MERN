import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import Auth from './pages/auth'
import MyAccount from './pages/account'
import EventsPage from './pages/event';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/auth' component={Auth} exact />
        <Route path='/myacc' component= {MyAccount} exact />
        <Route path='/event'  component= {EventsPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
