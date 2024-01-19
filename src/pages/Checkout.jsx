import React from 'react'
import { useCart } from '../context/CartContext'
import emptyimg from '../images/kettle-desaturated._CB424694257_.svg'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const { cartState, dispatch } = useCart()
  console.log(cartState, 'cartState from cart')

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

  return (
    <div className="px-10 md:px-20 lg:px-32 py-10 md:py-20 lg:py-32 ">
      {cartState.items.length > 0 ? (
        <div className="flex justify-between gap-4 p-4 min-h-[60vh]  border-t">
          <ul className=" w-[70%]">
            <h1 className="flex justify-between py-3">
              <div className="flex gap-2 items-center text-sm">
                <div className="border  h-[15px] w-[15px] rounded-[4px] border-gray-700"></div>
                <h1 className="font-bold text-gray-700">1/1 ITEMS SELECTED </h1>
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
                    <div className="absolute left-[4px] top-[4px] rounded-[2px] border border-gray-600 h-[12px] bg-white w-[12px]"></div>
                    <img
                      className="object-cover  h-[100px] w-[100px] rounded "
                      src={`https://res.cloudinary.com/ddw1upvx3/${item?.product_images[0]?.image}`}
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <h1 className="text-sm w-[80%]">
                      {getFirstFiveWords(item.name)}...
                    </h1>
                    <h1 className="text-sm font-bold">${item.price}</h1>
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

          <div className="w-[40%]     border-l flex flex-col  min-h-[50vh] justify-between  pl-4">
            <div>
              <div className="flex flex-col gap-2">
                <h1>Price Details(1item)</h1>
                <div className="flex flex-col gap-[2px] text-sm text-gray-600">
                  <div className="flex justify-between">
                    <h1>Total MRP</h1>
                    <h1>400</h1>
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
                <h1>
                  Rs.{' '}
                  {cartState.items.reduce((acc, item) => acc + item.price, 0)}
                </h1>
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
