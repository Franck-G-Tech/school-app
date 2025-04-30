"use client";

import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { DialogEstudiante } from "@/app/components/dialog-estudiante";
import { DialogEliminarEstudiante } from "@/app/components/dialog-eliminar-estudiante";
import { useUser } from "@clerk/nextjs";

interface Estudiante {
  _id: Id<"estudiantes">;
  _creationTime: number;
  numeroMatricula: string;
  nombre: string;
  correo: string;
  carrera: string;
  grado: string;
  // ... otras propiedades
}

export default function DetalleEstudiante() {
  const { isSignedIn, user, isLoaded } = useUser();
  const { id } = useParams<{ id: string }>(); // Llamar a useParams incondicionalmente
  const estudianteData = useQuery(
    api.estudiantes.obtenerEstudiantePorId,
    { id: id as Id<"estudiantes"> }
  ); // Llamar a useQuery incondicionalmente 

  const estudiante = estudianteData as Estudiante | null | undefined;

  if (!isLoaded) {
    return <div>Cargando información del usuario...</div>;
  }

  if (isSignedIn && user) {
    return (
      <div className="flex min-h-[calc(90vh-5rem)] flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">Detalles del Estudiante</h1>
        <br />
        <div>
          {estudiante ? (
            <>
              <p>
                <strong>Matrícula:</strong> {estudiante.numeroMatricula}
              </p>
              <p>
                <strong>Nombre:</strong> {estudiante.nombre}
              </p>
              <p>
                <strong>Correo:</strong> {estudiante.correo}
              </p>
              <p>
                <strong>Carrera:</strong> {estudiante.carrera}
              </p>
              <p>
                <strong>Grado:</strong> {estudiante.grado}
              </p>

              <br />
              <div className="flex gap-10  justify-center">
                <DialogEliminarEstudiante id={estudiante._id} />
                <DialogEstudiante estudiante={estudiante} />
              </div>
            </>
          ) : (
            <p className="text-red-500">Estudiante no encontrado.</p>
          )}
        </div>
        <br />
        <button
          onClick={() => window.history.back()}
          className="mt-4 px-4 py-2 border rounded"
        >
          Volver
        </button>
      </div>
    );
  }

  // Renderizar algo diferente si el usuario no está autenticado
  return <p>Debes iniciar sesión para ver los detalles del estudiante.</p>;
}