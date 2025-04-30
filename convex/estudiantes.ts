import { mutation, query, } from "./_generated/server";
import { v } from "convex/values";
import { Id } from './_generated/dataModel';

// Crear un nuevo estudiante (mutation)
export const crearEstudiante = mutation({
  args: {
    numeroMatricula: v.string(),
    nombre: v.string(),
    correo: v.string(),
    carrera: v.string(),
    grado: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("estudiantes", args);
  },
});

// Obtener todos los estudiantes (query)
export const obtenerEstudiantes = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("estudiantes").collect();
  },
});

// Actualizar un estudiante (mutation)
export const actualizarEstudiante = mutation({
  args: {
    id: v.id("estudiantes"),
    numeroMatricula: v.string(),
    nombre: v.string(),
    correo: v.string(),
    carrera: v.string(),
    grado: v.string(),
  },
  handler: async (ctx, args) => {
    const { id, ...data } = args;
    await ctx.db.patch(id, data);
    return await ctx.db.get(id);
  },
});
export const obtenerEstudiantePorId = query({ // <--- Asegúrate de que sea 'query'
  args: { id: v.id("estudiantes") }, // <--- Asegúrate de que el argumento se llame 'id'
  handler: async (ctx, args) => {
    const estudiante = await ctx.db.get(args.id as Id<'estudiantes'>);
    return estudiante || null;
  },
});

// Eliminar un estudiante (mutation)
export const eliminarEstudiante = mutation({
  args: { id: v.id("estudiantes") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return true;
  },
});