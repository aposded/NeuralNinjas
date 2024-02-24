import classNames from 'classnames'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'

export default function ButtonDanger({children,className,onClick,...props}) {
    return (
        <ButtonPrimary onClick={onClick} className={classNames('!bg-danger !text-light hover:!bg-danger-600 !shadow-danger/20 hover:!shadow-danger/20 disabled:cursor-default disabled:hover:shadow-md',className)}>
            {children}
        </ButtonPrimary>
    )
}
