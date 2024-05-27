import "./Header.css";
import Menu from "../Menu/Menu";
import ButtonsList from "../ButtonsList/ButtonsList";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import React from "react";
import AdminHeader from "../AdminHeader/AdminHeader";

function Header(props) {
  const pathname = props.pathname;
  if (pathname === "/login") {
    return null;
  }
  if (pathname.startsWith("/admin")) {
    return (
      <AdminHeader/>
    );
  }
  return (
    <header className="header">
      <div className="container header__container">
        <nav className="nav">
          <a href="/" className="logo header__logo">
            <img src="../images/logo.svg" alt="Logo" />
            Furniro
          </a>
          <Menu props={"header__menu"} />
        </nav>
        <ButtonsList props={"header__btns-list"} />
        <BurgerMenu />
      </div>
    </header>
  );
}

export default Header;
