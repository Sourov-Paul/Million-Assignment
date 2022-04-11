import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <div>
            <Fade>
                
            <footer className="footers mt-5">
  <div className="firstFooter p-3">
      <div className="mainFooter ">
          <div className="row footer">
              <div className="col-sm-12 col-md-3 col-lg-4">
                  <div className="footerText">
                      <div className="pb-2 col-lg-w-50 border-bottom m-auto">
                      <Link className="img-fluid  navbar-brand footerImg" to="/"><img className="img-fluid lolo logox" src="https://i.postimg.cc/3NRY49QN/million-1.png" alt="" /></Link>

                         <br /> Millioncareers is primarily a movement to ensure our country's youth
  has a solid career, this organisation work towards helping them
  through training and guidance with every step of their career.
                      </div>
                  </div>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-4 fo">
                  <ul>
                      <li className="fw-bold">Home</li>
                      <li className="fw-bold">About</li>
                      <li className="fw-bold">Our Services</li>
                      <li className="fw-bold">Blogs</li>
                      <li className="fw-bold">Testimonial</li>
                  </ul>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-4">
                  <h5 className="text-cent">Subscribe to our Newsletter!</h5>
                    <div className="reg">
                        <input type="email" placeholder='Email' className='rounded border-0 m-2 p-2 bg-light emainInput' />
                        <button className='p-2 border-0 rounded'>Subscribe</button>
                    </div>
                  <div className="images d-flex">
                      <div className="socialIcons1 m-2">
                          <img width="48px" tabindex="-1" src="./image 2.png" alt=""/>
                      </div>
                      <div className="socialIcons2 m-2">
                          <a href="https://www.facebook.com/Sourov.Paul.Web.Developer">
                          <i className="fa-brands fa-facebook p-3 rounded-circle"></i>
                          </a>
                          
                      </div>
                      <div className="socialIcons3 m-2">
                          <i className="fa-brands fa-twitter p-3 rounded-circle"></i>
                      </div>
                      <div className="socialIcons4 m-2">
                          <i className="fa-brands fa-youtube p-3 rounded-circle"></i>
                      
                      </div>
                  </div>
                  <span className="bolded ">Download Our Mobile App.</span>
              </div>
              
          </div>
      </div>
  </div>


  <div className="appsMain d-flex justify-content-between">
      <div className="logoW">
         
          <span className="fLogo"><h4><b>© Million Careers</b></h4></span>
      </div>
      <div className="appImg">
          
          <span className="app1"><h5>
          <b>Terms & Conditions | privacy policy</b>
              </h5>
              </span>
      </div>
  </div>
</footer>

            </Fade>
        </div>
    );
};

export default Footer;