import { Carousel } from "antd";
function Advertise() {
  return (
    <div className="mt-[100px] w-[100vw] phone:mt-[150px] tablet:mt-[150px]">
      <div className=" flex flex-col m-auto">
        <h1 className="font-bold text-xl text-[#675D50] text-center underline py-[10px]">
          Advertise
        </h1>
        <div className="animate-fadeIn h-fit w-[80%] bg-[#CADABF] m-auto px-1 py-[10px] ">
          <Carousel
            autoplay
            className="w-[80%] h-[300px] bg-[#675D50] m-auto phone:h-[200px]"
          >
            <div className="w-[80%] h-[300px] bg-indigo-300 opacity-50 m-auto pb-5  phone:h-[200px]">
              <h1 className="text-white font-bold text-2xl text-center ">
                Advertise 1
              </h1>
            </div>
            <div className="w-[80%] h-[300px] bg-pink-300 opacity-50 m-auto pb-5  phone:h-[200px]">
              <h1 className="text-white font-bold text-2xl text-center ">
                Advertise 2
              </h1>
            </div>
            <div className="w-[80%] h-[300px] bg-yellow-300 opacity-50 m-auto pb-5  phone:h-[200px]">
              <h1 className="text-white font-bold text-2xl text-center ">
                Advertise 3
              </h1>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Advertise;
