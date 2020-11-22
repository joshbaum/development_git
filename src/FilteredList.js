import React from 'react'
import DisplayList from './DisplayList.js'
import NavFilter from './NavFilter.js'
import NavSort from './NavSort.js'
import Cart from './Cart.js'
import {Col, Row, Container} from 'react-bootstrap'

class FilteredList extends React.Component {
    constructor(props) {
        super(props);
        // by default, show all sizes and types of food, display in order of id, and an empty cart
        this.state = {
            size: "All",
            type: "All",
            order: "id",
            cart: []
        };
        // each of these methods alters the state of this component and are passed to other components
        this.onSelectFilterSize = this.onSelectFilterSize.bind(this);
        this.onSelectFilterType = this.onSelectFilterType.bind(this);
        this.onSelectSortPrice = this.onSelectSortPrice.bind(this);
        this.onClickAddItem = this.onClickAddItem.bind(this);
        this.onClickRemoveItem = this.onClickRemoveItem.bind(this);
        this.onClickIncreaseQuantity = this.onClickIncreaseQuantity.bind(this);
    }

    onSelectFilterSize = event => {
        this.setState({
            size: event
        });
    };

    onSelectFilterType = event => {
        this.setState({
            type: event
        });
    };

    onSelectSortPrice = event => {
        this.setState({
            order: event
        });
    };
    
    
    onClickAddItem = event => {
        let updatedCart = [...this.state.cart]
        const itemIndex = this.state.cart.findIndex(cartItem => cartItem.product.id === event.item.id)
        // check to see if this item is already in the cart, if so, update its count
        if (itemIndex === -1) {
            updatedCart.push({product: event.item, quantity: 1})
        } else {
            updatedCart[itemIndex] = {...updatedCart[itemIndex], quantity: updatedCart[itemIndex].quantity + 1}
        }
        this.setState({
            cart: updatedCart
        });
    };

    onClickRemoveItem = event => {
        let updatedCart = [...this.state.cart]
        const itemIndex = this.state.cart.findIndex(cartItem => cartItem.product.id === event.item.product.id)
        updatedCart.splice(itemIndex, 1)
        this.setState({
            cart: updatedCart
        });
    };

    onClickIncreaseQuantity = event => {
        let updatedCart = [...this.state.cart]
        const itemIndex = this.state.cart.findIndex(cartItem => cartItem.product.id === event.item.product.id)
        updatedCart[itemIndex] = {...updatedCart[itemIndex], quantity: updatedCart[itemIndex].quantity + 1}
        this.setState({
            cart: updatedCart
        });
    };

    onClickDecreaseQuantity = event => {
        let updatedCart = [...this.state.cart]
        const itemIndex = this.state.cart.findIndex(cartItem => cartItem.product.id === event.item.product.id)
        updatedCart[itemIndex] = {...updatedCart[itemIndex], quantity: updatedCart[itemIndex].quantity - 1}
        this.setState({
            cart: updatedCart
        });
    };


    // the "matches" methods help render the page based on its state. these alter the product
    // catalog to order and display the correct items given the current state. they are called
    // each time the page re-renders
    matchesFilterSize = item => {
        if (this.state.size === "All") { 
            return true
        } else if (this.state.size === item.size) {
            return true
        } else {
            return false
        }
    }

    matchesFilterType = item => {
        if (this.state.type === "All") { 
            return true
        } else if (this.state.type === item.type) {
            return true
        } else {
            return false
        }
    }

    matchesSort = (a, b) => {
        if (this.state.order === "id") { 
            return a.id - b.id
        } else if (this.state.order === "asc") {
            return a.price - b.price
        } else if (this.state.order === "desc") {
            return b.price - a.price
        }
    }

    sortDisplayName() {
        if (this.state.order === "id") { 
            return "Select"
        } else if (this.state.order === "asc") {
            return "Lowest to Highest"
        } else if (this.state.order === "desc") {
            return "Highest to Lowest"
        }
    }

    render() {
        // update the product list
        const filtered = this.props.list.filter(this.matchesFilterSize).filter(this.matchesFilterType);
        const sorted = filtered.sort(this.matchesSort)
        return (
            // usee grid layout, show product list and cart side by side
            <Container fluid>
                <Row>
                    <Col lg={7}>
                        {/* the top of page should contain the sorting + fitlering options 
                        here, we pass the methods to alter state to the children components */}
                        <div className="mb-4">
                            <NavFilter filter={this.onSelectFilterSize} title={"Size:"} options={["Medium", "Large"]}/>
                            <NavFilter filter={this.onSelectFilterType} title={"Type:"} options={["Meat", "Veggie"]}/>
                            <NavSort sort={this.onSelectSortPrice} title={"Sort By Price:"} display={this.sortDisplayName()}/>
                        </div>
                        <DisplayList list={sorted} addItem={this.onClickAddItem}/>
                    </Col>
                    <Col>
                        {/* pass the methods specific to altering the state of the cart to the cart component */}
                        <Cart cart={this.state.cart} remItem={this.onClickRemoveItem} incItem={this.onClickIncreaseQuantity} decItem={this.onClickDecreaseQuantity}/>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default FilteredList;