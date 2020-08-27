import React from "react";
import axios from "axios";

import HomeHeader from './HomeHeader'
import HomeFooter from './HomeFooter'


export default class Privacy extends React.Component{

    state = {
        privacy_and_policy: []
    }

    componentDidMount(){
    
        axios({
            method: "GET",
            url:`/api/v1/privacy-policy/`,
           
            }).then(res=>{

                this.setState({
    
                    privacy_and_policy:res.data,
                   
                })
            });

       };

    render(){

        const privacy_and_policy = this.state.privacy_and_policy
       

        return(
            <>
            <HomeHeader
            
            />
            <main className="innerpage mrtb-30">
                    <div className="container">
                        {privacy_and_policy.length > 0 &&
                        privacy_and_policy.map((item, index) => (
                        <div className="card policy mrt-30">
                                <div className="card_header no-bg">
                                    <h5>{item.title}</h5>
                                </div>
                                <div className="card-body">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}  
                  </div>
                </main>


            <HomeFooter
            
            />
           </>
           
        )
    }


}