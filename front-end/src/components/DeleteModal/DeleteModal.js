import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";

import "./DeleteModal.css";

export default function DeleteModal({
  deleteModalCancelAction,
  deleteModalSubmitAction,
}) {
  useEffect(() => {
    const checkKey = (e) => {
      console.log(e);
      if (e.keyCode === 27) {
        deleteModalCancelAction();
      }
    };
    window.addEventListener("keydown", checkKey);

    return () => window.removeEventListener("keydown", checkKey); // preformance
  });

  return ReactDOM.createPortal(
    <div className="modal-parent active">
      <div className="delete-modal">
        <h1>آیا از حذف اطمینان دارید؟</h1>
        <div className="delete-modal-btns">
          <button
            className="delete-btn delete-modal-accept-btn"
            onClick={() => deleteModalSubmitAction()}
          >
            بله
          </button>
          <button
            className="delete-btn delete-modal-reject-btn"
            onClick={() => deleteModalCancelAction()}
          >
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
