import React from "react";

const Product = ({ data, handleClick }) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 mt-16 ">
      {data.map((data) => (
        <div
          key={data.id}
          className="bg-[#eee] p-4 rounded-[20px] flex flex-col  sm:w-[200px]  w-[300px]  my-1 border-2 hover:border-blue-700  items-center"
        >
          <div className="w-[160px] h-[155px] bg-white px-5 ">
            <img
              src={data.image}
              alt="product"
              className=" w-[150px] h-[150px] object-contain "
            />
          </div>

          <div>
            <h2 className="font-medium text-base line-clamp-1 hover:line-clamp-none">
              {data.title}
            </h2>
            <div className="tracking-[2px] pb-2">${data.price}</div>
            <button
              onClick={() => {
                handleClick(data);
              }}
              className="bg-black text-[#eee] rounded-[20px] px-[10px] font-extralight cursor-pointer border-none py-[5px]"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
