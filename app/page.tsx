import { EKR_Data, ekr_columns, Eigenvalue, Reason } from "./groups/columns";
import { DataTable } from "./groups/data-table";
import TopBar from "./TopBar";
import { neon } from '@neondatabase/serverless';


const sql = neon(process.env.DATABASE_URL!);

async function getGroups(): Promise<EKR_Data[]> {
  const g = await sql`SELECT * from ekr_data`;
  // get results into proper type format (must go to unknown first as formality)
  const groups = g as unknown as EKR_Data[];
  return groups 
}

async function getEvalues(): Promise<Eigenvalue[]> {
  const e = await sql`SELECT * from eigenvalues`;
  // get results into proper type format (must go to unknown first as formality)
  const evalues = e as unknown as Eigenvalue[];
  return evalues 
}

async function getReasons(): Promise<Reason[]> {
  const r = await sql`SELECT * from reasons`;
  // get results into proper type format (must go to unknown first as formality)
  const reasons = r as unknown as Reason[];
  return reasons
}

async function Groups() {
  const groups = await getGroups()
  const ev = await getEvalues()
  const re = await getReasons()
  for (const group of groups) {
    const evalues = ev.filter(eigenvalue => eigenvalue.group_id == group.group_id)
    const reasons = re.filter(reason => reason.group_id == group.group_id)
    group.eigenvalues = evalues;
    group.reasons = reasons
  }
  return (
      <div className="container w-full h-full mx-auto p-6 min-w-lg">
        <DataTable columns={ekr_columns} data={groups} />
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
