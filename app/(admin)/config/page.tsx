import { TablaEstudiantes } from "@/app/components/tabla-estudiantes";
import { TablaMaestros } from "@/app/components/tabla-maestros";
import Link from "next/link";

export default function ConfigPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 flex min-h-[5vh] flex-col items-center justify-center">Sistema de Estudiantes</h1>
      <br />
      <TablaEstudiantes />
      <br />
      <br />
      <h1 className="text-3xl font-bold mb-6 flex min-h-[5vh] flex-col items-center justify-center">Sistema de Maestros</h1>
      <br />
      <div className="">
      <TablaMaestros />
      </div>
      <br />
      <button className="mt-4 px-4 py-2 border rounded">
        <Link href="/">Ir a inicio</Link>
      </button>
    </div>
  );
}
