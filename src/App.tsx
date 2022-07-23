import React from "react";
import { styles } from "./appStyles";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import AnimatedCursor from "react-animated-cursor";
import useMediaQuery from "./hooks/use-mediaQuery";

export const MediaQueryContext = React.createContext(true);

const App: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <MediaQueryContext.Provider value={isDesktop}>
      <div style={styles.App}>
        <AnimatedCursor
          color="8, 253, 216"
          trailingSpeed={5}
          innerSize={5}
          outerSize={4}
        />
        <MusicPlayer />
        <Navbar />
        <AppRoutes />
      </div>
    </MediaQueryContext.Provider>
  );
};

export default App;
