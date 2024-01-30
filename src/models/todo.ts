import mongoose from "mongoose";
const todoschema = new mongoose.Schema({
    todo: {
        type: 'string',
        required: true
    }
});
const todomodel = mongoose.model('Todo',todoschema)
export{todomodel as mymodel}