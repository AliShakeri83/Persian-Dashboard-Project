import { useEffect, useState } from "react";

export default function useProducts() {
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    const res = await fetch("http://localhost:8000/api/v1/products");
    const data = await res.json();
    setAllProducts(data);
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
    getAllProducts,
    allProducts,
    addProduct,
    deleteProduct,
    updateProduct,
  };
}
