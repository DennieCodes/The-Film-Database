import React from 'react';

const Splashscreen = () => {
    const lightScreenImage = "https://imgur.com/IDw720H.jpg";
    const darkScreenImage = "https://i.imgur.com/vGOL9HS.jpg";
    const imageAlt = "People sitting in a darkened theater";
    
    return (
        <div className="Splashscreen">
            <img className="Splashscreen-image" src={darkScreenImage} alt="{alt}" />
            <h1 className="Splashscreen-title fade-in fade-slow">The Film Database</h1>
        </div>
    )
};

export default Splashscreen;