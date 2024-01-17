import React, { useState, useEffect } from 'react'
import logo from '../images/logo-color.png'
import cart from '../images/trolley.png'
import account from '../images/avatar.png'
import like from '../images/heart.png'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLinkId, setActiveLinkId] = useState('home')
  const location = useLocation();
  const {cartState}=useCart()

  useEffect(() => {
    const hash = location.hash;

    if (hash) {
      const element = document.querySelector(hash);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to the top if no hash is present (e.g., on initial load or when navigating to a different route).
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
      const sectionIds = ['home', 'men', 'women', 'kids'] // Add more section IDs as needed
      let currentActiveLinkId = ''

      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (section) {
          const sectionRect = section.getBoundingClientRect()
          if (
            sectionRect.top <= window.innerHeight &&
            sectionRect.bottom >= 0
          ) {
            currentActiveLinkId = id
            break
          }
        }
      }

      setActiveLinkId(currentActiveLinkId)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleLinkClick = (id) => {
    setActiveLinkId((old) => {
      console.log(id, 'id')
      console.log(old, 'previous activeLinkId')
      return id
    })
  }

  

  return (
    <header
      className={`flex justify-between items-center px-4 md:px-6  lg:px-10 h-20 ${isScrolled ? 'bg-white fixed top-0 left-0 z-20 w-screen shadow-md' : ''}`}
    >
      <Link to="/">
      <div className="flex items-center gap-2 md:gap-3 md:gap-4 pt-2">
        <div className="lg:hidden">
          <div className=" h-[3px] md:h-1 w-5  bg-gray-700 my-1"></div>
          <div className=" h-[3px] md:h-1 w-5  bg-gray-700 my-1"></div>
          <div className=" h-[3px] md:h-1 w-5  bg-gray-700 my-1"></div>
        </div>
        <img src={logo} alt="" className="h-10 w-26 md:h-12 md:w-26 lg:h-14 lg:w-28" srcSet="" />
      </div>
      </Link>
      <nav className="">
        <div className="flex gap-10">
          <div className='hidden lg:block '>
          <ul className="flex gap-8 items-center ">
            <li>
              <a
                className={`font-bold ${activeLinkId === 'home' ? 'text-gray-500' : 'text-black'} hover:text-blue-500 `}
                href="/#home"
                title="Home"
                onClick={() => handleLinkClick('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`font-bold ${activeLinkId === 'men' ? 'text-gray-500' : 'text-black'}  hover:text-blue-500 `}
                href="/#men"
                title="Mens"
                onClick={() => handleLinkClick('men')}
              >
                Men's
              </a>
            </li>
            <li>
              <a
                className={`font-bold ${activeLinkId === 'women' ? 'text-gray-500' : 'text-black'}  hover:text-blue-500 `}
                href="/#women"
                title="Womens"
              >
                Women's
              </a>
            </li>
            <li onClick={() => setActiveLinkId((old) => 'kids')}>
              <a
                className={`font-bold ${activeLinkId === 'kids' ? 'text-gray-500' : 'text-black'}  hover:text-blue-500 `}
                href="/#kids"
                title="Kids"
              >
                Kid's
              </a>
            </li>
          </ul>
          </div>
          
          <ul className="flex gap-4 md:gap-5 lg:gap-6 items-center">
            <li className="pb-1  relative">
              <Link to="/checkout" title="Shopping Cart" >
                <img className="h-5 w-5 md:h-6 md:w-5 lg:w-6 lg:w-6 " src={cart} alt="" />
                <div className='absolute -top-1 -right-2 bg-red-300 text-white p-[2px] px-[4px] rounded-[100%] text-[10px]'>{cartState.items.length || 0}</div>
              </Link>
            </li>
            <li>
              <Link to="/account" title="User Account">
                <img  className="h-5 w-5 md:h-6 md:w-5 lg:w-6 lg:w-6" src={like} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/account" title="User Account">
                <img className="h-5 w-5  md:h-6 md:w-5 lg:w-6 lg:w-6 " src={account} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
