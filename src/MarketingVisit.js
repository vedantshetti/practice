// MarketingVisit.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MarketingVisit = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');

  const handleNext = () => {
    navigate('/nextPage', { state: { marketingText: text } });
  };

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
        <h2>Area he visited yesterday for marketing</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder=""
          style={{
            width: '100%',
            height: '20px',
            padding: '10px',
            fontSize: '16px',
            marginTop: '10px',
          }}
        />
        <button
          onClick={handleNext}
          style={{
            marginTop: '15px',
            width: '105%',
            padding: '10px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MarketingVisit;
