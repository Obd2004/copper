import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from './images/logo.png'
function Header() {
  return (
    <header className='header'>
      <div className="header__wrapper">
      <nav className='header__wrapper__nav'>
        <div className="header__wrapper__nav__logo">
          <img src={logo} alt="" />
        </div>
        <div className="header__wrapper__nav__list">
          <ul>
            <li>
              <Link to='/'>Каталог</Link>
            </li>
            <li>
              <Link to='/news'>Новости</Link>
            </li>
            <li>
              <Link to='/'>Доставка</Link>
            </li>
            <li>
              <Link to='/'>О нас</Link>
            </li>
            <li>
              <Link to='/'>Контакты</Link>
            </li>
          </ul>
        </div>
        <div className="header__wrapper__nav__btns">
          <button>||</button>
          <button>||</button>
          <button>||</button>
        </div>
      </nav>
      </div>
    </header> 
  )
}

export default Header