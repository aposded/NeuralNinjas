/** @format */

import classNames from 'classnames'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'

export default function ButtonPrimaryWithIcon({children,icon,reverse=false,...props}) {
  return (
    <ButtonPrimary {...props} className={classNames('py-1',props.className)}>
      {reverse? <i className={`bi bi-${icon} text-3xl my-auto`}></i>:null}
      <div className="my-auto">{children}</div>
      {reverse? null:<i className={`bi bi-${icon} text-3xl my-auto`}></i>}
    </ButtonPrimary>
  )
}
