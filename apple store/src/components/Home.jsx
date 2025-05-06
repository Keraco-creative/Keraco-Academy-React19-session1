import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-full grid grid-cols-2 grid-rows-2 gap-4 bg-gray-50'>
        <div className='flex flex-col flex-grow items-center justify-center bg-red-100'>
            <span className='text-xl font-bold bg-gradient-to-b from-red-500 to-yellow-300 bg-clip-text text-transparent'>iPhones</span>
        </div>
    </div>
  )
}

export default Home;