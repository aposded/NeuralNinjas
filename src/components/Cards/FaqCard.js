import React,{useState} from 'react'
import Icon from '../Text/Icon'
import Subheading from '../Text/Subheading'
import Text from '../Text/Text'

export default function FaqCard({question,answer,first,...props}) {
    const [open,setOpen]=useState(false)

    const toggleOpen=() => {
        setOpen(open =>
            !open
        )
    }

    return (
        <div className={`w-full transition-all duration-1000 lg:w-192 border-primary mx-auto py-3`}>
            <div onClick={toggleOpen} className={`flex items-center justify-between cursor-pointer`}>
                <Subheading className={`${open? 'text-primary px-0':'px-0'}`}>{question}</Subheading>
                <Icon icon='plus' className={`transition-transform duration-300 text-2xl ${open? 'rotate-90':''}`} />
            </div>
            <div className={` transition-all duration-1000 w-3/4 py-4 pb-2 ${open? 'h-fit':'h-0 hidden'}`}>
                {answer}
            </div>
        </div>
    )
}
