/** @format */

import React,{useState,useContext,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import ButtonPrimaryWithIcon from '../Buttons/ButtonPrimaryWithIcon'
import MenuLink from '../Links/MenuLink'
import icon from '../../assets/EduLink.png'
import {Link} from 'react-router-dom'
import Subheading from '../Text/Subheading'
import UserContext from '../../contexts/UserContext'
import InputHeading from '../Inputs/InputHeading'
import useDidMountEffect from '../../hooks/useDidMountEffect'

export default function Navbar() {
  const {projectId}=useParams()
  const navigate=useNavigate()
  const [user]=useContext(UserContext)
  const [photoUrl,setPhotoUrl]=useState('https://firebasestorage.googleapis.com/v0/b/flowsage-web.appspot.com/o/default-user.jpg?alt=media&token=e6566b13-e279-4a9f-9171-6232dafaa174')

  return (
    <nav className="flex items-center justify-between w-full p-4 border-b">
      <div className="items-center justify-start hidden w-full my-auto md:flex">
        <Link className='flex-1 max-w-2tiny' to='/'>
          <img src={icon} alt="logo" className="p-0 max-w-2tiny" />
        </Link>
      </div>
      <div className="w-1/5 my-auto md:hidden max-w-tiny">
        <Link to='/'>
          <img src={icon} alt="logo" />
        </Link>
      </div>
      <div className="justify-center hidden align-center md:block">
        <img alt='Profile' onClick={() => navigate('/dashboard/settings')} src={user.photoURL} className='object-cover p-2 rounded-full cursor-pointer max-w-3tiny aspect-square' />
      </div>
    </nav>
  )
}
