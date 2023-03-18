import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectRoute = () => {
    const auth = localStorage.getItem('loggedIn')
  return auth? <Outlet/>: <Navigate to={'/login'} />
}

export default ProtectRoute
