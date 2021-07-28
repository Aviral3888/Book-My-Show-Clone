import React from 'react';
import { AiFillShop } from 'react-icons/ai';
import { RiCustomerService2Fill } from 'react-icons/ri';


const Footer = () => {
    return (
        <>
            <div className="bg-footer-800 w-full py-3">
                <div className="container mx-auto px-lg text-gray-300 flex flex-col gap-8">

                    {/* First Part */}
                    <div className="flex items-center justify-between my-4">
                        <div className="flex items-center gap-8">
                            <div className="">
                                <AiFillShop
                                    className="w-8 h-8"
                                />
                            </div>
                            <div>
                                <span
                                    className="text-white font-bold mr-4"
                                >List your Show</span> Got a show, event, activity or a great experience? Partner with us and get Listed on BookMyShow
                            </div>
                        </div>
                        <div>
                            <button
                                className="button bg-red-500 py-2 px-3 rounded hover:bg-red-600"
                            >Contact Today!</button>
                        </div>
                    </div>

                    {/* Second Part */}
                    <div className="flex justify-evenly">

                        <div className="flex flex-col gap-4 items-center text-gray-400">
                            <div>
                                <RiCustomerService2Fill
                                    className="w-12 h-12 font-light"
                                />
                            </div>
                            <h2 className="text-xs font-medium">
                                24/7 CUSTOMER CARE
                            </h2>
                        </div>

                        <div className="flex flex-col gap-4 items-center text-gray-400">
                            <div>
                                <RiCustomerService2Fill
                                    className="w-12 h-12 font-light"
                                />
                            </div>
                            <h2 className="text-xs font-medium">
                                24/7 CUSTOMER CARE
                            </h2>
                        </div>

                        <div className="flex flex-col gap-4 items-center text-gray-400">
                            <div>
                                <RiCustomerService2Fill
                                    className="w-12 h-12 font-light"
                                />
                            </div>
                            <h2 className="text-xs font-medium">
                                24/7 CUSTOMER CARE
                            </h2>
                        </div>



                        {/* <div></div>
                        <div></div> */}
                    </div>


                    <div></div>
                </div>
            </div>
        </>
    )
};

export default Footer;