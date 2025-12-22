import React, { useState } from "react";
import "./AddNewProduct.css";

export default function AddNewProduct({ addProduct }) {
  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductCount, setNewProductCount] = useState("");
  const [newProductImg, setNewProductImg] = useState("");
  const [newProductPopularity, setNewProductPopularity] = useState("");
  const [newProductSale, setNewProductSale] = useState("");
  const [newProductColors, setNewProductColors] = useState("");
  const [newProductDescription, setNewProductDescription] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateInputs = () => {
    const fields = [
      { value: newProductTitle, name: "نام محصول" },
      { value: newProductPrice, name: "قیمت محصول" },
      { value: newProductCount, name: "موجودی محصول" },
      { value: newProductImg, name: "آدرس عکس محصول" },
      { value: newProductPopularity, name: "میزان محبوبیت محصول" },
      { value: newProductSale, name: "میزان فروش محصول" },
      { value: newProductColors, name: "تعداد رنگ‌بندی محصول" },
      { value: newProductDescription, name: "توضیحات محصول" },
      { value: newProductCategory, name: "دسته‌بندی محصول" },
    ];

    const emptyFields = fields.filter((field) => !field.value.trim());

    if (emptyFields.length > 0) {
      const fieldNames = emptyFields.map((field) => field.name).join("، ");
      setErrorMessage(`لطفا فیلدهای زیر را پر کنید: ${fieldNames}`);
      return false;
    }

    if (isNaN(newProductPrice) || Number(newProductPrice) <= 0) {
      setErrorMessage("قیمت محصول باید یک عدد مثبت باشد");
      return false;
    }

    if (isNaN(newProductCount) || Number(newProductCount) < 0) {
      setErrorMessage("موجودی محصول باید یک عدد غیرمنفی باشد");
      return false;
    }

    if (isNaN(newProductPopularity) || Number(newProductPopularity) < 0) {
      setErrorMessage("میزان محبوبیت محصول باید یک عدد غیرمنفی باشد");
      return false;
    }

    if (isNaN(newProductSale) || Number(newProductSale) < 0) {
      setErrorMessage("میزان فروش محصول باید یک عدد غیرمنفی باشد");
      return false;
    }

    if (isNaN(newProductColors) || Number(newProductColors) <= 0) {
      setErrorMessage("تعداد رنگ‌بندی محصول باید یک عدد مثبت باشد");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const addNewProduct = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      alert(errorMessage);
      return;
    }

    const newProductInfos = {
      title: newProductTitle.trim(),
      price: newProductPrice,
      count: newProductCount,
      img_url: newProductImg.trim(),
      popularity: newProductPopularity,
      sale: newProductSale,
      color: newProductColors,
      description: newProductDescription.trim(),
      categoryId: newProductCategory.trim(),
    };

    addProduct(newProductInfos);
    emptyInput();
  };

  const emptyInput = () => {
    setNewProductTitle("");
    setNewProductPrice("");
    setNewProductCount("");
    setNewProductImg("");
    setNewProductPopularity("");
    setNewProductSale("");
    setNewProductColors("");
    setNewProductDescription("");
    setNewProductCategory("");
    setErrorMessage("");
  };

  return (
    <div className="products-main">
      <h1 className="products-title">افزودن محصول جدید</h1>

      {errorMessage && (
        <div
          className="error-message"
          style={{
            backgroundColor: "#f8d7da",
            color: "#721c24",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "15px",
            border: "1px solid #f5c6cb",
          }}
        >
          {errorMessage}
        </div>
      )}

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
                setErrorMessage("");
              }}
              required
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
                setErrorMessage("");
              }}
              required
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
                setErrorMessage("");
              }}
              required
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
                setErrorMessage("");
              }}
              required
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
                setErrorMessage("");
              }}
              required
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
                setErrorMessage("");
              }}
              required
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
                setErrorMessage("");
              }}
              required
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
                setErrorMessage("");
              }}
              required
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
                setErrorMessage("");
              }}
              required
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
