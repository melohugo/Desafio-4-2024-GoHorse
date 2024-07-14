import { Router } from "express";
import { createProprietario, findAllProprietario, findAllPontoProprietario, findAllMultasProprietario } from "../business/proprietario.business";
import createHttpError from "http-errors";
import { InfoProprietarioSchema, TodoCreateSchema, TodoIdSchema } from "../schemas/proprietario.schema";

const router = Router();


router.get("/proprietarios", async (req, res) => {
    // Validate
    // Execute
    const dados = await findAllProprietario();

    // Send 

    return res.status(200).json(dados);

});

router.get("/pontos/", async (req, res) => {
    // Validate

    // Execute
    const dados = await findAllPontoProprietario();

    // Send 

    return res.status(200).json(dados);

});

router.post("/criar", async (req, res) => {
    // Validate
    const info = InfoProprietarioSchema.parse(req.body);

    // Execute
    const dados = await createProprietario(info);

    // Send 

    return res.status(200).json(dados);

});

router.get("/multas", async (req, res) => {
  // Validate

  // Execute
  const dados = await findAllMultasProprietario();

  // Send

  return res.status(200).json(dados);
});

/*
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
*/

export default router;
