import { ShoppingBag, ShoppingCart } from "lucide-react";
import Navbar from "../../components/nav/Navbar";
import InputQuantidade from "../../components/inputQuantidade/InputQuantidade";
import "./ItemPage.css";
import { useParams } from "react-router-dom";
import useItemId from "../../hooks/useItemId";

function ItemPage() {
  const { id } = useParams();
  const item = useItemId(id);

  if (!item) {
    return (
      <>
        <Navbar />
        <p>Carregando item...</p>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="page-body">
        <div className="product-card">
          <h2 className="product-title">{item.nome}</h2>
          <div className="produto-img">imagem uou</div>

          <div className="price">
            <p>R${item.preco}</p>
          </div>

          <div className="description">
            <p>{item.desc}</p>
          </div>

          <div className="action-zone">
            <p className="product-stock-label">Em Estoque: {item.quantd}</p>
            <InputQuantidade estoque={item.quantd} />

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
