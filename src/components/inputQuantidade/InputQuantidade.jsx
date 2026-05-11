import { Minus, Plus } from "lucide-react";
import "./InputQuantidade.css";
import { useState } from "react";

function InputQuantidade({ quantidadeAtual, adicionar, diminuir }) {
  return (
    <>
      <div className="input-quantidade">
        <button onClick={diminuir} className="minus-btn">
          <Minus />
        </button>

        <input
          className="inputTeste"
          type="number"
          // min="1"
          value={quantidadeAtual}
          // placeholder="1"
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
