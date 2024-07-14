import { type InfoVeiculo, type CpfDono} from "../schemas/veiculo.schema";
import { prisma } from "../prisma";


export async function createVeiculo(info: InfoVeiculo, cpf: CpfDono): Promise<InfoVeiculo | null> {
  const todo = await prisma.veiculo.create({
    data: {
        placa: info.placa,
        modelo: info.modelo,
        marca: info.marca,
        ano: info.ano,
        cor: info.cor,
        cpf: cpf,
    },
  });

  return todo;
}

export async function findAllVeiculos(cpf: CpfDono): Promise<InfoVeiculo[]> {
    const todo = await prisma.veiculo.findMany({
        where: {
            cpf: cpf,
        },
        orderBy: {
            ano: "asc",            
        },
        select: {
            placa: true,
            marca: true,
            modelo: true,
            ano: true,
            cor: true,
        },
    });

  return todo;
}
