import { type InfoProprietario, type NomePontos} from "../schemas/proprietario.schema";
import { prisma } from "../prisma";
import createHttpError from "http-errors";
import { infoMulta } from "../schemas/multa.schema";
import { CpfDono } from "../schemas/veiculo.schema";


export async function findAllProprietario(): Promise<InfoProprietario[]> {
    const todos = await prisma.proprietario.findMany({
        orderBy: {
            nome: "asc",
        },
        select: {
            nome: true,   
            cpf: true,   
            tipoCnh: true,   
            vencimentoCnh: true,   
        }
    });

    return todos;
}

export async function findAllPontoProprietario(): Promise<NomePontos[]> {
    const motoristas = await prisma.proprietario.findMany({
        include: {
            Veiculos: {
                include: {
                    Multas: true,
                },
            }
        },
    });

    const resultado = motoristas.map(motorista => {
        let totalPontos = 0;

        motorista.Veiculos.forEach(veiculo => {
            veiculo.Multas.forEach(multa => {
                totalPontos += multa.pontos.toNumber();
            });
        });

        return {
            nome: motorista.nome,
            pontos: totalPontos
        };
    });

    return resultado;
}

export async function createProprietario(info: InfoProprietario): Promise<InfoProprietario | null> {
  const todo = await prisma.proprietario.create({
    data: {
        nome: info.nome,
        cpf: info.cpf,
        tipoCnh: info.tipoCnh,
        vencimentoCnh: info.vencimentoCnh,
    },
    select: {
        nome: true,   
        cpf: true,   
        tipoCnh: true,   
        vencimentoCnh: true,   
    },
  });

  return todo;
}

export async function findAllMultasProprietario(cpf: CpfDono): Promise<any[]> {
  const multas = await prisma.veiculo.findMany({
      where: {
        cpf: cpf,
      },
      select: {
        Multas: {
            select: {
                valor: true,
                data: true,
                tipoInfracao: true,
                placa: true,
            },
        },
      },
  });

  return multas;
}

export async function editProprietario(info: InfoProprietario, cpf: CpfDono): Promise<InfoProprietario | null> {
    const dado = await prisma.proprietario.update({
        where: {
            cpf: cpf,
        },
        data: {
            nome: info.nome,
            cpf: info.cpf,
            tipoCnh: info.tipoCnh,
            vencimentoCnh: info.vencimentoCnh,
        },
    });

    return dado;
}
