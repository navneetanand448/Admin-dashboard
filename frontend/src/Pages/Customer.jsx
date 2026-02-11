import { useState, useCallback } from "react";
import AdminSidebar from "../Components/Adminsidebar";
import TableHOC from "../Components/TableHOC";
import { FaTrash } from "react-icons/fa";
const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";
const columns = [
  {
    header: "Avatar",
    accessorKey: "avatar",
    cell: ({ getValue }) => (
      <img style={{ borderRadius: "50%" }} src={getValue()} alt="User" />
    ),
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Gender",
    accessorKey: "gender",
  },
  {
    header: "Role",
    accessorKey: "role",
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: () => (
      <button>
        <FaTrash color="red" />
      </button>
    ),
  },
];
const arr = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img}
        alt="Shoes"
      />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: "delete",
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img2}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];
function Customer() {
  const [data] = useState(arr);
  const CustomerTable = useCallback(TableHOC("Customers"), []);

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>
        <CustomerTable
          data={data}
          columns={columns}
          containerClassName="dashboard-product-box"
        />
      </main>
    </div>
  );
}

export default Customer;
