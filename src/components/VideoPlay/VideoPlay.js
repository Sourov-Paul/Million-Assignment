import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlay.css';
import Fade from 'react-reveal/Fade';

const VideoPlay = () => {
 
    return (
        <div className='videoPlayer'>
    <Fade bottom>
    <section class="videoSection container">
   <div class="mainVideoDiv d-flex align-self-center flex-column align-item-center text-center bg-dark ">
     <h2 class="bolded text-center text-light p-1">Testimonial Video</h2>
    <div class="videoCls p-3  bg-dark  " controls poster="./video/youtubeIcon.png">
    <ReactPlayer 
    className='videoo m-auto p-2'
      controls
      light="https://i.postimg.cc/6qz58rj9/youtube.png"
       url='https://www.youtube.com/watch?v=7sDY4m8KNLc'/>

      
    </div>
   </div>
  </section>
  </Fade>
        </div>
    );
};

export default VideoPlay;