import React from 'react';

function WhiteNavbar() {
  return (
    <nav className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src="Images/logo.png" alt="Logo" />
          </div>
          <form className="flex-grow ml-4 lg:ml-0">
            <div className=" px-3 relative flex w-full lg:w-auto">
              <input
                className="block w-full lg:w-[381pt] rounded-md h-[36pt] bg-[#F1F1F1] py-3 pr-4 pl-10 placeholder-gray-500 text-gray-900 focus:outline-none focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm border-0"
                type="text"
                placeholder="Search Product..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" top-0 bottom-0 w-6 h-6 my-auto ml-1 text-gray-400 right-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default WhiteNavbar;
