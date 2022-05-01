import React from 'react'
import Logo from '../../constants/Svg/Logo'
import Router from 'next/router'
import { RiArticleFill, RiUserFill } from 'react-icons/ri'
import CustomIcon from '../../constants/Svg/Icons/CustomIcon'

const Header = () => {

    const handleRedirectBtn = (url) => {
        Router.push(url)
    }

    return (
        <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
            <div className='container'>
                <div className='flex justify-between items-center py-4 text-white'>
                    <h1 className=''>
                        <div className='cursor-pointer' onClick={() => handleRedirectBtn('/')}>
                            <Logo outlineColor='#fff' color='#fff' />
                        </div>
                    </h1>
                    <nav className='flex'>
                        <div className='text-base px-4 py-1'>
                            <div onClick={() => handleRedirectBtn('/')} className='cursor-pointer flex items-center'>
                                <CustomIcon color={'#fff'}>
                                    <RiArticleFill />
                                </CustomIcon>
                                <span className='px-1'>
                                    Blog
                                </span>
                            </div>
                        </div>
                        <div className='text-base px-4 py-1'>
                            <div onClick={() => handleRedirectBtn('/about')} className='cursor-pointer flex items-center'>
                                <CustomIcon color={'#fff'}>
                                    <RiUserFill />
                                </CustomIcon>
                                <span className='px-1'>
                                Hakkımda
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header