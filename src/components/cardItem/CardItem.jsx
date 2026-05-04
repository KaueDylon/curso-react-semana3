import { ArrowRight, ShoppingBasket } from "lucide-react";
import "./CardItem.css";

function CardItem() {
  return (
    <>
      <div className="card-body">
        <div className="card-item-img">oi</div>
        <div className="card-item-options">
          <div className="item-options-left">
            <div className="item-price">100,00</div>
          </div>
          <div className="item-options-right">
            <button className="card-btns">
              <ShoppingBasket />
            </button>
            <button className="card-btns">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
