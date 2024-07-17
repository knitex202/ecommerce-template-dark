import Image from "next/image";
import Container from "../Container";
import { setInterval } from "timers";

const Banner = () => {
  return (
    <div className="w-full h-screen bg-slate-950">
      <Container>
        <div className="pt-[10%] flex flex-col md:flex-row items-center justify-center ">
          <div className="w-64 md:w-[600px] text-3xl md:text-4xl lg:text-6xl font-bold">
            <h1>
              Level Up Your gaming as you Upgrade for Your{" "}
              <span className=" text-4xl md:text-5xl lg:text-7xl text-orange-600">
                Stream
              </span>
            </h1>
          <div className="flex flex-col md:flex-row w-96 justify-between">
            <button className="bg-sky-700 hover:bg-sky-900 rounded-xl text-base md:text-xl lg:text-2xl text-white px-4 py-4 mt-4 transition ease-in-out duration-500">
              Shop Now
            </button>
            <button className="bg-white hover:bg-slate-200 rounded-xl text-base md:text-xl lg:text-2xl text-sky-600 px-4 py-4 mt-4 transition ease-in-out duration-500">
              Shop Our Sales
            </button>
          </div>
          </div>

          <div className="w-64 md:w-96 h-full overflow-hidden ">
            <Image
              className="object-cover"
              src="/gamingCartoon.png"
              alt="Gaming Cartoon"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
