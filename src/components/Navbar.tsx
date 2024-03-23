// components/Navbar.tsx
'use client'

import Link from 'next/link';
import TopMenuItem from './TopMenuItem'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
// import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Navbar(){
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuOpenL, setIsMenuOpenL] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) //!false = true
  }
  const toggleMenuL = () => {
    setIsMenuOpenL(!isMenuOpenL) //!false = true
  }





  return (

    <div className="h-[146px] w-auto bg-white fixed top-0 left-0 right-0 z-30">
      <div className="max-w-10xl h-[146px] mx-auto px-1 sm:px-6 lg:px-8 py-9 ">
        <div className="relative flex items-center justify-between h-16">
          {/* Navbar title */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
            <Image src={'/img/logo.png'} className='w-[160px] ml-5 mt-auto mb-auto' alt='logo'
              width={0} height={0} sizes='100vh'/>
            
            </div>
          </div>

          {/* Navbar links */}
          <div className="hidden sm:block sm:ml-4">
            <div className="flex">
              <TopMenuItem title='Home' pageRef='/' />
              <TopMenuItem title='Coworking' pageRef='/coworking' />
              <TopMenuItem title='Booking' pageRef='/booking' />
              <TopMenuItem title='About Us' pageRef='/about' />
              

            </div>
          </div>

          {isMenuOpenL?(
            <div className='lg:visible md:visible'>
              <div className="absolute  right-0 z-50 mt-[77px] w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="block px-4 py-2 text-sm text-gray-700 "></div>
                <hr className="border-gray-300 mt-1" />
                <Link href={'/profile'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</Link>
                <Link href={'/'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Bookings</Link>
                <Link href={'/'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-b-md">Logout</Link>
              </div>
          </div>
          ):null}
          
          
          
          

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
              aria-controls="mobile-menu" aria-expanded="false"  >
              <span className="sr-only">Open main menu</span>
              {/* Icon for the mobile menu button */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={toggleMenu}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      {isMenuOpen?(
        <div className="md:hidden" id="mobile-menu">
          <div className="absolute right-0 z-40 mt-0 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" id="mobile-menu">
            {/* Add more navigation links here */}
            <Link href={'/'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home</Link>
            <Link href={'/'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Booking</Link>
            <Link href={'/'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About us</Link>
          </div>
        </div>
      ):null}
      {/* Mobile menu */}
      
    </div>
  );
}