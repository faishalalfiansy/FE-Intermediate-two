import { useState } from 'react'
import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Login from '/src/pages/Login'
import Register from '/src/pages/Register'
import Beranda from '/src/pages/Beranda'

const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/beranda",
    element: <Beranda />,
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
