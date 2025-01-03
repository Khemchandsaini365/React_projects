import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

// Example data with static license expiry dates
const data = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
    licenseExpiryDate: '2024-12-31', // Static expiry date (today)
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
    licenseExpiryDate: '2025-01-05', // Static expiry date (5 days from now)
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
    licenseExpiryDate: '2024-01-10', // Static expiry date (10 days from now)
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
    licenseExpiryDate: '2024-01-10', // Static expiry date (10 days from now)
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska',
    licenseExpiryDate: '2025-12-28', // Static expiry date (expired 3 days ago)
  },
];

const Example = () => {
  // Define columns (memoized or stable)
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName', // Access nested data with dot notation
        header: 'First Name',
        size: 150,
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
        size: 150,
      },
      {
        accessorKey: 'address', // Normal accessorKey
        header: 'Address',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
      },
      {
        accessorKey: 'licenseExpiryDate', // New field for license expiry date
        header: 'License Expiry Date',
        size: 200,
        Cell: ({ cell }) => {
          // Format the static date
          const date = new Date(cell.getValue());
          return date.toLocaleDateString();
        },
      },
      {
        accessorKey: 'licenseExpiryDate', // Status column based on the expiry date
        header: 'Status',
        size: 150,
        Cell: ({ row }) => {
          const expiryDate = new Date(row.original.licenseExpiryDate);
          const today = new Date();
          const diffTime = expiryDate - today;
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

          // Determine the status and badge color based on the expiry date
          let status = '';
          let badgeColor = '';

          // If the expiry date is today (same day)
          if (diffDays === 0) {
            status = 'Expired';
            badgeColor = 'red'; // Red for expired today
          } else if (diffDays < 0) {
            status = 'Expired';
            badgeColor = 'black'; // Blue for expired in past
          } else if (diffDays <= 7) {
            status = 'Expiring Soon';
            badgeColor = 'orange'; // Expiring soon (yellow)
          } else {
            status = 'Active';
            badgeColor = 'green'; // Active (green)
          }

          return (
            <span
              style={{
                padding: '5px 10px',
                backgroundColor: badgeColor,
                color: 'white',
                borderRadius: '12px',
              }}
            >
              {status}
            </span>
          );
        },
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, // Data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    getRowProps: (row) => {
      const expiryDate = new Date(row.original.licenseExpiryDate);
      const today = new Date();

      // If the expiry date is today (same day)
      if (expiryDate.toDateString() === today.toDateString()) {
        return {
          style: {
            backgroundColor: 'red', // Red for expired today
          },
        };
      }
      
      // If the license is expired
      if (expiryDate < today) {
        return {
          style: {
            backgroundColor: 'lightcoral', // Expired (red)
          },
        };
      }
      
      // If the license is expiring in 7 days or less
      if (expiryDate <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)) {
        return {
          style: {
            backgroundColor: 'yellow', // Expiring soon (yellow)
          },
        };
      }

      // If the license is valid (more than 7 days away)
      return {
        style: {
          backgroundColor: 'lightgreen', // Valid (green)
        },
      };
    },
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
