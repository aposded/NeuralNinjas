/** @format */

import classnames from 'classnames'
import React,{useContext} from 'react'
import Text from '../Text/Text'
import {useNavigate} from 'react-router-dom'
import ErrorContext from '../../contexts/ErrorContext'
import metamask from '../../assets/metamask.svg'
import UserContext from '../../contexts/UserContext'

export default function SignInWithGoogle({children,...props}) {
  let navigate=useNavigate()
  const setError=useContext(ErrorContext)
  const [account,connect]=useContext(UserContext)


  return (
    <>
      <button
        onClick={connect}
        className={classnames(
          'w-80 lg:w-128 m-0 border border-primary rounded-full text-secondary font-semibold shadow-sm hover:shadow-md transition-all hover:bg-dark-500 grid grid-cols-4 justify-center items-center mt-2 bg-zinc-100 ',
          props.className
        )}>
        <img src={metamask} alt='metamask logo' className="inline-block w-16 px-4 py-3 text-left rounded-full" />
        <Text className='inline-block text-center  col-span-2 w-full !text-secondary p-0'>Sign in with MetaMask</Text>
      </button>
    </>
  )
}
