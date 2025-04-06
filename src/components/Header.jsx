import React from 'react'

const Header = () => {
    return (
        <header className='sticky top-0 z-10 bg-white shadow-md'>
            <div className='container mx-auto px-4 py-4 flex justify-between items-center font-prompt'>
                <h1 className='text-xl font-semibold'>AM</h1>
                <nav className='space-x-6 text-gray-600 text-sm'>
                    <a href="/">Home</a>
                    <a href="/blog">Blog</a>
                    <a href="/about">About</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header