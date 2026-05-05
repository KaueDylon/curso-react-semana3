import { TrashIcon } from "lucide-react";
import InputQuantidade from "../../components/inputQuantidade/InputQuantidade";
import "./InlineCardItem.css";

function InlineCardItem() {
  return (
    <>
      <div className="inline-card-body">
        <div className="inline-produto-img">imagem uou</div>

        <div className="inline-content">
          <div className="inline-info">
            <p className="product-title">Título do Produto aaa</p>
            <p className="product-price">R$ 300,00</p>
          </div>

          <div className="inline-actions">
            <InputQuantidade />

            <button className="delete-btn">
              <TrashIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InlineCardItem;
