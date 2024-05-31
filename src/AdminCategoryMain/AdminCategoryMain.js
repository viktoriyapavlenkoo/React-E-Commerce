import "./AdminCategoryMain.css";

import SearchFilterSection from "../SearchFilterSection/SearchFilterSection";
import AdminCategoryTable from "../AdminCategoryTable/AdminCategoryTable";
import QuantityPagesSection from "../QuantityPagesSection/QuantityPagesSection";

function AdminCategoryMain() {
  return (
    <div className="admin-category-main admin-main">
      <div className="container admin-category-main__container admin-main__container">
        <div className="admin-category-main__content admin-main__content">
          <div className="search-table-content">
            <SearchFilterSection />
            <AdminCategoryTable />
          </div>
          <QuantityPagesSection />
        </div>
      </div>
    </div>
  );
}

export default AdminCategoryMain;
