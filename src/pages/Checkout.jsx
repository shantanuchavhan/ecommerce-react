import React from 'react';
import { useCart } from '../context/CartContext';
import emptyimg from "../images/kettle-desaturated._CB424694257_.svg"
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cartState, dispatch } = useCart();
  console.log(cartState,"cartState from cart")

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div>
      
      <ul>
        {cartState.items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {cartState.items.length > 0 ? (
        <div>
          <button onClick={clearCart}>Clear Cart</button>
          <p>Total: ${cartState.items.reduce((acc, item) => acc + item.price, 0)}</p>
        </div>
      ):(
        <div className='px-[14%] py-10'>
          <div className='lg:flex lg:gap-24 w-full '>
             
            <img className='flex-1 h-52 w-50' src={emptyimg} alt="" />
            <div className='flex-1 w-50 flex flex-col gap-5'>
                <div>
                  <h1 className='  text-[28px] font-semibold text-gray-700  pt-3'>Your ClothX cart is empty</h1>
                  <Link to="/"><h3 className='italic text-[#
                    9FCBCE] '>Shop Now</h3></Link>
                </div>
                <div className='flex gap-[6%] h-full w-full'>
                <Link to="/signin" className='w-[40%] h-[26%] flex items-center justify-center border border-black bg-gray-200 text-gray-800 font-semibold pb-1 cursor-pointer '>
                   Sign in 
                </Link>
                <Link to="/register" className='w-[40%] h-[26%] flex items-center justify-center border border-black bg-gray-200 text-gray-800 font-semibold pb-1 cursor-pointer'>
                   Sign Up 
                </Link>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
