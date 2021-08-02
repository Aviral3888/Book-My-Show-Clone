import React from 'react';
import { GrFacebookOption, GrTwitter, GrInstagram, GrYoutube, GrLinkedinOption } from 'react-icons/gr';
import { TiSocialPinterest } from 'react-icons/ti';

const Icons = () => {
    return (
        <>
            <div className="flex items-center gap-3">
                <div className="bg-footer-600 rounded-full p-2 hover:bg-white cursor-pointer">
                    <GrFacebookOption className="w-5 h-5 text-footer-800 hover:text-icons-700" />
                </div>
                <div className="bg-footer-600 rounded-full p-2 hover:bg-white cursor-pointer">
                    <GrTwitter className="w-5 h-5 text-footer-800  hover:text-icons-700" />
                </div>
                <div className="bg-footer-600 rounded-full p-2 hover:bg-white cursor-pointer">
                    <GrInstagram className="w-5 h-5 text-footer-800 hover:text-icons-800" />
                </div>
                <div className="bg-footer-600 rounded-full p-2 hover:bg-white cursor-pointer">
                    <GrYoutube className="w-5 h-5 text-footer-800 hover:text-icons-600" />
                </div>
                <div className="bg-footer-600 rounded-full p-2 hover:bg-white cursor-pointer">
                    <GrLinkedinOption className="w-5 h-5 text-footer-800  hover:text-icons-700" />
                </div>
                <div className="bg-footer-600 rounded-full p-1 hover:bg-white cursor-pointer">
                    <TiSocialPinterest className="w-7 h-7 text-footer-800 hover:text-icons-600" />
                </div>
            </div>

        </>
    )
}

export default Icons;