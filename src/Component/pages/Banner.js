import React from 'react';
import '../../styles/Banner.css';
import BannerDemo from '../BannerDemo';
const Banner = () => {
    return (
        <div className="banner container d-flex justify-content-between ">
            <BannerDemo
                name = "Akacoin Community"
                description="There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing." 
                bottomElllipseColor="#FFD456"
            />
            <BannerDemo
                name = "Become a Validator"
                description="Help secure the network by running decentralized infrastructure. Learn about operating a validator node." 
                backgroundColor="#FFD456" 
                ellipseColor="#EEBC28"
                bottomElllipseColor="#1F33D8"
            />
            <BannerDemo
                name = "Dev. Resource"
                description="See the get started guide, videos, tutorials, SDKs, reference implementations, and more.  "
                bottomElllipseColor="#FFD456"
            />
        </div>
    );
};

export default Banner;