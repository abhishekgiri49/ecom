import React from "react";
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
import Services from './Service/Services'
export default class HomeBody extends React.Component{

    render(){

        return(
        <div className="culmn">
            {/* Home page style */}

            <HomeHeader />

            {/* Home Sections */}

            <section id="hello" className="home bg-mega">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="main_home">
                            <div className="home_text">
                                <h1 className="text-white">WE’RE <br /> CREATIVE DESIGNERS!</h1>
                            </div>

                            <div className="home_btns m-top-40">
                                <a href="" className="btn btn-primary m-top-20">Contact Us</a>
                                <a href="" className="btn btn-default m-top-20">Our Services</a>
                            </div>

                        </div>
                    </div>{/* End off row */}
                </div>{/* End off container  */}
            </section> {/* End off Home Sections */}


            {/* About Sections */}
            <section id="about" className="about roomy-100">
                <div className="container">
                    <div className="row">
                        <div className="main_about">
                            <div className="col-md-6">
                                <div className="about_content">
                                    <h2>ABOUT US</h2>
                                    <div className="separator_left"></div>

                                    <p>Glimmer It Pvt Ltd an IT Comapny in Kathmandu, Nepal was established by a team of Web Design and Development, software & Hardware professionals endeavoring to provide best IT solutions and IT Services to the industry. The credit for the same goes to the organization's commitment to serve the industry in the best possible way by delivering value added services to the clients. In tune with the organization's ideology its highly motivated employees who believe in giving their best in whatever project Glimmer IT Pvt Ltd handle </p>

                                    <div className="about_btns m-top-40">
                                        <a href="" className="btn btn-primary">MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about_accordion wow fadeIn">
                                    <div id="faq_main_content" className="faq_main_content">
                                        <h6><i className="fa fa-angle-right"></i> UNIQUE DESIGN </h6>
                                        <div>
                                            <div className="content">
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, </p>

                                            </div>
                                        </div> {/*  End off accordion item-1  */}

                                        <h6 className="open"><i className="fa fa-angle-right"></i> EXPERIENCE TEAM</h6>
                                        <div className="open">
                                            <div className="content">
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, </p>
                                            </div>
                                        </div> {/*  End off accordion item-2  */}

                                        <h6> <i className="fa fa-angle-right"></i> GREAT SERVICE </h6>
                                        <div>
                                            <div className="content">
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, </p>
                                            </div>
                                        </div> {/*  End off accordion item-3  */}

                                        <h6><i className="fa fa-angle-right"></i> FREE UPDATES </h6>
                                        <div>
                                            <div className="content">
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, </p>
                                            </div>
                                        </div> {/*  End off accordion item-4  */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* End off row */}
                </div>{/* End off container  */}
             
                {/* 
                <div className="container">
                    <div className="row">
                        <div className="about_bottom_content">
                            <div className="col-md-4">
                                <div className="about_bottom_item m-top-20">
                                    <div className="ab_head">
                                        <div className="ab_head_icon">
                                            <i className="icofont icofont-fire-burn"></i>
                                        </div>
                                        <h6 className="m-top-20"> WE’RE CREATIVE</h6>
                                    </div>
                                    <p className="m-top-20">Lorem ipsum dolor sit amet, consectetuer adipiscing ealit, 
                                        sed diaim nonummy nibsih euismod tincidiunt laorieet doloire
                                        magna diam aliquafm erat voluitpati. </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about_bottom_item m-top-20">
                                    <div className="ab_head">
                                        <div className="ab_head_icon">
                                            <i className="icofont icofont-speech-comments"></i>
                                        </div>
                                        <h6 className="m-top-20">WE'RE FRIENDLY</h6>
                                    </div>
                                    <p className="m-top-20">Lorem ipsum dolor sit amet, consectetuer adipiscing ealit, 
                                        sed diaim nonummy nibsih euismod tincidiunt laorieet doloire
                                        magna diam aliquafm erat voluitpati. </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about_bottom_item m-top-20">
                                    <div className="ab_head">
                                        <div className="ab_head_icon">
                                            <i className="icofont icofont-heart"></i>
                                        </div>
                                        <h6 className="m-top-20">WE LOVE MINIMALISM</h6>
                                    </div>
                                    <p className="m-top-20">Lorem ipsum dolor sit amet, consectetuer adipiscing ealit, 
                                        sed diaim nonummy nibsih euismod tincidiunt laorieet doloire
                                        magna diam aliquafm erat voluitpati. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                */}
            {/* End off About section  */}

            </section>

            <div className="container">
                <div className="row">
                    <div className="main_featured m-top-100">
                        <div className="col-sm-12">
                            <div className="head_title text-center">
                                <h2>FEATURED WORK</h2>
                                <div className="separator_auto"></div>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                    sed diam nonummy nibh euismod nostrud exerci tation ullamcorper 
                                    suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div className="featured_slider">
                <div>
                    <div className="featured_img">
                        <img src="assets/images/fprojects/1.jpg" alt="" />
                        <a href="{% static 'assets/images/fprojects/1.jpg" className="popup-img"></a>
                    </div>
                </div>
                <div>
                    <div className="featured_img">
                        <img src="assets/images/fprojects/2.jpg" alt="" />
                        <a href="{% static 'assets/images/fprojects/2.jpg" className="popup-img"></a>
                    </div>
                </div>
                <div>
                    <div className="featured_img">
                        <img src="assets/images/fprojects/3.jpg" alt="" />
                        <a href="{% static 'assets/images/fprojects/3.jpg" className="popup-img"></a>
                    </div>
                </div>
                <div>
                    <div className="featured_img">
                        <img src="assets/images/fprojects/4.jpg" alt="" />
                        <a href="{% static 'assets/images/fprojects/4.jpg" className="popup-img"></a>
                    </div>
                </div>
                <div>
                    <div className="featured_img">
                        <img src="assets/images/fprojects/5.jpg" alt="" />
                        <a href="{% static 'assets/images/fprojects/5.jpg" className="popup-img"></a>
                    </div>
                </div>
            </div>{/* End off featured slider  */}
            <hr />



            {/* Service Section */}
            <Services />

            {/* Impress section */}
            <section id="impress" className="impress roomy-100">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="main_impress text-center">
                            <div className="col-sm-8 col-sm-offset-2">
                                <h2 className="text-white text-uppercase">Impressed?  Let’s work together</h2>
                                <p className="m-top-40 text-white">At vero eos et accusamus et iusto odio dignissimos ducimus qui ditqs praesentium 
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias</p>

                                <div className="impress_btns m-top-30">
                                    <a href="" className="btn btn-primary m-top-20">CALL US</a>
                                    <a href="" className="btn btn-default m-top-20">EMAIL US</a>
                                </div>
                            </div>
                        </div>
                    </div>{/* End off row  */}
                </div>{/* End off container  */}
            </section>{/*  End off Impress section */}




            {/* Portfolio Section */}
            <section id="portfolio" className="portfolio lightbg">
                <div className="container">
                    <div className="row">
                        <div className="main_portfolio roomy-100">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="head_title text-center">
                                    <h2>OUR PORTOFLIO</h2>
                                    <div className="separator_auto"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                        sed diam nonummy nibh euismod nostrud exerci tation ullamcorper 
                                        suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
                                </div>
                            </div>

                            <div className="portfolio_content">
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="portfolio_item">
                                                <img src="assets/images/Portfolio/2.jpg" alt="" />
                                                <div className="portfolio_hover text-center">
                                                    <h6 className="text-uppercase text-white">Title</h6>
                                                    <p className=" text-white">Lorem ipsum dolor sit amet</p>
                                                    <div className="portfolio_hover_icon">
                                                        <a href="{% static 'assets/images/Portfolio/2.jpg" className="popup-img"><i className="fa fa-expand"></i></a>
                                                        <a href=""><i className="fa fa-search"></i></a>
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>
                                        <div className="col-md-6 m-top-30">
                                            <div className="portfolio_item portfolio_item2">
                                                <img src="assets/images/Portfolio/3.jpg" alt="" />
                                                <div className="portfolio_hover text-center">
                                                    <h6 className="text-uppercase text-white">Title</h6>
                                                    <p className=" text-white">Lorem ipsum dolor sit amet</p>
                                                    <div className="portfolio_hover_icon">
                                                        <a href="{% static 'assets/images/Portfolio/3.jpg" className="popup-img"><i className="fa fa-expand"></i></a>
                                                        <a href=""><i className="fa fa-search"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 m-top-30">
                                            <div className="portfolio_item portfolio_item2">
                                                <img src="assets/images/Portfolio/5.jpg" alt="" />
                                                <div className="portfolio_hover text-center">
                                                    <h6 className="text-uppercase text-white">Title</h6>
                                                    <p className=" text-white">Lorem ipsum dolor sit amet</p>
                                                    <div className="portfolio_hover_icon">
                                                        <a href="{% static 'assets/images/Portfolio/5.jpg" className="popup-img"><i className="fa fa-expand"></i></a>
                                                        <a href=""><i className="fa fa-search"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="portfolio_item portfolio_item3 sm-m-top-30">
                                        <img src="assets/images/Portfolio/1.jpg" alt="" />
                                        <div className="portfolio_hover text-center">
                                            <h6 className="text-uppercase text-white">Title</h6>
                                            <p className=" text-white">Lorem ipsum dolor sit amet</p>
                                            <div className="portfolio_hover_icon">
                                                <a href="{% static 'assets/images/Portfolio/1.jpg" className="popup-img"><i className="fa fa-expand"></i></a>
                                                <a href=""><i className="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 m-top-30">
                                    <div className="portfolio_item portfolio_item2">
                                        <img src="assets/images/Portfolio/6.jpg" alt="" />
                                        <div className="portfolio_hover text-center">
                                            <h6 className="text-uppercase text-white">Title</h6>
                                            <p className=" text-white">Lorem ipsum dolor sit amet</p>
                                            <div className="portfolio_hover_icon">
                                                <a href="{% static 'assets/images/Portfolio/6.jpg" className="popup-img"><i className="fa fa-expand"></i></a>
                                                <a href=""><i className="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 m-top-30">
                                    <div className="portfolio_item">
                                        <img src="assets/images/Portfolio/4.jpg" alt="" />
                                        <div className="portfolio_hover text-center">
                                            <h6 className="text-uppercase text-white">Title</h6>
                                            <p className=" text-white">Lorem ipsum dolor sit amet</p>
                                            <div className="portfolio_hover_icon">
                                                <a href="{% static 'assets/images/Portfolio/4.jpg" className="popup-img"><i className="fa fa-expand"></i></a>
                                                <a href=""><i className="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>{/* End off row  */}
                </div>{/* End off container  */}
            </section>{/*  End off Portfolio section */}


            {/* Skill Sections */}
            <section id="skill" className="skill roomy-100">
                <div className="container">
                    <div className="row">
                        <div className="main_skill">
                            <div className="col-md-6">
                                <div className="skill_content wow fadeIn">
                                    <h2>Our skill</h2>
                                    <div className="separator_left"></div>

                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                                        quis nostrud exerci tation ullamcorper suscipit lobortis 
                                        nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                        sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                        euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                        Ut wisi enim ad minim veniam, quis nostrud exerci tation 
                                        ullamcorper suscipit lobortis nisl ut aliquip 
                                        ex ea commodo consequat. </p>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill_bar sm-m-top-50">    
                                    <div className="teamskillbar clearfix m-top-20" data-percent="80%">
                                        <h6>GRAPHIC DESIGN</h6>
                                        <div className="teamskillbar-bar"></div>
                                    </div> {/*  End Skill Bar  */}

                                    <div className="teamskillbar clearfix m-top-50" data-percent="75%">
                                        <h6>WEB DESIGNE</h6>
                                        <div className="teamskillbar-bar"></div>
                                    </div> {/*  End Skill Bar  */}

                                    <div className="teamskillbar clearfix m-top-50" data-percent="90%">
                                        <h6>WEB DEVELOP</h6>
                                        <div className="teamskillbar-bar"></div>
                                    </div> 
                                     <div className="teamskillbar clearfix m-top-50" data-percent="90%">
                                        <h6>APP DEVELOP</h6>
                                        <div className="teamskillbar-bar"></div>
                                    </div> 


                                    {/*  End Skill Bar  */}
                                </div>
                            </div>
                        </div>
                    </div>{/* End off row */}
                </div>{/* End off container  */}
                <br />
                <br />
                <br />
                <hr />
               
                <div className="container">
                    <div className="row">
                        <div className="skill_bottom_content text-center">
                            <div className="col-md-3">
                                <div className="skill_bottom_item">
                                    <h2 className="statistic-counter">3468</h2>
                                    <div className="separator_small"></div>
                                    <h5><em>Projects Finished</em></h5>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="skill_bottom_item">
                                    <h2 className="statistic-counter">4638</h2>
                                    <div className="separator_small"></div>
                                    <h5><em>Happy Clients</em></h5>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="skill_bottom_item">
                                    <h2 className="statistic-counter">3468</h2>
                                    <div className="separator_small"></div>
                                    <h5><em>Hours of work</em></h5>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="skill_bottom_item">
                                    <h2 className="statistic-counter">3468</h2>
                                    <div className="separator_small"></div>
                                    <h5><em>Cup of coffee</em></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* End off container -- */}
             {/* End off Skill section  */}

            </section>

            {/* Testimonial Section */}
            <section id="testimonial" className="testimonial fix">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="main_testimonial roomy-100">
                            <div className="head_title text-center">
                                <h2 className="text-white">OUR TESTIMONIALS</h2>
                            </div>
                            <div className="testimonial_slid text-center">
                                <div className="testimonial_item">
                                    <div className="col-sm-10 col-sm-offset-1">
                                        <p className="text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
                                            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper 
                                            suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>

                                        <div className="test_authour m-top-30">
                                            <h6 className="text-white m-bottom-20">JOHN DOE - THEMEFOREST USER</h6>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial_item">
                                    <div className="col-sm-10 col-sm-offset-1">
                                        <p className="text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
                                            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper 
                                            suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>

                                        <div className="test_authour m-top-30">
                                            <h6 className="text-white m-bottom-20">JOHN DOE - THEMEFOREST USER</h6>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial_item">
                                    <div className="col-sm-10 col-sm-offset-1">
                                        <p className="text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
                                            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper 
                                            suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>

                                        <div className="test_authour m-top-30">
                                            <h6 className="text-white m-bottom-20">JOHN DOE - THEMEFOREST USER</h6>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial_item">
                                    <div className="col-sm-10 col-sm-offset-1">
                                        <p className="text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
                                            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper 
                                            suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>

                                        <div className="test_authour m-top-30">
                                            <h6 className="text-white m-bottom-20">JOHN DOE - THEMEFOREST USER</h6>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* End off row */}
                </div>{/* End off container  */}
            </section> {/* End off Testimonial section  */}


