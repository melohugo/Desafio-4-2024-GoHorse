import { Router } from "express";
import { list, createTodo, findTodoById, updateTodo, deleteTodo } from "../business/todo.business";
import createHttpError from "http-errors";
import { TodoCreateSchema, TodoIdSchema } from "../schemas/todo.schema";

const router = Router();

router.get("/", async (req, res) => {
  // Validate input
  const { userId } = req;

  if (userId === undefined) {
    throw new createHttpError.Unauthorized("Usuário não autenticado");
  }

  // Execute business logic
  const todos = await list(userId);

  // Send response
  return res.status(200).json(todos);
});

router.get("/:id", async (req, res) => {
  // Validate input
  const id = TodoIdSchema.parse(req.params.id);
  const { userId } = req;

  if (userId === undefined) {
    throw new createHttpError.Unauthorized("Usuário não autenticado");
  }

  // Execute business logic
  const todo = await findTodoById(id, userId);

  if (todo === null) {
    throw new createHttpError.NotFound("Todo not found");
  }

  // Send response
  return res.status(200).json(todo);
});

router.post("/", async (req, res) => {
  // Validate input
  const { title } = TodoCreateSchema.parse(req.body);
  const { userId } = req;

  if (userId === undefined) {
    throw new createHttpError.Unauthorized("Usuário não autenticado");
  }

  // Execute business logic
  const todo = await createTodo({ title }, userId);

  // Send response
  return res.status(201).json(todo);
});

router.put("/:id", async (req, res) => {
  // Validate input
  const id = TodoIdSchema.parse(req.params.id);
  const { title } = TodoCreateSchema.parse(req.body);
  const { userId } = req;

  if (userId === undefined) {
    throw new createHttpError.Unauthorized("Usuário não autenticado");
  }

  // Execute business logic
  const todo = await updateTodo(id, { title }, userId);

  if (todo === null) {
    throw new createHttpError.NotFound("Todo not found");
  }

  // Send response
  return res.status(200).json(todo);
});

router.delete("/:id", async (req, res) => {
  // Validate input
  const id = TodoIdSchema.parse(req.params.id);
  const { userId } = req;

  if (userId === undefined) {
    throw new createHttpError.Unauthorized("Usuário não autenticado");
  }

  // Execute business logic
  await deleteTodo(id, userId);

  // Send response
  return res.status(204).json();
});

export default router;
