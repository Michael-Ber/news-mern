import { Router } from "express";
import { getTest } from "../controllers/test.js";

const router = new Router();

router.post('/category/:category', getTest);

export default router;