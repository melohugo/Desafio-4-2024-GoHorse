import { Router } from "express";
import { createVeiculo, findAllVeiculos } from "../business/veiculo.business";
import createHttpError from "http-errors";
import { InfoVeiculoSchema, CpfDonoSchema } from "../schemas/veiculo.schema";

const router = Router();

router.post("/:cpf/cadastrar", async (req, res) => {
    // Validate
    const info = InfoVeiculoSchema.parse(req.body);
    const cpf = CpfDonoSchema.parse(req.params.cpf);

    // Execute
    const dados = await createVeiculo(info, cpf);

    // Send 
    return res.status(200).json(dados);
});

router.get("/:cpf", async (req, res) => {
    // Validate
    const cpf = CpfDonoSchema.parse(req.params.cpf);

    // Execute
    const dados = await findAllVeiculos(cpf);

    // Send 
    return res.status(200).json(dados);
});



export default router;
