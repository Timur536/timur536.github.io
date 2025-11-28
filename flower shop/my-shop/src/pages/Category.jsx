import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function Category() {
    const { name } = useParams();
    let content;
    if (name === 'Розы') {
        content =
            <>
                <section className="category">
                    <div className="category__inner container">
                        <ul className="category__list">
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

                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Roses/roses2.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Белое дыхание
                                    </p>

                                    <Link className="card__link card-button" to="/roses/2">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>9000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Roses/roses3.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Шарм вечерний
                                    </p>

                                    <Link className="card__link card-button" to="/roses/3">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>7000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Roses/roses4.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Розовая нежность
                                    </p>

                                    <Link className="card__link card-button" to="/roses/4">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>11000 ₸</span>
                                    </p>

                                </div>
                            </li>

                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Roses/roses5.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Ванильное утро
                                    </p>

                                    <Link className="card__link card-button" to="/roses/5">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>6000 ₸</span>
                                    </p>

                                </div>
                            </li>

                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Roses/roses6.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Радость дня
                                    </p>

                                    <Link className="card__link card-button" to="/roses/6">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>12000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Roses/roses7.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Сердце весны
                                    </p>

                                    <Link className="card__link card-button" to="/roses/7">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>5000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Roses/roses8.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Королева роз
                                    </p>

                                    <Link className="card__link card-button" to="/roses/8">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>9000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Roses/roses9.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Тёплое солнце
                                    </p>

                                    <Link className="card__link card-button" to="/roses/9">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>11000 ₸</span>
                                    </p>

                                </div>
                            </li>

                        </ul>
                    </div>
                </section>
            </>
    } else if (name === 'Лилии') {
        content =
            <>
                <section className="category">
                    <div className="category__inner container">
                        <ul className="category__list">
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
                                    <img className="card__image" src="/img/Lilies/lilies2.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Аромат утра
                                    </p>

                                    <Link className="card__link card-button" to="/lilies/2">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>9000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Lilies/lilies3.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Снежный поцелуй
                                    </p>

                                    <Link className="card__link card-button" to="/lilies/3">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>8000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Lilies/lilies4.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Тайна востока
                                    </p>

                                    <Link className="card__link card-button" to="/lilies/4">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>6000 ₸</span>
                                    </p>

                                </div>
                            </li>

                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Lilies/lilies5.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Летний дождь
                                    </p>

                                    <Link className="card__link card-button" to="/lilies/5">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>12000 ₸</span>
                                    </p>

                                </div>
                            </li>

                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Lilies/lilies6.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Молочная нежность
                                    </p>

                                    <Link className="card__link card-button" to="/lilies/6">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>8000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Lilies/lilies7.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Лунный свет
                                    </p>

                                    <Link className="card__link card-button" to="/lilies/7">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>10000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Lilies/lilies8.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Цвет вдохновения
                                    </p>

                                    <Link className="card__link card-button" to="/lilies/8">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>7000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Lilies/lilies9.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Сияние души
                                    </p>

                                    <Link className="card__link card-button" to="/lilies/9">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>9000 ₸</span>
                                    </p>

                                </div>
                            </li>

                        </ul>
                    </div>
                </section>
            </>
    } else if (name === 'Орхидеи') {
        content =
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
                                        <span>10000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/orchids/orchids3.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Белый шелк
                                    </p>

                                    <Link className="card__link card-button" to="/orchids/3">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>13000 ₸</span>
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
                                    <img className="card__image" src="/img/orchids/orchids5.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Королевская орхидея
                                    </p>

                                    <Link className="card__link card-button" to="/orchids/5">
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
                                    <img className="card__image" src="/img/orchids/orchids7.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Солнечный луч
                                    </p>

                                    <Link className="card__link card-button" to="/orchids/7">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>9000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/orchids/orchids8.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Аметистовое сияние
                                    </p>

                                    <Link className="card__link card-button" to="/orchids/8">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>12000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/orchids/orchids9.jpg" alt="" width={277} height={280} />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Очарование вечера
                                    </p>

                                    <Link className="card__link card-button" to="/orchids/9">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>9000 ₸</span>
                                    </p>

                                </div>
                            </li>

                        </ul>
                    </div>
                </section>
            </>
    } else if (name === 'Тюльпаны') {
        content =
            <>
                <section className="category">
                    <div className="category__inner container">
                        <ul className="category__list">
                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Tulips/Tulips1.jpg" alt="" />
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
                                    <img className="card__image" src="/img/Tulips/Tulips2.jpg" alt=""  />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Улыбка дня
                                    </p>

                                     <Link className="card__link card-button" to="/tulips/2">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>8000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Tulips/Tulips3.jpg" alt=""  />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Розовый рассвет
                                    </p>

                                     <Link className="card__link card-button" to="/tulips/3">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>12000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Tulips/Tulips4.jpg" alt="" />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Алое солнце
                                    </p>

                                   <Link className="card__link card-button" to="/tulips/4">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>14000 ₸</span>
                                    </p>

                                </div>
                            </li>

                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Tulips/Tulips5.jpg" alt="" />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Дыхание весны
                                    </p>

                                    <Link className="card__link card-button" to="/tulips/5">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>10000 ₸</span>
                                    </p>

                                </div>
                            </li>

                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Tulips/Tulips6.jpg" alt="" />
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
                                    <img className="card__image" src="/img/Tulips/Tulips7.jpg" alt=""  />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Мятный бриз
                                    </p>

                                    <Link className="card__link card-button" to="/tulips/7">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>9000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Tulips/Tulips8.jpg" alt=""  />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Нежность утра
                                    </p>

                                    <Link className="card__link card-button" to="/tulips/8">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>9000 ₸</span>
                                    </p>

                                </div>
                            </li>


                            <li className="category__card card">
                                <div className="card__wrap-image">
                                    <img className="card__image" src="/img/Tulips/Tulips9.jpg" alt=""  />
                                </div>

                                <div className="card__body">

                                    <p className="card__description">
                                        Букет Цвет радости
                                    </p>

                                     <Link className="card__link card-button" to="/tulips/9">
                                        Подробнее
                                    </Link>

                                    <p class="card__price">
                                        <span>9000 ₸</span>
                                    </p>

                                </div>
                            </li>

                        </ul>
                    </div>
                </section>
            </>
    }
    return <>{content}</>;
}

export default Category