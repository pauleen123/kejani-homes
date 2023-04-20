import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white p-4 absolute bottom-0 w-full">
      <div className="container mx-auto">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Kejani Homes. All rights reserved.
          <br/>
          bitch
        </p>
      </div>
    </footer>
  )
}

export default Footer