import './Home.css';
import IntroSection from './Intro/IntroSection';
import PortfolioSection from './Portfolio/PortfolioSection';

const Home: React.FC = () => {
  return (
    <main className='homeMain'>
      <IntroSection />
      <PortfolioSection />
    </main>

/*    <BlogSection />
    <ContactSection /> */
  )
}

export default Home;