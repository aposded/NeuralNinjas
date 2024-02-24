import React from 'react'

export default function SelectOption({children,setOption,option,onClick,...props}) {

    return (
        <div onClick={onClick} className='w-full p-2 hover:bg-light-800 rounded-md font-medium'>
            {children}
        </div>
    )
}
