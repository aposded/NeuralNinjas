/** @format */

import classNames from 'classnames'
import React from 'react'

export default function ButtonSecondary({children,...props}) {
  return (
    <button
      onClick={props.onClick}
      className={classNames(
        'w-80 lg:w-128 py-3 m-0 bg-gray-200 hover:bg-gray-300 rounded-lg text-dark font-semibold shadow-md hover:shadow-lg transition-all disabled:cursor-default disabled:hover:shadow-md',
        props.className
      )}>
      {children}
    </button>
  )
}
