import { z } from "zod";

// Schemas

export const infoMultaSchema = z.object({
    valor: z.coerce.number(),
    pontos: z.number(),
    data: z.coerce.date(),
    tipoInfracao: z.string().max(50),
    placa: z.string().length(7)
});

export const placaSchema = z.string().length(7);

// Types
export type infoMulta = z.infer<typeof infoMultaSchema>;
export type placa = z.infer<typeof placaSchema>;
