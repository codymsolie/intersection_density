import { EKR_Data, ekr_columns } from "./groups/columns";
import { DataTable } from "./groups/data-table";
import TopBar from "./TopBar";
import { neon } from '@neondatabase/serverless';


async function getData(): Promise<EKR_Data[]> {
  // Fetch data from your API here.
  const sql = neon(process.env.DATABASE_URL!);
  const rows = await sql`SELECT * from ekr_data`;
  const data = rows as unknown as EKR_Data[];
  return data
}

async function Groups() {
  const data = await getData()
  return (
    <div className="container w-full h-full mx-auto p-6 min-w-lg">
      <DataTable columns={ekr_columns} data={data} />
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