            {/* Pricing Section */}
            <section id="pricing" className="pricing lightbg">
                <div className="container">
                    <div className="row">
                        <div className="main_pricing roomy-100">
                            <div className="col-md-8 col-md-offset-2 col-sm-12">
                                <div className="head_title text-center">
                                    <h2>OUR PRICING</h2>
                                    <div className="separator_auto"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt tation ullamcorper 
                                        suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-12">
                                <div className="pricing_item">
                                    <div className="pricing_head p-top-30 p-bottom-100 text-center">
                                        <h3 className="text-uppercase">STARTER</h3>
                                    </div>
                                    <div className="pricing_price_border text-center">
                                        <div className="pricing_price">
                                            <h3 className="text-white">रू2000</h3>
                                            <p className="text-white">per month</p>
                                        </div>
                                    </div>

                                    <div className="pricing_body bg-white p-top-110 p-bottom-60">
                                        <ul>
                                            <li><i className="fa fa-check-circle text-primary"></i> <span>10</span> user</li>
                                            <li className="disabled"><i className="fa fa-times-circle"></i> Unlimited Bandwidth</li>
                                            <li className="disabled"><i className="fa fa-times-circle"></i> Full Statistics</li>

                                        </ul>
                                        <div className="pricing_btn text-center m-top-40">
                                            <a href="" className="btn btn-primary">CHOOSE PLAN</a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/*  End off col-md-4  */}

                            <div className="col-md-4 col-sm-12">
                                <div className="pricing_item sm-m-top-30">
                                    <div className="pricing_top_border"></div>
                                    <div className="pricing_head p-top-30 p-bottom-100 text-center">
                                        <h3 className="text-uppercase">PREMIUM</h3>
                                    </div>
                                    <div className="pricing_price_border text-center">
                                        <div className="pricing_price">
                                            <h3 className="text-white">रू3000</h3>
                                            <p className="text-white">per month</p>
                                        </div>
                                    </div>

                                    <div className="pricing_body bg-white p-top-110 p-bottom-60">
                                        <ul>
                                            <li><i className="fa fa-check-circle text-primary"></i> <span>50</span> user</li>
                                            <li><i className="fa fa-check-circle text-primary"></i> Unlimited Bandwidth</li>
                                            <li className="disabled"><i className="fa fa-times-circle"></i> Full Statistics</li>
                                        </ul>
                                        <div className="pricing_btn text-center m-top-40">
                                            <a href="" className="btn btn-primary">CHOOSE PLAN</a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/*  End off col-md-4  */}

                            <div className="col-md-4 col-sm-12">
                                <div className="pricing_item sm-m-top-30">
                                    <div className="pricing_head p-top-30 p-bottom-100 text-center">
                                        <h3 className="text-uppercase">bUSINESS</h3>
                                    </div>
                                    <div className="pricing_price_border text-center">
                                        <div className="pricing_price">
                                            <h3 className="text-white">रू4000</h3>
                                            <p className="text-white">per month</p>
                                        </div>
                                    </div>

                                    <div className="pricing_body bg-white p-top-110 p-bottom-60">
                                        <ul>
                                            <li><i className="fa fa-check-circle text-primary"></i> Unlimited Users</li>
                                            <li><i className="fa fa-check-circle text-primary"></i> Unlimited Bandwidth</li>
                                            <li><i className="fa fa-check-circle text-primary"></i> Full Statistics</li>
                                        </ul>
                                        <div className="pricing_btn text-center m-top-40">
                                            <a href="" className="btn btn-primary">CHOOSE PLAN</a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/*  End off col-md-4  */}

                        </div>
                    </div>{/* End off row */}
                </div>{/* End off container  */}
            </section> {/* End off Pricing section  */}



            {/* client brand section */}
            <section id="cbrand" className="cbrand">
                <div className="container">
                    <div className="row">
                        <div className="main_cbrand text-center roomy-100">
                            <div className="col-md-2 col-sm-4 col-xs-6">
                                <div className="cbrand_item m-bottom-10">
                                    <a href=""><img src="assets/images/clients/1.jpg" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6">
                                <div className="cbrand_item m-bottom-10">
                                    <a href=""><img src="assets/images/clients/2.jpg" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6">
                                <div className="cbrand_item m-bottom-10">
                                    <a href=""><img className="" src="{% static 'assets/images/clients/5.jpg" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6">
                                <div className="cbrand_item m-bottom-10">
                                    <a href=""><img src="assets/images/clients/4.jpg" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6">
                                <div className="cbrand_item m-bottom-10">
                                    <a href=""><img src="assets/images/clients/3.jpg" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6">
                                <div className="cbrand_item m-bottom-10">
                                    <a href=""><img src="assets/images/clients/1.jpg" alt="" /></a> 
                                </div>
                            </div>
                        </div>
                    </div>{/*  End off row  */}
                </div>{/*  End off container  */}
            </section>{/*  End off Cbrand section  */}


            



            {/* Blog Section */}
            <section id="blog" className="blog">
                <div className="container">
                    <div className="row">
                        <div className="main_blog text-center roomy-100">
                            <div className="col-sm-8 col-sm-offset-2">
                                <div className="head_title text-center">
                                    <h2>RECENT BLOGS</h2>
                                    <div className="separator_auto"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt tation ullamcorper 
                                        suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog_item m-top-20">
                                    <div className="blog_item_img">
                                        <img src="assets/images/Blog/1.jpg" alt="" />
                                    </div>
                                    <div className="blog_text roomy-40">
                                        <h6>PLEASUARE WITHOUT CONSCIENCE</h6>
                                        <p><em><a href="">May 15, 2016</a> /<a href="">admin</a>/<a href=""> Co-working</a></em></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog_item m-top-20">
                                    <div className="blog_item_img">
                                        <img src="assets/images/Blog/2.jpg" alt="" />
                                    </div>
                                    <div className="blog_text roomy-40">
                                        <h6>PLEASUARE WITHOUT CONSCIENCE</h6>
                                        <p><em><a href="">May 15, 2016</a> /<a href="">admin</a>/<a href=""> Co-working</a></em></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog_item m-top-20">
                                    <div className="blog_item_img">
                                        <img src="assets/images/Blog/3.jpg" alt="" />
                                    </div>
                                    <div className="blog_text roomy-40">
                                        <h6>PLEASUARE WITHOUT CONSCIENCE</h6>
                                        <p><em><a href="">May 15, 2016</a> /<a href="">admin</a>/<a href=""> Co-working</a></em></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* End off row  */}
                </div>{/* End off container  */}
            </section>{/*  End off Blog section */}



            {/* Maps Section */}
            <div className="main_maps text-center fix">
                <div className="overlay"></div>
                <div className="maps_text">
                    <h3 className="text-white" onclick="showmap()">FIND US ON THE MAP <i className="fa fa-angle-down"></i></h3>
                    <div id="map_canvas" className="mapheight"></div>
                </div>
            </div>{/*  End off Maps Section */}

            <HomeFooter />

                   </div>
        );
    }
}