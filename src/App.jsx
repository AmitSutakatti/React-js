import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Pastes from './components/Paste'
import Viewpastes from './components/Viewpaste'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
const router=createBrowserRouter(
  [
    {
        path:"/",
        element:
        <div>
            <Navbar/>
            <Homepage/>
        </div>
    },
    {
      path:"/pastes",
      element:
      <div>
          <Navbar/>
          <Pastes/>
      </div>
    },
    {
path:"/pastes/:id",
element:
<div>
          <Navbar/>
          <Viewpastes/>
</div>
    }
  ]
)


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>

      
    </>
  )
}

export default App
