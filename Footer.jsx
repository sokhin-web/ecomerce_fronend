import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiMailAddFill,
  RiPhoneFill,
  RiTelegramFill,
  RiYoutubeFill,
} from "react-icons/ri";

function Footer() {
  return (
    <div className="bg-gradient-to-b from-[#675D50] to-[#CADABF] w-full h-[250px] mt-[300px]  rounded-t-full phone:rounded-t-xl phone:mt[50px] tablet:rounded-t-xl ">
      <div className="flex flex-row justify-center items-center gap-[200px]  px-10 py-5  phone:gap-0 phone:px-5 phone:justify-evenly">
        <div className="flex flex-col gap-3 mt-[50px]">
          <h1 className="text-xl font-bold">Follow Us</h1>
          <div>
            <div className="flex flex-row gap-2 text-[#E7E8D8]">
              <RiFacebookBoxFill className="text-2xl text-blue-500 hover:opacity-70 duration-200 cursor-pointer" />
              <p>Facebook</p>
            </div>
            <div className="flex flex-row gap-2 text-[#E7E8D8]">
              <RiYoutubeFill className="text-2xl text-red-500 hover:opacity-70 duration-200 cursor-pointer" />
              <p>Youtube</p>
            </div>
            <div className="flex flex-row gap-2 text-[#E7E8D8]">
              <RiInstagramFill className="text-2xl text-purple-500 hover:opacity-70 duration-200 cursor-pointer" />
              <p>Instagram</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-[50px]">
          <h1 className="text-xl font-bold">Contact Us</h1>
          <div>
            <div className="flex flex-row gap-2 text-[#E7E8D8]">
              <RiTelegramFill className="text-2xl text-sky-600 hover:opacity-70 duration-200 cursor-pointer" />
              <p>Telegram</p>
            </div>
            <div className="flex flex-row gap-2 text-[#E7E8D8]">
              <RiPhoneFill className="text-2xl text-green-800 hover:opacity-70 duration-200 cursor-pointer" />
              <p>010895335</p>
            </div>
            <div className="flex flex-row gap-2 text-[#E7E8D8]">
              <RiMailAddFill className="text-2xl text-orange-500 hover:opacity-70 duration-200 cursor-pointer" />
              <p className="phone:text-wrap">sokhinsing04@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
