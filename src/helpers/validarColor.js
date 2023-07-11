import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarColor = [
    check('nombreColor')
        .notEmpty()
        .withMessage('El nombre del color es obligatorio')
        .isString()
        .withMessage('El nombre del color debe ser un string')
        .isLength({ min: 2, max: 25})
        .withMessage('El nombre del color debe contener entre 2 y 25 caracteres'),
    check('codigoColor')
        .isString()
        .withMessage('El codigo del color debe ser un string'),
    (req, res, next) => { resultadoValidacion(req, res, next) }
];

export default validarColor;