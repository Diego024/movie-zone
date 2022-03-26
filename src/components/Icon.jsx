import React from 'react'
import icon from '../../dist/icon.png'

const Icon = () => {
    return (
        <div className="flex flex-row items-center p-3 py-5 pl-12 w-1/4 ">
            <div>
                <a href="/">
                    <img className="h-14 w-14  mx-2 lg:block md:hidden" src={icon} alt="Soccer Icon" />
                </a>
            </div>
            <div>
                <a href="/">
                    <p className="text-white font-bold text-lg">My Highlight</p>
                    <p className="text-white font-bold text-bg">Zone</p>
                </a>
            </div>
        </div>
    )
}

export default Icon