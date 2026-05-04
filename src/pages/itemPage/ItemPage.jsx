import { Minus, Plus } from "lucide-react";
import Navbar from "../../components/nav/Navbar";
import "./ItemPage.css";

function ItemPage() {
  return (
    <>
      <Navbar />
      <div className="page-body">
        <div className="view-produto">
          <div className="box-produto">
            <div className="produto-img">imagem uou</div>
          </div>
          <h3>Título do Produto aaaa</h3>
        </div>
        <div className="view-options">
          <div className="box-options">
            <div className="description">
              <p>D:</p>
            </div>
            <div className="action-zone">
              <button></button>
              <div className="input-quantidade">
                <button className="minus-btn">
                  <Minus />
                </button>
                <input
                  className="inputTeste"
                  type="number"
                  min="1"
                  placeholder="1"
                />
                <button className="plus-btn">
                  <Plus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemPage;
