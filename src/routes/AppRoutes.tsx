import { Routes , Route } from 'react-router-dom';
import About from '../components/Pages/About';
import Home from '../components/HomePage/Home';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default AppRoutes;
