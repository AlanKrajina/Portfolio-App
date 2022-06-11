import './Home.css';
import IntroSection from './Intro/IntroSection';
import PortfolioSection from './Portfolio/PortfolioSection';
import AboutSection from './About/AboutSection';

const Home: React.FC = () => {
  return (
    <main className='homeMain'>
      <IntroSection />
      <PortfolioSection />
      <AboutSection />
    </main>

/*    <BlogSection />
    <ContactSection /> */
  )
}

export default Home;