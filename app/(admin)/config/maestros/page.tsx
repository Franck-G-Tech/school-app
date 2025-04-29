import { TablaMaestros } from "@/components/tabla-maestros";
import Link from "next/link";

export default function ConfigPage() {
  return (
    <div className="flex min-h-[calc(70vh)] flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Sistema de Maestros</h1>
      <br />
      <TablaMaestros/>
      <br />
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50">
        <Link href="/">Ir a inicio</Link>
      </button>
    </div>
  );
}
