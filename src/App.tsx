import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
