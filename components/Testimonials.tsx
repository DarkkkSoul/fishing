import { Star } from 'lucide-react';
import React from 'react'

type Testimonial = {
    id: number,
    name: string,
    age: number,
    location: string,
    avatar: string,
    role: string,
    rating: number,
    testimonial: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "James Hartwell",
        age: 34,
        location: "Austin, Texas",
        avatar: "/testimonials/1.webp",
        role: "Amateur Angler",
        rating: 5,
        testimonial:
            "I walked in knowing nothing and left with skills I never thought I'd have. Their trainers are patient, knowledgeable, and truly passionate about fishing. Best investment I've ever made!",
    },
    {
        id: 2,
        name: "Sandra Mwangi",
        age: 45,
        location: "Nairobi, Kenya",
        avatar: "/testimonials/2.webp",
        role: "Recreational Fisher",
        rating: 5,
        testimonial:
            "I started fishing at 43 and thought I was too old to learn. WildCast & Co. proved me completely wrong. The team welcomed me with open arms and their gear is top-notch.",
    },
    {
        id: 3,
        name: "Liam O'Brien",
        age: 27,
        location: "Dublin, Ireland",
        avatar: "/testimonials/3.webp",
        role: "Professional Angler",
        rating: 5,
        testimonial:
            "As a competitive angler, I need gear that performs under pressure. WildCast & Co. has never let me down. Their equipment is reliable, durable, and built for serious fishing.",
    },
    {
        id: 4,
        name: "Emily Nguyen",
        age: 19,
        location: "Vancouver, Canada",
        avatar: "/testimonials/4.webp",
        role: "Beginner Angler",
        rating: 4,
        testimonial:
            "The instructors made learning fun and easy. I caught my first fish on day two of training! The gear they recommended for beginners was super affordable too.",
    },
    {
        id: 5,
        name: "Carlos Mendoza",
        age: 52,
        location: "Cancún, Mexico",
        avatar: "/testimonials/5.webp",
        role: "Fishing Enthusiast",
        rating: 5,
        testimonial:
            "I've been fishing for over 20 years, but WildCast & Co. taught me techniques I had never encountered before. Their deep knowledge of the craft is unmatched.",
    },
    {
        id: 6,
        name: "Aisha Patel",
        age: 31,
        location: "Mumbai, India",
        avatar: "/testimonials/6.webp",
        role: "Weekend Fisher",
        rating: 5,
        testimonial:
            "Their gear shop has everything you need at prices that are hard to beat anywhere else.",
    },
    {
        id: 7,
        name: "Noah Bergström",
        age: 40,
        location: "Stockholm, Sweden",
        avatar: "/testimonials/7.webp",
        role: "Fly Fishing Specialist",
        rating: 5,
        testimonial:
            "The instructors have decades of experience and it really shows. I traveled all the way from Sweden just for their advanced training program",
    },
    {
        id: 8,
        name: "Grace Okafor",
        age: 62,
        location: "Lagos, Nigeria",
        avatar: "/testimonials/8.webp",
        role: "Retired & Passionate Fisher",
        rating: 5,
        testimonial:
            "I picked up fishing after retirement and WildCast & Co. made the journey incredibly smooth. The trainers were warm, encouraging, and professional. ",
    },
];

function Testimonials() {
    return (
        <div className='max-w-7xl mx-auto space-y-16 py-20'>

            <div className="flex flex-col">
                <h2 className="text-6xl font-tangerine text-olive-900">What our <span className="text-gray-400">customers</span> say</h2>
                <div className=" flex items-center space-x-2">
                    <div className="flex gap-2 *:size-2 *:bg-olive-600/90 *:rounded-full">
                        <div className="" />
                        <div className="" />
                    </div>
                    <div className="w-60 h-0.5 bg-olive-600/80"></div>
                </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-16 justify-center">

                {testimonials.map((testimonial) => (

                    <div key={testimonial.id} className='max-w-84 h-90 justify-between items-center flex flex-col relative bg-[#F3F3F3] p-7 rounded-lg group shadow-md/18'>


                        {/* <div className='hidden group-hover:block absolute bottom-0 right-0 left-0 bg-white h-35 rounded-b-lg'>
                            <div className='size-30 bg-olive-600 rounded-full backdrop-blur-2xl'/>
                        </div> */}

                        <svg className='absolute bottom-0 left-0 right-0 mask-t-from-1 mask-radial-from-1% mask-radial-at-bottom' width={336} height={170} viewBox='0 0 336 170'>

                            <defs>
                                <pattern id='circle' patternUnits="userSpaceOnUse" width={20} height={20}>
                                    <rect width={"100%"} height={"100%"} stroke="none" fill='none'/>
                                    <circle r={3} cx={10} cy={10} fill="gray"/>
                                    <circle r={3} cx={0} cy={0} fill="gray"/>
                                    <circle r={3} cx={20} cy={0} fill="gray"/>
                                    <circle r={3} cx={20} cy={20} fill="gray"/>
                                    <circle r={3} cx={0} cy={20} fill="gray"/>
                                </pattern>
                            </defs>

                            <rect x={0} y={0} width={336} height={170} fill='url(#circle)' />
                        </svg>


                        <div className="flex flex-col space-y-3 z-4">
                            <p className="text-lg text-olive-900 font-diphylleia tracking-tight">{testimonial.testimonial}</p>
                            <div className="flex flex-col ">
                                <h3 className="text-lg font-sans font-medium text-olive-900">{testimonial.name}</h3>
                                <p className="text-sm font-diphylleia text-olive-900">{testimonial.location}</p>
                            </div>
                        </div>

                        <div className="relative flex flex-col items-center">
                            {/* {
                                Array.from({ length: testimonial.rating }).map((_, index) => (
                                    <Star key={index} size={20} stroke='none' fill='#ecf23c' />
                                ))
                            } */}
                            <div className="flex absolute justify-center items-center size-25 -bottom-15 left-1/2 -translate-x-1/2  rounded-full">
                                <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full rounded-full border-3  border-white" />
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials