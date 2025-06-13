"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "@/components/data-table-column-header"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Group = {
  id: number
  degree: number
  gap_id: number
  join: "yes" | "no"
  union: "yes" | "no"
  neither: "yes" | "no"
}

export type EKR_Data = {
  group_id: number
  name: string
  degree: number
  gap_id: number
  size: bigint
  struc_desc: string
  int_dens_hi: number
  int_dens_lo: number
  int_dens: number
  transitivity: number
  min_trans: boolean
  is_join: boolean
  is_cmp: boolean
  ekr: number
  is_abelian: boolean
  is_nilpotent: boolean
  is_primitive: boolean
}

export const ekr_columns: ColumnDef<EKR_Data>[] = [
  {
    id: "degree",
    accessorFn: row => `${row.degree.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Degree" />
    ),
    filterFn: "equalsString",
    sortingFn: "alphanumeric",
  },
  {
    id: "gap_id",
    accessorFn: row => `${row.gap_id.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gap ID" />
    ),
    filterFn: "equalsString",
    sortingFn: "alphanumeric",
  },
  {
    id: "size",
    accessorFn: row => `${row.size.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order" />
    ),
    sortingFn: "alphanumeric",
  },
  {
    id: "structure_description",
    accessorFn: row => `${row.struc_desc}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Structure Description" />
    ),
    enableSorting: false,
  },
  {
    id: "int_dens_hi",
    accessorFn: row => `${row.int_dens_hi.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Upper Bound" />
    ),
    filterFn: (row, columnId, filterValue) => {
      const value : string = row.getValue(columnId)
      return (+filterValue >= +value);
    },
    sortingFn: "alphanumeric",
  },
  {
    id: "int_dens_lo",
    accessorFn: row => `${row.int_dens_lo.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Lower Bound" />
    ),
    filterFn: (row, columnId, filterValue) => {
      const value : string = row.getValue(columnId)
      return (+filterValue <= +value);
    },
    sortingFn: "alphanumeric",
  },
  {
    id: "int_dens",
    accessorFn: row => `${row.int_dens.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Intersection Density" />
    ),
    filterFn: (row, columnId, filterValue) => {
      const value : string = row.getValue(columnId)
      return (+filterValue == +value);
    },
    sortingFn: "alphanumeric",
  },
  {
    id: "transitivity",
    accessorFn: row => `${row.transitivity.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transitivity" />
    ),
    filterFn: "equalsString",
    sortingFn: "alphanumeric",
  },
  {
    id: "min_trans",
    accessorFn: row => `${row.min_trans.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Minimally Transitive" />
    ),
    cell: ({ row }) => {
      const min_trans = row.getValue("min_trans")
      if(min_trans) {
        return <div className="text-green-500">true</div>
      }
      else {
        return <div className="text-red-500">false</div>
      }
    },
    enableSorting: false,
  },
  {
    id: "is_join",
    accessorFn: row => `${row.is_join.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Join" />
    ),
    cell: ({ row }) => {
      const join = row.getValue("is_join")
      if(join) {
        return <div className="text-green-500">true</div>
      }
      else {
        return <div className="text-red-500">false</div>
      }
    },
    enableSorting: false,
  },
  {
    id: "is_cmp",
    accessorFn: row => `${row.is_cmp.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Complete Multipartite" />
    ),
    cell: ({ row }) => {
      const cmp = row.getValue("is_cmp")
      if(cmp) {
        return <div className="text-green-500">true</div>
      }
      else {
        return <div className="text-red-500">false</div>
      }
    },
    enableSorting: false,
  },
  {
    id: "ekr",
    accessorFn: row => `${row.ekr.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="EKR" />
    ),
    cell: ({ row }) => {
      const ekr = row.getValue("ekr")
      if(ekr == "1") {
        return <div className="text-green-500">true</div>
      }
      else if(ekr == "0") {
        return <div className="text-red-500">false</div>
      }
      else {
        return <div className="text-gray-500">none</div>
      }
    },
    enableSorting: false,
  },
  {
    id: "is_abelian",
    accessorFn: row => `${row.is_abelian.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Abelian" />
    ),
    cell: ({ row }) => {
      const abel = row.getValue("is_abelian")
      if(abel) {
        return <div className="text-green-500">true</div>
      }
      else {
        return <div className="text-red-500">false</div>
      }
    },
    enableSorting: false,
  },
  {
    id: "is_nilpotent",
    accessorFn: row => `${row.is_nilpotent.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nilpotent" />
    ),
    cell: ({ row }) => {
      const nilp = row.getValue("is_nilpotent")
      if(nilp) {
        return <div className="text-green-500">true</div>
      }
      else {
        return <div className="text-red-500">false</div>
      }
    },
    enableSorting: false,
  },
  {
    id: "is_primitive",
    accessorFn: row => `${row.is_primitive.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Primitive" />
    ),
    cell: ({ row }) => {
      const prim = row.getValue("is_primitive")
      if(prim == true) {
        return <div className="text-green-500">true</div>
      }
      else {
        return <div className="text-red-500">false</div>
      }
    },
    enableSorting: false,
  },
]

export const group_columns: ColumnDef<Group>[] = [
  {
    id: "degree",
    accessorFn: row => `${row.degree.toString()}`,
    header: () => <div className="font-semibold">Degree</div>,
  },
  {
    id: "gap_id",
    accessorFn: row => `${row.gap_id.toString()}`,
    header: () => <div className="font-semibold">Gap ID</div>,
  },
  {
    accessorKey: "join",
    header: () => <div className="font-semibold">Join</div>,
    cell: ({ row }) => {
      const join : string = row.getValue("join")
      if(join == "yes") {
        return <div className="text-green-400">{join}</div>
      }
      else {
        return <div className="text-red-400">{join}</div>
      }
    },
  },
  {
    accessorKey: "union",
    header: () => <div className="font-semibold">Union</div>,
    cell: ({ row }) => {
      const union : string = row.getValue("union")
      if(union == "yes") {
        return <div className="text-green-400">{union}</div>
      }
      else {
        return <div className="text-red-400">{union}</div>
      }
    },
  },
  {
    accessorKey: "neither",
    header: () => <div className="font-semibold">Neither</div>,
    cell: ({ row }) => {
      const neither : string = row.getValue("neither")
      if(neither == "yes") {
        return <div className="text-green-400">{neither}</div>
      }
      else {
        return <div className="text-red-400">{neither}</div>
      }
    },
  },
]
