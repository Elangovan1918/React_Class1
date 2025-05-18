import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <div className='logo'>
                <h1>My App</h1>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact </Link></li>
                </ul>
            </div>
            <div className="button">
                <button>Login</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar