import React, { useEffect, useState } from "react";
import Errorbox from "../Errorbox/Errorbox";
import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import useOrders from "./../../Hooks/useOrders";

export default function Orders() {
  const {
    addOrder,
    allOrders: useAllOrders = [],
    deleteOrder: deleteOrderMethod,
    updateOrder,
  } = useOrders();
  const [allOrders, setAllOrders] = useState([]);

  const [mainOrderID, setMainOrderID] = useState(null);
  const [mainOrder, setMainOrder] = useState({});
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowSubmitModal, setIsShowSubmitModal] = useState(false);
  const [isShowRejectModal, setIsShowRejectModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setAllOrders(useAllOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [useAllOrders]);

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
    updateOrder(mainOrderID, { isActive: false });
    setIsShowRejectModal(false);
  };
  const submitOrder = () => {
    updateOrder(mainOrderID, { isActive: true });
    setIsShowSubmitModal(false);
  };
  const deleteOrder = () => {
    console.log("delete Order");
    deleteOrderMethod(mainOrderID);
    setIsShowDeleteModal(false);
  };

  if (isLoading) {
    return (
      <div className="cms-main">
        <h1 className="cms-title">لیست سفارش ها</h1>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">در حال دریافت داده‌ها...</p>
        </div>
      </div>
    );
  }

  if (!allOrders.length) {
    return <Errorbox msg="هیچ سفارشی یافت نشد" />;
  }

  return (
    <>
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
                <td>{order.productName}</td>
                <td>{order.username}</td>
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

      {isShowDetailsModal && (
        <DetailsModal closeDetailsModal={closeDetailsModal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>قیمت</th>
                <th>تخفیف</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{mainOrder.price.toLocaleString()}</td>
                <td>{mainOrder.discount}%</td>
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
