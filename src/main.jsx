import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Blogs from './Pages/Blogs/Blogs.jsx'
import Bookmarks from './Pages/Bookmarks/Bookmarks.jsx'
import MainLayout from './Layout/MainLayout.jsx'
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout/>,
      children: [
     {
      path: '/',
      element: <Home/>,
     },
     {
      path: '/blogs',
      element: <Blogs/>,
      loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7'),
     },
     {
      path: '/bookmarks',
      element: <Bookmarks/>,
     },
      ]
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
