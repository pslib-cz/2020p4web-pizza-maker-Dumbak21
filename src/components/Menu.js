import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, DropdownItem, DropdownMenu, UncontrolledDropdown, DropdownToggle} from "reactstrap";
import {Link} from "react-router-dom";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="primary" dark expand="md" >
            <NavbarBrand tag={Link} to="/">Pizzzza</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link exact to="/Ingredients"><NavLink>Ingredients</NavLink></Link>
                    </NavItem>
                    <NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Pizza
                        </DropdownToggle>
                        <DropdownMenu right>
                            <Link to="/order/pizza"><DropdownItem >pizza</DropdownItem></Link>
                            <Link to="/order/calzone"><DropdownItem>calzone</DropdownItem></Link>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}
 
export default Menu;
  