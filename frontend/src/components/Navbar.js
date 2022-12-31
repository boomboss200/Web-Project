import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './N_bar.css';
import {LinkContainer} from 'react-router-bootstrap';
import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

const N_bar = () => {
        const [filterItem,setFilter]=useState('');

    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-white">
      <div class="container-fluid">
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="main_nav">
       <ul class="navbar-nav">
         
         <LinkContainer to='/'>
            <li class="nav-item active"> <a style={{marginLeft:270}}class="nav-link" href="#">HOME </a> </li>
         </LinkContainer>
        
        <LinkContainer to= '/shop'>
         <li class="nav-item"> 
         <a style={{marginLeft:60}} class="nav-link" href="#"> SHOP </a></li>
         </LinkContainer>
         
         
         <li class="nav-item dropdown">  
            <a style={{marginLeft:60}} class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  DOGS  </a>
            
             <ul class="dropdown-menu">
           
            <Link to='/filter' state={{filterItem: 'Food'}}>
             <li> 
                    <a class="dropdown-item" href="#">Food</a>
            </li>
            </Link>
            
            <Link to='/filter' state={{filterItem: 'Cloth'}}>
             <li><a class="dropdown-item" href="#">Clothes</a></li>
             </Link>

             <Link to='/filter' state={{filterItem: 'Collar'}}>
             <li><a class="dropdown-item" href="#">Collars</a></li>
             </Link>
             </ul>
         </li>
       
         <li class="nav-item dropdown">
            <a style={{marginLeft:60}} class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  CATS </a>
             <ul class="dropdown-menu">
             
             <Link to='/filter' state={{filterItem: 'Food'}}>
             <li> 
                    <a class="dropdown-item" href="#">Food</a>
            </li>
            </Link>
            
            <Link to='/filter' state={{filterItem: 'Cloth'}}>
             <li><a class="dropdown-item" href="#">Clothes</a></li>
             </Link>

             <Link to='/filter' state={{filterItem: 'Collar'}}>
             <li><a class="dropdown-item" href="#">Collars</a></li>
             </Link>
            
             </ul>
         </li>
         <li class="nav-item dropdown">
            <a style={{marginLeft:60}} class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  BIRDS  </a>
             <ul class="dropdown-menu">
             <Link to='/filter' state={{filterItem: 'Food'}}>
             <li> 
                    <a class="dropdown-item" href="#">Food</a>
            </li>
            </Link>
            
            <Link to='/filter' state={{filterItem: 'Toy'}}>
             <li><a class="dropdown-item" href="#">Toys</a></li>
             </Link>

             <Link to='/filter' state={{filterItem: 'Cage'}}>
             <li><a class="dropdown-item" href="#">Cages</a></li>
             </Link>
            
             </ul>
         </li>
         <li class="nav-item"><a style={{marginLeft:60}} class="nav-link" href="#"> BLOGS </a></li>
        
        <LinkContainer to='/shop'>
         <li class="nav-item"><a style={{marginLeft:60}} class="nav-link" href="#"> NEW ARRIVAL </a></li>
         </LinkContainer>
       </ul>
       </div>
      </div> 
     </nav>
    )
}

export default N_bar

/**/

      /*<div className='nav-wrapper'>
      <div class='nav-bar'>
      <Navbar bg="" expand="lg">
      <Container fluid>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
      <Nav.Link style={{color: 'whitesmoke'}} href="/">HOME</Nav.Link>
      <Nav.Link style={{marginLeft: 60, color: 'whitesmoke'}} href="#action2">SHOP</Nav.Link>
      <NavDropdown style={{marginLeft: 60}}  title="DOGS" id="navbarScrollingDropdown">
      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action5"> Something else here</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown style={{marginLeft: 60}}  title="CATS" id="navbarScrollingDropdown">
      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown style={{marginLeft: 60}} title="BIRDS" id="navbarScrollingDropdown">
      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action4"> Another action</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link style={{marginLeft: 60, color: 'whitesmoke'}} href="/">BLOGS</Nav.Link>
      <Nav.Link style={{marginLeft: 60, color: 'whitesmoke'}} href="#action2">NEW ARRIVAL</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
      </div>
      </div>*/