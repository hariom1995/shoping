import React, { Component } from 'react';
import { Row, Col, Container, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import './productDetail.css'
import { Link } from "react-router-dom";


class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 0
        }
    }
    addToCart = (getItem, cartItemsAdded) => {

        let qtyCurr = this.state.qty
        let totalAmountCurr = this.state.qty * getItem.price
        let addItem = {
            id: getItem.id,
            productName: getItem.productName,
            image_url: getItem.image_url,
            price: getItem.price,
            qty: qtyCurr,
            totalAmount: totalAmountCurr,
        }
        cartItemsAdded.push(addItem);
        localStorage.setItem('selectedItems', JSON.stringify(cartItemsAdded));
    }

    render(props) {
        let cartItemsAdded = JSON.parse(localStorage.getItem('selectedItems')) || [];
        return (
            <Container className='mt-5'>
                <Row>
                    <Col md={5}>
                        <img className='product_image' src={this.props.location.query.item.image_url} />
                    </Col>
                    <Col md={4}>
                        <div style={{ paddingTop: '30px' }}>
                            <h3>{this.props.location.query.item.productName}</h3>
                            <p>${this.props.location.query.item.price}</p>
                            <Row>
                                <input type={Number} onChange={(e) => { this.setState({ qty: e.target.value }) }} />
                                <Link to='/cart'>
                                    <Button className='add-to-cart-btn'
                                        onClick={() => this.addToCart(this.props.location.query.item, cartItemsAdded)}>Add to cart</Button>
                                </Link>
                            </Row>
                        </div>
                    </Col>
                    <Col md={12} className='mt-3'>
                        <h3>About this product</h3>
                        <p>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                    </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProductDetail;