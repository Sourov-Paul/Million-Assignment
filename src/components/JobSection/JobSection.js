import React from 'react';
import Fade from 'react-reveal/Fade';

const JobSection = () => {
    return (
        <div>
      <Fade bottom>
              
  <div className="bestJobs container">

<div className="mainJobs ">
  <h6 className="bolded text-center m-0 mt-5 pt-3">Our Latest Blog</h6> <br/>
  <h4 className="add text-center pb-4">WHAT JOB IS THE BEST FOR YOU?</h4>
<div className="container imageSections row row-cols-1 row-cols-md-3 g-2 pb-2">
 <div className="img1 col">
   <div className="text-center">    <img className='card-img-top imag'  src="https://i.postimg.cc/vZzGCqnN/man1.png" alt=""/>
   <br/>
   <span className="ssssss  card-title">The Great Resignation</span>
    <br/>
    <button className=" bolded pb-1"> Read Now <i className="fa-solid fa-right-long"></i></button>
  </div>

  </div>
 <div className="img2 col">
   <div className="text-center">      <img  className='card-img-top  imag' src="https://i.postimg.cc/k4kCWkrB/man2.png" alt=""/>
  <br/>
  <span className="ssssss card-title" >23 JOBS OF THE FUTURE</span>
   <br/>
    <button className=" bolded pb-1"> Read Now <i className="fa-solid fa-right-long"></i></button>
  </div>

  </div>
 <div className="img3 col">
   <div className="text-center">      <img  className='card-img-top   imag' src="https://i.postimg.cc/Nf8trJdj/man3.png" alt=""/>
  <br/>
  <span className="ssssss  card-title bolded pb-1" >Interesting and unexplored Career Options</span>
   <br/>
   <button className=" bolded pb-1"> Read Now <i className="fa-solid fa-right-long"></i></button>
 </div>

  </div>
</div>


</div>

</div>

      </Fade>

        </div>
    );
};

export default JobSection;