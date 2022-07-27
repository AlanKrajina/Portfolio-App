import React, { useState, useContext } from "react";
import ReactAudioPlayer from "react-audio-player";
import { styles } from "./musicPlayerStyles";
import { MediaQueryContext } from "../../App";

const MusicPlayer: React.FC = () => {
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  const { isHalfScreen, isDesktop } = useContext(MediaQueryContext);

  return (
    <div
      style={
        isDesktop
          ? {
              ...styles.MusicPlayerDiv,
              top: isHalfScreen ? 0 : "70px",
              right: isHalfScreen ? 0 : "-20px",
            }
          : {
              ...styles.MusicPlayerDiv,
              top: "40px",
              right: "-20px",
            }
      }
    >
      <div
        style={
          isHalfScreen
            ? styles.ToggleButtonDiv
            : { ...styles.ToggleButtonDiv, width: "7rem", fontSize: "0.9rem" }
        }
      >
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
