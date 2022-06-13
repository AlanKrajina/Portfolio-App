import './Home.css';
import IntroSection from './Intro/IntroSection';
import PortfolioSection from './Portfolio/PortfolioSection';
import ContactSection from './Contact/ContactSection';
import SummarySection from './Summary/SummarySection';

const Home: React.FC = () => {
  return (
    <main className='homeMain'>
      <IntroSection />
      <PortfolioSection />
      <SummarySection />
      <ContactSection />
    </main>
  )
}

export default Home;