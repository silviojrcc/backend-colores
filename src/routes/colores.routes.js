import { Router } from "express";
import { crearColor, obtenerColor, obtenerColores } from "../controllers/colores.controller";

const router = Router();

router.route('/colores').get(obtenerColores).post(crearColor);
router.route('/colores/:id').get(obtenerColor);

export default router;