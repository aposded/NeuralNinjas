import React from 'react'
import {useNavigate} from 'react-router-dom'
import ButtonPrimaryWithIcon from '../Buttons/ButtonPrimaryWithIcon'
import MenuLink from '../Links/MenuLink'
import icon from '../../assets/icon_light.svg'
import {Link} from 'react-router-dom'

export default function GuestBar() {
    const navigate=useNavigate()

    return (
        <nav className="flex justify-between w-full p-2 align-center">
            <div className="hidden w-1/12 my-auto md:block max-w-tiny">
                <Link to='/'>
                    <img src={icon} alt="logo" className="p-5" />
                </Link>
            </div>
            <div className="w-1/5 my-auto md:hidden max-w-tiny">
                <Link to='/'>
                    <img src={icon} alt="logo" />
                </Link>
            </div>
            <div className="justify-center hidden align-center md:flex">
                <ul className='my-auto mr-1'>
                    <MenuLink to='/login'>Login</MenuLink>
                </ul>
                <ButtonPrimaryWithIcon onClick={() => navigate('/login')} icon="arrow-right-short" className="my-auto !py-1 lg:!w-64">
                    Get started for free
                </ButtonPrimaryWithIcon>
            </div>
        </nav>
    )
}