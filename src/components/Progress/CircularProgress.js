import React from 'react'
import InputLabel from '../Inputs/InputLabel'
import classNames from 'classnames'

export default function CircularProgress({label,className,value,max,...props}) {
    return (
        <div className={classNames('p-1',className)}>
            {label&&<InputLabel>{label}</InputLabel>}
            <div className='relative text-xl font-bold'>
                <div className='p-2 transition-all rounded-full aspect-square' style={{background: `radial-gradient(closest-side, white 79%, transparent 80% 100%),conic-gradient(#0085fa ${value<=max? value/max*100:100}%, #d4d4d8 0)`}}></div>
                <div className='absolute -translate-x-1/2 -translate-y-1/2 text-primary top-1/2 left-1/2'>{value}</div>
            </div>
        </div>
    )
}
