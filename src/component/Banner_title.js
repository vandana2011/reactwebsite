import React from 'react'

 const Banner_title = (props) => {
  return (
   <>
    <section className='Banner_title mb'>
        <div className='container'>
            <div>
                <h2>{props.Banner_title}</h2>
            </div>
        </div>
    </section>
   </>
  )
}
export default Banner_title;