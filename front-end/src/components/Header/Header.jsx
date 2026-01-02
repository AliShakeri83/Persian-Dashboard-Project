import React from "react";
import { CiDark } from "react-icons/ci";
import { BsBrightnessHigh } from "react-icons/bs";

import "./Header.css";

export default function Header({ search, setSearch, isDark, setIsDark }) {
  return (
    <div className="header">
      <div className="admin-profile">
        <img src="/logo192.png" alt="Admin Profile" />
        <div>
          <h1>ابوالفضل شاکری</h1>
          <h3>برنامه نویس فرانت اند</h3>
        </div>
      </div>

      <div className="header-left-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="جستجو کنید ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button onClick={() => setIsDark(!isDark)} className="header-left-icon">
          {isDark ? <BsBrightnessHigh /> : <CiDark />}
        </button>
      </div>
    </div>
  );
}
