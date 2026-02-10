import React from "react";
import { useTable } from "react-table";
function TableHOC() {
  return function HOC(columns, data, containerClassName, heading) {
    const table = useTable({ columns, data });
    return (
      <div className={containerClassName}>
        <h2 className="heading">{heading}</h2>
        <table className="table">
          
        </table>
      </div>
    )
  };
}

export default TableHOC;
