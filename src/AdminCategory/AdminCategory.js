
import "./AdminCategory.css";
import AdminPageHero from "../AdminPageHero/AdminPageHero";
import AdminCategoryMain from "../AdminCategoryMain/AdminCategoryMain";
import AddCategory from "../AddCategory/AddCategory";

import { useState } from "react";

function AdminCategory() {
  const [display, setDisplay] = useState("false");
  function getDisplay() {
    setDisplay("true");
  }
  return (
    <div className="admin-category page-content admin-page">
      <AdminPageHero pageName="Category" btnText="Add category" getDisplay={getDisplay} />
      <AdminCategoryMain />
      <AddCategory display={display} />
    </div>
  );
}

export default AdminCategory;
