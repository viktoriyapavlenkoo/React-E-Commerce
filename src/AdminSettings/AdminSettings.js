import "./AdminSettings.css";
import AdminPageHero from "../AdminPageHero/AdminPageHero";


function AdminSettings() {

    return (
      <div className="admin-settings page-content">
        <AdminPageHero pageName="Settings" btnText="Save" />
      </div>
    );
}

export default AdminSettings;
