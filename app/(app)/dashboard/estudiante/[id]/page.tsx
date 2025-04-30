'use client';

import React from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useParams } from 'next/navigation';
import { Id } from '@/convex/_generated/dataModel';

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
  const { id } = useParams<{ id: string }>();
  const estudianteData = useQuery(
    api.estudiantes.obtenerEstudiantePorId,
    { id: id as Id<"estudiantes"> }
  );

  const estudiante = estudianteData as Estudiante | null | undefined;

  return (
    <div className="flex min-h-[calc(70vh-5rem)] flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Detalles del Estudiante</h1>
      <div>
        {estudiante ? (
          <>
            <p><strong>Matrícula:</strong> {estudiante.numeroMatricula}</p>
            <p><strong>Nombre:</strong> {estudiante.nombre}</p>
            <p><strong>Correo:</strong> {estudiante.correo}</p>
            <p><strong>Carrera:</strong> {estudiante.carrera}</p>
            <p><strong>Grado:</strong> {estudiante.grado}</p>
          </>
        ) : (
          <p className="text-red-500">Estudiante no encontrado.</p>
        )}
      </div>
      <button onClick={() => window.history.back()} className="mt-4 px-4 py-2 border rounded">Volver</button>
    </div>
  );
}