/** @format */

import React from 'react'
import classNames from 'classnames'
import CardLinkWrapper from './CardLinkWrapper'

export default function Card({children,to,className,onClick,clickable=true,...props}) {
  return (
    <CardLinkWrapper to={to}>
      <div
        onClick={onClick}
        className={classNames(
          'flex flex-col p-3 h-full justify-start items-start border-0.5 border-dark-200/20 shadow-sm shadow-dark-400/10 m-1 rounded-lg  transition-colors bg-light',typeof onClick==='function'? 'cursor-pointer hover:bg-primary-100/20':'duration-500',
          className
        )}>
        {children}
      </div>
    </CardLinkWrapper>
  )
}
