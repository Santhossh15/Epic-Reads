import React from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import avatarImg from "../assets/avatar.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/order" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentUser = false;
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>
          <div className="relative sm:w-72 w-40 space-x-2">
            <FaSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                      <ul className="py-2">
                        {navigation.map((item) => (
                          <li
                            key={item.name}
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Link
                              to={item.href}
                              className="block px-4 py-2 text-sm hover:bg-gray-200"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </button>
              </>
            ) : (
              <Link to="/login">
                <FaUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <FaHeart />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <FaShoppingCart />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">
                {cartItems.length}
              </span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
