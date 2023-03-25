import React from 'react';

function Carousel() {
  return (
    <div className>
      <div className="flex">
      <p className="flex justify-between">{'<'}</p>
        <div className="w-1/5">
          <img className="w-[210pt] h-[211pt] px-3" src="Images/Shoe1.jpeg" alt="" />
          <h6 className=" text-[#000000] px-3 text-base mt-0">Footwear</h6>
        </div>
        <div className="w-1/5">
          <img className="w-[210pt] h-[211pt] px-3"  src="Images/Clothing.jpeg" alt="" />
          <h6 className=" text-[#000000] px-3  text-base mt-0">Clothing</h6>
        </div>
        <div className="w-1/5">
          <img className="w-[210pt] h-[211pt] px-3" src="Images/Accessories.jpeg" alt="" />
          <h6 className=" text-[#000000] px-3 text-base mt-0">Accessories</h6>
        </div>
        <div className="w-1/5">
          <img className="w-[210pt] h-[211pt] px-3"  src="Images/Bag.jpeg" alt="" />
          <h6 className=" text-[#000000] px-3 text-base mt-0">Bags</h6>
        </div>
        <div className="w-1/5">
          <img className="w-[210pt] h-[211pt] px-3"  src="Images/Watch.jpeg" alt="" />
          <h6 className=" text-[#000000] px-3 text-base mt-0">Watch</h6>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
