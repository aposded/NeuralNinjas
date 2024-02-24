import React from 'react'
import InputLabel from '../Inputs/InputLabel'

export default function Progress({label,className,value,max,...props}) {
    return (
        <div className={className}>
            {label&&<InputLabel>{label}</InputLabel>}
            <div>
                <div className='relative w-full h-2 rounded-full bg-slate-200'>
                    <div className='absolute w-full h-full transition-all rounded-full bg-primary' style={{width: `${value<=max? value/max*100:100}%`}}></div>
                </div>
            </div>
        </div>
    )
}
