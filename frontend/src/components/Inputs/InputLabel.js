/** @format */

import React from 'react'

export default function InputLabel({children,optional,...props}) {
  return (
    <label {...props} className="w-80 lg:w-128 text-dark-500 font-semibold block mb-1 ml-0.5">
      {children}
      {optional&&<span className='text-slate-600 text-xs font-light ml-2'>Optional</span>}
    </label>
  )
}
