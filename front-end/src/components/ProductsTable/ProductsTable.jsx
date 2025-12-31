import React, { useState } from "react";
import DeleteModal from "./../DeleteModal/DeleteModal";
import DetailsModal from "./../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Errorbox from "./../Errorbox/Errorbox";
import { ToastContainer, toast } from "react-toastify";

import "./ProductsTable.css";

export default function ProductsTable({
  allProducts = [],
  deleteProduct,
  updateProduct,
  search = "",
}) {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const [productID, setProductID] = useState(null);
  const [mainProductInfos, setMainProductInfos] = useState({});

  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewSale, setProductNewSale] = useState("");
  const [productNewColors, setProductNewColors] = useState("");

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const deleteModalSubmitAction = () => {
    deleteProduct(productID);
    setIsShowDeleteModal(false);
    toast.success("محصول با موفقیت حذف شد");
  };

  const updateProductInfos = (e) => {
    e.preventDefault();

    updateProduct(productID, {
      title: productNewTitle,
      price: Number(productNewPrice),
      count: Number(productNewCount),
      img_url: productNewImg,
      popularity: productNewPopularity,
      sale: productNewSale,
      colors: productNewColors,
    });

    setIsShowEditModal(false);
    toast.success("محصول با موفقیت ویرایش شد");
  };

  if (!filteredProducts.length) {
    return (
      <>
        <ToastContainer />
        <Errorbox msg="هیچ محصولی یافت نشد" />
      </>
    );
  }

  return (
    <>
      <ToastContainer />

      <table className="products-table">
        <thead>
          <tr className="products-table-heading-tr">
            <th>عکس</th>
            <th>اسم</th>
            <th>قیمت</th>
            <th>موجودی</th>
            <th>عملیات</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts
            .slice()
            .reverse()
            .map((product) => (
              <tr key={product.id} className="products-table-tr">
                <td>
                  <img
                    src={product.img_url}
                    alt={product.title}
                    className="products-table-img"
                  />
                </td>

                <td>{product.title}</td>
                <td>{Number(product.price).toLocaleString()} تومان</td>
                <td>{product.count}</td>

                <td>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setMainProductInfos(product);
                      setIsShowDetailsModal(true);
                    }}
                  >
                    جزییات
                  </button>

                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setProductID(product.id);
                      setIsShowDeleteModal(true);
                    }}
                  >
                    حذف
                  </button>

                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setProductID(product.id);
                      setMainProductInfos(product);
                      setProductNewTitle(product.title);
                      setProductNewPrice(product.price);
                      setProductNewCount(product.count);
                      setProductNewImg(product.img_url);
                      setProductNewPopularity(product.popularity);
                      setProductNewSale(product.sale);
                      setProductNewColors(product.colors);
                      setIsShowEditModal(true);
                    }}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Delete Modal */}
      {isShowDeleteModal && (
        <DeleteModal
          title="آیا از حذف اطمینان دارید؟"
          deleteModalSubmitAction={deleteModalSubmitAction}
          deleteModalCancelAction={() => setIsShowDeleteModal(false)}
        />
      )}

      {/* Details Modal */}
      {isShowDetailsModal && (
        <DetailsModal closeDetailsModal={() => setIsShowDetailsModal(false)}>
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
                <td>{Number(mainProductInfos.sale).toLocaleString()}</td>
                <td>{mainProductInfos.color}</td>
              </tr>
            </tbody>
          </table>

          <button
            onClick={() => setIsShowDetailsModal(false)}
            className="products-table-btn"
            style={{
              width: "100%",
              margin: "0 auto",
              justifyContent: "center",
              display: "flex",
            }}
          >
            بستن
          </button>
        </DetailsModal>
      )}

      {/* Edit Modal */}
      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateProductInfos}
        >
          {[
            ["عنوان جدید", productNewTitle, setProductNewTitle],
            ["مبلغ جدید", productNewPrice, setProductNewPrice],
            ["موجودی جدید", productNewCount, setProductNewCount],
            ["آدرس کاور جدید", productNewImg, setProductNewImg],
            ["محبوبیت جدید", productNewPopularity, setProductNewPopularity],
            ["میزان فروش جدید", productNewSale, setProductNewSale],
            ["تعداد رنگ بندی", productNewColors, setProductNewColors],
          ].map(([placeholder, value, setter], index) => (
            <div className="add-products-form-group" key={index}>
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                type="text"
                className="edit-product-input"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setter(e.target.value)}
              />
            </div>
          ))}

          <button
            onClick={() => setIsShowEditModal(false)}
            className="products-table-btn"
            style={{
              borderRadius: "0px",
              width: "100%",
              margin: "12px auto",
              justifyContent: "center",
              display: "flex",
            }}
          >
            بستن
          </button>
        </EditModal>
      )}
    </>
  );
}
