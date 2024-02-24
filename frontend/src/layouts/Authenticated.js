/** @format */

import React,{useContext,useEffect} from 'react'
import {Outlet,useNavigate} from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import Loading from '../pages/Loading'

export default function Authenticated({children,...props}) {
  let navigate=useNavigate()
  const [user,connect,connected,connecting]=useContext(UserContext)


  useEffect(() => {
    if(!user&&!connecting) {
      navigate('/')
    }
  },[user,connecting,navigate])

  if(connecting) {
    return <Loading />
  }

  return (
    <div className="w-full h-screen p-0 m-0 mx-auto overflow-hidden font-enwrite max-w-7xl">
      <Outlet />
    </div>
  )
}
