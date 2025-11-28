import { Outlet,Link } from "react-router-dom";
import { useState } from "react";

function Layout(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
             <header className="header">

        <div className="header__inner container">

          <div className="header__logo-wrap">
            <div className="header__title">Цветочный Мир</div>
          </div>
          <nav className="header__menu">
            <ul className={`header__list ${isOpen ? "active" : ""}`}>

              <li className="header__item">
                <Link className="header__link" to="/">
                  Главная
                </Link>
              </li>

              <li className="header__item">
                <Link className="header__link" to="/category/Розы" >
                  Розы
                </Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to="/category/Лилии">
                  Лилии
                </Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to="/category/Орхидеи">
                  Орхидеи
                </Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to="/category/Тюльпаны">
                  Тюльпаны
                </Link>
              </li>
            </ul>

            <div className={`header__burger ${isOpen ? "active" : ""} `}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span>
            </div>
          </nav>

          <div className="header__icons" href="/#" >
            <a className="header__icons-link" href="" >
              <svg className="header__icon" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
            </a>

            <a className="header__icons-link" href="" >
              <svg className="header__icon" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
            </a>

            <a className="header__icons-link" href="" >
              <svg className="header__icon" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
            </a>
          </div>

        </div>
      </header>

      <main className="main">
      <Outlet></Outlet>
      </main>


       <footer className="footer">
        <div className="footer__inner container">
          <div className="footer__logo-wrap">
            <div className="footer__title">Цветочный Мир</div>
          </div>
          <nav className="footer__menu">
            <ul className="footer__list">
              <li className="footer__item">
                <Link className="footer__link" to='/' >
                  Главная
                </Link>
              </li>
              <li className="footer__item">
               <Link className="footer__link" to='/about'>
                  О нас
                </Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to='/privacy'>
                  Политика конфиденциальности
                </Link>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="/payment" >
                  Доставка и оплата
                </a>
              </li>

              <li className="footer__item">
                <Link className="footer__link" to="/hits" >
                  Хиты
                </Link>
              </li>
            </ul>
          </nav>

          <div className="footer__icons" href="/#" >
            <a className="footer__icons-link" href="" >
              <svg className="footer__icon" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
            </a>

            <a className="footer__icons-link" href="" >
              <svg className="footer__icon" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
            </a>

            <a className="footer__icons-link" href="" >
              <svg className="footer__icon" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
            </a>

          </div>
          <p className="footer__copyright">
            «© Цветочный Мир, 2025»
          </p>
        </div>

      </footer>
      
        </>
    )
}




export default Layout