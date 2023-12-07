import React, { useState } from 'react'
import NavItems from './NavItems'

const menuItems = [
    {
        title: "Home",
        link: '/'
    }, {
        title: 'About',
        link: '/about'
    },
    {
        title: 'Business',
        link: '/business'
    },
    {
        title: 'Entertainment',
        link: '/entertainment'
    },
    {
        title: 'Health',
        link: '/health'
    },
    {
        title: 'Science',
        link: '/science'
    },
    {
        title: 'Sports',
        link: '/sports'
    },
    {
        title: 'Technology',
        link: '/technology'
    },
]

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className='flex items-center justify-between flex-wrap p-5 bg-slate-700  sticky top-0 shadow'>


            {/* Header Logo */}
            <div className='flex items-center text-xl flex-shrink-0 text-white mr-6 lg:mr-72'>
                NewsPulse
            </div>


            {/* Menu Button */}
            <div className='block lg:hidden'>
                <button onClick={() => setOpen(!open)}
                    className='flex items-center px-3 py-2 active:scale-50 transition-all duration-200 '
                >
                    <svg
                        className={`fill-white h-5 w-5 ${open ? "hidden" : "block"}`}
                        viewBox="0 00 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-white h-5 w-5 ${open ? "block" : "hidden"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>



            <div
                className={`w-full flex-grow lg:flex lg:items-center transition-all duration-500 lg:w-auto ${open ? "block" : "hidden"}`}
            >
                <div className="lg:flex lg:flex-grow lg:justify-around text-center">

                    {menuItems.map(item => {
                        return <NavItems title={item.title} link={item.link} key={item.title} />
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
