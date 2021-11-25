import React from "react";
import { DataGrid } from "@mui/x-data-grid";

// const rows = [
//   { id: 1, col1: "Hello", col2: "World" },
//   { id: 2, col1: "DataGridPro", col2: "is Awesome" },
//   { id: 3, col1: "MUI", col2: "is Amazing" },
// ];

const columns = [
  { field: "date", headerName: "Date", flex: 1, minWidth: 150 },
  {
    field: "time",
    filterable: false,
    sortable: false,
    headerName: "Time",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "product",
    headerName: "product",
    sortable: false,
    flex: 1,
    minWidth: 150,
  },
  { field: "amount", headerName: "amount", flex: 1, minWidth: 150 },
  {
    field: "paidBy",
    headerName: "paidBy",
    sortable: false,
    flex: 1,
    minWidth: 150,
  },
  {
    field: "piadForBoth",
    headerName: "piadForBoth",
    sortable: false,
    flex: 1,
    minWidth: 150,
  },
  {
    field: "description",
    filterable: false,
    sortable: false,
    headerName: "description",
    flex: 1,
    minWidth: 150,
  },
];

//[
//   { field: "col1", headerName: "Column 1", flex: 1, minWidth: 150 },
//   { field: "col2", headerName: "Column 2", flex: 1, minWidth: 150 },
// ];

// const getColumnFromKeys = (singleRowData) => {
//   const arrData = [];

//   Object.keys(singleRowData).forEach(function (key) {
//     const singleCol = {
//       field: key,
//       headerName: key,
//       flex: 1,
//       minWidth: 150,
//     };

//     arrData.push(singleCol);
//   });
//   return arrData;
// };

const Table = (props) => {
  const rows = props.tableData;
  // const row1 = rows[0] ? rows[0] : {};
  // const columns = getColumnFromKeys(row1);
  // console.log(columns);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default Table;
