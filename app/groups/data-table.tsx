"use client"

import * as React from 'react'

import {
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { DataTablePagination } from "@/components/data-table-pagination"

import { Copy } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem, RadioGroupIndicator } from "@/components/ui/radio-group"

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


import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [sorting, setSorting] = React.useState<SortingState>([])

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    enableMultiSort: false,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    }
  })

  return (
    <div>
      <div className="flex py-2 gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Filter</Button>
          </SheetTrigger>
          <SheetContent className="">
            <SheetHeader>
              <SheetTitle>Filter Results</SheetTitle>
              <SheetDescription>
                Changes are applied immediately.
              </SheetDescription>
            </SheetHeader>
            <div>
              <div className="flex items-center pb-5 pl-4 pr-4 justify-between">
                <div className="flex items-center gap-4">
                  <div>Degree</div>
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
                    <SelectTrigger className="w-[80px]" >
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
                </div>
                <div className="flex items-center gap-4">
                  <div>Gap ID</div>
                  <Input 
                    id="gap_id" 
                    className="w-[80px]"
                    value={table.getColumn("gap_id").getFilterValue() ?? ""}
                    onChange={(event) => {
                      table.getColumn("gap_id").setFilterValue(event.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-4 p-4 items-center justify-between">
                  <div>Transitivity</div>
                  <Input 
                    id="transitivity" 
                    className="w-[80px]"
                    value={table.getColumn("transitivity").getFilterValue() ?? ""}
                    onChange={(event) => {
                      table.getColumn("transitivity").setFilterValue(event.target.value)
                    }}
                  />
              </div>
              <div className="gap-2 -space-y-6">
                <div className="flex p-4 items-center justify-between">
                    <div>Upper Bound</div>
                    <Input 
                      id="int_dens_hi" 
                      className="w-[80px]"
                      value={table.getColumn("int_dens_hi").getFilterValue() ?? ""}
                      onChange={(event) => {
                        table.getColumn("int_dens_hi").setFilterValue(event.target.value)
                      }}
                    />
                </div>
                <div className="flex p-4 items-center justify-between">
                    <div>Intersection Density</div>
                    <Input 
                      id="int_dens_hi" 
                      className="w-[80px]"
                      value={table.getColumn("int_dens").getFilterValue() ?? ""}
                      onChange={(event) => {
                        table.getColumn("int_dens").setFilterValue(event.target.value)
                      }}
                    />
                </div>
                <div className="flex p-4 items-center justify-between">
                    <div>Lower Bound</div>
                    <Input 
                      id="int_dens_hi" 
                      className="w-[80px]"
                      value={table.getColumn("int_dens_lo").getFilterValue() ?? ""}
                      onChange={(event) => {
                        table.getColumn("int_dens_lo").setFilterValue(event.target.value)
                      }}
                    />
                </div>
              </div>
              <div className="p-4 w-full gap-4 items-center">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div>Minimally Transitive</div>
                    <RadioGroup 
                      defaultValue={table.getColumn("min_trans").getFilterValue() ?? ""}
                      onValueChange={ (value) => {
                        if(value == "1") {
                          table.getColumn("min_trans").setFilterValue("1")
                        }
                        else if(value == "0") {
                          table.getColumn("min_trans").setFilterValue("0")
                        }
                        else {
                          table.getColumn("min_trans").setFilterValue(null)
                        }
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem 
                          className="shrink-0 w-4 h-4 bg-green-500 border-none rounded-[0.11rem]"
                          value="1" id="min_trans_true" >
                        </RadioGroupItem>
                        <RadioGroupItem 
                          className="shrink-0 w-4 h-4 bg-red-500 border-none rounded-[0.11rem]"
                          value="0" id="min_trans_false" />
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-white rounded-[0.11rem]"
                          value="" id="min_trans_none" />
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="flex justify-between">
                    <div className="">Join</div>
                    <RadioGroup 
                      defaultValue={table.getColumn("is_join").getFilterValue() ?? ""}
                      onValueChange={ (value) => {
                        if(value == "1") {
                          table.getColumn("is_join").setFilterValue("1")
                        }
                        else if(value == "0") {
                          table.getColumn("is_join").setFilterValue("0")
                        }
                        else {
                          table.getColumn("is_join").setFilterValue(null)
                        }
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-green-500 border-none rounded-[0.11rem]"
                          value="1" id="is_join_true" >
                        </RadioGroupItem>
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-red-500 border-none rounded-[0.11rem]"
                          value="0" id="is_join_false" />
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-white rounded-[0.11rem]"
                          value="" id="is_join_none" />
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="flex justify-between">
                    <div className="">Complete Multipartite</div>
                    <RadioGroup 
                      defaultValue={table.getColumn("is_cmp").getFilterValue() ?? ""}
                      onValueChange={ (value) => {
                        if(value == "1") {
                          table.getColumn("is_cmp").setFilterValue("1")
                        }
                        else if(value == "0") {
                          table.getColumn("is_cmp").setFilterValue("0")
                        }
                        else {
                          table.getColumn("is_cmp").setFilterValue(null)
                        }
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-green-500 border-none rounded-[0.11rem]"
                          value="1" id="is_cmp_true" >
                        </RadioGroupItem>
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-red-500 border-none rounded-[0.11rem]"
                          value="0" id="is_cmp_false" />
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-white rounded-[0.11rem]"
                          value="" id="is_cmp_none" />
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="flex justify-between">
                    <div className="">EKR</div>
                    <RadioGroup 
                      defaultValue={table.getColumn("ekr").getFilterValue() ?? ""}
                      onValueChange={ (value) => {
                        if(value == "1") {
                          table.getColumn("ekr").setFilterValue("1")
                        }
                        else if(value == "0") {
                          table.getColumn("ekr").setFilterValue("0")
                        }
                        else {
                          table.getColumn("ekr").setFilterValue(null)
                        }
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-green-500 border-none rounded-[0.11rem]"
                          value="1" id="ekr_true" >
                        </RadioGroupItem>
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-red-500 border-none rounded-[0.11rem]"
                          value="0" id="ekr_false" />
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-white rounded-[0.11rem]"
                          value="" id="ekr_none" />
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="flex justify-between">
                    <div className="">Abelian</div>
                    <RadioGroup 
                      defaultValue={table.getColumn("is_abelian").getFilterValue() ?? ""}
                      onValueChange={ (value) => {
                        if(value == "1") {
                          table.getColumn("is_abelian").setFilterValue("1")
                        }
                        else if(value == "0") {
                          table.getColumn("is_abelian").setFilterValue("0")
                        }
                        else {
                          table.getColumn("is_abelian").setFilterValue(null)
                        }
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-green-500 border-none rounded-[0.11rem]"
                          value="1" id="is_abelian_true" >
                        </RadioGroupItem>
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-red-500 border-none rounded-[0.11rem]"
                          value="0" id="is_abelian_false" />
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-white rounded-[0.11rem]"
                          value="" id="is_abelian_none" />
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="flex justify-between">
                    <div className="">Nilpotent</div>
                    <RadioGroup 
                      defaultValue={table.getColumn("is_nilpotent").getFilterValue() ?? ""}
                      onValueChange={ (value) => {
                        if(value == "1") {
                          table.getColumn("is_nilpotent").setFilterValue("1")
                        }
                        else if(value == "0") {
                          table.getColumn("is_nilpotent").setFilterValue("0")
                        }
                        else {
                          table.getColumn("is_nilpotent").setFilterValue(null)
                        }
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-green-500 border-none rounded-[0.11rem]"
                          value="1" id="is_nilpotent_true" >
                        </RadioGroupItem>
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-red-500 border-none rounded-[0.11rem]"
                          value="0" id="is_nilpotent_false" />
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-white rounded-[0.11rem]"
                          value="" id="is_nilpotent_none" />
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="flex justify-between">
                    <div className="">Primitive</div>
                    <RadioGroup 
                      defaultValue={table.getColumn("is_primitive").getFilterValue() ?? ""}
                      onValueChange={ (value) => {
                        if(value == "1") {
                          table.getColumn("is_primitive").setFilterValue("1")
                        }
                        else if(value == "0") {
                          table.getColumn("is_primitive").setFilterValue("0")
                        }
                        else {
                          table.getColumn("is_primitive").setFilterValue(null)
                        }
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-green-500 border-none rounded-[0.11rem]"
                          value="1" id="is_primitive_true" >
                        </RadioGroupItem>
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-red-500 border-none rounded-[0.11rem]"
                          value="0" id="is_primitive_false" />
                        <RadioGroupItem 
                          className=" shrink-0 w-4 h-4 bg-white rounded-[0.11rem]"
                          value="" id="is_primitive_none" />
                      </div>
                    </RadioGroup>
                  </div>
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
              table.resetSorting()
            }}
          > 
            Reset filters
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Hide/Show Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className=""
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
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
    <DataTablePagination table={table} />
    </div>
  )
}
