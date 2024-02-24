/** @format */

import classNames from 'classnames'
import React from 'react'
import InputLabel from './InputLabel'
import Text from '../Text/Text'

export default function Input({className='',label,containerClassName='',details,optional,onChange,detailsClassName='',...props}) {
  function handleChange(e) {
    e.preventDefault()
    props.setValue(e.target.value)
  }
  return (
    <div className={classNames("p-1",containerClassName)}>
      {label||optional? (
        <InputLabel optional={optional} htmlFor={props.name? props.name:null} >{label}</InputLabel>
      ):null}
      <input
        className={classNames(
          'w-80 lg:w-128 px-2 py-2 shadow-lg bg-light border border-slate-300 rounded-md focus:outline-none focus:shadow-outline focus:border-primary transition-all font-semibold text-lg',
          className
        )}
        {...props}
        value={props.value}
        onChange={typeof onChange==='function'? onChange:handleChange}></input>
      {details? (<Text className={classNames('text-sm mt-0.5 ml-0.5 w-80 lg:w-128',detailsClassName)}>{details}</Text>):null}
    </div>
  )
}
