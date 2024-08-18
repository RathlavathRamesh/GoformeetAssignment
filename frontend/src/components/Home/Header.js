import React from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'

const Header = () => {
  return (
    <nav className="bg-[#426CAD] sm:hidden md:block lg:block xl:block px-4 py-2 relative">
      <div className="flex justify-between items-center">
        <div>
        <Link to='/'>
         <img
            src="https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg"
            alt="Logo"
            className="h-11 w-10 rounded-[50%]"
        />
        </Link>
        </div>
        <div className="flex text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg">
          <Link to="/create-profile">
            <button className="mr-5 sm:gap-0 sm:hidden md:block relative text-white underline-transition transition duration-300 ease-in-out">
              Create
            </button>
          </Link>
          <Link to="/viewprofiles">
            <button className="mr-5 relative text-white underline-transition transition duration-300 ease-in-out">
              View
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header