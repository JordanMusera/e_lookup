'use client'
import { FieldTimeOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

const Seller_services_container = () => {
    const [servicesArray, setServicesArray] = useState([{
        image: 'https://imgcdn.stablediffusionweb.com/2024/4/17/6d71579f-ecef-42de-b83e-c0cb8179130c.jpg',
        title: 'service1',
        description: 'service1',
        deliveryTime: '30',
        pricing: 19,
        pricing_model: 'hourly',
        orders: 120,
        category: 'computing',
        tags: ['tag1', 'tag2', 'tag3']
    }, {
        image: 'https://imgcdn.stablediffusionweb.com/2024/4/17/6d71579f-ecef-42de-b83e-c0cb8179130c.jpg',
        title: 'service1',
        description: 'service1',
        deliveryTime: '30',
        pricing: 19,
        pricing_model: 'hourly',
        orders: 120,
        category: 'computing',
        tags: ['tag1', 'tag2', 'tag3']
    },{
        image: 'https://imgcdn.stablediffusionweb.com/2024/4/17/6d71579f-ecef-42de-b83e-c0cb8179130c.jpg',
        title: 'service1',
        description: 'service1',
        deliveryTime: '30',
        pricing: 19,
        pricing_model: 'hourly',
        orders: 120,
        category: 'computing',
        tags: ['tag1', 'tag2', 'tag3']
    },{
        image: 'https://imgcdn.stablediffusionweb.com/2024/4/17/6d71579f-ecef-42de-b83e-c0cb8179130c.jpg',
        title: 'service1',
        description: 'service1',
        deliveryTime: '30',
        pricing: 19,
        pricing_model: 'hourly',
        orders: 120,
        category: 'computing',
        tags: ['tag1', 'tag2', 'tag3']
    },{
        image: 'https://imgcdn.stablediffusionweb.com/2024/4/17/6d71579f-ecef-42de-b83e-c0cb8179130c.jpg',
        title: 'service1',
        description: 'service1',
        deliveryTime: '30',
        pricing: 19,
        pricing_model: 'hourly',
        orders: 120,
        category: 'computing',
        tags: ['tag1', 'tag2', 'tag3']
    },{
        image: 'https://imgcdn.stablediffusionweb.com/2024/4/17/6d71579f-ecef-42de-b83e-c0cb8179130c.jpg',
        title: 'service1',
        description: 'service1',
        deliveryTime: '30',
        pricing: 19,
        pricing_model: 'hourly',
        orders: 120,
        category: 'computing',
        tags: ['tag1', 'tag2', 'tag3']
    },{
        image: 'https://imgcdn.stablediffusionweb.com/2024/4/17/6d71579f-ecef-42de-b83e-c0cb8179130c.jpg',
        title: 'service1',
        description: 'service1',
        deliveryTime: '30',
        pricing: 19,
        pricing_model: 'hourly',
        orders: 120,
        category: 'computing',
        tags: ['tag1', 'tag2', 'tag3']}])
    return (
        <div className='p-5 h-screen relative'>
            <div className='flex justify-between'>
                <p className='text-xl p-2 font-bold text-black font-serif'>My Services(12)</p>
                <button className='p-2 text-white bg-gray-800 rounded-xl text-md'>Add new service</button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
                {servicesArray.map((service, index) => (
                    <div key={index} className='bg-white border border-gray-300 rounded-xl shadow p-3'>
                        <img src={service.image} alt="service_image" className='w-full h-40 object-cover rounded-md mb-2' />
                        <p className='text-lg font-bold text-black'>{service.title}</p>

                        <div className='flex justify-between text-sm text-gray-600 mt-1'>
                            <div className='flex gap-1 items-center'>
                                <FieldTimeOutlined />
                                <p>{service.deliveryTime} days</p>
                            </div>
                            <p>{service.orders} orders</p>
                        </div>

                        <p className='text-md font-semibold text-black mt-2'>$ {service.pricing} <span className="text-gray-600 text-sm">/{service.pricing_model}</span></p>

                        <div className='flex justify-between mt-3'>
                            <button className='bg-gray-200 rounded-md p-1 px-2 text-sm'>Edit</button>
                            <button className='bg-gray-200 rounded-md p-1 px-2 text-sm'>Preview</button>
                            <button className='bg-gray-200 rounded-md p-1 px-2 text-sm'>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="fixed inset-0 flex items-center justify-center bg-black/50">
  <div className="bg-white p-6 rounded-xl shadow-xl w-1/2 flex flex-col gap-2">
    <p className='text-xl font-bold text-black'>Create new service</p>
    <label htmlFor="name" className='text-md text-black font-bold'>Service title</label>
    <input type="text" id='name' placeholder='Service name' className='border border-gray-800 rounded-xl w-1/2 p-2'/>
  </div>
</div>

        </div>
    )
}

export default Seller_services_container
