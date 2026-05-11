import { ArrowRight, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import "./CardItem.css";
import { useCart } from "../../contexts/CarrinhoContext";

function CardItem({ data }) {
  const { addToCart } = useCart();
  function handleAdd(id, img) {
    addToCart(id, img);
  }

  return (
    <>
      <div className="card-body">
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
              onClick={() => handleAdd(data.id, data.img)}
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
