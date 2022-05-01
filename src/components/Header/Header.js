import React from 'react'
import Logo from '../../constants/Svg/Logo'

const Header = () => {
    return (
        <div className='bg-green-600'>
            <div className='container'>
                <div className='flex justify-between items-center py-4'>
                    <h1 className=''>
                        <a href="/">
                            <Logo />
                        </a>
                    </h1>
                    <nav className='flex'>
                        <div className='text-base px-4 py-1'>
                            <p className=''>Blog</p>
                        </div>
                        <div className='text-base px-4 py-1'>
                            <p className=''>Hakkımda</p>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header