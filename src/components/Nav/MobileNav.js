/** @format */

import classNames from 'classnames'
import React from 'react'
import icon from '../../assets/icon_light.svg'

export default function MobileSideNav({className,handleClick,...props}) {
  const toggleMobileMenu=() => {
    if(typeof handleClick==='function') {
      handleClick((showMobileMenu) => !showMobileMenu)
    }
  }

  return (
    <nav
      className={classNames(
        'w-full flex justify-between align-center p-2 lg:hidden',
        className
      )}>
      <div className="block w-1/5 my-auto md:w-1/6 max-w-tiny">
        <img src={icon} alt="logo" />
      </div>
      <div className="justify-center p-1 my-auto mr-4 text-3xl border rounded cursor-pointer align-center border-slate-300">
        <i onClick={toggleMobileMenu} className="bi bi-list"></i>
      </div>
    </nav>
  )
}
