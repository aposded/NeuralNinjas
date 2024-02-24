/** @format */

import classNames from 'classnames'
import React from 'react'

export default function Subheading({children,className,...props}) {
  return (
    <h1
      className={classNames(
        'text-dark text-lg lg:text-xl font-semibold p-1',className
      )} {...props}>
      {children}
    </h1>
  )
}
