'use client'
import { CloseOutlined } from '@ant-design/icons';
import Item from 'antd/es/list/Item';
import React, { useState } from 'react'

const Seller_profile_container = () => {
    const [skillsArray, setSkillsArray] = useState(['skill1', 'skill2']);
    const [skillValue, setSkillValue] = useState('')

    const deleteSkill = (index: number) => {
        setSkillsArray(prev => prev.filter((_, i) => i !== index));
      };      

    const addSkill=(skill:string)=>{
        setSkillsArray(prev=>[...skillsArray,skill]);
    }


    return (
        <div className='w-full flex flex-col'>
            <form className='w-full flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 p-4 flex flex-col gap-1 border border-gray-400  rounded-xl m-2'>
                    <h1 className='text-black text-xl font-bold'>Basic information</h1>
                    <label htmlFor='name' className='text-black font-bold text-md'>Name / Business name</label>
                    <input type="text" placeholder='Full name' id='name' className='w-full p-1.5 rounded-md border border-gray-400' />

                    <label htmlFor='email' className='text-black font-bold text-md'>Email</label>
                    <input type="email" placeholder='email' id='email' className='w-full p-1.5 rounded-md border border-gray-400' />

                    <label htmlFor='phone' className='text-black font-bold text-md'>Phone number</label>
                    <input type="number" placeholder='phone' id='phone' className='w-full p-1.5 rounded-md border border-gray-400' />

                    <label htmlFor='location' className='text-black font-bold text-md'>Location</label>
                    <input type="text" placeholder='location' id='location' className='w-full p-1.5 rounded-md border border-gray-400' />
                </div>
                <div className='w-full md:w-1/2 border border-gray-400 rounded-xl m-2 flex flex-col gap-1 p-4'>
                    <h1 className='text-black text-xl font-bold'>Professional details</h1>
                    <label htmlFor='summary' className='text-black font-bold text-md'>Summary</label>
                    <textarea placeholder='Summary' id='summary' className='w-full h-20 p-1.5 rounded-md border border-gray-400' />

                    <label htmlFor='skills' className='text-black font-bold text-md'>Skills and expertise</label>
                    <div className='flex gap-2 flex-wrap'>
                        {skillsArray.map((item,index)=>(
                        <div key={index} className='bg-green-200 opacity-80 rounded-2xl ps-2 pe-2 flex gap-2 text-black'>
                            {item}
                            <CloseOutlined onClick={()=>deleteSkill(index)}/>
                        </div>
                    ))}
                    </div>
                    
                    <div className='flex flex-between gap-2 items-center mt-3'>
                        <input type="skills" placeholder='Skills and expertise' id='skills' className='w-full p-1.5 rounded-md border border-gray-400' onChange={(e)=>setSkillValue(e.target.value)}/>
                        <p className='text-4xl font-bold hover:cursor-pointer hover:text-gray-500' onClick={()=>addSkill(skillValue)}>+</p>
                    </div>
                    
                </div>

            </form>
            <div className='flex justify-end p-2'>
                <button type='submit' className='bg-gray-800 w-max p-2 rounded-md text-white hover:bg-green-300 border border-gray-800 hover:text-black'>Save Changes</button>
            </div>
            
        </div>


    )
}

export default Seller_profile_container
