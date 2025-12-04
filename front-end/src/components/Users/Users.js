import React, { useState } from "react";
import Errorbox from "../Errorbox/Errorbox";
import { allUsersInShop } from "../../Datas";

export default function Users() {
  const [users, setUsers] = useState(allUsersInShop);
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
                    <button className="btn">حذف</button>
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
      </div>
    </>
  );
}
