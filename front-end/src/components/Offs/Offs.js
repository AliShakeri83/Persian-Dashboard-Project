import React, { useState } from "react";
import Errorbox from "./../Errorbox/Errorbox";
import { allProductsInShop, allOffInShop } from "./../../Datas";

import "./Offs.css";

export default function Offs() {
  const [allProduct, setAllProduct] = useState(allProductsInShop);
  const [allOff, SetAllOff] = useState(allOffInShop);
  return (
    <>
      {allOff.length ? (
        <div className="products-main">
          <h1 className="products-title">افزودن کد تخفیف جدید</h1>

          <form action="#" className="add-products-form">
            <div className="add-products-form-wrap">
              <div className="add-products-form-group">
                <input
                  type="text"
                  placeholder="لطفا کد تخفیف را وارد نمایید"
                  className="add-products-input"
                />
              </div>

              <div className="add-products-form-group">
                <input
                  type="text"
                  placeholder="لطفا درصد تخفیف را وارد نمایید"
                  className="add-products-input"
                />
              </div>
              <div className="add-products-form-group">
                <input
                  type="text"
                  placeholder="حداکثر استفاده از کد تخفیف"
                  className="add-products-input"
                />
              </div>
              <div className="add-select-course">
                <label for="cars">دوره</label>
                <br />
                <select className="option-select-box" id="cars" name="cars">
                  {allProduct.map((product) => (
                    <option value={product.title}>{product.title}</option>
                  ))}
                </select>
              </div>
            </div>
            <button className="add-off" type="submit">
              افزودن
            </button>
          </form>
        </div>
      ) : (
        <Errorbox msg="هیچ کد تخفیفی یافت نشد" />
      )}
    </>
  );
}
