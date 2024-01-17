import React from 'react'
import leftimage from '../images/left-banner-image.jpg'
import womensheroimg from '../images/baner-right-image-01.jpg'
import mensheroimg from '../images/baner-right-image-02.jpg'
import kidsheroimg from '../images/baner-right-image-03.jpg'
import Accesoriesheroimg from '../images/baner-right-image-04.jpg'
import LatestProductWrapper from '../componets/LatestProductWrapper'

const Home = () => {
  return (
    <div className="flex flex-col gap-2  p-4 ">
      <div id="home" className="lg:flex gap-8   ">
        <div className="flex-1  lg:w-50 pb-10  lg:pb-0  h-[300px]  lg:h-full relative">
          <img className='object-cover w-full  h-full' src={leftimage} alt="" />
          <div className="absolute top-0 left-0 flex text-white items-center justify-center w-full h-full">
            <h1>Hire me</h1>
          </div>
        </div>

        <div className="w-50 flex-1 w-full md:grid md:grid-cols-2 gap-8">
          <div className="relative h-[200px] lg:h-full">
            <img className='w-full h-full object-cover' src={womensheroimg} alt="" />
            <div className="text-white absolute  top-0 flex-col gap-3 left-0 flex items-center justify-center w-full h-full">
              <h1 className="text-[28px] font-extrabold ">Women</h1>
              <h2 className="italic">Best Cloth for Women</h2>
            </div>
          </div>
          <div className="relative h-[200px] lg:h-full">
            <img className='w-full h-full object-cover'  src={mensheroimg} alt="" />
            <div className="absolute top-0 left-0 flex flex-col gap-3 text-white items-center justify-center w-full h-full">
              <h1 className="text-[28px] font-extrabold ">Men</h1>
              <h2 className="italic">Best Cloth for Men</h2>
            </div>
          </div>
          <div className="relative h-[200px] lg:h-full">
            <img className='w-full h-full object-cover'  src={kidsheroimg} alt="" />
            <div className="absolute top-0 left-0 flex flex-col gap-3 text-white items-center justify-center w-full h-full">
              <h1 className="text-[28px] font-extrabold ">Kids</h1>
              <h2 className="italic">Best Cloth for Kids</h2>
            </div>
          </div>
          <div className="relative h-[200px] lg:h-full">
            <img className='w-full h-full object-cover'  src={Accesoriesheroimg} alt="" />
            <div className="absolute top-0 left-0 flex flex-col gap-3 text-white items-center justify-center w-full h-full">
              <h1 className="text-[28px] font-extrabold ">Accresories</h1>
              <h2 className="italic">Best Accresories</h2>
            </div>
          </div>
        </div>
      </div>
      <LatestProductWrapper sectionName="Men's" id="men" />
      <LatestProductWrapper sectionName="Women's" id="women" />
      <LatestProductWrapper sectionName="Kid's" id="kids" />

      <div id="contact " className="h-60">
        <h1>Contact</h1>
      </div>
    </div>
  )
}

export default Home
