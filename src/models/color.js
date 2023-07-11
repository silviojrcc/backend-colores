import { Schema, model } from "mongoose";

const colorSchema = new Schema({
    nombreColor: {
       type: String,
       required: true,
       unique: true,
       minLength: 3,
       maxLength: 25 
    },
    codigoColor: {
        type: String,
        default: "#000"
    }
});

const Color = model("color", colorSchema);
export default Color;