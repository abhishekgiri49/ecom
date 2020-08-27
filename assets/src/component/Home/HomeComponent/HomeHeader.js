import React from "react";
export class HomeHeader extends React.Component{


    render(){
        
        return(

            <nav className="navbar navbar-default navbar-fixed white no-background bootsnav">
                {/*  Start Top Search  */}
                <div className="top-search">
                    <div className="container">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-search"></i></span>
                            <input type="text" className="form-control" placeholder="Search" />
                            <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
                        </div>
                    </div>
                </div>
                {/*  End Top Search  */}

                <div className="container">    
                    {/*  Start Atribute Navigation  */}
                    <div className="attr-nav">
                        <ul>
                            <li className="dropdown">
                                
                                <ul className="dropdown-menu cart-list">
                                    <li>
                                       
                                    </li>
                                </ul>
                            </li>
                            <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
                            <li className="side-menu"><a href="#"><i className="fa fa-bars"></i></a></li>
                        </ul>
                    </div>        
                    {/*  End Atribute Navigation  */}

                    {/*  Start Header Navigation  */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand" href="#brand">

                            <img src="assets/images/logoo.png" className="logo logo-display m-top-10" alt="" />
                            <img src="assets/images/logo.png" className="logo logo-scrolled" alt="" />

                        </a>
                    </div>
                    {/*  End Header Navigation  */}

                    {/*  Collect the nav links, forms, and other content for toggling  */}
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                            <li><a href="#hello">Home</a></li>                    
                            <li><a href="#about">About</a></li>                    
                            <li><a href="#service">Services</a></li>                    
                            <li><a href="#portfolio">Portfolio</a></li>                    
                            <li><a href="#pricing">Pricing</a></li>                    
                            <li><a href="#blog">Blog</a></li>                    
                            <li><a href="#contact">Contact</a></li>  
                        </ul>
                    </div>{/*  /.navbar-collapse  */}
                </div>  


                {/*  Start Side Menu  */}
                <div className="side">
                    <a href="#" className="close-side"><i className="fa fa-times"></i></a>
                    <div className="widget">
                        <h6 className="title">Custom Pages</h6>
                        <ul className="link">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="widget">
                        <h6 className="title">Additional Links</h6>
                        <ul className="link">
                            <li><a href="#">RHomepge</a></li>
                            <li><a href="#">New Page </a></li>
                            <li><a href="#">New Page Sections</a></li>
                            <li><a href="#">New Page 1</a></li>
                            <li><a href="#">New Page 2</a></li>
                        </ul>
                    </div>
                </div>
                {/*  End Side Menu  */}

            </nav>


        );
    }

}


  export default HomeHeader;
  