import React from 'react'
import DisplayCart from './DisplayCart'
import {Navbar} from 'react-bootstrap'

class Cart extends React.Component {
    render() {
        // use built-in js function reduce to accumulate price of cart
        const total = this.props.cart.reduce((totalCost, cartItem) => totalCost + cartItem.product.price * cartItem.quantity, 0)
        return (
            <div className="cart">
                <h2>Shopping Cart</h2>
                {/* display the cart items with the live-updating cart cost below */}
                {/* continue to pass the props (that update the state of filteredlist) this component was given to the display cart component */}
                <DisplayCart cartItems={this.props.cart} remItem={this.props.remItem} incItem={this.props.incItem} decItem={this.props.decItem}/>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>Total: ${total}</Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default Cart