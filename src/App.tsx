import React from "react";
import { styles } from "./appStyles";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import AnimatedCursor from "react-animated-cursor";
import useMediaQuery from "./hooks/use-mediaQuery";

const isDesktop: boolean = true;
const isHalfScreen: boolean = true;
const isLargeScreen: boolean = true;

export const MediaQueryContext = React.createContext({
  isDesktop,
  isHalfScreen,
  isLargeScreen,
});

const App: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 430px)");
  const isHalfScreen = useMediaQuery("(min-width: 960px)");
  const isLargeScreen = useMediaQuery("(min-width: 1400px)"); // test

  return (
    <MediaQueryContext.Provider
      value={{ isDesktop, isHalfScreen, isLargeScreen }}
    >
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
