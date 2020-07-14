import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Container } from 'reactstrap'
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Container>
                    <Row>
                        <Col md={6} className='white-color'>
                        <Link className='white-color' to="/">
                            <span style={{ fontSize: '22px' }}>
                                <i class="fa fa-coffee" aria-hidden="true"></i>
                            </span>
                            <span>  &nbsp;ReactReverse </span>
                        </Link>
                        </Col>
                        <Col md={6} className='white-color' style={{textAlign:'end'}}>
                            <>
                                <span style={{ fontSize: '22px' }}>
                                    <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                </span>
                                <span className='white-color'>
                                    &nbsp;
                                <Link className='white-color' to="/cart">
                                        Cart
                                </Link>
                                </span>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </>

                            <>
                                <span style={{ fontSize: '22px' }}>
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </span>
                                <span className='white-color'>
                                    &nbsp;
                                <Link className='white-color' to="/cart">
                                        Account
                                </Link>
                                </span>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </>

                            <>
                                <span style={{ fontSize: '22px' }}>
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </span>
                                <span className='white-color'>
                                    &nbsp;
                                <Link className='white-color' to="/cart">
                                        Logout
                                </Link>
                                </span>
                            </>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Header;