import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';
import AnimatedCursor from "react-animated-cursor"

const App: React.FC = () => {  
  return (
    <div className="app">
      <AnimatedCursor color='8, 253, 216' trailingSpeed={5} innerSize={5} outerSize={4}/>
      <Navbar />
      <AppRoutes/>
    </div>
  );
}

export default App;
