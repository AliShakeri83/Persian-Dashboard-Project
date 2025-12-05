import React, { useState } from "react";
import Errorbox from "../Errorbox/Errorbox";
import { allUsersInShop } from "../../Datas";
import DetailsModal from "./../DetailsModal/DetailsModal";
import DeleteModal from "./../DeleteModal/DeleteModal";
import EditModal from "./../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";

import "./Users.css";

export default function Users() {
  const [users, setUsers] = useState(allUsersInShop);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [mainUserID, setMainUserID] = useState(null);
  const [mainUserInfos, setMainUserInfos] = useState({});

  const [userFirstnameNew, setUserFirstnameNew] = useState("");
  const [userLastnameNew, setUserLastnameNew] = useState("");
  const [userUsernameNew, setUserUsernameNew] = useState("");
  const [userPasswordNew, setUserPasswordNew] = useState("");
  const [userPhoneNew, setUserPhoneNew] = useState("");
  const [userCityNew, setUserCityNew] = useState("");
  const [userEmailNew, setUserEmailNew] = useState("");
  const [userAddressNew, setUserAddressNew] = useState("");
  const [userScoreNew, setUserScoreNew] = useState("");
  const [userBuyNew, setUserBuyNew] = useState("");
  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };
  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };
  const closeEditModal = () => {
    setIsShowEditModal(false);
  };
  const deleteUser = () => {
    console.log("delete user");
    const newUserArray = users.filter((user) => {
      return user.id !== mainUserID;
    });
    setUsers(newUserArray);
    setIsShowDeleteModal(false);
  };
  const editUser = (e) => {
    e.preventDefault();
    const newUserEdit = {
      firstname: userFirstnameNew,
      lastname: userLastnameNew,
      username: userUsernameNew,
      password: userPasswordNew,
      phone: userPhoneNew,
      city: userCityNew,
      email: userEmailNew,
      address: userAddressNew,
      score: userScoreNew,
      buy: userBuyNew,
    };
    const newUsersArray = users.map((user) => {
      if (user.id === mainUserID) {
        return newUserEdit;
      }
      return user;
    });
    setUsers(newUsersArray);
    console.log("user is edited");
    setIsShowEditModal(false);
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
                    <button
                      className="btn"
                      onClick={() => {
                        setMainUserInfos(user);
                        setIsShowDetailsModal(true);
                      }}
                    >
                      جزئیات
                    </button>
                    <button
                      className="btn"
                      onClick={() => {
                        setIsShowEditModal(true);
                        setMainUserID(user.id);

                        setUserFirstnameNew(user.firstname);
                        setUserLastnameNew(user.lastname);
                        setUserUsernameNew(user.username);
                        setUserPasswordNew(user.password);
                        setUserPhoneNew(user.phone);
                        setUserCityNew(user.city);
                        setUserEmailNew(user.email);
                        setUserAddressNew(user.address);
                        setUserScoreNew(user.score);
                        setUserBuyNew(user.buy);
                      }}
                    >
                      ویرایش
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <Errorbox msg="هیچ کاربری یافت نشد" />
        )}
        {isShowDetailsModal && (
          <DetailsModal closeDetailsModal={closeDetailsModal}>
            <table className="cms-table">
              <thead>
                <tr>
                  <th>شهر</th>
                  <th>آدرس</th>
                  <th>امتیاز</th>
                  <th>میزان خرید</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{mainUserInfos.city}</td>
                  <td>{mainUserInfos.address}</td>
                  <td>{mainUserInfos.score}</td>
                  <td>{mainUserInfos.buy}</td>
                </tr>
              </tbody>
            </table>
          </DetailsModal>
        )}
        {isShowDeleteModal && (
          <DeleteModal
            title={"آیا از حذف اطمینان دارید؟"}
            deleteModalCancelAction={closeDeleteModal}
            deleteModalSubmitAction={deleteUser}
          />
        )}

        {isShowEditModal && (
          <EditModal onClose={closeEditModal} onSubmit={editUser}>
            <div className="edit-user-info-inputs">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                value={userFirstnameNew}
                onChange={(event) => {
                  setUserFirstnameNew(event.target.value);
                }}
                type="text"
                placeholder="لطفا مقدار جدید را وارد کنید"
                className="edit-user-info-input"
              />
            </div>
            <div className="edit-user-info-inputs">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                value={userLastnameNew}
                onChange={(event) => {
                  setUserLastnameNew(event.target.value);
                }}
                type="text"
                placeholder="لطفا مقدار جدید را وارد کنید"
                className="edit-user-info-input"
              />
            </div>
            <div className="edit-user-info-inputs">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                value={userUsernameNew}
                onChange={(event) => {
                  setUserUsernameNew(event.target.value);
                }}
                type="text"
                placeholder="لطفا مقدار جدید را وارد کنید"
                className="edit-user-info-input"
              />
            </div>
            <div className="edit-user-info-inputs">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                value={userPasswordNew}
                onChange={(event) => {
                  setUserPasswordNew(event.target.value);
                }}
                type="text"
                placeholder="لطفا مقدار جدید را وارد کنید"
                className="edit-user-info-input"
              />
            </div>
            <div className="edit-user-info-inputs">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                value={userPhoneNew}
                onChange={(event) => {
                  setUserPhoneNew(event.target.value);
                }}
                type="text"
                placeholder="لطفا مقدار جدید را وارد کنید"
                className="edit-user-info-input"
              />
            </div>
            <div className="edit-user-info-inputs">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                value={userCityNew}
                onChange={(event) => {
                  setUserCityNew(event.target.value);
                }}
                type="text"
                placeholder="لطفا مقدار جدید را وارد کنید"
                className="edit-user-info-input"
              />
            </div>
            <div className="edit-user-info-inputs">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                value={userEmailNew}
                onChange={(event) => {
                  setUserEmailNew(event.target.value);
                }}
                type="text"
                placeholder="لطفا مقدار جدید را وارد کنید"
                className="edit-user-info-input"
              />
            </div>
            <div className="edit-user-info-inputs">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                value={userAddressNew}
                onChange={(event) => {
                  setUserAddressNew(event.target.value);
                }}
                type="text"
                placeholder="لطفا مقدار جدید را وارد کنید"
                className="edit-user-info-input"
              />
            </div>
            <div className="edit-user-info-inputs">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                value={userScoreNew}
                onChange={(event) => {
                  setUserScoreNew(event.target.value);
                }}
                type="text"
                placeholder="لطفا مقدار جدید را وارد کنید"
                className="edit-user-info-input"
              />
            </div>
            <div className="edit-user-info-inputs">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                value={userBuyNew}
                onChange={(event) => {
                  setUserBuyNew(event.target.value);
                }}
                type="text"
                placeholder="لطفا مقدار جدید را وارد کنید"
                className="edit-user-info-input"
              />
            </div>
          </EditModal>
        )}
      </div>
    </>
  );
}
