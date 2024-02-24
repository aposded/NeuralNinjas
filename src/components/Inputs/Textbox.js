/** @format */

import classNames from 'classnames'
import React from 'react'
import InputLabel from './InputLabel'

export default function Textbox({className,label,containerClassName,optional,onChange,...props}) {
    function handleChange(e) {
        e.preventDefault()
        props.setValue(e.target.value)
    }
    return (
        <div className={classNames("p-1",containerClassName)} >
            {
                label? (
                    <InputLabel optional={optional} htmlFor={props.name? props.name:null}>{label}</InputLabel>
                ):null}
            <textarea
                className={classNames(
                    'w-80 lg:w-128 px-2 py-2 shadow-lg border bg-light border-slate-300 rounded-md focus:outline-none focus:shadow-outline focus:border-primary transition-all font-semibold text-lg resize-none',
                    className
                )}
                rows='3'
                {...props}
                value={props.value}
                onChange={typeof onChange==='function'? onChange:handleChange}></textarea>
        </div>
    )
}
