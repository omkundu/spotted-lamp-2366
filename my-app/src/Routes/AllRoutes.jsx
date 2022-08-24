import React from 'react'
import { Routes, Route } from "react-router-dom"
import Halloween from '../Components/Halloween'
import Navbar from '../Components/Navbar'
import RestaurantMenu from '../Components/RestaurantMenu'
import GodadyMainPage from '../SecondPage/GodadyMainPage'
import Menu from '../Components/Menu'
function AllRoutes() {
  return (
    <div>
         <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/GodadyMainPage" element={<GodadyMainPage/>} />
        <Route path="/Halloween" element={<Halloween/>} />
        <Route path="/RestaurantMenu" element={<RestaurantMenu/>} />
        <Route path="/Menu" element={<Menu/>} />
      </Routes>
      
    </div>
  )
}

export default AllRoutes
