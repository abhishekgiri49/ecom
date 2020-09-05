import React from "react";

export default class DesktopMainBar extends React.Component{

    
    render(){
        return(
            <div>  
                <div className="desktop-only main-bar">
                    <div className="container">
                        {/* main bar */}
                        <div className="flex-row">
                            <div className="cd-dropdown-wrapper">
                            <a className="cd-dropdown-trigger desktop-only" href="#0"><i className="fas fa-bars"></i>All Departments</a>
                            <a className="cd-dropdown-trigger mobile-trigger mobile-only" href="#0"><span uk-icon="icon: menu"></span></a>
                            <nav className="cd-dropdown">
                                <h2>Title</h2>
                                <a href="#" className="cd-close">Close</a>
                                <ul className="cd-dropdown-content liststyle--none">
                                    <li className="hidden-md hidden-lg">
                                        <form className="cd-search">
                                            <input type="search" placeholder="Search..." />
                                        </form>
                                    </li>
                                    <li className="has-children">
                                        <a href="">Living</a>

                                        <ul className="cd-secondary-dropdown is-hidden liststyle--none">
                                            <li className="go-back"><a href="#0">Menu</a></li>
                                            <li className="see-all"><a href="#">All Living</a></li>
                                            <li className="has-children">
                                                <a href="#">Sofa Set</a>

                                                <ul className="is-hidden liststyle--none">
                                                    <li className="go-back"><a href="#0">Living</a></li>
                                                    <li className="see-all"><a href="#">All Sofa Set</a></li>
                                                    <li><a href="">Fabric Sofa Sets</a></li>
                                                    <li><a href="">L Shaped Sofa Sets</a></li>
                                                    <li><a href="">Wooden Sofa Sets</a></li>
                                                    <li><a href="">Sofa cum Beds</a></li>
                                                    <li><a href="">Leather Sofa Sets</a></li>
                                                    <li><a href="">Leatherette Sofa Sets</a></li>
                                                </ul>
                                            </li>

                                            <li className="has-children">
                                                <a href="#">Chairs</a>

                                                <ul className="is-hidden liststyle--none">
                                                    <li className="go-back"><a href="#0">Living</a></li>
                                                    <li className="see-all"><a href="#">All Chairs</a></li>
                                                    <li><a href="">Lounge Chairs</a></li>
                                                    <li><a href="">Recliners</a></li>
                                                    <li><a href="">Rocking Chairs</a></li>
                                                    <li><a href="">Accent Chairs</a></li>
                                                    <li><a href="">Designer Chairs</a></li>
                                                    <li><a href="">Ottomans & Stools</a></li>
                                                    <li><a href="">Benches</a></li>
                                                </ul>
                                            </li>

                                            <li className="has-children">
                                                <a href="#">Tables</a>

                                                <ul className="is-hidden liststyle--none">
                                                    <li className="go-back"><a href="#0">Living</a></li>
                                                    <li className="see-all"><a href="#">All Tables</a></li>
                                                    <li><a href="">Coffee Tables</a></li>
                                                    <li><a href="">Nested Tables</a></li>
                                                    <li><a href="">Side & End Tables</a></li>
                                                    <li><a href="">Coffee Table Sets</a></li>
                                                    <li><a href="">Console Table</a></li>
                                                </ul>
                                            </li>

                                            <li className="has-children">
                                                <a href="#">Storage</a>

                                                <ul className="is-hidden liststyle--none">
                                                    <li className="go-back"><a href="#0">Living</a></li>
                                                    <li className="see-all"><a href="#">All Storage</a></li>
                                                    <li><a href="">Bookshelves</a></li>
                                                    <li><a href="">TV Units</a></li>
                                                    <li><a href="">Shoe Racks</a></li>
                                                    <li><a href="">Living Room Sets</a></li>
                                                    <li><a href="">Storage Solutions</a></li>
                                                    <li><a href="">Wall Shelves</a></li>
                                                </ul>
                                            </li>
                                        </ul> {/*  .cd-secondary-dropdown  */}
                                    </li> {/*  .has-children  */}

                                    <li className="has-children">
                                        <a href="#">Bedroom</a>

                                    </li> {/*  .has-children  */}

                                    <li className="has-children">
                                        <a href="#">Dining</a>
                                    </li> {/*  .has-children  */}
                                    <li className="has-children">
                                        <a href="#">Storage</a>
                                    </li> {/*  .has-children  */}
                                    <li className="has-children">
                                        <a href="#">Study</a>
                                    </li> {/*  .has-children  */}
                                    <li className="has-children">
                                        <a href="#">Mattresses</a>
                                    </li> {/*  .has-children  */}
                                    <li className="has-children">
                                        <a href="#">Decor</a>
                                    </li> {/*  .has-children  */}
                                    <li className="has-children">
                                        <a href="#">Collection</a>
                                    </li> {/*  .has-children  */}
                                </ul> {/*  .cd-dropdown-content  */}
                            </nav> {/*  .cd-dropdown  */}
                        </div> {/*  .cd-dropdown-wrapper  */}

                            <form className="navbar-search" method="">
                                <label className="sr-only screen-reader-text" htmlFor="search">Search for:</label>
                                    <input type="text" className="form-control search-field product-search-field" value=""
                                        placeholder="Search for products" />
                                    <div className="search-iconwrap">
                                        <span uk-icon="search"></span>
                                    </div>
                            </form>

                            <ul className="header-wishlist nav navbar-nav">
                                <li className="nav-item">
                                    <a href="" className="nav-link">
                                        <i className="far fa-heart"></i>
                                        <span id="top-cart-wishlist-count" className="value">0</span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="header-cart liststyle--none">
                                <li className="animate-dropdown dropdown ">
                                    <a className="cart-contents" href="" title="View your shopping cart">
                                        <i className="fas fa-shopping-cart"></i>
                                        <span className="count">10</span>
                                        <span className="amount">
                                            <span className="price-label">Your Cart</span>
                                        </span>
                                    </a>
                                    <div uk-dropdown="mode:click;pos: top-left;duration:0;delay-show:0;delay-hide:0" className="uk-padding-small">
                                        <a href="" className="mini-cart">
                                            <figure>
                                                <img width="300" height="143"
                                                    src="https://www.ulcdn.net/media/collections/listing/Edward_-_main_3_copy.jpg?1550048905"
                                                    alt="" />
                                            </figure>
                                            <div className="newscard-content ">
                                                <span className="item-title">EDWARD SOFA</span>
                                                <div>1 x <span className="item-price">Rs.4250</span></div>
                                            </div>
                                        </a>
                                        <a href="" className="mini-cart">
                                            <figure>
                                                <img width="300" height="143"
                                                    src="https://www.ulcdn.net/media/collections/listing/glen_sofa.jpg?1547109173"
                                                    alt="" />
                                            </figure>
                                            <div className="newscard-content ">
                                                <span className="item-title">GLEN WOODEN SOFA </span>
                                                <div>1 x <span className="item-price">Rs.10425</span></div>
                                            </div>
                                        </a>
                                        <div className="item-checkout">
                                            <div className="item-subtotal">Subtotal: <span className="item-price">Rs.425</span>
                                            </div>
                                            <div className="content">
                                                <a href="" className="">Checkout</a>
                                                <a href="" className="">View cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>

            </div>
        );
    }


}
            