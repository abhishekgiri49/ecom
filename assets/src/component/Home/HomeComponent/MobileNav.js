import React from "react";

export default class MobileNav extends React.Component{

    
    render(){
        const mystyle = {
            fontSize: "1.8em",
            backgroundColor: "ED7745",
            padding: "0 10px",
            fontFamily: "Arial"
          };
        return(
            <div>  
                <div className="mobile-only container-fluid">
                    <div className="mobile-header">
                        <div className="flex-row">
                            <div className="site-branding">
                                    
                                <a href="#">
                                    <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1571306929/logo_k1p18f.svg" alt="" />

                                </a>
                            </div>

                            <div className="mobile-header-links">
                                <ul className="liststyle--none">
                                    <li className="my-account">
                                        <a href="" className="has-icon"><i className="far fa-user"></i></a>
                                    </li>
                                    <li className="wishlist">
                                        <a href="" className="has-icon"><i className="far fa-heart"></i>
                                            <span className="count">0</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="sticky-wrapper">
                            <div className="sticky-wrap">
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
                                    <div className="site-search">
                                        <div className="product_search">
                                            <form role="search" className="product-search-form" >
                                                <label className="sr-only screen-reader-text" htmlFor="product-search-field">Search for:</label>
                                                <input type="search" id="product-search-field" className="search-field" placeholder="Search products…" value="" name="s" />
                                                <input type="submit" value="Search" />
                                            </form>
                                        </div>
                                    </div>

                                    <a className="mobile-header-cart-link has-icon" href="" title="View your shopping cart">
                                        <span className="cart-icon" uk-icon="icon: cart"></span><span className="count">2</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        );
    }


}
            