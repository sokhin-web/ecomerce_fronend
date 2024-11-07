import { RiHeart2Fill, RiShoppingBasket2Fill } from "react-icons/ri";
import image1 from "../assets/images/p_bike1.jpg";
import image2 from "../assets/images/p_car1.jpg";
import image3 from "../assets/images/p_laptop1.jpg";
import image4 from "../assets/images/p_motor1.jpg";
import image5 from "../assets/images/p_phone1.jpg";
//productData: image,price, name,id
const productData = [
  {
    id: 1,
    image: image1,
    price: 200,
  },
  {
    id: 2,
    image: image2,
    price: 50000,
  },
  {
    id: 3,
    image: image3,
    price: 900,
  },
  {
    id: 4,
    image: image4,
    price: 3000,
  },
  {
    id: 5,
    image: image5,
    price: 1000,
  },
];
function Product() {
  return (
    <div className="mt-[100px] cursor-pointer">
      <div>
        <h1 className="font-bold text-xl text-[#675D50] text-center underline pb-[10px]">
          Product
        </h1>

        <div className=" animate-fadeIn flex flex-row flex-wrap justify-center gap-2 py-[10px] ">
          {productData.map((product) => (
            <div
              key={product.id}
              className="w-fit h-fit my-[10px] bg-[#CADABF] rounded-md pt-5 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-10 duration-200 linear"
            >
              <div className="text-white text-center w-[200px] h-fit bg-white m-auto rounded-t-md">
                <img src={product.image} alt="" className=" h-[200px] " />
              </div>
              <div className="py-[5px] mx-[10px] flex flex-row justify-between items-center">
                <p>{product.price}$</p>
                <div className="flex flex-row gap-2">
                  <RiHeart2Fill className="text-gray-200 hover:text-red-500 font-bold  duration-200 cursor-pointer" />
                  <RiShoppingBasket2Fill className="text-orange-500 font-bold hover:opacity-70 duration-200 cursor-pointer" />
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
