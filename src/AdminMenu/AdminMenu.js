import React from 'react';
import { Link } from 'react-router-dom';
import "./AdminMenu.css";

function AdminMenu(props) {
  const classNameHeader = props.classNameHeader;
  const classNameAdminHeader = props.classNameAdminHeader;
  return (
    <ul className={`menu ${classNameHeader} ${classNameAdminHeader}`}>
      <li className="menu__item">
        <Link to="/admin-category" className="menu__link">
          Category
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/admin-product" className="menu__link">
          Product
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/admin-upload" className="menu__link">
          Upload
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/admin-settings" className="menu__link">
          Settings
        </Link>
      </li>
      
    </ul>
  );
}

export default AdminMenu;
