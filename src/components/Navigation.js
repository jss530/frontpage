import React from 'react';
import { Navbar, Nav, MenuItem, NavItem, NavDropdown, FormGroup, FormControl, Button } from 'react-bootstrap';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fluid={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Welcome!</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              About
            </NavItem>
            <NavItem eventKey={2} href="#">
              My Account
            </NavItem>
            <NavDropdown eventKey={3} title="Search" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Red wines</MenuItem>
              <MenuItem eventKey={3.2}>White wines</MenuItem>
              <MenuItem eventKey={3.3}>Sparkling & Champagne</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Wine tours</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <Navbar.Form>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{' '}
            <Button type="submit">Submit</Button>
            </Navbar.Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;
