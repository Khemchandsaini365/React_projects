import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

const Example = ({data}) => {
  // Memoize columns configuration
  const columns = useMemo(
    () => [
      {
        accessorKey: 'LiceRenewalDate', // Access nested data with dot notation
        header: 'LiceRenewalDate',
        size: 150,
        // Format date using a custom cell renderer
        Cell: ({ cell }) => {
          const date = new Date(cell.getValue()); // Convert string to Date
          return date.toLocaleDateString('en-IN'); // Format date as 'YYYY-MM-DD'
        },
      },
      {
        accessorKey: 'LiceExpiryDate',
        header: 'LiceExpiryDate',
        size: 150,
        // Format date using a custom cell renderer
        Cell: ({ cell }) => {
          const date = new Date(cell.getValue()); // Convert string to Date
          return date.toLocaleDateString('en-IN'); // Format date as 'YYYY-MM-DD'
        },
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, // Data must be memoized or stable
    enableTopToolbar: false,
    enableRowNumbers: true,
    enableBottomToolbar:false
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
