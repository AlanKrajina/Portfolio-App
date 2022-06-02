import './App.css';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {  return (
    <>
      <Navbar />
      <AppRoutes/>
    </>
  );
}

export default App;
