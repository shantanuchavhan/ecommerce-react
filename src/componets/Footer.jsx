import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex  px-16 w-full ">
        <div className="flex gap-10  py-10 border-b-2 border-gray-300  w-full">
          <div className="">shantanuchavhan002@gmail.com</div>
          <div className="flex flex-col gap-3">
            <h1 className="pb-1 font-bold">Shopping Categories</h1>
            <h1>Men,s Shopping </h1>
            <h1>women,s Shopping</h1>
            <h1>kid's Shopping</h1>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="pb-1 font-bold">Homepage</h1>
            <h1>About Us </h1>
            <h1>Help</h1>
            <h1>Contact Us</h1>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="pb-1 font-bold">Shopping Categories</h1>
            <h1>Help </h1>
            <h1>FAQ's</h1>
            <h1>Shipping</h1>
            <h1>Tracking ID</h1>
          </div>
        </div>
      </div>
      <div className="text-center w-full p-10">
        <p>Copyrights @ 2024 ClothX Co, ltd. All Rights Reserved </p>
        <p>
          Designed by:{' '}
          <a href="#contact" title="Home">
            shantanu
          </a>
        </p>
        <p>
          Web devloper: <a href="#contact">shantanu</a>
        </p>
      </div>
    </div>
  )
}

export default Footer
