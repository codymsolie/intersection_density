'use client';

import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "@/components/data-table-column-header"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Eigenvalue = {
  evalue_id: number
  group_id: number
  eigenvalue: bigint
  multiplicity: bigint 
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
  is_union: boolean
  is_join: boolean
  is_cmp: boolean
  is_pm_join: boolean
  is_cograph: boolean
  ekr: number
  is_abelian: boolean
  is_nilpotent: boolean
  is_primitive: boolean
  stab_desc: string
  eigenvalues?: Eigenvalue[]
}


export const ekr_columns: ColumnDef<EKR_Data>[] = [
  {
    id: "degree",
    accessorFn: row => `${row.degree?.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Degree" />
    ),
    filterFn: "equalsString",
    sortingFn: "alphanumeric",
  },
  {
    id: "gap_id",
    accessorFn: row => `${row.gap_id?.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gap ID" />
    ),
    filterFn: "equalsString",
    sortingFn: "alphanumeric",
  },
  {
    id: "size",
    accessorFn: row => `${row.size?.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order" />
    ),
    filterFn: "equalsString",
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
    id: "stabilizer_description",
    accessorFn: row => `${row.stab_desc}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Stabilizer Description" />
    ),
    enableSorting: false,
  },
  {
    id: "int_dens_hi",
    accessorFn: row => `${row.int_dens_hi?.toString()}`,
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
    accessorFn: row => `${row.int_dens_lo?.toString()}`,
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
    accessorFn: row => `${row.int_dens?.toString()}`,
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
    accessorFn: row => `${row.transitivity?.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transitivity" />
    ),
    filterFn: "equalsString",
    sortingFn: "alphanumeric",
  },
  {
    id: "min_trans",
    accessorFn: row => `${row.min_trans?.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Minimally Transitive" />
    ),
    cell: ({ row }) => {
      const min_trans = row.getValue("min_trans")
      if(min_trans == "true") {
        return <div className="text-green-500">true</div>
      }
      else {
        return <div className="text-red-500">false</div>
      }
    },
    enableSorting: false,
  },
  {
    id: "is_union",
    accessorFn: row => `${row.is_union?.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Union" />
    ),
    cell: ({ row }) => {
      const union = row.getValue("is_union")
      if(union == "true") {
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
    accessorFn: row => `${row.is_join?.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Join" />
    ),
    cell: ({ row }) => {
      const join = row.getValue("is_join")
      if(join == "true") {
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
    accessorFn: row => `${row.is_cmp?.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Complete Multipartite" />
    ),
    cell: ({ row }) => {
      const cmp = row.getValue("is_cmp")
      if(cmp == "true") {
        return <div className="text-green-500">true</div>
      }
      else {
        return <div className="text-red-500">false</div>
      }
    },
    enableSorting: false,
  },
  {
    id: "is_pm_join",
    accessorFn: row => `${row.is_pm_join?.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PM Join" />
    ),
    cell: ({ row }) => {
      const pm_join = row.getValue("is_pm_join")
      if(pm_join == "true") {
        return <div className="text-green-500">true</div>
      }
      else {
        return <div className="text-red-500">false</div>
      }
    },
    enableSorting: false,
  },
  {
    id: "is_cograph",
    accessorFn: row => `${row.is_cograph?.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cograph" />
    ),
    cell: ({ row }) => {
      const cograph = row.getValue("is_cograph")
      if(cograph == "true") {
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
    accessorFn: row => `${row.ekr?.toString()}`,
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
    filterFn: "equalsString",
    enableSorting: false,
  },
  {
    id: "is_abelian",
    accessorFn: row => `${row.is_abelian?.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Abelian" />
    ),
    cell: ({ row }) => {
      const abel = row.getValue("is_abelian")
      if(abel == "true") {
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
    accessorFn: row => `${row.is_nilpotent?.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nilpotent" />
    ),
    cell: ({ row }) => {
      const nilp = row.getValue("is_nilpotent")
      if(nilp == "true") {
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
    accessorFn: row => `${row.is_primitive?.toString()}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Primitive" />
    ),
    cell: ({ row }) => {
      const prim = row.getValue("is_primitive")
      if(prim == "true") {
        return <div className="text-green-500">true</div>
      }
      else {
        return <div className="text-red-500">false</div>
      }
    },
    enableSorting: false,
  },
  {
    id: "eigenvalues",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Eigenvalues" />
    ),
    cell: ({ row }) => {
      const eigenvalues = row.original.eigenvalues
      eigenvalues?.sort((a, b) => a.eigenvalue < b.eigenvalue ? 1 : a.eigenvalue > b.eigenvalue ? -1 : 0)
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">See Eigenvalues</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 max-h-80" sticky="always" align="center">
            <p className="mb-2 font-semibold">Transitive group {row.original.gap_id} of degree {row.original.degree}</p>
            <p className="mb-2">(eigenvalue, multiplicity)</p>
            <ScrollArea className="flex max-h-50 flex-col mb-2" type="always">
              <ul>
                {eigenvalues?.map(e => ( <li className="col-span-0" key={e?.evalue_id}>({e?.eigenvalue}, {e?.multiplicity})</li>))}
              </ul>
            </ScrollArea>
          </PopoverContent>
        </Popover>
      )
    },
    enableSorting: false,
  },
]
