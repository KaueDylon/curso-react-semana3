import { ArrowBigLeft } from "lucide-react";
import InlineCardItem from "../../components/inlineCardItem/inlineCardItem";
import Navbar from "../../components/nav/Navbar";
import "./ShopCartPage.css";
import { Link } from "react-router-dom";

function ShopCartPage() {
  return (
    <>
      <Navbar />
      <div className="cart-page">
        <div className="cart-page-top">
          <Link to="/">
            <ArrowBigLeft />
          </Link>

          <h2 className="cart-title">Seu carrinho de compras</h2>
        </div>

        <div className="cart-layout">
          <div className="cart-items">
            <InlineCardItem />
            <InlineCardItem />
            <InlineCardItem />
            <InlineCardItem />
          </div>

          <div className="cart-summary">
            <h3>Total</h3>
            <p className="cart-total">R$ 600,00</p>

            <button className="btn-confirm">Confirmar compra</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopCartPage;
