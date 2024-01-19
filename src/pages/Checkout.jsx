import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import emptyimg from '../images/kettle-desaturated._CB424694257_.svg'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const { cartState, dispatch } = useCart()
  const [selectedItem, setSelectedItem] = useState()

  useEffect(() => {
    console.log(cartState)
    setSelectedItem(cartState.items)
  }, [cartState])
  console.log(selectedItem)
  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getFirstFiveWords = (text) => {
    const words = text.split(' ')
    if (words.length > 4) {
      return words.slice(0, 6).join(' ')
    } else {
      return words
    }
  }

  const totalAmount = selectedItem?.reduce((total, item) => {
    const itemPrice = parseFloat(item.price) // Convert the price to a number
    const itemTotal = itemPrice * item.itemCount
    return total + itemTotal
  }, 0)

  return (
    <div className="px-4 md:px-20 lg:px-32 py-4 md:py-6 md:py-20 lg:py-22">
      {cartState.items.length > 0 ? (
        <div className="md:flex justify-between gap-4 p-4 min-h-[60vh]  md:border-t">
          <ul className="pb-4 md:pb-0 w-full md:w-[70%] ">
            <h1 className="flex justify-between py-3">
              <div className="flex gap-2 items-center text-sm">
                {selectedItem?.length !== 0 ? (
                  <div className="border h-[15px] w-[15px] rounded-[4px] border-gray-700 overflow-hidden flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 bg-red-400 p-[1px] text-white"
                      onClick={() => setSelectedItem([])}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                ) : (
                  <div
                    className=" border h-[15px] w-[15px] rounded-[4px] border-gray-700 overflow-hidden "
                    onClick={() => {
                      setSelectedItem(cartState.items)
                    }}
                  ></div>
                )}

                <h1 className="font-bold text-gray-700">
                  {selectedItem?.length}/{cartState?.items?.length} ITEMS
                  SELECTED{' '}
                </h1>
              </div>
              <button onClick={clearCart} className="text-sm text-gray-500">
                REMOVE ALL
              </button>
            </h1>
            <div className="flex flex-col gap-4">
              {cartState.items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 py-2 px-2 rounded-lg border border-red-300 relative"
                >
                  <div className="relative">
                    {selectedItem?.some(
                      (selectedItem) => selectedItem.id === item.id
                    ) ? (
                      <div
                        className="absolute left-[4px] overflow-hidden top-[4px] rounded-[2px] border border-gray-600 h-[12px] bg-white w-[12px] bg-red-400 flex items-center justify-center"
                        onClick={() => {
                          const updatedSelectedItems = selectedItem.filter(
                            (selected) => selected.id !== item.id
                          )
                          setSelectedItem(updatedSelectedItems)
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-2 h-2 text-white  flex items-center justify-center"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div
                        className="absolute left-[4px] overflow-hidden top-[4px] rounded-[2px] border border-gray-600 h-[12px] bg-white w-[12px]"
                        onClick={() => {
                          const updatedSelectedItems = [...selectedItem, item]
                          setSelectedItem(updatedSelectedItems)
                        }}
                      ></div>
                    )}

                    <img
                      className="object-cover  h-[100px] w-[100px] rounded "
                      src={`https://res.cloudinary.com/ddw1upvx3/${item?.product_images[0]?.image}`}
                      alt={item?.name}
                    />
                  </div>
                  <div>
                    <h1 className="text-sm w-[80%]">
                      {getFirstFiveWords(item.name)}...
                    </h1>
                    <h1 className="text-sm font-bold">${item.price} </h1>
                    <h2>Qty.{item.itemCount}</h2>
                  </div>
                  <button
                    className="text-[22px] absolute top-[1px] right-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </div>
          </ul>

          <div
            className={`w-full md:w-[40%]   pt-3   md:pt-0 ${window.innerWidth >= 768 ? '' : 'border-t'}  md:border-l flex flex-col  min-h-[50vh] justify-between  pl-4`}
          >
            <div>
              <div className="flex flex-col gap-2">
                <h1>Price Details(1item)</h1>
                <div className="flex flex-col gap-[2px] text-sm text-gray-600">
                  <div className="flex justify-between">
                    <h1>Total MRP</h1>
                    <h1>{totalAmount}</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1>Platform Fee</h1>
                    <h1 className="text-green-300 text-sm">FREE</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1>Shiping Fee</h1>
                    <h1 className="text-green-300 text-sm">FREE</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm font-bold text-gray-700">
                <h1>Total Amount:</h1>
                <h1>Rs. {totalAmount}</h1>
              </div>
              <button className="bg-red-300 w-full py-2 text-white">
                Place Order
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="lg:px-10 lg:py-10">
          <div className="lg:flex lg:gap-24 w-full ">
            <img className="flex-1 h-52 w-50" src={emptyimg} alt="" />
            <div className="flex-1 w-50 flex flex-col gap-5">
              <div>
                <h1 className="  text-[28px] font-semibold text-gray-700  pt-3">
                  Your ClothX cart is empty
                </h1>
                <Link to="/">
                  <h3
                    className="italic text-[#
                    9FCBCE] "
                  >
                    Shop Now
                  </h3>
                </Link>
              </div>
              <div className="flex gap-[6%] h-full w-full">
                <Link
                  to="/signin"
                  className="w-[40%] h-[26%] flex items-center justify-center border border-black bg-gray-200 text-gray-800 font-semibold pb-1 cursor-pointer "
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="w-[40%] h-[26%] flex items-center justify-center border border-black bg-gray-200 text-gray-800 font-semibold pb-1 cursor-pointer"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Checkout
