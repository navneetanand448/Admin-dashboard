import TableHOC from "./TableHOC"
const columns=[
  {
    header:"Id",
    accessorKey:"id",
},
{
  header:"Quantity",
  accessorKey:"quantity",
},
{
  header:"Discount",
  accessorKey:"discount",
},
{
  header:"Amount",
  accessorKey:"amount",
},
{
  header:"Status",
  accessorKey:"status",
}
]
const TransactionTable = TableHOC("Top Transaction");
function Table({data=[]}){
  return (
   <TransactionTable
      columns={columns}
      data={data}
      containerClassName="transaction-box"
    />
  )
}

export default Table
