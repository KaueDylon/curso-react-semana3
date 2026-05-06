import { Minus, Plus } from "lucide-react";
import "./InputQuantidade.css";
import { useState } from "react";

function InputQuantidade({ estoque }) {
  const [quantidade, setQuantidade] = useState(1);

  function adicionar() {
    setQuantidade((num) => Math.min(num + 1, estoque));
  }

  function diminuir() {
    setQuantidade((num) => Math.max(num - 1, 1));
  }

  return (
    <>
      <div className="input-quantidade">
        <button onClick={diminuir} className="minus-btn">
          <Minus />
        </button>

        <input
          className="inputTeste"
          type="number"
          min="1"
          value={quantidade}
          placeholder="1"
          readOnly
        />

        <button onClick={adicionar} className="plus-btn">
          <Plus />
        </button>
      </div>
    </>
  );
}

export default InputQuantidade;
