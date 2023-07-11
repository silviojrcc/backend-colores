import { Schema, model } from "mongoose";

const colorSchema = new Schema({
    nombre: {
       type: String,
       required: true,
       unique: true,
       minLength: 3,
       maxLength: 25 
    },
    codigo: {
        type: String,
        default: "#000"
    }
});

const Color = model("color", colorSchema);
export default Color;