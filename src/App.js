import './App.css';
import { Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import Home from './Home';
import About from './pages/About';
import Contactus from './pages/Contactus';
import Services from './pages/Services';
import Cross_platform_development from './component/Cross_platform_development';
import App_Development from './component/App_Development';
import Web_Development from './component/Web_Development';
import './style.css';



const App = () => {
  return (
    <>   
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/aboutus" element={<About/>} />
     <Route path="/contactus" element={<Contactus/>} />
     <Route path="/services" element={<Services/>} />
     <Route path="/services/Crossplatformdevelopment" element={<Cross_platform_development/>} />
     <Route path="/services/webdevelopment" element={<Web_Development/>} />
     <Route path="/services/Appdevelopment" element={<App_Development/>} />

    </Routes>         
    
     </>  
     
   
  );
}

export default App;
