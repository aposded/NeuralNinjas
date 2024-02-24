/** @format */

import classNames from 'classnames'
import React from 'react'

export default function Text({children,onClick,className,...props}) {
  return <p onClick={onClick} className={classNames('text-dark p-1',className)} {...props}>{children}</p>
}