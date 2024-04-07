import React from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { flexRender, getCoreRowModel, useReactTable, getSortedRowModel } from "@tanstack/react-table";

import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

type ReactTableProps<D extends unknown> = {
  data: D[];
  columns: ColumnDef<D, string>[];
  headerProps?: {};
  bodyProps?: {};
  rowDataProps?: {};
  variant?: string;
  size?: string;
  [x: string]: any;
};

const ReactTable = <D extends unknown>({
  columns,
  data = [],
  headerProps = {},
  bodyProps = {},
  rowDataProps = {},
  variant = "",
  size = "",
  ...restConfig
}: ReactTableProps<D>) => {
  const tableConfig = {
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...restConfig,
  };

  const table = useReactTable(tableConfig);

  // Render the UI for your table
  return (
    <Table variant={variant} size={size}>
      <Thead {...headerProps}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map((header: any) => (
              <Th {...header.column.columnDef?.meta} key={header.id}>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...bodyProps}>
        {table.getRowModel().rows.map((row) => (
          <Tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export { ReactTable };
