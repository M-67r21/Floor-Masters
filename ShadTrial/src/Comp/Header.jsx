'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/logo.png'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white"    >
      <header className="fixed inset-x-0 top-0 z-50 shadow-lg bg-white ">
        {/* <img
        alt=""
        src="https://images.unsplash.com/flagged/photo-1622363405079-da46534ce5ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-25"
      /> */}
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={Logo}
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#contact" className="text-sm/6 font-semibold text-gray-900">
              Contact 
            </a>
          </div>
        </nav>
        
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8 h-screen">
        <img
        alt=""
        src="https://images.unsplash.com/flagged/photo-1622363405079-da46534ce5ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-25"
      />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto w-full py-24  ">
          
          <div className="text-center">
            <p className='text-xl pb-5'>Welcome to Floor Masters</p>
            <h1 className="text-5xl font-bold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Building Your Dreams, One Floor at a Time
            </h1>
            <p className="mt-8 w-4/5 mx-auto text-center font-medium text-pretty text-black-500 sm:text-xl">
              We specialize in turning visions into reality with exceptional 
              craftsmanship and attention to detail. With years of 
              experience and commitment to quality transforming your space into a masterpiece.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact Us
              </a>
              <a href="#services" className="text-xl font-semibold text-gray-900">
                Services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}
