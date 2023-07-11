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

export const crearColor = async (req, res) => {
    try {
        const nuevoColor = new Color(req.body);
        await nuevoColor.save();
        res.status(201).json({
            message: 'El color se creó correctamente',
        });
    } catch (err) {
        res.status(400).json({
            message: 'Error al crear el color',
        });
    }
}

export const eliminarColor = async (req, res) => {
    try {
        await Color.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'El color se eliminó correctamente',
        });
    } catch (err) {
        res.status(400).json({
            message: 'No se pudo eliminar el color',
        });
    }
}