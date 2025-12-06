import React, { useState } from "react";
import Errorbox from "../Errorbox/Errorbox";
import { allOrdersInShop } from "../../Datas";
import DetailsModal from "./../DetailsModal/DetailsModal";

export default function Orders() {
  const [allOrders, setAllOrders] = useState(allOrdersInShop);
  const [mainOrder, setMainOrder] = useState({});
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };
  return (
    <>
      {allOrders.length ? (
        <div className="orders-container cms-main">
          <h2>لیست سفارش‌ها</h2>
          <table className="cms-table">
            <thead>
              <tr>
                <th>شناسه</th>
                <th>محصول</th>
                <th>کاربر</th>
                <th>تاریخ</th>
                <th>ساعت</th>
                <th>قیمت نهایی</th>
                <th>فعال؟</th>
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
                    <button className="btn edit">ویرایش</button>
                    <button className="btn delete">حذف</button>
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
    </>
  );
}
