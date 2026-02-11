import {useState,useCallback} from 'react'
import AdminSidebar from '../Components/Adminsidebar'
import TableHOC from '../Components/TableHOC';
import { Link } from "react-router-dom";
const columns = [
  {
    header: "User",
    accessorKey: "user",
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: "Discount",
    accessorKey: "discount",
  },
  {
    header: "Quantity",
    accessorKey: "quantity",
  },
   {
    header: "Status",
    accessorKey: "status",
    cell: ({ getValue }) => {
      const status = getValue();
      let color = "red";
      if (status === "Shipped") color = "green";
      if (status === "Delivered") color = "purple";

      return <span style={{ color }}>{status}</span>;
    }
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: ({ getValue }) => <Link to={getValue()}>Manage</Link>,
  },
];
const arr = [
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status:"Processing",
   action: "/admin/transaction/sajknaskd",
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
   status: "Shipped",
    quantity: 6,
   action: "/admin/transaction/sajknaskd",
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status:"Delievered",
    quantity: 6,
    action: "/admin/transaction/sajknaskd",
  },
];
function Transaction() {
  const [data]=useState(arr);
  const TransactionTable = useCallback(TableHOC("Transactions"), []);
  return (
    <div className="admin-container">
      <AdminSidebar/>
      <main> 
    <TransactionTable
      data={data}
       columns={columns}
          containerClassName="dashboard-product-box"
    />
      </main>
    </div>
  )
}

export default Transaction
