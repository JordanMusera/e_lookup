'use client'
import Topbar from '@/app/components/Topbar'
import React, { useState } from 'react'

const page = () => {
  const [emailInput,setEmailInput] = useState("");
  const [password,setPassword] = useState("");
  const [username,setUsername] = useState("");
  const [role,setRole] = useState('client')

  const handleLogin = async(e:React.FormEvent)=>{
    e.preventDefault();
    const res = await fetch('/api/auth/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        username:username,
        email:emailInput,
        role:role,
        password:password
      }),
      
    })

    console.log(await res.json);


  }

  return (
    <div className='w-screen h-screen bg-white flex flex-col relative'>
  <Topbar />
  <form
    className='p-10 xl:p-0 w-full h-full flex items-center justify-center bottom-0 bg-yellow-50'
    onSubmit={(e) => handleLogin(e)}
  >
    <div className='w-full xl:w-1/3 flex flex-col items-center justify-center gap-4 bg-white rounded-2xl p-6 border border-gray-900'>
      <h1 className='text-xl font-bold text-black'>Sign-up to e-lookup</h1>

      <input
        type='text'
        placeholder='username'
        className='border rounded-xl p-2 w-full'
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type='email'
        placeholder='email'
        className='border rounded-xl p-2 w-full'
        onChange={e => setEmailInput(e.target.value)}
      />
      <input
        type='password'
        placeholder='password'
        className='border rounded-xl p-2 w-full'
        onChange={e => setPassword(e.target.value)}
      />

      <h1 className='text-md font-bold text-black w-full'>Select your role:</h1>

      <div className='flex gap-6 w-full text-md font-semibold'>
        <label className='flex items-center gap-2 text-black'>
          <input
            type='radio'
            name='role'
            value='client'
            onChange={e => setRole(e.target.value)}
          />
          Client
        </label>
        <label className='flex items-center gap-2 text-black'>
          <input
            type='radio'
            name='role'
            value='seller'
            onChange={e => setRole(e.target.value)}
          />
          Seller
        </label>
      </div>

      <button className='w-full p-2 bg-green-500 rounded-xl' type='submit'>
        Continue
      </button>

      <p className='text-blue-500'>Have an account? login</p>
    </div>
  </form>
</div>

  )
}

export default page
