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
    //select: {
       // placa: info.placa  
    //},
  });

  return todo;
}

