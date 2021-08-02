import React from 'react';
import { AiFillShop } from 'react-icons/ai';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { GiTicket } from 'react-icons/gi';
import { BsNewspaper } from 'react-icons/bs';

// component
import Icons from './Icons.footer.component';

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

                </div>
            </div>

            {/* Second Part */}
            <div className="bg-footer-700 py-4">
                <div className="flex justify-evenly">

                    <div className="flex flex-col gap-4 items-center text-gray-300 hover:text-white cursor-pointer">
                        <div>
                            <RiCustomerService2Fill
                                className="w-12 h-12 font-light"
                            />
                        </div>
                        <h2 className="text-xs">
                            24/7 CUSTOMER CARE
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4 items-center text-gray-300 hover:text-white cursor-pointer">
                        <div>
                            <GiTicket
                                className="w-12 h-12 font-light"
                            />
                        </div>
                        <h2 className="text-xs ">
                            BOOKING CONFIRMATION
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4 items-center text-gray-300 hover:text-white cursor-pointer">
                        <div>
                            <BsNewspaper
                                className="w-12 h-12 font-light"
                            />
                        </div>
                        <h2 className="text-xs">
                            SUBSCRIBE TO NEWSLETTER
                        </h2>
                    </div>

                </div>
            </div>

            {/* Third Part */}
            <div className="bg-footer-800 w-full py-10">
                <div className="container mx-auto px-lg text-gray-400 flex flex-col gap-6">

                    <div className="flex flex-col gap-4 text-xs ">
                        <h2 className="font-medium">
                            MOVIES PLAYING IN NATIONAL CAPITAL REGION (NCR)
                        </h2>
                        <p>
                            Roohi | Mast Kalandar | Mumbai Saga | The GodFather | The Suicide Squad | Mortal Kombat | Black Widow | War with Grandpa
                        </p>
                        <h2 className="font-medium mt-5">
                            UPCOMING MOVIES
                        </h2>
                        <p>
                            Marriage And Divorce | Hitman | Bhuj: The Pride of India | Horror Stories | Shershah | Lion of the Arabian Sea
                        </p>
                        <h2 className="font-medium mt-5">
                            PLAYS IN TOP CITIES
                        </h2>
                        <p>
                            Plays in Mumbai | Plays in National Capital Region (NCR) | Plays in Hyderabad | Plays in Bengaluru | Plays in Kolkata | Plays in Gurugram
                        </p>
                        <h2 className="font-medium mt-5">
                            BOOKMYSHOW EXCLUSIVE
                        </h2>
                        <p>
                            Watch Guide | Superstar | BookASmile | Gift Cards | List My show | Offers
                        </p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="w-full h-0.5 bg-gray-500">
                        </div>
                        <div className="w-24 h-16">
                            <img
                                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                                alt="Logo"
                                className="w-full h-full" />
                        </div>
                        <div className="w-full h-0.5 bg-gray-500">
                        </div>
                    </div>

                    <div className="flex justify-center my-5">
                        <Icons />
                    </div>

                    <div className="text-xs text-center text-gray-500">
                        <p>Copyright </p>
                        <p>
                            The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Footer;