import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <div>
            <Header></Header>
           <Fade bottom>
           <div className="maincontact">
    
    <div className="row firstRow container m-auto">
       <h2 className="text-center fw-bold m-4"><b>Contact Us</b></h2>
       <p className="m-4 someText">Please fill in the details below, Our representative will call you shortly.</p>
     {/*  contact form  */}
     <div className="col-sm-12 col-md-10 col-lg-10">
        <form className="row ">
            <div className="col-12 mt-2">
                <label for="name" className="form-label fw-bold">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name"/>
              </div>
              <div className="col-md-6 mt-2">
                <label for="inputEmail4" className="form-label fw-bold">Email</label>
                <input placeholder="Email" type="email" className="form-control" id="inputEmail4"/>
              </div>
              <div className="col-md-6 mt-2">
                <label for="number" className="form-label fw-bold">Mobile Number</label>
                <input maxlength="11" placeholder="Enter 11 digit mobile number" type="tel" className="form-control" id="number"/>
              </div>
              <div className="col-12 mt-2">
                <label for="subject" className="form-label fw-bold">Subject</label>
                <input type="text" className="form-control" id="subject" placeholder="Subject"/>
              </div>
              <div className="col-12 mt-2">
                <label for="textArea" className="form-label fw-bold">Comment</label>
                <textarea className="form-control" placeholder="Write here..." rows="6" id="textArea"></textarea>
              </div>
             <h5 className="text-center submit mt-4">
                 <button className="border-0 p-3 rounded">Send</button>
             </h5>
        </form>
    </div>




    <div className="col-sm-12 col-md-2 col-lg-2 mt-5">
        <div className="mainAddress mt-5">
            <div className="address mt-5">
                <b className="addressNam">Address</b> <br/>
                <span className="addressName">
                    201, Hem Plaza, Fraser Rd, Opposite Jagat Trade Centre, Patna, Bihar
                </span>
            </div>
            <div className="phone mt-3">
                <b className="phoneNam">Phone Number </b> <br/>
                <span className="phoneName">
                    95465 20899 <br/>
                    85218 78717
                </span>
            </div>
            <div className="email mt-3">
                <b className="emailNam">Email </b> <br/>
                <span className="emailName fw-bold">
                    itswaiz852@gmail.com <br/>
                    abbhyudayasvatsa@gmail.com <br/>
                    millioncareersofficial@gmail.com
                </span>
            </div>
        </div>
    </div>

   </div>


</div>
           </Fade>
<Footer></Footer>
        </div>
    );
};

export default Contact;