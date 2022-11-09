import React from 'react'
import Header from '../component/header/header';
import Footer from '../component/footer';
import Banner_title from '../component/Banner_title';
import ServiceArea from '../component/ServiceArea';
import ServiceSlider from '../component/ServiceSlider';
import Breadcrumb from './Breadcrumb';

 const App_Development = () => {
  return (
    <>
    <Header/>
    <Breadcrumb currentpage="App Development"/>
    <Banner_title Banner_title="App Development"/> 
    <ServiceArea></ServiceArea>
    <ServiceSlider/>
    <Footer/> 
  </>
  )
}
export default App_Development;