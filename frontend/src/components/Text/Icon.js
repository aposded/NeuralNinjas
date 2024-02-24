/** @format */

import React,{useState} from 'react'
import classNames from 'classnames'

export default function Icon({icon,className='',iconClassName='',label,onClick,labelPosition='left'}) {
  const [isHover,setIsHover]=useState(false)

  return (
    <div className={classNames((label&&isHover)&&'relative',className,'px-3')} onMouseOut={() => setIsHover(false)} onMouseOver={() => setIsHover(true)} onClick={onClick} >
      {(label&&isHover)&&<div className={classNames('absolute z-50 min-w-max text-base bg-dark opacity-75 text-white rounded-md px-2 py-1 font-thin tracking-wide',labelPosition==='left'? 'right-[130%]':'left-[120%]')}>{label}</div>}
      <i className={`bi bi-${icon} `+iconClassName}></i>
    </div>
  )
}
