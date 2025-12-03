import React, { useState, useEffect } from "react";
import DeleteModal from "./../DeleteModal/DeleteModal";
import DetailsModal from "./../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Errorbox from "./../Errorbox/Errorbox";
import { ToastContainer, toast } from "react-toastify";

import "./ProductsTable.css";

export default function ProductsTable({ allProducts }) {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [productID, setProductID] = useState(null);
  const [mainProductInfos, setMainProductInfos] = useState({});

  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setproductNewPrice] = useState("");
  const [productNewCount, setproductNewCount] = useState("");
  const [productNewImg, setproductNewImg] = useState("");
  const [productNewPopularity, setproductNewPopularity] = useState("");
  const [productNewSale, setproductNewSale] = useState("");
  const [productNewColors, setproductNewColors] = useState("");

  const deleteModalCancelAction = () => {
    setIsShowDeleteModal(false);
    console.log("مودال حذف بسته شد");
  };
  const notify = () => toast("محصول با موفقیت حذف شد");
  const deleteModalSubmitAction = () => {
    console.log(productID);
    console.log("حذف انجام شد");
    setIsShowDeleteModal(false);
    notify();
  };
  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
    console.log("مودال جزیئات بسته شد");
  };

  const updateProductInfos = (e) => {
    e.preventDefault();
    const productsNewInfos = {
      title: productNewTitle,
      price: productNewPrice,
      count: productNewCount,
      img: productNewImg,
      popularity: productNewPopularity,
      sale: productNewSale,
      colors: productNewColors,
    };
    console.log(productsNewInfos);
    console.log("updateing product");
  };

  return (
    <>
      <ToastContainer />
      {!allProducts.length ? (
        <Errorbox msg="هیچ محصولی یافت نشد" />
      ) : (
        <table className="products-table">
          <thead>
            <tr className="products-table-heading-tr">
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product) => (
              <tr key={product.id} className="products-table-tr">
                <td>
                  <img
                    src={product.img}
                    alt="logo192"
                    className="products-table-img"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price.toLocaleString()} تومان</td>
                <td>{product.count}</td>
                <td>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDetailsModal(true);
                      setMainProductInfos(product);
                    }}
                  >
                    جزییات
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setProductID(product.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowEditModal(true);
                      setMainProductInfos(product);
                      setProductID(product.id);
                      setProductNewTitle(product.title);
                      setproductNewPrice(product.price);
                      setproductNewCount(product.count);
                      setproductNewImg(product.img);
                      setproductNewPopularity(product.popularity);
                      setproductNewSale(product.sale);
                      setproductNewColors(product.colors);
                      setProductID(product.id);
                    }}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isShowDeleteModal && (
        <DeleteModal
          deleteModalSubmitAction={deleteModalSubmitAction}
          deleteModalCancelAction={deleteModalCancelAction}
        />
      )}
      {isShowDetailsModal && (
        <>
          <DetailsModal closeDetailsModal={closeDetailsModal}>
            <table className="cms-table">
              <thead>
                <tr>
                  <th>محبوبیت</th>
                  <th>فروش</th>
                  <th>رنگ بندی</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{mainProductInfos.popularity}%</td>
                  <td>{mainProductInfos.sale.toLocaleString()}</td>
                  <td>{mainProductInfos.colors}</td>
                </tr>
              </tbody>
            </table>
          </DetailsModal>
        </>
      )}
      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateProductInfos}
        >
          <div className="add-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-product-input"
              placeholder="عنوان جدید را وارد کنید"
              value={productNewTitle}
              onChange={(e) => setProductNewTitle(e.target.value)}
            />
          </div>

          <div className="add-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-product-input"
              placeholder="مبلغ جدید را وارد کنید"
              value={productNewPrice}
              onChange={(e) => setproductNewPrice(e.target.value)}
            />
          </div>

          <div className="add-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-product-input"
              placeholder="موجودی جدید را وارد کنید"
              value={productNewCount}
              onChange={(e) => setproductNewCount(e.target.value)}
            />
          </div>

          <div className="add-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-product-input"
              placeholder="آدرس کاور جدید را وارد کنید"
              value={productNewImg}
              onChange={(e) => setproductNewImg(e.target.value)}
            />
          </div>

          <div className="add-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-product-input"
              placeholder="میزان محبوبیت جدید را وارد کنید"
              value={productNewPopularity}
              onChange={(e) => setproductNewPopularity(e.target.value)}
            />
          </div>

          <div className="add-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-product-input"
              placeholder="میزان فروش جدید را وارد کنید"
              value={productNewSale}
              onChange={(e) => setproductNewSale(e.target.value)}
            />
          </div>

          <div className="add-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-product-input"
              placeholder="تعداد رنگ بندی جدید را وارد کنید"
              value={productNewColors}
              onChange={(e) => setproductNewColors(e.target.value)}
            />
          </div>
        </EditModal>
      )}
    </>
  );
}
