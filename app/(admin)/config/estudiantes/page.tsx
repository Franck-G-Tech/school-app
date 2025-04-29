import { TablaEstudiantes } from "@/components/tabla-estudiantes";
import Link from "next/link";

export default function ConfigPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Sistema de Estudiantes</h1>
      <TablaEstudiantes />
      <br />
      <button>
        <Link href="/">Ir a inicio</Link>
      </button>
    </div>
  );
}
