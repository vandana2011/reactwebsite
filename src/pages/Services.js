import React from 'react'
import Header from '../component/header/header';
import Footer from '../component/footer';
import Banner_title from '../component/Banner_title';
import ServiceArea from '../component/ServiceArea';
import ServiceSlider from '../component/ServiceSlider';
import Breadcrumb from '../component/Breadcrumb';

 const Services = () => {
  return (
    <>
      <Header/>
      <Breadcrumb currentpage="Services"/>
      <Banner_title Banner_title="Services"/> 
      <ServiceArea/>
      <ServiceSlider/>
      <Footer/> 
    </>
  )
}
export default Services;
