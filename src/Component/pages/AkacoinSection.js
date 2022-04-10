import { faArrowRightLong, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../styles/Akacoin_Section.css";
const AkacoinSection = () => {
  return (
    <section className="akacoin mt-5">
      <h2 className="text-center">What Is Akacoin?</h2>
      <div className="row my-5">
        <div className="col-5">
          <h2 className="akaTitle" > The fastest growing and community friendly </h2>
        </div>
        <div className="col-7 akacoinDesc">
          <p>
            What Is Akacoin? The fastest growing and community friendl Akacoin
            is the fastest blockchain in the world and the fastest growing
            ecosystem in crypto, with thousands of projects spanning DeFi, NFTs,
            Web3 and more. Explore Ecosystem Learn Akacoin Watch Video
          </p>
          <h6>Explore Ecosystem   <FontAwesomeIcon className="pl-4" icon={faArrowRightLong} /></h6>
        </div>
      </div>
      <div className="pb-5 mb-5 akaCoinImages">
        <div className="leftImg">
          <img src="https://i.ibb.co/0nP0YNm/Website.png" alt="" />
        </div>
        <div className="col-7 rightImg">
          <img src="https://i.ibb.co/CvCRMXk/Transition.png" alt="" />
          <div className=" watchVideo d-flex justify-content-between align-items-center">
            <div className="ml-2">
              <small className="text-white">Learn Akacoin</small>
              <h3 className="text-white">Watch Video</h3>
            </div>
            <h4 className="text-white mr-3"><FontAwesomeIcon icon={faPlay} /></h4>
          </div>
          <div className="player text-center"><h4 className="text-white"><FontAwesomeIcon icon={faPlay} /></h4></div>
        </div>
      </div>
    </section>
  );
};

export default AkacoinSection;
