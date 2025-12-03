import React, { useState } from "react";
import Errorbox from "./../Errorbox/Errorbox";
import { allCommentsInShop } from "../../Datas";
import DetailsModal from "./../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";

import "./Comments.css";

export default function Comments() {
  const [allComments, setAllComments] = useState(allCommentsInShop);
  const [mainCommentBody, setMainCommentBody] = useState("");
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [commentID, setCommentID] = useState(null);
  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };
  const deleteModalCancelAction = () => {
    setIsShowDeleteModal(false);
  };
  const deleteComment = () => {
    console.log("deleted");
    let newCommentArray = allComments.filter(
      (comment) => comment.id !== commentID
    );
    setAllComments(newCommentArray);
    setIsShowDeleteModal(false);
  };

  return (
    <div className="cms-main">
      {allComments.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>نام کاربر</th>
              <th>محصول</th>
              <th>کامنت</th>
              <th>تاریخ</th>
              <th>ساعت</th>
            </tr>
          </thead>

          <tbody>
            {allComments.map((comment) => (
              <tr key={comment.id}>
                <td>
                  {comment.userID}- {comment.username}
                </td>
                <td>
                  {comment.productID}- {comment.productName}
                </td>
                <td>
                  <button
                    className="btn"
                    onClick={() => {
                      setMainCommentBody(comment.body);
                      setIsShowDetailsModal(true);
                    }}
                  >
                    دیدن متن
                  </button>
                </td>
                <td>{comment.date}</td>
                <td>{comment.hour}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setCommentID(comment.id);
                    }}
                  >
                    حذف
                  </button>
                  <button className="btn">ویرایش</button>
                  <button className="btn">پاسخ</button>
                  <button className="btn">تایید</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ کامنتی یافت نشد" />
      )}
      {isShowDetailsModal && (
        <DetailsModal closeDetailsModal={closeDetailsModal}>
          <p className="text-modal">{mainCommentBody}</p>
          <button className="text-modal-close-btn" onClick={closeDetailsModal}>
            بستن
          </button>
        </DetailsModal>
      )}
      {isShowDeleteModal && (
        <DeleteModal
          deleteModalCancelAction={deleteModalCancelAction}
          deleteModalSubmitAction={deleteComment}
        />
      )}
    </div>
  );
}
