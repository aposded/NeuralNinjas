/** @format */

import classNames from 'classnames'
import React from 'react'
import iconX from '../../assets/x-light.svg'
import iconCheck from '../../assets/check-light.svg'

export default function FeaturesListStarter({children,className,listItemsClassName,...props}) {
  return (
    <ul
      className={classNames("list-none list-check",className)}
    >
      {(React.Children.map(children,(child,index) => {
        return <li className={listItemsClassName} key={index}><img src={child.props.negative? iconX:iconCheck} className='inline-block w-5' alt='' /><div className={'inline-block ml-1 '+(child.props.negative? 'line-through':'')}>{child}</div></li>
      }))||children}
    </ul>
  )
}
