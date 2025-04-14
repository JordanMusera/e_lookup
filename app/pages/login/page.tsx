'use client'
import Topbar from '@/app/components/Topbar'
import React, { useState } from 'react'

const page = () => {
  const [emailInput,setEmailInput] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async(e:React.FormEvent)=>{
    e.preventDefault();
    const res = await fetch('/api/auth/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:emailInput,
        password:password
      }),
      
    })

    console.log(await res.json);


  }

  return (
    <div className='w-screen h-screen bg-white flex flex-col relative'>
      <Topbar/>
      <form className='p-10 xl:p-0 w-full h-full flex items-center justify-center bottom-0 bg-yellow-50' onSubmit={(e)=>handleLogin(e)}>
        <div className='w-full p- xl:w-1/3 flex flex-col items-center justify-center gap-4 bg-white rounded-2xl p-6 border border-gray-900'>
        <h1 className='text-xl font-bold text-black'>Log in to e-lookup</h1>
        <input type="email" placeholder='username or email' className='border rounded-xl p-2 w-full' onChange={e=>setEmailInput(e.target.value)}/>
        <input type="password" placeholder='password' className='border rounded-xl p-2 w-full' onChange={e=>setPassword(e.target.value)}/>
        <p className='w-full text-blue-500'>Forgot password?</p>
        <button className='w-full p-2 bg-green-500 rounded-xl' type='submit'>Continue</button>
        <p className='text-blue-500'>Don't have an account? Sign-up</p>
      </div>
      </form>
      
    </div>
  )
}

export default page
