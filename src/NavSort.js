import React from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

class NavSort extends React.Component {

    render() {
        return(
            <Navbar bg="light" expand="lg">
                {this.props.title}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav>
                    {/* the title of the dropdown depends on the current sort method */}
                    <NavDropdown title={this.props.display} id="basic-nav-dropdown">
                        {/* use event keys to update the state using the onSelect method */}
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