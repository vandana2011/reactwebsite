import React from 'react'
import ReactRouterDOM from "react-dom/client";
import { NavLink } from 'react-router-dom'
import Home from '../Home';

const Breadcrumb = (props) => {
  return (
    <>
       <div>
        <div className='container'>
                <ul className="breadcrumb">
                <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                <li>{props.currentpage}</li>          
                    
                </ul>
            </div>
       </div>
    </>
  )
}

export default Breadcrumb