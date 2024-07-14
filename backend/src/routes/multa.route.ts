import { Router } from "express";
import { createMulta } from "../business/multa.business";
import createHttpError from "http-errors";
import {  placaSchema, infoMultaSchema } from "../schemas/multa.schema";

const router = Router();

router.post("/:placa", async (req, res) => {
    // Validate
    const placa = placaSchema.parse(req.params.placa);
    const info = infoMultaSchema.parse(req.body);

    // Execute
    const dado = createMulta(info, placa);
    
    // Send
    return res.status(200).json(dado);
});

export default router;
