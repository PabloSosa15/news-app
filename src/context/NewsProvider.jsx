import { useState, useEffect, createContext } from "react";
import axios from "axios";

const NewsContext = createContext()

const NewsProvider = ({ children }) => {
    const [category, setCategory] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [page, setPage] = useState(1)
    const [totalNews, setTotalNews] = useState(0)

    useEffect(() => {
        const consultAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url)
                        
            setNoticias(data?.articles);
            setTotalNews(data.totalResults);
            setPage(1)
        }
        consultAPI()
    }, [category])

    useEffect(() => {
        const consultAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us$page=${page}&category=${category}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url)
                        
            setNoticias(data?.articles);
            setTotalNews(data.totalResults);
        }
        consultAPI()
    }, [page])
    


    const handleChangeCategory = e => {
        setCategory(e.target.value)
        window.scrollTo(0, 0)
    }

    const handleChangePage = (e, value) => {
        setPage(value)
    }
    return (
        <NewsContext.Provider
            value={{
                category,
                handleChangeCategory,
                noticias,
                totalNews,
                handleChangePage,
                page
        }}>
            {children}
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext