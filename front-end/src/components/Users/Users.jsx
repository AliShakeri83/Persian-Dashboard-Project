import React, { useEffect, useState } from "react";
import Errorbox from "../Errorbox/Errorbox";
import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
import useUsers from "../../Hooks/useUsers";

import "./Users.css";

export default function Users() {
  const {
    addUser,
    allUsers,
    deleteUser: deleteUserMethod,
    updateUser,
  } = useUsers();
  const [users, setUsers] = useState([]);

  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mainUserID, setMainUserID] = useState(null);
  const [mainUserInfos, setMainUserInfos] = useState({});

  const [userFirstnameNew, setUserFirstnameNew] = useState("");
  const [userLastnameNew, setUserLastnameNew] = useState("");
  const [userUsernameNew, setUserUsernameNew] = useState("");
  const [userPhoneNew, setUserPhoneNew] = useState("");
  const [userCityNew, setUserCityNew] = useState("");
  const [userEmailNew, setUserEmailNew] = useState("");
  const [userAddressNew, setUserAddressNew] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setUsers(allUsers);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [allUsers]);

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
    deleteUserMethod(mainUserID);
    setIsShowDeleteModal(false);
  };
  const editUser = (e) => {
    e.preventDefault();
    const newUserEdit = {
      firstname: userFirstnameNew,
      lastname: userLastnameNew,
      username: userUsernameNew,
      phone: userPhoneNew,
      city: userCityNew,
      email: userEmailNew,
      address: userAddressNew,
    };
    updateUser(mainUserID, newUserEdit);
    console.log("user is edited");
    setIsShowEditModal(false);
  };
  if (isLoading) {
    return (
      <div className="cms-main">
        <h1 className="cms-title">لیست کاربران ها</h1>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">در حال دریافت داده‌ها...</p>
        </div>
      </div>
    );
  }
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
                        setUserPhoneNew(user.phone);
                        setUserCityNew(user.city);
                        setUserEmailNew(user.email);
                        setUserAddressNew(user.address);
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{mainUserInfos.city}</td>
                  <td>{mainUserInfos.address}</td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={() => setIsShowDetailsModal(false)}
              className="products-table-btn"
              style={{
                width: "100%",
                margin: "0 auto",
                justifyContent: "center",
                display: "flex",
              }}
            >
              بستن
            </button>
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
            <button
              onClick={() => setIsShowEditModal(false)}
              className="products-table-btn"
              style={{
                borderRadius: "0px",
                width: "100%",
                margin: "12px auto",
                justifyContent: "center",
                display: "flex",
              }}
            >
              بستن
            </button>
          </EditModal>
        )}
      </div>
    </>
  );
}
