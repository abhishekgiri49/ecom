import React , { Component } from "react";
import ReactDOM from 'react-dom';
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
import Slider from './Slider';
import ProductCategory from './Product/ProductCategory';
import Popular from './Product/Popular';
export default class HomeBody extends Component{

    render(){

        return(
            <React.Fragment>
                <div>
                    <HomeHeader />
                    <Slider />
                    <ProductCategory />
                    <Popular />
                    <HomeFooter />
                </div>
        </React.Fragment>
        );
    }
} 