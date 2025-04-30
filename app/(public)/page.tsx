import Link from "next/link";
export default function Home() {
  //style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '20px' }}
  return (
    <main className="container mx-auto py-10">
      <div className="flex min-h-[calc(70vh-5rem)] flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">Sistema de Estudiantes</h1>
        <button className="mt-4 px-4 py-2 border rounded">
          <Link href={"/config/estudiantes"}>Sistema de Estudiantes</Link>
        </button>
        <br />
        <br />
        <h1 className="text-3xl font-bold mb-6">Sistema de Maestros</h1>
        <button className="mt-4 px-4 py-2 border rounded">
          <Link href={"/config/maestros"}>Sistema de Maestros</Link>
        </button>
      </div>
    </main>
  );
}
