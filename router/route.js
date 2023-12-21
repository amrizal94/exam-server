import { Router } from "express";
const router = Router();

/** import controlles */
import * as controller from "../controllers/controller.js"

/** Question Router */
router.route('/questions')
    .get(controller.getQuestion)        /** GET Request */
    .post(controller.insertQuestion)    /** POST Request */
    .delete(controller.dropQuestion)    /** DELETE Request */

router.route('/result')
    .get(controller.getResult)
    .post(controller.storeResult)
    .delete(controller.dropResult)

export default router;
