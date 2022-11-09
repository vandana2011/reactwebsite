import React from 'react'
import { NavLink } from 'react-router-dom'
import '../header/header.css'

 const Header = () => {
  return (
    <>
    <header>
        <div className='container'>
            <div className='center_header'>
                  <nav className="navbar navbar-expand-lg">
                    <NavLink className="navbar-brand" to="/">KIO$KWEB</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                        </li> 
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
                        </li>  
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/services">services</NavLink>
                        <div className='sub-megamenu'>
                            <ul className='sub-megamenu-blog'>
                                <li>                                
                                    <h4><NavLink className="" to="/services/webdevelopment">Web Development</NavLink> </h4>
                                </li>
                                <li>
                                <h4><NavLink className="" to="/services/Appdevelopment">App Development</NavLink> </h4>
                                  
                                </li>
                                <li>
                                <h4><NavLink className="" to="/services/Crossplatformdevelopment">Cross platform development</NavLink> </h4>                                
                                </li>                                
                            </ul>
                        </div>
                        </li>  
                                      
                        
                    </ul>                
                    </div>
            </nav>
            </div>
        </div>
    </header>
    </>
  )
  }
  export default Header;


