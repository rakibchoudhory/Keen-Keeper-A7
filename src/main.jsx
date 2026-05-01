import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './routes/Router'
import DatasProvider from './Component/Context/DatasProvider'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <DatasProvider>

    <RouterProvider router={router}/>
    <ToastContainer />
  </DatasProvider>
  </StrictMode>,
)
