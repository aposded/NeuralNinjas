/** @format */

import classNames from 'classnames'
import React from 'react'
import icon from '../../assets/check.svg'

export default function FeaturesListArtisan({children,className,listItemsClassName,...props}) {
  return (
    <ul
      className={classNames("list-none list-check",className)}
    >
      {(React.Children.map(children,(child,index) => {
        return <li className={listItemsClassName} key={index}><img src={icon} className='inline-block w-5' alt='' /><div className='inline-block ml-1'>{child}</div></li>
      }))||children}
    </ul>
  )
}
