export default function Header() {
    return (
        <div className="bg-white/70 border-b border-b-olive-600/90 backdrop-opacity-50 backdrop-blur-xs fixed top-0 left-0 right-0 z-50 h-15 flex items-center justify-around text-olive-900 font-diphylleia">
            <div className="text-2xl">WildCast Co.</div>
            <div>
                <ul className="text-sm flex space-x-5">
                    <li>Products</li>
                    <li>Reviews</li>
                    <li>Contact</li>
                    <li>Train with us</li>
                </ul>
            </div>
            <div>
                <button className="cursor-pointer text-white/90 bg-olive-950 font-diphylleia px-6 py-1.5 pb-2 rounded-lg hover:border hover:border-olive-950 hover:text-olive-950 hover:bg-transparent">Shop Now </button>
            </div>
        </div>
    )
}