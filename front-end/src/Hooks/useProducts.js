import { useEffect, useState } from "react";

export default function useProducts() {
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/products");
      const data = await res.json();

      console.log("API DATA:", data.data);

      setAllProducts(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:8000/api/v1/products/${id}`, {
      method: "DELETE",
    });
    getAllProducts();
  };

  const addProduct = async (newProduct) => {
    await fetch("http://localhost:8000/api/v1/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    getAllProducts();
  };

  const updateProduct = async (id, productInfos) => {
    await fetch(`http://localhost:8000/api/v1/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productInfos),
    });
    getAllProducts();
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return {
    allProducts,
    addProduct,
    deleteProduct,
    updateProduct,
  };
}
