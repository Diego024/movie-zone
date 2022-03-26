import React from 'react';
import '../assets/style.css';
import Search from '../components/Search';
import VideoFrame from '../components/VideoFrame'
import VideosContainer from '../components/VideosContainer';
import Video from '../components/Video'

const Player = () => {

    //Se busca en la URL los parámetros disponibles
    const params = new URLSearchParams(location.search);
    //Se obtienen los datos localizados por medio de las variables
    let videoURl = params.get('video');

    return (
        <div className="min-h-screen bg-gray-900 font-sans">
            <Search />
            {/* {console.log(videoURl)} */}
            <VideoFrame url={videoURl}/>
        </div>
    )
}


export default Player