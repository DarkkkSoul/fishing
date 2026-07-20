import React from 'react'

function About() {
    return (
        <div className='w-full space-y-25 min-h-screen max-w-7xl mx-auto py-20'>
            <div className='flex justify-between px-6 items-center'>
                <div className="flex flex-col">
                    <h2 className="text-5xl font-tangerine text-olive-900">About us</h2>
                    <div className=" flex items-center space-x-2">
                        <div className="flex gap-2 *:size-2 *:bg-olive-600/90 *:rounded-full">
                            <div className="" />
                            <div className="" />
                        </div>
                        <div className="w-20 h-0.5 bg-olive-600/80"></div>
                    </div>
                </div>
                <div className='max-w-xl text-balance font-diphylleia text-lg/normal'>
                    Fishing is a piece of art which alone cannot be learnt by watching, at WildCast & Co. we sell equipments, train anglers. We've trained 300 anglers from early 2000s. Our purpose is to spread the love and knowledge of fishing to people irrespective of their age.
                </div>
            </div>
            <div className='flex font-diphylleia space-x-15 *:w-75 *:h-80 justify-center items-center'>
                <div className=' rounded-xl bg-linear-to-b from-gray-300/50 from-40% via-olive-700/60 via-80% to-olive-700 p-1'>
                    <div className='font-diphylleia w-full h-full bg-white pb-5 pr-5 rounded-xl flex flex-col items-end justify-end'>
                        <p>Explore Premium</p>
                        <h3 className='text-3xl text-balance'>Gear & Equipment</h3>
                    </div>
                </div>
                <div className='relative rounded-xl bg-linear-to-tr text-white pt-5 pl-5 space-y-2 from-olive-900 via-olive-900/70 via-40% to-gray-400/40'>
                    <h3 className='text-3xl text-balance'>Community</h3>
                    <p>Join the growing family of passionate anglers.</p>
                    <div className='absolute size-70 top-22 right-5 rotate-20 opacity-70'>
                        <img src="/white-whale.png" className='object-fit' />
                    </div>
                </div>
                <div className='rounded-xl bg-gray-200/50 shadow-md relative'>
                    <div className='absolute size-70 top-22 rotate-20 opacity-70'>
                        <img src="/whale.png" className='object-fit' />
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default About