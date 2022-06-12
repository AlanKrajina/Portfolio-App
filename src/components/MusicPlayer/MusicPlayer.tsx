import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { styles } from "./musicPlayerStyles";

const MusicPlayer: React.FC = () => {
    const [showPlayer, setShowPlayer] = useState<boolean>(false);

  return (
    <div style={styles.MusicPlayerDiv}>
        <div style={styles.ToggleButtonDiv}>
            <i className={`fa fa-brands fa-${showPlayer ? 'soundcloud' : 'mixcloud'}`}/>
            <p style={styles.ToggleButton} onClick={() => setShowPlayer(!showPlayer)}>Sound</p>            
        </div>


        {showPlayer ? 
                <ReactAudioPlayer
                style={styles.Player}
                src="/song.ogg"
                autoPlay={false}
                controls
                />
        : ''}  
    </div>
  )
}

export default MusicPlayer;