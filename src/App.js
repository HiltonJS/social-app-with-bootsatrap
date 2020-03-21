import React from 'react';
import Navbar from './components/navBar/navbar.component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home/home.component';
import Login from './components/pages/login/login.component';
import Signup from './components/pages/signup/signup.component';
import './App.css';
import jwtDecode from 'jwt-decode';
import AuthRoute from './util/authRoute';
import axios from 'axios';

const token = localStorage.FBidToken;

axios.defaults.baseURL =
  'https://europe-west2-social-app-b651e.cloudfunctions.net/api';

let authenticated;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    console.log(decodedToken);
    window.location.href = '/login';
    authenticated = false;
  } else {
    authenticated = true;
  }
}
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <AuthRoute
            exact
            path="/login"
            component={Login}
            authenticated={authenticated}
          />
          <AuthRoute
            exact
            path="/signup"
            component={Signup}
            authenticated={authenticated}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
