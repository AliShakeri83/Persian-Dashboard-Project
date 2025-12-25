import React, { useEffect, useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import Errorbox from "../Errorbox/Errorbox";

import "./OffsTable.css";

export default function OffsTable({
  deleteDiscount,
  updateDiscount,
  allDiscount,
}) {
  const [allOff, setAllOff] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mainOffId, setMainOffId] = useState(null);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowActiveModal, setIsShowActiveModal] = useState(false);
  const [isShowNotActiveModal, setIsShowNotActiveModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setAllOff(allDiscount);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [allDiscount]);

  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };
  const closeActiveModal = () => {
    setIsShowActiveModal(false);
  };
  const deleteOff = () => {
    console.log("delete off");
    deleteDiscount(mainOffId);
    setIsShowDeleteModal(false);
  };
  const activeOff = () => {
    console.log("active");
    updateDiscount(mainOffId, { isActive: true });
    setIsShowActiveModal(false);
  };
  const notActiveOff = () => {
    console.log("notActive");
    updateDiscount(mainOffId, { isActive: false });
    setIsShowNotActiveModal(false);
  };

  if (isLoading) {
    return (
      <div className="cms-main">
        <h1 className="cms-title">لیست تخفیف ها</h1>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">در حال دریافت داده‌ها...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {allOff.length ? (
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
                <td>{off.productName}</td>
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
                  {off.isActive ? (
                    <button
                      className="products-table-btn"
                      onClick={() => {
                        setIsShowNotActiveModal(true);
                        setMainOffId(off.id);
                      }}
                    >
                      غیر فعال
                    </button>
                  ) : (
                    <button
                      className="products-table-btn"
                      onClick={() => {
                        setIsShowActiveModal(true);
                        setMainOffId(off.id);
                      }}
                    >
                      فعال
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ کد تخفیفی یافت نشد" />
      )}

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
      {isShowNotActiveModal && (
        <DeleteModal
          title={"آیا از غیر فعال کردن کد تخفیف اطمینان دارید؟"}
          deleteModalCancelAction={closeActiveModal}
          deleteModalSubmitAction={notActiveOff}
        />
      )}
    </>
  );
}
