import React , { Component } from "react";
import ReactDOM from 'react-dom';
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
import SliderComponent from './SliderComponent';
import ProductCategory from './Product/ProductCategory';
import Popular from './Product/Popular';
export default class HomeBody extends Component{

    render(){

        return(
            <React.Fragment>
                <div>
                    <HomeHeader />
                    <SliderComponent />
                    <ProductCategory />
                    <Popular />
                    <HomeFooter />
                </div>
        </React.Fragment>
        );
    }
} 