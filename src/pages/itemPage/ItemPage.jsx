import { ShoppingBag, ShoppingCart } from "lucide-react";
import Navbar from "../../components/nav/Navbar";
import InputQuantidade from "../../components/inputQuantidade/InputQuantidade";
import "./ItemPage.css";

function ItemPage() {
  return (
    <>
      <Navbar />
      <div className="page-body">
        <div className="product-card">
          <h3 className="product-title">Título do Produto aaaa</h3>
          <div className="produto-img">imagem uou</div>

          <div className="price">
            <p>R$ 200,00</p>
          </div>

          <div className="description">
            <p>Descrição</p>
          </div>

          <div className="action-zone">
            <InputQuantidade />

            <button className="cart-btn">
              <ShoppingCart />
            </button>

            <button className="buy-btn">
              <ShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemPage;
