import classNames from 'classnames'
import React from 'react'
import Icon from '../components/Text/Icon'

export default function Loading({inline,className,...props}) {

    return (
        <div className={inline? classNames('w-full h-full flex flex-col',className):'w-full h-screen flex flex-col'}>
            <div className='flex w-full h-full'>
                <Icon className='m-auto text-3xl text-light lg:text-9xl animate-spin' icon='bounding-box-circles' />
            </div>
        </div>
    )
}
