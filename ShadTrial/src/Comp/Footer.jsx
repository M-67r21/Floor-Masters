import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 min-h-[20rem] ">
        <div className="max-w-7xl flex flex-col md:flex-row justify-between gap-8 container mx-auto">
            
            {/* Column 1 */}
            <div className="md:w-1/2">
            <a href="#">
                <h1 className="text-7xl font-bold mb-4 text-yellow-600">Floor Masters</h1>
            </a>
            <p className="text-2xl text-gray-400">Building your dreams, one floor at a time.</p>
            </div>
            

            {/* Column 2 with 3 nested columns */}
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
                <h3 className="font-bold text-3xl mb-2 text-yellow-600">Company</h3>
                <ul className="text-l text-gray-400 space-y-3">
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#projects" className="hover:text-white">Projects</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
                </ul>
            </div>
            
            <div>
                <h3 className="font-bold text-3xl mb-2 text-yellow-600">Contact Us</h3>
                <ul className=" space-x-4 text-gray-400 space-y-3">
                    <li><a href="#" className="hover:text-white">Facebook</a></li>
                    <li><a href="#" className="hover:text-white">Twitter</a></li>
                    <li><a href="#" className="hover:text-white">Instagram</a></li>
                    <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                    <li>0722 795 798</li>
                </ul>
            </div>
            </div>
        </div>
    </footer>


  )
}

export default Footer