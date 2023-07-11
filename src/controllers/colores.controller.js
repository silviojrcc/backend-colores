import Color from "../models/color";

export const obtenerColores = async (req, res) => {
    try {
        const colores = await Color.find();
        res.status(200).json(colores);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } 
}

export const obtenerColor = async (req, res) => {
    try {
        const color = await Color.findById(req.params.id);
        res.status(200).json(color);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}