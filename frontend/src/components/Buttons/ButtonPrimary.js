/** @format */

import classNames from 'classnames'
import React from 'react'

export default function ButtonPrimary({children,disabled,...props}) {
  return (
    <button
      disabled={disabled}
      onClick={props.onClick}
      {...props}
      className={classNames(
        'w-80 lg:w-128 max-w-full py-3 m-0 bg-primary hover:bg-primary-500 rounded-lg text-light font-semibold shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/30 transition-all flex justify-center align-center disabled:cursor-default disabled:hover:shadow-md',
        props.className
      )}>
      {children}
    </button>
  )
}
