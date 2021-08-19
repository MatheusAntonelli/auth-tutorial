import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Preferences from './Components/Preferences';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginButton from './Components/Login/LoginButton';


function App() {

  return (
    <>
      <div className="wrapper">
        <h1>Login Application</h1>
        <LoginButton></LoginButton>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
            <Route path="/preferences">
              <Preferences/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
