import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TfiCommentAlt } from "react-icons/tfi";
import { FaUsers } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar-links">
        <NavLink to={"/"}>
          <AiOutlineHome className="icon" />
          صفحه اصلی
        </NavLink>
        <NavLink to={"/products"}>
          <MdOutlineProductionQuantityLimits className="icon" />
          محصولات
        </NavLink>
        <NavLink to={"/comments"}>
          <TfiCommentAlt className="icon" />
          کامنت ها
        </NavLink>
        <NavLink to={"/users"}>
          <FaUsers className="icon" />
          کاربران
        </NavLink>
        <NavLink to={"/orders"}>
          <IoBagCheckOutline className="icon" />
          سفارشات
        </NavLink>
        <NavLink to={"/offs"}>
          <FaDollarSign className="icon" />
          تخفیف ها
        </NavLink>
      </ul>
    </div>
  );
}
