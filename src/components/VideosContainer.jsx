import React from 'react'

const VideosContainer = ({children}) => {
    return (
        <div className="flex flw-row flex-wrap py-6 px-10 justify-center h-full">
            {children}
        </div>
    )
}

export default VideosContainer