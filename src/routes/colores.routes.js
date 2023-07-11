import { Router } from "express";
import { crearColor, eliminarColor, modificarColor, obtenerColor, obtenerColores } from "../controllers/colores.controller";
import validarColor from "../helpers/validarColor";

const router = Router();

router.route('/colores')
    .get(obtenerColores)
    .post(validarColor, crearColor);

router.route('/colores/:id')
    .get(obtenerColor)
    .delete(eliminarColor)
    .put(validarColor, modificarColor);

export default router;