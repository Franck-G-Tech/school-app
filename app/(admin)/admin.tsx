
import { TablaEstudiantes } from "@/components/tabla-estudiantes";
import { TablaMaestros } from "@/components/tabla-maestros";

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '20px' }}>
      <h1 className="text-3xl font-bold mb-6">admin folder</h1>
     <button> <TablaEstudiantes /></button>
      <br />
      <br/>
      <h1 className="text-3xl font-bold mb-6">admin folder de Maestros</h1>
      <button><TablaMaestros /></button>
      </div>
    </main>
  );
}
