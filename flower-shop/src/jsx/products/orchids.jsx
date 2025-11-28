import { useParams } from "react-router-dom";
import { orchids } from "../../data/orchids.js";
import { useState } from "react";

function Orchids() {
  const { id } = useParams();
  const product = orchids.find(p => String(p.id) === String(id));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!product) {
    return (
      <main style={{ padding: 20 }}>
        <h2>Товар не найден</h2>
        <p>Проверьте ссылку или вернитесь на главную.</p>
      </main>
    );
  }

  return (
    <section className="product" >
      <div className="product__inner  container" >
        <div className="product__detail detail">
          <div className="detail__img-wrap">
            <img className="detail__img" src={product.image} alt={product.name} />
          </div>
          <div className="detail__body">

            <h2 className="detail__title">{product.name}</h2>
            <p className="detail__subtitle">{product.description}</p>
            <button className="detail__button card-button" onClick={() => setIsModalOpen(true)}>Заказать</button>
            <p className="detail__price"><strong>{product.price} ₸</strong></p>
          </div>
        </div>
      </div>



      {isModalOpen && (
        <div className="modal">


          <div className="modal__content">
            <h3 className="modal__title">Оформление заказа</h3>

            <form className="modal__form" onSubmit={(e) => {
              e.preventDefault();
              setIsSubmitted(true)
              setName('');
              setPhone('');
            }}>
              <input className="modal__name" type="text" placeholder="Ваше имя" onChange={(e) => setName(e.target.value)} value={name} required />
              <input className="modal__phone" type="tel" placeholder="Номер телефона" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              <button className=" modal__button card-button" type="submit">Отправить</button>
            </form>



            <button className="modal__close  card-button" onClick={() => { setIsModalOpen(false); setIsSubmitted(false) }}>
              ✕
            </button>

            {isSubmitted && <p className="modal__success">Ваш заказ принят!</p>}
          </div>
        </div>
      )}

    </section>
  );
}

export default Orchids