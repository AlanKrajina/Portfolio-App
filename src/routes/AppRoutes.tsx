import { Routes , Route } from 'react-router-dom';
import About from '../components/About';
import Home from '../components/Home';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default AppRoutes;
