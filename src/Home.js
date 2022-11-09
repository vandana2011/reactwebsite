import './App.css';
import Bannerslider from './component/banner-slider/bannerslider'
import Header from './component/header/header';
import Whatwedo,{HH} from './component/whatwedo/whatwedo';
import Whatitswork from './component/Whatitswork';
import Servicessec from './component/servicessec';
import ContactusSec from './component/contactus';
import Contact from './component/Contact';
import Footer from './component/footer';
import './style.css';
import Demo from './component/Demo';




function Home() {
  return (
    <>
    <Header/>    
    <Bannerslider/>    
    <Whatitswork/>
    <Whatwedo />
    <Servicessec/>   
    <Contact />    
    <Footer/>
  
  
    {/* <Demo/> */}
                       
                      
                     
                       
      </>  
     
   
  );
}

export default Home;
