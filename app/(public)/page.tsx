import Link from "next/link";
export default function Home() {
  //style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '20px' }}
  return (
    <main className="container mx-auto py-10">
      <div >
      <h1 className="text-3xl font-bold mb-6">Sistema de Estudiantes</h1>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9"><Link href={"/config/estudiantes"}>Sistema de Estudiantes</Link></button>
      <br />
      <br/>
      <h1 className="text-3xl font-bold mb-6">Sistema de Maestros</h1>
      <button><Link href={"/config/maestros"}>Sistema de Maestros</Link></button>
      </div>
    </main>
  );
}