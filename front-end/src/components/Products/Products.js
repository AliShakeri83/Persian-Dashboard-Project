import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import useProducts from "./../../Hooks/useProducts";

export default function Products() {
  return (
    <>
      <AddNewProduct />
      <ProductsTable />
    </>
  );
}
