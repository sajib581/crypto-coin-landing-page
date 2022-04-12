import React from 'react';
import AkacoinSection from './AkacoinSection';
import Banner from './Banner';
import Footer from './Footer';
import HeroSection from './HeroSection';
import NetworkStatistics from './NetworkStatistics';
import QuickStart from './QuickStart';
import YourWallet from './YourWallet';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AkacoinSection/>
            <YourWallet/>
            <QuickStart/>
            <Banner/>
            <NetworkStatistics/>
            <Footer/>
        </div>
    );
};

export default Home;