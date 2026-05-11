import { TrashIcon } from "lucide-react";
import InputQuantidade from "../../components/inputQuantidade/InputQuantidade";
import "./InlineCardItem.css";
import { useCart } from "../../contexts/CarrinhoContext";

function InlineCardItem({ data }) {
  const { removeFromCart } = useCart();

  function handleDelete(id) {
    removeFromCart(id);
  }

  return (
    <>
      <div className="inline-card-body">
        <div className="inline-produto-img">
          <img src={data.produto.img} alt={data.produto.alt} />
        </div>

        <div className="inline-content">
          <div className="inline-info">
            <p className="product-title">{data.produto.nome}</p>
            <p className="product-price">R$ {data.produto.preco}</p>
          </div>

          <div className="inline-actions">
            <InputQuantidade />

            <button
              className="delete-btn"
              onClick={() => handleDelete(data.id)}
            >
              <TrashIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InlineCardItem;
