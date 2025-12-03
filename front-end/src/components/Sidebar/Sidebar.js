import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TfiCommentAlt } from "react-icons/tfi";
import { FaUsers } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar-links">
        <li>
          <Link to={"/products"}>
            <AiOutlineHome className="icon" />
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link to={"/products"} className="active">
            <MdOutlineProductionQuantityLimits className="icon" />
            محصولات
          </Link>
        </li>
        <li>
          <Link to={"/comments"}>
            <TfiCommentAlt className="icon" />
            کامنت ها
          </Link>
        </li>
        <li>
          <Link to={"/users"}>
            <FaUsers className="icon" />
            کاربران
          </Link>
        </li>
        <li>
          <Link to={"/orders"}>
            <IoBagCheckOutline className="icon" />
            سفارشات
          </Link>
        </li>
        <li>
          <Link to={"/offs"}>
            <FaDollarSign className="icon" />
            تخفیف ها
          </Link>
        </li>
      </ul>
    </div>
  );
}
