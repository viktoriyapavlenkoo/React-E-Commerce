import "./AdminProductTable .css";

function AdminProductTable() {
  const productData = [];

  productData.push({
    image:
      "/images/products/product-img-1.jpg",
    name: "Syltherinezz",
    articul: 1547,
    quantity: 20,
    category: "Dining",
    price: "1500",
    currency: "UAH",
    status: "Active",
  });
  productData.push({
    image: "/images/products/product-img-2.jpg",
    name: "Lolito",
    articul: 1882,
    quantity: 16,
    category: "Living",
    price: "2000",
    currency: "UAH",
    status: "Inactive",
  });
  productData.push({
    image: "/images/products/product-img-3.jpg",
    name: "Respira",
    articul: 1547,
    quantity: 35,
    category: "Bedroom",
    price: "1200",
    currency: "UAH",
    status: "Promotion",
  });
  productData.push({
    image: "/images/products/product-img-4.jpg",
    name: "Syltherine",
    articul: 2072,
    quantity: 10,
    category: "Dining",
    price: "1500",
    currency: "UAH",
    status: "Active",
  });
  productData.push({
    image: "/images/products/product-img-1.jpg",
    name: "Syltherinezz",
    articul: 1547,
    quantity: 20,
    category: "Dining",
    price: "1500",
    currency: "UAH",
    status: "Active",
  });
  productData.push({
    image: "/images/products/product-img-2.jpg",
    name: "Lolito",
    articul: 1882,
    quantity: 16,
    category: "Living",
    price: "2000",
    currency: "UAH",
    status: "Inactive",
  });
  productData.push({
    image: "/images/products/product-img-3.jpg",
    name: "Respira",
    articul: 1547,
    quantity: 35,
    category: "Bedroom",
    price: "1200",
    currency: "UAH",
    status: "Promotion",
  });
  productData.push({
    image: "/images/products/product-img-4.jpg",
    name: "Syltherine",
    articul: 2072,
    quantity: 10,
    category: "Dining",
    price: "1500",
    currency: "UAH",
    status: "Active",
  });
  productData.push({
    image: "/images/products/product-img-1.jpg",
    name: "Syltherinezz",
    articul: 1547,
    quantity: 20,
    category: "Dining",
    price: "1500",
    currency: "UAH",
    status: "Active",
  });
  productData.push({
    image: "/images/products/product-img-2.jpg",
    name: "Lolito",
    articul: 1882,
    quantity: 16,
    category: "Living",
    price: "2000",
    currency: "UAH",
    status: "Inactive",
  });
  productData.push({
    image: "/images/products/product-img-3.jpg",
    name: "Respira",
    articul: 1547,
    quantity: 35,
    category: "Bedroom",
    price: "1200",
    currency: "UAH",
    status: "Promotion",
  });
  productData.push({
    image: "/images/products/product-img-4.jpg",
    name: "Syltherine",
    articul: 2072,
    quantity: 10,
    category: "Dining",
    price: "1500",
    currency: "UAH",
    status: "Active",
  });
  productData.push({
    image: "/images/products/product-img-1.jpg",
    name: "Syltherinezz",
    articul: 1547,
    quantity: 20,
    category: "Dining",
    price: "1500",
    currency: "UAH",
    status: "Active",
  });
  productData.push({
    image: "/images/products/product-img-2.jpg",
    name: "Lolito",
    articul: 1882,
    quantity: 16,
    category: "Living",
    price: "2000",
    currency: "UAH",
    status: "Inactive",
  });
  productData.push({
    image: "/images/products/product-img-3.jpg",
    name: "Respira",
    articul: 1547,
    quantity: 35,
    category: "Bedroom",
    price: "1200",
    currency: "UAH",
    status: "Promotion",
  });
  productData.push({
    image: "/images/products/product-img-4.jpg",
    name: "Syltherine",
    articul: 2072,
    quantity: 10,
    category: "Dining",
    price: "1500",
    currency: "UAH",
    status: "Active",
  });
  return (
    <section className="section admin-product-table admin-table-block">
      <div className="container admin-product-table__container admin-table-block__container">
        <table className="table admin-table admin-product-table__table">
          <thead className="admin-table__thead">
            <tr className="admin-table__thead-row admin-table__row">
              <th className="admin-table__thead-cell admin-table__cell">
                Image
              </th>
              <th className="admin-table__thead-cell admin-table__cell">
                Name
              </th>
              <th className="admin-table__thead-cell admin-table__cell">
                Quantity
              </th>
              <th className="admin-table__thead-cell admin-table__cell">
                Category
              </th>
              <th className="admin-table__thead-cell admin-table__cell">
                Price
              </th>
              <th className="admin-table__thead-cell admin-table__cell">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="admin-table__tbody">
            {productData.map((product, index) => {
              return (
                <tr
                  key={index}
                  className="admin-table__tbody-row admin-table__row"
                >
                  <td className="admin-table__tbody-cell admin-table__cell cell__image">
                    <div className="cell-image__block">
                      <img src={product.image} alt="" />
                    </div>
                  </td>
                  <td className="admin-table__tbody-cell admin-table__cell cell__name-articul">
                    <p className="name-text">{product.name}</p>
                    <p className="artitul-text">{product.articul}</p>
                  </td>
                  <td className="admin-table__tbody-cell admin-table__cell cell__quantity">
                    {product.quantity}
                  </td>
                  <td className="admin-table__tbody-cell admin-table__cell cell__category">
                    {product.category}
                  </td>
                  <td className="admin-table__tbody-cell admin-table__cell cell__price">
                    {product.price} {product.currency}
                  </td>
                  <td className="admin-table__tbody-cell admin-table__cell cell__status">
                    {product.status}
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

export default AdminProductTable;
