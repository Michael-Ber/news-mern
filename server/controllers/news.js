import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const apiKey = '7c5bf92a51e04e629562b39598462ba4';

export const getHeadlineNews = async (req, res) => {
    console.log(req.params);
    try {
        const { country, category, pageSize, page } = req.body;
        const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
        const articles = await axios.get(URL);
        const articlesToClient = articles.data.articles.length !== 0 && articles.data.articles.filter(article => article.description !== "[Removed]").map(article => ({ ...article, id: uuidv4() }));
        return res.json({ message: "Send OK", articles: articlesToClient ? articlesToClient : [] });
    } catch (error) {
        res.json({ message: "Error while getting news", error })
    }
}

export const getSearchedNews = async (req, res) => {
    try {
        const { category, language } = req.body;
        const URL = `https://newsapi.org/v2/everything?q=${category}&language=${language}&apiKey=${apiKey}`;
        const articles = await axios.get(URL);
        const articlesToClient = articles.data.articles.length !== 0 && articles.data.articles.filter(article => article.description !== "[Removed]").map(article => ({ ...article, id: uuidv4() }));
        return res.json({ message: "Send OK", articles: articlesToClient });
    } catch (error) {
        res.json({ message: "Error while getting news" })
    }
} 