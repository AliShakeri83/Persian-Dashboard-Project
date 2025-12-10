import React, { useState } from "react";
import { allOffInShop } from "./../../Datas";
import DeleteModal from "./../DeleteModal/DeleteModal";

import "./OffsTable.css";

export default function OffsTable() {
  const [allOff, setAllOff] = useState(allOffInShop);
  const [mainOffId, setMainOffId] = useState(null);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowActiveModal, setIsShowActiveModal] = useState(false);

  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };
  const closeActiveModal = () => {
    setIsShowActiveModal(false);
  };
  const deleteOff = () => {
    console.log("delete off");
    setIsShowDeleteModal(false);
  };
  const activeOff = () => {
    console.log("active");
    setIsShowActiveModal(false);
  };
  return (
    <>
      <table className="products-table">
        <thead>
          <tr className="off-table-tr">
            <th>شناسه</th>
            <th>کد</th>
            <th>درصد</th>
            <th>محصول</th>
            <th>زمان</th>
            <th>وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {allOff.map((off) => (
            <tr key={off.id} className="off-table-td">
              <td>{off.id}</td>
              <td>{off.code}</td>
              <td>{off.precent}%</td>
              <td>{off.productID}</td>
              <td>{off.date}</td>
              <td>{off.isActive ? "✅" : "❌"}</td>
              <td>
                <button
                  className="products-table-btn"
                  onClick={() => {
                    setIsShowDeleteModal(true);
                    setMainOffId(off.id);
                  }}
                >
                  حذف
                </button>
                <button
                  className="products-table-btn"
                  onClick={() => {
                    setIsShowActiveModal(true);
                  }}
                >
                  فعال
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isShowDeleteModal && (
        <DeleteModal
          title={"آیا از حذف اطمینان دارید؟"}
          deleteModalCancelAction={closeDeleteModal}
          deleteModalSubmitAction={deleteOff}
        />
      )}
      {isShowActiveModal && (
        <DeleteModal
          title={"آیا از فعال کردن کد تخفیف اطمینان دارید؟"}
          deleteModalCancelAction={closeActiveModal}
          deleteModalSubmitAction={activeOff}
        />
      )}
    </>
  );
}
