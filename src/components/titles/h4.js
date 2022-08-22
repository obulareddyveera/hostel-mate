import React from 'react';

const Header4 = ({title}) => {
    return (
        <div className="flex justify-between m-4 w-full">
            <div className="border-b-2 border-gray-900 w-[40%]"></div>
            <div className="relative text-xl pr-2 pl-2 w-full">
                <div className="absolute top-[-13px] w-full">
                    <div className="flex justify-center font-dancingScript w-full">{title}</div>
                </div>
            </div>
            <div className="border-b-2 border-gray-900 w-[40%]"></div>
        </div>
    )
}

export default Header4;