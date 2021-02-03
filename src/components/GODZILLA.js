import React, { useEffect, useState } from 'react';

import YouTube from 'react-youtube';
// https://github.com/tjallingt/react-youtube

const GODZILLA = (props) => {

    // hook to reset Epic state
    const { setEpic } = props;
    const [ done, setDone ] = useState(false);
    
    // Options for embedded YouTube player
    const opts = {
        height: '400',
        width: '640',
        playerVars: {
            controls: 0,
            autoplay: 1,
            disablekb: 1,
            fs: 0,
            modestbranding: 1,
            start: 77
        }
    };
    
    // Watch for change to done variable, 
    useEffect(() => {
        
        if (done) {
            setTimeout(()=> {
            setEpic(false); 
            }, 8000);
        }

    }, [done]);
                
    // <YouTube
    //     videoId={string}                  // defaults -> null
    //     id={string}                       // defaults -> null
    //     className={string}                // defaults -> null
    //     containerClassName={string}       // defaults -> ''
    //     opts={obj}                        // defaults -> {}
    //     onReady={func}                    // defaults -> noop
    //     onPlay={func}                     // defaults -> noop
    //     onPause={func}                    // defaults -> noop
    //     onEnd={func}                      // defaults -> noop
    //     onError={func}                    // defaults -> noop
    //     onStateChange={func}              // defaults -> noop
    //     onPlaybackRateChange={func}       // defaults -> noop
    //     onPlaybackQualityChange={func}    // defaults -> noop
    // />
    
    // <YouTube videoId="odM92ap8_c0" opts={opts} onReady={this._onReady} />

    function onPlayerReady(event) {
        event.target.playVideo();
    }
    
    function onPlayerPlay(event) {
      if (event.data && !done) {
          setTimeout(() => {
              event.target.stopVideo();
              setDone(true);
          }, 12000);
      }
    }
    
    function stopVideo() {
        player.stopVideo();
    }
    
    const godzillaMessage =
        <div className="GODZILLA-message fade-in fade-medium">
            <p>We apologize for the interuption</p>
            <p>We will now return to your regularly scheduled program</p>
            <p>Please do not be alarmed.</p>
        </div>;
    
    const godzillaVideo =
        <YouTube 
            videoId="odM92ap8_c0" 
            opts={opts}
            onReady={onPlayerReady}
            onPlay={onPlayerPlay}
        />;
    
    return(
        <div className="container GODZILLA-CANT-BE-CONTAINED fade-in fade-quick">
            <h1 className="GODZILLA-header">emergency broadcast system</h1>
            {done ? godzillaMessage : godzillaVideo}
        </div>
    )
}

export default GODZILLA;