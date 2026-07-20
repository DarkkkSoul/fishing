import React from 'react'
import Bento from './utils/Bento'

function About() {
    return (
        <div className='w-full space-y-25 min-h-screen max-w-7xl mx-auto py-10'>
            <div className='flex justify-between px-16 items-center'>
                <div className="flex flex-col">
                    <h2 className="text-6xl font-tangerine text-olive-900">We are all about fishing</h2>
                    <div className=" flex items-center space-x-2">
                        <div className="flex gap-2 *:size-2 *:bg-olive-600/90 *:rounded-full">
                            <div className="" />
                            <div className="" />
                        </div>
                        <div className="w-25 h-0.5 bg-olive-600/80"></div>
                    </div>
                </div>
                <div className='max-w-xl text-balance font-diphylleia text-lg/normal'>
                    Fishing is a piece of art which alone cannot be learnt by watching, at WildCast & Co. we sell equipments, train anglers. We've trained more than 3,000 anglers from early 2000s. Our purpose is to spread the love and knowledge of fishing to people irrespective of their age.
                </div>
            </div>

            <Bento />

            <div>

            </div>
        </div>
    )
}

export default About