import React from 'react'
import './Footer.scss'
import logoFooter from '../Header/images/logoFooter.png'
import { Link } from 'react-router-dom'
import icons from './images/icons.png'
function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__wrapper">
      <div className="footer__wrapper__left">
          <img src={logoFooter} alt="" />
          <p>© 2021 “Copper Pro” <br /> Все права защищенны</p>
          <a href="/">Политика конфиденциальности</a>
       </div>
       <div className="footer__wrapper__right">
          <ul>
            <li>
              <h4>Навигация</h4>
              <Link to='/'>Каталог</Link>
              <Link to='/news'>Новости</Link>
              <Link to='/'>Доставка</Link>
              <Link to='/'>О нас</Link>
              <Link to='/'>Контакты</Link>
            </li>
            <li>
              <h4>Каталог</h4>
              <p>Для эфирных масел</p>
              <p>Для гидролатов</p>
              <p>Медная посуда</p>
              <p>Аксессуары из меди</p>
              <p>Индивидуальный заказ</p>
              <p>Скидки и предложения</p>
            </li>
            <li>
              <h4>Контакты</h4>
              <p>Бажана 8-Б, Киев, <br /> 02132 Украина</p>
              <p>+38 (096) 990 67 56</p>
              <p>a.alambik@gmail.com</p>
              <img src={icons} alt="" />
            </li>
          </ul>
       </div>
      </div>
    </footer>
  )
}

export default Footer