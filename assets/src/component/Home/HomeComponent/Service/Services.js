import React from "react";
// import AOS from 'aos';
import axios from "axios";

import HomeHeader from "../HomeHeader";
import HomeFooter from "../HomeFooter";

export default class Services extends React.Component{

      state = {
        services : []
    }

    componentDidMount(){

  
      axios({
          method: "GET",
          url:`/api/v1/services/`,
         
          }).then(res=>{

              this.setState({
  
                services:res.data,
                 
              })
          });

     };
    
    render(){
        const services = this.state.services
       
        return(
            <section id="service" className="service">
                <div className="container">
                    <div className="row">
                        <div className="main_service roomy-100">
                            <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                                <div className="head_title text-center">
                                    <h2>OUR SERVICES</h2>
                                    <div className="separator_auto"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                        sed diam nonummy nibh euismod nostrud exerci tation ullamcorper 
                                        suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
                                </div>
                            </div>
                            {services.length > 0 ?
                                services.map((item, index) =>(
                            <div className="col-md-4">
                                <div className="service_item">
                                    <i className={item.icon}></i>
                                    <h6 className="m-top-30">{item.title}</h6>
                                    <div className="separator_small"></div>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            ))
                            : null }
                        </div>
                    </div>{/* End off row  */}
                </div>{/* End off container  */}
            </section> 

        );
    }


}