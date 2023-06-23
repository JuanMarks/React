import React from 'react'

import style from './Header.module.css'
import { NavLink } from 'react-router-dom'
import perfilImg from '../../assets/Deusi.jpg'

import imgPerfil from '../../assets/logo.png'

const Header = () => {
  return (
    <header>
      <nav className={style.nav__menu}>
        <img
          src={imgPerfil}
          className={style.nav__img}
          alt="logo"
        />
        <div className={style.nav__img2}>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/reuniao">Reunião</NavLink>
            </li>
            <li>
              <NavLink to="/feedbacks">Feedbacks</NavLink>
            </li>
            <li>
              <NavLink to="/pdi">PDI`s</NavLink>
            </li>
          </ul>
          <img src={perfilImg} className={style.nav__img__perfil} alt="logo" />
        </div>
      </nav>
    </header>
  )
}

export default Header
