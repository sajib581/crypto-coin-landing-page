import React from 'react';
import '../../styles/YourWallet.css';
import Wallet from '../Wallet';

const YourWallet = () => {
    return (
        <div className="yourWallet container mb-5 pb-5">
            <h2 className="text-center">Choose Your Wallets</h2>
            <div className="d-flex justify-content-between mt-5 pt-2">
            <Wallet
                image="https://i.ibb.co/HrPjzmb/Aka-Wallet.png"
                name = "AkaWallet"
                description="Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide" 
            />
            <Wallet
                image="https://i.ibb.co/NYR4z1H/AkaSafe.png"
                name = "AkaSafe"
                description="AkaSafe wallet is a secure, decentralized, easy-to-use, and free application to manage more than 10,000 cryptocurrencies." 
                backgroundColor="#FFD456" 
                ellipseColor="#EEBC28"
            />
            <Wallet
                image="https://i.ibb.co/rtN4S6m/AkaMask.png"
                name = "AkaMask"
                description="AkaMask is a decentralized multi-chain digital wallet, dedicated to providing safe and convenient one-stop digital asset management services to users around the world." 
            />
            </div>
        </div>
    );
};

export default YourWallet;