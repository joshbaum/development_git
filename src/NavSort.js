import React from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

class NavSort extends React.Component {

    render() {
        return(
            <Navbar bg="light" expand="lg">
                {this.props.title}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav>
                    <NavDropdown title={this.props.display} id="basic-nav-dropdown">
                        <NavDropdown.Item eventKey={"id"} onSelect={this.props.sort}>Select</NavDropdown.Item>
                        <NavDropdown.Item eventKey={"asc"} onSelect={this.props.sort}>Lowest to Highest</NavDropdown.Item>
                        <NavDropdown.Item eventKey={"desc"} onSelect={this.props.sort}>Highest to Lowest</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}

export default NavSort