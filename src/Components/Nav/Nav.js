import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
      <main className='Nav'>
        <nav>
            <Link to='/home' style={{ textDecoration: 'none' }}>
                <h1 className="nav-title">Hot Takes</h1>
            </Link>
            
        </nav>
      </main>
    );
  }
  
  export default Nav;