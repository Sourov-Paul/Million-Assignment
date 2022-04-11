import React from 'react';
import './Banner.css';
import ReactPlayer from 'react-player';
import Fade from 'react-reveal/Fade';

const Banner = () => {
    return (
        <div>
            
<section className="firstSection container">
  <div className="mainBanner row d-flex justify-content-around">
      <div className="col-sm-12 col-md-6 col-lg-6 mt-5 writeBanner ">
        <Fade top>
        <div className="p-2">
          <h3 className="million">
            What is Million <br/> Careers?
        </h3>
        <p className="textss serClr ml-4">
           Millioncareers is primarily a movement to ensure our country's youth
  has a solid career, this organisation work towards helping them
  through training and guidance with every step of their career.
        </p>
         </div>
        </Fade>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 leftBanner">
      <Fade top>
      <ReactPlayer 
    className=' m-auto p-2'
      controls
      light="https://i.postimg.cc/6qz58rj9/youtube.png"
       url='https://www.youtube.com/watch?v=7sDY4m8KNLc'/>

       
      </Fade>
      </div>
  </div>
  </section>
  
        </div>
    );
};

export default Banner;