import React from 'react'
import classNames from 'classnames'

export default function InputHeading({className,onChange,...props}) {
    function handleChange(e) {
        e.preventDefault()
        props.setValue(e.target.value)
    }
    return (
        <input
            className={classNames(
                'inline-block px-2 py-1 bg-transparent focus:border rounded-md focus:outline-none focus:border-primary transition-all font-semibold text-lg shadow-none outline-none border-0',
                className
            )}
            {...props}
            onFocus={(e) => {e.target.select()}}
            {...(props.ref? {ref: props.ref}:{
                value: props.value,
                onChange: typeof onChange==='function'? onChange:handleChange
            })}></input>
    )
}
