import React, { useState } from "react";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "./../ProductsTable/ProductsTable";
import { allProductsInShop } from "./../../Datas";

export default function Products() {
  const [allProducts, setAllProducts] = useState(allProductsInShop);

  return (
    <>
      <AddNewProduct
        allProducts={allProducts}
        setAllProducts={setAllProducts}
      />
      <ProductsTable allProducts={allProducts} />
    </>
  );
}
