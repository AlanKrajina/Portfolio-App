import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {  
  return (
    <div className="app">
      <Navbar />
      <AppRoutes/>
    </div>
  );
}

export default App;
