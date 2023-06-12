import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'




const NavBar = () => {
  return (
    <div>
        <nav className='navbar'>
            <Link to={`/`}>Reuniões</Link>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/new`} className='new-btn'>Nova Reuniao</Link></li>
                <li><Link to={`/gerenciar`}>Gerenciar Reunioes</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar
