import React from 'react'

function PostCard({ image, date, category, title }) {
    return (
        <section>
            <img src={image} alt="" className='rounded-md w-full h-56 object-cover'/>
            <p className=''>
                {category && <span className='uppercase'>{category}</span>} {date}
            </p>
            <h3 className='font-semibold text-lg mt-1'>{title}</h3>
        </section>
    )
}

export default PostCard