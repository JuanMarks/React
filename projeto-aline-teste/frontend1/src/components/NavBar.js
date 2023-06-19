import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'


const NavBar = () => {
  const {logout, signed} = useAuth();
  const navigate = useNavigate();
  const userData = localStorage.getItem("users_db")
  const usuario = JSON.parse(userData)
  
  
  if(signed > 0){
    if(usuario[0].groups == 2){
      return (
        <div>
            <nav className='navbar'>
                <Link to={`/`}>Reuniões</Link>
                <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/new`} className='new-btn'>Nova Reuniao</Link></li>
                    <li><Link to={`/gerenciar`}>Gerenciar Reunioes</Link></li>
                    <button Text="Sair" onClick={() => [logout(), navigate("/")]}>
                      Sair
                    </button>
                </ul>
            </nav>
            <h1>OLA GERENTE</h1>
        </div>
      )
    }
    if(usuario[0].groups == 1){
      return (
        <div>
            <nav className='navbar'>
                <Link to={`/`}>Reuniões</Link>
                <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/new`} className='new-btn'>Nova Reuniao</Link></li>
                    <li><Link to={`/gerenciar`}>Gerenciar Reunioes</Link></li>
                    <button Text="Sair" onClick={() => [logout(), navigate("/")]}>
                      Sair
                    </button>
                </ul>
            </nav>
            <h1>OLA COLABORADOR</h1>
        </div>
      )
    }
  }else{
    return (
      <div>
          <nav className='navbar'>
              <Link to={`/`}>Reuniões</Link>
              <ul>
                  <li><Link to={`/login`}>Login</Link></li>
                  <li><Link to={`/`}>Home</Link></li>
                  <li><Link to={`/new`} className='new-btn'>Nova Reuniao</Link></li>
                  <li><Link to={`/gerenciar`}>Gerenciar Reunioes</Link></li>
              </ul>
          </nav>
      </div>
    )
  }
}

export default NavBar
