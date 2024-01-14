import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 h-20">
      <h1>ClothX</h1>
      <nav>
        <ul className="flex gap-10">
          <li>
            <a href="/" title="Home">
              Home
            </a>
          </li>
          <li>
            <a href="#mens" title="Mens">
              Mens
            </a>
          </li>
          <li>
            <a href="#womens" title="Womens">
              Womens
            </a>
          </li>
          <li>
            <a href="#kids" title="Kids">
              Kids
            </a>
          </li>
          <li>
            <a href="/cart" title="Shopping Cart">
              Cart
            </a>
          </li>
          <li>
            <a href="/account" title="User Account">
              Account
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
