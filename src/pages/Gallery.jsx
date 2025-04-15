import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'


const SkeletonBox = ({ className = '' }) => (
    <motion.div
        className={`bg-gray-200 rounded-md ${className}`}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 0.8,
        }}
    />
);

const Gallery = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const renderSkeletons = () => (
        <>
        {/* Simulating 3 sections with grid boxes */}
        {[...Array(3)].map((_, i) => (
            <div key={i} className="mt-5">
            <div className="h-6 w-32 bg-gray-300 mb-3 rounded" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[...Array(9)].map((_, j) => (
                <SkeletonBox key={j} className="h-64" />
                ))}
            </div>
            <div className="grid md:grid-flow-col grid-rows-1 md:grid-rows-2 gap-3 mt-3">
                <SkeletonBox className="md:row-span-3 h-[490px]" />
                <SkeletonBox className="md:col-span-2 h-60" />
                <SkeletonBox className="md:col-span-2 row-span-2 h-60" />
                <SkeletonBox className="md:row-span-3 h-[490px]" />
            </div>
            </div>
        ))}
        </>
    );

    return (
        <div className='px-5 font-prompt'>
            {
                loading ? (
                    renderSkeletons()
                ) : (
                    <>
                        <h1 className='text-2xl md:text-3xl font-semibold mt-1.5'>
                            Title 1
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                            <div className="border h-64">01</div>
                            <div className="md:col-span-2 border h-64">02</div>
                            <div className="md:col-span-2 border h-64">04</div>
                            <div className="border h-64">05</div>
                            <div className="border h-64">06</div>
                            <div className="md:col-span-2 border h-64">07</div>
                            <div className=' border h-64'>08</div>
                            <div className=' border h-64'>09</div>
                            <div className=' border h-64'>10</div>
                        </div>
                        <div className='grid md:grid-flow-col grid-rows-1 md:grid-rows-2 gap-3 mt-3'>
                            <div className='md:row-span-3 border h-[490px]'>11</div>
                            <div className='md:col-span-2 border h-60'>12</div>
                            <div className='md:col-span-2 row-span-2 border h-60'>13</div>
                            <div className='md:row-span-3 border h-[490px]'>14</div>
                        </div>

                        <h1 className='text-2xl md:text-3xl font-semibold'>
                            Title 2
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                            <div className="md:col-span-2 border h-64">01</div>
                            <div className="border h-64">02</div>
                            <div className="border h-64">04</div>
                            <div className="md:col-span-2 border h-64">05</div>
                            <div className="border h-64">06</div>
                            <div className="border h-64">07</div>
                            <div className=' border h-64'>08</div>
                            <div className='md:col-span-2  border h-64'>09</div>
                            <div className=' border h-64'>10</div>
                        </div>
                        <div className='grid md:grid-flow-col grid-rows-1 md:grid-rows-2 gap-3 mt-3'>
                            <div className='md:row-span-3 border h-[490px]'>11</div>
                            <div className='md:col-span-2 border h-60'>12</div>
                            <div className='md:col-span-2 row-span-2 border h-60'>13</div>
                            <div className='md:row-span-3 border h-[490px]'>14</div>
                        </div>

                        <h1 className='text-2xl md:text-3xl font-semibold'>
                            Title 3
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                            <div className="border h-64">01</div>
                            <div className="md:col-span-2 border h-64">02</div>
                            <div className="md:col-span-2 border h-64">04</div>
                            <div className="border h-64">05</div>
                            <div className="border h-64">06</div>
                            <div className="md:col-span-2 border h-64">07</div>
                            <div className=' border h-64'>08</div>
                            <div className=' border h-64'>09</div>
                            <div className=' border h-64'>10</div>
                        </div>
                        <div className='grid md:grid-flow-col grid-rows-1 md:grid-rows-2 gap-3 mt-3'>
                            <div className='md:row-span-3 border h-[490px]'>11</div>
                            <div className='md:col-span-2 border h-60'>12</div>
                            <div className='md:col-span-2 row-span-2 border h-60'>13</div>
                            <div className='md:row-span-3 border h-[490px]'>14</div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                            <div className="md:col-span-2 border h-64">01</div>
                            <div className="border h-64">02</div>
                            <div className="border h-64">04</div>
                            <div className="md:col-span-2 border h-64">05</div>
                            <div className="border h-64">06</div>
                            <div className="border h-64">07</div>
                            <div className=' border h-64'>08</div>
                            <div className='md:col-span-2  border h-64'>09</div>
                            <div className=' border h-64'>10</div>
                        </div>
                        <div className='grid md:grid-flow-col grid-rows-1 md:grid-rows-2 gap-3 mt-3'>
                            <div className='md:row-span-3 border h-[490px]'>11</div>
                            <div className='md:col-span-2 border h-60'>12</div>
                            <div className='md:col-span-2 row-span-2 border h-60'>13</div>
                            <div className='md:row-span-3 border h-[490px]'>14</div>
                        </div>
                    </>
                )
            }
            



        </div>
    )
}

export default Gallery