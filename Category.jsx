import image1 from "../assets/images/motor1.jpg";
import image2 from "../assets/images/car1.jpg";
import image3 from "../assets/images/bike1.jpg";
import image4 from "../assets/images/laptop1.jpg";
import image5 from "../assets/images/phone1.jpg";
function Category() {
  const categoryData = [
    {
      id: 1,
      name: "Motor",
      image: image1,
    },
    {
      id: 2,
      name: "Car",
      image: image2,
    },
    {
      id: 3,
      name: "Bike",
      image: image3,
    },
    {
      id: 4,
      name: "Laptop",
      image: image4,
    },
    {
      id: 5,
      name: "Phone",
      image: image5,
    },
  ];
  return (
    <div className="mt-[100px] ">
      <div>
        <h1 className="font-bold text-xl text-[#675D50] text-center underline pb-[10px]">
          Category
        </h1>

        <div className=" flex flex-row animate-fadeIn  flex-wrap justify-center gap-2 py-[10px]">
          {categoryData.map((category) => (
            <div
              key={category.id}
              className="w-fit h-fit my-[10px] bg-[#CADABF] rounded-md shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-10 duration-200 linear"
            >
              <div className="text-white text-center w-[100px] h-[100px] bg-white m-auto rounded-t-md">
                <img
                  src={category.image}
                  alt=""
                  className="h-[100px] m-auto rounded-t-md"
                />
              </div>
              <p className="text-center py-[5px]">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Category;
