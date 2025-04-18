'use client'
import React, { useState } from 'react';
import { SearchOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';

const Topbar2 = () => {
    const [profileClicked, setProfileClicked] = useState(false);

    return (
        <div className='w-full bg-gray-900 h-16 flex items-center p-2 justify-between gap-2'>
            <div className='text-white text-2xl font-semibold'>
                eLOOKUP
            </div>

            <div className='h-full w-full md:w-1/2 flex items-center gap-3'>
                <div className='w-full'>
                    <div className='bg-white flex items-center justify-between rounded-xl overflow-hidden'>
                        <input
                            type="text"
                            placeholder='Search Here'
                            className='w-full h-full px-4 py-2 outline-none'
                        />
                        <SearchOutlined className='text-gray-700 text-xl mx-3' />
                    </div>
                </div>

                <BellOutlined
                    style={{ fontSize: '24px', color: 'white' }}
                    className='rounded-full p-2 hover:bg-gray-800 cursor-pointer'
                />

                <div className='relative'>
                    <UserOutlined
                        style={{ fontSize: '24px', color: 'white' }}
                        className='rounded-full p-2 hover:bg-gray-800 cursor-pointer'
                        onClick={()=>setProfileClicked(!profileClicked)}
                    />

                    {profileClicked && (
                        <div className='absolute top-12 right-0 bg-gray-800 text-white w-48 rounded-md shadow-lg z-50 mt-3'>
                        <div className="absolute -top-2 right-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-800"></div>

                        <div className='p-4'>
                            <div className='flex gap-2 p-2'>
                                <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/for-enterprise/enterprise-2023.jpg" alt="Description" className="w-1/5 h-1/5 rounded-full" />
                                <div className='flex flex-col text-[10px] justify-center'>
                                    <p>ETU TECHNOLOGIES</p>
                                    <p>business</p>
                                </div>
                            </div>
                            <p className='hover:bg-gray-600 p-2 rounded'>Profile</p>
                            <p className='hover:bg-gray-600 p-2 rounded'>Stats and trends</p>
                            <p className='hover:bg-gray-600 p-2 rounded'>Membership plan</p>
                            <p className='hover:bg-gray-600 p-2 rounded'>Settings</p>
                            <p className='hover:bg-gray-600 p-2 rounded'>Logout</p>
                        </div>
                    </div>
)}
                    
                </div>
            </div>
        </div>
    );
};

export default Topbar2;
