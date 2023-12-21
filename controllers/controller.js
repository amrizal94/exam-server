import Questions from "../models/questionSchema.js"
import Results from "../models/resultSchema.js"
import questions, { answers, minim } from "../database/data.js"

/** get all questions */
export const getQuestion = async (req, res) => {
    try {
        const q = await Questions.find();
        res.json(q);
    } catch (error) {
        res.json({ error });
    }
}

/** insert all questions */
export const insertQuestion = async (req, res) => {
    Questions.insertMany({ questions, answers, minim }).then((error, data) => {
        res.json({ msg: `questions saved successfully` });
    }).catch((error) => {
        res.json({ error });
    })
}

/** delete all questoions */
export const dropQuestion = async (req, res) => {
    try {
        await Questions.deleteMany();
        res.json({ msg: `questions deleted successfully...!` });
    } catch (error) {
        res.json({ error });
    }
}

/** get all result */
export const getResult = async (req, res) => {
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error });
    }
}

/** post all result */
export const storeResult = async (req, res) => {
    const { username, result, correct, minim, score, achived } = req.body;
    if (!username && !result) throw new Error('Data not provided');

    Results.create({ username, result, correct, minim, score, achived }).then((err, data) => {
        res.json({ msg: "result saved successfully...!" })
    }).catch((error) => {
        res.json({ error });
    })
}

/** delete all result */
export const dropResult = async (req, res) => {
    try {
        await Results.deleteMany();
        res.json({ msg: `result deleted successfully...!` });
    } catch (error) {
        res.json({ error });
    }
}