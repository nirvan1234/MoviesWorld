import React, { useEffect } from 'react'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'




const Body = () => {
  
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browser",
      element: <Browse />
    }
  ])
  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  )
}

export default Body
