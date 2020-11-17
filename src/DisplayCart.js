import React from 'react'
import {Card, Button, Row} from 'react-bootstrap'

class DisplayCart extends React.Component {
    render() {
        return (
            <Row>
                {this.props.cartItems.map(item => 
                    <Card key={item.product.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="logo.svg" />
                        <Card.Body>
                            <Card.Title>{item.product.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{item.product.price}</Card.Subtitle>
                            <Card.Text>{item.product.type}</Card.Text>
                            <Card.Text>{item.product.size}</Card.Text>
                            <Card.Text>
                                <Button variant="secondary" onClick={() => this.props.decItem({item})} disabled={item.quantity === 1} >-</Button>{' '} 
                                {item.quantity} 
                                <Button variant="secondary" className="ml-1" onClick={() => this.props.incItem({item})} >+</Button>{' '} 
                            </Card.Text>
                            <Button variant="primary" onClick={() => this.props.remItem({item})} >Remove</Button>{' '}
                        </Card.Body>
                    </Card>
                )}
            </Row>
        )
    }
}

export default DisplayCart