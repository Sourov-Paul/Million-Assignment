import React from 'react';
import Header from '../Header/Header';
import './Blog.css';
import Footer from './../Footer/Footer';
import Fade from 'react-reveal/Fade';

const Blog = () => {
    return (
        <div>
            <Header></Header>
           <Fade bottom>
           <div className="container">
           <div className="mainBlog">
                <h2 className='text-center '><b>Blog</b></h2>
           <div className="blogStart">
             <div className="blogTile">
                 <h2>Lorem ipsum dolor</h2>
                 <span className='m-2'><i className="fa-solid fa-user"></i> Aman Verms</span>
                 <span className='m-2'><i class="fa-solid fa-comments"></i> 0 Comments</span>
             </div>
           </div>
            </div>
            <div className="foodRev">
            <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://i.postimg.cc/kg5TL9KD/Rectangle-2.png" class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body p-5">
        
        <p class="card-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis elit eget aliquam laoreet vel, sagittis mattis enim. Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur molestie cras. Malesuada quam cursus blandit amet. Odio nisi, commodo feugiat purus. In rhoncus, elementum donec neque. Feugiat ultrices duis mattis imperdiet hac facilisis turpis amet. Gravida egestas nec id euismod elit. Sit laoreet nunc, nec iaculis nisl. Convallis donec amet, id ullamcorper sapien justo, congue mauris.
 <br />
 <p class="card-text mt-3">
Ut et, velit, euismod commodo, laoreet ullamcorper dignissim donec in. Pretium eget faucibus sagittis ultricies. Enim dictum tortor ut faucibus amet ac dui auctor ipsum. Massa sed mi lorem ut vel. Turpis sed nulla nam adipiscing praesent. Tortor posuere gravida in rhoncus, quis adipiscing aliquet leo orci. Duis ipsum, consequat ac commodo viverra.</p>
       </p>
      </div>
    </div>
  </div>
  
</div>
<div className="div m-3">
      <p>
      Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur molestie cras. Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur molestie cras.Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur molestie cras.Iaculis quam morbi proin vel eget enim risus, porttitor.   
Sed est id consectetur molestie cras.Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur molestie cras.Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur molestie cras.Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur molestie cras.Iaculis quam morbi proin vel eget enim risus, porttitor. 
Sed est id consectetur molestie cras.Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur molestie cras.
      </p>
  </div>
            </div>
           </div>
           </Fade>
           <Footer></Footer>
        </div>
    );
};

export default Blog;