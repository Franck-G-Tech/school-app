
import { TablaMaestros } from "@/components/tabla-maestros";
import Link from "next/link";

export default function ConfigPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Sistema de Maestros</h1><br />
      <TablaMaestros />
<br />
      <button><Link href="/">Ir a inicio</Link></button>
      
    </div>
  );
}
