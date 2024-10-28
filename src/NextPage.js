// NextPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const NextPage = () => {
  const location = useLocation();
  const marketingText = location.state?.marketingText || '';

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '400px', width: '100%' }}>
        <h2>Area he visited for marketing</h2>
        <p>{marketingText}</p>
      </div>
    </div>
  );
};

export default NextPage;
