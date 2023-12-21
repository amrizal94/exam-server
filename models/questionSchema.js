import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const questionModel = new Schema({
    questions: { type: Array, default: [] },
    answers: { type: Array, default: [] },
    minim: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
})

export default mongoose.model('Question', questionModel)