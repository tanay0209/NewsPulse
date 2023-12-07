import React from 'react'
import { Link } from 'react-router-dom'


function NewsItem({ title, description, url, imageUrl, author }) {
  return (
    <div className='md:max-w-xs bg-white p-4 mx-3 my-2 rounded-md shadow-sm cursor-default flex flex-col justify-between'>
      <img
        src={
          imageUrl == null
            ? "https://ichef.bbci.co.uk/news/1024/branded_news/16C1C/production/_130021239_sunday_telegraph_alamy.jpg"
            : imageUrl
        }
        height={150}
        className="card-img-top"
        alt="..."
      />
      <div className='font-bold mt-1'>
        {title.length < 30 ? title : `${title}...`}
      </div>
      <div className='font-medium'>
        Author: {author}
      </div>
      <div>
        {description.length < 80 ? description : `${description}...`}
      </div>
      <div className="text-black cursor-pointer hover:text-white 
      w-full mt-2 hover:bg-red-400 bg-blue-200 
      p-2 text-center m-0 rounded-sm">
        <Link to={url} target='_blank'>Read More</Link>
      </div>

    </div>
  )
}

export default NewsItem
