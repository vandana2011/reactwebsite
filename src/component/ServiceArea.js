import React, { useState } from "react";
import ServicesApi from "../Api/ServicesApi";


 const ServiceArea = () => {
    const[serviceData, setserviceData]= useState(ServicesApi);
    console.log(serviceData);
  return (
    <>
    <div className="service_area service_page section_gap mb">
        <div className="container">
            <div className="feature_overview text-center">
                <span className="page_tag">Services</span>
                <h2 className="title-text">Modern Acounting Tools Service</h2>
                <p> Charles full monty in my flat, arse bloke blatant fantastic well Why.</p>
            </div>
            <div className="row service_space">
            {serviceData.map((curElem)=>{  
                return (
                    <>        
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-item-3 ">
                <div className="service_single">
                    <div className="service_left_icon">
                        <span className="svg-icon text-center">   
                        <svg width="24" viewBox="0 0 24 24">
                            <polygon class="st0" points="12,2 2,7 12,12 22,7 "></polygon>
                            <polyline class="st0" points="2,17 12,22 22,17 "></polyline>
                            <polyline class="st0" points="2,12 12,17 22,12 "></polyline>
                        </svg>                         
                        </span>
                    </div>
                    <div className="service_right_content">
                        <h5>{curElem.title} </h5>
                        <p>{curElem.info}</p>
                    </div>
                </div>
            </div>
            </>
                );
        })}

            </div>
        </div>
    </div>
    </>
  )
}
export default ServiceArea;
