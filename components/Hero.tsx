"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ArrowRight, MoveRight, Star } from "lucide-react"
import { useRef } from "react"

gsap.registerPlugin(useGSAP)

function Hero() {
    const heroTextRef = useRef<HTMLDivElement>(null)
    const taglineRef = useRef<HTMLDivElement>(null)
    const arrowRef = useRef<HTMLDivElement>(null)
    const { contextSafe } = useGSAP();

    useGSAP(() => {
        gsap.to(heroTextRef.current, {
            y: 0,
            opacity: 1,
            ease: "power1.out",
            duration: 1.1
        })
        gsap.to(taglineRef.current, {
            opacity: 1,
            ease: "power1.out",
            duration: 1.5,
            delay: 0.4
        })
    })

    const hover = contextSafe(() => {
        gsap.to(arrowRef.current, {
            x: 5,
            duration: 0.2
        })
    })
    const leave = contextSafe(() => {
        gsap.to(arrowRef.current, {
            x: 0,
            duration: 0.2
        })
    })

    return (
        <div className={`bg-[url('/hero.png')] w-full flex items-center h-screen bg-no-repeat overflow-hidden bg-cover bg-center relative`}>

            <div className="absolute bg-white/33 z-10 inset-0" />
            <div className="absolute h-56 blur-3xl bg-white/80 z-10 -bottom-5 left-0 right-0" />
            <div className="absolute h-15 blur-xl bg-white z-10 -bottom-5 left-0 right-0" />

            <div
                style={{ transform: "translateY(150px)", opacity: 0 }}
                ref={heroTextRef}
                className="ml-30 max-w-3xl flex flex-col z-15">

                <div 
                onMouseEnter={hover}
                onMouseLeave={leave}
                className="mb-3 flex space-x-3 items-center rounded-full bg-white px-5 cursor-pointer *:cursor-pointer py-2 w-fit">
                    <div className="flex border-r pr-3 border-r-olive-950/60 space-x-2 items-center">
                        <div className="text-sm font-diphylleia pb-0.5">4.6</div>
                        <Star size={19} stroke="none" fill="#F0B100"/>
                    </div>
                    <button className="text-olive-900 flex items-center space-x-2.5 justify-center w-fit font-diphylleia">
                        <p className="text-sm pb-0.5">3+ new gears</p>
                        <div ref={arrowRef}>
                            <MoveRight size={20} strokeWidth={1} />
                        </div>
                    </button>
                </div>

                <h2 className="text-olive-900/80 mb-8 text-7xl leading-14 tracking-tighter font-diphylleia text-balance">Gears<span className="font-tangerine text-8xl text-white tracking-normal pl-1"> that performs </span> when it matters most.</h2>

                <p className="text-olive-950 max-w-xl mb-8 text-balance text-xl/relaxed tracking-tight font-diphylleia">Every <span className="decoration-dotted underline decoration-3 underline-offset-4  decoration-white">angler</span> deserves access to the best equipment without stretching their budget. Our carefully selected range of fishing gear has everything you need to make every trip a success.</p>

                <div className="flex gap-x-4 z-100 mb-8">
                    <button className="uppercase cursor-pointer bg-white/90 text-olive-950 text-sm font-diphylleia px-5 py-2.5 rounded-lg hover:border hover:border-white hover:bg-transparent hover:text-olive-950">Shop Now </button>
                    <button className="uppercase cursor-pointer text-olive-950 border border-olive-950 text-sm font-diphylleia px-5 py-2.5 rounded-lg hover:border hover:border-white hover:bg-transparent hover:text-white"> Browse Products {">"}</button>
                </div>
            </div>
            <div
                ref={taglineRef}
                className="opacity-0 absolute bottom-15 right-20 z-100">
                <div className="text-olive-900/80 text-lg tracking-tight font-diphylleia flex gap-x-3 px-6 py-3 rounded-full">
                    <p>50+ variety gears</p>
                    <p className="border-x px-4">2000+ happy customers</p>
                    <p>2 years warranty</p>
                </div>
            </div>
        </div>
    )
}

export default Hero