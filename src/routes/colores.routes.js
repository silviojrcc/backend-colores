import { Router } from "express";
import { crearColor, eliminarColor, obtenerColor, obtenerColores } from "../controllers/colores.controller";

const router = Router();

router.route('/colores').get(obtenerColores).post(crearColor);
router.route('/colores/:id').get(obtenerColor).delete(eliminarColor);

export default router;