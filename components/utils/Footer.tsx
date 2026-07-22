import "../../app/globals.css"

export default function Footer() {
    return (
        <div className='bg-gray-100/60 w-full mt-20 pt-5 pb-0 font-sans tracking-tight space-y-25 overflow-hidden'>

            <div className="flex justify-between px-25">
                <div className="flex flex-col items-start">
                    <img src="/logo-with-name.png" className="ml-3 h-30" />
                    <p className="max-w-xs text-md text-balance">We spread the love and knowledge of fishing to people irrespective of their age.</p>
                </div>

                <div className="flex gap-x-20 mt-8">
                    <div className="flex flex-col items-start ">
                        <h4 className="text-lg font-semibold text-olive-600">Quick Links</h4>
                        <div className="space-y-1.5 mt-2 text-sm text-black/70 *:hover:underline *:cursor-pointer">
                            <p>Products</p>
                            <p>Review</p>
                            <p>Contact</p>
                            <p>Train with us</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start ">
                        <h4 className="text-lg font-semibold text-olive-600">Company</h4>
                        <div className="space-y-1.5 mt-2 text-sm text-black/70 *:hover:underline *:cursor-pointer">
                            <p>Service</p>
                            <p>Service deatails</p>
                            <p>Project</p>
                            <p>Project Details</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start ">
                        <h4 className="text-lg font-semibold text-olive-600">Others</h4>
                        <div className="space-y-1.5 mt-2 text-sm text-black/70 *:hover:underline *:cursor-pointer">
                            <p>Blog</p>
                            <p>Blog Details</p>
                            <p>404</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start ">
                        <h4 className="text-lg font-semibold text-olive-600">Social</h4>
                        <div className="space-y-1.5 mt-2 text-sm text-black/70 *:hover:underline *:cursor-pointer">
                            <p>Facebook</p>
                            <p>Linkedin</p>
                            <p>Instagram</p>
                            <p>X</p>
                        </div>
                    </div>
                </div>
            </div>


            <h1 className="cut-text bg-linear-to-r via-olive-800 from-gray-200 to-gray-200 text-transparent bg-clip-text uppercase text-center text-[17rem] leading-none tracking-tighter font-inter-900">wildcast</h1>

        </div>
    )
}