import React, { useState } from "react";
import Errorbox from "./../Errorbox/Errorbox";
import { allCommentsInShop } from "../../Datas";

import "./Comments.css";

export default function Comments() {
  const [allComments, setAllComments] = useState(allCommentsInShop);
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
                  <button className="btn">دیدن متن</button>
                </td>
                <td>{comment.date}</td>
                <td>{comment.hour}</td>
                <td>
                  <button className="btn">حذف</button>
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
    </div>
  );
}
