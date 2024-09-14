import React from 'react'
import { Outlet } from 'react-router-dom';
import HotelNavbar from '../components/HotelNavbar'
function HomeHotelsPage() {
  return (
    <div>
      <HotelNavbar />
      <Outlet />
    </div>
  )
}

export default HomeHotelsPage