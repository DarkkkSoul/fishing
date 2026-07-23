"use client"
import { ArrowUpRight } from "lucide-react"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

interface ProductProps {
    id: number
    name: string
    price: number
    image: string
    description: string
}

function Product({ name, price, image, description }: ProductProps) {
    const arrowRef = useRef<HTMLDivElement>(null)
    const arrowIconRef = useRef<SVGSVGElement>(null)
    const { contextSafe } = useGSAP()

    useGSAP(() => {
        gsap.set(arrowRef.current, {
            backgroundColor: "#59594C"
        })
        gsap.set(arrowIconRef.current, {
            color: "white"
        })
    }, [])

    const handleMouseEnter = contextSafe(() => {
        if (arrowRef.current && arrowIconRef.current) {
            gsap.to(arrowRef.current, {
                rotation: 45,
                x: 4,
                scale: 1.1,
                backgroundColor: "white",
                duration: 0.3
            })
            gsap.to(arrowIconRef.current, {
                color: "#59594C",
                duration: 0.3
            })
        }
    })

    const handleMouseLeave = contextSafe(() => {
        if (arrowRef.current && arrowIconRef.current) {
            gsap.to(arrowRef.current, {
                rotation: 0,
                x: 0,
                scale: 1,
                backgroundColor: "#59594C",
                duration: 0.3
            })
            gsap.to(arrowIconRef.current, {
                color: "white",
                duration: 0.3
            })
        }
    })

    return (
        <div className="group flex pb-4 space-y-2 flex-col justify-center rounded-xl max-w-80 bg-olive-700/90 text-white">
            <div className="p-2 relative">
                <div className="border-2 bg-black/40 relative border-white/60 h-45 w-full rounded-lg overflow-hidden">
                    <img src={image} className="object-fit mask-b-from-20% w-full h-full group-hover:scale-105 transition-transform duration-300" />
                </div>
            </div>
            <div className="font-diphylleia space-y-2 px-4">
                <h3 className="text-2xl">{name}</h3>
                <p className="text-[16px]/[23px] text-white/80">{description}</p>

                <div className="flex gap-2 mt-5 items-center justify-between">
                    <div className="font-diphylleia bottom-5 right-5 text-2xl">
                        ${" " + price}
                    </div>
                    <button
                        className="flex bg-white text-olive-900 hover:ring hover:ring-white hover:bg-transparent hover:text-white items-center gap-2 px-4 py-2 rounded-full text-sm cursor-pointer transition-all"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <label className="pb-0.5 cursor-pointer">Add to Cart</label>
                        <div ref={arrowRef} className=" p-1.5 rounded-full">
                            <ArrowUpRight ref={arrowIconRef} size={15} strokeWidth={2.5} />
                        </div>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Product