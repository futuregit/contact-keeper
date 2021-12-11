// Fragment lets you group descendants without adding extra nodes to the DOM
import React, { Fragment } from "react";
// BrowserRouter uses HTML5 history API to keep your UI in sync with the URL
// <Switch> is unique in that it renders a route exclusively. In contrast, every <Route> that matches the location renders inclusively.
// Since v6 of react router Switch has been replaced with Routes.
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

if (localStorage) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          {/* Router must encompass entire app to use URL */}
          <Router>
            <Fragment>
              <Navbar />
              <Alerts />
              <div className="container">
                <Switch>
                  {/* React-router v6 uses element={<Component/>} instead of
              component={Component} */}
                  <Route path="/" element={<PrivateRoute redirect="/login" element={<Home />} />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/login" element={<Login />} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
