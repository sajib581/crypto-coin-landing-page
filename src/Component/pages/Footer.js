import {
    faFacebook,
    faGithub,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://i.ibb.co/6BkH9FZ/Logo.png" alt="" />
            <p className="mt-4 ">Living Ecosystem Decentralized Token </p>
            <div className="d-flex">
              <FontAwesomeIcon className="mr-3 icon" icon={faGithub} />
              <FontAwesomeIcon className="mr-3 icon" icon={faFacebook} />
              <FontAwesomeIcon className="mr-3 icon" icon={faInstagram} />
              <FontAwesomeIcon className="mr-3 icon" icon={faEarth} />
            </div>
          </div>
          <div className="col-md-2">
            <h6 className="font-weight-bold">Pages </h6>
            <ul className="list-unstyled mt-4">
              <li className="text-secondary">Network Statistic </li>
              <li className="text-secondary">What is AkaCoin </li>
              <li className="text-secondary">Wallets </li>
              <li className="text-secondary">Quick Start Guide </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="font-weight-bold">Learn </h6>
            <ul className="list-unstyled mt-4">
              <li className="text-secondary">Blog </li>
              <li className="text-secondary">Video </li>
              <li className="text-secondary">Podcast </li>
              <li className="text-secondary">Network states </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="font-weight-bold">Support </h6>
            <ul className="list-unstyled mt-4">
              <li className="text-secondary">Custommer Service </li>
              <li className="text-secondary">FAQ </li>
              <li className="text-secondary">Community </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="font-weight-bold">About AKA.Coin </h6>
            <ul className="list-unstyled mt-4">
              <li className="text-secondary">About us </li>
              <li className="text-secondary">Privacy policy </li>
              <li className="text-secondary">Term of use </li>
              <li className="text-secondary">Quick start guide</li>
              <li className="text-secondary">Language support </li>
              <li className="text-secondary">Cookie policy</li>
            </ul>
          </div>
        </div>   
        <p className="text-center">©2022 AKA.COIN. All right reserved</p>     
      </div>
      
    </footer>
  );
};

export default Footer;
