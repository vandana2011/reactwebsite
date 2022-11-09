import React from 'react'
import Header from '../component/header/header';
import Bannerslider from '../component/banner-slider/bannerslider';
import Footer from '../component/footer';
import Whatwedo from '../component/whatwedo/whatwedo';
import Banner_title from '../component/Banner_title';
import Breadcrumb from '../component/Breadcrumb';

 const About = () => {
  return (
    <>      
      <Header/>
      <Breadcrumb currentpage="About us"/>
      <Banner_title Banner_title="About Us"/>      
      <Whatwedo/>
      <Footer/>
      
    </>
  )
}
export default About;