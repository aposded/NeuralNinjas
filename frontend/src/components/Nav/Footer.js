import React from 'react'
import MenuLink from '../Links/MenuLink'
import Text from '../Text/Text'
import icon from '../../assets/icon_light.svg'

export default function Footer() {
    return (
        <div className='px-3 mt-32'>
            <div className='w-full px-2 py-4 lg:py-4 lg:px-8 rounded-2xl bg-zinc-100'>
                <div className='flex flex-col items-start justify-start lg:flex-row'>
                    <div className='hidden lg:block'>
                        <img alt='' src={icon} className='w-1/3 lg:w-1/2 max-w-tiny lg:max-w-2tiny' />
                    </div>
                    <div className='flex flex-col items-start justify-end w-full gap-5 px-3 lg:pl-20 lg:flex-row lg:mt-0'>
                        <div>
                            <Text className='pb-5'>Product</Text>
                            <ul className='flex flex-col gap-2 p-1 list-none'>
                                <MenuLink to='/login'>Login</MenuLink>
                                <MenuLink to='/pricing'>Pricing</MenuLink>
                                <MenuLink to='mailto:team@flowsage.co'>Report a bug</MenuLink>
                                <MenuLink to='mailto:team@flowsage.co'>Request a new feature</MenuLink>
                            </ul>
                        </div>
                        <div>
                            <Text className='pb-5'>Company</Text>
                            <ul className='flex flex-col gap-2 p-1 list-none'>
                                <MenuLink to='mailto:team@flowsage.co'>Contact Us</MenuLink>
                                {/* <MenuLink to='https://twitter.com/EnwriteHQ'>Twitter</MenuLink> */}
                                {/* <MenuLink to='https://www.linkedin.com/company/enwrite/'>Linkedin</MenuLink> */}
                                <MenuLink to='/privacy'>Privacy</MenuLink>
                                <MenuLink to='/terms'>Terms of Service</MenuLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
