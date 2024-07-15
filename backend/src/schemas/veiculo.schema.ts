import { z } from "zod";

// Schemas

export const InfoVeiculoSchema = z.object({
    placa: z.string().max(7),
    modelo: z.string().max(50), 
    marca: z.string().max(50),
    ano: z.coerce.date(),
    cor: z.string().max(30),
});

export const CpfDonoSchema = z.string().length(11);

// Types
export type InfoVeiculo = z.infer<typeof InfoVeiculoSchema>;
export type CpfDono = z.infer<typeof CpfDonoSchema>;
