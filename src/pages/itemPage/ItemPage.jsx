import { ShoppingBag, ShoppingCart } from "lucide-react";
import Navbar from "../../components/nav/Navbar";
import InputQuantidade from "../../components/inputQuantidade/InputQuantidade";
import "./ItemPage.css";
import { useParams } from "react-router-dom";
import useItemId from "../../hooks/useItemId";
import { useCart } from "../../contexts/CarrinhoContext";
import { useState } from "react";

function ItemPage() {
  const { id } = useParams();
  const item = useItemId(id);
  const { addToCart } = useCart();

  const [quantidade, setQuantidade] = useState(1);

  function adicionar() {
    const numAdicionar = Math.min(quantidade + 1, item.quantd);
    setQuantidade(numAdicionar);
  }

  function diminuir() {
    const numDiminuir = Math.max(quantidade - 1, 1);
    setQuantidade(numDiminuir);
  }

  function handleAdd(id, img, quantidade) {
    addToCart(id, img, quantidade);
  }

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
          <div className="produto-img">
            <img src={item.img} alt={item.alt} />
          </div>

          <div className="price">
            <p>R${item.preco}</p>
          </div>

          <div className="description">
            <p>{item.desc}</p>
          </div>

          <div className="action-zone">
            <p className="product-stock-label">Em Estoque: {item.quantd}</p>
            <InputQuantidade
              quantidadeAtual={quantidade}
              diminuir={diminuir}
              adicionar={adicionar}
            />

            <button
              className="cart-btn"
              onClick={() => handleAdd(item.id, item.img, quantidade)}
            >
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
