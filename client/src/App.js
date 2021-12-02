import React, {useContext} from 'react'
import { UserContext } from './context'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import Auth from './pages/auth'
import EventsPage from './pages/event';


function App() {
  const [state, setState] = useContext(UserContext);
  console.log(state, "nav");
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/auth' component={Auth} exact />
        <Route path='/event' component= {EventsPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
