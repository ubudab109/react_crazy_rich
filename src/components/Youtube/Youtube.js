import YoutubePlayer from 'react-player/lib/players/YouTube'
import React from 'react';

function Youtube({url}){
    return (
        <YoutubePlayer url={url} />
    )
}

export default Youtube;