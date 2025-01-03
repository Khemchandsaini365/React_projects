import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import apis from "./apidata";
// Example data
const data = apis;

const Example = () => {
  // Memoized columns configuration
  const columns = useMemo(
    () => [
      {
        accessorKey: "Master", // Access nested data with dot notation
        header: "Master",
        size: 150,
      },
      {
        accessorKey: "URL",
        header: "URL",
        size: 150,
      },
      {
        accessorKey: "Method", // Normal accessorKey
        header: "Method",
        size: 200,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, // data should be stable (useState, useMemo, or defined outside)
    enableRowNumbers: true,
    initialState:{density:"compact"},
    muiTableHeadCellProps: {
      sx: {
        bgcolor: '#a5d8dd', // Primary color
        color: 'black', // Text color for header
        fontWeight: 'bold', // Optional: bold header text
      }
    },
    enablePagination:false,
    enableBottomToolbar:false,
    enableClickToCopy: true,
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
