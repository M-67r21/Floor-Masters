import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 min-h-[20rem] ">
        <div className="max-w-7xl flex flex-col md:flex-row justify-between gap-8 container mx-auto">
            
            {/* Column 1 */}
            <div className="md:w-1/2">
            <h1 className="text-7xl font-bold mb-4">Floor Masters</h1>
            <p className="text-2xl text-gray-400">Building dreams, one floor at a time.</p>
            </div>
            

            {/* Column 2 with 3 nested columns */}
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
                <h3 className="font-semibold text-lg mb-2">Company</h3>
                <ul className="text-sm text-gray-400 space-y-3">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
                </ul>
            </div>
            <div>
                <h3 className="font-semibold text-lg mb-2">Support</h3>
                <ul className="text-sm text-gray-400 space-y-3">
                <li>Help Center</li>
                <li>FAQs</li>
                <li>Contact</li>
                </ul>
            </div>
            <div>
                <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
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