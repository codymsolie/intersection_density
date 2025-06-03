"use client"

import * as React from 'react'

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

import { Copy } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Label } from "@/components/ui/label"

import { Switch } from "@/components/ui/switch"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    }
  })

  return (
    <div className="">
      <div className="flex py-4 gap-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Filter</Button>
          </SheetTrigger>
          <SheetContent className="">
            <SheetHeader>
              <SheetTitle>Filter Groups</SheetTitle>
              <SheetDescription>
                Changes are applied immediately.
              </SheetDescription>
            </SheetHeader>
            <div>
              <div className="flex p-4 space-x-2 items-center">
                <Label htmlFor="degree">Degree</Label>
                <Select 
                  id="degree"
                  defaultValue={table.getColumn("degree")?.getFilterValue()}
                  onValueChange={(value) => {
                    if(value == "any") {
                      table.getColumn("degree")?.setFilterValue(null)
                    }
                    else {
                      table.getColumn("degree")?.setFilterValue(value)
                    }
                  }}
                >
                  <SelectTrigger className="w-[60px]" >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent >
                    <SelectGroup>
                      <SelectItem value="any">All</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="7">7</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="9">9</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="11">11</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                      <SelectItem value="13">13</SelectItem>
                      <SelectItem value="14">14</SelectItem>
                      <SelectItem value="15">15</SelectItem>
                      <SelectItem value="16">16</SelectItem>
                      <SelectItem value="17">17</SelectItem>
                      <SelectItem value="18">18</SelectItem>
                      <SelectItem value="19">19</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="21">21</SelectItem>
                      <SelectItem value="22">22</SelectItem>
                      <SelectItem value="23">23</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Label htmlFor="gap_id">Gap ID</Label>
                <Input 
                  id="gap_id" 
                  className="w-[100px]"
                  value={table.getColumn("gap_id").getFilterValue() ?? ""}
                  onChange={(event) => {
                    table.getColumn("gap_id").setFilterValue(event.target.value)
                  }}
                />
              </div>
              <div className="flex p-4 w-full gap-12 items-center">
                <div className="flex space-x-2">
                  <Label htmlFor="join">Join</Label>
                  <Switch
                    id="is_join"
                    value="yes"
                    defaultChecked = {(table.getColumn("join").getFilterValue() == "yes")}
                    onCheckedChange = {(checked) => {
                      if (checked) {
                        table.getColumn("join")?.setFilterValue("yes")
                      }
                      else {
                        table.getColumn("join")?.setFilterValue(null)
                      }
                    }}
                  />
                </div>
                <div className="flex space-x-2">
                  <Label htmlFor="is_union">Union</Label>
                  <Switch
                    id="is_union"
                    value="yes"
                    defaultChecked = {(table.getColumn("union").getFilterValue() == "yes")}
                    onCheckedChange = {(checked) => {
                      if (checked) {
                        table.getColumn("union")?.setFilterValue("yes")
                      }
                      else {
                        table.getColumn("union")?.setFilterValue(null)
                      }
                    }}
                  />
                </div>
                <div className="flex space-x-2">
                  <Label htmlFor="is_neither">Neither</Label>
                  <Switch 
                    id="is_neither"
                    value="yes"
                    defaultChecked = {(table.getColumn("neither").getFilterValue() == "yes")}
                    onCheckedChange = {(checked) => {
                      if (checked) {
                        table.getColumn("neither")?.setFilterValue("yes")
                      }
                      else {
                        table.getColumn("neither")?.setFilterValue(null)
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="">
          <Button
            variant="destructive"
            className="bg-red-400 hover:bg-red-500"
            onClick={() => {
              table.resetColumnFilters()
            }}
          > 
            Reset filters
          </Button>
        </div>
      </div>
      <div className="rounded-md border shadow-sm">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
