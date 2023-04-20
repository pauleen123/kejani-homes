import React from 'react'
import Image from 'next/image'
import Logo from '../public/Logo.png'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }
  return (
    /*styling for the navbar */
   <nav className='flex w-full h-24 shadow-xl'>
    <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
        <Link href="/">
        <Image 
        src={Logo}
        alt='Logo'
        width={100}
        height={75}
        className='cursor-pointer'
        priority
        />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/about">
                <li className="ml-10 uppercase hover:border-b text-xl">
                    Why Us
                </li>
            </Link>
            <Link href="/listing">
                <li className="ml-10 uppercase hover:border-b text-xl">
                    Create Listing
                </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">            
           <AiOutlineMenu size={25}/>
        </div>
    </div>
    <div className={
       menuOpen
       ? "fixed left-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
       : "fixed left-[-100%] top-0 p-10 ease-in"       
    }
    >
        <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
                <AiOutlineClose size={25}/>
            </div>
        </div>
        <div className="flex-col py-4">
            <ul>
                <Link href="/">
                    <li 
                    onClick={() => setMenuOpen (false)}
                    className="py-4 cursor-pointer"
                    > 
                        Home
                    </li>
                </Link>
                <Link href="/about">
                    <li 
                    onClick={() => setMenuOpen (false)}
                    className="py-4 cursor-pointer"
                    > 
                        Why Us
                    </li>
                </Link>
                <Link href="/">
                    <li 
                    onClick={() => setMenuOpen (false)}
                    className="py-4 cursor-pointer"
                    > 
                        Create Listing
                    </li>
                </Link>
            </ul>

        </div>
    </div>
   </nav>
  )
}

export default Navbar