import { createContext, useContext } from "react";

export const CarrinhoContext = createContext(null);

export function useCart() {
  return useContext(CarrinhoContext);
}
