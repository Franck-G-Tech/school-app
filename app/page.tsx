
import { TablaEstudiantes } from "@/components/tabla-estudiantes";
import { TablaMaestros } from "@/components/tabla-maestros";

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Sistema de Estudiantes</h1>
      <TablaEstudiantes />
      <br/>
      <h1 className="text-3xl font-bold mb-6">Sistema de Maestros</h1>
      <TablaMaestros />
    </main>
  );
}
