import React from 'react';

const Privacy = () => {
    return (
        <>
            <div className='w-full flex flex-col gap-2'>
                <h2 className="text-lg font-medium text-gray-600">Privacy Note</h2>
                <p className="text-sm text-gray-700">
                    By using our website, you are fully accepting our
                    <span
                        className="font-medium text-red-600"
                    > Privacy Policy </span>
                    governing your access to Bookmyshow and provision of services by
                    <span
                        className="font-medium text-red-600"
                    > Bookmyshow </span>
                    to you. If you do not accept terms mentioned in the Privacy Policy, you must not share any of your personal information and immediately exit Bookmyshow.</p>
            </div>
        </>
    )
};

export default Privacy;