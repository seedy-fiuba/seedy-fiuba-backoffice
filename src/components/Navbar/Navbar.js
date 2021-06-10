import React, { Component } from 'react';
import {Col, Nav, NavItem, NavLink, Row} from 'reactstrap';

class Navbar extends Component {
    render() {
        return (
            <div className="text-center">
                <Row>
                    <Col xs={12}>
                        <p>Seedy Fiuba</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Nav vertical>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/users">Users</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/projects">Projects</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </div>
        )
    }
};

export default Navbar;