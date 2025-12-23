import React, { useState, useEffect } from "react";
import Errorbox from "../Errorbox/Errorbox";
import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import useComments from "../../Hooks/useComments";
import "./Comments.css";

export default function Comments() {
  const {
    allComments: commentsInShop,
    deleteComment: deleteCommentMethod,
    updateComment: updateCommentMethod,
  } = useComments();

  const [allComments, setAllComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mainCommentBody, setMainCommentBody] = useState("");
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);
  const [isShowRejectModal, setIsShowRejectModal] = useState(false);
  const [commentID, setCommentID] = useState(null);

  useEffect(() => {
    // شبیه‌سازی دریافت داده با تاخیر
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // در اینجا می‌توانید API call واقعی داشته باشید
        // برای نمونه، یک تاخیر کوچک اضافه می‌کنیم
        await new Promise((resolve) => setTimeout(resolve, 500));

        // داده‌ها را از hook دریافت می‌کنیم
        setAllComments(commentsInShop);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [commentsInShop]);

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };

  const deleteModalCancelAction = () => {
    setIsShowDeleteModal(false);
  };

  const deleteComment = () => {
    console.log("deleted");
    deleteCommentMethod(commentID);
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
    updateCommentMethod(commentID, { isAction: true });
    setIsShowAcceptModal(false);
  };

  const closeRejectModal = () => {
    setIsShowRejectModal(false);
  };

  const rejectComment = () => {
    console.log("comment reject");
    updateCommentMethod(commentID, { isAction: false });
    setIsShowRejectModal(false);
  };

  // نمایش لودینگ
  if (isLoading) {
    return (
      <div className="cms-main">
        <h1 className="cms-title">لیست کامنت ها</h1>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">در حال دریافت داده‌ها...</p>
        </div>
      </div>
    );
  }

  // نمایش خطا در صورت نبودن کامنت
  if (!allComments.length) {
    return <Errorbox msg="هیچ کامنتی یافت نشد" />;
  }

  return (
    <div className="cms-main">
      <h1 className="cms-title">لیست کامنت ها</h1>
      <table className="cms-table">
        <thead>
          <tr>
            <th>نام کاربر</th>
            <th>محصول</th>
            <th>کامنت</th>
            <th>تاریخ</th>
            <th>ساعت</th>
            <th>عملیات</th>
          </tr>
        </thead>

        <tbody>
          {allComments.map((comment) => (
            <tr key={comment.id}>
              <td>
                {comment.userID} - {comment.username}
              </td>
              <td>
                {comment.productID} - {comment.productName}
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
                {!comment.isAction ? (
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
