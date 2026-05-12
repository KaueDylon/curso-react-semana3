import { ArrowRight, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import "./CardItem.css";
import { useCart } from "../../contexts/CarrinhoContext";

function CardItem({ data }) {
  const { addToCart } = useCart();
  function handleAdd(id, img, qnt) {
    addToCart(id, img, qnt);
  }

  return (
    <>
      <div className="card-body">
        <div className="card-item-title">{data.nome}</div>
        <div className="card-item-img">
          <img src={data.img} alt={data.alt} />
        </div>
        <div className="card-item-options">
          <div className="item-options-left">
            <div className="item-price">R$ {data.preco}</div>
          </div>

          <div className="item-options-right">
            <button
              className="card-btns"
              onClick={() => handleAdd(data.id, data.img, 1)}
            >
              <ShoppingCart />
            </button>

            <Link className="card-btns" to={`/produto/${data.id}`}>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
