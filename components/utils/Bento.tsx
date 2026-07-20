import React from 'react'

function Bento() {
    return (
        <div className='grid grid-cols-[repeat(2,30rem)] grid-rows-[repeat(3,15rem)] justify-center font-diphylleia gap-6 relative'>

            <div className='row-span-2 col-span-1 rounded-xl bg-linear-to-b from-gray-300/50 from-40% via-olive-700/60 via-80% to-olive-700 p-1'>
                <div className='font-diphylleia w-full h-full bg-white pb-5 pr-5 rounded-xl flex flex-col items-end justify-end'>
                    <p>Explore Premium</p>
                    <h3 className='text-3xl text-balance'>Gear & Equipment</h3>
                </div>
            </div>

            <div className='relative border row-span-1 col-span-1 rounded-xl bg-linear-to-tr text-white pt-5 pl-5 space-y-2 from-olive-900 via-olive-900/70 via-40% to-gray-400/40'>
                <h3 className='text-3xl text-balance'>Community</h3>
                <p>Join the growing family of passionate anglers.</p>
            </div>

            <div className='row-span-1 col-span-1 border rounded-xl'>
 
            </div>
            <div className='row-span-1 col-span-2 border rounded-xl'>
 
            </div>

        </div>
    )
}

export default Bento