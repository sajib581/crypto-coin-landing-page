import { faEarth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Nav.module.css';

const Nav = () => {
  return (
    <div className="mx-5 px-3">
      <nav className="navbar navbar-expand-lg navbar-light ">
      <Link className="navbar-brand" to="/">
          <img
            src="https://i.ibb.co/6BkH9FZ/Logo.png"
            alt=""
          />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto pr-5">
            <li className="nav-item active ml-3">
              <a className="nav-link" href="#">Ecosystem </a>
            </li>
            <li className="nav-item active ml-3">
              <a className="nav-link" href="#">Buy </a>
            </li>
            <li className="nav-item active ml-3">
              <a className="nav-link" href="#">What is AKO? </a>
            </li>
            <li className="nav-item active ml-3">
              <a className="nav-link" href="#">Learn </a>
            </li>
            <li className="nav-item active ml-3">
              <a className="nav-link" href="#">Community </a>
            </li>
            <li className="nav-item dropdown ml-3 text-black">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={faEarth} />
              </a>
              <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;