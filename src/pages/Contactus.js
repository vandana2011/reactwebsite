import React from 'react'
import Header from '../component/header/header';
import Bannerslider from '../component/banner-slider/bannerslider';
import Footer from '../component/footer';
import ContactusSec from '../component/contactus';
import Banner_title from '../component/Banner_title';
import Breadcrumb from '../component/Breadcrumb';


 const Contactus = () => {
  return (
   <>
    <Header/>
    <Breadcrumb currentpage="Contact Us"/>
    <Banner_title Banner_title="Contat Us"/>   
    <ContactusSec/>
    <Footer/> 
   </>
  )
}
export default Contactus;
