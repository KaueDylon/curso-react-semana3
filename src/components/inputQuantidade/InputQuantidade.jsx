import { Minus, Plus } from "lucide-react";
import "./InputQuantidade.css";

function inputQuantidade() {
  return (
    <>
      <div className="input-quantidade">
        <button className="minus-btn">
          <Minus />
        </button>

        <input className="inputTeste" type="number" min="1" placeholder="1" />

        <button className="plus-btn">
          <Plus />
        </button>
      </div>
    </>
  );
}

export default inputQuantidade;
