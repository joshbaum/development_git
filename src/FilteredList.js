import React from 'react'
import DisplayList from './DisplayList.js'
import NavFilter from './NavFilter.js'
import NavSort from './NavSort.js'
import Cart from './Cart.js'
import {Col, Row, Container} from 'react-bootstrap'

class FilteredList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: "All",
            type: "All",
            order: "id",
            cart: []
        };
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
        const filtered = this.props.list.filter(this.matchesFilterSize).filter(this.matchesFilterType);
        const sorted = filtered.sort(this.matchesSort)
        return (
            <Container fluid>
                <Row>
                    <Col lg={7}>
                        <div className="mb-4">
                            <NavFilter filter={this.onSelectFilterSize} title={"Size:"} options={["Medium", "Large"]}/>
                            <NavFilter filter={this.onSelectFilterType} title={"Type:"} options={["Meat", "Veggie"]}/>
                            <NavSort sort={this.onSelectSortPrice} title={"Sort By Price:"} display={this.sortDisplayName()}/>
                        </div>
                        <DisplayList list={sorted} addItem={this.onClickAddItem}/>
                    </Col>
                    <Col>
                        <Cart cart={this.state.cart} remItem={this.onClickRemoveItem} incItem={this.onClickIncreaseQuantity} decItem={this.onClickDecreaseQuantity}/>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default FilteredList;