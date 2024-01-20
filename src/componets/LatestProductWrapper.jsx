import React, { useEffect, useState } from 'react'
import StarRatigSvg from './StarRatigSvg'
import like from '../images/heart.png'
import cart from '../images/shopping-cart.png'
import view from '../images/eye.png'
import { Link } from 'react-router-dom'

const LatestProductWrapper = ({ sectionName, id }) => {
  const [cloths, setCloths] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      if (id) {
        const responce = await fetch(
          `https://clothx.onrender.com/api/categories/${id}/`
        )
        const data = await responce.json()
        setCloths((old) => data)
        setLoading(false)
      } else {
        const responce = await fetch(
          `https://clothx.onrender.com/api/cloth-products/`
        )
        const data = await responce.json()
        setCloths((old) => data)
        setLoading(false)
      }
    }
    getData()
  }, [id])

  console.log(cloths)

  const getFirstTwoWords = (text) => {
    const words = text.split(' ')
    if (words.length > 4) {
      return words.slice(0, 3).join(' ')
    } else {
      return words
    }
  }

  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleHover = (index) => {
    setHoveredIndex(index)
  }

  const handleLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <div id={id} className="flex flex-col gap-10 w-full  md:px-4 lg:px-6  ">
      <div className="lg:px-2 pt-40 ">
        <h1 className="text-[32px] font-bold">{sectionName} Latest</h1>
        <p className="text-sm text-gray-400 italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          asperiores nemo inventore, amet eveniet repudiandae est cumque.
        </p>
      </div>

      <div className="flex  gap-8 relative ">
        <div className="border -left-6 z-10 top-40 absolute p-3 border-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        {!loading ? (
          <div className="flex overflow-x-scroll hide-scrollbar  h-[500px] w-full  gap-8">
            {cloths?.map((product, index) => (
              <div
                key={product.id}
                className="flex h-full flex-col gap-4 relative"
              >
                <div
                  className={`relative h-[360px]   w-[340px] ${hoveredIndex === index ? 'hovered' : ''}`}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleLeave}
                >
                  <img
                    className="object-cover  h-full w-full"
                    src={`https://res.cloudinary.com/ddw1upvx3/${product?.product_images[0]?.image}`}
                    alt={product.name}
                  />
                  <div className=" lg:hidden absolute  bottom-10 flex gap-3 w-full justify-center">
                    <Link to={`/product/${product.id}`}>
                      <div className="bg-white">
                        <img className="h-12 w-12 p-2" src={view} alt="" />
                      </div>
                    </Link>
                    <div className="bg-white">
                      <img className="h-12 w-12 p-2" src={like} alt="" />
                    </div>
                    <Link to={`/product/${product.id}`}>
                      <div className="bg-white">
                        <img className="h-12 w-12 p-2" src={cart} alt="" />
                      </div>
                    </Link>
                  </div>
                  {hoveredIndex === index && (
                    <div className="absolute  bottom-10 flex gap-3 w-full justify-center">
                      <Link to={`/product/${product.id}`}>
                        <div className="bg-white">
                          <img className="h-12 w-12 p-2" src={view} alt="" />
                        </div>
                      </Link>
                      <div className="bg-white">
                        <img className="h-12 w-12 p-2" src={like} alt="" />
                      </div>
                      <Link to={`/product/${product.id}`}>
                        <div className="bg-white">
                          <img className="h-12 w-12 p-2" src={cart} alt="" />
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
                <div className="flex  justify-between ">
                  <div className="flex flex-col -my-2 gap-1">
                    <h4 className="text-[23px]  font-bold">
                      {getFirstTwoWords(product.name)}..
                    </h4>
                    <h5 className="text-gray-400 text-[18px] font-medium">
                      ${product.price}.00
                    </h5>
                  </div>
                  <div className="flex gap-1">
                    <StarRatigSvg />
                    <StarRatigSvg />
                    <StarRatigSvg />
                    <StarRatigSvg />
                    <StarRatigSvg />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[500px] w-full bg-[#DBDBDBE6] text-[29px]  md:text-[32px] lg:text-[36px] font-bold italic text-white flex items-center justify-center">
            loading...
          </div>
        )}
        <div className="border -right-6 top-40 absolute p-2 md:p-3  border-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5 md:w-6 mdh-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default LatestProductWrapper
