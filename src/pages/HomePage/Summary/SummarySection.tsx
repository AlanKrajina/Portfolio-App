import React, { useState } from "react";
import { styles } from "./summaryStyles";
import coding from "./gif/coding.gif";
import useScrollTrigger from "../../../hooks/use-scrollTrigger";
import "../../../helpers/animations.css";

interface Props {
  isDesktop: boolean;
}

const SummarySection: React.FC<Props> = ({ isDesktop }) => {
  const [showGif, setShowGif] = useState<boolean>(false);

  useScrollTrigger("summaryTitle", "Summary & Tech", "#summarySection", () =>
    setShowGif(true)
  );

  return (
    <div
      style={isDesktop ? styles.Section : { ...styles.Section, marginLeft: 0 }}
    >
      <p id="summaryTitle" className="titleTypewriter" style={styles.Title} />
      <div id="summarySection" style={styles.TextGifDiv}>
        <div style={styles.TextDiv}>
          <p style={styles.Text}>
            Portfolio App has been created for two main reasons. First one is to
            introduce myself, show my experience, previous work and overall
            skills I gained during my education and work. Second reason is to
            include and display latest technologies that a frontend React
            developer uses in his day-to-day job. I added as much tech as I
            could to make the app work in the best way possible and in the same
            time have a great user interface and design without making it too
            big.
          </p>
          <p style={styles.Text}>
            App consists of 5 parts that we can select on the navigation bar.
            These pages are Home, Skills, Work, Redux Game, Interview App and
            About.
          </p>
          <p style={styles.Text}>
            Home page includes multiple components like the intro section that
            user sees when starting the app with a cool typewriter design and
            particle effects in the background. If we scroll down we get this
            summary and then a small list of portfolio apps that I created
            during my work and school days. After these apps we see blogs
            created while studiying and at the bottom a contact form that can be
            easily used to get directly in contact with me by sending an email.
          </p>
          <p style={styles.Text}>
            My favourite part of the app is the Redux Game, game where you need
            to match funny meme cards. This game is made solely using Redux
            Toolkit. The latest and maybe the best state management tool for
            building React apps. The game consists of 2 parts. First one being
            the game itself and second being statistics. At any point of the
            game user can open statistics and see some cool stats regarding his
            current game. After game finishes he can start a new game while
            still keeping records of previous games that he can use for
            comparison.
          </p>
          <p style={styles.Text}>
            As mentioned before app uses all of the latest tech with some being:
          </p>
          <p style={styles.Text}>
            TypeScript for its static typing, interfaces and compilation
            advantages. ScrollTrigger from GSAP to trigger component animations
            when we get into view. EmailJS to send quick and simple emails from
            the contact section. Redux Toolkit for state management in the Redux
            Game. Great packages like recharts, react-globe,
            react-animated-cursor and react-audio-player. For styling app uses
            CSS in JS, Tailwind, and regular CSS as files or inline.
          </p>
        </div>
        <div style={styles.GifDiv}>
          {showGif && (
            <img
              style={styles.Gif}
              src={coding}
              alt="coding"
              className="animated fadeInUp"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
