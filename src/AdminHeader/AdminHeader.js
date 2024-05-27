import "./AdminHeader.css";


import React from "react";
import { Link } from "react-router-dom";
import AdminMenu from "../AdminMenu/AdminMenu";
import AdminBurgerMenu from "../AdminBurgerMenu/AdminBurgerMenu";

function AdminHeader() {

  return (
    <header className="admin-header header">
      <div className="container admin-header__container header__container">
        <nav className="admin-header__nav nav">
          <a href="/" className="logo header__logo">
            <img src="../images/logo.svg" alt="Logo" />
            Furniro
          </a>
          <AdminMenu
            classNameHeader={"header__menu"}
            classNameAdminHeader={"admin-header__menu"}
          />
        </nav>
        <AdminBurgerMenu/>
      </div>
    </header>
  );
}

export default AdminHeader;
