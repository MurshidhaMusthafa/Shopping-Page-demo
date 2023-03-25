import React from 'react';


function ImageGrid() {
  return (
   
    <div className='bg-white w-[1116pt] h-[369pt]'>
    <div className='flex'>
    <h5 className=' ml-[26pt] mt-2'>New Arrivals...</h5>
    <a href="#" className=' text-red-500 no-underline text-right' >See All  </a>
    </div>
    <div className="flex justify-center ">
      <div className="w-1/5 p-2">
        <img className="w-[199pt] h-[200pt]" src="Images/Shoe1.jpeg" alt="" />
        <h6 className=" text-[#9A9A9A] text-sm ">ID334490</h6>
        <h6 className=" text-[#000000]  text-base mt-0">Nike Sports Shoes...</h6>

      </div>
      <div className="w-1/5 p-2">
        <img className="w-[199pt] h-[200pt]" src="Images/Shoe2.jpeg" alt="" />
        <h6 className=" text-[#9A9A9A] text-sm">ID334490</h6>
        <h6 className=" text-[#000000]  text-base mt-0">Nike Sports Shoes...</h6>
      </div>
      <div className="w-1/5 p-2">
        <img className="w-[199pt] h-[200pt]" src="Images/Shoe3.jpeg" alt="" />
        <h6 className=" text-[#9A9A9A] text-sm">ID334490</h6>
        <h6 className=" text-[#000000]  text-base mt-0">Nike Sports Shoes...</h6>
      </div>
      <div className="w-1/5 p-2">
        <img className="w-[199pt] h-[200pt]" src="Images/Shoe4.jpeg" alt="" />
        <h6 className=" text-[#9A9A9A] text-sm">ID334490</h6>
        <h6 className=" text-[#000000]  text-base mt-0">Nike Sports Shoes...</h6>
      </div>
      <div className="w-1/5 p-2">
      <img className="w-[199pt] h-[200pt]" src="Images/Shoe5.jpeg" alt="" />
      <h6 className=" text-[#9A9A9A] text-sm">ID334490</h6>
      <h6 className=" text-[#000000]  text-base mt-0">Nike Sports Shoes...</h6>
    </div>
    </div>
    </div>
  );
}

export default ImageGrid;
