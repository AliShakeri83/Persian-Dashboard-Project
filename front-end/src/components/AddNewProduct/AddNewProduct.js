import React, { useState } from "react";
import useProducts from "../../Hooks/useProducts";

import "./AddNewProduct.css";

export default function AddNewProduct() {
  const { getAllProducts, allProducts } = useProducts();
  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductCount, setNewProductCount] = useState("");
  const [newProductImg, setNewProductImg] = useState("");
  const [newProductPopularity, setNewProductPopularity] = useState("");
  const [newProductSale, setNewProductSale] = useState("");
  const [newProductColors, setNewProductColors] = useState("");
  const [newProductDescription, setNewProductDescription] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("");

  const addNewProduct = (e) => {
    e.preventDefault();
    const newProductInfos = {
      title: newProductTitle,
      price: newProductPrice,
      count: newProductCount,
      img_url: newProductImg,
      popularity: newProductPopularity,
      sale: newProductSale,
      color: newProductColors,
      description: newProductDescription,
      categoryId: newProductCategory,
    };
    fetch("http://localhost:8000/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductInfos),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("محصول جدید اضافه شد");
        setNewProductTitle("");
        setNewProductPrice("");
        setNewProductCount("");
        setNewProductImg("");
        setNewProductPopularity("");
        setNewProductSale("");
        setNewProductColors("");
        setNewProductDescription("");
        setNewProductCategory("");
      });
  };

  return (
    <div className="products-main">
      <h1 className="products-title">افزودن محصول جدید</h1>

      <form action="#" className="add-products-form">
        <div className="add-products-form-wrap">
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="اسم محصول را بنویسید"
              className="add-products-input"
              value={newProductTitle}
              onChange={(event) => {
                setNewProductTitle(event.target.value);
              }}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              className="add-products-input"
              value={newProductPrice}
              onChange={(event) => {
                setNewProductPrice(event.target.value);
              }}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              className="add-products-input"
              value={newProductCount}
              onChange={(event) => {
                setNewProductCount(event.target.value);
              }}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="آدرس عکس محصول را بنویسید"
              className="add-products-input"
              value={newProductImg}
              onChange={(event) => {
                setNewProductImg(event.target.value);
              }}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید"
              className="add-products-input"
              value={newProductPopularity}
              onChange={(event) => {
                setNewProductPopularity(event.target.value);
              }}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              className="add-products-input"
              value={newProductSale}
              onChange={(event) => {
                setNewProductSale(event.target.value);
              }}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="تعداد رنگ بندی محصول را بنویسید"
              className="add-products-input"
              value={newProductColors}
              onChange={(event) => {
                setNewProductColors(event.target.value);
              }}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="توضیحات محصول را بنویسید"
              className="add-products-input"
              value={newProductDescription}
              onChange={(event) => {
                setNewProductDescription(event.target.value);
              }}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="دسته بندی محصول را بنویسید"
              className="add-products-input"
              value={newProductCategory}
              onChange={(event) => {
                setNewProductCategory(event.target.value);
              }}
            />
          </div>
        </div>
        <button
          className="add-products-submit"
          type="submit"
          onClick={addNewProduct}
        >
          ثبت محصول
        </button>
      </form>
    </div>
  );
}
