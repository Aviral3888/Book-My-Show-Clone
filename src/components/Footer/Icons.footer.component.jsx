import React from 'react';
import { GrFacebookOption } from 'react-icons/gr';

const Icons = () => {
    return (
        <>
            <div className="flex items-center gap-3">
                <div className="bg-footer-600 rounded-full p-1 hover:bg-white cursor-pointer">
                    <GrFacebookOption className="w-6 h-6 text-footer-800" />
                </div>
                <div className="bg-footer-600 rounded-full p-1 hover:bg-white cursor-pointer">
                    <GrFacebookOption className="w-6 h-6 text-footer-800" />
                </div>
            </div>

        </>
    )
}

export default Icons;