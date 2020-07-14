import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'reactstrap'
import { Items } from '../../data/mainPageItem';
import './cart.css'
import { Link } from "react-router-dom";

class Cart extends Component {

    constructor(props) {
        super(props);
    }

    render(props) {
        let cartItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
        let subTotalAmount = 0
        cartItems.map(e => subTotalAmount = subTotalAmount + e.totalAmount)
        return (
            <Container className='p-4 mt-4' style={{ border: '1px solid lightgrey' }}>
                {
                    cartItems
                        ? cartItems.map((cartItem) =>
                            <div className='item_box'>
                                <Row>
                                    <Col md={3}>
                                        <img src={cartItem.image_url} height='150' />
                                    </Col>
                                    <Col md={5}>
                                        <h2>{cartItem.productName}</h2>
                                        <p style={{ margin: '0px' }}>Qty# {cartItem.qty}</p>
                                        <p style={{ margin: '0px' }}>Amount# {cartItem.totalAmount}</p>
                                    </Col>
                                </Row>
                            </div>)

                        : null
                }

                <div className='item_box'>
                    <Row>
                        <Col md={6}>
                            <p style={{ color: '#183153' }}>Sub Total # ${subTotalAmount}</p>
                        </Col>
                        <Col md={6}>
                            <Link to="/">
                                <Button className='checkout_btn' onClick={() => localStorage.clear()}>Checkout </Button>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default Cart;
