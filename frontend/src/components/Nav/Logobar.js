/** @format */

import React from 'react'
import icon from '../../assets/EduLink.png'
import {Link} from 'react-router-dom'

export default function Logobar() {
  return (
    <nav className="flex justify-between w-full p-4 align-center bg-light">
      <div className="hidden w-1/6 max-w-sm my-auto md:block" style={{
        maxWidth: '200px'
      }}>
        <Link to='/'>
          <img src={icon} alt="logo" className="lg:p-3" />
        </Link>
      </div>
      <div className="w-1/5 my-auto md:hidden max-w-tiny" style={{
        maxWidth: '100px'
      }}>
        <Link to='/'>
          <img src={icon} alt="logo" />
        </Link>
      </div>
    </nav>
  )
}
