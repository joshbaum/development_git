import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'

class NavFilter extends React.Component {

    render() {
        return(
            <Navbar bg="light" expand="lg">
                {this.props.title}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* use the eventkeys to pass the right arguments to the onSelect functions  */}
                <Nav defaultActiveKey="All">
                    <Nav.Item>
                        <Nav.Link eventKey="All" onSelect={this.props.filter}>All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={this.props.options[0]} onSelect={this.props.filter}>{this.props.options[0]}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={this.props.options[1]} onSelect={this.props.filter}>{this.props.options[1]}</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        )
    }
}

export default NavFilter
