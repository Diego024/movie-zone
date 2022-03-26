import React from 'react';
import Iframe from 'react-iframe';

const VideoFrame = ({url}) => {
    // console.log(url)
    return (
        <div className="flex align-center justify-center pt-8 pb-0">
            <Iframe
                url={url}
                frameBorder="0"
                width="660"
                height="650"
                allowFullScreen={true}
                allow="autoPlay fullScreen"
                styles={
                    {   
                        width: "100%",
                        height: "100%",
                        left: "0px", 
                        top: "0px", 
                        overflow:"hidden"
                    }
                }
                className='_scorebatEmbeddedPlayer_'
            />
        </div>
    )
}

export default VideoFrame;