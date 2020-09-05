import React from "react";

export default class Slider extends React.Component{

    
    render(){
        return(
            <div>  
                <div className="slider-container">
                    <div className="row">
                        <div className="col-md-12 pad-remove">
                            <div className="owl-carousel owl-theme main-slider">
                                <div className="item">
                                <img height="400" width="1600" src="static/frontend/images/slider/lab-test.jpg" alt="lab-test" />
                                </div>
                                <div className="item">
                                <img height="400" width="1600" src="static/frontend/images/slider/microscope_test.jpg" alt="lab-test" />
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }


}
            