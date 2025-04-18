import React from 'react'
import Topbar from './components/Topbar'
import { EditOutlined,PlusOutlined,BankOutlined } from '@ant-design/icons'


const page = () => {
  return (
    <div className='flex flex-col items-center gap-3 relative'>
      <div className='top-0 fixed w-full z-100'>
        <Topbar/>
      </div>
      
      <div className='flex justify-center w-5/6 md:w-3/4 overflow-y-auto mt-20 relative'>
        <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/v1741896805/brontes/hero/ApartmentCoder.png" alt="Description" className="w-full h-1/2 mt-3 rounded-2xl" />
        <p className='w-1/2 absolute text-white text-2xl md:text-4xl xl:text-6xl top-1/4 p-2'>E-LOOKUP <br />Connecting clients in need of services and products</p>
      </div>

      <div className='flex flex-col md:flex-row w-5/6 md:w-3/4 justify-between items-center gap-10 mb-20'>
      <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/for-enterprise/enterprise-2023.jpg" alt="Description" className="w-full md:w-1/4 h-full m-2 rounded-2xl" /> 

      <div className='flex flex-col gap-4'>
        <p className='text-4xl font-semibold'>Up your work game, it's easy</p>
        <div className='flex gap-2'>
          <EditOutlined/>
          <div className='flex flex-col gap-2'>
            <p className='text-md font-semibold'>No cost to join</p>
            <p>Register and browse talent profiles, explore projects, or even book a consultation.</p>
          </div>

        </div>

        <div className='flex gap-2'>
          <PlusOutlined/>
          <div className='flex flex-col gap-2'>
            <p className='text-md font-semibold'>Post a job and hire top talent</p>
            <p>Finding talent doesn’t have to be a chore. Post a job or we can search for you!</p>
          </div>

        </div>

        <div className='flex gap-2'>
          <BankOutlined/>
          <div className='flex flex-col gap-2'>
            <p className='text-md font-semibold'>Work with the best—without breaking the bank</p>
            <p>Elookup makes it affordable to up your work and take advantage of low transaction rates.</p>
          </div>

        </div>

        <div className='flex gap-4'>
          <button className='bg-green-500 rounded-xl p-2 text-white font-semibold'>Signup for free</button>
          <button className='border-2 border-green-500 p-2 text-black font-semibold rounded-xl'>Learn how to hire</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default page
