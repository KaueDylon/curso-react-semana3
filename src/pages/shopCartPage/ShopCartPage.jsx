import { ArrowBigLeft } from "lucide-react";
import InlineCardItem from "../../components/inlineCardItem/inlineCardItem";
import Navbar from "../../components/nav/Navbar";
import "./ShopCartPage.css";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CarrinhoContext";

function ShopCartPage() {
  const { carrinho } = useCart();

  const total = carrinho.reduce((acc, item) => {
    return acc + Number(item.produto.preco.replace(",", "."));
  }, 0);

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
            {carrinho.map((data) => (
              <InlineCardItem key={data.id} data={data} />
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total</h3>
            <p className="cart-total">R$ {total.toFixed(2)}</p>

            <button className="btn-confirm">Confirmar compra</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopCartPage;
