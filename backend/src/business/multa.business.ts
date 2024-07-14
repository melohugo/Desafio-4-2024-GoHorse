import { type infoMulta, type placa} from "../schemas/multa.schema";
import { Prisma } from '@prisma/client';
import { prisma } from "../prisma";


export async function createMulta(info : infoMulta, placa : placa): Promise<any | null> {
    const dado = prisma.multa.create({
        data: {
            valor:  info.valor,
            pontos: info.pontos,
            data: info.data,
            tipoInfracao: info.tipoInfracao,
            placa: placa,
        },
    });

    return dado;
}
