import React,{useEffect,useState} from 'react'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import ButtonSecondary from '../Buttons/ButtonSecondary'
import Card from '../Cards/Card'

export default function Popup({children,type,className,show,setShow,onConfirm,...props}) {
    const [colorScheme,setColorScheme]=useState('')

    useEffect(() => {
        switch(type) {
            case 'danger':
                setColorScheme('!bg-danger-200 !text-dark hover:!bg-danger-300 !shadow-danger/20 hover:!shadow-danger/20')
                break
            case 'warning':
                setColorScheme('!bg-warning-200 !text-dark hover:!bg-warning-300 !shadow-warning/20 hover:!shadow-warning/20;')
                break
            default:
                setColorScheme('')
                break
        }
    },[type])

    const toggleShow=() => {
        setShow(show => !show)
    }

    return (
        show&&
        <div className='fixed top-0 bottom-0 left-0 right-0 z-40 flex items-center justify-center pointer-events-auto bg-dark/30'>
            <Card className='m-auto !h-fit bg-light min-w-lg !mx-5 !box-border !px-5'>
                {children}
                <div className='flex items-center justify-end w-full pl-20 mt-10'>
                    {type!=='form'? <ButtonSecondary className={'w-16 lg:w-32'} onClick={toggleShow}>{typeof onConfirm==='function'? 'Cancel':'I understand'}</ButtonSecondary>:null}
                    {typeof onConfirm==='function'&&<ButtonPrimary onClick={onConfirm} className={colorScheme+' w-16 lg:w-32'}>{type==='form'? 'Submit':'Confirm'}</ButtonPrimary>}
                </div>
            </Card>
        </div>

    )
}
