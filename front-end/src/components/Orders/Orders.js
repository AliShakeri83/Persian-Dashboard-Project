import React, { useState } from "react";
import Errorbox from "../Errorbox/Errorbox";
import { allOrdersInShop } from "../../Datas";
import DetailsModal from "./../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "./../EditModal/EditModal";

export default function Orders() {
  const [allOrders, setAllOrders] = useState(allOrdersInShop);
  const [mainOrderID, setMainOrderID] = useState(null);
  const [mainOrder, setMainOrder] = useState({});
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowSubmitModal, setIsShowSubmitModal] = useState(false);
  const [isShowRejectModal, setIsShowRejectModal] = useState(false);

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };
  const closeSubmitModal = () => {
    setIsShowSubmitModal(false);
  };
  const closeRejectModal = () => {
    setIsShowRejectModal(false);
  };
  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };
  const rejectOrder = () => {
    const newOrderArray = allOrders.map((order) => {
      if (order.id === mainOrderID) {
        return { ...order, isActive: !order.isActive };
      }
      return order;
    });
    setAllOrders(newOrderArray);
    setIsShowRejectModal(false);
  };
  const submitOrder = () => {
    const newOrderArray = allOrders.map((order) => {
      if (order.id === mainOrderID) {
        return { ...order, isActive: !order.isActive };
      }
      return order;
    });
    setAllOrders(newOrderArray);
    setIsShowSubmitModal(false);
  };
  const deleteOrder = () => {
    console.log("submited Order");
    const newOrderArray = allOrders.filter((order) => order.id !== mainOrderID);
    setAllOrders(newOrderArray);
    setIsShowDeleteModal(false);
  };
  return (
    <>
      {allOrders.length ? (
        <div className="orders-container cms-main">
          <h2 className="cms-title">لیست سفارش‌ها</h2>
          <table className="cms-table">
            <thead>
              <tr>
                <th>شناسه</th>
                <th>محصول</th>
                <th>کاربر</th>
                <th>تاریخ</th>
                <th>ساعت</th>
                <th>قیمت نهایی</th>
                <th>تایید</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.productID}</td>
                  <td>{order.userID}</td>
                  <td>{order.date}</td>
                  <td>{order.hour}</td>
                  <td>{order.sale.toLocaleString()}</td>
                  <td>{order.isActive ? "✅" : "❌"}</td>
                  <td>
                    <button
                      className="btn details"
                      onClick={() => {
                        setIsShowDetailsModal(true);
                        setMainOrder(order);
                      }}
                    >
                      جزئیات
                    </button>
                    {!order.isActive ? (
                      <button
                        className="btn edit"
                        onClick={() => {
                          setIsShowSubmitModal(true);
                          setMainOrder(order);
                          setMainOrderID(order.id);
                        }}
                      >
                        تایید
                      </button>
                    ) : (
                      <button
                        className="btn edit"
                        onClick={() => {
                          setIsShowRejectModal(true);
                          setMainOrder(order);
                          setMainOrderID(order.id);
                        }}
                      >
                        رد
                      </button>
                    )}

                    <button
                      className="btn delete"
                      onClick={() => {
                        setIsShowDeleteModal(true);
                        setMainOrderID(order.id);
                      }}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Errorbox msg="هیچ سفارشی یافت نشد" />
      )}
      {isShowDetailsModal && (
        <DetailsModal closeDetailsModal={closeDetailsModal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>قیمت</th>
                <th>تخفیف</th>
                <th>تعداد فروش</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{mainOrder.price.toLocaleString()}</td>
                <td>{mainOrder.off}%</td>
                <td>{mainOrder.sale_count}</td>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
      )}
      {isShowDeleteModal && (
        <DeleteModal
          title={"آیا از حذف اطمینان دارید؟"}
          deleteModalCancelAction={closeDeleteModal}
          deleteModalSubmitAction={deleteOrder}
        ></DeleteModal>
      )}
      {isShowSubmitModal && (
        <DeleteModal
          title={"آیا از تایید سفارش اطمینان دارید؟"}
          deleteModalCancelAction={closeSubmitModal}
          deleteModalSubmitAction={submitOrder}
        ></DeleteModal>
      )}
      {isShowRejectModal && (
        <DeleteModal
          title={"آیا از رد سفارش اطمینان دارید؟"}
          deleteModalCancelAction={closeRejectModal}
          deleteModalSubmitAction={rejectOrder}
        ></DeleteModal>
      )}
    </>
  );
}
