import React from 'react';
import './index.css';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Brand, Toggle, NavItem, TabPane } from 'react-bootstrap';
import star from '../images/star.png'
import Rating from './Rating'


function Header(props) {

  return (
      <div id="header">
        <Navbar bg="" expand="lg">
            <Navbar.Brand style={{fontSize: '1.5em'}} href="#home">Favid-List</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="http://localhost:3000/allVideos">All Videos</Nav.Link>
                <Nav.Link href="http://localhost:3000/unviewed">Unviewed</Nav.Link>
                <Nav.Link href="http://localhost:3000/viewed">Viewed</Nav.Link>
                <NavDropdown title="Rating" id="basic-nav-dropdown">
                    <NavDropdown.Item href="http://localhost:3000/rating/oneStar">
                      <img id="rating-star" alt="star-icon" src={star} />
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="http://localhost:3000/rating/twoStars">
                      <img id="rating-star" alt="star-icon" src={star} />
                      <img id="rating-star" alt="star-icon" src={star} />
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="http://localhost:3000/rating/threeStars">
                      <img id="rating-star" alt="star-icon" src={star} />
                      <img id="rating-star" alt="star-icon" src={star} />
                      <img id="rating-star" alt="star-icon" src={star} />
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="http://localhost:3000/rating/fourStars">
                      <img id="rating-star" alt="star-icon" src={star} />
                      <img id="rating-star" alt="star-icon" src={star} />
                      <img id="rating-star" alt="star-icon" src={star} />
                      <img id="rating-star" alt="star-icon" src={star} />
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="http://localhost:3000/rating/fiveStars">
                      <img id="rating-star" alt="star-icon" src={star} />
                      <img id="rating-star" alt="star-icon" src={star} />
                      <img id="rating-star" alt="star-icon" src={star} />
                      <img id="rating-star" alt="star-icon" src={star} />
                      <img id="rating-star" alt="star-icon" src={star} />
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="http://localhost:3000/archive">Archive</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        <div id="film-tape"></div>
      </div>
  );
}

export default Header;
