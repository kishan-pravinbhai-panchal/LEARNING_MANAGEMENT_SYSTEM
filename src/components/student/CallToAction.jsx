import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn anything, anytime, anywhere</h1>
      <p className='text-gray-500 sm:text-sm text-center'>Expand your skills with expert-led courses, flexible learning options,  and  <br />a community-driven experience designed for your success. 📚</p>
      <div className='flex items-center justify-center font-medium gap-6  mt-4'>
        <button className='px-10 py-3 rounded-md text-white bg-blue-600 hover:bg-white hover:text-blue-600 hover:outline '>Get started</button>
        <button className='px-8 py-3 rounded-md flex items-center gap-2 hover:outline-blue-600 hover:outline'>Learn more <img src={assets.arrow_icon} alt="" /></button>
      </div>
    </div>
  )
}

export default CallToAction
