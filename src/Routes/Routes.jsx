import React from 'react';
import Blogs from '../Pages/Blogs/Blogs.jsx'
import Bookmarks from '../Pages/Bookmarks/Bookmarks.jsx'
import MainLayout from '../Layout/MainLayout.jsx'
import Home from '../Pages/Home/Home.jsx'
import { createBrowserRouter } from 'react-router-dom'
import SingleBlogPage from '../Pages/SingleBlogPage/SingleBlogPage.jsx'
import Content from '../Componant/Content/Content.jsx'
import Author from '../Componant/Author/Author.jsx'
export const router = createBrowserRouter(
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
        path: '/blogs/:id',
        element: <SingleBlogPage/>,
        loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
            {
                index: true,
                element: <Content/>,
                loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
               
               path: 'author',
                element: <Author/>,
                loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            },
        ]
       },
       {
        path: '/bookmarks',
        element: <Bookmarks/>,
        loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),

       },
        ]
      }
    ]
  )