import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './landing.css'
import { Items } from '../../data/mainPageItem';
import { Row, Col, Container, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'


class Landing extends Component {

    render() {
        return (
            <Container>
                <Row>
                    {
                        Items.map(item =>
                            <Col
                                key={item.id} md={3}
                                className='mt-4 product-card'
                                style={{ maxHeight: '300px' }}>
                                <Card>
                                    <Link 
                                    to={{pathname: `/product`, query: {item}}}
                                    // to="cart" 
                                    // params={{ testvalue: "hello" }}
                                    >
                                        <CardImg top height='210' width="100%" src={`${item.image_url}`} alt="Card image cap" />
                                        <CardBody style={{ textAlign: 'center' }}>
                                            <CardTitle>{item.productName}</CardTitle>
                                            <CardSubtitle>${item.price}</CardSubtitle>
                                        </CardBody>
                                    </Link>
                                </Card>
                            </Col>)
                    }
                </Row>
            </Container>

        );
    }
}

export default Landing;
