import React from 'react';
import Image from 'next/image';

const Page = () => {
    return (
        <div className='flex pb-9'>
            <div className="flex w-full flex-col pt-9">
                <div className="justify-center w-full align-center pt-9 ">
                    <h1 className="justify-center align-center w-full text-center text-4xl py-4 pt-9">
                        About Us
                    </h1>
                </div>
                <Image
                    className="h-[70vh] w-full p-5"
                    src="/slider/s4.jpg"
                    alt="About Us"
                    width={300}
                    height={100}
                />
                <div className='flex w-[90vw] md:w-full justify-center text-center text-[#006269] items-center align-middle'>
                    <p className='py-4 w-full justify-center text-center'>We’d love to hear from you! Please get in touch and a member of the Charity World team will get back to you soon</p>
                </div>
                {/* Start of Horizontal Alignment for Address and Contact Form */}
                <div className=" flex flex-col items-center justify-center align-middle md:flex-row w-full">
                    {/* Address Section */}
                    <div className="flex flex-col w-1/2">
                        <p className='flex w-full justify-center text-xl text-[#006269]'>
                            Address
                        </p>
                        <div className="flex flex-col  items-center align-middle py-5">
                            <p className="flex w-[90vw] md:w-[70%] text-start">
                                Ojas Educational & Training Institute
                            </p>
                            <p className="flex w-[90vw] md:w-[70%] text-start">
                            1st Floor, Above Bank of Baroda, Near Railway Station, Morandhana, Gwalior, Madhya Pradesh 474006
                            </p>
                        </div>
                        <div className="flex justify-center px-9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9340.469346759412!2d78.07195846330686!3d21.904378174623233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd5e54a7078c72b%3A0x9762d011f2fa8566!2sOjas%20Educational%20%26%20Training%20Institute!5e0!3m2!1sen!2sin!4v1719468668885!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-1/2 py-4">
                        <h2 className="text-2xl font-semibold mb-4">Please fill the form to get in touch with us</h2>
                        <form className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                                        Your Name (required)
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="Your Name" required />
                                </div>
                                <div className="w-full px-3 pt-5">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                        Your Email (required)
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="email@example.com" required />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                                        Phone Number
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="tel" placeholder="+91**********" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                                        Your Message
                                    </label>
                                    <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" rows="4"></textarea>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3 text-center">
                                    <button className="text-white bg-green-700  px-4 py-2 my-5 rounded hover:bg-green-600" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;