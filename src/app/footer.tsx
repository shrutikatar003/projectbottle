
import footer from "./Image/footer.png";
import first from "./Image/ani1.png";
import secound from "./Image/ani2.png";
import third from "./Image/ani3.png";
import fourth from "./Image/ani4.png";
import fifth from "./Image/ani5.png";
import logo2 from "./Image/logo2.png";
import Frame from "./Image/Frame 12.png";
import Frame2 from "./Image/Frame 13.png";
import Frame3 from "./Image/Group 9.png";
import Image from "next/image";
export default function Home() {
  return (
    
      <main >
        
    <div className="flex flex-row w-full overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory">
  <div className="flex-shrink-0 w-full h-screen  snap-start flex justify-center items-center text-white text-4xl font-bold">
  <Image src={footer}
        alt=""
        />
  </div>
  <div className="flex-shrink-0 w-full h-screen  snap-start flex justify-center items-center text-white text-4xl font-bold">
  <Image src={first}
        alt=""
        
        />
  </div>
  <div className="flex-shrink-0 w-full h-screen  snap-start flex justify-center items-center text-white text-4xl font-bold">
  <Image src={secound}
        alt=""
        
        />
  </div>
  <div className="flex-shrink-0 w-full h-screen  snap-start flex justify-center items-center text-white text-4xl font-bold">
  <Image src={third}
        alt=""
        
        />
  </div>
  <div className="flex-shrink-0 w-full h-screen  snap-start flex justify-center items-center text-white text-4xl font-bold">
  <Image src={fourth}
        alt=""
        
        />
  </div>
  <div className="flex-shrink-0 w-full h-screen  snap-start flex justify-center items-center text-white text-4xl font-bold">
  <Image src={fifth}
        alt=""
        
        />
  </div>
  <div className="h-60 w-full bg-background: #201F1F;
">
  <div className="pt10 ">
<Image  src={logo2}
          width={130}
          height={70}
          alt="nav"
          />
          </div>
</div>
</div>
<div className="h-52 w-full bg-background: #201F1F;
">
  <div className="ml-20 flex justify-around">
<Image  src={logo2}
          width={130}
          height={70}
          alt="nav"
          />
          <div className="flex justify-evenly gap-10">
            <h2>Shop</h2>
            <h2>Contact Us</h2>
            <h2>About</h2>
            <h2>Journal</h2>
            <h2>Custom</h2>
          </div>
          </div>
          <div className="flex justify-around">
          <div className="ml-48 mt-16  flex gap-4">
          <Image  src={Frame}
          width={22}
          height={15}
          alt="nav"
          />
          <Image  src={Frame2}
          width={22}
          height={15}
          alt="nav"
          />
          <Image  src={Frame3}
          width={22}
          height={15}
          alt="nav"
          />
          </div>
          <div className="flex gap-4 ml-60 mt-16">
          <h2>FAQ's</h2>
          <h2>Returns</h2>
          <h2>Ordering</h2>
          <h2>Shippping</h2>
          <h2>Personalization Polices</h2>
          </div>
          </div>
          <div className="h-10 w-full bg-gray-900

mt-20 pt-5 items-center">
<h4 className="flex items-center justify-center mb-10 ">Copyright © 2023  BOTOL. All Rights Reserved.</h4>
          </div>
</div>
      </main>
      

  );
}

