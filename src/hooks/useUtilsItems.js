import { useState, useEffect } from "react";
import { api } from "../api/api";

function useUtilsItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      try {
        const data = await api.get("/produtos");
        setItems(data);
      } catch (err) {
        console.error(err.message);
      }
    }
    getItems();
  }, []);

  return items;
}

export default useUtilsItems;
