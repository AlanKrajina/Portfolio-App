import "./Home.css";
import IntroSection from "./Intro/IntroSection";
import PortfolioSection from "./Portfolio/PortfolioSection";
import BlogSection from "./Blog/BlogSection";
import ContactSection from "./Contact/ContactSection";
import SummarySection from "./Summary/SummarySection";
import useMediaQuery from "../../hooks/use-mediaQuery";

const Home: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <main className="homeMain">
      <IntroSection isDesktop={isDesktop} />
      <SummarySection isDesktop={isDesktop} />
      <PortfolioSection isDesktop={isDesktop} />
      <BlogSection isDesktop={isDesktop} />
      <ContactSection isDesktop={isDesktop} />
    </main>
  );
};

export default Home;
