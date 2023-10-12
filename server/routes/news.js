import { Router } from "express";
import { getHeadlineNews, getSearchedNews } from "../controllers/news.js";

const router = new Router();

router.post('/category/:category', getHeadlineNews);
router.post('/search_result', getSearchedNews);

export default router;

