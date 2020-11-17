import React from 'react'
import DisplayCart from './DisplayCart'
import {Navbar} from 'react-bootstrap'

class Cart extends React.Component {
    render() {
        const total = this.props.cart.reduce((totalCost, cartItem) => totalCost + cartItem.product.price * cartItem.quantity, 0)
        return (
            <div className="cart">
                <h2>Shopping Cart</h2>
                <DisplayCart cartItems={this.props.cart} remItem={this.props.remItem} incItem={this.props.incItem} decItem={this.props.decItem}/>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>Total: ${total}</Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default Cart