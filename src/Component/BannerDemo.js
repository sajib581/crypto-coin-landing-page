import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/BannerDemo.css';

const BannerDemo = ({ name, description, backgroundColor = "#1F33D8", ellipseColor = "#0C20CB" , bottomElllipseColor}) => {
    const style = name.includes("Become") ? { background: "#EEBC28", color: "black" } : { background: ellipseColor };
    return (
        <div style={{ background: backgroundColor }} className={`bannerDemo ${name.includes("Become") ? "text-dark" : ""}`}>
            <div className="d-flex mb-5">
                <h2 className="ml-3">{name}</h2>
            </div>
            <div className="d-flex">
                <p className="mb-4">{description}</p>
            </div>
            <div style={style} className="one"></div>
            <div style={style} className="two"></div>
            <div style={{...style, background: bottomElllipseColor}}  className="three">
                <h6 className="ml-5 mt-3">Choose  wallet   <FontAwesomeIcon className="pl-2 arrow" icon={faArrowRightLong} /></h6>
            </div>
            <div style={style}  className="four"></div>

        </div>
    );
};

export default BannerDemo;