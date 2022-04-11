import React from 'react';
import '../../styles/Quic_Start.css';

const QuickStart = () => {
    return (
        <section className="quickStart container">
            <h2 className="text-center">Quick Start Guide</h2>
            <div className="group mt-5 pt-3">
                <div className="bag d-flex align-items-center mb-3">
                <div className=" d-flex justify-content-center align-items-center toasts">
                    <img src="https://i.ibb.co/fMXQ88g/Wallet.png" alt="" />
                    <div className="ml-4">
                        <h5>1. Create a wallet</h5>
                        <p>Create a Wallet using either a desktop computer or an mobile device</p>
                    </div>
                </div>
                </div>        
                <div className="bag d-flex align-items-center mb-3">
                <div className=" d-flex justify-content-center align-items-center toasts">
                    <img src="https://i.ibb.co/9gRGKRJ/Hand-Hold-Bitcoin.png" alt="" />
                    <div className="ml-4">
                        <h5>2. Buy ETH</h5>
                        <p>You can buy Ethereum (ETH) directly on MetaMask or transfer it</p>
                    </div>
                </div>
                </div>   
                <div className="bag d-flex align-items-center mb-3">
                <div className=" d-flex justify-content-center align-items-center toasts">
                    <img src="https://i.ibb.co/2gg1MwN/Laptop.png" alt="" />
                    <div className="ml-4">
                        <h5>3. Connect your wallet</h5>
                        <p>Access your wallet to AoaSwap by clicking ‘Connect to a wallet’</p>
                    </div>
                </div>
                </div>   
                <div className="bag d-flex align-items-center mb-3">
                <div className=" d-flex justify-content-center align-items-center toasts">
                    <img src="https://i.ibb.co/F5Py8BT/Machine.png" alt="" />
                    <div className="ml-4">
                        <h5>4. Swap ETH to AKO</h5>
                        <p>You can start swapping as you have ETH available! Press ‘Select a token’ </p>
                    </div>
                </div>
                </div>   
            </div>
        </section>
    );
};

export default QuickStart;