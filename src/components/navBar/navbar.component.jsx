import React, { Component } from 'react';
import './navbar.scss';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import profileImage from '../../images/profile.jpg';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-lightt">
        <Link className="navbar-brand" to="/">
          <img src={Logo} width="30" height="30" alt="logo" />
          BlueBerry
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <ion-icon name="home-outline"></ion-icon>{' '}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fas fa-home"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <i className="fas fa-plus-circle"></i>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="/login">
                <img
                  src={profileImage}
                  alt="profile-img"
                  className="profile-image"
                />
              </Link>
            </li>
            <li className="nav-item ">
              <div className="btn-group">
                <button
                  class="btn  btn-link btn-lg dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></button>
                <div class="dropdown-menu">...</div>
              </div>
            </li>
          </ul>

          <Link to="/login">
            <button type="button mr-sm-2" class="btn btn-success">
              Danger
            </button>
          </Link>
          <Link to="/signup">
            <button type="button  mr-sm-2" class="btn btn-info">
              SignUp
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
