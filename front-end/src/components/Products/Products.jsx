import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import useProducts from "./../../Hooks/useProducts";

export default function Products() {
  const { allProducts, addProduct, deleteProduct, updateProduct } =
    useProducts();

  return (
    <>
      <AddNewProduct addProduct={addProduct} />
      <ProductsTable
        allProducts={allProducts}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
      />
    </>
  );
}
