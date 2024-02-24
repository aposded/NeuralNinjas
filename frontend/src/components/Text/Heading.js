/** @format */

import React from 'react'
import classnames from 'classnames'

export default function Heading({children,className='',...props}) {
  return (
    <h1
      className={classnames(
        'text-dark !text-2xl lg:!text-4xl !font-semibold p-1',
        className
      )} {...props}>
      {children}
    </h1>
  )
}
