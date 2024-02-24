/** @format */

import classNames from 'classnames'
import React from 'react'
import {Link} from 'react-router-dom'

export default function MenuLink({children,...props}) {
  if(props.to.indexOf('/')===0) {
    return (
      <Link
        to={props.to}
        className={classNames("font-medium underline transition-colors cursor-pointer text-primary hover:text-primary-800 text-md decoration-dotted",props.className)}>
        {children}
      </Link>
    )
  }
  return (
    <a
      href={props.to}
      className={classNames("font-medium underline transition-colors cursor-pointer text-primary hover:text-primary-800 text-md decoration-dotted",props.className)
      } >
      {children}
    </a>
  )
}
