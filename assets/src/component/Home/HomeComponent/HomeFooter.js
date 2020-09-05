import React from "react";

export default class Footer extends React.Component{

    
    render(){
        return(
            <div>  
                <footer className="footer">
                <div className="top-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <p className="logoname">Furnidesk</p>
                                <p className="text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <div className="contact">
                                    <h4>Contact info:</h4>
                                    <p>Naxal,Bagwati Marg,Kathmandu.</p>
                                    <div className="link-follow">
                                        <a className="twitter fab fa-twitter" title="Twitter" href=""></a>
                                        <a className="googleplus fab fa-google-plus-g" title="Google" href=""></a>
                                        <a className="facebook fab fa-facebook-f" title="Facebook" href=""></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="left-title footer-title">The company</div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="liststyle--none">
                                            <li><a href="">About Us</a></li>
                                            <li><a href="">Help</a></li>
                                            <li><a href="">Blog</a></li>
                                            <li><a href="">Inside UL</a></li>


                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="liststyle--none">
                                            <li><a href="">Careers</a></li>
                                            <li><a href="">Press</a></li>
                                            <li><a href="">Team</a></li>
                                            <li><a href="">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>


                            </div>
                            <div className="col-md-4">
                                <div className="left-title footer-title">More Information</div>
                                <div className="row">
                                    <div className="col-md-6"><ul className="liststyle--none">
                                            <li><a href="">Payment & Security</a></li>
                                            <li><a href="">Shipping & Delivery</a></li>
                                            <li><a href="">Terms of Use</a></li>
                                            <li><a href="">Terms of Offer + Sale</a></li>

                                        </ul></div>
                                    <div className="col-md-6">
                                        <ul className="liststyle--none">
                                            <li><a href="">Contact Us</a></li>
                                            <li><a href="">Visit Us</a></li>
                                            <li><a href="">Buy in Bulk</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <span>
                        Copyright © 2018 All Rights Reserved.
                    </span>

                </div>
            </footer>          
            </div>
        );
    }


}