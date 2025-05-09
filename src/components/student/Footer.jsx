import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full '>
          <img src={assets.logo_dark} alt="" />
          <p className='mt-6 text-center md:text-left text-sm text-white/80'> Join us in shaping the future of education with interactive lessons, expert instructors, and a community that inspires continuous learning. 🚀</p>
        </div>
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
            <li className='hover:text-blue-600'><Link to='/'>Home</Link></li>
            <li className='hover:text-blue-600'><Link to='/'>About us</Link></li>
            <li className='hover:text-blue-600'><Link to='/'>Contact us </Link></li>
            <li className='hover:text-blue-600'><Link to='/'>Privacy policies</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-start w-full '>
          <h2 className='font-semibold text-white mb-5'>Subscribe to our <span className='text-blue-600'>newsletter</span> </h2>
          <p className='text-sm text-white/80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className='flex item-center gap-2 pt-4'>
            <input type="email" placeholder='Enter your email'
              className='border border-gray-500/30 bg-white text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm' />
            <button className='bg-blue-600 w-24 h-9 text-white rounded  hover:text-black hover:outline hover:bg-white hover:outline-blue-600'>Subscribe</button>
          </div>
        </div>
      </div>
      <p className='py-4 text-center text-xs md:text-sm text-white/60'>Copyright 2024 <span className='text-blue-600'>© Edemy.</span> All Right Reserved.</p>
    </footer>
  )
}

export default Footer
