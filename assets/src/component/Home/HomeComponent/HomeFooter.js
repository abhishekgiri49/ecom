import React from "react";

export default class Footer extends React.Component{

    
    render(){
        return(
            <div>            
                <section id="contact" className="contact bg-mega fix">
                <div className="container">
                    <div className="row">
                        <div className="main_contact roomy-100 text-white">
                            <div className="col-md-4">
                                <div className="rage_widget">
                                    <div className="widget_head">
                                        <h3 className="text-white">Contact</h3>
                                        <div className="separator_small"></div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                                        quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                                        ut aliquip ex ea commodo consequat. </p>

                                    <div className="widget_socail m-top-30">
                                        <ul className="list-inline">
                                            <li><a href=""><i className="fa fa-facebook"></i></a></li>
                                            <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                            <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href=""><i className="fa fa-vimeo"></i></a></li>
                                            <li><a href=""><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 sm-m-top-30">
                                <form className="" action="subcribe.php">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group"> 
                                                <input id="first_name" name="first_name" type="text" placeholder="Name" className="form-control" required="" />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">  
                                                <input id="phone" name="phone" type="text" placeholder="Phone" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="form-group">  
                                                <textarea className="form-control" rows="6" placeholder="Message"></textarea>
                                            </div>
                                            <div className="form-group text-center">
                                                <a href="" className="btn btn-primary">SEND MESSAGE</a>
                                            </div>
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="scrollup">
                <a href="#" /><i className="fa fa-chevron-up"></i>
            </div>


            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row">
                        <div className="main_footer text-center p-top-40 p-bottom-30">
                            <p className="wow fadeInRight" data-wow-duration="1s">
                                Made with 
                                <i className="fa fa-heart"></i>
                                by 
                                <a target="_blank" href="http://www.glimmerit.com.np">Glimmer IT</a> 
                                2017. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            </div>

        );
    }


}