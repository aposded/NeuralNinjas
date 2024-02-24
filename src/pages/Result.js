import React,{useContext,useState} from 'react'
import Logobar from '../components/Nav/Logobar'
import CircularProgress from '../components/Progress/CircularProgress'
import Subheading from '../components/Text/Subheading'
import Text from '../components/Text/Text'
import bg from '../assets/bg.svg'
import ButtonSecondary from '../components/Buttons/ButtonSecondary'
import UserContext from '../contexts/UserContext'
import {MetaMaskProvider} from '@metamask/sdk-react'
import Icon from '../components/Text/Icon'

export default function Result() {
    const [account,connect,connected,conecting,provider]=useContext(UserContext)

    return (
        <>
            <Logobar />
            <div className='min-h-full px-8 ml-0 shadow-md max-w-7xl bg-light'>
                <Subheading>Your Result</Subheading>
                <Text className='py-0 leading-0'>An NFT has been minted in your MetaMask wallet (<span className='font-semibold'>{account}</span>) which can be used to accelerate your application to scholarship institutions.</Text>
                <div className='flex flex-col items-center justify-center mt-24 h-128'>
                    <div className='relative flex-1 w-96 h-96'>
                        <Icon icon='check-circle' className='w-full mx-auto text-center text-[20rem] text-primary' />
                    </div>
                    {/* <ButtonSecondary className='!mt-12 border bg-light border-primary '>Open MetaMask</ButtonSecondary> */}
                </div>
            </div>
        </>
    )
}
