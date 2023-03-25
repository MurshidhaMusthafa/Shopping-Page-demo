import React from "react";

function Category() {
  return (
    <div className="bg-gray-200">
      <h5 className=" font-bold pt-2 px-4">Shop By Category</h5>
      <div className="flex justify px-5">
        <button className="w-[168pt] bg-light  font-bold rounded-full focus:outline-none">
          Men
        </button>
        <button className="w-[168pt] h-[48pt] ml-3 bg-light  font-bold rounded-full hover:bg-green-600 focus:outline-none">
          Woman
        </button>
        <button className="w-[168pt] h-[48pt] ml-3 bg-light  font-bold rounded-full hover:bg-red-600 focus:outline-none">
          Unisex
        </button>
      </div>
      <br></br>
      <br></br>
    </div>
    
  );
}

export default Category;
