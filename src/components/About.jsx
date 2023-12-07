import React, { useEffect } from 'react'

function About() {
  useEffect(() => {
    document.title = 'NewsPulse - About'
  }, [])

  return (
    <>

      <div className='h-[84vh] p-4 max-w-4xl flex flex-col justify-center items-center mx-auto text-white text-lg leading-8 text-center'>
        <h1 className='text-red-400 text-5xl mb-4 font-semibold'>About </h1>
        Welcome to our cutting-edge news platform, crafted with React to deliver an unparalleled reading experience. Our application is designed to empower users with instant access to top headlines across a spectrum of categories, catering to diverse interests ranging from general news to technology, sports, science, business, entertainment, and health.Built on React's robust and interactive framework, our website ensures a seamless and dynamic browsing experience. The use of React's component-based architecture enhances the responsiveness of our platform, providing a user-friendly interface that adapts effortlessly to various devices. Stay informed, explore diverse perspectives, and enjoy the latest news in an engaging and visually appealing environment—all made possible by our React-powered news application.
      </div>
    </>
  )
}

export default About
