import React from 'react'

const Topbar = () => {
  return (
    <div className='w-full bg-gray-900 h-16 relative flex items-center p-2'>
      <div className='text-white text-2xl font-semibold w-full'>
        E-LOOKUP
      </div>
      <div className='h-full flex justify-end gap-3 end-0 items-center'>
        <button className='text-white text-md font-semibold rounded-2xl bg-gray-500 p-2'>Login</button>
        <button className='text-white text-md font-semibold rounded-2xl bg-green-500 p-2'>Signup</button>
      </div>
    </div>
  )
}

export default Topbar
