import { useState, useEffect } from "react";
import { api } from "../api/api";

function useItemId(id) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function getItem() {
      try {
        const data = await api.get(`/produtos/${id}`);
        setItem(data);
      } catch (err) {
        console.error(err.message);
      }
    }
    getItem();
  }, [id]);

  return item;
}

export default useItemId;
