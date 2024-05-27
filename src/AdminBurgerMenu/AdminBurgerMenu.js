import { Link } from 'react-router-dom';
import "./AdminBurgerMenu.css";
import AdminMenu from "../AdminMenu/AdminMenu";
import { useState } from 'react';

function AdminBurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`}>
      <div className="burger-menu__icon" onClick={toggleMenu}>
        <span></span>
      </div>
      <nav className="burger-menu__nav">
        <AdminMenu
          classNameHeader={"burger-menu__menu"}
          classNameAdminHeader={"admin-burger-menu__menu"}
        />
      </nav>
    </div>
  );
}

export default AdminBurgerMenu;
