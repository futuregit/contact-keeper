import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
// A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a <Link> renders an accessible <a> element with a real href that points to the resource it's linking to.
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

// Navbar will be taking 2 destructered props
const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name} </li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        {/* Use icon props for className */}
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

// Make sure passed in props are of declared types
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

// If either props is undefined use these values
Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fa fa-id-card-alt",
};

export default Navbar;
