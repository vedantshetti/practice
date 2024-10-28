import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MarketingVisit from './MarketingVisit';
import NextPage from './NextPage'; // Create NextPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketingVisit />} />
        <Route path="/nextPage" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
