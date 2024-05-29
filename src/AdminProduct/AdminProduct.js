import "./AdminProduct.css";
import AdminPageHero from "../AdminPageHero/AdminPageHero";
import AdminProductMain from "../AdminProductMain/AdminProductMain";

function AdminProduct() {
  return (
    <div className="admin-product page-content">
      <AdminPageHero pageName="Product" btnText="Add product" />
      <AdminProductMain/>
    </div>
  );
}

export default AdminProduct;
