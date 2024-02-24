/** @format */

import React from 'react'
import {Link} from 'react-router-dom'
import classNames from 'classnames'

export default function SideNavMenuLink({
  children,
  to,
  icon,
  selected,
  onClick,
  ...props
}) {
  return (
    <Link
      className={classNames(
        'p-4 py-3 w-full hover:bg-slate-500/20 rounded-lg relative m-0.5',
        props.className,
        selected? 'bg-primary hover:bg-primary-600 text-light':''
      )}
      onClick={onClick}
      to={to}>
      {icon&&(<i className={`bi bi-${icon} text-xl my-auto mr-3 align-middle`}></i>)}
      <p className="inline-block h-full align-middle py-auto">
        {children}
      </p>
    </Link>
  )
}
