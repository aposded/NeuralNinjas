/** @format */

import classNames from 'classnames'
import React from 'react'
import icon from '../../assets/check.svg'

export default function UnorderedList({children,className,listItemsClassName,...props}) {
  return (
    <ul
      className={classNames("list-none list-check",className)}
    >
      {(React.Children.map(children,(child,index) => {
        return <li className={classNames(listItemsClassName,'flex justify-start items-start gap-2')} key={index}><img src={icon} className='inline-block w-4 pt-1' alt='' /><div className='inline-block'>{child}</div></li>
      }))||children}
    </ul>
  )
}
