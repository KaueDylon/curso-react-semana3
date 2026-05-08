import { useState, useEffect } from "react";
import { api } from "../api/api";

function useCartUtils() {
  const [loading, setLoading] = useState(false);
  const postItemInCart =
    (async (idUsuario, idItem) => {
      setLoading(true);
      try {
        const data = await api.post("/user-cart", { idUsuario, idItem });

        return data;
      } finally {
        setLoading(false);
      }
    },
    []);

  const getItemInCart = async();
}
