import React, { useState } from "react";
import Errorbox from "./../Errorbox/Errorbox";
import { allCommentsInShop } from "../../Datas";
import DetailsModal from "./../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";

import "./Comments.css";

export default function Comments() {
  const [allComments, setAllComments] = useState(allCommentsInShop);
  const [mainCommentBody, setMainCommentBody] = useState("");
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);
  const [isShowRejectModal, setIsShowRejectModal] = useState(false);
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
  const closeEditModal = () => {
    setIsShowEditModal(false);
  };

  const updateComment = (e) => {
    e.preventDefault();
    const updateComment = allComments.map((comment) => {
      if (comment.id === commentID) {
        return { ...comment, body: mainCommentBody };
      }
      return comment;
    });
    setAllComments(updateComment);

    setIsShowEditModal(false);
    console.log("comment update", mainCommentBody);
  };

  const closeAcceptModal = () => {
    setIsShowAcceptModal(false);
  };
  const acceptComment = () => {
    console.log("accept comment");
    const acceptComment = allComments.map((comment) => {
      if (comment.id === commentID) {
        return { ...comment, isAccept: !comment.isAccept };
      }
      return comment;
    });
    setAllComments(acceptComment);
    setIsShowAcceptModal(false);
  };

  const closeRejectModal = () => {
    setIsShowRejectModal(false);
  };

  const rejectComment = () => {
    console.log("comment reject");
    const acceptComment = allComments.map((comment) => {
      if (comment.id === commentID) {
        return { ...comment, isAccept: !comment.isAccept };
      }
      return comment;
    });
    setAllComments(acceptComment);
    setIsShowRejectModal(false);
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
                  <button
                    className="btn"
                    onClick={() => {
                      setIsShowEditModal(true);
                      setMainCommentBody(comment.body);
                      setCommentID(comment.id);
                    }}
                  >
                    ویرایش
                  </button>
                  <button className="btn">پاسخ</button>
                  {!comment.isAccept ? (
                    <button
                      className="btn"
                      onClick={() => {
                        setIsShowAcceptModal(true);
                        setCommentID(comment.id);
                      }}
                    >
                      تایید
                    </button>
                  ) : (
                    <button
                      className="btn"
                      onClick={() => {
                        setIsShowRejectModal(true);
                        setCommentID(comment.id);
                      }}
                    >
                      رد
                    </button>
                  )}
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
          title={"آیا از حذف اطمینان دارید؟"}
          deleteModalCancelAction={deleteModalCancelAction}
          deleteModalSubmitAction={deleteComment}
        />
      )}
      {isShowEditModal && (
        <EditModal onClose={closeEditModal} onSubmit={updateComment}>
          <textarea
            value={mainCommentBody}
            onChange={(e) => setMainCommentBody(e.target.value)}
          ></textarea>
        </EditModal>
      )}
      {isShowAcceptModal && (
        <DeleteModal
          title={"آیا از تایید اطمینان دارید؟"}
          deleteModalCancelAction={closeAcceptModal}
          deleteModalSubmitAction={acceptComment}
        />
      )}
      {isShowRejectModal && (
        <DeleteModal
          title={"آیا از رد کامنت اطمینان دارید؟"}
          deleteModalCancelAction={closeRejectModal}
          deleteModalSubmitAction={rejectComment}
        />
      )}
    </div>
  );
}
