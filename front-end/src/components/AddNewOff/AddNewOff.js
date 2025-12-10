import React, { useState } from "react";
import Errorbox from "./../Errorbox/Errorbox";
import { allProductsInShop, allOffInShop } from "./../../Datas";

import "./AddNewOff.css";

export default function AddNewOff() {
  const [allProduct, setAllProduct] = useState(allProductsInShop);
  const [allOff, setAllOff] = useState(allOffInShop);

  const [offCode, setOffCode] = useState("");
  const [offPrecent, setOffPrecent] = useState("");
  const [offDate, setOffDate] = useState("");
  const [offProductTitle, setOffProductTitle] = useState("");

  const addOffNewCode = (e) => {
    e.preventDefault();
    const newOffCode = {
      id: allOff.length + 2,
      code: offCode,
      precent: offPrecent,
      productID: offProductTitle,
      date: offDate,
      isActive: true,
    };
    console.log(newOffCode);
    setAllOff([...allOff, newOffCode]);
  };
  return (
    <>
      <div className="off-main">
        <h1 className="off-title">افزودن کد تخفیف جدید</h1>

        <form action="#" className="add-off-form">
          <div className="add-off-form-wrap">
            <div className="add-off-form-group padd">
              <input
                value={offCode}
                onChange={(e) => setOffCode(e.target.value)}
                type="text"
                placeholder="لطفا کد تخفیف را وارد نمایید"
                className="add-products-input"
              />
            </div>

            <div className="add-off-form-group">
              <input
                value={offPrecent}
                onChange={(e) => setOffPrecent(e.target.value)}
                type="text"
                placeholder="لطفا درصد تخفیف را وارد نمایید"
                className="add-products-input"
              />
            </div>
            <div className="add-off-form-group">
              <input
                value={offDate}
                onChange={(e) => setOffDate(e.target.value)}
                type="text"
                placeholder="مدت اعتبار کد تخفیف را وارد نمایید"
                className="add-products-input"
              />
            </div>
            <div className="add-select-course">
              <label for="cars">دوره</label>
              <br />
              <select
                onChange={(e) => setOffProductTitle(e.target.value)}
                className="option-select-box"
                id="cars"
                name="cars"
              >
                {allProduct.map((product) => (
                  <option key={product.id} value={product.title}>
                    {product.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className="add-off" type="submit" onClick={addOffNewCode}>
            افزودن
          </button>
        </form>
      </div>
    </>
  );
}
