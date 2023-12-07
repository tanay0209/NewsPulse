import React, { useContext, useEffect } from 'react'
import NewsContext from '../contexts/NewsContext'
import { Pagination, Loader, NewsItem } from './index'


function News({ country, category }) {
  const { news, fetchNews, loading } = useContext(NewsContext)
  useEffect(() => {
    fetchNews({ category, country })
    document.title = `NewsPulse - ${category}`
  }, [category, country])
  return (
    <>
      <div className='w-full mx-auto max-w-screen flex flex-wrap justify-center  h-full'>
        {!loading ?
          (news.map((element, index) => (
            <NewsItem
              key={index}
              title={
                element.title
                  ? element.title.slice(0, 45)
                  : 'No title available...'
              }
              description={
                element.description
                  ? element.description.slice(0, 88)
                  : 'No description available...'
              }
              imageUrl={element.urlToImage}
              url={element.url}
              author={element.author ? element.author : 'No author available'}
              date={element.publishedAt}
            />
          )))
          : <Loader />}
      </div>
      <Pagination country={country} category={category} />
    </>
  )
}

export default News
