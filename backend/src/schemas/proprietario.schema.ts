import { z } from "zod";

// Schemas

export const InfoProprietarioSchema = z.object({
    nome: z.string(),
    cpf: z.string(), 
    tipoCnh: z.string().max(1),
    vencimentoCnh: z.coerce.date(),
});

export const TodoItemSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().max(50),
});

export const TodoCreateSchema = z.object({
  title: z.string().max(50),
});

export type TodoCreateDTO = z.infer<typeof TodoCreateSchema>;

export const TodoIdSchema = z.coerce.number().int().positive();

// Types
export type InfoProprietario = z.infer<typeof InfoProprietarioSchema>;
export type TodoItem = z.infer<typeof TodoItemSchema>;
export type TodoCreate = z.infer<typeof TodoCreateSchema>;
export type TodoId = z.infer<typeof TodoIdSchema>;
