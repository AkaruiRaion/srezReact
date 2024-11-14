import { Link } from "react-router-dom";
import s from "./Card.module.css";
import { useState } from "react";
import { OrderModal } from "../orderModal/OrderModal";

export function Card({
  id,
  img = "https://tmka72.ru/TMKA/media/photos/2022/11/14/8e56c287600191f403c273378136218b.jpg",
  name = "Неизвестно",
  price = "Неизвестно",
  count,
  size,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function showModal() {
    setModalIsOpen(true);
  }

  return (
    <>
      <div className={s.card}>
        <img src={img} alt="tovar" />
        <h3>{name}</h3>
        <p>Размер: {size}</p>
        <p className={s.price}>{price} ₽</p>
        <p>Остаток: {count}</p>
        <Link className="btn" to={`${id}`}>
            Подробнее
          </Link>
        {count > 0 ? (
          <button className="btn">
          В корзину
        </button>
        ) : (
          <button onClick={showModal} className="btnOrder">
            Заказать
          </button>
        )}

      </div>
      <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
}
