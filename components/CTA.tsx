import { MessageCircle, Search, SquareArrowOutUpRight, Upload } from "lucide-react"

const phoneImages = [
    "/phone/1.webp",
    "/phone/2.webp",
    "/phone/3.webp",
    "/phone/4.webp",
    "/phone/5.webp"
]

function CTA() {
    return (
        <div className='h-full w-full'>
            <div className='flex justify-between relative shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] min-h-[50vh] max-w-6xl mx-auto overflow-hidden rounded-xl'>

                <div className="absolute inset-0 bg-olive-700 [clip-path:polygon(0_0,58%_0,42%_100%,0_100%)]" />

                <div className="z-40 font-diphylleia flex flex-col gap-7 justify-center ml-15">
                    <h1 className='text-white text-4xl max-w-md tracking-tighter'>Register for a free 3-day trial session and get a tackle kit for free.</h1>
                    <button className="cursor-pointer text-white/90 bg-olive-950 font-diphylleia px-6 py-1.5 pb-2 rounded-lg hover:border hover:border-olive-950 hover:text-olive-950 hover:bg-transparent w-fit">Register now</button>
                </div>


                <div className="relative ">

                    <div className="w-60 h-90 shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] bg-gray-200/50 rounded-md space-y-2 absolute top-25 right-50 -rotate-20 border-3 p-1.5">

                        <div className="absolute left-[-7.5px] top-20 space-y-1">
                            <div className="w-1 h-9 rounded-l-2xl bg-linear-to-t from-gray-200 via-25% via-olive-900 to-99% to-gray-200" />
                            <div className="w-1 h-9 rounded-l-2xl bg-linear-to-t from-gray-200 via-25% via-olive-900 to-99% to-gray-200" />
                        </div>

                        <div className="w-full flex items-center justify-between px-3 h-10 bg-linear-to-r from-fuchsia-700 via-amber-600 to-red-500 rounded-sm">
                            <h1 className="font-diphylleia text-white text-2xl">Gallery</h1>
                            <div className="text-white flex space-x-1.5">
                                <Upload size={20} color="currentColor" />
                                <Search size={20} color="currentColor" />
                                <MessageCircle size={20} color="currentColor" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-[repeat(5,5rem)] gap-2 *:shadow-[0_0_3px_0.5px_rgba(0,0,0,0.1)]">
                            <div className="row-span-2">
                                <img src={phoneImages[0]} className="rounded-sm w-full h-full object-cover" />
                            </div>
                            <div className="">
                                <img src={phoneImages[1]} className="rounded-sm w-full h-full object-cover" />
                            </div>
                            <div className="">
                                <img src={phoneImages[2]} className="rounded-sm w-full h-full object-cover" />
                            </div>
                            <div className="">
                                <img src={phoneImages[3]} className="rounded-sm w-full h-full object-cover" />
                            </div>
                            <div className="">
                                <img src={phoneImages[4]} className="rounded-sm w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="w-60 h-90 shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] bg-white rounded-lg absolute top-15 right-20 rotate-5 border-3 border-olive-700">
                        <div className="w-full h-full relative">

                            <div className="absolute left-[-7.5px] top-20 space-y-1">
                                <div className="w-1 h-9 rounded-l-2xl bg-linear-to-t from-gray-200 via-25% via-olive-900 to-99% to-gray-200" />
                                <div className="w-1 h-9 rounded-l-2xl bg-linear-to-t from-gray-200 via-25% via-olive-900 to-99% to-gray-200" />
                            </div>

                            <div className="w-full flex justify-between items-center px-2 h-13 rounded-t-md bg-green-400 ">
                                <div className="flex items-center gap-2">
                                    <img src="/testimonials/fishing-profile-pic.webp" className="size-8 rounded-full" />
                                    <h4 className="font-sans font-medium text-sm text-white">WildCast Anglers</h4>
                                </div>
                                <div className="flex flex-col gap-0.5 pr-2">
                                    <div className="size-1 rounded-full bg-white" />
                                    <div className="size-1 rounded-full bg-white" />
                                    <div className="size-1 rounded-full bg-white" />
                                </div>
                            </div>

                            <div className="text-xs font-sans space-y-2 px-2 pt-2.5">
                                <div className="flex flex-col items-end">
                                    <h6 className="bg-gray-200/70 p-2 rounded-md w-40">Guys, register for the evening session</h6>
                                    <button className="bg-gray-700 flex items-center gap-1 underline text-white px-2 py-1.5 rounded-md mt-1">
                                        Register
                                        <SquareArrowOutUpRight size={11} />
                                    </button>
                                </div>
                                <div className="bg-sky-400 text-white p-2 rounded-md font-medium w-19 text-center">
                                    <h6>Done 👍</h6>
                                </div>
                                <div className="p-2 bg-emerald-400 text-white font-medium rounded-md w-32">
                                    <h6>What's the timing?</h6>
                                </div>
                                <div className="p-2 bg-pink-400 text-white font-medium rounded-md w-14 text-center">
                                    <h6>Done</h6>
                                </div>
                                <div className="p-2 bg-red-400 text-white font-medium rounded-md w-37">
                                    <h6>Can I join morning session?</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CTA