import React, { useState } from "react";
import Errorbox from "../Errorbox/Errorbox";
import { allUsersInShop } from "../../Datas";
import DeleteModal from "./../DeleteModal/DeleteModal";

export default function Users() {
  const [users, setUsers] = useState(allUsersInShop);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [mainUserID, setMainUserID] = useState(null);
  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };
  const deleteUser = () => {
    console.log("delete user");
    const newUserArray = users.filter((user) => {
      return user.id !== mainUserID;
    });
    setUsers(newUserArray);
    setIsShowDeleteModal(false);
  };
  return (
    <>
      <div className="cms-main">
        <h1 className="cms-title">لیست کاربران</h1>

        {users.length ? (
          <table className="cms-table">
            <thead>
              <tr>
                <th>نام و نام خانوادگی</th>
                <th>نام نمایشی در سایت</th>
                <th>رمز عبور</th>
                <th>شماره تماس</th>
                <th>ایمیل</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <td>
                    {user.firstname} {user.lastname}
                  </td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => {
                        setIsShowDeleteModal(true);
                        setMainUserID(user.id);
                      }}
                    >
                      حذف
                    </button>
                    <button className="btn">جزئیات</button>
                    <button className="btn">ویرایش</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <Errorbox msg="هیچ کاربری یافت نشد" />
        )}
        {isShowDeleteModal && (
          <DeleteModal
            title={"آیا از حذف اطمینان دارید؟"}
            deleteModalCancelAction={closeDeleteModal}
            deleteModalSubmitAction={deleteUser}
          />
        )}
      </div>
    </>
  );
}
