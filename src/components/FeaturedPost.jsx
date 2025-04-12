import React from 'react'
import FeaturedImg from '../images/featured.png'
const FeaturedPost = () => {
    return (
        <section className='mb-12'>
            <div className='relative'>
                <img src={FeaturedImg} alt="featured" className='w-full h-96 object-fill rounded-md' />
                <p className='absolute bottom-28 md:bottom-20 left-5 md:left-10 text-sm text-gray-300 mt-4'>September, 2019 &nbsp;•&nbsp; Programming</p>
                <h2 className='absolute bottom-10 left-5 md:left-10 text-3xl text-white font-bold mt-2'>Full Stack Developer/ Software Engr.</h2>
            </div>
        </section>
    )
}

export default FeaturedPost