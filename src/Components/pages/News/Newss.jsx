import React from 'react'
import './Newss.scss'
import card from './images/card.png'
import { Link } from 'react-router-dom'
function Newss() {
  return (
    <div className='news'>
        <div className="news__title">
            <h4>Главная / <span> Новости</span></h4>
            <h1>Новости</h1>
        </div>
        <div className="news__cards">
            <div className="news__cards__left">
                <div className="news__cards__left__card1">
                    <Link to='/cards'><img src={card} alt="" /></Link>
                    <p>Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для <br /> человека, но если говорить о домашних животных, то здесь возникают некоторые <br /> нюансы. Необходимо строго придерживаться определенных правил....</p>
                    <Link to='/cards'>Читать больше </Link>
                </div>
                <div className="news__cards__left__card2">
                    <Link to='/cards'><img src={card} alt="" /></Link>
                    <p>Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для <br /> человека, но если говорить о домашних животных, то здесь возникают некоторые <br /> нюансы. Необходимо строго придерживаться определенных правил....</p>
                    <Link to='/cards'>Читать больше </Link>
                </div>
                <div className="news__cards__left__card3">
                    <Link to='/cards'><img src={card} alt="" /></Link>
                    <p>Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для <br /> человека, но если говорить о домашних животных, то здесь возникают некоторые <br /> нюансы. Необходимо строго придерживаться определенных правил....</p>
                    <Link to='/cards'>Читать больше </Link>
                </div>
            </div>
            <div className="right">
                <div className="news__cards__right__card1">
                    <Link to='/cards'><img src={card} alt="" /></Link>
                    <p>Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для <br /> человека, но если говорить о домашних животных, то здесь возникают некоторые <br /> нюансы. Необходимо строго придерживаться определенных правил....</p>
                    <Link to='/cards'>Читать больше </Link>
                </div>
                <div className="news__cards__right__card2">
                    <Link to='/cards'><img src={card} alt="" /></Link>
                    <p>Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для <br /> человека, но если говорить о домашних животных, то здесь возникают некоторые <br /> нюансы. Необходимо строго придерживаться определенных правил....</p>
                    <Link to='/cards'>Читать больше </Link>
                </div>
                <div className="news__cards__right__card3">
                    <Link to='/cards'><img src={card} alt="" /></Link>
                    <p>Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для <br /> человека, но если говорить о домашних животных, то здесь возникают некоторые <br /> нюансы. Необходимо строго придерживаться определенных правил....</p>
                    <Link to='/cards'>Читать больше </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newss