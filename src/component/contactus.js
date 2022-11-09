import React, {useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

 const ContactusSec = () => {
    const [value, setValue] = useState()
  return (
    <>        
        <section className='contactus_sec mb'>
            <div className='container'>
            <h2 className='heading_title'>Join Our Team</h2>
                <div className="form-inner-part">                    
                    <form className="form-part">
                        <div className="field-cell">
                            <label for='name'>Full Name *</label>
                            <input id="name" type="text" name="" placeholder="Enter your Name" required/>
                        </div>
                        <div className="field-cell">
                             <label for='email'> Email Address *</label>
                            <input id="email" type="email" name="" placeholder="Enter your Email" required/>
                        </div>
                        <div className="field-cell">
                        <label for='phone' required> Phone *</label>
                        <PhoneInput country={"in"}
                            placeholder={"Enter your Phone Number"}
                        />
                        </div>
                        <div className="field-cell">
                             <label for='name' required> Message *</label>
                            <textarea required placeholder="Enter your Message" rows="5">

                            </textarea>
                        </div>
                        <div className="field-cell">
                            <input type="submit" value="Submit" name="" className="form-submit-btn btn"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactusSec;