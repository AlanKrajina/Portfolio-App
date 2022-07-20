import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { styles } from "./musicPlayerStyles";
import useMediaQuery from "../../hooks/use-mediaQuery";

const MusicPlayer: React.FC = () => {
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <div
      style={
        isDesktop
          ? styles.MusicPlayerDiv
          : { ...styles.MusicPlayerDiv, top: "95px" }
      }
    >
      <div style={styles.ToggleButtonDiv}>
        <i
          className={`fa fa-brands fa-${
            showPlayer ? "mixcloud" : "soundcloud"
          }`}
          style={{ color: showPlayer ? "#08fdd8" : "red" }}
        />
        <span onClick={() => setShowPlayer(!showPlayer)}>Player</span>
        <span
          style={{ color: showPlayer ? "#08fdd8" : "red", minWidth: "40px" }}
        >
          {showPlayer ? "ON" : "OFF"}
        </span>
      </div>
      {showPlayer && (
        <ReactAudioPlayer
          style={styles.Player}
          src="/song.ogg"
          autoPlay={false}
          loop={false}
          controls
        />
      )}
    </div>
  );
};

export default MusicPlayer;
