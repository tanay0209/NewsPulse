import React, { useEffect, useState } from "react";
import NewsContext from "./NewsContext";


const NewsContextProvider = ({ children }) => {
    const apiKey = import.meta.env.VITE_API_KEY
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)

    const fetchNews = async ({ category, country }) => {
        setLoading(true)
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&sortBy=publishedAt&apiKey=${apiKey}&page=1&pageSize=12`
        const data = await fetch(url)
        let parsedData = await data.json()
        setTotalResults(parsedData.totalResults)
        setNews(parsedData.articles)
        setLoading(false)
    }

    const fetchMoreNews = async ({ category, country, pageNumber }) => {
        setLoading(true)
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&sortBy=publishedAt&apiKey=${apiKey}&page=${pageNumber}&pageSize=12`
        console.log(url);
        const data = await fetch(url)
        let parsedData = await data.json()
        setTotalResults(parsedData.totalResults)
        setNews(parsedData.articles)
        setLoading(false)
    }


    return (
        <NewsContext.Provider value={{ news, fetchNews, loading, fetchMoreNews, totalResults }}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsContextProvider