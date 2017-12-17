import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '../H1';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Josephs Site</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="/projects">Projects</NavItem>
        </Nav>
      </NavBar>
    );
  }
}

export default Header;
