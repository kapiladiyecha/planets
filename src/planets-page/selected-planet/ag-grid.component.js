import React from "react";
import { AgGridReact } from "ag-grid-react";

export default function RenderGrid() {
  const gridOptions = {
    columnDefs: [
      { headerName: "Make 2", field: "make" },
      { headerName: "Model 3", field: "model" },
      { headerName: "Price 4", field: "price" },
    ],
    rowData: [
      { make: "Suzuki", model: "Celica", price: 35000 },
      { make: "Apache", model: "Mondeo", price: 32000 },
      { make: "Bajaj", model: "Boxter", price: 72000 },
    ],
  };

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "500px",
        width: "600px",
      }}
    >
      <span>Hello...</span>

      <AgGridReact
        columnDefs={gridOptions.columnDefs}
        rowData={gridOptions.rowData}
      ></AgGridReact>
    </div>
  );
}
