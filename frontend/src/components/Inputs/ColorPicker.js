import React from 'react'

export default function ColorPicker({value='#FAFAFA',onChange,...props}) {
    function handleChange(e) {
        e.preventDefault()
        props.setValue(e.target.value)
    }

    return (
        <input type="color" onChange={typeof onChange==='function'? onChange:handleChange} value={value} className="w-16 h-8 px-1 py-0.5 border rounded-md shadow-md bg-zinc-100"></input>
    )
}
