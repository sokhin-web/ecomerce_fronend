import { Select } from "antd";
import Search from "antd/es/transfer/search";
import Link from "antd/es/typography/Link";
import {
  RiCarFill,
  RiFacebookBoxFill,
  RiHeart2Fill,
  RiInstagramFill,
  RiPhoneFill,
  RiShoppingCart2Fill,
  RiTelegramFill,
  RiYoutubeFill,
} from "react-icons/ri";

function Navbar() {
  return (
    <div className="fixed top-0 z-50 w-full h-fit shadow-sm shadow-[#675D50]">
      <div className="bg-[#675D50] text-[#E7E8D8] h-fit flex flex-row justify-between px-[20px] py-1 text-lg phone:px-1 ">
        <div className="flex flex-row items-center gap-1 italic text-lg">
          <RiPhoneFill className="animate-spin" />
          <p>010895335</p>
          <RiCarFill />
          <p className="phone:hidden tablet:hidden">
            {" "}
            / Delivery within 2 hours / Delivery 25 Provinces
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <RiFacebookBoxFill className="text-2xl hover:opacity-70 duration-200 cursor-pointer" />
          <RiYoutubeFill className="text-2xl hover:opacity-70 duration-200 cursor-pointer" />
          <RiTelegramFill className="text-2xl hover:opacity-70 duration-200 cursor-pointer" />
          <RiInstagramFill className="text-2xl hover:opacity-70 duration-200 cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-row justify-evenly px-[50px] py-2 items-center bg-[#CADABF] phone:px-1 phone:flex-wrap phone:justify-stretch phone:gap-1 tablet:flex-wrap  ">
        <Link href="/">
          <div className="text-3xl font-bold text-[#675D50] cursor-pointer phone:text-lg ">
            LOGO
          </div>
        </Link>
        <div className="flex flex-row items-center gap-2">
          <Select
            defaultValue="all_category"
            options={[
              { value: "all_category", label: "All Category" },
              { value: "car", label: "Car" },
              { value: "motor", label: "Motor" },
              { value: "bike", label: "Bike" },
              { value: "laptop", label: "Laptop" },
              { value: "phone", label: "Phone" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
            className="w-[200px]  "
          />
          <Search
            placeholder="search product"
            //onSearch={onSearch}
          />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <span className="text-orange-500 font-bold hover:opacity-70 duration-200 cursor-pointer ">
            Login
          </span>{" "}
          or{" "}
          <span className="text-orange-500 font-bold hover:opacity-70 duration-200 cursor-pointer">
            Register
          </span>
          <div className="ml-5 flex flex-row gap-2">
            <RiHeart2Fill className="text-xl text-[#675D50] hover:opacity-70 duration-200 cursor-pointer" />
            <RiShoppingCart2Fill className="text-xl text-[#675D50] hover:opacity-70 duration-200 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
