/** @format */

import classNames from 'classnames'
import React from 'react'
import {Link} from 'react-router-dom'

export default function MenuLink({children,to,...props}) {
  if(to?.indexOf('/')>=0&&to?.indexOf('http')<0) {
    return (
      <li>
        <Link
          to={to}
          className={classNames(
            'text-dark hover:text-primary transition-colors text-lg font-medium cursor-pointer mr-4',
            props.className
          )}>
          {children}
        </Link>
      </li>
    )
  }
  return (
    <li>
      <a
        href={to}
        className={classNames(
          'text-dark hover:text-primary transition-colors text-lg font-medium cursor-pointer mr-4',
          props.className
        )}>{children}
      </a>
    </li>
  )
}
