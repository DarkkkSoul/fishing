"use client"
import { ArrowUpRight, MoveRight, ShoppingCart } from "lucide-react"
import Product from "./utils/Product"
import { PRODUCTS } from "@/utils/products"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Products() {
    const arrowRef = useRef<HTMLDivElement>(null)
    const { contextSafe } = useGSAP();
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
        <div className="w-full min-h-screen">
            <div className="max-w-7xl mx-auto space-y-16">

                <div className="flex flex-col">
                    <h2 className="text-6xl font-tangerine text-olive-900">Featured Products</h2>
                    <div className=" flex items-center space-x-2">
                        <div className="flex gap-2 *:size-2 *:bg-olive-600/90 *:rounded-full">
                            <div className="" />
                            <div className="" />
                        </div>
                        <div className="w-50 h-0.5 bg-olive-600/80"></div>
                    </div>
                </div>

                <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {
                        PRODUCTS.map((p) => (
                            <div key={p.id}>
                                <Product {...p} />
                            </div>
                        ))
                    }

                </div>

                <div className="flex justify-center mt-12">
                    <button onMouseEnter={hover} onMouseLeave={leave} className="flex border hover:bg-olive-700 hover:text-white  border-olive-700 text-olive-700 items-center gap-2 px-4 py-2 rounded-lg text-sm cursor-pointer font-diphylleia">
                        <label className="pb-0.5 cursor-pointer">View All Products</label>
                        <div ref={arrowRef}>
                            <MoveRight />
                        </div>
                    </button>
                </div>


            </div>
        </div>
    )
}

export default Products