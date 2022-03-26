import React from 'react'

const Video = props => {

    const { title, thumbnail, embed } = props

    let splitedEmbed = embed.split('\'')
    // console.log(splitedEmbed[5])

    const videoURL = `/player?video=${splitedEmbed[5]}`

    return (
        <a href={videoURL} className="group w-64 mx-4 my-4 flex flex-col items-start justify-start">
            <img className="sm:w-64" src={thumbnail} alt="Paraguay - Brazil"/>
            <p className="group-hover:underline text-white font-medium pl-1 mt-1">{title}</p>
        </a>
    )
}

export default Video