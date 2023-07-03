import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=" text-black p-4 absolute bottom-0 w-full shadow-xl">
      <div className="container mx-auto">
        <div className="text-center">
          &copy; {new Date().getFullYear()} Kejani Homes. All rights reserved.
          <br/>
         <div className="flex gap-6 pb-5 justify-center">
         <a href='https://www.facebook.com/'>
          <FaFacebook/>
         </a>
          <a href='https://www.instagram.com/'> 
          <FaInstagram/>
          </a>
          <FaLinkedin/>
         </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer