import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import Auth from './pages/auth';
import MyAccount from './pages/account';
import EventsPage from './pages/event';
import ProductForm from './pages/product';
import AdminPage from './pages/adminauth';
import AdminCreate from './pages/adminsign';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/auth' component={Auth} exact />
        <Route path='/myacc' component= {MyAccount} exact />
        <Route path='/event'  component= {EventsPage} exact />
        <Route path='/product' component={ProductForm}></Route>
        <Route path='/admin' component={AdminPage}></Route>
        <Route path='/adminCreate' component={AdminCreate}></Route>
      </Switch>
    </Router>
  );
}

export default App;
