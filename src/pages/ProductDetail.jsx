import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import StarRatigSvg from '../componets/StarRatigSvg'
import SkeletonProductDetail from '../componets/SkeletonProductDetail'
import { useCart } from '../context/CartContext'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const ProductDetail = () => {
  const { id } = useParams()
  const { dispatch } = useCart()

  const [productDetails, setProductDetails] = useState('')
  const [itemCount, setItemCount] = useState(1)
  const [loading, setLoading] = useState(false)
  const [imageCount, setImageCount] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      setLoading((old) => true)
      const responce = await fetch(
        `http://127.0.0.1:8000/api/cloth_products/${id}/`
      )
      const data = await responce.json()
      setProductDetails((old) => data)
      setLoading((old) => false)
    }

    fetchData()
  }, [id])

  const notify = () => toast.success('Added to cart')

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, itemCount } })
    notify()
  }

  if (loading) {
    return <SkeletonProductDetail />
  } else {
    return (
      <div className="md:flex gap-8 px-8 py-3 md:px-24 md:py-6 lg:px-32 lg:py-10">
        <ToastContainer position="top-right" />
        <div className="flex pb-8 md:pb-0 md:flex-col gap-3 w-full md:gap-8 ">
          {productDetails?.product_images?.length > 0 && (
            <div className="w-full md:min-h-[300px] md:min-w-[260px] ">
              <img
                className="object-cover   h-[180px] w-full md:h-full  md:w-full"
                src={`https://res.cloudinary.com/ddw1upvx3/${productDetails.product_images[0].image}`}
                alt="Product"
              />
            </div>
          )}

          {productDetails?.product_images?.length > 0 && (
            <div className="relative ">
              {imageCount > 1 && (
                <div
                  onClick={() => setImageCount((old) => old - 1)}
                  className="border  z-10 items-center -left-6 top-24 absolute p-2 border-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                </div>
              )}
              <div className="w-full h-full md:min-h-[300px] md:min-w-[260px] ">
                <img
                  className=" object-cover   h-[180] w-full md:h-full  md:w-full"
                  src={`https://res.cloudinary.com/ddw1upvx3/${productDetails?.product_images[imageCount].image}`}
                  alt="Product"
                />
              </div>
              {imageCount < productDetails.product_images.length - 1 && (
                <div
                  onClick={() => setImageCount((old) => old + 1)}
                  className="border -right-6 top-24 absolute p-2  border-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col pb-8 md:pb-0 gap-7">
          <div className="flex items-start">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-[20px]  md:text-[24px] lg:text-[28px] text-gray-700">
                {productDetails?.name}
              </h1>
              <h2 className="text-[#AAAAAD] font-bold text-[20px]  md:text-[24px] lg:text-[28px]">
                ${productDetails.price}.00
              </h2>
            </div>

            <div className="flex gap-1 pt-4">
              <StarRatigSvg />
              <StarRatigSvg />
              <StarRatigSvg />
              <StarRatigSvg />
              <StarRatigSvg />
            </div>
          </div>
          <div className="w-full bg-gray-200 h-[0.2px]"></div>
          <h1 className="text-[#AAAAAD] font-semibold">
            {productDetails?.description}
          </h1>
          <div className="w-full bg-gray-200 h-[0.2px]"></div>
          <div className="flex justify-between">
            <h1 className="text-[#AAAAAA] font-bold text-[20px] italic">
              No. of orders
            </h1>
            <div className="flex">
              <div
                className="p-2 px-4 border border-gray-[1px] cursor-pointer"
                onClick={() =>
                  setItemCount((old) => {
                    if (old > 1) {
                      return old - 1
                    } else {
                      return 1
                    }
                  })
                }
              >
                -
              </div>
              <div className="p-2 px-4 border border-gray-[1px] italic">
                {itemCount}
              </div>
              <div
                className="p-2 px-4 border border-gray-[1px] cursor-pointer "
                onClick={() => setItemCount((old) => old + 1)}
              >
                +
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-[0.2px]"></div>
          <div className="flex justify-between items-center">
            <h1 className="text-[#AAAAAA] font-bold text-[20px] italic">
              Total: ${productDetails.price * itemCount}
            </h1>
            <div className="text-gray-800 border border-gray-800 p-3 cursor-pointer">
              <h1
                onClick={() => addToCart(productDetails)}
                className="font-bold "
              >
                Add to cart
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail
