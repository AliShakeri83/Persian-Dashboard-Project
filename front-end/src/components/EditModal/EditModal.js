import React, { useEffect } from "react";

import "./EditModal.css";

export default function EditModal({ children, onClose, onSubmit }) {
  useEffect(() => {
    const testFunc = (e) => {
      console.log(e);
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", testFunc);

    return () => window.removeEventListener("keydown", testFunc);
  });
  return (
    <div className="modal-parent active">
      <form className="edit-modal-form">
        <h1>اطلاعات جدید را وارد نمایید</h1>
        {children}
        <button className="edit-form-submit" onClick={onSubmit}>ثبت اطلاعات جدید</button>
      </form>
    </div>
  );
}
