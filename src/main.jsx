import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About, News } from './components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      path: '/',
      element: <News key='general' country="in" category="General" />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'business',
      element: <News key='Business' country="in" category="Business" />
    },
    {
      path: 'entertainment',
      element: <News key='entertainment' country="in" category="Entertainment" />
    },
    {
      path: 'health',
      element: <News key='health' country="in" category="Health" />
    },
    {
      path: 'science',
      element: <News key='science' country="in" category="Science" />
    },
    {
      path: 'sports',
      element: <News key='sports' country="in" category="Sports" />
    },
    {
      path: 'technology',
      element: <News key='technology' country="in" category="Technology" />
    },

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
