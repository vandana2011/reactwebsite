import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

 const ServiceSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrow:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
    <section className='ServiceSlider mb'>
        <div className='container'>
            <Slider className='ServiceSlider' {...settings} >
            <div className='item'>
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                        <img src='../images/service2.jpg' className='img-fluid'/>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                        <div class="blog_content">
                            <h3>
                                Digital products that grow businesses.
                            </h3>
                            <p>Why cup of tea chap blatant porkies say gosh sloshed bevvy, a a blinding shot down the pub butty bary blimey bleeding bum bag faff about cor blimey guvnor. Why I say old chap that is spiffing, only a quid of  matie boy cras cup of tea golly gosh. </p>
                        </div>
                    </div>
                </div> 
            </div>
            <div className='item'>
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                        <img src='../images/service1.jpg' className='img-fluid'/>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                        <div class="blog_content">
                            <h3>
                                Digital products that grow businesses.
                            </h3>
                            <p>Why cup of tea chap blatant porkies say gosh sloshed bevvy, a a blinding shot down the pub butty bary blimey bleeding bum bag faff about cor blimey guvnor. Why I say old chap that is spiffing, only a quid of  matie boy cras cup of tea golly gosh. </p>
                        </div>
                    </div>
                </div> 
            </div>
                    
            </Slider> 
        </div>
    </section>   
    </>
  )
}
export default ServiceSlider;
