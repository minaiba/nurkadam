import React from 'react'
import './App.css'
import { myRouter } from './router'
import { RouterProvider } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <RouterProvider router={myRouter}/>
    </div>
  )
}
