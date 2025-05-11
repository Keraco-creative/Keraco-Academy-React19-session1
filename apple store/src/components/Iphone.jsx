import React from 'react'
import { iphoneModels } from '../data/index'


const Iphone = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center bg-white p-8'>
      <h3 className='2xl:text-4xl xl:text-3xl md:text-3xl font-semibold text-gray-800 mb-8'>Latest iPhones on market </h3>
      <div className='flex justify-between w-full'>
        {iphoneModels.map((iphone, index) => (
          <div key={index} className='flex flex-col items-center justify-between gap-y-2'>
            <img src={iphone.img} alt={iphone.name} className='w-32 h-32 object-contain mb-4' />
            <span className='text-xl font-light'>{iphone.name}</span>
            <span className='text-lg font-semibold text-gray-800'>{iphone.description}</span>
            <span className='text-sm text-gray-500'>{iphone.price}</span>
            <button type='button' className='text-sm mt-4 px-6 py-1 bg-amber-700 text-white font-semibold rounded'>Buy</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Iphone