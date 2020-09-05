import React from "react";
import DesktopMainBar from './DesktopMainBar';
import MobileNav from './MobileNav';
export class HomeHeader extends React.Component{


    render(){
        
        return(

            <header className="site-header">
                <div className="desktop-only container ">
                    {/* sticky bar */}
                    <div className="sticky-wrapper ">
                        <div className="row flex-row">
                            <div className="site-branding">
                                <a href="#">
                                    <img src="static/frontend/images/images.png" alt="" />

                                </a>
                            </div>                            
                            
                            <div className="orders-wrapper">
                                <ul className="liststyle--none">
                                    

                                    <li><a href="#"><i className="far fa-user"></i>Register or Sign in</a></li>
                                </ul>
                            </div>

                            <div className="clearfix"></div>
                        </div>
                    </div>

                </div>
                <DesktopMainBar />
                <MobileNav />
                </header>
                
        );
    }

}


  export default HomeHeader;
  