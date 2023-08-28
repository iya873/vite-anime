import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
          <li>
              <Link to='/'>Home</Link>
        </li>
          <li>
              <Link to='/search'>Search</Link>
        </li>
          <li>
              <Link to='/favorites'>Favorites</Link>
        </li>
    </nav>
  )
}

export default NavBar