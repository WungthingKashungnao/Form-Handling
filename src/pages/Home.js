import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()
  const userName = JSON.parse(localStorage.getItem('users'))
  const nameOfUser = userName.map(item=> item.uName)
  
  const handleLogout = ()=>{
    localStorage.removeItem('loggedIn')
    navigate('/login')
  } 

  return (
    <div className='container border border-success mx-auto mt-3'>
      <h1>This is home - {nameOfUser}</h1>
      <button type="button" className="btn btn-success" onClick={()=>handleLogout()}>Logout</button>
    </div>
  )
}

export default Home
