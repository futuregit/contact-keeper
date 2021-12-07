// Fragment lets you group descendants without adding extra nodes to the DOM
import React, { Fragment } from 'react';
// BrowserRouter uses HTML5 history API to keep your UI in sync with the URL
// <Switch> is unique in that it renders a route exclusively. In contrast, every <Route> that matches the location renders inclusively. 
// Since v6 of react router Switch has been replaced with Routes.
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

import ContactState from './context/contact/ContactState';
import './App.css';

const App = () => {
  return (
    <ContactState>
      {/* Router must encompass entire app to use URL */}
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              {/* React-router v6 uses element={<Component/>} instead of
              component={Component} */}
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
