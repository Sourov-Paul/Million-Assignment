import React from 'react';
import ReactPlayer from 'react-player';
import Fade from 'react-reveal/Fade';

const About2 = () => {
    return (
       <>
       <Fade bottom>
       <div className='container'>
            <div className="row m-auto">
            <div className="col-sm-12 col-md-12 col-lg-12">
            <ReactPlayer 
    className=' m-auto p-2'
      controls
      light="https://i.postimg.cc/6qz58rj9/youtube.png"
       url='https://www.youtube.com/watch?v=7sDY4m8KNLc'/>

       
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="textes">
                    <h2><b>About Us</b></h2>
                    <p className='aboutText'>
About us 
Million Careers is not just a name, it's rather a vision to save and secure the career of million people with numerous opportunities for job hunting, consulting with a mentor, or taking online classes. It'll provide self- enriching development. We invest and provide our youth with the resources, tools, and support they need to refine and cultivate their strengths and overcome their weaknesses. We will reach every block of India so that the untapped potential of the youths of every region can be harnessed.
 In a nutshell, Million Careers will ensure that each and every youth of India has employment.</p>
                </div>
            </div>
        </div>
        </div>
       </Fade>
       </>
    );
};

export default About2;