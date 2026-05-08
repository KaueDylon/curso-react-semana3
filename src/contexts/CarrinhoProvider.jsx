import { useState, useEffect } from "react";
import { CarrinhoContext } from "./CarrinhoContext";
import { api } from "../api/api";
import { useAuth } from "./AuthProvider";

function CarrinhoProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [carrinho, setCarrinho] = useState([]);

  const { user } = useAuth();
  async function fetchCart() {
    console.log(user.user.id);
    if (!user) return;

    setLoading(true);

    try {
      const data = await api.get(
        `/user-cart?user-id=${user.user.id}&_expand=produto`,
      );

      setCarrinho(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function addToCart(produtoId) {
    try {
      await api.post("/user-cart", {
        userId: user.user.id,
        produtoId: produtoId,
      });

      await fetchCart();
    } catch (error) {
      console.error(error);
    }
  }

  async function removeFromCart(cartItemId) {
    try {
      await api.delete(`/user-cart/${cartItemId}`);

      setCarrinho((prev) => prev.filter((item) => item.id !== cartItemId));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCart();
  }, [user]);

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        loading,
        addToCart,
        removeFromCart,
        fetchCart,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export default CarrinhoProvider;
