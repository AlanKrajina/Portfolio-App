import './Home.css';
import IntroSection from './Intro/IntroSection';
import ExperienceSection from './Experience/ExperienceSection';

const Home: React.FC = () => {
  return (
    <main className='home'>
      <IntroSection />
      <ExperienceSection />    
    </main>

/*    <BlogSection />
    <ContactSection /> */
  )
}

export default Home;