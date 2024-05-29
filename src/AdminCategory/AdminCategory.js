
import "./AdminCategory.css";
import AdminPageHero from "../AdminPageHero/AdminPageHero";
import AdminCategoryMain from "../AdminCategoryMain/AdminCategoryMain";

function AdminCategory() {
  return <div className="admin-category page-content">
    <AdminPageHero pageName="Category" btnText="Add category" />
    <AdminCategoryMain/>
  </div>;
}

export default AdminCategory;
