import axios from "axios";

const apiKey = '7c5bf92a51e04e629562b39598462ba4';

export const getHeadlineNews = async(req, res) => {

    try {
        const { country, category, pageSize } = req.body;
        const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;

        const articles = await axios.get(URL);
        return res.json({message: "Send OK", articles: articles.data.articles});
    } catch (error) {
        res.json({message: "Error while getting news"})
    }
} 

export const getSearchedNews = async(req, res) => {
    try {
        const { category, language } = req.body;
        const URL = `https://newsapi.org/v2/everything?q=${category}&language=${language}&apiKey=${apiKey}`;

        const articles = await axios.get(URL);
        return res.json({message: "Send OK", articles: articles.data.articles});
    } catch (error) {
        res.json({message: "Error while getting news"})
    }
} 