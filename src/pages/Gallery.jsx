import React from 'react'

const Gallery = () => {
    return (
        <div className='px-5 font-prompt'>
            <h1 className='text-2xl md:text-3xl font-semibold'>
                Title 1
            </h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                <div class="border h-64">01</div>
                <div class="md:col-span-2 border h-64">02</div>
                <div class="md:col-span-2 border h-64">04</div>
                <div class="border h-64">05</div>
                <div class="border h-64">06</div>
                <div class="md:col-span-2 border h-64">07</div>
                <div className=' border h-64'>08</div>
                <div className=' border h-64'>09</div>
                <div className=' border h-64'>10</div>
            </div>
            <div className='grid md:grid-flow-col grid-rows-1 md:grid-rows-2 gap-3 mt-3'>
                <div className='md:row-span-3 border h-[490px]'>11</div>
                {/* <div className=' border h-60'>11</div> */}
                <div className='md:col-span-2 border h-60'>12</div>
                <div className='md:col-span-2 row-span-2 border h-60'>13</div>
                <div className='md:row-span-3 border h-[490px]'>14</div>
                {/* <div className='border'>15</div> */}
            </div>

            <h1 className='text-2xl md:text-3xl font-semibold'>
                Title 2
            </h1>
        </div>
    )
}

export default Gallery