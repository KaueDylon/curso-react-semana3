import { ArrowRight, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import "./CardItem.css";

function CardItem({ data }) {
  return (
    <>
      <div className="card-body">
        <div className="card-item-img">oi</div>
        <div className="card-item-options">
          <div className="item-options-left">
            <div className="item-price">R$ {data.preco}</div>
          </div>
          <div className="item-options-right">
            <button className="card-btns">
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
