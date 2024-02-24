/** @format */

import React,{useContext,useEffect} from 'react'
import {Outlet,useNavigate} from 'react-router-dom'
import UserContext from '../contexts/UserContext'

export default function Guest({children,...props}) {
  let navigate=useNavigate()
  const [user,connect,connected,connecting]=useContext(UserContext)

  useEffect(() => {
    if(user&&!connecting) {
      navigate('/submit')
    }
  },[user,navigate,connecting])

  return (
    <div className="min-h-full px-4 pb-10 mx-auto font-enwrite max-w-7xl">
      <Outlet />
    </div>
  )
}
