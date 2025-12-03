import React, { useEffect } from "react";

import "./DetailsModal.css";

export default function DetailsModal({ closeDetailsModal, children }) {
  useEffect(() => {
    const checkKey = (e) => {
      console.log(e);
      if (e.keyCode === 27) {
        closeDetailsModal();
      }
    };
    window.addEventListener("keydown", checkKey);

    return () => window.removeEventListener("keydown", checkKey); // preformance
  });
  return (
    <div className="modal-parent active">
      <div className="details-modal">
        {children}
      </div>
    </div>
  );
}
