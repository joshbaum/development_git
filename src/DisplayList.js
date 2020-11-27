import React from 'react'
import {Card, Button, Row} from 'react-bootstrap'

class DisplayList extends React.Component {
    render() {
        // render each item in the list the same way (using the Card react-bootstrap item), using map
        return (  
            <Row>
                {this.props.list.map(item => 
                    <Card key={item.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{"$" + item.price}</Card.Subtitle>
                            <Card.Text> {item.type}</Card.Text>
                            <Card.Text> {item.size}</Card.Text>
                            {/* use this method passed as a prop to update the state of the filteredlist */}
                            <Button variant="primary" onClick={() => this.props.addItem({item})} >Add to Cart</Button>{' '}
                        </Card.Body>
                    </Card>
                )}
            </Row>
        )
    }
}

export default DisplayList