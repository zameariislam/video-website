import React from 'react';

const Player = ({ video }) => {
    return (
        <iframe
            width="100%"
            class="aspect-video"
            src={video.link}
            title={video.title}
            frameBorder=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
        ></iframe>
    );
};

export default Player;