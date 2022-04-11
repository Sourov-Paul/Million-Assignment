import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import JobSection from '../JobSection/JobSection';
import VideoPlay from '../VideoPlay/VideoPlay';
import VisionMission from '../VisionMission/VisionMission';
import Header from './../Header/Header';

const Home = () => {
    return (
        <div>
        
              <Header></Header>
      <Banner></Banner>
      <VisionMission></VisionMission>
      <VideoPlay></VideoPlay>
      <JobSection></JobSection>
      <Footer></Footer>
        
        
        </div>
    );
};

export default Home;