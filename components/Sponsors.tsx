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
    return (
        <div className=" py-20 space-y-12 relative">

            {/* <div className="size-120 bg-white absolute top-1/2 -translate-y-1/2 right-30 z-20 rounded-full blur-2xl" /> */}

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
                    <div key={index} className="h-18 w-auto
                    shadow-[0px_0px_9px_1.5px_rgba(225,225,225,0.8)]
                    ">
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
