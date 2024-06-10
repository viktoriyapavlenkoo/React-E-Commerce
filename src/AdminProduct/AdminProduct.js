import "./AdminProduct.css";
import AdminPageHero from "../AdminPageHero/AdminPageHero";
import AdminProductMain from "../AdminProductMain/AdminProductMain";

import { useState } from "react";
import AddProduct from "../AddProduct/AddProduct";

function AdminProduct() {
  const [display, setDisplay] = useState("false");
  function getDisplay() {
    setDisplay("true");
  }
  return (
    <div className="admin-product page-content admin-page">
      <AdminPageHero
        pageName="Product"
        btnText="Add product"
        getDisplay={getDisplay}
      />
      <AdminProductMain />
      <AddProduct display={display} />
    </div>
  );
}

export default AdminProduct;
