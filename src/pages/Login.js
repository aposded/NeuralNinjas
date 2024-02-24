import React from 'react'
import Subheading from '../components/Text/Subheading'
import SignInWithGoogle from '../components/Buttons/SignInWithGoogle'
import Logobar from '../components/Nav/Logobar'

export default function Login() {
    return (
        <>
            <Logobar />
            <div className='flex w-full h-full min-h-full px-8 overflow-hidden bg-light'>
                <div className='flex flex-col items-center justify-start h-screen py-48 mx-auto w-128'>
                    <Subheading className='w-full text-left'>Sign in to continue</Subheading>
                    <SignInWithGoogle />
                </div>
            </div>
        </>
    )
}
