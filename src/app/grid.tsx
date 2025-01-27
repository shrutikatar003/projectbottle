import Image from "next/image"
import img1 from "./images/1.png"
import img2 from "./images/3 1.png"
import img3 from "./images/4.png"

export default function HydrationEssentials() {
  const products = [
    {
      id: 1,
      image: img1,
      variant: "turquoise",
      background: "dark",
    },
    {
      id: 2,
      image: img3,
      variant: "olive",
      background: "light",
    },
    {
      id: 3,
      image: img2,
      variant: "gray",
      background: "light",
    },
    {
      id: 4,
      image: img3,
      variant: "blue",
      background: "light",
    },
    {
      id: 5,
      image: img1,
      variant: "turquoise",
      background: "dark",
    },
    {
      id: 6,
      image: img2,
      variant: "olive",
      background: "light",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black p-6 md:p-8 lg:p-12">
      <header className="flex justify-between items-start mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Hydration Essentials</h1>
          <p className="text-lg md:text-xl text-gray-400">Discover Our Range of Premium Water Bottles</p>
        </div>
        <button className="bg-[#00D1FF] hover:bg-[#00B8E6] text-white px-6 py-2 rounded-full transition-colors">
          VIEW MORE
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative overflow-hidden rounded-3xl ${
              product.background === "dark" ? "bg-[#1a1a1a]" : "bg-[#f5f5f5]"
            }`}
          >
            <div className="aspect-square relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={`${product.variant} water bottle`}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6">
              <button className="bg-[#00D1FF] hover:bg-[#00B8E6] text-white px-6 py-2 rounded-full transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

