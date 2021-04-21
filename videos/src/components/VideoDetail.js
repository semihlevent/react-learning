import React from 'react';


const VideoDetail = props => {
    const { video } = props;

    if (!video) {
        return <div>Select a video</div>
    }

    return (
        <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    );
}

export default VideoDetail;