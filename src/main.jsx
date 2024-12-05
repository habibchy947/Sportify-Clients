import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast';
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
  </StrictMode>,
)
