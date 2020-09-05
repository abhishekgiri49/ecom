import React from "react";
import axios from "axios";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default class SliderComponent extends React.Component{

    state = {
        banners: []
    }

    componentDidMount(){
    
        axios({
            method: "GET",
            url:`/api/core/banners/`,
           
            }).then(res=>{

                this.setState({
    
                    banners:res.data,
                   
                })
            });

       };

    render(){
        const banners = this.state.banners
          var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          };
        return(
            <Slider {...settings}>
              {banners.map(banner => {
                  return (
                    <div key={banner.id}>
                       <img src={banner.image} alt="lab-test" />
                  //  </div>
                   )                
                 })}                          
      </Slider>
            // <div>  
            //     <div className="slider-container">
            //         <div className="row">
            //             <div className="col-md-12 pad-remove">
            //                 <div className="owl-carousel owl-theme main-slider">
            //                     {bannerItem}
            //                 </div>
            //             </div>

            //         </div>

            //     </div>
            // </div>
        );
    }


}
            