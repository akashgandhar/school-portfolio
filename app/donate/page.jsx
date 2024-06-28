"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Page = () => {
    const [donationAmount, setDonationAmount] = useState('');

    const handlePresetAmount = (amount) => {
        setDonationAmount(amount);
    };

    return (
        <div className="container mx-auto p-4">
            <Image
                    className="h-[70vh] w-full p-5"
                    src="/slider/s4.jpg"
                    alt="About Us"
                    width={300}
                    height={100}
                />
            <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold py-7">Donate</h2>
            <p className='w-[90%] sm:w-[50%] pb-5'>This school is non-profit and solely run by donation from all over the world. All resources and tools we provide are free. We rely on the generosity of foundations.Your support is vital for us to continue and expand our work.</p>
            <h2 className="text-2xl font-semibold pb-3">Support Our Cause</h2>
            <div className="flex space-x-2">
                <button onClick={() => handlePresetAmount(100)} className="px-4 py-2 bg-green-700 text-white rounded">₹100</button>
                <button onClick={() => handlePresetAmount(200)} className="px-4 py-2 bg-green-700 hover:bg-green-600 text-white rounded">₹200</button>
                <button onClick={() => handlePresetAmount(500)} className="px-4 py-2 bg-green-700 hover:bg-green-600 text-white rounded">₹500</button>
                <button onClick={() => handlePresetAmount(1000)} className="px-4 py-2 bg-green-700 hover:bg-green-600 text-white rounded">₹1000</button>
            </div>
            <div className="my-4">
                <label htmlFor="customAmount" className="block text-sm font-medium  text-gray-900">Custom Amount</label>
                <input
                    type="number"
                    id="customAmount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-[100%] p-2.5"
                    placeholder="Enter your amount"
                />
            </div>
            <button className="px-4 py-2 bg-green-700 text-white rounded">Donate</button>
            </div>

            <div className="">
                <h3 className="text-base sm:text-lg font-semibold text-center py-9">You can also donate to the following account, if you have an Indian bank account.</h3>
                <div className="flex justify-center">
                    <div className="flex flex-col px-2 sm:px-9">
                        <h3 className=" text-sm sm:text-lg font-semibold ">International money transfer</h3>
                        <ul className='text-[#006269] text-xs sm:text-base'>
                            <li>Account Holder Name: </li>
                            <li>Bank: SBI Bank</li>
                            <li>Account No: </li>
                            <li>Type: </li>
                            <li>Branch code: </li>
                            <li>IFSC: </li>
                            <li>SWIFT: </li>
                            <li>Address: </li>
                        </ul>
                    </div>
                    <div className="flex flex-col px-2 sm:px-9">
                        <p className='text-sm sm:text-lg font-semibold'>Rupee to Rupee ONLY:</p>
                        <ul className='text-[#006269] text-xs sm:text-base'>
                            <li>Account name: </li>
                            <li>A/c number: </li>
                            <li className='pb-5 pt-2'>*Note Account name is different to our school name.</li>
                            <li>A/c number:</li>
                            <li>Ifs code:</li>
                            <li>Bank name:</li>
                            <li>Address:</li>
                            <li>Pincode:</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;