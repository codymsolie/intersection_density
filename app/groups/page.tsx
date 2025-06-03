import { Group, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Group[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      degree: 23,
      gap_id: 47,
      join: "yes",
      union: "no",
      neither: "no",
    },
    {
      id: "2",
      degree: 23,
      gap_id: 48,
      join: "no",
      union: "yes",
      neither: "no",
    },
    {
      id: "3",
      degree: 23,
      gap_id: 49,
      join: "no",
      union: "no",
      neither: "yes",
    },
    // ...
  ]
}
// async because we await the database responce
export default async function Groups() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
