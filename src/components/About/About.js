import React from 'react';
import Header from './../Header/Header';
import './About.css';
import About2 from '../About2/About2';
import CoFounders from '../CoFounders/CoFounders';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div>
            <Header></Header>
           <Fade bottom>
           <section className="mainAbout container">
        <h2 className="bolded text-center">About Us</h2>
        <div className="container secondAbouts">
            <div className="row about">
                <div className="col-sm-12 col-md-6 col-lg-6 ssd"> </div>
                <div className="col-sm-12 col-md-6 mt-5 col-lg-6 rtr">
                    <div className="imagexz">
                        <div className='sssc'> </div>
                        </div>
                        <div className="tex mt-5">
                        <p className=' tx'>
Million Careers is primarily a movement to ensure our country youth has a solid career,
 this organisation work towards helping them through training and guidance with every step of their career.</p>
                   
                        </div>
                </div>
            </div>
           <div className="details">
               <h1 className='name1 mt-4 mb-0'><b>Manish Barriarr</b></h1>
               <div className="info">
                   <h3 className='stattus m-0'>Founder</h3>
                   <p className='info2 '>
                       Said Business School, <br />
                       University of Oxford, <br />
                       Indian Institute of Foreign Trade(IIFT)
                   </p>
               </div>
           </div>
        </div>
      
    </section>
    <About2></About2>
    <CoFounders></CoFounders>
           </Fade>
        </div>
    );
};

export default About;