import React, {useState} from 'react'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

 const Contact = () => {
  return (
    <>
      <div className ="contact_area section_gap mb">
            <div className ="contact_shape1"></div>
            <div className ="contact_shape2"></div>
            <div className ="contact_shape4 circle_round"></div>
            <div className ="contact_shape5"></div>
            <div className ="container">
                <div className ="row boxshadow">
                    <div className ="col-xxl-7 col-lg-6 p-0">
                        <div className ="contact_left_main bg-area">
                            <div className ="get_touch_title pt-25">
                                <h2 className ="title-text"> Get in touch</h2>
                                <p>Trusted by more than 5,300 customers with nice one.</p>
                            </div>

                            <form action="#">
                                <div className ="row">
                                    <div className ="col-xxl-6 col-md-6 pr-5">
                                        <div className ="form_item">
                                            <input type="text" name="name" placeholder="Name" required/>
                                        </div>
                                    </div>
                                    <div className ="col-xxl-6 col-md-6 pr-5">
                                        <div className ="form_item">
                                            <input type="email" name="email" placeholder="Email" required/>
                                        </div>
                                    </div>
                                    
                                    <div className ="col-xxl-6 col-md-6 pr-5">
                                        <div className ="form_item">
                                           <PhoneInput country={"in"}
                                            placeholder="Enter phone number" required/>
                                        </div>
                                    </div>

                                    <div className ="col-xxl-6 col-md-6 pr-5">
                                        <div className ="form_item">
                                            <input type="text" name="subject" placeholder="Subject" required/>
                                        </div>
                                    </div>

                                    <div className ="form_item pr-5">
                                        <textarea name="message" placeholder="Message" rows="5"></textarea>
                                    </div>
                                    <button type="submit" className ="btn">Submit Now <i className ="arrow_right"></i></button>
                                </div>
                            </form>
                            <div className ="contact_shape3"></div>
                        </div>
                    </div>
                    <div className ="col-xxl-5 col-lg-6 p-0">
                        <div className ="contact_right_main bg-area">
                            <div className ="contact_info_wrapper">
                                <div className ="contact_info_title pt-35">
                                    <h2 className ="title-text"> Contact Information </h2>
                                </div>

                                <div className ="contact_info_widgets">
                                    <div className ="widgets_single mb-30">
                                        <div className ="widgets_left_icon">
                                            <span className ="svg-icon text-center">
                                                <svg width="24" viewBox="0 0 24 24">
                                                    <path className ="st1" d="M17,21v-2c0-2.2-1.8-4-4-4H5c-2.2,0-4,1.8-4,4v2"></path>
                                                    <circle className ="st1" cx="9" cy="7" r="4"></circle>
                                                    <path className ="st1" d="M23,21v-2c0-1.8-1.2-3.4-3-3.9"></path>
                                                    <path className ="st1" d="M16,3.1c2.1,0.5,3.4,2.7,2.9,4.9c-0.4,1.4-1.5,2.5-2.9,2.9"></path>
                                                </svg>
                                            </span>
                                        </div>
            
                                        <div className ="widgets_right_content">
                                            <h5>Customer Support</h5>
                                            <a href="contact.html"> HelpSupport <i className ="arrow_right"></i></a>
                                        </div>
                                    </div>                                    
                                    
                                    <div className ="widgets_single mb-30">
                                        <div className ="widgets_left_icon">
                                            <span className ="svg-icon text-center">
                                                <svg width="24" viewBox="0 0 24 24">
                                                    <path className ="st1" d="M15.1,5c2,0.4,3.6,2,3.9,3.9 M15.1,1c4.2,0.5,7.5,3.8,7.9,7.9 M22,16.9v3c0,1.1-0.9,2-2,2c-0.1,0-0.1,0-0.2,0  c-3.1-0.3-6-1.4-8.6-3.1c-2.4-1.5-4.5-3.6-6-6c-1.7-2.6-2.7-5.6-3.1-8.7C2,3.1,2.8,2.1,3.9,2C4,2,4.1,2,4.1,2h3c1,0,1.9,0.7,2,1.7  s0.4,1.9,0.7,2.8c0.3,0.7,0.1,1.6-0.4,2.1L8.1,9.9c1.4,2.5,3.5,4.6,6,6l1.3-1.3c0.6-0.5,1.4-0.7,2.1-0.4c0.9,0.3,1.8,0.6,2.8,0.7  C21.3,15,22,15.9,22,16.9z"></path>
                                                </svg>
                                            </span>
                                        </div>
            
                                        <div className ="widgets_right_content">
                                            <h5>Quick Answers</h5>
                                            <a href="contact.html"> Read More <i className ="arrow_right"></i></a>
                                        </div>
                                    </div>

                                    <div className ="widgets_single mb-30 last-item">
                                        <div className ="widgets_left_icon">
                                            <span className ="svg-icon text-center">
                                                <svg width="24" viewBox="0 0 24 24">
                                                    <circle className ="st1" cx="18" cy="5" r="3"></circle>
                                                    <circle className ="st1" cx="6" cy="12" r="3"></circle>
                                                    <circle className ="st1" cx="18" cy="19" r="3"></circle>
                                                    <line className ="st1" x1="8.6" y1="13.5" x2="15.4" y2="17.5"></line>
                                                    <line className ="st1" x1="15.4" y1="6.5" x2="8.6" y2="10.5"></line>
                                                </svg>
                                            </span>
                                        </div>                                    
                                        <div className ="widgets_right_content">
                                            <h5>We are Social</h5>
                                            <a href="contact.html"> Join Our Community <i className ="arrow_right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default Contact;