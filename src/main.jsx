import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider} from 'react-router-dom'
import { router } from './Routes/Routes'
import { Toaster} from 'react-hot-toast'

if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
     navigator.serviceWorker.register('/public/service-worker.js')
       .then((registration) => {
         console.log('Service Worker registered with scope:', registration.scope);
       })
       .catch((error) => {
         console.error('Service Worker registration failed:', error);
       });
   });
 }


createRoot(document.getElementById('root')).render(
   <>
   <RouterProvider router={router}/>
   <Toaster/>
   </>
)

