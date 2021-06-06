import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Navbar extends Component {
    render() {
        return (
            <div>
                <p>Seedy Fiuba</p>
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
            </div>
        )
    }
};

export default Navbar;