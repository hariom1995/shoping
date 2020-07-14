import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/header/header'
import Landing from '../components/landing/landing'
import Cart from '../components/cart/cart'
import ProductDetail from '../components/productDetail/productDetail'

class Routs extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/product" component={ProductDetail} />
                </Switch>
            </Router>
        );
    }
}

export default Routs;
