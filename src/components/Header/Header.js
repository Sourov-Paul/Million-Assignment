import React from 'react';
import { Fade } from 'react-reveal';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
 
    return (
        <div>
             {/* header start  */}
    
    <header>
        <nav className=" navbar fixed-top navbar-expand-lg navbar-light ">
            <div className="container container-fluid">
            <Fade left big>
            <NavLink className="img-fluid  navbar-brand " to="/"><img className="img-fluid lolo" src="https://i.postimg.cc/3NRY49QN/million-1.png" alt="" /></NavLink>

            </Fade>
             <Fade right big> <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button> </Fade>
              <div className="collapse navbar-collapse" id="navbarNav">
                <Fade right big>
                <ul className="ms-auto navbar-nav">
                  <li className="nav-item">
                   <Fade right big> <NavLink  className="nav-link " aria-current="page" to="/">Home</NavLink></Fade>
                  </li>
                  <li className="nav-item">
                   <Fade right big> <NavLink  className="nav-link" to='/about'>About</NavLink></Fade>
                  </li>
                  <li className="nav-item">
                   <Fade right big> <NavLink  className="nav-link" to="/blog">Blog</NavLink></Fade>
                  </li>
                  <li className="nav-item">
                   <Fade right big> <NavLink  className="nav-link "to="/contact">Contact Us</NavLink></Fade>
                  </li>
                </ul>
                </Fade>
              </div>
            </div>
          </nav>
    </header>

     {/* header end  */}
        </div>
    );
};

export default Header;