import React from 'react';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer/Footer';
import './CoFounders.css';

const CoFounders = () => {

    const data=[
        {
            "name":"Amritesh kumar",
            "status":"Co-Founder",
            "home":"IIM Kozhikode",
            "img":"https://i.postimg.cc/jdqnSdxh/image-4.png",
            "key":"1"
        },
        {
            "name":"Bishnu Prasad",
            "status":"Co-Founder",
            "home":"PGDM-CIMP Patna",
            "img":"https://i.postimg.cc/wj7tDfsy/image-5.png",
            "key":"2"
        },
        {
            "name":"Abhishek Banarjee ",
            "status":"Co-Founder",
            "home":"PGDM-Indraprastha University, New Delhi",
            "img":"https://i.postimg.cc/vmncN4hG/image-6.png",
            "key":"3 "
        },
        {
            "name":"BRAJ KISHORE SINGH",
            "status":"Co-Founder",
            "home":"Msc Physics, Science College Patna",
            "img":"https://i.postimg.cc/Hx4jTFFK/image-7.png",
            "key":"4 "
        },
        {
            "name":"WAIZ ALAM",
            "status":"Co-Founder",
            "home":"Student at BIT Mesra, Patna",
            "img":"https://i.postimg.cc/W3npBgkc/image-8.png",
            "key":"5 "
        },
        {
            "name":"ABBHYUDAYA S VATSA",
            "status":"Co-Founder",
            "home":"Student at BIT Mesra, Patna",
            "img":"https://i.postimg.cc/zGns25h9/image-9.png",
            "key":"6 "
        }
          
        
    ]

    return (
        <div className='mainCoFounder'>
           <Fade bottom>
           <div className="row mainFounder">
                {
                    data.map((info,index)=>
                        <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                    <div className="imagesa">
                        <img className=' mb-3 ioios rounded-circle' src={info.img} alt="" />
                    <br />
                    <strong >{info.name}</strong> <br />
                    <h2><b>{info.status}</b></h2>
                    <span>{info.home}</span>
                    </div>
                </div>
                    )
                }
            </div>
           </Fade>
            <Footer></Footer>
        </div>
    );
};

export default CoFounders;