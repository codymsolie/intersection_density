"use client"

import { ColumnDef } from "@tanstack/react-table"

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

export const columns: ColumnDef<Group>[] = [
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
      const join = row.getValue("join")
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
      const union = row.getValue("union")
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
      const neither = row.getValue("neither")
      if(neither == "yes") {
        return <div className="text-green-400">{neither}</div>
      }
      else {
        return <div className="text-red-400">{neither}</div>
      }
    },
  },
]
