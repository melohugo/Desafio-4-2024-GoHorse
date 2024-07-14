import { z } from "zod";

// Schemas

export const infoMultaSchema = z.object({
    valor: z.coerce.number(),
    data: z.coerce.date(),
    tipoInfracao: z.string().max(50),
    placa: z.string().length(7)
});

export const infoMultaPontoSchema = z.object({
    valor: z.coerce.number(),
    pontos: z.coerce.number(),
    data: z.coerce.date(),
    tipoInfracao: z.string().max(50),
    placa: z.string().length(7)
});


export const placaSchema = z.string().length(7);

// Types
export type infoMulta = z.infer<typeof infoMultaSchema>;
export type infoMultaPonto = z.infer<typeof infoMultaPontoSchema>;
export type placa = z.infer<typeof placaSchema>;
