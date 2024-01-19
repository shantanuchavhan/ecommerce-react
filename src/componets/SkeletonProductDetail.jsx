import React from 'react'

const SkeletonProductDetail = () => {
  return (
    <div className="md:flex md:gap-10 px-8 py-3 md:px-24 md:py-6 lg:px-32 lg:py-10">
      <div className="flex pb-8 md:pb-0 md:flex-col gap-3 w-full md:gap-8 w-2/6 ">
        <div className="h-[200px] w-[200px] bg-[#DBDBDBE6] font-bold italic text-white flex items-center justify-center">
          loading..
        </div>
        <div className="h-[200px] w-[200px] bg-[#DBDBDBE6] text-white font-bold italic flex items-center justify-center">
          loading..
        </div>
      </div>
      <div className="flex flex-col gap-7 w-4/5 ">
        <div className="flex w-full h-20 items-start bg-[#DBDBDBE6] font-bold italic text-white flex items-center justify-center">
          Loading...
        </div>
        <div className="w-full bg-gray-200 h-[0.2px]"></div>
        <div className="skeleton-item w-12/13 h-32 items-start bg-[#DBDBDBE6] font-bold italic  text-white flex items-center justify-center ">
          Loading...
        </div>
        <div className="w-full bg-gray-200 h-[0.2px]"></div>
        <div className="flex justify-between">
          <div className="text-[#AAAAAA] font-bold text-[20px] italic">
            No. of orders
          </div>
          <div className="flex">
            <div className="skeleton-item w-8 h-8"></div>
            <div className="skeleton-item w-8 h-8"></div>
            <div className="skeleton-item w-8 h-8"></div>
          </div>
        </div>
        <div className="w-full bg-gray-200 h-[0.2px]"></div>
        <div className="flex justify-between items-center">
          <div className="text-[#AAAAAA] font-bold text-[20px] italic">
            Total: $
          </div>
          <div className="text-gray-400 border border-gray-300 p-3 cursor-pointer">
            <h1 className="font-bold">Add to cart</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonProductDetail
