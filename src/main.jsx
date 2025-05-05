import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Route.jsx'
import  EventProvider  from './Contexts/Events/EventProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventProvider>
      <RouterProvider router={router}></RouterProvider>
    </EventProvider>
  </StrictMode>,
)
