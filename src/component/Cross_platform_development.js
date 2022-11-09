import React from 'react'
import Header from '../component/header/header';
import Footer from '../component/footer';
import Banner_title from '../component/Banner_title';
import ServiceArea from '../component/ServiceArea';
import ServiceSlider from '../component/ServiceSlider';
import Breadcrumb from './Breadcrumb';

const Cross_platform_development = () => {
  return (
    <>
      <Header/>
      <Breadcrumb currentpage="Cross Platform Development"/>
      <Banner_title Banner_title="Cross Platform Development"/> 
      <ServiceArea></ServiceArea>
      <ServiceSlider/>
      <Footer/> 
    </>
  )
}

export default Cross_platform_development