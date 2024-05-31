import "./AdminProductMain.css";

import SearchFilterSection from "../SearchFilterSection/SearchFilterSection";
import AdminProductTable from "../AdminProductTable /AdminProductTable ";
import QuantityPagesSection from "../QuantityPagesSection/QuantityPagesSection";

function AdminProductMain() {
  return (
    <div className="admin-product-main admin-main">
      <div className="container admin-product-main__container admin-main__container">
        <div className="admin-product-main__content admin-main__content">
          <div className="search-table-content">
            <SearchFilterSection />
            <AdminProductTable />
          </div>
          <QuantityPagesSection />
        </div>
      </div>
    </div>
  );
}

export default AdminProductMain;
