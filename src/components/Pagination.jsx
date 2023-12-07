import React, { useContext, useState } from 'react'
import NewsContext from '../contexts/NewsContext'


function Pagination({ country, category }) {
    const { totalResults, fetchMoreNews } = useContext(NewsContext)
    const numberOfPages = Math.ceil(totalResults / 12);
    const [pageNumber, setPageNumber] = useState(1);

    function generateButtons() {
        const buttons = []
        for (let i = 1; i <= numberOfPages; i++) {
            buttons.push(
                <button key={i}
                    className={
                        `text-black px-3 py-1 text-lg rounded-lg mr-2 hover:bg-red-400 hover:text-white transition-colors shadow 
                    ${pageNumber === i ? 'bg-red-400' : 'bg-blue-200'}
                    `
                    }

                    onClick={() => updateNews(i)}
                >
                    {i}</button>
            )
        }
        return buttons
    }

    function updateNews(i) {
        setPageNumber(i)
        fetchMoreNews({ country, category, pageNumber })
    }

    return (
        <div className=' text-center p-2'>
            {
                numberOfPages > 0 ? (
                    generateButtons()
                ) : null
            }
        </div>
    )
}


export default Pagination
