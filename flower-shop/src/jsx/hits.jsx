import {Link } from "react-router-dom";

function Hits() {
  return (
    <>
     <section className="category">
                    <div className="category__inner container">
                        <ul className="category__list">
                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/orchids/orchids1.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                         Букет Фиолетовая грация
                                    </p>

                                    <Link className="card__link card-button" to="/orchids/1">
                                        Подробнее
                                    </Link>
                                    <p class="card__price">
                                        <span>18000 ₸</span>
                                    </p>

                                </div>
                            </li>

                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/orchids/orchids2.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Дыхание тропиков
                                    </p>

                                    <Link className="card__link card-button" to="/orchids/2">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>10000₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Lilies/lilies3.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Аромат утра
                                    </p>

                                    <Link className="card__link card-button" to="/lilies/3">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>9000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/orchids/orchids4.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Розовый шёпот
                                    </p>

                                    <Link className="card__link card-button" to="/orchids/4">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>14000 ₸</span>
                                    </p>

                                </div>
                            </li>

                            <li className="category__card card">
                               <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Lilies/lilies1.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Белая гармония
                                    </p>

                                    <Link className="card__link card-button" to="/lilies/1">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>10000 ₸</span>
                                    </p>

                                </div>
                            </li>

                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/orchids/orchids6.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Тайна рассвета
                                    </p>

                                    <Link className="card__link card-button" to="/orchids/6">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>9000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                               <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Tulips/Tulips1.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                         Букет Весеннее пробуждение
                                    </p>

                                    <Link className="card__link card-button" to="/tulips/1">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>9000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                               <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Tulips/Tulips6.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Счастье рядом
                                    </p>

                                    <Link className="card__link card-button" to="/tulips/6">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>12000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Roses/roses1.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Алые чувства
                                    </p>

                                    <Link className="card__link card-button" to="/roses/1">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>8000 ₸</span>
                                    </p>

                                </div>
                            </li>

                        </ul>
                    </div>
                </section>
    </>
  )
}

export default Hits;