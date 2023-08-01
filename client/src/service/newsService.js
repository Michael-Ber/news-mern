export const newsService = () => {
    // const apiKey = '7c5bf92a51e04e629562b39598462ba4';

    // const apiUrlHeadlines = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;
    // const apiUrlEverything = `https://newsapi.org/v2/everything?q=${category}&language=${language}&apiKey=${apiKey}`;
    const apiUrlHeadlines = `http://localhost:3005/`;
    const apiUrlEverything = `http://localhost:3005/search_result`;

    return {
        apiUrlHeadlines,
        apiUrlEverything
    }
}
