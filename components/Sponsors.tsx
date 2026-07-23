"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const SPONSORS = [
    // "/sponsors/Blue-startups.png",
    // "/sponsors/NOAA-FISHERIES.png",
    "/sponsors/blue-horizon.png",
    "/sponsors/hatch-blue.png",
    "/sponsors/katapult-ocean.png",
    "/sponsors/marine-stewardship-concil.png",
    "/sponsors/s2g.png",
    "/sponsors/world-wildlife.png",
]

function Sponsors() {

    gsap.registerPlugin(useGSAP)
    const btnRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const btns = gsap.utils.toArray(".sponsor-button")
        btns.forEach((btn:any)=>{
            gsap.to(btn, {
                "--angle": "360deg",
                duration: 2,
                repeat: -1,
                ease: "linear"
            })
        })
    })

    return (
        <div className=" py-20 space-y-12 relative">

            <svg
                className="absolute top-0 bottom-0 right-0 mask-radial-from-1% mask-radial-at-right mask-l-from-1"
                width={390} height={312} viewBox="0 0 390 312">

                <defs>
                    <pattern id="rect" patternUnits="userSpaceOnUse" width="40" height="40">
                        <rect x={0} y={0} width={"100%"} height={"100%"} fill="none" stroke="#40402bbb" strokeWidth="1" />
                    </pattern>
                </defs>

                <rect x={0} y={0} width={390} height={312} fill="url(#rect)" />
            </svg>
            <svg
                className="absolute top-0 bottom-0 left-0 mask-radial-from-1% mask-radial-at-left mask-r-from-1%"
                width={390} height={312} viewBox="0 0 390 312">

                <defs>
                    <pattern id="rect" patternUnits="userSpaceOnUse" width="40" height="40">
                        <rect x={0} y={0} width={"100%"} height={"100%"} fill="none" stroke="#40402bbb" strokeWidth="1" />
                    </pattern>
                </defs>

                <rect x={0} y={0} width={390} height={312} fill="url(#rect)" />
            </svg>

            <h2 className="text-2xl text-center font-bold text-olive-900 font-diphylleia">Trusted & Funded By</h2>
            <div className="flex max-w-4xl flex-wrap items-center justify-center mx-auto gap-7">
                {SPONSORS.map((sponsor, index) => (
                    <div
                        key={index}
                        className="card h-18 w-auto relative
                        shadow-[0px_0px_9px_1.5px_rgba(225,225,225,0.8)]
                        sponsor-button "
                    >
                        <img
                            src={sponsor}
                            alt={`Sponsor ${index + 1}`}
                            className="w-full h-full object-contain rounded-sm"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sponsors
