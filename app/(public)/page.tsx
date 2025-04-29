import Link from "next/link";
export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '20px' }}>
      <h1 className="text-3xl font-bold mb-6">Sistema de Estudiantes</h1>
      <button><Link href={"/config/"}>Sistema de Estudiantes</Link></button>
      <br />
      <br/>
      <h1 className="text-3xl font-bold mb-6">Sistema de Maestros</h1>
      <button><Link href={"/config/"}>Sistema de Maestros</Link></button>
      </div>
    </main>
  );
}