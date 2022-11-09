import React, { useState} from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


 const Demo = () => {
  const [value, setValue] = useState()
  return (

    <>
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
    </>
  )
}
export default Demo;


