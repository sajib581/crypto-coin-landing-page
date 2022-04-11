import { faArrowRightLong, faDesktop, faEarth, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/Wallet.css';

const Wallet = ({image, name, description, backgroundColor="#1F33D8", ellipseColor="#0C20CB"}) => {
    const style= name==="AkaSafe" ? {background : "#1F33D8", color: "black"} : {background : ellipseColor};
    return (
        <div style={{background : backgroundColor}} className={`wallet ${name==="AkaSafe"?"text-dark":""}`}>
            <div className="d-flex mb-5">
                <img src={image} alt="" />
                <h2 className="ml-3">{name}</h2>
            </div>
            <div className="d-flex">
                <p className="mb-4 ">{description}</p>
            </div>
            <div>
                <FontAwesomeIcon className="mr-2" icon={faMobileScreen} />
                <FontAwesomeIcon className="mr-2" icon={faDesktop} />
                <FontAwesomeIcon className="mr-2" icon={faEarth} />
            </div>
            <div style={style} className="one"></div>
            <div  style={style} className="two"></div>
            <div style={style} className="three">
            <h6 className="ml-5 mt-3">Choose  wallet   <FontAwesomeIcon className="pl-2 arrow" icon={faArrowRightLong} /></h6>
            </div>
            
        </div>
    );
};

export default Wallet;