import {Link } from "react-router-dom";


function App() {
  
  return (
    <>
        <section className="hero">
          <div className="hero__inner container">
            <div className="hero__content">
              <h1 className="hero__title">
                Дарите эмоции  каждым букетом
              </h1>
              <p className="hero__subtitle">
                Собираем композиции для любых поводов — свежие цветы с доставкой до двери
              </p>

              <Link className="hero__link button" to="/hits">
                Лучшие предложения
              </Link>
            </div>

          </div>
        </section>
    </>
  )
}

export default App
