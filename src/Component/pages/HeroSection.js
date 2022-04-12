
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import '../../styles/HeroSection.css';
import Nav from '../Nav';
import './test.css';
const HeroSection = () => {
    const [headerData, setHeaderData] = useState({})
    useEffect(()=>{
      fetch('http://localhost:5000/getHeader')
      .then(res => res.json() )
      .then(data =>{
        setHeaderData(data)
      })
    }, [])
    return (
        <section className="heroSection">
            <Nav/>
            <div className="row ml-md-5 pl-md-3" >
                <div className="col-md-6 left my-auto">
                    <div >
                    <h5 className="intro">Introducing <span className="aka">AKA</span> <span className="coin">COIN</span></h5>
                    <h1 className="living">{headerData.title ? headerData.title : "Living Ecosystem Decentralized Token"}</h1>
                    <p>{headerData.description ? headerData.description : "Akacoin is a open source peer-to-peer digital currency,community-run technology that supports cryptocurrencies and thousands of decentralized applications."}</p>
                    <div className="btns d-flex">
                        <button className='getStarted' type='button' >GetStarted</button>
                        <button className='source ml-md-4' type='button' ><FontAwesomeIcon className="mr-2" icon={faGithub} />Source</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 right">
                    <img src={headerData.img? headerData.img : "https://i.ibb.co/pXcwbrc/Image.png"} alt="" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
