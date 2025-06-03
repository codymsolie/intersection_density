import Link from "next/link";
import { Group, columns } from "./groups/columns"
import { DataTable } from "./groups/data-table"
import TopBar from "./TopBar"

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
      id: "4",
      degree: 23,
      gap_id: 50,
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
    {
      id: "1",
      degree: 23,
      gap_id: 47,
      join: "yes",
      union: "no",
      neither: "no",
    },
    {
      id: "4",
      degree: 23,
      gap_id: 50,
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
    {
      id: "1",
      degree: 23,
      gap_id: 47,
      join: "yes",
      union: "no",
      neither: "no",
    },
    {
      id: "4",
      degree: 23,
      gap_id: 50,
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
    {
      id: "1",
      degree: 23,
      gap_id: 47,
      join: "yes",
      union: "no",
      neither: "no",
    },
    {
      id: "4",
      degree: 23,
      gap_id: 50,
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
    {
      id: "1",
      degree: 23,
      gap_id: 47,
      join: "yes",
      union: "no",
      neither: "no",
    },
    {
      id: "4",
      degree: 23,
      gap_id: 50,
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
    {
      id: "1",
      degree: 23,
      gap_id: 47,
      join: "yes",
      union: "no",
      neither: "no",
    },
    {
      id: "4",
      degree: 23,
      gap_id: 50,
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

export async function Groups() {
  const data = await getData()

  return (
    <div className="container w-full h-full mx-auto p-6 min-w-lg">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
export default function Home() {
  return (
    <div className="grid grid-rows-[40px_1fr_40px] items-center min-h-screen px-6 py-3">
      <TopBar />
      <main className="row-start-2 row-end-3 items-center justify-self-center">
        <Groups />
      </main>

      <footer className="row-start-3 row-end-4 items-center justify-self-start"></footer>
    </div>
  );
}
