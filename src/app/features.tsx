import Image from "next/image";
import Link from "next/link";
import bottle from "./images/bottle.png"
import kettle from "./images/wine.png"
import borosil from "./images/Borosilicate Bottles 3.png"
import Fridge from "./images/Fridge Bottles & Jugs 2.png"
import vaccum from "./images/vaccume bottle.png"

export default function Features() {
  return (
    <div className="w-full bg-gray-900 text-white py-16">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <Image
            src={bottle}
            alt="Bottle"
            width={300}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Features List */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full">
              <Image
                src={vaccum}
                alt="Vacuum Bottles"
                width={24}
                height={24}
              />
            </div>
            <p className="text-xl">Vacuum Bottles</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full">
              <Image
                src={Fridge}
                alt="Fridge Bottles & Jugs"
                width={24}
                height={24}
              />
            </div>
            <p className="text-xl">Fridge Bottles & Jugs</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full">
              <Image
                src={borosil}
                alt="Borosilicate Bottles"
                width={24}
                height={24}
              />
            </div>
            <p className="text-xl">Borosilicate Bottles</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full">
              <Image
                src={kettle}
                alt="Kettles"
                width={24}
                height={24}
              />
            </div>
            <p className="text-xl">Kettles</p>
          </div>
        </div>
      </div>
    </div>
  );
}
