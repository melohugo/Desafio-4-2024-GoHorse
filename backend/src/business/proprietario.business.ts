import { type InfoProprietario} from "../schemas/proprietario.schema";
import { prisma } from "../prisma";
import createHttpError from "http-errors";


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


/*
export async function list(userId: number): Promise<TodoItem[]> {
  const todos = await prisma.todo.findMany({
    where: {
      userId,
    },
    orderBy: {
      id: "asc",
    },
    select: {
      id: true,
      title: true,
    },
  });

  return todos;
}

export async function findTodoById(id: number, userId: number): Promise<TodoItem | null> {
  const todo = await prisma.todo.findFirst({
    where: {
      id,
      userId,
    },
    select: {
      id: true,
      title: true,
    },
  });

  if (todo === null) {
    throw new createHttpError.NotFound("Todo not found");
  }

  return todo;
}

export async function createTodo({ title }: TodoCreateDTO, userId: number): Promise<TodoItem | null> {
  const todo = await prisma.todo.create({
    data: {
      title,
      user: {
        connect: {
          id: userId,
        },
      },
    },
    select: {
      id: true,
      title: true,
    },
  });

  return todo;
}

export async function updateTodo(id: number, { title }: TodoCreateDTO, userId: number): Promise<TodoItem> {
  const todo = await prisma.todo.update({
    where: {
      id,
      userId,
    },
    data: {
      title,
    },
    select: {
      id: true,
      title: true,
    },
  });

  return todo;
}

export async function deleteTodo(id: number, userId: number): Promise<void> {
  await prisma.todo.delete({
    where: {
      id,
      userId,
    },
  });
} */