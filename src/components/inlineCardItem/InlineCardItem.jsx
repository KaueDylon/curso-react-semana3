import { TrashIcon } from "lucide-react";
import InputQuantidade from "../../components/inputQuantidade/InputQuantidade";
import "./InlineCardItem.css";
import { useCart } from "../../contexts/CarrinhoContext";

function InlineCardItem({ data }) {
  const { removeFromCart, patchQuantdFromCart } = useCart();

  function adicionar() {
    const numAdicionar = Math.min(data.produtoQntd + 1, data.produto.quantd);
    console.log(numAdicionar);
    patchQuantdFromCart(data.id, numAdicionar);
  }

  function diminuir() {
    const numDiminuir = Math.max(data.produtoQntd - 1, 1);
    console.log(numDiminuir);
    patchQuantdFromCart(data.id, numDiminuir);
  }

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
            <InputQuantidade
              quantidadeAtual={data.produtoQntd}
              diminuir={diminuir}
              adicionar={adicionar}
            />

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
