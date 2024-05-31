import "./AdminCategoryTable.css";

function AdminCategoryTable() {
  const categoryData = [];

  categoryData.push({ name: "Dining", content: 20, status: "Active" });
  categoryData.push({ name: "Living", content: 30, status: "Inactive" });
  categoryData.push({ name: "Bedroom", content: 25, status: "Active" });
  
  return (
    <section className="section admin-category-table admin-table-block">
      <div className="container admin-category-table__container admin-table-block__container">
        <table className="table admin-table admin-category-table__table">
          <thead className="admin-table__thead">
            <tr className="admin-table__thead-row admin-table__row">
              <th className="admin-table__thead-cell admin-table__cell">
                Name
              </th>
              <th className="admin-table__thead-cell admin-table__cell">
                Content
              </th>
              <th className="admin-table__thead-cell admin-table__cell">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="admin-table__tbody">
            {categoryData.map((category, index) => {
              return (
                <tr
                  key={index}
                  className="admin-table__tbody-row admin-table__row"
                >
                  <td className="admin-table__tbody-cell admin-table__cell cell__name">
                    {category.name}
                  </td>
                  <td className="admin-table__tbody-cell admin-table__cell cell__quantity">
                    {category.content}
                  </td>
                  <td className="admin-table__tbody-cell admin-table__cell cell__status">
                    {category.status}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminCategoryTable;
