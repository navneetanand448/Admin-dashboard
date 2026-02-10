import { useState, useCallback } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const img = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
const img2 = "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

const columns = [
  {
    header: "Photo",
    accessorKey: "photo",
    // ✅ FIX 1: Render Image Component Here
    cell: ({ getValue }) => <img src={getValue()} alt="Product" />,
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Price",
    accessorKey: "price",
  },
  {
    header: "Stock",
    accessorKey: "stock",
  },
  {
    header: "Action",
    accessorKey: "action",
    // ✅ FIX 2: Render Link Component Here
    cell: ({ getValue }) => <Link to={getValue()}>Manage</Link>,
  },
];

const arr = [
  {
    photo: img, // Raw String URL
    name: "Puma Shoes Air Jordan 2023",
    price: 690,
    stock: 3,
    action: "/admin/product/sajknaskd", // Raw String URL
  },
  {
    photo: img2,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: "/admin/product/sdaskdnkasjdn",
  },
  {
    photo: img,
    name: "Puma Shoes Air Jordan 2023",
    price: 690,
    stock: 3,
    action: "/admin/product/sajknaskd",
  },
  {
    photo: img2,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: "/admin/product/sdaskdnkasjdn",
  },
];

function Products() {
  const [data] = useState(arr);

  const ProductTable = useCallback(TableHOC("Products"), []);

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>
        <ProductTable
          data={data}
          columns={columns}
          containerClassName="dashboard-product-box"
        />
        <Link to="/admin/product/new" className="create-product-btn">
          <FaPlus />
        </Link>
      </main>
    </div>
  );
}

export default Products;