import React from "react";
import AddNewOff from "../AddNewOff/AddNewOff";
import OffsTable from "../OffsTable/OffsTable";
import useDiscount from "./../../Hooks/useDiscount";
import useProducts from "./../../Hooks/useProducts";

export default function Offs() {
  const { addDiscount, allDiscount, deleteDiscount, updateDiscount } =
    useDiscount();
  const { allProducts } = useProducts();

  return (
    <div>
      <AddNewOff addDiscount={addDiscount} allProducts={allProducts} />
      <OffsTable
        deleteDiscount={deleteDiscount}
        updateDiscount={updateDiscount}
        allDiscount={allDiscount}
      />
    </div>
  );
}
