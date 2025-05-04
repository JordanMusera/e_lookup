import Seller_profile_container from "@/app/components/Seller_profile_container";
import Seller_services_container from "@/app/components/Seller_services_container";
import Topbar2 from "@/app/components/Topbar2";
import { EditOutlined } from "@ant-design/icons";
import React from "react";

const page = () => {
    return (
        <div className="flex flex-col items-center relative">
            <div className="fixed w-full top-0 z-100">
                <Topbar2 />
            </div>
            
            <div className="p-10 flex flex-col w-full md:w-8/10 gap-3 mt-10">
                <div className="w-full md:w-3/4 flex flex-col gap-5">
                    <div className="w-full h-max bg-gray-800 rounded-2xl flex flex-col md:flex-row items-center justify-center gap-3 p-5">
                        <div className="w-full flex justify-center">
                            <img
                                src="https://imgcdn.stablediffusionweb.com/2024/4/17/6d71579f-ecef-42de-b83e-c0cb8179130c.jpg"
                                alt="profile_image"
                                className="rounded-full w-1/2"
                            />
                            <EditOutlined style={{ fontSize: '24px', color: 'white' }} className="justify-end h-full" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-xl font-bold w-full text-white">
                                Rise to the top of client's list
                            </h1>
                            <p className="text-2xl md:text-4xl text-white font-bold font-serif">
                                Boosting your profile increases your chance of upscalling your
                                business to reach more customers
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-max rounded-xl">
                        <div>
                            <ul className="flex justify-between items-center p-5 text-xl text-black font-bold bg-gray-100">
                                <li className="bg-gray-500 p-2 rounded-md">Profile Overview</li>
                                <li className="bg-gray-500 p-2 rounded-md">Services</li>
                                <li>Portfolio</li>
                            </ul>
                            <hr className="bg-gray-500 mb-5"/>
                            {/* <Seller_profile_container/> */}
                            <Seller_services_container/>
                        </div>
                    </div>
                </div>
            </div>
           

        </div>
    );
};

export default page;
