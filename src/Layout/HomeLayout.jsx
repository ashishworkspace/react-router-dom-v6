import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "../css/HomeLayout.css"

const HomeLayout = () => {
  return (
    <div>
      <div className='home-layout-links'>
        <NavLink to="dashboard">Dashboard</NavLink>
        <NavLink to="review">Review</NavLink>
        <NavLink to="colors">Colors</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default HomeLayout