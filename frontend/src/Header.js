import React, {useState,useEffect} from 'react';
import {Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('user');
  const logout = ()=>{
    localStorage.clear();
    //console.log("Logout Click");
    navigate('/signup');

  }
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">E-Commerce</Navbar.Brand>
          { auth?

            <Nav className="left-menu">
            <Nav.Link as={Link} to="/">Product</Nav.Link> 
            <Nav.Link as={Link} to="/add">Add Product</Nav.Link>
            <Nav.Link as={Link} to="/update">Update Product</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Nav.Link> 
          </Nav>

          :

          <Nav className="right-menu">
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            
          </Nav>

          }
          
          

          

        </Container>
      </Navbar>
  )
}

export default Header
