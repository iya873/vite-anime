import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import  Container  from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
  return (
    <Navbar className='justify-content-md-center'>
      <Container>
        <Nav>
          <Link to='/'>Home</Link>
        </Nav>
        <Nav>
          <Link to='/search'>Search</Link>
        </Nav>
        <Nav>
          <Link to='/favorites'>Favorites</Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar