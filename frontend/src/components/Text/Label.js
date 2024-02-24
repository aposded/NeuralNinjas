/** @format */

import classNames from 'classnames'
import React from 'react'

export default function Label({children,className,...props}) {
  return (
    <div
      className={classNames(
        'rounded-lg bg-dark text-light px-3 py-0.5 mt-1',
        className
      )}>
      {children}
    </div>
  )
}
