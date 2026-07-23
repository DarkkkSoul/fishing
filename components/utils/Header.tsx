"use client"

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function Header() {
    const svgRef = useRef<SVGSVGElement>(null)

    useEffect(() => {
        if (svgRef.current) {
            gsap.set(svgRef.current, { x: '-100%' })
        }
    }, [])

    const handleMouseEnter = () => {
        if (svgRef.current) {
            gsap.to(svgRef.current, {
                x: '100%',
                duration: 1.2,
                ease: 'power2.out'
            })
        }
    }

    const handleMouseLeave = () => {
        if (svgRef.current) {
            gsap.to(svgRef.current, {
                x: '-100%',
                duration: 1.2,
                ease: 'power2.out'
            })
        }
    }

    return (
        <div className="bg-white/70 border-b border-b-olive-600/90 backdrop-opacity-50 backdrop-blur-xs absolute  top-0 left-0 right-0 z-50 h-15 flex items-center justify-around text-olive-900 font-diphylleia">
            <div className="text-2xl flex items-center space-x-2">
                <img src="/logo.png" className="h-5.5" />
                <h1 className="cut-text">WildCast Co.</h1>
            </div>
            <div>
                <ul className="text-sm flex space-x-5">
                    <li>Products</li>
                    <li>Reviews</li>
                    <li>Contact</li>
                    <li>Train with us</li>
                </ul>
            </div>
            <div>
                <button
                    className="cursor-pointer relative text-white/90 bg-olive-800 font-diphylleia px-6 py-1.5 pb-2 rounded-lg shadow-[inset_0_0_9px_0_rgba(245,245,245,0.3)] overflow-hidden hover:bg-olive-700 transition-colors"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <svg ref={svgRef} className="absolute top-0 left-0.5 bottom-0 -skew-x-12 blur-md" >
                        <rect x={0} y={0} width={10} height={38} fill="#ffffffcc" />
                    </svg>
                    Shop Now
                </button>
            </div>
        </div>
    )
}