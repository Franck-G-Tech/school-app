
import { TablaEstudiantes } from "@/components/tabla-estudiantes";
import { TablaMaestros } from "@/components/tabla-maestros";
import Link from "next/link";

export default function ConfigPage() {
  return (
    <main className="container mx-auto py-10">
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '20px' }}>
      <h1 className="text-3xl font-bold mb-6">Sistema de Estudiantes</h1>
      <TablaEstudiantes />
      <br />
      <br/>
      <h1 className="text-3xl font-bold mb-6">Sistema de Maestros</h1>
      <TablaMaestros />

      <button><Link href="/">Ir a inicio</Link></button>
      </div>
    </main>
  );
}
