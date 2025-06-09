import Link from "next/link";
import { EKR_Data, ekr_columns } from "./groups/columns"
import { DataTable } from "./groups/data-table"
import TopBar from "./TopBar"


async function getData(): Promise<EKR_Data[]> {
  // Fetch data from your API here.
  const mariadb=require("mariadb")
  const pool=mariadb.createPool({
    host: "localhost",
    user: "int_dens",
    password: "dbpass",
    database: "intersection_density",
    connectionLimit: 5,
  });

  const get_statement = "Select * from Groups";
  let conn = await pool.getConnection();
  const rows = await conn.query(get_statement);
  return rows;
}

export async function Groups() {
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
