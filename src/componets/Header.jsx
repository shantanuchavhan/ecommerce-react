import React, { useState, useEffect } from 'react'
import logo from '../images/logo-color.png'
import cart from '../images/trolley.png'
import account from '../images/avatar.png'
import like from '../images/heart.png'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLinkId, setActiveLinkId] = useState('home')
  const location = useLocation();

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
      className={`flex justify-between items-center px-6 md:px-6 lg:px-10 h-20 ${isScrolled ? 'bg-white fixed top-0 left-0 z-20 w-screen shadow-md' : ''}`}
    >
      <Link to="/">
      <div className="flex items-center gap-2 pt-2">
        <div className="lg:hidden">
          <div className="line h-1 w-6 bg-gray-700 my-1"></div>
          <div className="line h-1 w-6 bg-gray-700 my-1"></div>
          <div className="line h-1 w-6 bg-gray-700 my-1"></div>
        </div>
        <img src={logo} alt="" className="h-14 w-28" srcSet="" />
      </div>
      </Link>
      <nav className="hidden lg:block">
        <div className="flex gap-10">
          <ul className="flex gap-8 items-center">
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
          <ul className="flex gap-6 items-center">
            <li className="pb-2">
              <a href="/cart" title="Shopping Cart">
                <img className="h-6 w-6 " src={cart} alt="" />
              </a>
            </li>
            <li>
              <a href="/account" title="User Account">
                <img className="h-5 w-5" src={like} alt="" />
              </a>
            </li>
            <li>
              <a href="/account" title="User Account">
                <img className="h-5 w-5" src={account} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
