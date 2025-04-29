import Link from "next/link";
export default function Home() {
  //style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '20px' }}
  return (
    <main className="container mx-auto py-10">
      <div >
      <h1 className="text-3xl font-bold mb-6">Sistema de Estudiantes</h1>
      <button><Link href={"/config/estudiantes"}>Sistema de Estudiantes</Link></button>
      <br />
      <br/>
      <h1 className="text-3xl font-bold mb-6">Sistema de Maestros</h1>
      <button><Link href={"/config/maestros"}>Sistema de Maestros</Link></button>
      </div>
    </main>
  );
}