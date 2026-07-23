import { ArrowUpRight } from "lucide-react"

interface ProductProps {
    id: number
    name: string
    price: number
    image: string
    description: string
}

function Product({ name, price, image, description }: ProductProps) {
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
                    <button className="flex bg-white text-olive-900 hover:ring hover:ring-white hover:bg-transparent hover:text-white items-center gap-2 px-4 py-2 rounded-full text-sm cursor-pointer transition-all">
                        <label className="pb-0.5 cursor-pointer">Add to Cart</label>
                        <div className="bg-olive-700 p-1.5 rounded-full">
                            <ArrowUpRight color="white" size={15} strokeWidth={2.5} />
                        </div>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Product