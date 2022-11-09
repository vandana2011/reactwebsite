import React from 'react'
import '../banner-slider/Bannerslider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import '../src/images';

 const Bannerslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>  
    <section className='banner-slider mb'>
    <Slider {...settings}>             
         <div>
          <img src='./images/banner3.jpg' className='img-fluid'/>
          </div>          
          <div>
          <img src='./images/banner3.jpg' className='img-fluid'/>
          </div>      
        </Slider>
    </section>        
    </>
  );
};
export default Bannerslider;