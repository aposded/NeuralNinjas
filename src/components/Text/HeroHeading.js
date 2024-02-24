/** @format */

import classNames from 'classnames'
import React from 'react'

export default function HeroHeading({children,className,...props}) {
  return <h1 className={classNames("text-dark text-4xl lg:text-6xl font-bold",className)}>{children}</h1>
}
