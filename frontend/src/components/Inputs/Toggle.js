import React from 'react'

export default function Toggle({checked,setChecked,colorChange=true,className,...props}) {
    return (
        <div onClick={() => setChecked(checked => !checked)} className={`p-0.5 rounded-full shadow relative ${colorChange? (checked? 'bg-primary':'bg-slate-400'):'bg-primary'} w-16 h-8 cursor-pointer transition-colors`}>
            <div className={`rounded-full w-6 h-6 bg-light absolute top-1/2 -translate-y-1/2 transition-all shadow-md ${checked? 'translate-x-8':'translate-x-0.5'}`}></div>
        </div>
    )
}
