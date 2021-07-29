import React, { Component } from 'react';
import {Col, Nav, NavItem, NavLink, Row} from 'reactstrap';

class Navbar extends Component {
    render() {
        return (
            <Col className="text-center" xs={12}>
                <Row>
                    <Col xs={12}>
                        <p><b>Seedy Fiuba</b></p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Nav vertical pills>
                            <NavItem>
                                <NavLink href="/" active={window.location.pathname === '/' || window.location.pathname === '/home'}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/users" active={window.location.pathname === '/users'}>Users</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/projects" active={window.location.pathname === '/projects'}>Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/servers" active={window.location.pathname === '/servers'}>Servers</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </Col>
        )
    }
};

export default Navbar;